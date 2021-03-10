import React from 'react'
import { BaseTestimonialItem } from 'Components/Common'

const argTypes = {
  className: {
    table: {
      type: { summary: 'string' },
    },
  },
  testimonial: {
    table: {
      type: { summary: 'object' },
    },
  },
}

const Template = (args) => <BaseTestimonialItem {...args} />

export const Playground = Template.bind({})
Playground.args = {
  className: '',
  testimonial: {
    id: 13,
    scope: 'scholarship_pages.show.testimonials',
    name: 'Annie Frische',
    profile_picture: {
      rawFile: {
        preview:
          'http://stage.harbour.space/storage/images/students/83908770-4148-11eb-a9cf-c1da56f8d5bc.png',
      },
      src:
        'http://stage.harbour.space/storage/images/students/83908770-4148-11eb-a9cf-c1da56f8d5bc.png',
      title:
        'http://stage.harbour.space/storage/images/students/83908770-4148-11eb-a9cf-c1da56f8d5bc.png',
    },
    small_picture: {
      rawFile: {
        preview:
          'http://stage.harbour.space/storage/images/students/83908770-4148-11eb-a9cf-c1da56f8d5bc.png',
      },
      src:
        'http://stage.harbour.space/storage/images/students/83908770-4148-11eb-a9cf-c1da56f8d5bc.png',
      title:
        'http://stage.harbour.space/storage/images/students/83908770-4148-11eb-a9cf-c1da56f8d5bc.png',
    },
    program_link: 'https://harbour.space/digital-marketing',
    program_name: 'Digital Marketing',
    company_logo:
      'http://stage.harbour.space/storage/images/students/logos/a0e6fa00-525a-11ea-ae76-e71f4e1f9265.png',
    company_name: 'Harbour.Space',
    current_position: 'Alumni',
    text:
      'This Fellowship was a turning point in my career. I wouldn’t be where I am today without the financial support and experienced offered through the program.',
    education: 'Intern',
    country: {
      id: 143,
      scope: 'scholarship_pages.show.testimonials.country',
      country_code: 'md',
      country_name: 'Moldova Republic of',
      country_flag: {
        rawFile: {
          preview:
            'http://stage.harbour.space/storage/images/flags/4x3/d74dbb10-50b3-11ea-b59a-17d3f3a452d2.svg',
        },
        src:
          'http://stage.harbour.space/storage/images/flags/4x3/d74dbb10-50b3-11ea-b59a-17d3f3a452d2.svg',
        title:
          'http://stage.harbour.space/storage/images/flags/4x3/d74dbb10-50b3-11ea-b59a-17d3f3a452d2.svg',
      },
    },
  },
}

export default {
  title: 'BaseTestimonialItem',
  component: BaseTestimonialItem,
  argTypes,
}
