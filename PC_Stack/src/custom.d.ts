declare module '*.txt' {
  const value: string;
  export default value;
}

declare module 'vite/client' {
  interface ImportMeta {
    globEager: (pattern: string) => Record<string, any>;
  }
}
