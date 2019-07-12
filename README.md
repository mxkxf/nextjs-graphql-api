# Tiny GraphQL API with Next.js v9

## Installation

Clone the repository:

```bash
git clone git@github.com:mikefrancis/nextjs-9-graphql-api.git
cd nextjs-9-graphql-api
```

Install the dependencies:

```bash
yarn
```

## Development

Either use **next.js** for development:

```bash
API_URL=http://localhost:3000 yarn next dev
```

or use Zeit's **now** development command:

```bash
API_URL=http://localhost:3000 now dev
```

N.B: if you are using a different hostname and/or port, be sure to change `API_URL` to the root of the server which next/now boots.

## Deployment

```bash
now -e API_URL=http://path/to/deployment
```
