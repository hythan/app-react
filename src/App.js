import React from 'react';
import GlobalStyles from './styles/GlobalStyles'
import Login from './pages/Login'
import Header from './components/Header'
export default function App() {
  return (
    <React.Fragment>
      <Header/>
      <Login />
      <GlobalStyles />
    </React.Fragment>

  )
}
