import Head from "next/head"

// components
import { LayoutProps } from "./Layout.types"

export const SiteLayout: React.FC<LayoutProps> = ({ children }) => {
  let now = new Date()
  const getCurrentYear = now.getFullYear()

  return (
    <>
      <Head>
        <title>App name</title>
        <meta
          name="description"
          content="Foster creativity and innovation in your team - away from all kinds of
          unnecessary bureaucracy!"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header>
        
        </header>
        <main>{children}</main>
        <footer className="mt-20">
          <p className="text-gray-600 sm:text-center text-xs">
            © {getCurrentYear} app
          </p>
        </footer>
      </div>
    </>
  )
}
