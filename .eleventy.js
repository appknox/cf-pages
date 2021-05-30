const CleanCSS = require("clean-css");
const { minify } = require("terser");

module.exports = function(eleventyConfig) {
  eleventyConfig.addNunjucksAsyncFilter("jsmin", async function (
    code,
    callback
    ) {
      try {
        const minified = await minify(code);
        callback(null, minified.code);
      } catch (err) {
        console.error("Terser error: ", err);
        // Fail gracefully.
        callback(null, code);
      }
    });

    eleventyConfig.addFilter("cssmin", function(code) {
      return new CleanCSS({
      }).minify(code).styles;
    });


    return {
      // Control which files Eleventy will process
      // e.g.: *.md, *.njk, *.html, *.liquid
      templateFormats: [
        "md",
        "njk",
        "html",
        "liquid"
      ],

      // -----------------------------------------------------------------
      // If your site deploys to a subdirectory, change `pathPrefix`.
      // Don’t worry about leading and trailing slashes, we normalize these.

      // If you don’t have a subdirectory, use "" or "/" (they do the same thing)
      // This is only used for link URLs (it does not affect your file structure)
      // Best paired with the `url` filter: https://www.11ty.dev/docs/filters/url/

      // You can also pass this in on the command line using `--pathprefix`

      // Optional (default is shown)
      pathPrefix: "/",
      // -----------------------------------------------------------------

      // Pre-process *.md files with: (default: `liquid`)
      markdownTemplateEngine: "njk",

      // Pre-process *.html files with: (default: `liquid`)
      htmlTemplateEngine: "njk",

      // Opt-out of pre-processing global data JSON files: (default: `liquid`)
      dataTemplateEngine: false,

      // These are all optional (defaults are shown):
      dir: {
        input: ".",
        includes: "_includes",
        data: "_data",
        output: "_site"
      }
    };
  };
