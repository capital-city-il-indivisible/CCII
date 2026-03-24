const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("content/styles");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("scripts");
  eleventyConfig.addPassthroughCopy("assets");

  eleventyConfig.addWatchTarget("./content/styles/");

  eleventyConfig.addCollection("events", function (collectionApi) {
    return collectionApi.getFilteredByGlob("content/webmaster-events/*.md");
  });

  return {
    dir: {
      input: "content",
      output: "_site",
      includes: "../_includes",
    },
  };
};
