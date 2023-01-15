export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'blurb',
      title: 'Blurb',
      type: 'text',
      description: 'A short blurb (one sentence or short paragraph intro) of the article, shown on the thumbnails but not on the actual article pages. This could even just be a copy paste of the first paragraph of the article body.',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],

  preview: {
    select: {
      title: 'title',
      blurb: 'blurb',
      media: 'mainImage',
    },
    prepare(selection) {
      const {blurb} = selection
      return Object.assign({}, selection, {
        subtitle: blurb && `${blurb}`,
      })
    },
  },
}
