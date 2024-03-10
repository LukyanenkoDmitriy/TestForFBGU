import ReactDOM from 'react-dom/client'
import App from './Components/App/App.tsx'
import {
    BrowserRouter,
     Route,
     Routes,
} from "react-router-dom";
import PagePost from "./Components/PagePost/PagePost.tsx";
import './style/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/posts/:id" element={<PagePost />} />
        </Routes>
    </BrowserRouter>
)
