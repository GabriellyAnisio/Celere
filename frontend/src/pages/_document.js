import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Celere</title>
      </Head>
      <body className=' overflow-hidden'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
