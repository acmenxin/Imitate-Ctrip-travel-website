import React from 'react';
import styles from "./App.module.css";
import { BrowserRouter, Route ,Switch} from "react-router-dom";
import { HomePage,SignInPage,RegisterPage,DetailPage } from "./pages";

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
      <Switch>
        {/* router路由向下面组件的props中传递了history location match三个属性*/}
          <Route path="/" component={HomePage} exact/>
          {/* <Route path="/signIn" render={()=><h1>登录</h1>} /> */}
          <Route path="/signIn" component={SignInPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/detail/:touristRouteId" component={DetailPage}/>
          <Route render={()=><h1>404 not found</h1>} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
