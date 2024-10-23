import React from 'react'
import { Home } from '../components/homeScreen/Home'
import Popular  from '../components/Popular/Popular'
import { Offers } from '../components/offers/Offers'


export const Shop = () => {
  return (
    <div>
      <Home/>
      <Popular/>
      <Offers/>
    </div>
  )
}
