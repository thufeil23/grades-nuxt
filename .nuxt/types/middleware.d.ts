import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "C:/Users/thufe/Documents/Git-belajar/PESILAT/NuxtJS/grades-nuxt/node_modules/.pnpm/nuxt@3.5.2_@types+node@18.0.0/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}