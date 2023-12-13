import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import '@upstart/patina-design-system/css-reset' // <-------- DON'T FORGET THIS FIRST
import {PatinaProvider} from '@upstart/patina-design-system'

export default function App({Component, pageProps}: AppProps) {
  return <PatinaProvider><Component {...pageProps} /></PatinaProvider>
}
