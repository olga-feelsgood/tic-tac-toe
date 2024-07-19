//Глобальный общий компонент для всех страниц
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  //Component - ссылка на ту страницу, что отрисовывается в данный момент
  return <Component {...pageProps} />;
}
