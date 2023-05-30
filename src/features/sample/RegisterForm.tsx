import { useId } from 'react'
import { useForm } from 'react-hook-form'
import { TextInput } from '../ui/form/TextInput'
import { styled } from 'twin.macro'

type Props = {
  title: string
}
export const RegisterForm = ({ title }: Props) => {
  const {} = useForm
  const componentId = useId()
  console.log({ componentId })
  return (
    <Form aria-label={title}>
      <TextInput />
    </Form>
  )
}

const Form = styled.form`
  width: 50%;
  height: 200px;
  background-color: #e7e7e7;
`
