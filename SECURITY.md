# Security Policy

## Supported Versions

| Version | Supported |
|---------|-----------|
| Latest  | ✅ Yes    |

## Reporting a Vulnerability

If you discover a security vulnerability in this project, **please do not open
a public GitHub issue**. Instead, report it responsibly:

1. **Email**: security@nexuspartners.com
2. **Response time**: We will acknowledge your report within **48 hours** and
   provide a resolution timeline within **5 business days**.
3. **Disclosure**: We follow a coordinated disclosure policy. Please allow us
   reasonable time to investigate and remediate before any public disclosure.

## Security Best Practices Applied

- HTTP security headers are set in `index.html` (CSP, X-Frame-Options, X-Content-Type-Options).
- All dependencies are pinned to exact versions and checked with `npm audit` in CI.
- The `validate.yml` workflow runs lint and static-analysis checks on every pull request.
- Access to deploy to production (GitHub Pages) requires a merged pull request to `main`.

## Scope

This policy covers the website code in this repository. Third-party services
and infrastructure are out of scope but are subject to their own security
programmes.
