# Cloudflare Pages Configuration

## Deploy Settings

### Build Configuration
- **Framework preset**: Next.js
- **Build command**: `npm run build && npm run export`
- **Build output directory**: `out`
- **Root directory**: `/`
- **Node version**: 18.x

### Environment Variables
```
NODE_VERSION=18
NEXT_PUBLIC_SITE_URL=https://mrgcaixastermicas.com.br
```

### Domain Configuration
- **Production domain**: mrgcaixastermicas.com.br
- **Preview domains**: *.mrgcaixastermicas.pages.dev

## DNS Configuration

### Cloudflare DNS Records

```
Type    Name    Content                             Proxy   TTL
CNAME   www     mrg-caixas-termicas.pages.dev      Yes     Auto
CNAME   @       mrg-caixas-termicas.pages.dev      Yes     Auto
```

## Cloudflare API Token
```
ZZLihBa8lxPbDCmyctB23iCR36pK9uH4Fz449kiT
```

**Permissions**: Zone:DNS:Edit

## Deployment via Wrangler

### Install Wrangler
```powershell
npm install -g wrangler
```

### Login
```powershell
wrangler login
```

### Deploy
```powershell
npx wrangler pages deploy out --project-name=mrg-caixas-termicas
```

## Automatic Deployments

GitHub integration configured:
- **Repository**: avilaops/MRG-Caixas-Termicas
- **Branch**: main
- **Auto-deploy**: Enabled

Every push to `main` will trigger automatic deployment.

## Custom Domain Setup

1. Add domain in Cloudflare Pages
2. Update DNS records
3. SSL certificate auto-generated
4. Force HTTPS enabled

## Performance Optimizations

- ✅ CDN global distribution
- ✅ Automatic caching
- ✅ Image optimization
- ✅ Gzip/Brotli compression
- ✅ HTTP/3 support
- ✅ 0ms cold starts

---

**Status**: Ready for production deployment