# Use Node.js as the base image
FROM node:20

WORKDIR /app

# Copy files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app files
COPY . .

# Expose the frontend port and start the app
EXPOSE 3000
CMD ["npm", "start"]
