module.exports = function (eleventyConfig) {
  
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("scripts");

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