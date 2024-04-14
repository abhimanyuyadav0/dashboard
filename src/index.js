import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'simplebar/src/simplebar.css';
import './index.css';
import { Provider as ReduxProvider } from 'react-redux';
import 'assets/third-party/apex-chart.css';
import App from './App';
import { store } from 'store';
import reportWebVitals from './reportWebVitals';
import { persistor } from 'store/index';
import { PersistGate } from 'redux-persist/integration/react';
// import * as firebase from 'firebase/app'; 
// import * as firebaseStorage from 'firebase/storage';

// const firebaseConfig = {
//   apiKey: "AIzaSyAqGC6qaHondkbeceKqn36oF1r_faCQ52s",
//   authDomain: "testing-7e5bf.firebaseapp.com",
//   databaseURL: "https://testing-7e5bf-default-rtdb.firebaseio.com",
//   projectId: "testing-7e5bf",
//   storageBucket: "testing-7e5bf.appspot.com",
//   messagingSenderId: "458540321787",
//   appId: "1:458540321787:web:18833890657a4ad73f595e",
//   measurementId: "G-H28Q81LDZB"
// };

// firebase.initializeApp(firebaseConfig);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <StrictMode>
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </ReduxProvider>
  </StrictMode>
);

reportWebVitals();
