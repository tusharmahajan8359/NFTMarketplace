import React from 'react'

export default function Avatar(props) {
  console.log(props)
  return (
    <img className='avtar' src={props.user.avtarUrl} alt={props.user.name} />
  )
}
