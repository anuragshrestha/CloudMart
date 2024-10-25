import React from 'react'
import { Home } from '../components/homeScreen/Home'
import Popular  from '../components/Popular/Popular'
import { Offers } from '../components/offers/Offers'
import { NewCollections } from '../components/newCollections/NewCollections'
import { NewsLetter } from '../components/newsLetter/NewsLetter'



export const Shop = () => {
  return (
    <div>
      <Home/>
      <Popular/>
      <Offers/>
       <NewCollections/>
       <NewsLetter/>
    </div>
  )
}
