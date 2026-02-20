# Spice Aura Foods — Website

A production-ready Next.js + Tailwind website for Spice Aura Foods with:
- Home, Products, About, Quote, Contact, Privacy, Terms
- Working lead forms via Resend (recommended) using `/api/lead`
- Product catalog PDF included at `public/catalog/Spice-Aura-Product-Catalog.pdf`

## Run locally
1. Install Node.js 18+ (recommended 20+)
2. In this folder:
   ```bash
   npm install
   cp .env.example .env.local
   # add your RESEND_API_KEY
   npm run dev
   ```
3. Open http://localhost:3000

## Email setup (Resend)
- Create a Resend account and generate an API key.
- Put it in `.env.local` as `RESEND_API_KEY=...`
- For best deliverability, verify your domain in Resend and set:
  - `RESEND_FROM_EMAIL=Spice Aura <noreply@spiceaurafoods.com>`

## Deploy (Vercel)
1. Push this project to GitHub
2. Import into Vercel
3. Add environment variables in Vercel Project Settings:
   - `RESEND_API_KEY`
   - `LEADS_TO_EMAIL`
   - `RESEND_FROM_EMAIL`
4. Deploy

## Domain
After deploying, connect your domain in Vercel:
- Add domain: `spiceaurafoods.com` and/or `www.spiceaurafoods.com`
- Update DNS at your registrar (Namecheap/GoDaddy) as Vercel instructs.
