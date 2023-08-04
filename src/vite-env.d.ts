/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
  readonly VITE_TEST_VAR: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
