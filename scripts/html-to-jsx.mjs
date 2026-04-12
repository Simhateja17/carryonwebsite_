/**
 * Converts <main>...</footer> from static HTML to a React component .tsx file.
 * Mechanical transform — run: node scripts/html-to-jsx.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

function extractMainFooter(html) {
  const i = html.search(/<main\b/i);
  const j = html.lastIndexOf("</footer>");
  if (i === -1 || j === -1) throw new Error("main or footer not found");
  return html.slice(i, j + "</footer>".length);
}

function htmlToJsxSafe(html) {
  let s = extractMainFooter(html);
  s = s.replace(/<!--([\s\S]*?)-->/g, (_, c) => `{/*${c.replace(/\*\//g, "* /").trim()}*/}`);
  s = s.replace(/\bclass=/g, "className=");
  s = s.replace(/\bfor=/g, "htmlFor=");
  const reactDomAttrs = [
    ["autocomplete", "autoComplete"],
    ["autocorrect", "autoCorrect"],
    ["autofocus", "autoFocus"],
    ["cellpadding", "cellPadding"],
    ["cellspacing", "cellSpacing"],
    ["charset", "charSet"],
    ["colspan", "colSpan"],
    ["crossorigin", "crossOrigin"],
    ["datetime", "dateTime"],
    ["enctype", "encType"],
    ["maxlength", "maxLength"],
    ["minlength", "minLength"],
    ["readonly", "readOnly"],
    ["rowspan", "rowSpan"],
    ["spellcheck", "spellCheck"],
    ["srcset", "srcSet"],
    ["tabindex", "tabIndex"],
    ["accept-charset", "acceptCharset"],
    ["http-equiv", "httpEquiv"],
  ];
  for (const [a, b] of reactDomAttrs) {
    s = s.replace(new RegExp(`\\b${a}=`, "gi"), `${b}=`);
  }
  const svgAttrs = [
    "stroke-width",
    "stroke-linecap",
    "stroke-linejoin",
    "stroke-dasharray",
    "stroke-miterlimit",
    "fill-rule",
    "clip-rule",
    "font-weight",
    "font-size",
    "text-anchor",
    "stop-color",
    "stop-opacity",
    "fill-opacity",
    "stroke-opacity",
    "color-interpolation",
    "color-interpolation-filters",
    "flood-color",
    "flood-opacity",
    "lighting-color",
    "shape-rendering",
    "text-rendering",
    "image-rendering",
    "clip-path",
    "dominant-baseline",
    "underline-position",
    "underline-thickness",
    "unicode-bidi",
    "writing-mode",
    "glyph-orientation-horizontal",
    "glyph-orientation-vertical",
  ];
  for (const a of svgAttrs) {
    const camel = a.replace(/-([a-z])/g, (_, x) => x.toUpperCase());
    const re = new RegExp(`\\b${a}=`, "gi");
    s = s.replace(re, `${camel}=`);
  }
  s = s
    .replace(/href="index\.html"/g, 'href="/"')
    .replace(/href="about\.html#contact"/g, 'href="/about#contact"')
    .replace(/href="about\.html"/g, 'href="/about"')
    .replace(/href="drivers\.html"/g, 'href="/drivers"')
    .replace(/href="riders\.html"/g, 'href="/riders"')
    .replace(/src="assets\//g, 'src="/assets/');
  s = s.replace(/<a href="#" className="logo"/g, '<a href="/" className="logo"');

  // Void elements — regex without lookbehind for older node: simpler loop
  s = s.replace(/<img(\s[^>]*)>/gi, (_, attrs) => {
    if (attrs.trimEnd().endsWith("/")) return `<img${attrs}>`;
    return `<img${attrs} />`;
  });
  s = s.replace(/<input(\s[^>]*)>/gi, (_, attrs) => {
    if (attrs.trimEnd().endsWith("/")) return `<input${attrs}>`;
    return `<input${attrs} />`;
  });
  s = s.replace(/<br\s*\/?>/gi, "<br />");
  s = s.replace(/<hr\s*\/?>/gi, "<hr />");
  s = s.replace(/<col(\s[^>]*)>/gi, (_, a) => (a.endsWith("/") ? `<col${a}>` : `<col${a} />`));
  s = s.replace(/<embed(\s[^>]*)>/gi, (_, a) => (a.trimEnd().endsWith("/") ? `<embed${a}>` : `<embed${a} />`));
  s = s.replace(/<link(\s[^>]*)>/gi, (_, a) => (a.trimEnd().endsWith("/") ? `<link${a}>` : `<link${a} />`));
  s = s.replace(/<meta(\s[^>]*)>/gi, (_, a) => (a.trimEnd().endsWith("/") ? `<meta${a}>` : `<meta${a} />`));
  s = s.replace(/<source(\s[^>]*)>/gi, (_, a) => (a.trimEnd().endsWith("/") ? `<source${a}>` : `<source${a} />`));
  s = s.replace(/<track(\s[^>]*)>/gi, (_, a) => (a.trimEnd().endsWith("/") ? `<track${a}>` : `<track${a} />`));
  s = s.replace(/<area(\s[^>]*)>/gi, (_, a) => (a.trimEnd().endsWith("/") ? `<area${a}>` : `<area${a} />`));
  s = s.replace(/<base(\s[^>]*)>/gi, (_, a) => (a.trimEnd().endsWith("/") ? `<base${a}>` : `<base${a} />`));
  s = s.replace(/<param(\s[^>]*)>/gi, (_, a) => (a.trimEnd().endsWith("/") ? `<param${a}>` : `<param${a} />`));

  // React style prop: inline background-image from HTML
  s = s.replace(/style="background-image: url\('([^']*)'\);"/g, (_, u) => {
    const dec = u.replace(/&amp;/g, "&");
    return `style={{ backgroundImage: \`url('${dec}')\` }}`;
  });

  // Numeric DOM props
  s = s.replace(/\brows="(\d+)"/g, "rows={$1}");
  s = s.replace(/\bcols="(\d+)"/g, "cols={$1}");
  s = s.replace(/aria-valuemin="(\d+)"/g, "aria-valuemin={$1}");
  s = s.replace(/aria-valuemax="(\d+)"/g, "aria-valuemax={$1}");
  s = s.replace(/aria-valuenow="(\d+)"/g, "aria-valuenow={$1}");

  s = s.replace(/<input[\s\S]*?type="range"[\s\S]*?\/>/gi, (block) =>
    block
      .replace(/\bmin="(\d+)"/g, "min={$1}")
      .replace(/\bmax="(\d+)"/g, "max={$1}")
      .replace(/\bvalue="(\d+)"/g, "defaultValue={$1}")
  );

  return s.trim();
}

const jobs = [
  { html: "index.html", component: "HomePageContent.tsx", exportName: "HomePageContent" },
  { html: "about.html", component: "AboutPageContent.tsx", exportName: "AboutPageContent" },
  { html: "drivers.html", component: "DriversPageContent.tsx", exportName: "DriversPageContent" },
  { html: "riders.html", component: "RidersPageContent.tsx", exportName: "RidersPageContent" },
];

const outDir = path.join(root, "components", "pages");
fs.mkdirSync(outDir, { recursive: true });

for (const { html, component, exportName } of jobs) {
  const raw = fs.readFileSync(path.join(root, html), "utf8");
  const body = htmlToJsxSafe(raw);
  const tsx = `/* eslint-disable @next/next/no-img-element */

export function ${exportName}() {
  return (
    <>
${body
  .split("\n")
  .map((line) => "      " + line)
  .join("\n")}
    </>
  );
}
`;
  fs.writeFileSync(path.join(outDir, component), tsx, "utf8");
  console.log("Wrote", component);
}
