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
