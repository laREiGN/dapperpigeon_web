export default {
    name: 'aboutus',
    title: 'About Us',
    type: 'document',
    fields: [
        {
            name: 'teamImage',
            title: 'Team Image',
            type: 'image',
            options: 
            {
              hotspot: true,
            },
        },
        {
            name: 'description',
            title: 'Team Description',
            description: 'Intro about team - who we are, what we do etc. Please do not use styling (bold, italics), this is simply the paragraphs',
            type: 'simpleBlockContent'
        }
    ],

    preview: {
        select: {
            title: 'description',
            media: 'teamImage',
        }
    }
}