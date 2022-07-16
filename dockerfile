# Base image
FROM node
# Make folder to put our files in

# Set working directory so that all subsequent command runs in this folder
WORKDIR /main
# Copy package json and install dependencies
COPY package*.json ./
RUN npm install
# Copy our app
COPY . .
# Expose port to access server
ENV PORT=3000
EXPOSE 8080
# Command to run our app
CMD [ "npm", "start"]