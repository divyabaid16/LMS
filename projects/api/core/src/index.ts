// Local imports
import { app, httpServer } from './server/app'
import { middlewares } from './server/middlewares'
import './server/database'
// import { endpoint } from './server/endpoint'
import { start } from './server/start'
  // boot
  ; (async function () {
    // middlewares
    middlewares(app)

    // endpoint
    // endpoint(app, httpServer)

    // start
    await start(app, httpServer)
  })()
