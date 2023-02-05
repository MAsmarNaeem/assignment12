import '../styles/globals.css'
import type { AppProps } from 'next/app'
//import { ToastContainer } from 'react-toastify';
import { Provider } from "react-redux";
import   style from '../styles/style.module.css'

//import 'react-toastify/dist/ReactToastify.css';
import store from '../components/store/store';


export default function App({ Component, pageProps }: AppProps) {
  return <Provider store={store}>
    <div>
      <Component {...pageProps} /> 
    </div>
  </Provider>
}
