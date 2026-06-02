/* ============================================================
   Cool & Ready — Marketing UI Kit · shared parts
   Exports: Icon, Logo, Button, Tag, Container, ImageSlot,
            Overline, Nav, Footer
   ============================================================ */

// ---- Lucide icon wrapper -------------------------------------------------
function Icon({ name, size = 20, strokeWidth = 2, color, style, className }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;
    node.innerHTML = `<i data-lucide="${name}"></i>`;
    if (window.lucide) window.lucide.createIcons();
    const svg = node.querySelector('svg');
    if (svg) {
      svg.setAttribute('width', size);
      svg.setAttribute('height', size);
      svg.setAttribute('stroke-width', strokeWidth);
    }
  });
  return (
    <span
      ref={ref}
      className={className}
      style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: size, height: size, color, flex: 'none', ...style }}
    />
  );
}

// ---- Logo lockup ---------------------------------------------------------
function Logo({ variant = 'harbor', showText = true, markSize = 34, onClick }) {
  const src = variant === 'white' ? '../../assets/logo-mark-white.png'
            : variant === 'charcoal' ? '../../assets/logo-mark.png'
            : '../../assets/logo-mark-harbor.png';
  const topColor = variant === 'white' ? '#fff' : 'var(--harbor-800)';
  const subColor = variant === 'white' ? 'var(--tide-300)' : 'var(--tide-500)';
  return (
    <a onClick={onClick} style={{ display: 'flex', alignItems: 'center', gap: 11, cursor: 'pointer', textDecoration: 'none', flex: 'none' }}>
      <img src={src} alt="Cool & Ready" style={{ height: markSize, width: 'auto', display: 'block' }} />
      {showText && (
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.05, whiteSpace: 'nowrap' }}>
          <span style={{ fontSize: 18, color: topColor, display: 'block' }}>Cool &amp; Ready</span>
          <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 9.5, letterSpacing: '0.14em', textTransform: 'uppercase', color: subColor, display: 'block', marginTop: 3 }}>Seafood Supply</span>
        </span>
      )}
    </a>
  );
}

// ---- Button --------------------------------------------------------------
function Button({ children, variant = 'primary', size = 'md', icon, iconRight, onClick, style }) {
  const [hover, setHover] = React.useState(false);
  const sizes = {
    sm: { fontSize: 13, padding: '8px 13px', gap: 6 },
    md: { fontSize: 15, padding: '11px 18px', gap: 8 },
    lg: { fontSize: 16, padding: '14px 24px', gap: 9 },
  }[size];
  const variants = {
    primary: { background: hover ? 'var(--harbor-700)' : 'var(--harbor-800)', color: '#fff', border: '1px solid transparent' },
    accent: { background: hover ? 'var(--marine-600)' : 'var(--marine-500)', color: '#fff', border: '1px solid transparent' },
    secondary: { background: hover ? 'var(--ice-50)' : 'var(--paper)', color: 'var(--harbor-800)', border: '1px solid var(--border-strong)' },
    ghost: { background: hover ? 'var(--ice-100)' : 'transparent', color: 'var(--harbor-800)', border: '1px solid transparent' },
    onDark: { background: hover ? 'rgba(255,255,255,0.12)' : 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.3)' },
  }[variant];
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: sizes.gap, fontFamily: 'var(--font-sans)', fontWeight: 600, borderRadius: 'var(--radius-md)', cursor: 'pointer', transition: 'background var(--dur) var(--ease-out)', whiteSpace: 'nowrap', fontSize: sizes.fontSize, padding: sizes.padding, ...variants, ...style }}
    >
      {icon && <Icon name={icon} size={size === 'sm' ? 16 : 18} />}
      {children}
      {iconRight && <Icon name={iconRight} size={size === 'sm' ? 16 : 18} />}
    </button>
  );
}

// ---- Tag / Overline ------------------------------------------------------
function Tag({ children, icon }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 500, padding: '5px 12px', borderRadius: 'var(--radius-pill)', background: 'var(--ice-100)', color: 'var(--harbor-700)', border: '1px solid var(--ice-200)' }}>
      {icon && <Icon name={icon} size={14} />}
      {children}
    </span>
  );
}
function Overline({ children, onDark }) {
  return (
    <div style={{ textTransform: 'uppercase', letterSpacing: 'var(--tracking-overline)', fontWeight: 600, fontSize: 12, color: onDark ? 'var(--tide-300)' : 'var(--tide-500)' }}>{children}</div>
  );
}

