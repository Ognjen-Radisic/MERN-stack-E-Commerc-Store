import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'

//constant components
import Header from './components/Header'
import Footer from './components/Footer'

//router components
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'

const App = () => {
  return (
    <Router>
      <Header />
      <Container>
        <main className='py-3'>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/product/:id' component={ProductScreen} />
        </main>
      </Container>
      <Footer />
    </Router>
  )
}

export default App
