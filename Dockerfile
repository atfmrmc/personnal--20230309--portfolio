ARG NODE_VERSION=22.15.1
################################################################################
# 1) Builder for both dev & prod
FROM node:${NODE_VERSION}-alpine AS builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build                    # produces ./dist

################################################################################
# 2) Dev image (fast rebuilds, hot-reload)
FROM builder  AS dev
ENV NODE_ENV=development
# override the entrypoint to run vite (comes from devDeps)
CMD ["npm","run","dev"]

################################################################################
# 3) Production image (static files via nginx)
FROM nginx:stable-alpine AS prod
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx","-g","daemon off;"]
