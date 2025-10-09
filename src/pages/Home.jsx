import React from 'react'
import Hero from '../components/Hero'
import DiscoverProperties from '../components/DiscoverProperties'
import FeaturedProperties from '../components/FeaturedProperties'
import Calculator from '../components/SavingsCalculator'
import Features from '../components/Features'
import properties from '../data/properties'

export default function Home() {
  return (
    <main>
      <Hero />
      <DiscoverProperties />
      <FeaturedProperties properties={properties} viewMode="grid" />
      <Calculator />
      <Features />
      {/* Featured Properties section */}
    </main>
  )
}
