import React from 'react'

type Props = {
    children: React.ReactNode
    params: {newsId: string}
}
const layout = ({children, params}: Props) => {
  return (
    <div>{children}</div>
  )
}

export default layout