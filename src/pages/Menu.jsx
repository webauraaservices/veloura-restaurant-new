
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { categories, menuItems } from '../data/menuData'

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('All')
  const filteredItems =
    activeCategory === 'All'
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory)

  return (
    <section className="page menu-page">
      <div className="page-intro">
        <div>
          <span className="eyebrow">Our Menu</span>
          <h1>Crafted plates for every appetite.</h1>
          <p>
            Explore a collection of starters, mains, desserts, and handcrafted drinks curated for an exceptional dining experience.
          </p>
        </div>

        <Link to="/contact" className="button-outline menu-cta">
          Reserve a Table
        </Link>
      </div>

      <div className="menu-filter">
        {categories.map((category) => (
          <button
            key={category}
            className={category === activeCategory ? 'pill active' : 'pill'}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="menu-grid">
        {filteredItems.map((item, index) => (
          <article className="menu-card" key={`${item.name}-${index}`}>
            <div className="menu-card-top">
              <h3>{item.name}</h3>
              <span>{item.price}</span>
            </div>
            <p>{item.description}</p>
            <div className="badge">{item.badge}</div>
          </article>
        ))}
      </div>
    </section>
  )
}
