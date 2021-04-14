import "../styles/index.css"
import Layout from '@components/Layout/Layout'
import {AppProps} from 'next/app'
import AppContext from "context/AppContext"
import useInitialState from "hooks/useInitialState";
//import "../styles/globals.css"

function MyApp({ Component, pageProps }:AppProps) {
    //Providers context/providers theme data
    //layout
    //prpps adicionales
    const initialState:Cart = useInitialState();
  const isEmpty =Object.keys(initialState.state).length
    return  (
      <>
      {isEmpty > 0 ?  <AppContext.Provider value={initialState}>
      <Layout title="🥑 Tienda de los Aguacates 🥑">
      
      <Component {...pageProps} />
  </Layout>
  </AppContext.Provider>: "<h1>Loading</h1>"}
     
  </>
    );
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