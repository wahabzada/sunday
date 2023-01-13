import Head from "next/head"

// components
import { SiteLayout } from "layouts/SiteLayout"
import { Button } from "components/button/Button"

export default function Home() {
  return (
    <SiteLayout>
      <Head>
        <title>Sunday | Web app starter kit</title>
        <meta
          name="description"
          content="Foster creativity and innovation in your team - away from all kinds of
          unnecessary bureaucracy."
        />
      </Head>

      <div className="mx-auto max-w-4xl mt-20">
        <h1 className="text-3xl font-bold font-['Roboto'] sm:text-center sm:text-6xl mb-6">
          Sunday | Web app starter kit
        </h1>
        <p className="mb-10 text-lg text-gray-600 sm:text-center">
          All configured - Good luck building your next amazing app.
        </p>

        <div className="flex sm:justify-center">
          <Button
            label={"Get started"}
            variant="contained"
            type="info"
            onClick={() => alert("Let's go!!!")}
            size="large"
            arrow
          />
        </div>
      </div>
    </SiteLayout>
  )
}
