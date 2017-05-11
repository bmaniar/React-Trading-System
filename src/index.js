import React from 'react';
import { render } from 'react-dom';

import RouteConfig from './route/route';


//export const store = configureStore();

render(
    RouteConfig,
    document.getElementById('app')
);