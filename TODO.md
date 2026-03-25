# UniSphere Vercel Fix TODO

## Status: Starting Step 1/5

**Steps:**
- [x] Understand files (package.json, api.js, vercel.json)
- [x] 1. Updated package.json (use package-new.json)
- [x] 2. Created frontend/vercel.json

- [ ] 3. Local test: `cd UNISPHERE-main/frontend && npm ci && npm run build`
- [ ] 4. Git commit/push, Vercel redeploy
- [ ] 5. Verify: Visit Vercel URL, check console for [Demo Mode]

**Expected Result**: Live static site at Vercel with full UI, mock data (login w/ demo users, all pages work).

**Post-deploy**: Backend needs separate service if real data needed.