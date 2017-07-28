import React from 'react';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { launch } from '@extjs/reactor';

launch(<App />);
registerServiceWorker();
