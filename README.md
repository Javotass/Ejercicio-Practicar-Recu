🧪 Examen Tipo - API GraphQL de Museos
🎯 Objetivo
Desarrollar una API en GraphQL utilizando Deno, Apollo Server y MongoDB Atlas, que permita gestionar una lista de museos.

📌 Requisitos
🔧 Mutaciones
addMuseum (3 puntos):
Permite añadir un nuevo museo. Recibe los siguientes parámetros:

name: Nombre del museo (String), ej. "Museo del Prado"

address: Dirección del museo (String), ej. "Calle Ruiz de Alarcón 23"

city: Ciudad donde se encuentra (String), ej. "Madrid"

phone: Número de teléfono con prefijo nacional (String), ej. "+34913221100"

⚠️ Requisitos:

Validar el número de teléfono con la API de API Ninjas.

No permitir duplicados por número de teléfono.

deleteMuseum (2 puntos):
Elimina un museo por su id.
Devuelve true si se ha eliminado correctamente o false si no existe.

🔍 Consultas
getMuseum (3 puntos):
Obtiene los detalles de un museo por su id:

id: ID generado por MongoDB

name: Nombre del museo

address: Dirección completa (formato: "Calle, Ciudad, País")

phone: Teléfono

temperature: Temperatura actual (API de Clima de API Ninjas)

localtime: Hora local (API de Zona Horaria de API Ninjas)

getMuseums (2 puntos):
Devuelve una lista de museos filtrados por ciudad:

Recibe: city: String

Devuelve: Lista de museos con los campos definidos en getMuseum

✅ Notas importantes
La validación del teléfono y la obtención de clima, país y hora se realiza exclusivamente con APIs gratuitas de API Ninjas.

No se permite el uso de endpoints premium.

No se permite más de un museo con el mismo número de teléfono.
