import type { Meta } from '@storybook/react'

import { Button } from './Buttons'
const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  parameters: {
    backgrounds: {
      values: [
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
        { name: 'blue', value: '#00f' },
      ],
    },
  },
}

export const Green = {
  args: {
    title: 'Button',
    onClick: () => console.warn('click'),
  },
}

export const Black = {
  args: {
    ...Green.args,
    type: 'black',
  },
}

export default meta
