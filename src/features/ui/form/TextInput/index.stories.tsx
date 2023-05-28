import type { Meta, StoryObj } from '@storybook/react'
import { TextInput } from '.'
const meta = {
  title: 'Button',
  component: TextInput,
  args: { title: 'TextInput' },
  argTypes: {
    onClick: { action: 'clicked' },
    className: { table: { disable: true } }, // これでcontrolsから対象外にできる
  },
  tags: ['autodocs'], // enable automatic documentation page
} satisfies Meta<typeof TextInput>

export default meta
