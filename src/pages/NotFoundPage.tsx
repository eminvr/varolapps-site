import { Link } from 'react-router'
import { Seo } from '../components/common/Seo'
import { PagePlaceholder } from '../components/ui/PagePlaceholder'
import { routePaths } from '../utils/site'

export function NotFoundPage() {
  return (
    <>
      <Seo
        canonical={routePaths.home}
        description="The requested page could not be found."
        title="Page Not Found"
      />
      <PagePlaceholder
        description="The page you are looking for does not exist."
        eyebrow="404"
        title="Page Not Found"
      >
        <Link className="font-medium text-neutral-950 underline underline-offset-4" to={routePaths.home}>
          Go to Varol Apps
        </Link>
      </PagePlaceholder>
    </>
  )
}
