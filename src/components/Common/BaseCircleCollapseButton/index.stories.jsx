import React from 'react'
import { BaseCircleCollapseButton } from 'Components/Common'

const argTypes = {
  className: {
    table: {
      type: { summary: 'string' },
    },
  },
  active: {
    table: {
      type: { summary: 'boolean' },
    },
  },
}

const Template = (args) => <BaseCircleCollapseButton {...args} />

export const Playground = Template.bind({})
Playground.args = {
  className: '',
  onClick() {},
  active: false,
}

export default {
  title: 'BaseCircleCollapseButton',
  component: BaseCircleCollapseButton,
  argTypes,
}
