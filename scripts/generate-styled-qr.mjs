import { createRequire } from "node:module";
import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { JSDOM } from "jsdom";
import sharp from "sharp";

const require = createRequire(import.meta.url);
const { QRCodeStyling } = require("qr-code-styling/lib/qr-code-styling.common.js");

const DEFAULT_DATA = "https://eleythra.com";
const DEFAULT_BASE = "eleythra-site-qr";
const PNG_SIZE = 1024;

function sanitizeBaseName(name) {
  const s = name.replace(/[^a-z0-9._-]+/gi, "-").replace(/^-+|-+$/g, "").toLowerCase();
  return s.slice(0, 80) || "styled-qr";
}

function inferBaseName(urlString) {
  try {
    const u = new URL(urlString);
    const host = u.hostname.replace(/^www\./i, "");
    const segs = u.pathname.split("/").filter(Boolean);
    return sanitizeBaseName([host, ...segs].join("-"));
  } catch {
    return "styled-qr";
  }
}

const argvData = process.argv[2];
const argvBase = process.argv[3];

let data = DEFAULT_DATA;
let base = DEFAULT_BASE;

if (argvData) {
  try {
    new URL(argvData);
  } catch {
    console.error("Geçerli bir URL verin (ör. https://www.linkedin.com/in/kullanici).");
    process.exit(1);
  }
  data = argvData;
  base = argvBase ? sanitizeBaseName(argvBase) : inferBaseName(data);
}

const qr = new QRCodeStyling({
  jsdom: JSDOM,
  width: 512,
  height: 512,
  type: "svg",
  data,
  margin: 20,
  qrOptions: { errorCorrectionLevel: "M" },
  dotsOptions: { type: "square", color: "#1a233b", roundSize: true },
  backgroundOptions: { color: "#ffffff" },
  cornersSquareOptions: { type: "extra-rounded", color: "#1a233b" },
  cornersDotOptions: { type: "dots", color: "#1a233b" },
});

const raw = await qr.getRawData("svg");
const dir = dirname(fileURLToPath(import.meta.url));
const xml =
  typeof raw === "string"
    ? raw
    : Buffer.isBuffer(raw)
      ? raw.toString("utf8")
      : Buffer.from(await raw.arrayBuffer()).toString("utf8");

const svgPath = join(dir, "..", "public", `${base}.svg`);
const pngPath = join(dir, "..", "public", `${base}.png`);

writeFileSync(svgPath, xml, "utf8");
console.log("Wrote", svgPath);

await sharp(Buffer.from(xml, "utf8"))
  .resize(PNG_SIZE, PNG_SIZE, { kernel: sharp.kernel.nearest, fit: "fill" })
  .png({ compressionLevel: 9 })
  .toFile(pngPath);
console.log("Wrote", pngPath, `(${PNG_SIZE}×${PNG_SIZE})`);
console.log("Kodlanan veri:", data);
