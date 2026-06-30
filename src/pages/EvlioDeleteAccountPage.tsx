import { LegalPage } from '../components/legal/LegalPage'
import { legalPages } from '../data/legal'
import { useLocale } from '../i18n/useLocale'

export function EvlioDeleteAccountPage() {
  const { locale } = useLocale()

  return <LegalPage page={legalPages[locale].evlioDeleteAccount} />
}
