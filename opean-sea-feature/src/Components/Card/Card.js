import React from 'react'
import PropTypes from 'prop-types'
import './Card.css'
import Avatar from '../Avatar'

export default function Card({
  profileURL,
  userName,
  avtarUrl,
  category,
  NFTName,
  description,
}) {
  console.log(profileURL, userName, avtarUrl, category, NFTName, description)

  return (
    <div className='card mx-1 cursor-pointer'>
      <img src={profileURL} className='card-img-top' alt='image' />

      <div className='card-body mx-3'>
        <img className='avtar' src={avtarUrl} alt='{props.user.name}' />
        <h5 className='card-title'>{userName}</h5>

        <h4 className='nft-title'>{NFTName}</h4>

        <p className='card-text text-truncate'>{description}</p>
      </div>
      {/* <Avatar user={props.user} className='avtar' /> */}
    </div>
  )
}

// Card.propTypes = {
//   id: number,
//   profileURL: string,
//   userName: string,
//   avtarUrl: string,
//   category: string,
//   NFTName: string,
//   description: string,
// }

Card.defaultProps = {
  profileURL: 'https://source.unsplash.com/collection/190737/',
  userName: 'User_Name',
  avtarUrl:
    'https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=3ef46b07bb19f68322d027cb8f9ac99f',
  category: 'Catogory',
  NFTName: 'NFT_Name',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio delectus labore placeat nostrum laudantium explicabo nisi reprehenderit fugiat sequi excepturi voluptates.',
}
