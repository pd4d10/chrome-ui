import { capitalize } from 'lodash'

// Guess favicon from url
export function getFavicon(url) {
  const a = document.createElement('a')
  a.href = url

  return `${a.protocol}//${a.host}/favicon.ico`
}

// en.wikipedia.org
// http://en.wikipedia.org
export function completeUrl(url) {
  if (/https?:\/\//.test(url)) {
    return url
  }
  return `http://${url}`
}

// Fake title
export function getTitle(url) {
  const arr = url.split('.')
  switch (arr.length) {
    case 2: // twitter.com
      return capitalize(arr[0])
    case 3: // www.google.com
    case 4: // www.google.co.uk
      return capitalize(arr[1])
    default:
      return url
  }
}
