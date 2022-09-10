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

## Tags

Tags create the logic and control flow for templates. The curly brace percentage delimiters {% and %} and the text that they surround do not produce any visible output when the template is rendered. This lets you assign variables and create conditions or loops without showing any of the Liquid logic on the page. 

SSG has no custom tags currently. You can find all possible tags [here](https://liquidjs.com/tags/overview.html).