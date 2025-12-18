# Auth0 Organizations React App

Multi-tenant authentication with Auth0 Organizations.

## Setup

### Prerequisites

- Node.js
- Auth0 account

### Auth0 Configuration

1. Create Auth0 account at auth0.com
2. Enable Organizations in dashboard
3. Create organizations and add users
4. Create new Application (Single Page Web Application)
5. Configure Application Settings:
   Allowed Callback URLs: http://localhost:3000/callback
   Allowed Logout URLs: http://localhost:3000
   Allowed Web Origins: http://localhost:3000
6. Enable Organizations in application settings
7. Copy Domain and Client ID

### Installation

```bash
npm install
cp .env.example .env
```

Edit .env with your Auth0 credentials:
```
VITE_AUTH0_DOMAIN=
VITE_AUTH0_CLIENT_ID==
VITE_AUTH0_AUDIENCE=
VITE_AUTH0_CALLBACK_URL=http://localhost:3000/callback
```

### Run

```bash
npm run dev
```

Open http://localhost:3000

# Multi-Org
