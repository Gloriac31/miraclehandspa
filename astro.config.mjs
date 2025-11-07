// @ts-check
import { defineConfig } from 'astro/config'
import { fileURLToPath } from 'url'
import tailwind from '@astrojs/tailwind'
import partytown from '@astrojs/partytown'
import clerk from '@clerk/astro'
import vercel from '@astrojs/vercel'
import compress from 'astro-compress'
import sonda from 'sonda/astro'
import { passthroughImageService } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://mjlaseraesthetic.com',
  output: 'server',
  adapter: vercel({
    imageService: false, // Disable image service to use static assets
    webAnalytics: { enabled: false },
  }),
  server: {
    port: 4321,
    host: true,
  },
  integrations: [
    tailwind(),
    partytown({ config: { forward: ['datalayer.pageview'] } }),
    clerk(),
    // sonda({
    //   server: true,
    // }),
    compress({
      CSS: true,
      JavaScript: true,
      HTML: true,
      Image: false, // Disable image compression to avoid format issues
      SVG: true,
      // Skip problematic files
      Exclude: [/\.min\.js$/, /before-hydration/, /page\.BJkMYRhE\.js$/, /\.MOV$/, /\.mov$/, /\.mp4$/, /\.MP4$/, /\.avif$/],
    }),
  ],
  vite: {
    resolve: {
      alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
    },
    build: {
      sourcemap: true,
    },
    server: {
      hmr: {
        port: 24678,
      },
      allowedHosts: [
        'localhost',
        '127.0.0.1',
        '.ngrok-free.app',
        '.ngrok-free.dev',
        '.ngrok.io',
        'staging.mjlaseraesthetic.com',
      ],
    },
  },
  env: {
    schema: {
      // server-only (never exposed):
      DATABASE_URL: {
        type: 'string',
        context: 'server',
        access: 'secret',
      },
      SQUARE_APPLICATION_ID: {
        type: 'string',
        context: 'server',
        access: 'secret',
      },
      SQUARE_APPLICATION_SECRET: {
        type: 'string',
        context: 'server',
        access: 'secret',
      },
      NODE_ENV: {
        type: 'string',
        context: 'server',
        access: 'secret',
      },
      // Clerk environment variables
      PUBLIC_CLERK_PUBLISHABLE_KEY: {
        type: 'string',
        context: 'server',
        access: 'public',
      },
      CLERK_SECRET_KEY: {
        type: 'string',
        context: 'server',
        access: 'secret',
      },
    },
  },
})
