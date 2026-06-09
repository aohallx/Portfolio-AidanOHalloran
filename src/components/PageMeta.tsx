import { useEffect } from 'react'
import { site } from '../data/site'

type PageMetaProps = {
  title?: string
  description?: string
}

const DEFAULT_DESCRIPTION = `${site.jobTitle} at Deloitte GPS. Game Development, Data Engineering, and ML projects.`

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

export function PageMeta({ title, description }: PageMetaProps) {
  useEffect(() => {
    const fullTitle = title ? `${title} · ${site.name}` : site.name
    const desc = description ?? DEFAULT_DESCRIPTION

    document.title = fullTitle
    setMetaName('description', desc)
    setMetaProperty('og:title', fullTitle)
    setMetaProperty('og:description', desc)
    setMetaProperty('og:image', `${window.location.origin}/og-image.svg`)
  }, [title, description])

  return null
}
