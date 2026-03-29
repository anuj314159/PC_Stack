import rawText from '../assets/products-images/products.txt?raw';

export interface Product {
  name: string;
  details: string;
  category: string;
  image?: string;
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

const images: Record<string, { default: string }> = (import.meta as any).glob(
  '../assets/products-images/*.{jpg,png,jpeg,svg}',
  { eager: true }
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

function parseProducts(text: string): Product[] {
  const lines = text.split(/\r?\n/);
  const products: Product[] = [];
  let current: { title: string; description: string; specs: string; imageName?: string } | null = null;
  let category = '';

  const flush = () => {
    if (current) {
      const detailsParts: string[] = [];
      if (current.description) detailsParts.push(current.description);
      if (current.specs) detailsParts.push(`Specs: ${current.specs}`);
      let slug;
      if (current.imageName) {
        slug = slugify(current.imageName.replace(/\.[^/.]+$/, ''));
      } else {
        slug = slugify(current.title);
      }
      products.push({
        name: current.title,
        details: detailsParts.join(' '),
        category,
        image: imageMap[slug],
      });
      current = null;
    }
  };

  for (const raw of lines) {
    const line = raw.trim();
    if (!line) continue;

    if (/^[-]{2,}/.test(line)) {
      flush();
      continue;
    }

    if (/^Title:/i.test(line)) {
      flush();
      current = { title: line.replace(/^Title:\s*/i, '').trim(), description: '', specs: '' };
      continue;
    }

    if (/^Description:/i.test(line) && current) {
      current.description = line.replace(/^Description:\s*/i, '').trim();
      continue;
    }

    if (/^Specs:/i.test(line) && current) {
      current.specs = line.replace(/^Specs:\s*/i, '').trim();
      continue;
    }

    if (/^Image:/i.test(line) && current) {
      current.imageName = line.replace(/^Image:\s*/i, '').trim();
      continue;
    }

    if (!current) {
      category = line;
    }
  }
  flush();
  return products;
}

const allProducts = parseProducts(rawText);

export const cpus = allProducts.filter(p => /cpu/i.test(p.category));
export const gpus = allProducts.filter(p => /gpu/i.test(p.category));
export const ram = allProducts.filter(p => /ram/i.test(p.category));
export const storage = allProducts.filter(p => /storage/i.test(p.category));
export const psus = allProducts.filter(p => /psu/i.test(p.category));
export const motherboards = allProducts.filter(p => /motherboard/i.test(p.category));

export const products = allProducts;

export { imageMap, slugify };
