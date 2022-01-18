import React from 'react'
import { Link } from 'react-router-dom'
import Lottie from 'react-lottie'
import headerAnimationData from '../../assets/lottie/header-lottie'
import Navigation from '../../components/navigation/navigation'
import Footer from '../../components/footer/footer'
import Searchbar from '../../components/searchbar/searchbar'
import OrderPreview from '../../components/orderPreview/orderPreview'
import TypePreview from '../../components/typePreview/typePreview'
import Testimonial from '../../components/testimonial/testimonial'
import { bikesData, testimonialsData, bikeTypes } from '../../data'

import './homepage.scss'

const Homepage = () => {

    const lottieSettings = {
        loop: true,
        autoplay: true,
        animationData: headerAnimationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    }

    const selectedProduct = {
        id: 1,
        name: "",
        bikeImg: "",
        price: 750.00,
        animated: true
    }

    return (
        <div className="homepage">
            <header className='homepage-header'>
                <Navigation/>
                <div className="hero-container">
                    <div className="hero">
                        <div className="hero-text">
                            <h2 className="hero-title">Your Bike Electric Update</h2>
                            <p className="hero-subtitle">Dummy text progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
                        </div>
                        <Searchbar/>
                    </div>
                    <div className="hero-lottie">
                        <Lottie
                            options={lottieSettings}
                            width={411}
                            height={411}
                        />
                    </div>
                </div>
            </header>
            <main>
                <section className="sliders-container">
                    <div className="bikes-slider-container">
                        <div className="bikes-slider">
                            {
                                bikesData.map((bike) => {
                                    return <OrderPreview key={bike.id} bikeInfo={bike} />
                                })
                            }
                        </div>
                        <div className="slider-controls">
                            <div className="left-scroll-arrow">

                            </div>
                            <div className="right-scroll-arrow">

                            </div>
                        </div>
                    </div>
                </section>
                <section className="other-bikes-container">
                    <div className="other-bikes-slider-container">
                        <h3 className="other-bikes-slider-title">Other Type Of Bikes</h3>
                        <div className="other-bikes-slider">
                            {
                                bikeTypes.map((bikeType) => {
                                    return <TypePreview key={bikeType.id} previewInfo={bikeType} />
                                })
                            }
                        </div>
                    </div>
                    <div className="selected-bike-info">
                        <div className="product-container">
                            <OrderPreview bikeInfo={selectedProduct} />
                        </div>
                        <div className="learn-more-description">
                            <h3 className="description-title">Hybrid Bikes</h3>
                            <p className="description-subtitle">Dummy Text progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver</p>
                            <Link to="/type/hybrid-bikes" className="learn-more-btn"></Link>
                        </div>
                    </div>
                </section>
                <section className="testimonials-container">
                    <div className="testimonials-slider-container">
                        <h3 className="testimonials-slider-title">What our customer are saying</h3>
                        <div className="testimonials-slider">
                            {
                                testimonialsData.map((testimonial) => {
                                    return <Testimonial key={testimonial.id} testimonialInfo={ testimonial }/>
                                })
                            }
                        </div>
                    </div>
                    <div className="testimonials-slider-controls">
                        <div className="slide-left-btn">

                        </div>
                        <div className="progress-indicator">

                        </div>
                        <div className="slide-right-btn">

                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    )
}

export default Homepage