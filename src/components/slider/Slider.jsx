import React, { useEffect, useState } from 'react'
import "./slider.scss"

const Slider = ({ images = [] }) => {
    const [imageIndex, setImageIndex] = useState(null)

    const changeIndex = (index) => setImageIndex(index)

    const changeSlide = (direction) => {
        if (!images.length) return
        setImageIndex((current) => {
            if (direction === "left") return current === 0 ? images.length - 1 : current - 1
            return current === images.length - 1 ? 0 : current + 1
        })
    }

    const isOpen = imageIndex !== null

    useEffect(() => {
        if (!isOpen) return

        const previousOverflow = document.body.style.overflow
        document.body.style.overflow = 'hidden'
        document.body.classList.add('slider-open')

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') setImageIndex(null)
            if (event.key === 'ArrowLeft') {
                setImageIndex((current) => current === 0 ? images.length - 1 : current - 1)
            }
            if (event.key === 'ArrowRight') {
                setImageIndex((current) => current === images.length - 1 ? 0 : current + 1)
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => {
            document.body.style.overflow = previousOverflow
            document.body.classList.remove('slider-open')
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [isOpen, images.length])

    if (!images.length) return null

    return (
        <div className='sliderCont'>
            {imageIndex !== null && (
                <div className="fullSlider" role="dialog" aria-modal="true" aria-label="Property image gallery">
                    <button type="button" className="close" onClick={() => changeIndex(null)} aria-label="Close image gallery">×</button>
                    <button type="button" className="arrow" onClick={() => changeSlide("left")} aria-label="Previous image">
                        <img src="/arrow.png" alt="" />
                    </button>
                    <div className="sliderImage">
                        <img src={images[imageIndex]} alt={`Property ${imageIndex + 1}`} />
                        <span className="imageCounter">{imageIndex + 1} / {images.length}</span>
                    </div>
                    <button type="button" className="arrow" onClick={() => changeSlide("right")} aria-label="Next image">
                        <img className='right' src="/arrow.png" alt="" />
                    </button>
                </div>
            )}

            <button type="button" className="bigImage" onClick={() => changeIndex(0)} aria-label="Open first property image">
                <img src={images[0]} alt="Property main view" />
            </button>
            <div className="smallImage">
                {images.slice(1, 4).map((image, index) => (
                    <button type="button" key={index} onClick={() => changeIndex(index + 1)} aria-label={`Open property image ${index + 2}`}>
                        <img src={image} alt={`Property view ${index + 2}`} />
                    </button>
                ))}
                {images.length > 4 && (
                    <button type="button" className="moreImages" onClick={() => changeIndex(4)}>
                        +{images.length - 4} more
                    </button>
                )}
            </div>
        </div>
    )
}

export default Slider
