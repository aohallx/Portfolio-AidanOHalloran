import type { ProjectDeepDiveSection } from '../data/projectDeepDives'
import type { ProjectMedia } from '../data/projects'

export type ProjectGalleryItem =
  | {
      type: 'image'
      src: string
      alt: string
      caption?: string
      fullQuality?: boolean
    }
  | { type: 'video'; src: string; alt: string; poster: string; caption?: string }

export type ProjectGallery = {
  items: ProjectGalleryItem[]
  indexBySrc: Map<string, number>
}

export function buildProjectGallery(
  media: ProjectMedia,
  sections?: ProjectDeepDiveSection[],
): ProjectGallery {
  const items: ProjectGalleryItem[] = []
  const indexBySrc = new Map<string, number>()

  const add = (item: ProjectGalleryItem) => {
    indexBySrc.set(item.src, items.length)
    items.push(item)
  }

  if (media.type === 'image') {
    add({ type: 'image', src: media.src, alt: media.alt })
  } else {
    add({
      type: 'video',
      src: media.src,
      alt: media.alt,
      poster: media.poster,
    })
  }

  if (sections) {
    for (const section of sections) {
      if (section.heroImage) {
        add({
          type: 'image',
          src: section.heroImage.src,
          alt: section.heroImage.alt,
          caption: section.heroImage.caption,
          fullQuality: section.heroImage.fullQuality,
        })
      }

      for (const image of section.images ?? []) {
        add({
          type: 'image',
          src: image.src,
          alt: image.alt,
          caption: image.caption,
        })
      }
    }
  }

  return { items, indexBySrc }
}

export function getGalleryIndex(
  indexBySrc: Map<string, number>,
  src: string,
): number | undefined {
  return indexBySrc.get(src)
}
