import 'twin.macro'
import { forwardRef } from 'react'

type Props = React.ComponentPropsWithRef<'input'>

// type Props = {
//   id: string
//   registeration?: UseFormRegisterReturn
//   className?: string
// }

export const TextInput = forwardRef<HTMLInputElement, Props>(function TextInput(
  { className, ...props },
  ref
) {
  return (
    <input
      type="text"
      tw="w-full box-border border-solid border border-gray30 rounded-lg px-2 py-1 focus:outline-none focus:border focus:border-green40 aria-invalid:bg-red10 aria-invalid:border-red"
      className={className}
      ref={ref}
      {...props}
    />
  )
})
