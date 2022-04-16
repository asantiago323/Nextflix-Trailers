import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'

function MyApp({ Component, pageProps }: AppProps) {
  const MainComponent = Component as any;
  return (
    <RecoilRoot>
      <MainComponent {...pageProps} />
    </RecoilRoot>
  )
}

export default MyApp
