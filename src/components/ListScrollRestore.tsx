import { useLayoutEffect } from 'react'
import {
  restoreListPageAfterProject,
  shouldRestoreListPage,
  type ScrollRestorePath,
} from '../lib/homeScroll'

type ListScrollRestoreProps = {
  pathname: ScrollRestorePath
}

/** Restores list scroll after browser back from a project detail page. */
export function ListScrollRestore({ pathname }: ListScrollRestoreProps) {
  useLayoutEffect(() => {
    if (!shouldRestoreListPage(pathname)) return
    restoreListPageAfterProject(pathname)
  }, [pathname])

  return null
}
