import { useCallback } from "react";
import { useSelector } from "react-redux"

const ValidationError = () => {
  const {error} = useSelector(state => state.auth);

  const errorMessage = useCallback(() => {
    return Object.keys(error).map(name =>{
      const msg = error[name].join(', ')
      return `${name} - ${msg}`
    })
  },[error])
  console.log(error !== null && errorMessage());
  return (
    error !== null && errorMessage().map((error,index) => (
      <div className="alert alert-danger mr-0 p-1 text-start" key={index}>
        {error}
      </div>
    ))
  )
}

export default ValidationError