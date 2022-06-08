import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import LoginScreen from '../pages/login'
import MainPage from '../pages/main'
const PublicRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginScreen />} />
            <Route path="/welcome" element={<MainPage />} />
        </Routes>
    )
}
export default PublicRoutes
