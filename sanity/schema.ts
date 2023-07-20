import { type SchemaTypeDefinition } from 'sanity'

import faq from './schemas/faq'
import blockContent from './schemas/blockContent'
import category from './schemas/category'
import post from './schemas/post'
import author from './schemas/author'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [faq,blockContent,post, author, category],
}
