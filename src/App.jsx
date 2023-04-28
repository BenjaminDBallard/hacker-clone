import React from 'react'
import ListArticles from './components/ListArticles'
import useFetch from './hooks/useFetch'
import './App.css'

function App() {

  const {
    data,
    loading,
  } = useFetch();

  return (
    <div className='listArticleCont'>
    {loading && <div>Loading</div>}
    {!loading && (
      <div>
        <ListArticles data={data} />
      </div>
    )}
    </div>
  )
}

export default App
