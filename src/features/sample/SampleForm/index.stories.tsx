import { Meta, StoryObj } from '@storybook/react'
import { SampleForm, SampleFormInputType } from '.'
import { useForm } from 'react-hook-form'

function TestFormComponent() {
  const {
    register,
    formState: { errors },
  } = useForm<SampleFormInputType>()
  return <SampleForm register={register} errors={errors} />
}

export default {
  component: TestFormComponent,
  args: { children: 'エラー' },
} as Meta<typeof SampleForm>

type Story = StoryObj<typeof SampleForm>

export const Default: Story = {}
