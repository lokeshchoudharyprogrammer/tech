# Use Node.js 20 as the base image
FROM node:20

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
COPY ./prisma ./prisma
RUN npm install
RUN npx prisma generate

# Copy the rest of the application files
COPY . .

# Build the application (if using TypeScript or a build step)
RUN npm run build

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["node", "dist/index.js"]