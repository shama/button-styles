var btn = require('./index.js')
var yo = require('yo-yo')
var csjs = require('csjs')

var buttons = [
  'Default', 'Primary', 'Warning', 'Danger', 'Info', 'Disabled'
]

var style = csjs`
.demo {
  width: 970px;
  margin: 1rem auto;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
}
.demo button {
  margin: 1rem;
  flex: auto;
  width: 25%;
}
`

var demo = yo`<div class="${style.demo}">
  ${buttons.map(function (button) {
    return yo`<button class="${btn[button.toLowerCase()]}">
      ${button} Button
    </button>`
  })}
</div>`

document.body.appendChild(demo)
