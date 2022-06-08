import PublicRoutes from './routes/routes'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import * as S from './GlobalStyles'
function App() {
    return (
        <BrowserRouter>
            <S.GlobalStyles />
            <PublicRoutes />
        </BrowserRouter>
    )
}

export default App
