const MarkdownIt = require('markdown-it');
const hljs = require('highlight.js');
const fm = require('front-matter');


module.exports = function markdown(source) {
  this.cacheable();

  const md = new MarkdownIt({
    html: true,
    linkify: true,
    highlight: (str, lang) => {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return `<pre class="hljs"><code>${hljs.highlight(lang, str).value}</code></pre>`;
        } catch (err) { console.error(err.stack); }
      }

      try {
        return `<pre class="hljs"><code>${hljs.highlightAuto(str).value}</code></pre>`;
      } catch (err) { console.error(err.stack); }

      return '';
    },
  });

  const frontmatter = fm(source);
  frontmatter.attributes.html = md.render(frontmatter.body);

  return `module.exports = ${JSON.stringify(frontmatter.attributes)};`;
};
