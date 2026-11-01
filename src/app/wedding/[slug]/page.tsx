import { weddingConfig } from '@/config/wedding'
import { notFound } from 'next/navigation'
import WeddingPage from '@/components/WeddingPage'

interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props) {
  if (params.slug !== weddingConfig.slug) {
    return { title: 'Not Found' }
  }
  return {
    title: weddingConfig.seo.title,
    description: weddingConfig.seo.description,
    openGraph: {
      title: weddingConfig.seo.title,
      description: weddingConfig.seo.description,
      images: [weddingConfig.seo.ogImage],
    },
  }
}

export default function WeddingSlugPage({ params }: Props) {
  if (params.slug !== weddingConfig.slug) {
    notFound()
  }
  return <WeddingPage config={weddingConfig} />
}
