/* eslint-disable */
export function getFavicon(url) {
  const a = document.createElement('a')
  a.href = url

  return `${a.protocol}//${a.host}/favicon.ico`
}
