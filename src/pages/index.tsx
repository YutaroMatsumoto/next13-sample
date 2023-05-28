import Head from 'next/head'
import { useForm } from 'react-hook-form'
import { Button } from 'src/features/ui/button/Buttons'
import { TextInput } from 'src/features/ui/form/TextInput'

export default function Home() {
  const { register } = useForm()
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <TextInput registeration={register('example')} />
        <Button title="テスト" onClick={() => console.log('click')} />
      </main>
    </>
  )
}
