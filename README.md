


# Lightweight CSS loader for webpack



Inject a CSS file in the DOM.
Useful for loading a simple CSS file without embedding both `css-loader` and `style-loader` in your script.


## Installation

`npm install --save-dev simple-css-loader`

## Usage

With this `style.css` :
```css
a {
    color: red;
}
a:hover {
    color: blue;
}
```
,

```js
require('simple-css!./style.css');
```

will append this Dom node to `<head>` :

```html
<style type="text/css" >
a {
    color: red;
}
a:hover {
    color: blue;
}
</style>
```
