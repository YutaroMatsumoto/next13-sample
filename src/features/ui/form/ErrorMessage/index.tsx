import 'twin.macro'
import { ComponentPropsWithoutRef, forwardRef } from 'react'
import tw, { styled } from 'twin.macro'

type Props = ComponentPropsWithoutRef<'p'>

export const ErrorMessage = forwardRef<HTMLParagraphElement, Props>(
  function ErrorMessage({ className, ...props }, ref) {
    console.log({ props })
    return (
      <ErrorMessageStyle
        {...props}
        role="alert"
        aria-live="off"
        ref={ref}
        // className={className}
      />
    )
  }
)

const ErrorMessageStyle = styled.p`
  &[aria-invalid='true'] {
    ${tw`text-red`};
  }
`
