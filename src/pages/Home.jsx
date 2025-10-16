import React, { useEffect, useState } from 'react'
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

  const [properties, setProperties] = useState([])   // State to hold API data
  const [pageData, setPageData] = useState(null)
  const [loading, setLoading] = useState(true)       // Optional: loading state

  useEffect(() => {
    fetch('http://havenhub.test/api/properties')     // Call your API
      .then((response) => response.json())
      .then((data) => {
        setProperties(data)                           // Set API response
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching properties:', error)
        setLoading(false)
      })
  }, [])
  // Fetch page data
  useEffect(() => {
    fetch('http://havenhub.test/api/pagedata')
      .then((response) => response.json())
      .then((data) => {
        setPageData(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching page data:', error)
        setLoading(false)
      })
  }, [])

  if (loading) return <p>Loading...</p>

  return (
    <main>
      <Hero />
      {pageData?.data && <DiscoverProperties propetyTypes={pageData.data} />}
      {loading ? (
        <p>Loading properties...</p>
      ) : (
        <FeaturedProperties properties={properties.data} viewMode="grid" />
      )}
      <Calculator />
      {pageData?.features && properties?.data && properties.data.length >= 6 && (
        <Features
          features={pageData.features}
          featureProperties={properties.data[4]} // Pass 6th property
        />
      )}
      <History />
      {pageData?.testimonials && pageData?.testimonials && pageData.testimonials.length >= 6 && (
        <Testimonials testimonials={pageData.testimonials}/>
      )}
      <CompanyInfo />
      <Blog />
    </main>
  )
}
