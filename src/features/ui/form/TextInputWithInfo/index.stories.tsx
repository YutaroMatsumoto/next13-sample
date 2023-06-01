import { Meta, StoryObj } from '@storybook/react'
import { TextInputWithInfo } from './'

export default {
  component: TextInputWithInfo,
  args: { title: '記事タイトル' },
} as Meta<typeof TextInputWithInfo>

type Story = StoryObj<typeof TextInputWithInfo>

export const Default: Story = {}

// export const Info: Story = {
//   args: { info: "0 / 64" },
// };

export const Description: Story = {
  args: { description: '不正な文字が含まれています' },
}

export const Error: Story = {
  args: { error: '不正な文字が含まれています' },
}

export const FullProps: Story = {
  args: {
    description: '半角英数64文字以内で入力してください',
    error: '不正な文字が含まれています',
  },
}
