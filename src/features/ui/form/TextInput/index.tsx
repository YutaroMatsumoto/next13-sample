import { forwardRef } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
import 'twin.macro'

type Props = {
  registeration: UseFormRegisterReturn
  className?: string
}

// type Props = React.ComponentPropsWithRef<'input'> & {
//   registeration: UseFormRegisterReturn
//   className?: string
// }

// fprwardrefを使ってみたパターン。だが、不要？
// export const TextInput = forwardRef<HTMLInputElement, Props>(function TextInput(
//   { registeration, className },
//   ref
// ) {
//   return (
//     <input
//       tw="w-full border-solid border border-gray30 rounded-lg px-2 py-1 focus:outline-none focus:border focus:border-green40"
//       className={className}
//       // ref={ref}
//       {...registeration}
//     />
//   )
// })

// この場合、ref属性を親から受け取っているわけではないのでforwardRefの使用は必要ない？
export const TextInput = ({ registeration, className }: Props) => {
  return (
    <input
      type="text"
      tw="w-full border-solid border border-gray30 rounded-lg px-2 py-1 focus:outline-none focus:border focus:border-green40"
      className={className}
      // ref={ref}
      {...registeration}
    />
  )
}

// 今回のように非制御コンポーネントで利用する場合、以下を参考にして、ref属性を受け取る必要がある？
// import clsx from "clsx";
// import { forwardRef } from "react";
// import styles from "./styles.module.css";

// type Props = React.ComponentPropsWithRef<"input">;

// export const Textbox = forwardRef<HTMLInputElement, Props>(function Textbox(
//   { className, ...props },
//   ref
// ) {
//   return (
//     <input
//       type="text"
//       {...props}
//       ref={ref}
//       className={clsx(className, styles.module)}
//     />
//   );
// });
