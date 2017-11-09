'use strict'

module.exports = {
  output: './README.md',
  template: './README_TEMPLATE.md',
  sortSnippetsByPrefix: false,
  snippets: [
    '## Vue Snippets',
    {
      title: '### Vue Base Snippets',
      filePath: './snippets/vue.json'
    },
    {
      title: '### Vue Template Snippets',
      filePath: './snippets/vue-template.json'
    },
    {
      title: '### Vue Template Pug Snippets',
      filePath: './snippets/vue-template-pug.json'
    },
    {
      title: '### Vue Script Snippets',
      filePath: './snippets/vue-script.json'
    },
    '## Vue Router Snippets',
    {
      title: '### Vue Template Router Snippets',
      filePath: './snippets/vue-template-router.json'
    },
    {
      title: '### Vue Template Router Pug Snippets',
      filePath: './snippets/vue-template-router-pug.json'
    },
    {
      title: '### Vue Script Router Snippets',
      filePath: './snippets/vue-script-router.json'
    },
    '## Vuex Snippets',
    {
      title: '### Vue Script Vuex Snippets',
      filePath: './snippets/vue-script-vuex.json'
    },
    '## SSR Snippets',
    {
      title: '### Vue Script Word Snippets',
      filePath: './snippets/vue-script-ssr.json'
    }
  ]
}
