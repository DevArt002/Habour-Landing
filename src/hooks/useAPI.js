import { useQuery } from 'react-query'
// Import configs
import HOST_URL from 'Configs'

const useAPI = () => {
  // Fetch data
  const fetchDataRequest = async () => {
    const res = await fetch(`${HOST_URL}/scholarship_pages/data-science-apprenticeship-zeptolab/`)
    return res.json()
  }

  const fetchData = useQuery('data', fetchDataRequest, { retry: false })

  return { fetchData }
}

export default useAPI
