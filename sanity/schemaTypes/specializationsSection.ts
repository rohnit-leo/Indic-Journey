import { defineType } from 'sanity';

export const specializationsSection = defineType({
  name: 'specializationsSection',
  title: 'Specializations Section',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    {
      name: 'specializations',
      title: 'Specializations',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'icon', title: 'Icon', type: 'string' },
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text' },
          ],
        },
      ],
    },
  ],
});
