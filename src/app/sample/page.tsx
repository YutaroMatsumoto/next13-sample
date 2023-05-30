import Head from 'next/head'
import { styled } from 'twin.macro'
// import { useForm } from 'react-hook-form'
// import { RegisterForm } from 'src/features/sample/RegisterForm'
// import { Button } from 'src/features/ui/button/Buttons'
// import { TextInput } from 'src/features/ui/form/TextInput'

// 初めてのapp router
export default function s() {
  // const { register } = useForm()
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        a{/* <RegisterForm title="サンプル" /> */}
        {/* <Form></Form> */}
        {/* <Button title="テスト" onClick={() => console.log('click')} /> */}
      </main>
    </>
  )
}

// const Form = styled.form`
//   width: 50%;
//   height: 200px;
//   background-color: #e7e7e7;
// `
