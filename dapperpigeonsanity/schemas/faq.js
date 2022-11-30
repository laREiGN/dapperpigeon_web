export default {
    name: 'faq',
    title: 'FAQ',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Question',
            description: 'This is the question you want to answer',
            type: 'text'
        },
        {
            name: 'subtitle',
            title: 'Answer',
            description: 'This is the answer to the question',
            type: 'text'
        }

    ],

    preview: {
        select: {
            title: `title`,
            subtitle: 'subtitle'
        }
    }
}