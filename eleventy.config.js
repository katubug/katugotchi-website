module.exports = function (eleventyConfig) {
  // Copy static files straight to the output
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("guides/**/*.{jpg,jpeg,png,gif,webp}");

  // Don't turn the README into a page
  eleventyConfig.ignores.add("README.md");
};

module.exports.config = {
  dir: {
    input: ".",
    includes: "_includes",
    data: "_data",
    output: "_site",
  },
  markdownTemplateEngine: "liquid",
  htmlTemplateEngine: "liquid",
};