import React from 'react';
import { createRoot } from 'react-dom/client'
//import 'bootstrap/dist/css/bootstrap.min.css';
import AppRoutes from './AppRoutes';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<AppRoutes />);