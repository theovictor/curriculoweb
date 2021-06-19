import React from 'react';
import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/css/argon-design-system-react.css";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';
import 'react-notification-alert/dist/animate.css';

import 'assets/css/index-page.css'
import 'assets/css/dash-page.css'
import 'assets/css/navbar.css'
import 'assets/css/profile-page.css'
import 'assets/css/reset-page.css'
import 'assets/css/upload-img.css'




import { Provider } from 'react-redux'
import store from './store'
import Routes from './Routes'

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
