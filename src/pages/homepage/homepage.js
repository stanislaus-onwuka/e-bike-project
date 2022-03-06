import React, {useRef, useState} from 'react'
import { Link } from 'react-router-dom'
import Lottie from 'react-lottie'
import headerAnimationData from '../../assets/lottie/header-lottie'
import Navigation from '../../components/navigation/navigation'
import Footer from '../../components/footer/footer'
import Searchbar from '../../components/searchbar/searchbar'
import OrderPreview from '../../components/orderPreview/orderPreview'
import TypePreview from '../../components/typePreview/typePreview'
import { bikesData, bikeTypes } from '../../data'
import './homepage.scss'
import TestimonialSlider from '../../components/testimonialSlider/testimonialSlider'

const Homepage = () => {
    // Bike preview section
    let previewScroll = useRef(null);
    const [scrollX, setscrollX] = useState(0); //Scroll on the X axis
    const [previewScrollEnd, setPreviewScrollEnd] = useState(false);
    
    const [ selectedType, setSelectedType ] = useState("Hybrid Bikes");

    const slideElement = (shift) => {
        previewScroll.current.scrollLeft += shift;
        setscrollX(scrollX + shift);
    
        if (
          Math.floor(previewScroll.current.scrollWidth - previewScroll.current.scrollLeft) <= previewScroll.current.offsetWidth
        ) {
            setPreviewScrollEnd(true);
        } else {
            setPreviewScrollEnd(false);
        }
    };

    const scrollCheck = () => {
        setscrollX(previewScroll.current.scrollLeft);
        if (
          Math.floor(previewScroll.current.scrollWidth - previewScroll.current.scrollLeft) <=
          previewScroll.current.offsetWidth
        ) {
            setPreviewScrollEnd(true);
        } else {
            setPreviewScrollEnd(false);
        }
    };
    
    // Lottie settings
    const lottieSettings = {
        loop: true,
        autoplay: true,
        animationData: headerAnimationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    }

    // Selected product object 
    const selectedProduct = {
        name: selectedType,
        price: 750.00,
        animated: true
    }

    return (
        <div className="homepage">
            <header className='homepage-header'>
                <Navigation/>
                <div className="hero-container">
                    <div className="hero" data-aos="fade-right">
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
                <section className="bikes-container">
                    <div className="bikes-slider-container">
                        <div className="bikes-slider" ref={previewScroll} onScroll={scrollCheck}>
                            {
                                bikesData.map((bike) => {
                                    return <OrderPreview key={bike.id} bikeInfo={bike} />
                                })
                            }
                        </div>
                    </div>
                    <div className="slider-controls">
                        <button className={`left-scroll-arrow ${scrollX === 0 ? "disable-btn" : "" }`} onClick={()=>slideElement(-40)} disabled={ scrollX === 0 ? "disable-btn" : "" }>
                            {
                                scrollX === 0 ?
                                <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.9082 9.55171L4.49746 9.55171L8.32254 13.4819C8.85014 14.024 8.85014 14.8371 8.32254 15.3792C7.79494 15.9213 7.00355 15.9213 6.47595 15.3792L0.408576 9.14514C-0.119022 8.60305 -0.119022 7.78991 0.408576 7.24782L6.47595 1.01376C7.00354 0.471673 7.79494 0.471673 8.32254 1.01376C8.85014 1.55586 8.85014 2.36899 8.32254 2.91109L4.49746 6.84125L21.9082 6.84125C22.5677 6.84125 23.2272 7.38334 23.2272 8.19648C23.2272 9.00962 22.5677 9.55171 21.9082 9.55171Z" fill="#DAA53A"/>
                                </svg>
                                :
                                <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.9082 9.55171L4.49746 9.55171L8.32254 13.4819C8.85014 14.024 8.85014 14.8371 8.32254 15.3792C7.79494 15.9213 7.00355 15.9213 6.47595 15.3792L0.408576 9.14514C-0.119022 8.60305 -0.119022 7.78991 0.408576 7.24782L6.47595 1.01376C7.00354 0.471673 7.79494 0.471673 8.32254 1.01376C8.85014 1.55586 8.85014 2.36899 8.32254 2.91109L4.49746 6.84125L21.9082 6.84125C22.5677 6.84125 23.2272 7.38334 23.2272 8.19648C23.2272 9.00962 22.5677 9.55171 21.9082 9.55171Z" fill="#233348"/>
                                </svg> 
                            }
                        </button>
                        <button className={`right-scroll-arrow ${previewScrollEnd ? "disable-btn" : ""}`} onClick={()=>slideElement(40)}>
                            {
                                previewScrollEnd ?
                                <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.09182 9.55171L19.5025 9.55171L15.6775 13.4819C15.1499 14.024 15.1499 14.8371 15.6775 15.3792C16.2051 15.9213 16.9965 15.9213 17.5241 15.3792L23.5914 9.14514C24.119 8.60305 24.119 7.78991 23.5914 7.24782L17.5241 1.01376C16.9965 0.471673 16.2051 0.471673 15.6775 1.01376C15.1499 1.55586 15.1499 2.36899 15.6775 2.91109L19.5025 6.84125L2.09182 6.84125C1.43233 6.84125 0.772832 7.38334 0.772832 8.19648C0.772832 9.00962 1.43233 9.55171 2.09182 9.55171Z" fill="#DAA53A"/>
                                </svg>
                                :
                                <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.09182 9.55171L19.5025 9.55171L15.6775 13.4819C15.1499 14.024 15.1499 14.8371 15.6775 15.3792C16.2051 15.9213 16.9965 15.9213 17.5241 15.3792L23.5914 9.14514C24.119 8.60305 24.119 7.78991 23.5914 7.24782L17.5241 1.01376C16.9965 0.471673 16.2051 0.471673 15.6775 1.01376C15.1499 1.55586 15.1499 2.36899 15.6775 2.91109L19.5025 6.84125L2.09182 6.84125C1.43233 6.84125 0.772832 7.38334 0.772832 8.19648C0.772832 9.00962 1.43233 9.55171 2.09182 9.55171Z" fill="#233348"/>
                                </svg>   
                            }
                        </button>
                    </div>
                </section>
                <section className="other-bikes-container">
                    <div className="other-bikes-slider-container">
                        <h3 className="other-bikes-slider-title">Other Type Of Bikes</h3>
                        <div className="other-bikes-slider">
                            <div className="main-slider">
                                {
                                    bikeTypes.map((bikeType) => {
                                        return (
                                            <TypePreview
                                                key={bikeType.id}
                                                previewInfo = { bikeType }
                                                selectedType={selectedType}
                                                setSelectedType={ setSelectedType }
                                            />
                                        )
                                        
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="selected-bike-info">
                        <div className="product-container">
                            <OrderPreview bikeInfo={selectedProduct} />
                        </div>
                        <div className="learn-more-description">
                            <h3 className="description-title" data-aos="fade-up">{ selectedProduct.name }</h3>
                            <p className="description-subtitle" data-aos="fade-down" data-aos-delay="100">Dummy Text progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver</p>
                            <Link to="/type/hybrid-bikes" className="learn-more-btn" data-aos="fade-left" data-aos-delay="300">Learn More</Link>
                        </div>
                    </div>
                </section>
                <TestimonialSlider/>
            </main>
            <Footer/>
        </div>
    )
}

export default Homepage