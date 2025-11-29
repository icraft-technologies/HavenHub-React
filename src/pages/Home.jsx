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
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function Home() {

  const [properties, setProperties] = useState([])   // State to hold API data
  const [pageData, setPageData] = useState(null)
  const [loading, setLoading] = useState(true)       // Optional: loading state
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetch(`${API_BASE_URL}/properties`, {
      headers: token
      ? { Authorization: `Bearer ${token}` }
      : {}
    })     // Call your API
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
    fetch(`${API_BASE_URL}/pagedata`, {
      headers: token
      ? { Authorization: `Bearer ${token}` }
      : {}
    })
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
      {pageData?.blogs && pageData?.blogs && pageData.blogs.length >= 2 && (
        <Blog blogs={pageData.blogs}/>
      )}
    </main>
  )
}
