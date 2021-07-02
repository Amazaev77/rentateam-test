import React, { FC } from 'react';
import Header from "./components/Header";
import Delivery from "./components/Delivery";
import ChooseButtons from './components/ChooseButtons';
import { useTypedSelector } from "./hooks/useTypedSelector";
import Container from "./components/Container";
import Products from "./components/Products";
import styles from './App.module.scss';
import Footer from "./components/Footer";

const App: FC = () => {
  const deliveryActive = useTypedSelector(state => state.app.deliveryActive)

  return (
    <div className="app">
      <Container>
        <Header />
        <div className={styles['delivery-wrap']}>
          {deliveryActive && <Delivery />}
          <ChooseButtons />
        </div>
      </Container>
      <Products />
      <Footer />
    </div>
  );
}

export default App;
