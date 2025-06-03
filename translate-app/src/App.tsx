import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import styles from "./App.module.css";
import Main from "./components/Main/Main";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className={styles.layout}>
        <Header />
        <Main />
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
