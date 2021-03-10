import React from 'react'
import { BaseButton } from 'Components/Common'

const argTypes = {
  className: {
    table: {
      type: { summary: 'string' },
    },
  },
  children: {
    table: {
      type: null,
    },
  },
}

const Template = (args) => <BaseButton {...args} />

export const Playground = Template.bind({})
Playground.args = {
  className: '',
  onClick() {},
  children: 'Button',
}

export default {
  title: 'BaseButton',
  component: BaseButton,
  argTypes,
}
