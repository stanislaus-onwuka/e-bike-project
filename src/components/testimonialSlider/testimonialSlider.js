import { useState } from 'react';
import { testimonialsData } from '../../data'
import Testimonial from '../testimonial/testimonial'
import ChevronRightIcon from '../../assets/svg/chevron-right-orange.svg'
import ChevronLeftIcon from '../../assets/svg/chevron-left-orange.svg'
import './testimonialSlider.scss';

const TestimonialSlider = () => {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== testimonialsData.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === testimonialsData.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(testimonialsData.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <section className="testimonials-container">
            <div className="testimonials-slider-container" data-aos="fade-up">
                <h3 className="testimonials-slider-title">What our customer are saying</h3>
                <div className="testimonials-slider">
                    {
                        testimonialsData.map((testimonial) => {
                            return <Testimonial key={testimonial.id} testimonialInfo={testimonial} slideIndex={ slideIndex  }/>
                        })
                    }
                </div>
            </div>
            <div className="testimonials-slider-controls">
                <button className="slide-left-btn" onClick={nextSlide}>
                    <img src={ChevronLeftIcon} alt="left btn"/>
                </button>
                <div className="progress-indicator">
                    {Array.from({length: 5}).map((item, index) => (
                        <div 
                            onClick={() => moveDot(index + 1)}
                            className={slideIndex === index + 1 ? "dot active" : "dot"}
                        ></div>
                    ))}
                </div>
                <button className="slide-right-btn" onClick={prevSlide}>
                    <img src={ChevronRightIcon} alt="right btn"/>
                </button>
            </div>
        </section>
    )
}

export default TestimonialSlider