
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    title: 'Signature Dishes',
    description: 'Seasonal plates crafted from premium ingredients and bold flavors.'
  },
  {
    title: 'Luxury Ambience',
    description: 'Modern dining rooms, private booths, and a curated lounge area.'
  },
  {
    title: 'Private Events',
    description: 'Intimate celebrations with bespoke menus and dedicated service.'
  }
]

const featuredDishes = [
  {
    title: 'Veloura Ribeye',
    subtitle: 'Aged premium steak with rosemary butter',
    price: '$42'
  },
  {
    title: 'Truffle Tagliatelle',
    subtitle: 'Black truffle, parmesan cream, fresh herbs',
    price: '$24'
  },
  {
    title: 'Chocolate Fondant',
    subtitle: 'Warm molten cake with vanilla bean ice cream',
    price: '$14'
  }
]

const stats = [
  { value: '12+', label: 'Years of experience' },
  { value: '98%', label: 'Customer satisfaction' },
  { value: '4.9', label: 'Average review score' }
]

const testimonials = [
  {
    quote: "An unforgettable dining experience. The attention to detail and flavor profiles are exceptional.",
    author: "Sarah Chen",
    role: "Food Critic"
  },
  {
    quote: "Veloura redefined fine dining for us. Every dish tells a story, and the service is impeccable.",
    author: "Marcus Rivera",
    role: "Chef & Restaurateur"
  },
  {
    quote: "From the moment we walked in, we felt special. The ambiance and cuisine exceeded all expectations.",
    author: "Elena Petrov",
    role: "Event Planner"
  },
  {
    quote: "The best restaurant experience I've had. Every bite was a masterpiece of flavor and presentation.",
    author: "David Kim",
    role: "Culinary Blogger"
  },
  {
    quote: "Outstanding service and incredible food. Veloura sets the standard for fine dining.",
    author: "Lisa Wong",
    role: "Restaurant Reviewer"
  },
  {
    quote: "A culinary journey that delights all the senses. Highly recommended for special occasions.",
    author: "James Liu",
    role: "Event Coordinator"
  },
  {
    quote: "Innovative dishes with traditional roots. The wine pairing was perfect.",
    author: "Maria Gonzalez",
    role: "Wine Enthusiast"
  },
  {
    quote: "Elegant atmosphere with world-class cuisine. A must-visit for food lovers.",
    author: "Robert Taylor",
    role: "Business Executive"
  }
]

const aboutPreview = {
  title: "Crafting Moments, One Dish at a Time",
  description: "Founded in 2014, Veloura has been at the forefront of modern gastronomy, blending traditional techniques with innovative presentations. Our team of passionate chefs sources the finest ingredients to create memorable experiences for every guest.",
  image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop"
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const testimonialRef = useRef(null)
  const statsRef = useRef(null)

  useEffect(() => {
    // Animate testimonial changes
    if (testimonialRef.current) {
      gsap.fromTo('.testimonial-card', 
        { opacity: 0, x: 50 }, 
        { opacity: 1, x: 0, duration: 0.5, ease: 'power2.out' }
      )
    }
  }, [currentSlide])

  useEffect(() => {
    gsap.from('.hero-left > *', {
      y: 80,
      opacity: 0,
      stagger: 0.15,
      duration: 1
    })

    gsap.from('.hero-right img', {
      scale: 0.8,
      opacity: 0,
      duration: 1.2
    })

    // Stats counter animation
    if (statsRef.current) {
      const stats = gsap.utils.toArray('.stat-card h3')
      stats.forEach((stat) => {
        const target = parseInt(stat.textContent.replace(/[^\d]/g, ''))
        gsap.fromTo(stat, 
          { textContent: 0 }, 
          {
            textContent: target,
            duration: 2,
            ease: 'power2.out',
            snap: { textContent: 1 },
            scrollTrigger: {
              trigger: statsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      })
    }
  }, [])

  const totalSlides = Math.ceil(testimonials.length / 2)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  return (
    <>
      <section className="hero">
        <div className="hero-left">
          <span className="tag">Luxury Dining Experience</span>

          <h1>Modern dining crafted beautifully for every celebration.</h1>

          <p>
            Discover premium cuisine, immersive ambience, and unforgettable service specially designed for modern food lovers.
          </p>

          <div className="hero-buttons">
            <Link to="/menu" className="button-primary">
              Explore Menu
            </Link>
            <Link to="/contact" className="button-outline">
              Book Table
            </Link>
          </div>
        </div>

        <div className="hero-right">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop"
            alt="Fine dining restaurant table"
          />
        </div>
      </section>

      <section className="services section-surface">
        {services.map((item) => (
          <article className="card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </section>

      <section className="featured section-surface">
        <div className="section-heading">
          <span className="eyebrow">Chef’s Favorites</span>
          <h2>Discover signature plates from our kitchen</h2>
        </div>

        <div className="featured-grid">
          {featuredDishes.map((dish) => (
            <article className="menu-card" key={dish.title}>
              <div className="menu-card-top">
                <h3>{dish.title}</h3>
                <span>{dish.price}</span>
              </div>
              <p>{dish.subtitle}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="stats-grid" ref={statsRef}>
        {stats.map((item) => (
          <div className="stat-card" key={item.label}>
            <h3>{item.value}</h3>
            <p>{item.label}</p>
          </div>
        ))}
      </section>

      <section className="testimonials section-surface">
        <div className="section-heading">
          <span className="eyebrow">What Our Guests Say</span>
          <h2>Trusted by food lovers worldwide</h2>
        </div>

        <div className="testimonial-slider" ref={testimonialRef}>
          <button className="slider-btn prev" onClick={prevSlide} aria-label="Previous slide">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,255,255,1)"><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path></svg>
          </button>
          
          <div className="testimonial-container">
            {[0, 1].map((offset) => {
              const index = currentSlide * 2 + offset
              const testimonial = testimonials[index]
              if (!testimonial) return null
              return (
                <blockquote className="testimonial-card" key={index}>
                  <p>"{testimonial.quote}"</p>
                  <cite>
                    <strong>{testimonial.author}</strong>
                    <span>{testimonial.role}</span>
                  </cite>
                </blockquote>
              )
            })}
          </div>
          
          <button className="slider-btn next" onClick={nextSlide} aria-label="Next slide">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,255,255,1)"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg>
          </button>
        </div>

        <div className="slider-dots">
          {Array.from({ length: totalSlides }, (_, index) => (
            <button 
              key={index} 
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      <section className="about-preview section-surface">
        <div className="about-grid">
          <div>
            <span className="eyebrow">About Veloura</span>
            <h2>{aboutPreview.title}</h2>
            <p>{aboutPreview.description}</p>
            <Link to="/about" className="button-outline">
              Learn More
            </Link>
          </div>
          <img src={aboutPreview.image} alt="Restaurant interior" />
        </div>
      </section>

      <section className="cta section-surface">
        <div className="cta-content">
          <h2>Ready for an unforgettable experience?</h2>
          <p>Book your table today and discover why Veloura is the destination for modern fine dining.</p>
          <Link to="/contact" className="button-primary">
            Reserve Now
          </Link>
        </div>
      </section>
    </>
  )
}
