import React from 'react'
import { Routes, Route } from "react-router-dom";
import data from './data';

const routes = () => {
    return (
        <Routes>
            {
                data.map((route, index) => (
                    <Route key={index} path={route.path} exact={route.exact} element={<route.element />} />
                ))
            }
        </Routes>
    )
}

export default routes