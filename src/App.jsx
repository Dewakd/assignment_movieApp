import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage'
import MovieDetail from './Pages/MovieDetail';
import { SidebarProvider } from './Context/SidebarContext';
import { Provider } from 'react-redux';
import store from './store/store';


export default function App() {
  
  return (
  <Provider store={store}>
    <SidebarProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </Router>
    </SidebarProvider>
  </Provider>
  )
}
