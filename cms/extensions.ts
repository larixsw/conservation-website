import express from 'express'
import cors from 'cors'
import {Readable} from 'stream'
import {imageStoragePath, imageRoute} from './storage'

/* parses a multipart request using node's built-in fetch implementation */
const readFormData = (req: express.Request): Promise<FormData> =>
  new Request('http://localhost', {
    method: 'POST',
    headers: {'content-type': req.headers['content-type'] ?? ''},
    body: Readable.toWeb(req) as ReadableStream,
    duplex: 'half'
  } as RequestInit).formData()

export default function extendApp(app: express.Express) {
  app.use(imageRoute, express.static(imageStoragePath, {index: false}))

  const corsOpts: cors.CorsOptions = {
    origin: (origin, callback) => {
      if (origin === process.env.CLIENT_URL) {
        callback(null, true)
      } else {
        callback(new Error('Origin not allowed by CORS'))
      }
    }
  }

  /* placeholders for the old mail routes, which log submissions instead of emailing them */
  app.post('/send-message', cors(corsOpts), express.json(), (req, res) => {
    console.log('📧 Message received:', req.body)
    res.sendStatus(200)
  })

  app.post('/send-multipart-message', cors(corsOpts), async (req, res) => {
    try {
      const form = await readFormData(req)
      const fields = [...form.entries()].map(([key, value]) =>
        typeof value === 'string' ? `${key}: ${value}` : `${key}: ${value.name} (${value.size} bytes)`
      )
      console.log(`📧 Multipart message received:\n${fields.join('\n')}`)
      res.sendStatus(200)
    } catch (error) {
      console.log(`📧 Invalid multipart message: ${(error as Error).message}`)
      res.sendStatus(400)
    }
  })
}
