
export default function About() {
  return (
    <main className="page about-page">
      <section className="about-hero section-surface">
        <div className="about-intro">
          <span className="eyebrow">About Veloura</span>
          <h1>123 Where culinary craft meets unforgettable hospitality.</h1>
          <p>
            Veloura blends elegant design, thoughtful service, and ingredient-driven cuisine to create a dining experience you remember long after the meal.
          </p>
        </div>

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop"
            alt="Restaurant interior with elegant dining setup"
          />
        </div>
      </section>

      <section className="history section-surface">
        <div className="section-heading">
          <span className="eyebrow">Our Journey</span>
          <h2>From a single table to a celebrated dining destination.</h2>
        </div>

        <div className="history-grid">
          <article className="history-card">
            <h3>2014</h3>
            <p>
              Veloura opened its doors with a vision to redefine modern fine dining through approachable luxury and locally sourced ingredients.
            </p>
          </article>
          <article className="history-card">
            <h3>2018</h3>
            <p>
              Expanded the dining room and introduced our private chef’s table, creating immersive tasting experiences for special celebrations.
            </p>
          </article>
          <article className="history-card">
            <h3>2022</h3>
            <p>
              Recognized as one of the city’s top dining spots, with a refreshed seasonal menu and a new cocktail lounge.
            </p>
          </article>
        </div>
      </section>

      <section className="mission section-surface">
        <div className="section-heading">
          <span className="eyebrow">Our Philosophy</span>
          <h2>Fine dining with warmth, creativity, and precision.</h2>
        </div>

        <div className="mission-grid">
          <article className="mission-card">
            <h3>Locally focused</h3>
            <p>We partner with trusted growers and producers to bring fresh seasonal ingredients to every plate.</p>
          </article>
          <article className="mission-card">
            <h3>Creative technique</h3>
            <p>Every dish is built with intention, balancing bold flavors and thoughtful plating.</p>
          </article>
          <article className="mission-card">
            <h3>Memorable service</h3>
            <p>Our team delivers polished hospitality with personal attention and a welcoming spirit.</p>
          </article>
        </div>
      </section>

      <section className="team section-surface">
        <div className="section-heading">
          <span className="eyebrow">Meet the Team</span>
          <h2>The people shaping the Veloura experience.</h2>
        </div>

        <div className="team-grid">
          <article className="team-member">
            <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop" alt="Head chef portrait" />
            <h3>Chef Emilie Rousseau</h3>
            <p>Executive Chef</p>
          </article>
          <article className="team-member">
            <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop" alt="Restaurant manager portrait" />
            <h3>Leo Martinez</h3>
            <p>General Manager</p>
          </article>
          <article className="team-member">
            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop" alt="Pastry chef portrait" />
            <h3>Nina Patel</h3>
            <p>Pastry Chef</p>
          </article>
          <article className="team-member">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop" alt="Sommelier portrait" />
            <h3>Ethan Cole</h3>
            <p>Sommelier</p>
          </article>
        </div>
      </section>
    </main>
  )
}
