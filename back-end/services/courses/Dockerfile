# Uses node version 22 as the base image
FROM node:22

# Goes to app directory (tell to Docker that our code is inside that folder)
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of our app into the container
COPY . .

# Environment variable settings
ENV PORT=8000

# Expose the port so our computer can use it
EXPOSE 8000

# Run the app
CMD ["npm", "start"]