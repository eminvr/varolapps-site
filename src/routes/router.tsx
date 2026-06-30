import { createBrowserRouter } from 'react-router'
import { SiteLayout } from '../components/layout/SiteLayout'
import { DeleteAccountPage } from '../pages/DeleteAccountPage'
import { EvlioDeleteAccountPage } from '../pages/EvlioDeleteAccountPage'
import { EvlioPage } from '../pages/EvlioPage'
import { EvlioPrivacyPage } from '../pages/EvlioPrivacyPage'
import { EvlioSupportPage } from '../pages/EvlioSupportPage'
import { EvlioTermsPage } from '../pages/EvlioTermsPage'
import { HomePage } from '../pages/HomePage'
import { NotFoundPage } from '../pages/NotFoundPage'
import { PrivacyPage } from '../pages/PrivacyPage'
import { SupportPage } from '../pages/SupportPage'
import { TermsPage } from '../pages/TermsPage'
import { localizePath, localizedRoutes } from '../i18n/routes'

const pageRoutes = [
  { path: localizedRoutes.home, element: <HomePage /> },
  { path: localizedRoutes.evlio, element: <EvlioPage /> },
  { path: localizedRoutes.evlioPrivacy, element: <EvlioPrivacyPage /> },
  { path: localizedRoutes.evlioTerms, element: <EvlioTermsPage /> },
  { path: localizedRoutes.evlioSupport, element: <EvlioSupportPage /> },
  { path: localizedRoutes.evlioDeleteAccount, element: <EvlioDeleteAccountPage /> },
  { path: localizedRoutes.privacy, element: <PrivacyPage /> },
  { path: localizedRoutes.terms, element: <TermsPage /> },
  { path: localizedRoutes.support, element: <SupportPage /> },
  { path: localizedRoutes.deleteAccount, element: <DeleteAccountPage /> },
] as const

const localizedPageRoutes = [
  ...pageRoutes,
  ...pageRoutes.map((route) => ({
    ...route,
    path: localizePath(route.path, 'en'),
  })),
]

export const router = createBrowserRouter([
  {
    element: <SiteLayout />,
    children: [
      ...localizedPageRoutes,
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])
