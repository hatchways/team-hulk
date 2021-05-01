const Turndown = require("turndown");
const html =
  '<div><p>You are given two <strong>non-empty</strong> linked lists representing two non-negative integers. The digits are stored in <strong>reverse order</strong>, and each of their nodes contains a single digit. Add the two numbers and return the sum&nbsp;as a linked list.</p>\n\n<p>You may assume the two numbers do not contain any leading zero, except the number 0 itself.</p>\n\n<p>&nbsp;</p>\n<p><strong>Example 1:</strong></p>\n<img alt="" src="https://assets.leetcode.com/uploads/2020/10/02/addtwonumber1.jpg" style="width: 483px; height: 342px;">\n<pre><strong>Input:</strong> l1 = [2,4,3], l2 = [5,6,4]\n<strong>Output:</strong> [7,0,8]\n<strong>Explanation:</strong> 342 + 465 = 807.\n</pre>\n\n<p><strong>Example 2:</strong></p>\n\n<pre><strong>Input:</strong> l1 = [0], l2 = [0]\n<strong>Output:</strong> [0]\n</pre>\n\n<p><strong>Example 3:</strong></p>\n\n<pre><strong>Input:</strong> l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]\n<strong>Output:</strong> [8,9,9,9,0,0,0,1]\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li>The number of nodes in each linked list is in the range <code>[1, 100]</code>.</li>\n\t<li><code>0 &lt;= Node.val &lt;= 9</code></li>\n\t<li>It is guaranteed that the list represents a number that does not have leading zeros.</li>\n</ul>\n</div>';

function formatHTML(html) {
  html = html.replace(new RegExp("<code>", "g"), "*");
  html = html.replace(new RegExp("</code>", "g"), "*");
  html = html.replace(new RegExp("<strong>", "g"), "**");
  html = html.replace(new RegExp("</strong>", "g"), "**");
  html = html.replace(/\t/g, "");
  html = html.replace(new RegExp("<pre>", "g"), "~~~js\n");
  html = html.replace(new RegExp("</pre>", "g"), "\n~~~");
  html = html.replace(new RegExp("<p>", "g"), "");
  html = html.replace(new RegExp("</p>", "g"), "\n");
  html = html.replace(new RegExp("<div>", "g"), "");
  html = html.replace(new RegExp("</div>", "g"), "\n");
  html = html.replace(new RegExp("<ul>", "g"), "");
  html = html.replace(new RegExp("</ul>", "g"), "\n");
  html = html.replace(new RegExp("<li>", "g"), "- ");
  html = html.replace(new RegExp("</li>", "g"), "");
  html = formatImages(html);
  html = html.trim();

  return html;
}

function formatImages(img) {
  if (img.indexOf("<img") === -1) return img;

  const src = getSubstring(img, "src=", '"', 5);

  const alt = getSubstring(img, "alt=", '"', 5);

  const tag = getSubstring(img, "<img", ">", 0, true);

  img = img.replace(tag, `![${alt}](${src})`);

  return formatImages(img);
}

function getSubstring(searchIn, from, to, offset = 0, includeEnd = false) {
  const start = searchIn.indexOf(from) + offset;
  const end = start > -1 ? searchIn.indexOf(to, start) + includeEnd : -1;
  return searchIn.slice(start, end);
}

const turndownService = new Turndown();

const markdown = turndownService.turndown(html);
console.log(markdown);
