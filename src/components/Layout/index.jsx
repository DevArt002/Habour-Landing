import React from 'react'
// Import custom hooks
import useAPI from 'Hooks'
// Import custom components
import Header from './Header'
import Footer from './Footer'
import Main from './Main'
// Import styles
import './style.scss'

const Layout = () => {
  const { fetchData } = useAPI()

  const { isLoading, isError, data, error } = fetchData

  // If request is pending, show Loading...
  if (isLoading) {
    return <span className="loading">Loading...</span>
  }

  // If request is failed, show error message
  if (isError) {
    return <span className="error">Error: {error.message}</span>
  }

  return (
    <>
      <Header />
      <Main data={data} />
      <Footer />
    </>
  )
}

export default Layout
