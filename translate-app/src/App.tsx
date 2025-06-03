import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.layout}>
      <Header />
      <main></main>
      <Footer />
    </div>
  );
}

export default App;
