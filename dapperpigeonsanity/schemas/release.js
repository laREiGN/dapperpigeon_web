export default {
    name: 'game_release',
    title: 'Game Release',
    type: 'document',
    fields: [
        {
            name: 'release_date',
            title: 'Release Date',
            description: 'Be careful editing this, as it is reflected live on the website',
            type: 'datetime'
        }
    ],

    preview: {
        select: {
            subtitle: `release_date`,
        },
        prepare(selection) {
            const {title} = selection
            return Object.assign({}, selection, {
                title: `Release of Forest of Frequencies`,
                subtitle: `Please do not edit without reason`
            })
        }
    }
}