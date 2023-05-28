import { useForm } from 'react-hook-form'

type Props = {
  title: string
}
export const RegisterForm = ({ title }: Props) => {
  const {} = useForm
  return <form aria-label={title}></form>
}
