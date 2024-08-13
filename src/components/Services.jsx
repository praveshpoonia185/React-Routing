import React from 'react';
import { useSearchParams } from 'react-router-dom';

const Services = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy");
  const category = searchParams.get("catgory");

  const handleSortBy = ()=> {
    setSearchParams({
      sortBy: "views",
      category: category,
    })
  }

  return (
    <>
      <h1>Articles</h1>
      <p>Sort By: {sortBy} Category: {category}</p>
      <button onClick={handleSortBy}>Sort By Views</button>
    </>
  )
}

export default Services;
