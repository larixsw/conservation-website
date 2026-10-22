import fs from 'fs'
import path from 'path'
import {pipeline} from 'stream/promises'
import type {StorageStrategy} from '@keystone-6/core/types'

const port = process.env.PORT ? parseInt(process.env.PORT) : 3000
const apiUrl = process.env.API_URL || `http://localhost:${port}`

export const imageRoute = '/images'
export const imageStoragePath = path.resolve('storage/localImages')

/* stores images on disk, served by the static route in extensions.ts */
export const localImages: StorageStrategy<any> = {
  async put(key, stream) {
    await fs.promises.mkdir(imageStoragePath, {recursive: true})
    await pipeline(stream, fs.createWriteStream(path.join(imageStoragePath, key)))
  },
  async delete(key) {
    await fs.promises.rm(path.join(imageStoragePath, key), {force: true})
  },
  url(key) {
    return `${apiUrl}${imageRoute}/${key}`
  }
}
