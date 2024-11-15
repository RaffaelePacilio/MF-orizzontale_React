import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const RemoteApp = React.lazy(() => import('mfe1/App'))

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <React.Suspense fallback="Loading...">
            <App/>
            <RemoteApp/>
        </React.Suspense>
    </React.StrictMode>,
)
