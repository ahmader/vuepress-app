---
sidebar: true # (auto|true|false)
layout: AnotherLayout
footer: Made by ahmader with ❤️
tocTitle: On First PAGE!
---

# First page ever!

## How this works!

Because VuePress applications are server-rendered in Node.js when generating static builds, any Vue usage must conform to the [universal code requirements](https://ssr.vuejs.org/en/universal.html). In short, make sure to only access Browser / DOM APIs in `beforeMount` or `mounted` hooks.

If you are using or demoing components that are not SSR friendly (for example containing custom directives), you can wrap them inside the built-in `<ClientOnly>` component:

::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: details
This is a details block, which does not work in IE / Edge
:::


- A Paragraph
- Another Paragraph


## hello
later in doc


::: slot sidebar-top
> sidebar top extra
:::
::: slot sidebar-bottom
> sidebar bottom extra
:::
::: slot page-top
> page top extra
:::
::: slot page-bottom
> page bottom extra
:::