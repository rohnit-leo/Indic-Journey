import { defineType } from 'sanity';

export const categoriesSection = defineType({
  name: 'categoriesSection',
  title: 'Categories Section',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'id', title: 'ID', type: 'string' },
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text' },
            { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
            { name: 'icon', title: 'Icon', type: 'string' },
            { name: 'color', title: 'Color', type: 'string' },
            {
              name: 'subcategories',
              title: 'Subcategories',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    { name: 'name', title: 'Name', type: 'string' },
                    { name: 'link', title: 'Link', type: 'url' },
                    { name: 'description', title: 'Description', type: 'text' },
                    { name: 'tours', title: 'Tours', type: 'string' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
});
