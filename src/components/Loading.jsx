import React from 'react'

const Loading = () => {
  return (
    <button className="btn btn bg-dark bg-opacity-50 w-100 m-5" type="button" disabled>
      <span className="spinner-grow spinner-grow-xl" role="status" aria-hidden="true"></span>
      <h1>   Loading...</h1>
    </button>
  )
}

export default Loading