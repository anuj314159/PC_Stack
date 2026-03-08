// parsed product information and helper to access categorized lists
import rawText from '../assets/products-images/products.txt?raw';

export interface Product {
  name: string;
  details: string;
  category: string;
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

// turn the raw text into a list of product entries with category
function parseProducts(text: string): Product[] {
  const lines = text.split(/\r?\n/);
  const products: Product[] = [];
  let current: { title: string; description: string; specs: string } | null = null;
  let category = '';

  const flush = () => {
    if (current) {
      const detailsParts: string[] = [];
      if (current.description) detailsParts.push(current.description);
      if (current.specs) detailsParts.push(`Specs: ${current.specs}`);
      products.push({
        name: current.title,
        details: detailsParts.join(' '),
        category,
      });
      current = null;
    }
  };

  for (const raw of lines) {
    const line = raw.trim();
    if (!line) continue; // skip empty

    if (/^[-]{2,}/.test(line)) {
      // separator between products
      flush();
      continue;
    }

    if (/^Title:/i.test(line)) {
      flush();
      current = { title: line.replace(/^Title:\s*/i, ''), description: '', specs: '' };
      continue;
    }

    if (/^Description:/i.test(line) && current) {
      current.description = line.replace(/^Description:\s*/i, '');
      continue;
    }

    if (/^Specs:/i.test(line) && current) {
      current.specs = line.replace(/^Specs:\s*/i, '');
      continue;
    }

    // if we get here and no current product is being built, treat as a category heading
    if (!current) {
      category = line;
    }
  }
  flush();
  return products;
}

const allProducts = parseProducts(rawText);

// helper arrays by category
export const cpus = allProducts.filter(p => /cpu/i.test(p.category));
export const gpus = allProducts.filter(p => /gpu/i.test(p.category));
export const ram = allProducts.filter(p => /ram/i.test(p.category));
export const storage = allProducts.filter(p => /storage/i.test(p.category));
export const psus = allProducts.filter(p => /psu/i.test(p.category));

// export full list if needed
export const products = allProducts;
