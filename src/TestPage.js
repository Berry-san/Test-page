import { useState, useEffect } from 'react'
import axios from 'axios'
import qs from 'qs'

const Test = () => {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'x-api-key': 987654,
      },
    }

    axios
      .get(
        'http://api.transfermelon.com/index.php/v1/api/document_list',
        config
      )
      .then((res) => {
        console.log(res)
        setResults(res.data.result)
        setLoading(false)
      })
      .catch((err) => {
        setLoading(false)
        console.log(err)
      })
  }, [])

  return (
    <>
      {results.map((result, index) => (
        <div key={index}>
          <p>index: {index + 1}</p>
          <p>Headers: {result.headers} </p>
          <p>Name: {result.botton_name}</p>
          <p>URL: {result.botton_url}</p>
        </div>
      ))}
    </>
  )
}

export default Test
