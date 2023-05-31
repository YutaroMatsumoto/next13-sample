import 'twin.macro'
import { UseFormRegisterReturn } from 'react-hook-form'

type Props = {
  id: string
  registeration?: UseFormRegisterReturn
  className?: string
}

export const TextInput = ({ id, registeration, className }: Props) => {
  return (
    <input
      id={id}
      type="text"
      tw="w-full border-solid border border-gray30 rounded-lg px-2 py-1 focus:outline-none focus:border focus:border-green40"
      className={className}
      {...registeration}
    />
  )
}

// 今回のように非制御コンポーネントで利用する場合、以下を参考にして、ref属性を受け取る書き方もできる？
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
