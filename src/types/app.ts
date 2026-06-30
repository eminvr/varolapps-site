import type { RouteKey } from '../i18n/routes'

export type AppStatus = 'coming-soon' | 'active'

export type AppInfo = {
  id: string
  name: string
  slug: string
  path: string
  routeKey: RouteKey
  description: string
  status: AppStatus
}
