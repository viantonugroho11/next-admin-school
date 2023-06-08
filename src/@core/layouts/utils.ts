// ** Types
import { NextRouter } from 'next/router'

/**
 * Check for URL queries as well for matching
 * Current URL & Item Path
 *
 * @param item
 * @param activeItem
 */
export const handleURLQueries = (router: NextRouter, path: string | undefined): boolean => {
  if (Object.keys(router.query).length && path) {
    const arr = Object.keys(router.query)
    const dynamicPathRegex = new RegExp(`^${path.replace(/:[^\s/]+/g, '[^/]+')}$`)

    return dynamicPathRegex.test(router.asPath) && router.asPath.includes(router.query[arr[0]] as string) && path !== '/'
  }

  return false
}
