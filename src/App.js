import './App.css'
import CallAPi from './callAPi'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

function App() {
  const [state, setState] = useState(false)

  const handleSuccess = s => {
    toast.success(s.status)
  }

  const obj = CallAPi({
    QueryName: 'posts',
    url: 'https://my-json-server.typicode.com/tahaebaed/Fake-API-Data/posts',
    method: 'GET',
    onSuccess: handleSuccess,
    refetchOnWindowFocus: false,
    axios: false,
  })
  console.log(obj)
  // return (
  //   // <div className='App'>
  //   //   <button onClick={() => setState(c => !c)}>test</button>
  //   //   {isFetching ? (
  //   //     <p>Loading...</p>
  //   //   ) : (
  //   //     data?.data.map(post => <p key={post.id}>{post.title}</p>)
  //   //   )}
  //   //   <ToastContainer />
  //   // </div>
  // )
}

export default App
