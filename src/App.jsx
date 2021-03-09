import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
// Import custom components
import Layout from 'Components/Layout'
// Import styles
import './App.scss'

// Register scrolltrigger plugin
gsap.registerPlugin(ScrollTrigger)

// Create a query client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout />
    </QueryClientProvider>
  )
}

export default App
