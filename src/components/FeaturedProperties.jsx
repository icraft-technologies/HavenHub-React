import React from 'react'
import PropertyCard from './PropertyCard'

export default function FeaturedProperties({ properties = [], viewMode = 'grid' }) {
    const items = Array.isArray(properties) ? properties.slice(0, 6) : []

    return (
        <section className="bg-light dark:bg-semidark flex justify-center items-center">
            <div className="lg:max-w-screen-xl md:max-w-screen-md mx-auto container px-4">
                <h1 className="text-4xl font-bold mb-12 text-midnight_text dark:text-white" > {/* data-aos="fade-up" */}
                    Featured Properties
                </h1>

                {items.length === 0 ? (
                    <p className="text-center text-gray">No featured properties available.</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {items.map((property, index) => (
                            <div key={property.id ?? index}  data-aos-delay={`${index * 100}`}> {/* data-aos="fade-up" */}
                                <PropertyCard property={property} viewMode={viewMode} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}
