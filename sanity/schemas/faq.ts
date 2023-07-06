import {defineField, defineType} from 'sanity'

export default defineType ({
    name: 'faq',
    type: 'document',
    title: 'Frequently asked question',
    fields: [
     defineField({
        name: 'question',
        type: 'string',
        title: 'Question'
      }),
      defineField({
        name: 'answer',
        title: 'Answer',
        type: 'blockContent',
      }),
    //   defineField({
    //     name: 'answer',
    //     type: 'text',
    //     title: 'Answer',
    //   })
    ]
  })