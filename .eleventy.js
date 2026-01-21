module.exports = function (eleventyConfig) {
  
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("index.html");

  return {
    dir: {
      input: "content",
      output: "_site",
      includes: "../_includes",
    },
  };
};