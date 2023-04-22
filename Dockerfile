FROM node:18-alpine

WORKDIR /app
RUN npm install pnpm -g
COPY package.json pnpm-lock.yaml /app/
RUN pnpm install
COPY . .
RUN pnpm run build
RUN npx prisma migrate deploy
CMD ["npm", "run", "start:migrate:prod"]
EXPOSE 3000