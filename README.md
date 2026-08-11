# Ahmad Qadafi — DevOps Portfolio

Source for [akqadafi.com](https://akqadafi.com), a cloud engineering portfolio focused on secure AWS infrastructure, Terraform, automation, observability, and validation evidence.

## Stack

- React 19 and TypeScript
- vinext / Vite
- Cloudflare-compatible production runtime
- GitHub Actions for build and rendered-content checks

## Local development

```bash
npm ci
npm run dev
```

The local site is available at `http://localhost:3000`.

## Validation

```bash
npm run build
node --test tests/rendered-html.test.mjs
```

## Featured work

- [Secure AWS Application Platform](https://github.com/Akqadafi/aws-secure-application-platform)
- [Multi-Region Data Residency Platform](https://github.com/Akqadafi/aws-multi-region-data-residency-platform)
- [Familiar: Local Automation Server](https://github.com/Akqadafi/familiar-second-brain)
