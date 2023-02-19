import Head from 'next/head'
import { Button } from 'src/components/atoms/button/Buttons'
import { TextInput } from 'src/components/atoms/form/TextInput'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Button title="テスト" onClick={() => console.log('click')} />
      </main>
    </>
  )
}
