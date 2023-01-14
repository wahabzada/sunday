import Head from "next/head"

// components
import { DefaultLayout } from "layouts/DefaultLayout"

export default function Home() {
  return (
    <DefaultLayout>
      <Head>
        <title>Sunday | Modern web app boilerplate</title>
        <meta
          name="description"
          content="Sunday is a boilerplate project for modern web apps"
        />
      </Head>

      <div className="mx-auto max-w-4xl mt-20">
        <h1 className="text-3xl font-bold font-['Roboto'] sm:text-center sm:text-6xl mb-6">
          Sunday
        </h1>
        <p className="mb-10 text-lg text-gray-600 sm:text-center">
          Modern web app boilerplate
        </p>
      </div>
    </DefaultLayout>
  )
}
