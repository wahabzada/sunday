import "../styles/globals.css"
import type { AppProps } from "next/app"
import { RecoilRoot } from "recoil"
import RecoilNexus from "recoil-nexus"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <RecoilNexus />
      <Component {...pageProps} />
    </RecoilRoot>
  )
}
