import {config} from '@keystone-6/core'
import {PrismaBetterSqlite3} from '@prisma/adapter-better-sqlite3'
import {lists} from './schema'
import {withAuth, session} from './auth'
import 'dotenv/config'

import extendApp from './extensions'

const port = process.env.PORT ? parseInt(process.env.PORT) : 3000

export default withAuth(
  config({
    db: {
      provider: 'sqlite',
      prismaClientOptions: () => ({
        adapter: new PrismaBetterSqlite3({url: process.env.DB_URL!})
      })
    },
    lists,
    session,
    server: {
      cors: {origin: [process.env.CLIENT_URL!], credentials: true},
      port: port,
      extendExpressApp: app => extendApp(app)
    }
  })
)
