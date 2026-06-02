/* ============================================================
   Cool & Ready — Marketing UI Kit · page sections
   Uses globals from parts.jsx. Exports MarketingApp.
   ============================================================ */

// ---- Hero ----------------------------------------------------------------
function Hero({ onCta }) {
  return (
    <section style={{ background: 'var(--ice-50)', paddingTop: 72, paddingBottom: 80, overflow: 'hidden' }}>
      <Container style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 56, alignItems: 'center' }}>
        <div>
          <Overline>Cold chain · ready to cook</Overline>
          <h1 style={{ font: 'var(--text-h1)', fontSize: 58, letterSpacing: '-0.025em', color: 'var(--fg)', margin: '18px 0 0', textWrap: 'balance' }}>
            Seafood that shows up cold, fresh, and ready to cook.
          </h1>
          <p style={{ font: 'var(--text-body-lg)', color: 'var(--fg-muted)', margin: '22px 0 0', maxWidth: 480 }}>
            One unbroken cold chain — from the dock to your back door. Lot-tracked, temperature-logged, and delivered in a window you can plan a service around.
          </p>
          <div style={{ display: 'flex', gap: 14, marginTop: 34 }}>
            <Button variant="accent" size="lg" icon="shopping-cart" onClick={onCta}>Become a customer</Button>
            <Button variant="secondary" size="lg" iconRight="arrow-right">View the catalog</Button>
          </div>
          <div style={{ display: 'flex', gap: 26, marginTop: 38 }}>
            {[['48', 'ports sourced'], ['2-hr', 'delivery window'], ['−1°C', 'held end-to-end']].map(([n, l]) => (
              <div key={l}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 26, color: 'var(--harbor-800)' }}>{n}</div>
                <div style={{ fontSize: 13, color: 'var(--fg-subtle)', marginTop: 2 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <ImageSlot label="hero — fresh catch on ice" height={460} radius="var(--radius-xl)" style={{ boxShadow: 'var(--shadow-lg)' }} />
          <div style={{ position: 'absolute', bottom: 22, left: -26, background: 'var(--paper)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)', padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 12, border: '1px solid var(--border)' }}>
            <span style={{ width: 38, height: 38, borderRadius: '50%', background: 'var(--success-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon name="snowflake" size={20} color="var(--success)" />
            </span>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 600, color: 'var(--harbor-800)' }}>LOT-49281-A · −1.0°C</div>
              <div style={{ fontSize: 12, color: 'var(--fg-subtle)' }}>Temperature verified · 4 min ago</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

// ---- Trust / logo strip --------------------------------------------------
function TrustBar() {
  const names = ['BLUE PLATE CO.', 'HARBORHOUSE', 'THE GREY MULLET', 'COASTAL MARKETS', 'NORI + SALT', 'PIER 9 GROUP'];
  return (
    <section style={{ background: 'var(--paper)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '26px 0' }}>
      <Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
        <span style={{ fontSize: 13, color: 'var(--fg-subtle)', whiteSpace: 'nowrap' }}>Trusted by kitchens &amp; buyers</span>
        <div style={{ display: 'flex', gap: 34, flexWrap: 'wrap' }}>
          {names.map(n => <span key={n} style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 15, color: 'var(--ink-400)', letterSpacing: '0.02em' }}>{n}</span>)}
        </div>
      </Container>
    </section>
  );
}

// ---- Value props ---------------------------------------------------------
function ValueProps() {
  const items = [
    { icon: 'snowflake', t: 'Unbroken cold chain', d: 'Held at −1°C from dock to door, with a temperature log attached to every case you receive.' },
    { icon: 'route', t: 'Delivery you can plan around', d: 'Standing orders lock in your weekly volume and a 2-hour window — no guessing, no gaps.' },
    { icon: 'shield-check', t: 'Traceable to the lot', d: 'Every case carries a lot number tied to vessel, port, and landing date. HACCP throughout.' },
    { icon: 'flame', t: 'Ready to cook', d: 'Portioned, scaled, and prepped to spec, so it lands in your kitchen ready for the pass.' },
  ];
  return (
    <section style={{ background: 'var(--ice-50)', padding: '88px 0' }}>
      <Container>
        <div style={{ maxWidth: 640 }}>
          <Overline>Why Cool &amp; Ready</Overline>
          <h2 style={{ font: 'var(--text-h2)', letterSpacing: '-0.02em', margin: '14px 0 0' }}>Supply you can build a menu on.</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 22, marginTop: 44 }}>
          {items.map(it => (
            <div key={it.t} style={{ background: 'var(--paper)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: 24, boxShadow: 'var(--shadow-sm)' }}>
              <span style={{ width: 46, height: 46, borderRadius: 'var(--radius-md)', background: 'var(--info-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name={it.icon} size={24} color="var(--harbor-700)" />
              </span>
              <h3 style={{ font: 'var(--text-h4)', margin: '18px 0 8px' }}>{it.t}</h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.6, color: 'var(--fg-muted)', margin: 0 }}>{it.d}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// ---- Product categories --------------------------------------------------
function Categories({ onCta }) {
  const cats = [
    { t: 'Finfish', d: 'Salmon, cod, halibut, branzino', tag: 'Wild & farmed', grad: 'linear-gradient(150deg, #46C2D4, #073F52)' },
    { t: 'Shellfish', d: 'Scallops, shrimp, oysters, crab', tag: 'Dry-packed', grad: 'linear-gradient(150deg, #8DB8F2, #0A47A8)' },
    { t: 'Ready-to-cook', d: 'Portioned, marinated, breaded', tag: 'Kitchen-ready', grad: 'linear-gradient(150deg, #9FE3D8, #0E7693)' },
  ];
  return (
    <section style={{ background: 'var(--paper)', padding: '88px 0' }}>
      <Container>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
          <div style={{ maxWidth: 560 }}>
            <Overline>The catalog</Overline>
            <h2 style={{ font: 'var(--text-h2)', letterSpacing: '-0.02em', margin: '14px 0 0' }}>Browse by what you're cooking.</h2>
          </div>
          <Button variant="ghost" iconRight="arrow-right">See all products</Button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22, marginTop: 40 }}>
          {cats.map(c => (
            <CategoryCard key={c.t} {...c} onCta={onCta} />
          ))}
        </div>
      </Container>
    </section>
  );
}
function CategoryCard({ t, d, tag, grad, onCta }) {
  const [h, setH] = React.useState(false);
  return (
    <div onClick={onCta} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', cursor: 'pointer', boxShadow: h ? 'var(--shadow-md)' : 'var(--shadow-sm)', transform: h ? 'translateY(-3px)' : 'none', transition: 'all var(--dur) var(--ease-out)', background: 'var(--paper)' }}>
      <ImageSlot label={`${t.toLowerCase()} photo`} height={188} radius="0" gradient={grad}>
        <span style={{ position: 'absolute', top: 14, left: 14, background: 'rgba(5,43,56,0.55)', color: '#fff', fontSize: 12, fontWeight: 600, padding: '4px 11px', borderRadius: 'var(--radius-pill)', backdropFilter: 'blur(4px)' }}>{tag}</span>
      </ImageSlot>
      <div style={{ padding: '18px 20px 22px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h3 style={{ font: 'var(--text-h3)', fontSize: 22, margin: 0 }}>{t}</h3>
          <p style={{ fontSize: 14, color: 'var(--fg-muted)', margin: '4px 0 0' }}>{d}</p>
        </div>
        <Icon name="arrow-up-right" size={22} color={h ? 'var(--tide-500)' : 'var(--ink-300)'} />
      </div>
    </div>
  );
}

// ---- Cold-chain stat band (dark) -----------------------------------------
function ColdChainBand() {
  const steps = [
    { icon: 'anchor', t: 'Landed', d: 'Iced at the dock within hours of the catch.' },
    { icon: 'thermometer-snowflake', t: 'Held', d: 'Blast-chilled and stored at −1°C.' },
    { icon: 'truck', t: 'Moved', d: 'Refrigerated transport, logged the whole way.' },
    { icon: 'door-open', t: 'Delivered', d: 'Handed off cold, inside your window.' },
  ];
  return (
    <section style={{ background: 'var(--harbor-900)', color: '#fff', padding: '88px 0', position: 'relative', overflow: 'hidden' }}>
      <div className="cr-soundings" style={{ position: 'absolute', inset: 0, background: "url('../../assets/soundings.svg') center/130% no-repeat", opacity: 0.9, pointerEvents: 'none' }} />
      <Container style={{ position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 60, alignItems: 'center' }}>
          <div>
            <Overline onDark>The cold chain</Overline>
            <h2 style={{ font: 'var(--text-h2)', letterSpacing: '-0.02em', color: '#fff', margin: '14px 0 16px' }}>Cold the whole way, or it doesn't ship.</h2>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--fg-on-dark-muted)', maxWidth: 420, margin: 0 }}>
              Temperature is logged at every handoff and travels with the case. If the chain breaks, the product doesn't reach your kitchen — that's the whole promise.
            </p>
            <Button variant="onDark" size="md" iconRight="arrow-right" style={{ marginTop: 28 }}>How it works</Button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {steps.map((s, i) => (
              <div key={s.t} style={{ background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(3px)', border: '1px solid var(--border-on-dark)', borderRadius: 'var(--radius-lg)', padding: 22 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Icon name={s.icon} size={26} color="var(--tide-300)" />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--fg-on-dark-muted)' }}>0{i + 1}</span>
                </div>
                <h3 style={{ font: 'var(--text-h4)', color: '#fff', margin: '16px 0 6px' }}>{s.t}</h3>
                <p style={{ fontSize: 13.5, lineHeight: 1.55, color: 'var(--fg-on-dark-muted)', margin: 0 }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

// ---- Testimonial ---------------------------------------------------------
function Testimonial() {
  return (
    <section style={{ background: 'var(--ice-50)', padding: '88px 0' }}>
      <Container style={{ maxWidth: 880, textAlign: 'center' }}>
        <Icon name="quote" size={40} color="var(--tide-400)" style={{ margin: '0 auto' }} />
        <p style={{ font: 'var(--text-h3)', fontSize: 30, lineHeight: 1.35, letterSpacing: '-0.01em', color: 'var(--fg)', margin: '20px auto 28px', textWrap: 'balance' }}>
          “We pulled three suppliers down to one. The product is consistent, it's cold when it lands, and the window actually holds. That changed how we run prep.”
        </p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14 }}>
          <ImageSlot label="" height={48} style={{ width: 48, borderRadius: '50%' }} gradient="linear-gradient(135deg,#9FE3D8,#0E7693)" />
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontWeight: 600, fontSize: 15 }}>Marco Reyes</div>
            <div style={{ fontSize: 13, color: 'var(--fg-subtle)' }}>Executive Chef · Blue Plate Co.</div>
          </div>
        </div>
      </Container>
    </section>
  );
}

// ---- CTA -----------------------------------------------------------------
function CTASection({ onCta }) {
  return (
    <section style={{ background: 'var(--paper)', padding: '80px 0' }}>
      <Container>
        <div style={{ background: 'linear-gradient(120deg, var(--harbor-800), var(--harbor-600))', borderRadius: 'var(--radius-xl)', padding: '56px 56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 40, flexWrap: 'wrap', boxShadow: 'var(--shadow-lg)' }}>
          <div style={{ maxWidth: 560 }}>
            <h2 style={{ font: 'var(--text-h2)', color: '#fff', letterSpacing: '-0.02em', margin: 0 }}>Ready to set up your account?</h2>
            <p style={{ fontSize: 16.5, color: 'rgba(255,255,255,0.85)', marginTop: 14, marginBottom: 0 }}>
              Tell us what you cook and where you are. We'll confirm delivery areas and get your first order moving.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 14 }}>
            <Button variant="accent" size="lg" icon="shopping-cart" onClick={onCta}>Become a customer</Button>
            <Button variant="onDark" size="lg">Talk to sales</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

// ---- App -----------------------------------------------------------------
function MarketingApp() {
  const [toast, setToast] = React.useState(false);
  const fire = () => { setToast(true); clearTimeout(window.__t); window.__t = setTimeout(() => setToast(false), 2600); };
  return (
    <div style={{ fontFamily: 'var(--font-sans)', color: 'var(--fg)', background: 'var(--paper)' }}>
      <Nav onCta={fire} />
      <Hero onCta={fire} />
      <TrustBar />
      <ValueProps />
      <Categories onCta={fire} />
      <ColdChainBand />
      <Testimonial />
      <CTASection onCta={fire} />
      <Footer />
      <div style={{ position: 'fixed', left: '50%', bottom: toast ? 30 : -80, transform: 'translateX(-50%)', transition: 'bottom var(--dur-slow) var(--ease-out)', background: 'var(--harbor-900)', color: '#fff', padding: '13px 20px', borderRadius: 'var(--radius-pill)', boxShadow: 'var(--shadow-xl)', display: 'flex', alignItems: 'center', gap: 10, zIndex: 100, fontSize: 14.5 }}>
        <Icon name="check-circle" size={18} color="var(--seafoam-300)" />
        Thanks — a rep will reach out to set up your account.
      </div>
    </div>
  );
}

Object.assign(window, { MarketingApp });
