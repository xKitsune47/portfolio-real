# Build stage
FROM node:22-alpine AS build

WORKDIR /app

# Install dependencies first to maximize Docker layer caching.
COPY package*.json ./
RUN npm ci

# Build the app.
COPY . .
RUN npm run build

# Runtime stage
FROM nginx:1.27-alpine AS runtime

# Replace default nginx config with SPA-friendly config.
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built static files from the build stage.
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
