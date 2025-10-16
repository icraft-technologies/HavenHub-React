import React from 'react'
import apartmentIcon from '/assets/images/property_option/apartment.svg?url'
import villaIcon from '/assets/images/property_option/villa.svg?url'
import officeIcon from '/assets/images/property_option/office.svg?url'
import shopIcon from '/assets/images/property_option/shop.svg?url'
import houseIcon from '/assets/images/property_option/house.svg?url'
import warehouseIcon from '/assets/images/property_option/warehouse.svg?url'

export default function DiscoverProperties({ propetyTypes = [] }) {

    return (
        <section className='dark:bg-darkmode'>
            <div className="container lg:max-w-screen-xl md:max-w-screen-md mx-auto px-4">
                <h2 className="text-4xl font-bold mb-12 text-midnight_text dark:text-white aos-init aos-animate" data-aos="fade-left">Discover Properties</h2>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-4 gap-8">
                    {propetyTypes.length > 0 ? (
                        propetyTypes.map((cat, idx) => (
                            <div key={cat.id} className="image-item block aos-init aos-animate" data-aos="fade-up" data-aos-delay={`${idx * 100}`}>
                                <a className="group" href="/properties/properties-list">
                                    <img alt={cat.name} loading="lazy" width={85} height={85} decoding="async" data-nimg="1" className="p-4 border-2 rounded-lg border-border dark:border-dark_border mb-6 group-hover:-translate-y-1 group-hover:duration-500" src={`/assets/images/property_option/${cat.icon}`} style={{ color: 'transparent' }} />
                                    <p className="text-[22px] leading-[1.2] font-semibold mt-2 text-midnight_text text-opacity-80 group-hover:text-opacity-100 dark:text-white dark:group-hover:text-white dark:group-hover:text-opacity-100 dark:text-opacity-70 mb-1 capitalize">{cat.name}</p>
                                    <p className="text-base text-gray">{cat.description}</p>
                                </a>
                            </div>
                        ))
                    ) : (
                        <p>No property types available.</p>
                    )}

                </div>
            </div>
        </section>
    )
}
