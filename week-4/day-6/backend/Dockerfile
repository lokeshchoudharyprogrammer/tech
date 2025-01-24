# Use Node.js LTS as the base image
FROM node:20

# Set working directory inside the container
WORKDIR /app

# Copy dependency files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Install TypeScript and Nodemon globally
RUN npm install -g typescript nodemon

# Copy the Prisma schema
COPY prisma ./prisma

# Run Prisma generate to generate the client
RUN npx prisma generate

# Copy the rest of the application code
COPY . .

# Expose the backend port
EXPOSE 5000

# Run the dev script
CMD ["npm", "run", "dev"]
