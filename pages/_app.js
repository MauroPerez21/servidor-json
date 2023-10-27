
import DashboardLayout from '../components/layout';

export default function App({ Component, pageProps }) {
  return (
  <DashboardLayout>
    <Component {...pageProps} />;
  </DashboardLayout>)
  
}