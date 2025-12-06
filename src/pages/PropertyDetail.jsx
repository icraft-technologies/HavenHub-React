import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // ✅ instead of next/navigation
import CompanyInfo from '../components/CompanyInfo';
import Availability from '../components/property-details/Availability';
import Tabbar from '../components/property-details/Tabbar';
import TextSection from '../components/property-details/TextSection';
import DiscoverProperties from '../components/DiscoverProperties';
import ContactForm from "../components/contact/ContactForm";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function PropertyDetail() {
    const token = localStorage.getItem('token');
    const { slug } = useParams(); // ✅ react-router-dom
    const [property, setProperty] = useState([]);
    const [pageData, setPageData] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchProperty = async () => {
            try {
                const res = await fetch(`${API_BASE_URL}/properties/${slug}`, {
                    headers: token ? { Authorization: `Bearer ${token}` } : {},
                })
                if (!res.ok) throw new Error('Failed to fetch property')

                const data = await res.json()
                setProperty(data.data) // Laravel resource wraps data in { data: {...} }
            } catch (error) {
                console.error('Error fetching property:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchProperty()
    }, [slug, token])

    // ✅ Fetch page data
    useEffect(() => {
        fetch(`${API_BASE_URL}/pagedata`, {
            headers: token ? { Authorization: `Bearer ${token}` } : {},
        })
            .then((response) => response.json())
            .then((data) => {
                setPageData(data)
            })
            .catch((error) => {
                console.error('Error fetching page data:', error)
            })
    }, [token])

    if (loading) return <div className="text-center py-20">Loading...</div>
    if (!property)
        return <div className="text-center py-20 text-red-600">Property not found</div>

    return (
        <div>
            {/* HERO SECTION */}
            <section className="bg-cover pt-36 pb-20 relative bg-gradient-to-b from-white from-10% dark:from-darkmode to-herobg to-90% dark:to-darklight overflow-x-hidden">
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">
                    <h2 className="text-midnight_text text-4xl lg:text-[50px] leading-[1.2] md:mx-auto md:max-w-[60%] text-center relative font-bold dark:text-white">
                        {property.property_title || 'Property Details'}
                    </h2>
                </div>
            </section>

            {/* IMAGE SECTION */}
            <section>
                <div className="container mx-auto dark:bg-darkmode">
                    <div className="h-[580px] max-w-5xl mx-auto w-full">
                        {property.property_img && (
                            <img
                                src={property.property_img}
                                alt={property.property_title}
                                className="h-full w-full object-cover rounded-lg"
                            />
                        )}
                    </div>
                </div>
            </section>

            {/* OTHER SECTIONS */}
            <TextSection propertyDescription={property.description} />
            <CompanyInfo />
            <Tabbar property={property}/>
            <Availability property={property}/>
            <ContactForm propertyId={property.id} />
            {pageData?.data && <DiscoverProperties propetyTypes={pageData.data} />}
        </div>
    );
}
