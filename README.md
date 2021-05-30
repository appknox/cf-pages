# cf-pages
This is a repository of Cloudflare custom error templates using [Eleventy](https://github.com/11ty/eleventy) static site generator.

Objective is to have a clean, quick ly loaded fun error pages

## Demo

![Template Screen Shot][product-screenshot]

## Things Considered

Since these are error pages, it has to follow the below guidelines, so that it can load quickly.

- The Styles and Javascript should be inline
- Images are inline
- Generated HTML is W3C validated code
- Minified JS and CSS code
- Each page is less than 50KB (Average 25KB)

## Cloudflare Error Pages Supported

- **5XX** : 500 Class Errors
- **100X** : 1000 Class Errors
- **ip_block** : IP/Country Block
- **under_attack** : I'm Under Attack Mode™ Challenge
- **waf_block** : WAF Block
- **captcha** : Basic Security Challenge, WAF Challenge & Country Challenge

## TODO

- [ ] **429 errors** : Customize the response presented to your visitors when they have triggered rate limiting.
- [ ] **Always Online™ Error**

[product-screenshot]: screenshot/template.png
