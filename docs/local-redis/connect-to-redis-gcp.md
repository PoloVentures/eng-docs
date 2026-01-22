# Setting Up a Local Redis Tunnel to GCP
This guide will help you connect to a Redis instance running on Google Cloud Platform (GCP) using SSH tunneling.

## Start the VM in Compute Engine:
```bash
gcloud compute instances start redis-tunnel-vm --project=<PROJECT_ID> --zone=<ZONE>
```

## Start the GCP tunnel VM
```bash
gcloud compute instances start redis-tunnel-vm --project=<PROJECT_ID> --zone=<ZONE>
```

## SSH into the GCP VM instance where your Redis server is running. You can do this via the GCP Console or using the gcloud command-line tool.

```bash
gcloud compute ssh redis-tunnel-vm --project=<PROJECT_ID> --zone=<ZONE> --ssh-flag="-N -L <REDIS_IP>:6379"
```

## (Not needed if you don't need to connect to the local app) Run the app locally, ensuring it connects to Redis at `localhost:6379`.

```bash
$env:REDIS_HOST="localhost"; $env:REDIS_PORT="6379"; npm run dev
```

## Run redis-cli in docker to see what's inside your GCP Redis instance:

```bash
docker run -it --rm redis redis-cli -h host.docker.internal -p 6379
```

## Stop the GCP VM instance when done:
```bash
gcloud compute instances stop redis-tunnel-vm --project=<PROJECT_ID> --zone=<ZONE>
```

## See all keys in the Redis instance
```bash
KEYS *
```

## Delete a key to invalidate cache:
```bash
del mykey
```

## Inspecting Specific Values

Once you have the name of a key from the previous step, you need to "peek" inside it. The command depends on the type of data.

**Check the type first:**
```bash
TYPE [your_key_name]
```

**If the type is "string":**
```bash
GET [your_key_name]
```

**If the type is "hash" (common for objects/user profiles):**
```bash
HGETALL [your_key_name]
```

**If the type is "list":**
```bash
LRANGE [your_key_name] 0 -1
```
