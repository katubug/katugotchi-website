// Formats a post date as M/D/YY. Uses UTC so a date like 2026-09-21
// doesn't shift to the previous day in US time zones.
function shortDate(date) {
  const year = String(date.getUTCFullYear()).slice(-2);
  return `${date.getUTCMonth() + 1}/${date.getUTCDate()}/${year}`;
}

module.exports = {
  layout: "blog-layout.html",
  tags: "blog",
  eleventyComputed: {
    // Prefix every post title with its date
    title: (data) => `${shortDate(data.page.date)} - ${data.title}`,
  },
};
