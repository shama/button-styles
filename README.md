# button-styles

![example](https://raw.githubusercontent.com/shama/button-styles/master/example.png)

> Inspired by http://designmodo.github.io/Flat-UI/

## install

```shell
npm install button-styles --save
```

## usage

```js
var btn = require('button-styles')
var yo = require('yo-yo')

var primary = yo`<button class="${btn.primary}">Primary</button>`
var warning = yo`<button class="${btn.warning}">Warning</button>`
var danger = yo`<button class="${btn.danger}">Danger</button>`
```

## customize

If you would like to customize the button styles:

```js
var btn = require('button-styles')
var csjs = require('csjs')
var yo = require('yo-yo')

var custom = csjs`
.custom extends ${btn.primary} {
  background-color: #34495e;
}
.custom:hover {
  background-color: #415b76;
}
`

var custom = yo`<button class="${btn.custom}">Custom</button>`
```

# license
(c) 2016 Kyle Robinson Young. MIT License
