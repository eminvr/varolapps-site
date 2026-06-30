import { createBrowserRouter } from 'react-router'
import { SiteLayout } from '../components/layout/SiteLayout'
import { DeleteAccountPage } from '../pages/DeleteAccountPage'
import { EvlioDeleteAccountPage } from '../pages/EvlioDeleteAccountPage'
import { EvlioCookiesPage } from '../pages/EvlioCookiesPage'
import { EvlioFaqPage } from '../pages/EvlioFaqPage'
import { EvlioPage } from '../pages/EvlioPage'
import { EvlioPrivacyPage } from '../pages/EvlioPrivacyPage'
import { EvlioSupportPage } from '../pages/EvlioSupportPage'
import { EvlioTermsPage } from '../pages/EvlioTermsPage'
import { HomePage } from '../pages/HomePage'
import { NotFoundPage } from '../pages/NotFoundPage'
import { PrivacyPage } from '../pages/PrivacyPage'
import { SupportPage } from '../pages/SupportPage'
import { TermsPage } from '../pages/TermsPage'
import { legacyLocalizedRoutes, localizePath, localizedRoutes } from '../i18n/routes'

const pageRoutes = [
  { path: localizedRoutes.home, element: <HomePage /> },
  { path: localizedRoutes.evlio, element: <EvlioPage /> },
  { path: localizedRoutes.evlioPrivacy, element: <EvlioPrivacyPage /> },
  { path: localizedRoutes.evlioTerms, element: <EvlioTermsPage /> },
  { path: localizedRoutes.evlioSupport, element: <EvlioSupportPage /> },
  { path: localizedRoutes.evlioDeleteAccount, element: <EvlioDeleteAccountPage /> },
  { path: localizedRoutes.evlioFaq, element: <EvlioFaqPage /> },
  { path: localizedRoutes.evlioCookies, element: <EvlioCookiesPage /> },
  { path: localizedRoutes.privacy, element: <PrivacyPage /> },
  { path: localizedRoutes.terms, element: <TermsPage /> },
  { path: localizedRoutes.support, element: <SupportPage /> },
  { path: localizedRoutes.deleteAccount, element: <DeleteAccountPage /> },
] as const

const legacyPageRoutes = [
  { path: legacyLocalizedRoutes.evlio, element: <EvlioPage /> },
  { path: legacyLocalizedRoutes.evlioPrivacy, element: <EvlioPrivacyPage /> },
  { path: legacyLocalizedRoutes.evlioTerms, element: <EvlioTermsPage /> },
  { path: legacyLocalizedRoutes.evlioSupport, element: <EvlioSupportPage /> },
  { path: legacyLocalizedRoutes.evlioDeleteAccount, element: <EvlioDeleteAccountPage /> },
] as const

const localizedPageRoutes = [
  ...pageRoutes,
  ...legacyPageRoutes,
  ...pageRoutes.map((route) => ({
    ...route,
    path: localizePath(route.path, 'en'),
  })),
  ...legacyPageRoutes.map((route) => ({
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
