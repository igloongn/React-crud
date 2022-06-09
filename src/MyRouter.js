import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import App from './App';
import { Create } from './Create';
import { Update } from './Update';
import { Read } from './Read';
import { Detail } from './detail';
import Layout from './Layout';



const MyRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route index element={<App />} />
                        <Route path="/create" element={<Create />} />
                        <Route path="/update/:id" element={<Update />} />
                        <Route path="/read" element={<Read />} />
                        <Route path="/read/:id" element={<Detail />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </div>
    )
}

export default MyRouter