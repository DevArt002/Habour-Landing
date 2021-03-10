import React from 'react'
import { BaseSelect } from 'Components/Common'

const argTypes = {
  className: {
    table: {
      type: { summary: 'string' },
    },
  },
  options: {
    table: {
      type: { summary: 'array' },
    },
  },
}

const Template = (args) => <BaseSelect {...args} />

export const Playground = Template.bind({})
Playground.args = {
  className: '',
  options: ['Application process', 'Program conditions', 'Apprenticeship conditions'],
  onChange() {},
}

export default {
  title: 'BaseSelect',
  component: BaseSelect,
  argTypes,
}
