import Link from "next/link";

const stateLinks = [
  { href: "/states?region=North", label: "North India" },
  { href: "/states?region=South", label: "South India" },
  { href: "/states?region=East", label: "East India" },
  { href: "/states?region=West", label: "West India" },
  { href: "/states?region=Central", label: "Central India" },
  { href: "/states?region=Northeast", label: "Northeast India" },
];

const categoryLinks = [
  { href: "/categories/heritage", label: "Heritage Sites" },
  { href: "/categories/nature", label: "Nature & Wildlife" },
  { href: "/categories/religious", label: "Religious Places" },
  { href: "/categories/adventure", label: "Adventure Spots" },
];

const quickLinks = [
  { href: "/places", label: "All Places" },
  { href: "/states", label: "All States" },
  { href: "/search", label: "Search" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(135deg, #1a1040 0%, #2d1b6b 50%, #0f4f6b 100%)",
        color: "rgba(255,255,255,0.85)",
        paddingTop: "4rem",
        paddingBottom: "2rem",
        marginTop: "auto",
      }}
    >
      <div className="container-xl">
        {/* Top grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "2.5rem",
            paddingBottom: "3rem",
            borderBottom: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.75rem",
                fontWeight: 700,
                marginBottom: "0.75rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <span>🇮🇳</span>
              <span className="text-gradient-saffron">TravelBharat</span>
            </div>
            <p style={{ fontSize: "0.875rem", lineHeight: 1.7, opacity: 0.7 }}>
              Your digital travel encyclopedia for exploring India — state by state, city by city.
            </p>
          </div>

          {/* Explore by Region */}
          <div>
            <h3 style={{ fontSize: "0.8125rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#ffa526", marginBottom: "1rem" }}>
              By Region
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {stateLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{ color: "rgba(255,255,255,0.75)", textDecoration: "none", fontSize: "0.875rem", transition: "color 0.2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#ffa526")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 style={{ fontSize: "0.8125rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#ffa526", marginBottom: "1rem" }}>
              Categories
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {categoryLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{ color: "rgba(255,255,255,0.75)", textDecoration: "none", fontSize: "0.875rem", transition: "color 0.2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#ffa526")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{ fontSize: "0.8125rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#ffa526", marginBottom: "1rem" }}>
              Quick Links
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{ color: "rgba(255,255,255,0.75)", textDecoration: "none", fontSize: "0.875rem", transition: "color 0.2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#ffa526")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            paddingTop: "1.5rem",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "0.75rem",
            fontSize: "0.8125rem",
            opacity: 0.6,
          }}
        >
          <p>© {new Date().getFullYear()} TravelBharat. Informational purposes only.</p>
          <p>Built with ❤️ for Incredible India 🏔️</p>
        </div>
      </div>
    </footer>
  );
}
