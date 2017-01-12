# Chrome UI

Chrome UI built with web stack.

Demo: https://pd4d10.github.io/chrome-ui/

## FAQ

### Why webpage content is not loaded when I open Google, Twitter or GitHub?

Many websites refuse to show content in cross domain iframe, for secure reason.

Try `en.wikipedia.org` instead.

If you press F12 to open devtools, you will see messages like follows:

```
Refused to display 'https://www.google.com/' in a frame because it set 'X-Frame-Options' to 'SAMEORIGIN'.
Refused to display 'https://twitter.com/' in a frame because an ancestor violates the following Content Security Policy directive: "frame-ancestors 'self'".
Refused to display 'https://github.com/' in a frame because an ancestor violates the following Content Security Policy directive: "frame-ancestors 'none'".
```

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
