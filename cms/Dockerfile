FROM node:alpine AS base

RUN apk add --no-cache openssl
WORKDIR /app

FROM base AS build

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