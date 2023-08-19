import store from '@/src/Reudx/store';
import '@/styles/globals.scss'
import { Provider } from 'react-redux';


export default function App({ Component, pageProps }) {

  const getLayout = Component.getLayout || ((page) => page);

  return <Provider store={store}>
  {getLayout(<Component {...pageProps} />)}
  </Provider>;
}
