import type { Meta, StoryObj } from '@storybook/react'
import { TextInput } from '.'
import { useForm } from 'react-hook-form'
const meta = {
  title: 'TextInput',
  component: TextInput,
  args: {},
  argTypes: {
    className: { table: { disable: true } }, // これでcontrolsから対象外にできる
    registeration: { table: { disable: true } }, // これでcontrolsから対象外にできる
  },
  tags: ['autodocs'], // enable automatic documentation page
} satisfies Meta<typeof TextInput>

export default meta

const TextInputWithHooks = () => {
  const { register } = useForm()
  return <TextInput registeration={register('sample')} />
}

type Story = StoryObj<typeof meta>
export const Default: Story = {
  render: () => <TextInputWithHooks />,
}