// ---- Container -----------------------------------------------------------
function Container({ children, style }) {
  return <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', ...style }}>{children}</div>;
}

// ---- Image placeholder ---------------------------------------------------
function ImageSlot({ label = 'image', ratio, height, gradient = 'linear-gradient(135deg, var(--tide-300), var(--harbor-600))', radius = 'var(--radius-lg)', children, style }) {
  return (
    <div style={{ position: 'relative', background: gradient, borderRadius: radius, aspectRatio: ratio, height, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', ...style }}>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'rgba(255,255,255,0.8)', letterSpacing: '0.05em' }}>{label}</span>
      {children}
    </div>
  );
}

// ---- Nav -----------------------------------------------------------------
function Nav({ onCta }) {
  const [scrolled, setScrolled] = React.useState(false);
  const links = ['Products', 'Cold chain', 'Sourcing', 'About'];
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50, background: 'rgba(255,255,255,0.82)', backdropFilter: 'blur(12px)', borderBottom: '1px solid var(--border)' }}>
      <Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 70 }}>
        <Logo markSize={34} />
        <nav style={{ display: 'flex', alignItems: 'center', gap: 30 }}>
          {links.map(l => <NavLink key={l}>{l}</NavLink>)}
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Button variant="ghost" size="sm">Sign in</Button>
          <Button variant="primary" size="sm" onClick={onCta}>Become a customer</Button>
        </div>
      </Container>
    </header>
  );
}
function NavLink({ children }) {
  const [h, setH] = React.useState(false);
  return (
    <a onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
       style={{ fontSize: 15, fontWeight: 500, color: h ? 'var(--tide-500)' : 'var(--ink-700)', cursor: 'pointer', transition: 'color var(--dur)' }}>{children}</a>
  );
}

// ---- Footer --------------------------------------------------------------
function Footer() {
  const cols = [
    { h: 'Products', items: ['Finfish', 'Shellfish', 'Ready-to-cook', 'Frozen program', 'Seasonal catch'] },
    { h: 'Company', items: ['About us', 'Sourcing', 'Cold chain', 'Careers', 'Newsroom'] },
    { h: 'For buyers', items: ['Become a customer', 'Order portal', 'Delivery areas', 'Pricing', 'Support'] },
  ];
  return (
    <footer style={{ background: 'var(--harbor-900)', color: 'var(--fg-on-dark)', paddingTop: 64, paddingBottom: 32 }}>
      <Container>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 40, paddingBottom: 48, borderBottom: '1px solid var(--border-on-dark)' }}>
          <div>
            <Logo variant="white" markSize={36} />
            <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--fg-on-dark-muted)', marginTop: 18, maxWidth: 260 }}>
              One unbroken cold chain — from the dock to your back door. Seafood that shows up cold, fresh, and ready to cook.
            </p>
          </div>
          {cols.map(c => (
            <div key={c.h}>
              <div style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--tide-300)', marginBottom: 16 }}>{c.h}</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 11 }}>
                {c.items.map(i => <li key={i}><a style={{ fontSize: 14, color: 'var(--fg-on-dark-muted)', cursor: 'pointer' }}>{i}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 24, fontSize: 13, color: 'var(--fg-on-dark-muted)' }}>
          <span>© 2026 Cool &amp; Ready Seafood Supply. All rights reserved.</span>
          <div style={{ display: 'flex', gap: 22 }}>
            <a style={{ color: 'var(--fg-on-dark-muted)', cursor: 'pointer' }}>Privacy</a>
            <a style={{ color: 'var(--fg-on-dark-muted)', cursor: 'pointer' }}>Terms</a>
            <a style={{ color: 'var(--fg-on-dark-muted)', cursor: 'pointer' }}>HACCP &amp; food safety</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

Object.assign(window, { Icon, Logo, Button, Tag, Overline, Container, ImageSlot, Nav, NavLink, Footer });
