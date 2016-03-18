var csjs = require('csjs')
var color = require('color')

var opts = {
  'text-color': '#ffffff',
  'primary-color': '#1abc9c',
  'warning-color': '#f1c40f',
  'default-color': '#bdc3c7',
  'danger-color': '#e74c3c',
  'info-color': '#3498db',
  'disabled-color': '#bdc3c7',
  'lighten-amount': .1,
  'darken-amount': .2
}

var types = [
  'primary', 'warning', 'danger', 'info'
]

module.exports = csjs`
.default {
  border: none;
  padding: .5rem 1rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.4;
  border-radius: 4px;
  transition: border .25s linear, color .25s linear, background-color .25s linear;
  -webkit-font-smoothing: subpixel-antialiased;
  cursor: pointer;
  color: ${opts['text-color']};
  background-color: ${opts['default-color']};
}
.default:hover,
.default:focus {
  background-color: ${color(opts['default-color']).lighten(opts['lighten-amount']).rgbString()};
}
.default:active {
  background-color: ${color(opts['default-color']).darken(opts['darken-amount']).rgbString()};
}
.default:focus {
  outline: 0;
}

${types.map(function (type) {
  return `.${type} extends .default {
    background-color: ${opts[type + '-color']};
  }
  .${type}:hover,
  .${type}:focus {
    background-color: ${color(opts[type + '-color']).lighten(opts['lighten-amount']).rgbString()};
  }
  .${type}:active {
    background-color: ${color(opts[type + '-color']).darken(opts['darken-amount']).rgbString()};
  }`
}).join('\n')}

.disabled extends .default {
  color: ${color(opts['text-color']).alpha(.75).rgbString()};
  background-color: ${opts['disabled-color']};
  cursor: default;
}
.disabled:hover,
.disabled:active,
.disabled:focus {
  color: ${color(opts['text-color']).alpha(.75).rgbString()};
  background-color: ${opts['disabled-color']};
}
`
