import type { Meta, StoryObj } from '@storybook/react'
import { TextInput } from '.'

const meta = {
  // title: 'TextInput',
  component: TextInput,
  args: {},
  argTypes: {
    className: { table: { disable: true } }, // これでcontrolsから対象外にできる
  },
  tags: ['autodocs'], // enable automatic documentation page
} satisfies Meta<typeof TextInput>

export default meta

type Story = StoryObj<typeof meta>
export const Default: Story = {}

export const Disable: Story = {
  args: {
    disabled: true,
  },
}
