import React from 'react'
import PropTypes from 'prop-types'
import { IoWalletSharp, IoImages } from 'react-icons/io5'

export default function Feature(props) {
  const Icon = () => {
    return <IoImages />
  }
  return (
    <div className='feature-card'>
      <span className={`feature-icon fa-3x`}>
        <IoWalletSharp />
      </span>

      <h5 className='feature-title'>{props.title}</h5>

      <p className='feature-text'>{props.content}</p>

      <a href='/' className='btn btn-outline-primary m-2'>
        {props.title}
      </a>
    </div>
  )
}

Feature.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
}

Feature.defaultProps = {
  title: 'title',
  content:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio delectus labore placeat nostrum laudantium explicabo nisi reprehenderit fugiat sequi excepturi voluptates.',
}
