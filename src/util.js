import { capitalize } from 'lodash'

// Add 'https://' prefix to a URL
// Must be 'https://' here because GitHub pages is loaded over HTTPS
// HTTP request will be blocked by default
export function completeUrl(url) {
  // No dot in URL, redirect to Bing search
  if (url.indexOf('.') === -1) {
    return `https://www.bing.com/search?q=${encodeURIComponent(url)}`
  }

  if (/^https:\/\//.test(url)) {
    return url
  }

  if (/^http:\/\/(.*)/.test(url)) {
    return url.replace(/^http/, 'https')
  }

  return `https://${url}`
}

// Guess favicon from url
export function getFavicon(url) {
  const a = document.createElement('a')
  a.href = completeUrl(url)

  return `${a.protocol}//${a.host}/favicon.ico`
}

// Fake title
export function getTitle(url) {
  const arr = url.replace(/^https:\/\//, '').split('.')
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

// Github start widget
export function getGithubWidget() {
  return '<iframe allowtransparency="true" scrolling="no" frameborder="0" src="https://buttons.github.io/buttons.html#href=https%3A%2F%2Fgithub.com%2Fpd4d10%2Fchrome-ui&aria-label=Star%20pd4d10%2Fchrome-ui%20on%20GitHub&data-icon=octicon-star&data-text=Star&data-show-count=true" style="width: 85px; height: 20px; border: none;"><iframe/>'
}
