import type { AppInfo } from '../types/app'
import { routePaths } from '../utils/site'

export const apps: AppInfo[] = [
  {
    id: 'evlio',
    name: 'Evlio',
    slug: 'evlio',
    path: routePaths.evlio,
    description: 'A Varol Apps product page placeholder for the first iteration.',
    status: 'coming-soon',
  },
]

export const evlioApp = apps[0]
