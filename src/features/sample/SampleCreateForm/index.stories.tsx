import type { Meta, StoryObj } from '@storybook/react'
import { userEvent, within, waitFor } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

import { SampleCreateForm } from '.'

const meta: Meta = {
  component: SampleCreateForm,
  tags: ['autodocs'], // enable automatic documentation page
} satisfies Meta<typeof SampleCreateForm>

export default meta

type Story = StoryObj<typeof meta>

export const Succeed: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('テキストボックスに入力', async () => {
      const titleTextbox = canvas.getByRole('textbox', {
        name: 'タイトル',
      })
      await userEvent.type(titleTextbox, 'タイトル')
    })

    await step('送信ボタンをクリックして、送信成功すること', async () => {
      const submitButton = canvas.getByRole('button', { name: '送信' })
      await userEvent.click(submitButton)
      await waitFor(() => {
        // const successMessage = canvas.getByText('送信成功！')
        // expect(canvas.getByText('送信成功！')).toBeInTheDocument()
      })
    })
  },
}

export const Failed: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    await step('送信ボタンをクリック', async () => {
      const titleTextbox = canvas.getByRole('textbox', {
        name: 'タイトル',
      })
      const submitButton = canvas.getByRole('button', { name: '送信' })
      await userEvent.click(submitButton)
      await waitFor(() => {
        expect(titleTextbox).toHaveErrorMessage('必須です')
      })
    })
  },
}
