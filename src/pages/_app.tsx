import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { IBM_Plex_Sans_JP, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google'

const ibmPlexSansJp = IBM_Plex_Sans_JP({
    weight: ['100','200','300','400','500','600','700'],
    subsets: ['latin'],
    variable: '--font-ibm-plex-sans-jp',
});

const ibmPlexSans = IBM_Plex_Sans({ 
    weight: ['100','200','300','400','500','600','700'],
    style: ['normal', 'italic'],
    subsets: ['latin-ext'],
    variable: '--font-ibm-plex-sans',
});

const ibmPlexSansMono = IBM_Plex_Mono({
    weight: ['100','200','300','400','500','600','700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    variable: '--font-ibm-plex-mono',
});

const kanas = {
    'hiragana': {},
    'katakana': {}
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${ibmPlexSans.style.fontFamily};
        }

        .font-mono: ${ibmPlexSansMono.style.fontFamily};
        .font-kana: ${ibmPlexSansJp.style.fontFamily};

      `}</style>
      <Component {...pageProps} />
    </>)
}
