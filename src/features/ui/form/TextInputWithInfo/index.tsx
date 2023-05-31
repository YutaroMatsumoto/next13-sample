import 'twin.macro'
import { UseFormRegisterReturn } from 'react-hook-form'
import { TextInput } from '../TextInput'

type Props = {
  title: string
  registeration?: UseFormRegisterReturn
}

export const TextInputWithInfo = ({ registeration }: Props) => {
  return (
    <section>
      <TextInput registeration={registeration} />
    </section>
  )
}
