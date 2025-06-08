import { defineType } from 'sanity';

export const servicesSection = defineType({
  name: 'servicesSection',
  title: 'Services Section',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    {
      name: 'servicesList',
      title: 'Services List',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Name', type: 'string' },
            { name: 'description', title: 'Description', type: 'text' },
            {
              name: 'icon',
              title: 'Icon',
              type: 'image',
              options: { hotspot: true },
            },
          ],
        },
      ],
    },
  ],
});
