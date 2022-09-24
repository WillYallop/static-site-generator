## Filters

Filters are a built-in LiquidJS feature that enables you to change the output of a Liquid object or variable. They are used within double curly braces {{ }} and variable assignment and are separated by a pipe character |. You can find a list of the default LiquidJS filters [here](https://liquidjs.com/filters/overview.html). Below are the SSG's custom filters.

### 1. Relative Asset

Relative asset is a powerful filter you will need to use. This filter will build out a relative path from the current route's path to the build directory, and then append the path you gave it. For example: 

```liquid
{{ "/css/main.css" | relativeAsset }}
```

If the above filter is added to the route with the path of "/blog/my-blog-one" the filtered result would look like "../../css/main.css". This filter ensures multiple routes with different path depths can use the same template if required, without it having to be hard coded.

### 2. Markdown

A markdown filter has been registered to convert markdown into HTML. This can be used as follows:

```liquid
{{ "# Your markdown" | markdown  }}
```

### 3. Optimise Images

Perhaps the coolest filter of all of them. This allows you to optimise an image by specifying the src, the type you wish to convert to and optionally the width you want to resize it to. Below is an example of this in use. 

```liquid
<img
    src="{{ 'abstract.jpg' | optimiseImage: 'webp' }}"
    alt="Abstract background image"
/>
<img
    src="{{ 'abstract.jpg' | optimiseImage: 'jpeg', 50 }}"
    alt="Abstract background image"
/>
<img
    src="{{ 'https://img.freepik.com/free-vector/violet-fire-colours-hand-painted-background_23-2148427580.jpg?w=2000' | optimiseImage: 'jpeg', 1920 }}"
    alt="Abstract background image"
/>
```

> Note this works with external images as well!

This filter is most powerful when combined with the HTML picture element. This combination will allow you to create multiple file formats and sizes of an image, then the browser will use the picture tag to serve the most optimal one for the client of the use.

**We support the following file formats:** webp, avif, jpeg and png!

In dev mode, images are optimised on loading a page. If the image has already been created it won't do it again. In build mode, generated images will have a unique name for cache busting!

## Tags

Tags create the logic and control flow for templates. The curly brace percentage delimiters {% and %} and the text that they surround do not produce any visible output when the template is rendered. This lets you assign variables and create conditions or loops without showing any of the Liquid logic on the page. 

SSG has no custom tags currently. You can find all possible tags [here](https://liquidjs.com/tags/overview.html).