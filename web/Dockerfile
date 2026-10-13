# The website and the relay, in one small image.
#
#   docker build -t crispo-web .
#   docker run -d -p 8080:8080 -v crispo-data:/data -e RELAY_TILL_KEY=... crispo-web
#
# Put HTTPS in front of it (Caddy, a platform's load balancer, Cloudflare) — the till
# refuses to talk to a relay over plain HTTP on the internet, because its key travels
# in a header.

FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build && npm test

FROM node:22-alpine
WORKDIR /app
ENV NODE_ENV=production \
    PORT=8080 \
    RELAY_DATA_DIR=/data
# The relay has no runtime dependencies — only its own files and the built site.
COPY --from=build /app/package.json ./
COPY --from=build /app/relay ./relay
COPY --from=build /app/dist ./dist
RUN mkdir -p /data && chown node:node /data
VOLUME /data
USER node
EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=3s CMD wget -qO- http://127.0.0.1:8080/api/health || exit 1
CMD ["node", "relay/server.mjs"]
