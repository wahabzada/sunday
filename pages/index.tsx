import Head from "next/head"

// components
import { SiteLayout } from "layouts/SiteLayout"
import { Button } from "components/stateless/button/Button"

export default function Home() {

  return (
    <SiteLayout>
      <Head>
        <title>Modern frontend app | framework</title>
        <meta
          name="description"
          content="Foster creativity and innovation in your team - away from all kinds of
          unnecessary bureaucracy."
        />
      </Head>

      <div className="mx-auto max-w-4xl mt-20">
        <h1 className="text-2xl font-bold font-['Roboto'] sm:text-center sm:text-3xl mb-2 sm:mb-4">
          Goal management
        </h1>
        <h2 className="text-3xl font-bold font-['Roboto'] sm:text-center sm:text-6xl mb-6">
          for Bold and Brilliant Teams
        </h2>
        <p className="mb-10 text-lg text-gray-600 sm:text-center">
          Foster creativity and innovation in your team - away from all kinds of
          unnecessary bureaucracy!
        </p>

        <div className="flex sm:justify-center">
          <Button
            label={"Get started"}
            variant="contained"
            type="info"
            onClick={() =>
              console.log("button clicked!")
            }
            size="large"
            arrow
          />
        </div>
      </div>
    </SiteLayout>
  )
}
