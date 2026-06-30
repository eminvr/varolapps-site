import { createBrowserRouter } from 'react-router'
import { SiteLayout } from '../components/layout/SiteLayout'
import { DeleteAccountPage } from '../pages/DeleteAccountPage'
import { EvlioPage } from '../pages/EvlioPage'
import { HomePage } from '../pages/HomePage'
import { NotFoundPage } from '../pages/NotFoundPage'
import { PrivacyPage } from '../pages/PrivacyPage'
import { SupportPage } from '../pages/SupportPage'
import { TermsPage } from '../pages/TermsPage'
import { routePaths } from '../utils/site'

export const router = createBrowserRouter([
  {
    element: <SiteLayout />,
    children: [
      { path: routePaths.home, element: <HomePage /> },
      { path: routePaths.evlio, element: <EvlioPage /> },
      { path: routePaths.privacy, element: <PrivacyPage /> },
      { path: routePaths.terms, element: <TermsPage /> },
      { path: routePaths.support, element: <SupportPage /> },
      { path: routePaths.deleteAccount, element: <DeleteAccountPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])
