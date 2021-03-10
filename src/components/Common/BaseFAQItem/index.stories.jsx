import React from 'react'
import { BaseFAQItem } from 'Components/Common'

const argTypes = {
  className: {
    table: {
      type: { summary: 'string' },
    },
  },
  faq: {
    table: {
      type: { summary: 'object' },
    },
  },
}

const Template = (args) => <BaseFAQItem {...args} />

export const Playground = Template.bind({})
Playground.args = {
  className: '',
  faq: {
    type: 'Application process',
    question: 'What happens once I conduct the interview with Harbour.Space?',
    answer: [
      {
        type: 'paragraph',
        data:
          'We will compile your results to present to the University’s Board of Admissions and the company. If your profile is selected, you will be informed about the next steps via email.',
      },
    ],
  },
}

export default {
  title: 'BaseFAQItem',
  component: BaseFAQItem,
  argTypes,
}
