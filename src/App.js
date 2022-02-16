import React from 'react'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import QuizPage from './pages/QuizPage'
import WelcomeScreen from './pages/WelcomeScreen'

export default function App() {

    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element={<WelcomeScreen/>} />
                    <Route path="/quiz-app" element={<QuizPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}
