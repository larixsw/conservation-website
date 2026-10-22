import express from 'express'
import {imageStoragePath, imageRoute} from './storage'

export default function extendApp(app: express.Express) {
  app.use(imageRoute, express.static(imageStoragePath, {index: false}))
}
