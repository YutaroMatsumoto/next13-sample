import type { Meta, StoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'

import { SampleCreateForm } from '.'

const meta: Meta = {
  component: SampleCreateForm,
  tags: ['autodocs'], // enable automatic documentation page
} satisfies Meta<typeof SampleCreateForm>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const titleInput = canvas.getByRole('textbox', {
      name: 'タイトル',
    })

    await userEvent.type(titleInput, 'タイトル')
  },
}
