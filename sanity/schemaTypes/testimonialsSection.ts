import { defineType } from 'sanity';

export const testimonialsSection = defineType({
  name: 'testimonialsSection',
  title: 'Testimonials Section',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'subtitle', title: 'Subtitle', type: 'string' },
    {
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Name', type: 'string' },
            { name: 'location', title: 'Location', type: 'string' },
            { name: 'rating', title: 'Rating', type: 'number' },
            { name: 'text', title: 'Text', type: 'text' },
            { name: 'tour', title: 'Tour', type: 'string' },
          ],
        },
      ],
    },
    {
      name: 'stats',
      title: 'Stats',
      type: 'object',
      fields: [
        { name: 'rating', title: 'Rating', type: 'string' },
        { name: 'travelers', title: 'Travelers', type: 'string' },
      ],
    },
  ],
});
