FROM node:20

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Install nodemon globally
RUN npm install -g nodemon

# Copy all backend files
COPY . .

# Generate Prisma Client
RUN npx prisma generate

# RUN npx prisma migrate dev --name init
# Expose backend port
EXPOSE 5000

# Run migrations and start the server with nodemon
CMD ["sh", "-c", "npx prisma migrate dev --name init && tsc && nodemon --watch src --ext ts --exec \"npm run build && node dist/index.js\""]
