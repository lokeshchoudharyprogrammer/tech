# Use Node.js LTS version as the base image
FROM node:16

# Set working directory
WORKDIR /app

# Copy dependency files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy all project files
COPY . .

# Expose the React development server's default port
EXPOSE 3000

# Start the React development server
CMD ["npm", "start"]
