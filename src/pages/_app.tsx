import Background from '@/components/Background'
import TopBar from '@/components/TopBar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return(
      <Background className='font-lexend'>

        <div className="z-1">
          <TopBar />
        </div>

        <Component {...pageProps} />
      </Background>
  ) 
  
}
