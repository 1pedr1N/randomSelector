import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import LoginScreen from '../pages/login'
import MainPage from '../pages/main'
import Register from '../pages/createAccount'
import RecoverPassword from '../pages/recoverPasswordEmail'
import Code from '../pages/recoverPasswordCode'
import Password from '../pages/recoverPassword'
const PublicRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginScreen />} />
            <Route path="/welcome" element={<MainPage />} />
            <Route path="/registerAccount" element={<Register />} />
            <Route path="/recover" element={<RecoverPassword />} />
            <Route path="/code" element={<Code />} />
            <Route path="/newPassword" element={<Password />} />
        </Routes>
    )
}
export default PublicRoutes
