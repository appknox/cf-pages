# cf-pages
This is a repository of Cloudflare custom error templates using [Eleventy](https://github.com/11ty/eleventy) static site generator.

Objective is to have a clean, quick ly loaded fun error pages

## Demo

[![Template Screen Shot][product-screenshot]](https://cferror.appknox.com/)

## Things Considered

Since these are error pages, it has to follow the below guidelines, so that it can load quickly.

- The Styles and Javascript should be inline
- Images are inline
- Generated HTML is W3C validated code
- Minified JS and CSS code
- Each page is less than 50KB (Average 25KB)

## Cloudflare Error Pages Supported

- [**5XX**](https://cferror.appknox.com/5xx/index.html) : 500 Class Errors
- [**100X**](https://cferror.appknox.com/100x/index.html) : 1000 Class Errors
- [**ip_block**](https://cferror.appknox.com/ip_block/index.html) : IP/Country Block
- [**under_attack**](https://cferror.appknox.com/under_attack/index.html) : I'm Under Attack Mode™ Challenge
- [**waf_block**](https://cferror.appknox.com/waf_block/index.html) : WAF Block
- [**captcha**](https://cferror.appknox.com/captcha/index.html) : Basic Security Challenge, WAF Challenge & Country Challenge

## TODO

- [ ] **429 errors** : Customize the response presented to your visitors when they have triggered rate limiting.
- [ ] **Always Online™ Error**

[product-screenshot]: screenshot/template.png
