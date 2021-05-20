export const home = {
  draft: {
    hero: {
      title: 'Hmm, need something clever here',
      body: 'blah blah blah, our product is the best!',
    },
    features: [
      { title: 'Feature 1', body: 'something dope about feature 1 here soon.' },
      { title: 'Feature 2', body: 'something dope about feature 2 here soon.' },
    ],
  },
  published: {
    hero: {
      title: 'Hey ho, Let\'s go!',
      body: 'Formação e Atendimento na Abordagem Sistêmica Fenomenológica',
    },
    features: [
      {
        title: 'Atendimento',
        body:
          'Oferecemos atendimentos individuais ou em grupo.',
        link: '/atendimento',
        image: '/images/atendimento.jpg'
      },
      { title: 'Formações', body: 'Graduação e Pós-Graduação em Abordagem Sistêmica Fenomenológica', link: '/formacao', image: '/images/formacao.jpg' },
      { title: 'Editora', body: 'Conheça livros lançados pelo Instito Oca', link: '/editora', image: '/images/editora.jpg' },
    ],
  },
}

export const posts = {
  draft: [
    `---
title: "We're hiring"
summary: 'Will come up with summary later'
slug: 'we-are-hiring'
publsihedOn: ''
---

## nice post, who dis
`,
    `---
title: Why you should write down everything
summary: Will come up with summary later
slug: why-you-should-write-down-everything
publsihedOn: ''
---
## Writing is fun`,
  ],
  published: [
    `---
title: "We're hiring"
summary: Come work at a really nice company.
slug: we-are-hiring
publsihedOn: '12-03-2020'
---
## Come with with us
`,
    `---
title: Why you should write down everything
summary: If you write it down, you won't forget.
slug: why-you-should-write-down-everything
publsihedOn: '3-20-2020'
---
## Elon musk writes`,
  ],
}
