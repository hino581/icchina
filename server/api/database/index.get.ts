import { defineEventHandler, getQuery } from 'h3';
export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const tableName = query.table as string;
  const pg = await import('pg')
  const Client = pg.default.Client // default から Client を取得

  // PostgreSQL クライアントの設定
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  })

  await client.connect()

  // クエリを実行
  const res = await client.query(`SELECT * FROM ${tableName}`)

  await client.end()

  return res.rows
})
