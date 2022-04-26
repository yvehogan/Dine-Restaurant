import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Family from '../Components/layouts/Family';
import Social from '../Components/layouts/Social';
import Special from '../Components/layouts/Special';



function AdminRoutes() {
    return (
        <Routes>
            <Route path="/family" exact element={<Family />} />
            <Route path="/special" exact element={<Special />} />
            <Route path="/social" exact element={<Social />} />

        </Routes>
    );
}

export default AdminRoutes;