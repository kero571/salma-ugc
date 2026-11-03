# Salma – Portfolio (Next.js 14 + Tailwind)

```bash
npm install
cp .env.example .env.local    # SITE_URL, WHATSAPP (أرقام بس), INSTAGRAM, TIKTOK
npm run dev
npm run build && npm start
npm audit
```

- المحتوى كله في `lib/data.ts` (الأرقام، الخدمات، الريلز، البراندات، الآراء).
- صور الريلز: حط الصورة في `public/images/reels/` واكتب مسارها في `poster` + رابط الريل في `href`.
- الأمان: الـ headers (CSP / HSTS / X-Frame-Options ...) في `next.config.mjs`. لو ضفت خدمة خارجية (فيديو، تحليلات) لازم تضيف الدومين بتاعها في الـ CSP.
- GEO/SEO: `public/llms.txt` + JSON-LD في `lib/jsonld.ts` + `app/robots.ts` (بيسمح لـ AI crawlers).
