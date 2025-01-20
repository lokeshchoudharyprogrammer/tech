FROM node:22-alpine

WORKDIR /app

COPY . .

RUN npm install
# Build the application
RUN npx tsc
# Generate Prisma client (if applicable)
RUN npx prisma generate

ENV 

EXPOSE 3000

CMD ["node", "dist/index.js"]


