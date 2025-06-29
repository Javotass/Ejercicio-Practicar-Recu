import { ObjectId, Collection } from "mongodb";
import { MuseumModel } from "./types.ts";
import {
  getCityData,
  getPhoneData,
  getTemperature,
  getWorldTime,
} from "./utils.ts";
import { GraphQLError } from "graphql";

type Context = { Museums: Collection<MuseumModel> };

export const resolvers = {
  Museum: {
    id: (m: MuseumModel) => m._id!.toString(),
    address: (m: MuseumModel) => `${m.address}, ${m.city}, ${m.country}`,
    localtime: async (m: MuseumModel) => await getWorldTime(m.latitude, m.longitude),
    temperature: async (m: MuseumModel) => await getTemperature(m.latitude, m.longitude),
  },

  Query: {
    getMuseum: async (_: unknown, { id }: { id: string }, ctx: Context) =>
      await ctx.Museums.findOne({ _id: new ObjectId(id) }),

    getMuseums: async (_: unknown, { city }: { city: string }, ctx: Context) =>
      await ctx.Museums.find({ city }).toArray(),
  },

  Mutation: {
    deleteMuseum: async (_: unknown, { id }: { id: string }, ctx: Context) => {
      const res = await ctx.Museums.deleteOne({ _id: new ObjectId(id) });
      return res.deletedCount === 1;
    },

    addMuseum: async (
      _: unknown,
      { name, address, city, phone }: { name: string; address: string; city: string; phone: string },
      ctx: Context
    ) => {
      const exists = await ctx.Museums.findOne({ phone });
      if (exists) throw new GraphQLError("Phone number already registered");

      const phoneData = await getPhoneData(phone);
      if (!phoneData.is_valid) throw new GraphQLError("Invalid phone");

      const cityData = await getCityData(city);
      const match = cityData.find((c) => c.country === phoneData.country);
      if (!match) throw new GraphQLError("City not found in phone's country");

      const { latitude, longitude, country } = match;
      const { insertedId } = await ctx.Museums.insertOne({
        name,
        address,
        city,
        phone,
        latitude,
        longitude,
        country,
      });

      return { _id: insertedId, name, address, city, phone, latitude, longitude, country };
    },
  },
};
