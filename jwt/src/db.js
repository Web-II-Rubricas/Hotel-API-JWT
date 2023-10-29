import {createpool} from 'mysql2/promise'

import{
  DB_HOST,
  usersdb,
  DB_PASSWORD,
  DB_USER,
  DB_PORT
} from './config.js'

export const pool = createpool({
  user: DB_USER,
  password: DB_PASSWORD,
  host: DB_HOST,
  port: DB_PORT,
  database: usersdb
});