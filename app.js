# main - Dockerfile for awesome-companies
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:18-alpine AS runtime
WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY . .

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

USER nextjs

EXPOSE 3000
ENV PORT 3000
ENV NODE_ENV production

CMD ["node", "index.js"]

# Additional Implementation 1760488064

# Additional Implementation 1760488064

# Additional Implementation 1760488064

# Additional Implementation 1760488064

# Additional Implementation 1760488064

# Code Update 1760488064-19840

# Additional Implementation 1760488064

# Additional Implementation 1760488064

# Code Update 1760488064-5349

# Code Update 1760488064-16121

# Additional Implementation 1760488064

# Code Update 1760488065-17281

# Code Update 1760488065-18085

# Additional Implementation 1760488065

# Code Update 1760488065-8505

# Additional Implementation 1760488065

# Additional Implementation 1760488065

# Code Update 1760488065-2333

# Code Update 1760488065-3682

# Additional Implementation 1760488065

# Code Update 1760488065-12382

# Additional Implementation 1760488065

# Additional Implementation 1760488065

# Code Update 1760488066-20926
