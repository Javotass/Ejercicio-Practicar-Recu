# 🏛️ API GraphQL de Museos

Este proyecto implementa una API en **GraphQL** para gestionar una lista de museos, utilizando **Deno**, **Apollo Server** y **MongoDB Atlas**.  
La API permite añadir, consultar y eliminar museos, validando los datos mediante **API Ninjas**.

---

## 🧪 Enunciado del Examen

### 🎯 Objetivo

Desarrollar una API en GraphQL que permita gestionar una lista de museos.

---

### 📌 Requisitos

#### 🔧 Mutaciones

- **`addMuseum`** (3 puntos):  
  Añade un nuevo museo con los siguientes campos:
  - `name`: Nombre del museo (String), ej. `"Museo del Prado"`
  - `address`: Dirección (String), ej. `"Calle Ruiz de Alarcón 23"`
  - `city`: Ciudad (String), ej. `"Madrid"`
  - `phone`: Teléfono con prefijo nacional (String), ej. `"+34913221100"`

  ⚠️ Requisitos:
  - Validar que el teléfono es válido mediante API Ninjas.
  - No permitir duplicados por número de teléfono.

- **`deleteMuseum`** (2 puntos):  
  Elimina un museo por su `id`.  
  Devuelve `true` si se ha eliminado correctamente, `false` en caso contrario.

---

#### 🔍 Consultas

- **`getMuseum`** (3 puntos):  
  Consulta un museo por su ID:
  - `id`
  - `name`
  - Dirección completa: `"address, city, country"`
  - `phone`
  - `temperature`: Temperatura actual de la ciudad
  - `localtime`: Hora local en formato `"hh:mm"`

- **`getMuseums`** (2 puntos):  
  Devuelve todos los museos registrados en una ciudad:
  - Recibe: `city: String`
  - Devuelve: Lista con todos los campos definidos en `getMuseum`

---

### ✅ Notas importantes

- Se utiliza exclusivamente la versión gratuita de API Ninjas para:
  - Validación de teléfono
  - Información meteorológica
  - Hora local
- No se permite duplicar números de teléfono.
- La información geográfica (latitud, longitud, país) también se obtiene de API Ninjas.

---

## 🚀 Instalación y uso

### 1. Clonar repositorio

```bash
git clone https://github.com/tuusuario/api-museos-graphql.git
cd api-museos-graphql
