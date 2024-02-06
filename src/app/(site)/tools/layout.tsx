import React from 'react'

const  Layout =async ({ children }: { children: React.ReactNode }) =>  {
  return (
    <div>
    
    <div>{children}</div>
    </div>
  )
}

export default Layout