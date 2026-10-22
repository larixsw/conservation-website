import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client'
import axios from 'axios'

import Home from './pages/Home'
import About from './pages/About'
import Burial from './pages/Burial'
import Disclaimer from './pages/Disclaimer'
import Gallery from './pages/Gallery'
import Privacy from './pages/Privacy'
import Feedback from './pages/Feedback'
import Trails from './pages/Trails'
import Map from './pages/Map'
import ProductsServices from './pages/ProductsServices'
import Product from './pages/Product'
import Ecosystem from './pages/Ecosystem'
import Organism from './pages/Organism'

import Layout from './components/Layout'
import PageNotFound from './pages/PageNotFound'

import './index.css'

const apiUrl = window.env.API_URL

axios.defaults.baseURL = apiUrl
const apollo = new ApolloClient({
  uri: `${apiUrl}/api/graphql`,
  cache: new InMemoryCache()
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={apollo}>
      <BrowserRouter>
        <Routes>
          <Route path="map" element={<Map />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="green-burial" element={<Burial />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="trails" element={<Trails />} />
            <Route path="feedback" element={<Feedback />} />
            <Route path="disclaimer" element={<Disclaimer />} />
            <Route path="privacy-policy" element={<Privacy />} />
            <Route path="products-services" element={<ProductsServices />} />
            <Route path="products-services/:id" element={<Product />} />
            <Route path="ecosystem" element={<Ecosystem />} />
            <Route path="ecosystem/:id" element={<Organism />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
)
