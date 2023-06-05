import 'twin.macro'
import { TextInput } from 'src/features/ui/form/TextInput'
import { ComponentProps, ReactNode, forwardRef, useId } from 'react'
import { ErrorMessage } from 'src/features/ui/form/ErrorMessage'

type Props = ComponentProps<typeof TextInput> & {
  title: string
  description?: string
  error?: string
  // info?: ReactNode
}

// あくまで汎用的なTextbox
export const TextInputWithInfo = forwardRef<HTMLInputElement, Props>(
  function TextInputWithInfo(
    { title, description, error, className, ...props },
    ref
  ) {
    ref
    const componentId = useId()
    const textInputId = `${componentId}-textInput`
    const descriptionId = `${componentId}-description`
    const errorMessageId = `${componentId}-errorMessage`
    return (
      <section>
        <header>
          <label htmlFor={textInputId}>{title}</label>
        </header>
        <TextInput
          {...props}
          id={textInputId}
          className={className}
          ref={ref}
          aria-invalid={!!error}
          aria-errormessage={errorMessageId}
          aria-describedby={description && descriptionId}
        />
        {(error || description) && (
          <footer>
            {description && <p id={descriptionId}>{description}</p>}
            {error && (
              <ErrorMessage id={errorMessageId} aria-invalid={!!error}>
                {error}
              </ErrorMessage>
            )}
          </footer>
        )}
      </section>
    )
  }
)
