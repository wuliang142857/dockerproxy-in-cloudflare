# Docker Proxy in Cloudflare

A Cloudflare Worker that acts as a proxy for Docker registries, enabling faster and more reliable access to Docker Hub images.

## Features

- Proxy requests to Docker registries through Cloudflare's edge network
- Reduce latency and improve reliability for Docker image pulls
- Easy to deploy on Cloudflare Workers

## Prerequisites

- A Cloudflare account
- Node.js and npm installed
- Wrangler CLI for deployment

## Installation

1. Clone this repository:
```bash
git clone <repository-url>
cd dockerproxy-in-cloudflare
```

2. Install dependencies:
```bash
npm install
```

## Configuration

The proxy configuration is defined in `src/index.js`. You can modify the `registries` object to add or change registry endpoints:

```javascript
const registries = {
    'docker': 'https://jghapxhongqm.ap-northeast-1.clawcloudrun.com',
};
```

## Usage

### Development

Run the worker locally for testing:

```bash
npm run dev
```

### Deployment

Deploy to Cloudflare Workers:

```bash
npm run deploy
```

### Using the Proxy

Once deployed, you can use the worker URL as a proxy for Docker registry requests. All requests will be forwarded to the configured registry endpoint.

## How It Works

The worker intercepts incoming requests and:

1. Parses the request URL path and query parameters
2. Constructs a proxy URL using the configured registry endpoint
3. Forwards the request with the same method, headers, and body
4. Returns the response from the upstream registry

## License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
