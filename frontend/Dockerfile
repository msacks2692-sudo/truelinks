# Stage 1: Build the React application
FROM node:16-alpine as build

WORKDIR /app

# Copy package.json
COPY package.json ./

# Install dependencies
RUN npm install
FROM node:20-alpine as build

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy package.json and pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Install dependencies using pnpm
RUN pnpm install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve the application from a lightweight web server
FROM nginx:1.21.6-alpine
RUN pnpm run build

# Stage 2: Serve the application from a lightweight web server
FROM nginx:alpine

# Copy the build output from the build stage
COPY --from=build /app/build /usr/share/nginx/html

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
