import { projects } from '../data/projects'
import { site } from '../data/site'

export function resolveSiteUrl(pathname = ''): string {
  const path =
    pathname === '/' || pathname === ''
      ? ''
      : pathname.startsWith('/')
        ? pathname
        : `/${pathname}`

  if (typeof window !== 'undefined') {
    return `${window.location.origin}${path}`
  }

  return `${site.seo.siteUrl.replace(/\/$/, '')}${path}`
}

export function buildPersonSchema(pathname: string) {
  const pageUrl = resolveSiteUrl(pathname || '/')

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${site.seo.siteUrl}#person`,
        name: site.name,
        jobTitle: site.jobTitle,
        description: site.seo.description,
        url: site.seo.siteUrl,
        email: `mailto:${site.email}`,
        address: {
          '@type': 'PostalAddress',
          addressLocality: site.seo.location.city,
          addressRegion: site.seo.location.region,
          addressCountry: site.seo.location.country,
        },
        worksFor: {
          '@type': 'Organization',
          name: site.employer.name,
          department: `${site.employer.division} · ${site.employer.sector}`,
        },
        sameAs: [site.linkedin, site.github],
        knowsAbout: site.seo.expertise,
        additionalProperty: {
          '@type': 'PropertyValue',
          name: 'Open to talk',
          value: site.seo.rolesOpenTo.join(', '),
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${site.seo.siteUrl}#website`,
        url: site.seo.siteUrl,
        name: site.name,
        description: site.seo.description,
        publisher: { '@id': `${site.seo.siteUrl}#person` },
        inLanguage: 'en-US',
      },
      {
        '@type': 'ProfilePage',
        '@id': pageUrl,
        url: pageUrl,
        name: `${site.name} — Portfolio`,
        description: site.seo.description,
        isPartOf: { '@id': `${site.seo.siteUrl}#website` },
        about: { '@id': `${site.seo.siteUrl}#person` },
        mainEntity: { '@id': `${site.seo.siteUrl}#person` },
        inLanguage: 'en-US',
      },
    ],
  }
}

export function buildProjectsItemListSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `${site.name} — Projects`,
    itemListElement: projects.map((project, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: project.title,
      url: resolveSiteUrl(`/projects/${project.slug}`),
      description: project.tagline,
    })),
  }
}
