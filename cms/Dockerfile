FROM node:alpine AS base

RUN apk add --no-cache openssl
WORKDIR /app

# the build output is platform-independent, so build natively instead of under qemu,
# where prisma's wasm schema engine returns corrupted output for arm64
FROM --platform=$BUILDPLATFORM node:alpine AS build

RUN apk add --no-cache openssl
WORKDIR /app

COPY . .
RUN npm ci
RUN npm run build

FROM base

ENV NODE_ENV=production

COPY package*.json schema.prisma prisma.config.ts ./

# skip the keystone postinstall build, but still build the sqlite driver and fetch prisma's migration engine
RUN npm ci --omit=dev --ignore-scripts
RUN npm rebuild better-sqlite3 @prisma/engines

COPY migrations ./migrations
COPY --from=build /app/.keystone ./.keystone

EXPOSE 3000

CMD ["npm", "start"]