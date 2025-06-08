import { type SchemaTypeDefinition } from 'sanity'
import { heroSection } from './heroSection'
import { aboutSection } from './aboutSection'
import { servicesSection } from './servicesSection'
import { contactSection } from './contactSection'
import { featuredToursSection } from './featuredToursSection'
import { categoriesSection } from './categoriesSection'
import { specializationsSection } from './specializationsSection'
import { testimonialsSection } from './testimonialsSection'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    heroSection,
    aboutSection,
    servicesSection,
    contactSection,
    featuredToursSection,
    categoriesSection,
    specializationsSection,
    testimonialsSection,
  ],
}
