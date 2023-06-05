// import { useForm } from 'react-hook-form'
import { styled } from 'twin.macro'
import { TextInputWithInfo } from '../../ui/form/TextInputWithInfo'
import { FieldValues, FieldErrors, UseFormRegister } from 'react-hook-form'

export type SampleFormInputType = {
  title: string
  content: string | null
}

type Props<T extends FieldValues = SampleFormInputType> = {
  register: UseFormRegister<T>
  errors: FieldErrors<T>
}
export const SampleForm = ({ register, errors }: Props) => {
  return (
    <Div>
      <TextInputWithInfo
        {...register('title', { required: '必須です' })}
        title="タイトル"
        error={errors?.title?.message}
      />
      <TextInputWithInfo
        {...register('content', {
          maxLength: { value: 50, message: '50文字以内で入力してください' },
        })}
        title="内容"
        error={errors?.content?.message}
      />
    </Div>
  )
}

const Div = styled.div`
  width: 50%;
  padding: 20px;
  height: 200px;
  background-color: #e7e7e7;
`
