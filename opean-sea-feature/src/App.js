import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Carousel from 'react-elastic-carousel'
import { FaAngleDown } from 'react-icons/fa'

import Navbar from './Components/Nav-Bar/NavBar'

import Hero from './Components/Hero/Hero'
import Card from './Components/Card/Card'
import Feature from './Components/createNftSection/Feature'
import CategoryCard from './Components/CategoryCard'
import Footer from './Components/footer/Footer'
import MakeCarousel from './Components/Carousel'

// IoWallet
class App extends Component {
  state = {
    navItems: [
      {
        id: 1,
        itemTitle: 'Explore',
        dropdownItems: [
          'All NFTs',
          'Art',
          'Collectibles',
          'Domain Names',
          'Music',
          'Photography',
          'Sports',
          'Trading Cards',
          'Utility',
          'Virtual World',
        ],
      },
      {
        id: 2,
        itemTitle: 'Stats',
        dropdownItems: ['Rankings', 'Activity'],
      },
      {
        id: 3,
        itemTitle: 'Resources',
        dropdownItems: [
          'Help Center',
          'Platform Status',
          'Partners',
          'Gas-Free Marketplace',
          'Taxes',
          'Blog',
          'Docs',
          'Newsletters',
        ],
      },
      {
        id: 4,
        itemTitle: 'Create',
        dropdownItems: [],
      },
      {
        id: 5,
        itemTitle: 'Login',
        dropdownItems: [
          'Profile',
          'Watchlist',
          'My Collections',
          'Settings',
          'Log Out',
        ],
      },
      {
        id: 6,
        itemTitle: 'wallet',
        dropdownItems: [],
      },
    ],
    user: [
      {
        id: 1,
        name: 'xyz',
        avtarUrl:
          'https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=3ef46b07bb19f68322d027cb8f9ac99f',
        NFTCollection: [
          {
            category: 'Art',
            NFTName: 'ABCD',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, quod reiciendis ipsa corporis magnam, quam iure tempore atque eaque porro iusto! Labore maiores dolore libero nobis reiciendis incidunt excepturi minus.',
          },
        ],
      },
      {
        id: 2,
        name: 'xyz123',
        avtarUrl: '',
        NFTCollection: [{}],
      },
    ],
    brand: {
      brandLogoUrl: `${logo}`,
      brandName: 'Opensea',
    },
    showDropdown: false,
    theme: 'light',

    carousel: [
      {
        id: '1',
        title: 'carouselItem-1',
        imgURL: 'https://source.unsplash.com/collection/190727/500x500',
        description: `This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.`,
      },
      {
        id: '2',
        title: 'carouselItem-2',
        imgURL: 'https://source.unsplash.com/collection/190727/500x500',
        description: `This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.`,
      },
      {
        id: '3',
        title: 'carouselItem-3',
        imgURL: 'https://source.unsplash.com/collection/190727/500x500',
        description: `This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.`,
      },
      {
        id: '4',
        title: 'carouselItem-4',
        imgURL: 'https://source.unsplash.com/collection/190727/500x500',
        description: `This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.`,
      },
      {
        id: '5',
        title: 'carouselItem-5',
        imgURL: 'https://source.unsplash.com/collection/190727/500x500',
        description: `This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.`,
      },
      {
        id: '6',
        title: 'carouselItem-6',
        imgURL: 'https://source.unsplash.com/collection/190727/500x500',
        description: `This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.`,
      },
    ],
    tranding: [
      {
        id: 1,
        profileURL: 'https://source.unsplash.com/collection/190737/',
        userName: 'xyz',
        avtarUrl:
          'https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=3ef46b07bb19f68322d027cb8f9ac99f',
        category: 'Art',
        NFTName: 'ABCD',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, quod reiciendis ipsa corporis magnam, quam iure tempore atque eaque porro iusto! Labore maiores dolore libero nobis reiciendis incidunt excepturi minus.',
      },
      {
        id: 2,
        profileURL: 'https://source.unsplash.com/collection/190737/',
        userName: 'xy13',
        avtarUrl:
          'https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=3ef46b07bb19f68322d027cb8f9ac99f',
        category: 'Sports',
        NFTName: 'XYZ',
        description:
          'Debitis, quod reiciendis ipsa corporis magnam, quam iure tempore atque eaque porro iusto! Labore maiores dolore libero nobis reiciendis incidunt excepturi minus.',
      },
      {
        id: 3,
        userName: 'xyz123',
        profileURL: 'https://source.unsplash.com/collection/190737/',
        avtarUrl:
          'https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=3ef46b07bb19f68322d027cb8f9ac99f',

        category: 'Sports',
        NFTName: 'XYZ',
        description:
          'Debitis, quod reiciendis ipsa corporis magnam, quam iure tempore atque eaque porro iusto! Labore maiores dolore libero nobis reiciendis incidunt excepturi minus.',
      },
      {
        id: 4,
        profileURL: 'https://source.unsplash.com/collection/190737/',
        userName: 'xyz123',
        avtarUrl:
          'https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=3ef46b07bb19f68322d027cb8f9ac99f',

        category: 'Sports',
        NFTName: 'XYZ',
        description:
          'Debitis, quod reiciendis ipsa corporis magnam, quam iure tempore atque eaque porro iusto! Labore maiores dolore libero nobis reiciendis incidunt excepturi minus.',
      },
      {
        id: 5,
        profileURL:
          'https://lh3.googleusercontent.com/VkyuB5jVZmmkMYR7_uVesA1MvyF74JaOX6YzmV7j_Qc6Uwm0WcNxXYJFo-1d2T8QnLDXPLKb5_erV3gdNg8b1ZX5u6vN5o1ExER0Em0=h200',
        userName: 'xyz123',
        avtarUrl:
          'https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=3ef46b07bb19f68322d027cb8f9ac99f',
        category: 'Sports',
        NFTName: 'XYZ',
        description:
          'Debitis, quod reiciendis ipsa corporis magnam, quam iure tempore atque eaque porro iusto! Labore maiores dolore libero nobis reiciendis incidunt excepturi minus.',
      },
    ],
    dataFeature: [
      {
        icon: 'i', // <i class="fa-solid fa-wallet"></i>
        title: 'Set up your wallet',
        content:
          "Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner. Learn about the {<a href='#'>wallets we support</a>}",
      },
      {
        icon: 'i',
        title: 'Create your collection',
        content:
          "Click {<a href='#'>My Collections</a>}and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fee.",
      },
      {
        icon: 'i',
        title: 'Add your NFTs',
        content:
          'Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs with properties, stats, and unlockable content.',
      },
      {
        icon: 'i',
        title: 'List them for sale',
        content:
          'Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs, and we help you sell them!',
      },
    ],
    breakPoints: [
      { width: 400, itemsToShow: 1 },
      { width: 500, itemsToShow: 2 },
      { width: 768, itemsToShow: 3 },
      { width: 1200, itemsToShow: 4 },
    ],
  }

