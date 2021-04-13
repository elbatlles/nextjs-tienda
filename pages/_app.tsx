import "../styles/index.css"
import Layout from '@components/Layout/Layout'
import {AppProps} from 'next/app'
//import "../styles/globals.css"

function MyApp({ Component, pageProps }:AppProps) {
    //Providers context/providers theme data
    //layout
    //prpps adicionales
    return  (
      <Layout title="Home | Next.js + TypeScript Example">
      
      <Component {...pageProps} />
  </Layout>
     )
  
  }
  
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // MyApp.getInitialProps = async (appContext) => {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }
  
  export default MyApp