import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { profile } from './src/data/portfolio.ts';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'SITE_');
  const configuredUrl = process.env.SITE_URL || env.SITE_URL;
  const siteUrl = configuredUrl ? new URL(configuredUrl) : undefined;
  if (
    siteUrl &&
    (!['http:', 'https:'].includes(siteUrl.protocol) ||
      siteUrl.search ||
      siteUrl.hash)
  ) {
    throw new Error(
      'SITE_URL must be an HTTP(S) URL without a query or fragment.',
    );
  }
  if (siteUrl && !siteUrl.pathname.endsWith('/')) siteUrl.pathname += '/';
  const title = `${profile.name} — ${profile.role} · Security & Systems`;

  return {
    base: siteUrl?.pathname ?? './',
    plugins: [
      react(),
      {
        name: 'portfolio-metadata',
        transformIndexHtml() {
          return [
            { tag: 'title', children: title, injectTo: 'head' as const },
            {
              tag: 'meta',
              attrs: { name: 'description', content: profile.description },
            },
            { tag: 'meta', attrs: { property: 'og:title', content: title } },
            {
              tag: 'meta',
              attrs: {
                property: 'og:description',
                content: profile.description,
              },
            },
            { tag: 'meta', attrs: { property: 'og:type', content: 'website' } },
            { tag: 'meta', attrs: { property: 'og:locale', content: 'en_US' } },
            ...(siteUrl
              ? [
                  {
                    tag: 'link',
                    attrs: { rel: 'canonical', href: siteUrl.href },
                  },
                  {
                    tag: 'meta',
                    attrs: { property: 'og:url', content: siteUrl.href },
                  },
                  {
                    tag: 'meta',
                    attrs: {
                      property: 'og:image',
                      content: new URL('social-preview.png', siteUrl).href,
                    },
                  },
                  {
                    tag: 'meta',
                    attrs: { property: 'og:image:width', content: '1200' },
                  },
                  {
                    tag: 'meta',
                    attrs: { property: 'og:image:height', content: '630' },
                  },
                  {
                    tag: 'meta',
                    attrs: {
                      property: 'og:image:alt',
                      content: `${profile.name}. Software Engineer. Security & Systems.`,
                    },
                  },
                  {
                    tag: 'meta',
                    attrs: {
                      name: 'twitter:card',
                      content: 'summary_large_image',
                    },
                  },
                ]
              : []),
          ];
        },
      },
    ],
  };
});