  showDropdownHadler = (event) => {
    this.setState(!this.state.showDropdown)
  }

 

  render() {
    return (
      <React.Fragment>
        <Navbar
          brand={this.state.brand}
          theme={this.state.theme}
          search='Search on OpenSea'
          navItems={this.state.navItems}
          showDropdown={this.showDropdownHadler}
          dropDownItems={this.state.NFTCollection}
        />
        <section className='hero'>
          <Hero
            title='Discover, collect, and sell extraordinary Features'
            text="OpenSea is the world's first and largest Feature marketplace"
            mainImg='https://source.unsplash.com/collection/190727/500x500'
            userInfo={this.state.user}
          />
        </section>

        <section className='container container-carousel'>
          <MakeCarousel items={this.state.carousel} />
        </section>

        <section className='container top-collection'>
          <h3 className='title'>
            Top collections{' '}
            <span className='text-primary'>
              over last 7 days <FaAngleDown />
            </span>
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
            quod reiciendis ipsa corporis magnam, quam iure tempore atque eaque
            porro iusto! Labore maiores dolore libero nobis reiciendis incidunt
            excepturi minus.
          </p>
          {/* <Carousel breakPoints={this.state.breakPoints}>
            {this.state.user..map((item) => (
              <Card key={item.id} title={item.title}></Card>
              ))}
            </Carousel> */}
        </section>
        <section className='container trending text-center'>
          <h3 className='title'>
            Trending in{' '}
            <span className='text-primary'>
              all categories <FaAngleDown />
            </span>
          </h3>
          <Carousel breakPoints={this.state.breakPoints}>
            {this.state.tranding.map((item) => (
              <Card
                key={item.id}
                profileURL={item.profileURL}
                userName={item.userName}
                avtarUrl={item.avtarUrl}
                description={item.description}
              ></Card>
             
            ))}
          </Carousel>
        </section>
        <div className='container features row'>
          <h3 className='title my-3'>Create and sell your Features</h3>
          {this.state.dataFeature.map((data) => {
            return (
              <>
                <div className='col-lg-3 col-md-12'>
                  <Feature
                    icon={data.icon}
                    title={data.title}
                    content={data.content}
                  />
                </div>
              </>
            )
          })}
          
        </div>

        <div className='container category'>
          <h3 className='title my-5'>Browse by category</h3>
          <div className='row'>
            <div className='col-lg-4 col-md-6 col-sm-6'>
              <CategoryCard title='Art' />
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6'>
              <CategoryCard title='Photography' />
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6'>
              <CategoryCard title='Sports' />
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6'>
              <CategoryCard title='Virtual World' />
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6'>
              <CategoryCard title='Music' />
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6'>
              <CategoryCard title='Utility' />
            </div>
          </div>
        </div>

        <div className='container text-center'>
          <button className='btn btn-primary marketplace'>
            Explore the Marketplace
          </button>
        </div>

        <footer className='footer'>
          <Footer
            text='Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating OpenSea.'
            searchPlaceholder='Your email address'
            logo={logo}
            aboutBrand="The world's first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items."
            twitterUrl=''
            youtubeUrl=''
            discordUrl=''
            instagramUrl=''
            emailUrl=''
            copyRight='© 2018 - 2022 Ozone Networks, Inc'
          />
        </footer>
      </React.Fragment>
    )
  }
}
export default App
