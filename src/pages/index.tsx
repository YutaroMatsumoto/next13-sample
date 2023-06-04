import Head from 'next/head'
import { useForm } from 'react-hook-form'
import { SampleForm, SampleFormInputType } from 'src/features/sample/SampleForm'
import { Button } from 'src/features/ui/button/Buttons'
import { TextInput } from 'src/features/ui/form/TextInput'

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SampleFormInputType>()
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <form onSubmit={handleSubmit(() => console.log('submit'))}>
          <SampleForm register={register} errors={errors} />
          <Button title="送信" onClick={() => console.log('送信ボタン')} />
        </form>
      </main>
    </>
  )
}
