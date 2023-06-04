import { useForm } from 'react-hook-form'
import { SampleForm, SampleFormInputType } from 'src/features/sample/SampleForm'
import { Button } from 'src/features/ui/button/Buttons'

export const SampleCreateForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SampleFormInputType>()
  return (
    <form onSubmit={handleSubmit(() => console.log('submit'))}>
      <SampleForm register={register} errors={errors} />
      <Button title="送信" onClick={() => console.log('送信ボタン')} />
    </form>
  )
}
