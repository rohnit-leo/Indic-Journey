import { defineType } from 'sanity';

export const featuredToursSection = defineType({
  name: 'featuredToursSection',
  title: 'Featured Tours Section',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'subtitle', title: 'Subtitle', type: 'string' },
    {
      name: 'tours',
      title: 'Tours',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'location', title: 'Location', type: 'string' },
            { name: 'duration', title: 'Duration', type: 'string' },
            { name: 'groupSize', title: 'Group Size', type: 'string' },
            { name: 'price', title: 'Price', type: 'string' },
            { name: 'originalPrice', title: 'Original Price', type: 'string' },
            { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
            { name: 'category', title: 'Category', type: 'string' },
            { name: 'rating', title: 'Rating', type: 'number' },
            { name: 'reviews', title: 'Reviews', type: 'number' },
            { name: 'highlights', title: 'Highlights', type: 'array', of: [{ type: 'string' }] },
            { name: 'discount', title: 'Discount', type: 'string' },
          ],
        },
      ],
    },
  ],
});
