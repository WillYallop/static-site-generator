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
```

## Explanation

A route is effectively a page. It takes in up to 4 parameters: a path, template, loaders and optionally paramLookup. This tells SSG what Liquid template to render on a GET request in dev mode, and on build: what pages to generate. 

### Path

This is the value you would enter in your browser to visit the page. In dev mode, Express uses this to generate the routes, and on the build, this is used to generate the structure of your site. A standard path would look like this: ``/about-us``.

In some cases, however, you may want a dynamic route that fetches different data based on a parameter in the path. You can define a parameter in your path like so ``/blogs/:slug`` (using a semi-colon). This parameter value is passed to your loader functions so you can use it to query blogs depending on the slug.


### Template

The template key is used to define the Liquid file that the route should use.

### Loaders

The loaders key takes an array of loader functions (see type below). A loader function is a function that is run before each route is rendered and is used to fetch data and pass it down into your liquid template, these functions will have the path parameters passed down to them as well.

```typescript
type LoaderFunction = (params?: Request["params"]) => Promise<any>;

const optionsLoader: LoaderFunction = async (params) => {
    return {
        options: {
            title: 'Welcome to <span class="highlight">SSG</span>',
            subtitle:
            'Get started by editing <span class="code-block">config.ts</span>',
        },
    };
};

export default optionsLoader;
```

In your liquid you can use the following data like so:

```liquid
<div>
    <h1>{{ options.title }}</h1>
    <p>{{ options.subtitle }}</p>
</div>
```

### Param Lookup

If you have a parameter in your route.path value (``/blogs/:slug``), then you must include this in the route. It is responsible for supplying all of the possible parameters for the route. The build script uses this so it knows what values to populate in the path parameters, and the dev script uses this to check if the page exists.

This value can either take a function or an array. This function must always return an array of objects that contains the path parameters you have defined. For example, a path value like so ``/blogs/:slug`` would require a paramLookup value of the following:

```typescript
type ParamTableLookup = () => Promise<Array<{ [key: string]: string }>>;

const blogParamLookup: ParamTableLookup = async () => {
    // Here you would query your database and return ALL of the blog's slugs.
    return [
        {
            slug: "my-blog-1",
        },
        {
            slug: "my-blog-2",
        },
        {
            slug: "my-blog-3",
        },
    ];
};


const routes: Array<RoutesObj> = [
    {
        path: "/blogs/:slug",
        template: `./site/views/templates/blog-single.liquid`,
        loaders: [blogLoader],
        paramLookup: blogParamLookup,
    },
];
```

> IMPORTANT: Each object in the paramLookup array represents a page, so on build it will only generate as many blog pages as the results you set here.