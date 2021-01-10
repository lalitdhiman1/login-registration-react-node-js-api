import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './shared/helpers/store';
import { App } from './pages/App';
 
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);