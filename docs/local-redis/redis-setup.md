---
sidebar_position: 1
---

# Local Redis Setup
Open your terminal in the directory containing the docker-compose.yml file and run:

`docker compose up -d`

The code already has the right defaults! No .env.local changes needed.

## Access Redis GUI
Open your browser and navigate to http://localhost:8001 to manage your keys visually.

## Access Redis CLI
To run commands directly, use:

`docker exec -it local-redis redis-cli`

## Useful Maintenance Commands
### Check Logs
`docker compose logs -f redis`
### Stop Services
`docker compose stop`
### Wipe Everything (including data)
`docker compose down -v` 
(The -v flag is crucial as it removes the persistent volume).

## Redis file
``` yaml
services:
  redis:
    image: redis/redis-stack:latest
    container_name: local-redis
    restart: always
    ports:
      - "6379:6379"   # Redis standard port
      - "8001:8001"   # Redis Insight GUI
    environment:
      - REDIS_ARGS=--appendonly yes  # Enables persistence
    volumes:
      - redis_data:/data

volumes:
  redis_data:
    driver: local
```

### Key Components Explained
- **Persistence (--appendonly yes):** 
By default, Docker containers are ephemeral. This flag ensures that every write operation is logged so that your data survives container restarts or machine reboots.
- **Volumes (redis_data:/data):** This maps a physical location on your host machine to the container’s internal storage. Without this, even with "appendonly" enabled, the data would vanish if the container was deleted.
- **Health Checks (Best Practice):** In a larger 2025 development workflow, you should eventually add a healthcheck block to ensure other services (like your API) only start once Redis is fully "Ready".
- **Image Choice:** Using redis/redis-stack is highly recommended for 2025 over the "bare" redis image because it includes modern modules like RedisSearch and RedisJSON out of the box, which are standard for modern app development