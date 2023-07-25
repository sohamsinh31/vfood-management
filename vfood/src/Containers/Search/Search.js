import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchTerm = searchParams.get('q') || '';
  return (
    <div>

    </div>
  )
}

export default Search
