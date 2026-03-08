// parsed product information and helper to access CPU/GPU lists
import productInfo from '../assets/product-information.txt?raw';

export interface Product {
  name: string;
  details: string;
  image?: string;
}

// simple slugify helper to match filenames
function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// import all images from the products-images folder
const images: Record<string, { default: string }> = (import.meta as any).globEager(
  '../assets/products-images/*.{jpg,png,jpeg,svg}'
) as any;

const imageMap: Record<string, string> = {};
for (const path in images) {
  const match = path.match(/\/([^\/]+)$/);
  if (match) {
    const filename = match[1];
    const slug = slugify(filename.replace(/\.[^/.]+$/, ''));
    imageMap[slug] = images[path].default;
  }
}

// split on the separator (*) and trim entries
const rawEntries = productInfo
  .split(/\r?\n\*/)
  .map((l) => l.trim())
  .filter(Boolean);

const products: Product[] = rawEntries.map((line) => {
  const [name, ...rest] = line.split(' - ');
  const details = rest.join(' - ');
  const slug = slugify(name);
  // attempt to find the best matching image: either exact or by segments
  let image: string | undefined = imageMap[slug];
  if (!image) {
    const slugClean = slug.replace(/-/g, '');
    for (const [fileSlug, url] of Object.entries(imageMap)) {
      const fileClean = fileSlug.replace(/-/g, '');
      const segments = fileSlug.split('-').filter(Boolean);
      const allPresent = segments.every(seg => slug.includes(seg));
      if (slugClean.includes(fileClean) || fileClean.includes(slugClean) || allPresent) {
        image = url;
        break;
      }
    }
  }
  return { name, details, image };
});

const isCpu = (p: Product) => /\b(Core|Ryzen)\b/i.test(p.name);

export const cpus = products.filter(isCpu);
export const gpus = products.filter((p) => !isCpu(p));
