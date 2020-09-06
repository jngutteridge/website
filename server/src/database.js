import knex from 'knex'

const database = knex({
  client: process.env.DATABASE_CLIENT,
  connection: {
    user: process.env.DATABASE_USER,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DATABASE
  }
})

export default database 
