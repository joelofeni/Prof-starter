// types/global.d.ts

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    MONGO_URL?: string;
    JWT_SECRET?: string;
    NEXT_PUBLIC_API_URL?: string;
  }
}

// Global helper types
type Nullable<T> = T | null;
type Optional<T> = T | undefined;

// Allow importing SVGs, images, etc.
declare module '*.svg' {
  const content: React.FC<React.SVGProps<SVGSVGElement>>;
  export default content;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

// Server action signature (Next.js App Router)
type ServerAction<TArgs extends any[] = any[], TReturn = any> = (
  ...args: TArgs
) => Promise<TReturn>;

// Ensures merging with global namespace works properly
export {};
