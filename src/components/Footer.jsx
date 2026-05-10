
export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <div className="footer-grid">
        <div>
          <p className="footer-brand">Veloura</p>
          <p>Fine dining, private events, and handcrafted cocktails.</p>
        </div>

        <div>
          <p className="footer-title">Hours</p>
          <p>Tue – Sun · 12PM – 11PM</p>
        </div>

        <div>
          <p className="footer-title">Location</p>
          <p>1524 Rosewood Ave, Beverly Hills</p>
        </div>
      </div>

      <p className="footer-copy">© {currentYear} Veloura Restaurant — Luxury Fine Dining Experience</p>
    </footer>
  )
}
