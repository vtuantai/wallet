# Stage 1: Build Stage
FROM node:20 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Angular application
RUN npm run build --prod

# Debugging: List the contents of /app and /app/dist
RUN ls -la /app && ls -la /app/dist

# Stage 2: Production Stage
FROM nginx:1.25

# Copy the built Angular files from the build stage to Nginx
COPY --from=build /app/dist/fe /usr/share/nginx/html

# Expose the default nginx port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
