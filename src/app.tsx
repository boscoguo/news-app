import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { NotFound, News } from './routes'
import Layout from './components/layout'

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Navigate to="/news" replace />} />
        <Route path="news" element={<News />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
