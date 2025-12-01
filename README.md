This is a [Next.js](https://nextjs.org) project bootstrapped.

## Getting Started

> Node.js >= 20.0.0, use pnpm 

1. Create a `.env.local` file and provide your Klaviyo public key:
```
NEXT_PUBLIC_KLAVIYO_COMPANY_ID=your_public_key
```

2. Install dependencies
```
pnpm install
```

3. Run the development server (rewrites proxy Klaviyo’s `/services/login_with_shop/authorize` and `/login` calls to their SaaS endpoint so the script can finish booting without hammering your Next.js server):

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
