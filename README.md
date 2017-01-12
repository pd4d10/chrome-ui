# Chrome UI [![Build Status](https://travis-ci.org/pd4d10/chrome-ui.svg?branch=master)](https://travis-ci.org/pd4d10/chrome-ui)

Chrome UI built with web stack.

Demo: https://pd4d10.github.io/chrome-ui/

## Trouble Shooting

### Webpage content is not loaded, just showing blank

Many websites like Google, Twitter or GitHub, refuse to show content in cross domain iframe, for secure reason.

Try `www.bing.com` or `en.wikipedia.org` instead.

If you press F12 to open devtools, you will see messages like follows:

```
Refused to display 'https://www.google.com/' in a frame because it set 'X-Frame-Options' to 'SAMEORIGIN'.
Refused to display 'https://twitter.com/' in a frame because an ancestor violates the following Content Security Policy directive: "frame-ancestors 'self'".
Refused to display 'https://github.com/' in a frame because an ancestor violates the following Content Security Policy directive: "frame-ancestors 'none'".
```

### It is messed up in my browser

It is tested only on Chrome, for now.

If you find a bug or style mess, please submit an issue. Thanks!

## Roadmap

* Add tests
* Incognito mode theme

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
