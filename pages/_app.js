
import DashboardLayout from '../components/layout';
import { Provider } from 'react-redux';
import store from '../shopping/store'
export default function App({ Component, pageProps }) {
  return (
      <Provider store={store}>  
        <DashboardLayout>
          <Component {...pageProps} />;
        </DashboardLayout>
      </Provider>
  )
  
}
