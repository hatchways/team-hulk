const Turndown = require("turndown");
const turndownService = new Turndown();

module.exports.formatHTML = (html) => {
  html = html.replace(new RegExp("<code>", "g"), "*");
  html = html.replace(new RegExp("</code>", "g"), "*");
  html = html.replace(new RegExp("<em>", "g"), "*");
  html = html.replace(new RegExp("</em>", "g"), "*");
  html = html.replace(/\t/g, "");
  html = html.replace(new RegExp("<p>", "g"), "");
  html = html.replace(new RegExp("</p>", "g"), "\n");
  html = html.replace(new RegExp("<div>", "g"), "");
  html = html.replace(new RegExp("</div>", "g"), "\n");
  html = html.replace(new RegExp("<ul>", "g"), "");
  html = html.replace(new RegExp("</ul>", "g"), "\n");
  html = html.replace(new RegExp("<li>", "g"), "- ");
  html = html.replace(new RegExp("</li>", "g"), "");
  html = html.replace(new RegExp("<sub>", "g"), "");
  html = html.replace(new RegExp("</sub>", "g"), "");
  html = html.replace(new RegExp("<sup>", "g"), "^");
  html = html.replace(new RegExp("</sup>", "g"), "");

  html = formatCode(html);
  html = html.replace(new RegExp("<strong>", "g"), "**");
  html = html.replace(new RegExp("</strong>", "g"), "**");
  html = formatImages(html);
  html = html.trim();

  return html;
};

const formatImages = (img) => {
  if (img.indexOf("<img") === -1) return img;

  const src = getSubstring(img, "src=", '"', 5);

  const alt = getSubstring(img, "alt=", '"', 5);

  const tag = getSubstring(img, "<img", ">", 0, true);

  img = img.replace(tag, `![${alt}](${src})`);

  return formatImages(img);
};

const formatCode = (markdown) => {
  if (markdown.indexOf("<pre>") === -1) return markdown;

  const code = getSubstring(markdown, "<pre>", "</pre>", 0, true);

  const newCode = code
    .replace(new RegExp("<strong>", "g"), "")
    .replace(new RegExp("</strong>", "g"), "")
    .replace(new RegExp("<pre>", "g"), "~~~js\n")
    .replace(new RegExp("</pre>", "g"), "~~~");

  markdown = markdown.replace(code, newCode);

  return formatCode(markdown);
};

const getSubstring = (searchIn, from, to, offset = 0, includeEnd = false) => {
  const start = searchIn.indexOf(from) + offset;
  const endSpace = includeEnd ? to.length : 0;
  const end = start > -1 ? searchIn.indexOf(to, start + 1) + endSpace : -1;
  return searchIn.slice(start, end);
};
