import type { AppProps } from 'next/app'

// SCSS
import '@/styles/global.scss'

// Google Fonts
import { IBM_Plex_Sans_JP, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google'

const ibmPlexSansJp = IBM_Plex_Sans_JP({
    weight: ['100','200','300','400','500','600','700'],
    subsets: ['latin'],
    variable: '--font-ibm-plex-sans-jp',
    fallback: ['system-ui', 'arial']
});

const ibmPlexSans = IBM_Plex_Sans({ 
    weight: ['100','200','300','400','500','600','700'],
    style: ['normal', 'italic'],
    subsets: ['latin-ext'],
    variable: '--font-ibm-plex-sans',
    fallback: ['system-ui', 'arial']
});

const ibmPlexSansMono = IBM_Plex_Mono({
    weight: ['100','200','300','400','500','600','700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    variable: '--font-ibm-plex-mono',
    fallback: ['system-ui', 'arial']
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${ibmPlexSans.style.fontFamily};
        }

        .font { 
          font-family: ${ibmPlexSans.style.fontFamily}; 
        }
        
        .font-mono {
          font-family: ${ibmPlexSansMono.style.fontFamily}; 
        }
        
        .font-kana: { 
          font-family: ${ibmPlexSansJp.style.fontFamily};
        }

      `}</style>
      <Component {...pageProps} />
    </>)
}
