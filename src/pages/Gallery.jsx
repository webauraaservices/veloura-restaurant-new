
import { useState } from 'react'
import { galleryCategories, galleryItems } from '../data/galleryData'

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All')
  const filteredImages =
    activeFilter === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter)

  return (
    <section className="page gallery-page">
      <div className="page-intro">
        <div>
          <span className="eyebrow">Gallery</span>
          <h1>See our kitchen, dining, and craft cocktails.</h1>
          <p>
            Browse curated imagery from Veloura to get a feel for the atmosphere, flavors, and experience.
          </p>
        </div>
      </div>

      <div className="menu-filter gallery-filter">
        {galleryCategories.map((category) => (
          <button
            key={category}
            className={category === activeFilter ? 'pill active' : 'pill'}
            onClick={() => setActiveFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {filteredImages.map((item, index) => (
          <article key={`${item.alt}-${index}`} className="gallery-card">
            <img src={item.src} alt={item.alt} />
            <div className="gallery-caption">{item.category}</div>
          </article>
        ))}
      </div>
    </section>
  )
}
