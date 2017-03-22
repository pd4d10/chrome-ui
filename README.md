# Chrome UI [![Build Status](https://travis-ci.org/pd4d10/chrome-ui.svg?branch=master)](https://travis-ci.org/pd4d10/chrome-ui)

Chrome UI built with web stack.

Demo: https://pd4d10.github.io/chrome-ui/

## Why?

An idea to use web technologies (CSS and JS) to simulate native UI, although not perfectly.

It is firstly inspired by [Chrome Tabs](http://adamschwartz.co/chrome-tabs/).

See discussion on [Hacker News](https://news.ycombinator.com/item?id=13380999) and [Echo JS](http://www.echojs.com/news/22273).

## How does it work?

No magic, just `iframe`, with some trick to make it work as expected :)

Tabs' style is implemented with CSS.

## Trouble Shooting

### HTTP site cannot be loaded, will auto redirect to HTTPS

Yes, it is. Because iframes with `src` set to HTTP will be blocked by HTTPS site.

### It shows blank page instead of webpage content

Because the site you visited has HTTP Header Field `X-Frame-Options` set. See http://stackoverflow.com/a/19843216.

Try `www.bing.com` or `en.wikipedia.org` instead.

### It is messed up in my browser

If you find a bug or style mess, please [submit an issue](https://github.com/pd4d10/chrome-ui/issues/new). Thanks!

## Contribute

```sh
git clone https://github.com/pd4d10/chrome-ui.git
yarn
yarn start

# You can also use npm instead:
npm install
npm start
```

## License

MIT
