module.exports = function (eleventyConfig) {
  // Copy entire styles folder
  eleventyConfig.addPassthroughCopy("styles");

  // Copy images folder
  eleventyConfig.addPassthroughCopy("images");

  return {
    dir: {
      input: "content",
      output: "_site",
      includes: "../_includes",
    },
  };
};