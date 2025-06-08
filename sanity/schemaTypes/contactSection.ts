import { defineType } from 'sanity';

export const contactSection = defineType({
  name: 'contactSection',
  title: 'Contact Section',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'phone', title: 'Phone', type: 'string' },
    { name: 'email', title: 'Email', type: 'string' },
    { name: 'address', title: 'Address', type: 'text' },
    { name: 'mapLink', title: 'Map Link', type: 'url' },
  ],
});
