"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const navLinks = [
  { href: "/states", label: "States" },
  { href: "/places", label: "Places" },
  { href: "/categories/heritage", label: "Heritage" },
  { href: "/categories/nature", label: "Nature" },
  { href: "/categories/religious", label: "Religious" },
  { href: "/categories/adventure", label: "Adventure" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const q = searchQuery.trim();
    if (q) router.push(`/search?q=${encodeURIComponent(q)}`);
  };

  const isHome = pathname === "/";

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all 0.3s ease",
        backgroundColor: scrolled || !isHome
          ? "rgba(255,255,255,0.95)"
          : "transparent",
        backdropFilter: scrolled || !isHome ? "blur(12px)" : "none",
        borderBottom: scrolled || !isHome ? "1px solid #f0d5b8" : "none",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.08)" : "none",
      }}
    >
      <div className="container-xl" style={{ display: "flex", alignItems: "center", height: "4rem", gap: "1.5rem" }}>
        {/* Logo */}
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.5rem",
            fontWeight: 700,
            textDecoration: "none",
            color: scrolled || !isHome ? "#1a1040" : "white",
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            transition: "color 0.3s",
          }}
        >
          <span style={{ fontSize: "1.6rem" }}>🇮🇳</span>
          TravelBharat
        </Link>

        {/* Desktop Nav */}
        <nav
          aria-label="Main navigation"
          style={{
            display: "flex",
            gap: "0.25rem",
            flex: 1,
            alignItems: "center",
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                padding: "0.375rem 0.75rem",
                borderRadius: "0.5rem",
                fontSize: "0.9rem",
                fontWeight: 500,
                textDecoration: "none",
                transition: "all 0.2s",
                color:
                  pathname === link.href
                    ? "#f08c00"
                    : scrolled || !isHome
                    ? "#1a1040"
                    : "rgba(255,255,255,0.9)",
                backgroundColor: pathname === link.href
                  ? "rgba(240,140,0,0.1)"
                  : "transparent",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Search form — desktop */}
        <form onSubmit={handleSearch} style={{ display: "flex", gap: "0.5rem", flexShrink: 0 }} className="desktop-search">
          <input
            type="search"
            placeholder="Search places…"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search tourist places"
            style={{
              padding: "0.5rem 1rem",
              borderRadius: "999px",
              border: `1.5px solid ${scrolled || !isHome ? "#f0d5b8" : "rgba(255,255,255,0.4)"}`,
              background: scrolled || !isHome ? "white" : "rgba(255,255,255,0.15)",
              color: scrolled || !isHome ? "#1a1040" : "white",
              fontSize: "0.875rem",
              width: "220px",
              outline: "none",
              transition: "all 0.3s",
            }}
          />
          <button
            type="submit"
            className="btn-primary"
            style={{ padding: "0.5rem 1rem", fontSize: "0.875rem" }}
          >
            Search
          </button>
        </form>

        {/* Mobile hamburger */}
        <button
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-menu-btn"
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0.5rem",
            marginLeft: "auto",
            color: scrolled || !isHome ? "#1a1040" : "white",
            fontSize: "1.5rem",
          }}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          style={{
            background: "white",
            borderTop: "1px solid #f0d5b8",
            padding: "1rem",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                display: "block",
                padding: "0.75rem 1rem",
                color: pathname === link.href ? "#f08c00" : "#1a1040",
                fontWeight: 500,
                textDecoration: "none",
                borderRadius: "0.5rem",
                backgroundColor: pathname === link.href ? "#fff8f0" : "transparent",
              }}
            >
              {link.label}
            </Link>
          ))}
          <form onSubmit={handleSearch} style={{ display: "flex", gap: "0.5rem", marginTop: "0.75rem" }}>
            <input
              type="search"
              placeholder="Search places…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                flex: 1,
                padding: "0.625rem 1rem",
                borderRadius: "999px",
                border: "1.5px solid #f0d5b8",
                fontSize: "0.875rem",
                outline: "none",
              }}
            />
            <button type="submit" className="btn-primary" style={{ padding: "0.625rem 1rem", fontSize: "0.875rem" }}>Go</button>
          </form>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav, .desktop-search { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
