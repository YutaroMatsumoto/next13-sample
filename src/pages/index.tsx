import Head from 'next/head'
import { RegisterForm } from 'src/features/sample/RegisterForm'
import { Button } from 'src/features/ui/button/Buttons'
import { TextInput } from 'src/features/ui/form/TextInput'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <RegisterForm title="サンプル" />
        <Button title="テスト" onClick={() => console.log('click')} />
      </main>
    </>
  )
}
