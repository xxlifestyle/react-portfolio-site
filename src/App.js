import React from 'react'
import styles from './App.module.css';
import Header from './components/Header/Header'
import Portfolio from "./components/Portfolio/Portfolio";
import { Route } from "react-router-dom";
import AboutMe from "./components/AboutMe/AboutMe";
import Contacts from "./components/Contacts/Contacts";

function App(props) {
  return (
    <div className={styles.App}>
    <Header />
      <Route

          path="/portfolio"
          component={() => <Portfolio portfolioPage={props.state.portfolioPage} />}
      />
      <Route
          path="/aboutme"
          component={() => <AboutMe />}
      />
      <Route
          path="/contacts"
          component={() => <Contacts />}
      />

    </div>
  );
}

export default App;
