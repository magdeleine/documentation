requirejs.config({
  waitSeconds: 200,
  paths: {
    'jquery': '//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min',
    'docsearch': '//cdn.jsdelivr.net/docsearch.js/1/docsearch.min'
  },
  shim: {
    'search': ['docsearch'],
    'anchor': ['jquery', 'table-of-content']
  }
})

requirejs([
  'search',
  'anchor'
])
