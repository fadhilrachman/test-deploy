# Stage 1: Building the code
FROM node:18 as build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock/pnpm-lock.yaml)
COPY package*.json ./
# Uncomment the next line if you use yarn or pnpm
# COPY yarn.lock ./ OR COPY pnpm-lock.yaml ./

# Install dependencies
RUN npm install
# Uncomment the next line if you use yarn or pnpm
# RUN yarn install OR RUN pnpm install

# Copy the rest of the code
COPY . .

# Build the project
RUN npm run build
# Uncomment the next line if you use yarn or pnpm
# RUN yarn build OR RUN pnpm build

# Stage 2: Serve the app
FROM node:18

# Set the working directory
WORKDIR /app

# Copy the build from the previous stage
COPY --from=build /app/.next ./.next
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json

# Start the app
CMD ["npm", "start"]
# Uncomment the next line if you use yarn or pnpm
# CMD ["yarn", "start"] OR CMD ["pnpm", "start"]
