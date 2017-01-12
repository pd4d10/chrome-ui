import { capitalize } from 'lodash'

// Add 'https://' prefix to a URL
// Must be 'https://' here because GitHub pages is loaded over HTTPS
// HTTP request will be blocked by default
export function completeUrl(url) {
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

// Github start widget
export function getGithubWidget() {
  return '<iframe src="https://ghbtns.com/github-btn.html?user=pd4d10&repo=chrome-ui&type=star" frameborder="0" scrolling="0"></iframe>'
}
