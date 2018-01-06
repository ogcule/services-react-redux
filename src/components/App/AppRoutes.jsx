// routes component
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ServicesPageContainer from './../Services/containers/ServicesPageContainer';
import Home from './../Home/Home';
import FaqPageContainer from './../faq/containers/FaqPageContainer';
import Title from './Title';
import styles from './styles/appRoute.scss';
import NotFoundPage from './../shared/NotFoundPage';

const AppRoutes = () => (
  <Router>
    <div className={styles.container}>
      <Title />
      <div className={styles['inner-container']}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Services" component={ServicesPageContainer} />
          <Route path="/faq" component={FaqPageContainer} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </div>
    </div>
  </Router>
);


export default AppRoutes;
