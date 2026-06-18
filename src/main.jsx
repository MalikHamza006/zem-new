import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Update title and meta tags
document.title = 'ApexComply | Compliance & Advisory Partner';

// Update meta description
const metaDescription = document.querySelector('meta[name="description"]');
if (metaDescription) {
  metaDescription.content = 'Expert guidance for MSBs, FinTechs, and payment institutions. 360° regulatory solutions including AML compliance, licensing, and advisory services.';
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);