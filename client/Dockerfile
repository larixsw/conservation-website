FROM node:alpine AS build

WORKDIR /app

COPY . .
RUN npm ci
RUN npm run build

FROM nginx:alpine

COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]