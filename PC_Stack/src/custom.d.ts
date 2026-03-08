// allow importing plain text files with ?raw
declare module '*.txt' {
  const value: string;
  export default value;
}

// augment Vite's import.meta for globbing

declare module 'vite/client' {
  interface ImportMeta {
    globEager: (pattern: string) => Record<string, any>;
  }
}
