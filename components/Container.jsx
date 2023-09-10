import React from "react"

const Container= ({children}) => {
  return (
    <div className=" px-4 mx-auto xl:px-20 md:px-10 sm:px-2 max-w-[100%]">
        {children}
    </div>
  )
}

export default Container