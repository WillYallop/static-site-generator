# Static Site Generator

> This is intended as a boiletplate project

This is a minimal, but very flexible and powerful static site generator that is built around Express and LiquidJS.

## Scripts

```
npm run dev
```

> This spins up an Express server where you can access your site.

```
npm run build
```

> This will statically generate your site, and dump it in a build directory.

## Pages (Routes)

Define your pages (we call them routes) in your config.ts file. This can be found at the root of the project. A page consists of 3 things: paths, tempaltes and loaders. Like so.

```typescript
const routes: Array<RoutesObj> = [
  {
    path: "/",
    template: "site/templates/home.liquid",
    loaders: [homepageLoader],
  },
  {
    path: "/blog/:slug",
    template: "site/templates/blog.liquid",
    loaders: [blogLoader],
    paramLookup: await blogParamLookup(),
  },
];
```

### Path

The path represents where the page will be located on your site. The path value can also contain Express params, as seen in the above example of `/blog/:slug`.

### Template

The template value is a path to the liquid file you wish to use for this route. It is relative to the root of the project.

### Loaders

The loaders key takes an array of functions. These loader functions are ran before building/serving the route, and the data returned from them is passed down into your Liquid template.

### Param Table

If the route's path has a paramater in it, then the paramLookup key is required. This should include an array of objects that contains key value pairs for each paramater in the route's path. If you need to do a lookup to get these values, you can execute a function here. Else you could just statically write this data.

In dev mode, if a route cant be matched against this, the page will 404. With the build script, we only generate files based on the results of this.

```typescript
const blogparamLookupLookup = async () => {
  // query all blogs from your API, then return slug paramater values.
  return [
    {
      slug: "blog-slug-1",
    },
    {
      slug: "blog-slug-2",
    },
  ];
};

const routes: Array<RoutesObj> = [
  {
    path: "/blog/:slug",
    template: "site/templates/blog.liquid",
    loaders: [blogLoader],
    paramLookup: await blogparamLookupLookup(),
  },
  // OR
  {
    path: "/blog/:slug",
    template: "site/templates/blog.liquid",
    loaders: [blogLoader],
    paramLookup: [
      {
        slug: "blog-slug-1",
      },
      {
        slug: "blog-slug-2",
      },
    ],
  },
];
```
