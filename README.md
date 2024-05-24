# Hands on Nest Js application development

After React, it's time to get our hands durty with Next Js technology.

## Topics

- Routing/Navigation
- Client and Server Component (directives)
- Fetch data
- Caching with fetch
- Styling with daisyui
- Get parameters (path variable, search params)
- Layout

## Technologies

- React 18
- Next JS 14
- Typescript
- Tailwind CSS
- CSS
- DaisyUI
- Fast sort

## Tips/Caution

When you want to get a parameter on path like '/user/[userID]/' make sure to use "params" like this.
```ts
interface Props{
    params: {paramName: number | string}
}
```
But when you want to get a search parameter like '/user?id=[idParam]/' make sure to use "searchParams" like this instead.
```ts
interface Props{
    searchParams: {paramName: number | string}
}
```