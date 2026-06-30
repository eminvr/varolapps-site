import type { AppInfo } from '../types/app'
import { routePaths } from '../utils/site'

export const apps: AppInfo[] = [
  {
    id: 'evlio',
    name: 'Evlio',
    slug: 'evlio',
    path: routePaths.evlio,
    description: 'Evlilik hazırlığı sürecindeki listeleri, alışverişleri ve ortak planları düzenlemek için geliştirilen mobil uygulama.',
    status: 'coming-soon',
  },
]

export const evlioApp = apps[0]
