## Explanation

The config.ts file is the main configuration file for the generator. It is a typescript file that exports a single object with an interface of GeneratorConfig. This file is responsible for setting your routes, globalLoaders, site root, and output directory.

Global loaders work in the same way as route loader, except they are accessible on every route.

### Example

```typescript
const routes: Array<RoutesObj> = [
    {
        path: "/",
        template: `./site/views/templates/home.liquid`,
        loaders: [homepageLoader],
    },
    {
        path: "/info/:slug",
        template: `./site/views/templates/info-single.liquid`,
        loaders: [infoLoader],
        paramLookup: infoParamLookup,
    },
];

const config: GeneratorConfig = {
    routes,
    globalLoaders: [optionsLoader],
    outputDir: "dist",
    siteRoot: "site",
};
export default config;
```