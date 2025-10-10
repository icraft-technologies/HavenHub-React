import React from 'react'
import Hero from '../components/Hero'
import DiscoverProperties from '../components/DiscoverProperties'
import FeaturedProperties from '../components/FeaturedProperties'
import Calculator from '../components/SavingsCalculator'
import Features from '../components/Features'
import properties from '../data/properties'
import History from '../components/History'
import Testimonials from '../components/Testimonials'
import CompanyInfo from '../components/CompanyInfo'
import Blog from '../components/Blog'

export default function Home() {
  return (
    <main>
      <Hero />
      <DiscoverProperties />
      <FeaturedProperties properties={properties} viewMode="grid" />
      <Calculator />
      <Features />
      <History />
      <Testimonials />
      <CompanyInfo />
      <Blog />
    </main>
  )
}
