import React from 'react'

const News = () => {
  let a = window.location.pathname.split("/")[1]
  console.log(a)
  return (
    <div>News</div>
  )
}

export default News