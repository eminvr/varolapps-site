export type AppStatus = 'coming-soon' | 'active'

export type AppInfo = {
  id: string
  name: string
  slug: string
  path: string
  description: string
  status: AppStatus
}
