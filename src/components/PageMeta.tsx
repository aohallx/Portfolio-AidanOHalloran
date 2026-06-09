import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { site } from '../data/site'
import { buildPersonSchema, resolveSiteUrl } from '../lib/seoSchema'

type PageMetaProps = {
  title?: string
  description?: string
  /** Extra JSON-LD object merged on this page */
  schemaExtra?: Record<string, unknown> | Record<string, unknown>[]
}

function setMetaProperty(property: string, content: string) {
  let el = document.querySelector(`meta[property="${property}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('property', property)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setMetaName(name: string, content: string) {
  let el = document.querySelector(`meta[name="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('name', name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setCanonical(href: string) {
  let el = document.querySelector('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

function setJsonLd(id: string, data: Record<string, unknown>) {
  let el = document.getElementById(id)
  if (!el) {
    el = document.createElement('script')
    el.id = id
    el.setAttribute('type', 'application/ld+json')
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(data)
}

export function PageMeta({ title, description, schemaExtra }: PageMetaProps) {
  const { pathname } = useLocation()

  useEffect(() => {
    const pageTitle = title
      ? `${title} · ${site.name}`
      : site.seo.title
    const desc = description ?? site.seo.description
    const pageUrl = resolveSiteUrl(pathname)
    const imageUrl = resolveSiteUrl('/og-image.svg')

    document.title = pageTitle
    setCanonical(pageUrl)
    setMetaName('description', desc)
    setMetaName('keywords', site.seo.keywords.join(', '))
    setMetaName('author', site.name)
    setMetaName('robots', 'index, follow, max-image-preview:large')
    setMetaName('twitter:card', 'summary_large_image')
    setMetaName('twitter:title', pageTitle)
    setMetaName('twitter:description', desc)
    setMetaName('twitter:image', imageUrl)

    setMetaProperty('og:type', 'profile')
    setMetaProperty('og:site_name', site.name)
    setMetaProperty('og:title', pageTitle)
    setMetaProperty('og:description', desc)
    setMetaProperty('og:url', pageUrl)
    setMetaProperty('og:image', imageUrl)
    setMetaProperty('og:locale', 'en_US')
    setMetaProperty('profile:first_name', 'Aidan')
    setMetaProperty('profile:last_name', "O'Halloran")

    const personSchema = buildPersonSchema(pathname) as Record<string, unknown>
    if (schemaExtra) {
      const extras = Array.isArray(schemaExtra) ? schemaExtra : [schemaExtra]
      const graph = personSchema['@graph'] as Record<string, unknown>[]
      personSchema['@graph'] = [...graph, ...extras]
    }
    setJsonLd('portfolio-jsonld', personSchema)
  }, [title, description, pathname, schemaExtra])

  return null
}
