import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// import * as Sentry from "@sentry/react";
// import { reactRouterV6BrowserTracingIntegration } from "@sentry/react-router";

// Sentry.init({
//   dsn: "https://57b88ff8138d92453d8482e3dff443ff@o4509027650174976.ingest.us.sentry.io/4509027654172672",
//   integrations: [
//     Sentry.browserTracingIntegration(),
//     // reactRouterV6BrowserTracingIntegration({ 
//     //   useEffect, 
//     //   useLocation, 
//     //   useNavigationType 
//     // }), // ✅ React Router 6 integration
//     Sentry.replayIntegration({
//       maskAllText: false,
//       blockAllMedia: false,
//     }),
//   ],

// });

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
