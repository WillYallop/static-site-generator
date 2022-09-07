# Static Site Generator

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
  },
];
```

### Path

The path represents where the page will be located on your site. The path value can also contain Express params, as seen in the above example of `/blog/:slug`. However, the use case of these differs from how you would typically use them in a standard Express app.

### Template

The template value is a path to the liquid file you wish to use for this route. It is relative to the root of the project.

### Loaders

The loaders key takes an array of functions. These loader functions are ran before building/serving the route, and the data returned from them is passed down into your Liquid template.

This is still a work in progress. Loaders that belong to a route which contain a URL paramater in the path value, are expected to return an array of results. Each item in this array corrosponds to an individual page. The expected return value should look like this:

```typescript
return [
  {
    paramater: {
      slug: "blog-title-one",
    },
    data,
  },
  {
    paramater: {
      slug: "blog-title-two",
    },
    data,
  },
];
```

The paramater key contains an object that has values for each URL paramater that was defined in the route path value (above was `"/blog/:slug"`). The data value is what is passed down when rendering the Liquid templates.
