import React from 'react'
import BlogCard from './blogCard';


const posts = [
  {
    title: 'Top 10 Home Decor Ideas for 2025',
    coverImage: '/assets/images/tabbar/tab-1.jpg',
    excerpt: 'Discover the latest home design trends to transform your living space this year.',
    date: '2025-10-01',
    slug: 'home-decor-ideas-2025',
  },
  {
    title: 'Real Estate Market Insights',
    coverImage: '/assets/images/tabbar/tab-2.jpg',
    excerpt: 'Explore the housing market updates and predictions for the coming months.',
    date: '2025-09-20',
    slug: 'real-estate-market-insights',
  },
  {
    title: 'How to Choose the Perfect Apartment',
    coverImage: '/assets/images/tabbar/tab-3.jpg',
    excerpt: 'Find out what to look for before signing your next apartment lease.',
    date: '2025-08-15',
    slug: 'choose-perfect-apartment',
  },
  {
    title: 'The Rise of Smart Homes',
    coverImage: '/assets/images/tabbar/tab-4.jpg',
    excerpt: 'Learn how technology is reshaping modern living experiences.',
    date: '2025-07-05',
    slug: 'rise-of-smart-homes',
  },
]


export default function Blog() {
  return (
    <section className="flex flex-col dark:bg-darkmode px-4 md:px-4">
        <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-0">
            <div className="items-center sm:mb-11 mb-7 flex justify-center">
                <h2 className=" text-2xl sm:text-4xl text-midnight_text dark:text-white text-center font-bold">Blog Post</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {posts.map((blog, i) => (
                    <div key={i} className="w-full" data-aos="fade-up" data-aos-delay={`${i*200}`} data-aos-duration="1000">
                        <BlogCard blog={blog} />
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}