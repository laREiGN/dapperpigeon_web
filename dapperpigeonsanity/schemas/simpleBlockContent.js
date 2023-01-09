export default {
    title: 'Simple Block Content',
    name: 'simpleBlockContent',
    type: 'array',
    of: [
      {
        title: 'Block',
        type: 'block',
        styles: [
          {title: 'Normal', value: 'normal'},
          {title: 'H1', value: 'h1'},
          {title: 'H2', value: 'h2'},
          {title: 'H3', value: 'h3'},
        ],
        lists: [{title: 'Bullet', value: 'bullet'}],
      },
    ],
  }
  