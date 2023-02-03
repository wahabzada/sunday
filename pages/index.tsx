import Head from "next/head"

// components
import { DefaultLayout } from "layouts/DefaultLayout"

export default function Home() {
  return (
    <DefaultLayout>
      <Head>
        <title>Sunday | A React Boilerplate</title>
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
          A React b`oilerplate project for modern web apps
        </p>
      </div>
    </DefaultLayout>
  )
}
