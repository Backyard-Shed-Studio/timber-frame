import { defineNuxtModule, addPlugin, addComponentsDir, createResolver } from "@nuxt/kit";

// Module options TypeScript type definition
export type ModuleOptions = Record<string, unknown>;

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "timber-frame",
    configKey: "timberFrame",
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup(_options, _nuxt) {
    const resolver = createResolver(import.meta.url);

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve("./runtime/plugin"));

    // No prefix: components keep their file name (<AppBoxWebsite />)
    addComponentsDir({
      path: resolver.resolve("./runtime/components"),
      pathPrefix: false,
    });
  },
});
