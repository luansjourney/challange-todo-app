import React from 'react'

function PageTitle({children, ...rest}) {
  return (
        <p className='title' {...rest} >{children}</p>
  )
}

export default PageTitle;