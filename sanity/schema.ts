import { type SchemaTypeDefinition } from 'sanity'

import faq from './schemas/faq'
import blockContent from './schemas/blockContent'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [faq,blockContent],
}
