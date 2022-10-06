FROM node:lts as dependencies
WORKDIR /web
COPY package.json package-lock.json ./
RUN npm install

FROM node:lts as builder
WORKDIR /web
COPY . .
COPY --from=dependencies /web/node_modules ./node_modules
RUN npm run build

FROM node:lts as runner
WORKDIR /web
ENV NODE_ENV production
# If you are using a custom next.config.js file, uncomment this line.
# COPY --from=builder /my-project/next.config.js ./
COPY --from=builder /web/public ./public
COPY --from=builder /web/.next ./.next
COPY --from=builder /web/node_modules ./node_modules
COPY --from=builder /web/package.json ./package.json

EXPOSE 3000
CMD ["npm", "start"]