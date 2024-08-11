// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-08-10',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'イッチャイナ',
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css',
          integrity: 'sha384-9ndCyUa4B5TBQxHrENa66d7k7p3yhfip04tzx9JJlwm9jsFf5JxoPYpW3fNv5pF5',
          crossorigin: 'anonymous'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&display=swap'
        }
      ],
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js',
          integrity: 'sha384-oBqDVmMz4fnFO9gyb4e9sVZO6HAXg7xq6t1gNfXK/Hp0vQ5LbiB8+AMceujVqI4h',
          crossorigin: 'anonymous',
          defer: true
        },
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js',
          integrity: 'sha384-ho+yN1W1yP13eM5a2mwAZXt+Blrc1l4/IN+EkpfjTZOdJie80tLem9BSK6c2j4Iy',
          crossorigin: 'anonymous',
          defer: true
        }
      ]
    }
  }
})