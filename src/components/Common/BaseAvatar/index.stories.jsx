import React from 'react'
import { BaseAvatar } from 'Components/Common'

const argTypes = {
  className: {
    table: {
      type: { summary: 'string' },
    },
  },
  image: {
    table: {
      type: { summary: 'string' },
    },
  },
}

const Template = (args) => <BaseAvatar {...args} />

export const Playground = Template.bind({})
Playground.args = {
  className: '',
  image:
    'http://stage.harbour.space/storage/images/students/83908770-4148-11eb-a9cf-c1da56f8d5bc.png',
}

export default {
  title: 'BaseAvatar',
  component: BaseAvatar,
  argTypes,
}
