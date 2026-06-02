/* ============================================================
   Cool & Ready — Portal UI Kit · shared parts & data
   Exports: Icon, Button, Sidebar, TopBar, StatusPill, Money,
            ProductCard, Avatar, PRODUCTS, ORDERS, SHIPMENTS
   ============================================================ */

// ---- Lucide icon ---------------------------------------------------------
function Icon({ name, size = 20, strokeWidth = 2, color, style, className }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const node = ref.current; if (!node) return;
    node.innerHTML = `<i data-lucide="${name}"></i>`;
    if (window.lucide) window.lucide.createIcons();
    const svg = node.querySelector('svg');
    if (svg) { svg.setAttribute('width', size); svg.setAttribute('height', size); svg.setAttribute('stroke-width', strokeWidth); }
  });
  return <span ref={ref} className={className} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: size, height: size, color, flex: 'none', ...style }} />;
}

// ---- Button --------------------------------------------------------------
function Button({ children, variant = 'primary', size = 'md', icon, iconRight, onClick, style, disabled }) {
  const [hover, setHover] = React.useState(false);
  const sizes = { sm: { fontSize: 13, padding: '7px 12px', gap: 6 }, md: { fontSize: 14.5, padding: '10px 16px', gap: 8 }, lg: { fontSize: 15.5, padding: '12px 20px', gap: 8 } }[size];
  const v = {
    primary: { background: hover ? 'var(--harbor-700)' : 'var(--harbor-800)', color: '#fff', border: '1px solid transparent' },
    accent: { background: hover ? 'var(--marine-600)' : 'var(--marine-500)', color: '#fff', border: '1px solid transparent' },
    secondary: { background: hover ? 'var(--ice-50)' : 'var(--paper)', color: 'var(--harbor-800)', border: '1px solid var(--border-strong)' },
    ghost: { background: hover ? 'var(--ice-100)' : 'transparent', color: 'var(--ink-700)', border: '1px solid transparent' },
  }[variant];
  return (
    <button onClick={onClick} disabled={disabled} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: sizes.gap, fontFamily: 'var(--font-sans)', fontWeight: 600, borderRadius: 'var(--radius-md)', cursor: disabled ? 'not-allowed' : 'pointer', transition: 'background var(--dur)', whiteSpace: 'nowrap', fontSize: sizes.fontSize, padding: sizes.padding, opacity: disabled ? 0.45 : 1, ...v, ...style }}>
      {icon && <Icon name={icon} size={size === 'sm' ? 15 : 17} />}{children}{iconRight && <Icon name={iconRight} size={size === 'sm' ? 15 : 17} />}
    </button>
  );
}

// ---- Status pill ---------------------------------------------------------
const STATUS = {
  delivered: { c: 'var(--success)', bg: 'var(--success-bg)', label: 'Delivered' },
  transit: { c: 'var(--harbor-700)', bg: 'var(--info-bg)', label: 'In transit' },
  packing: { c: '#B97A1E', bg: 'var(--warning-bg)', label: 'Packing' },
  scheduled: { c: 'var(--ink-600)', bg: 'var(--ice-100)', label: 'Scheduled' },
  alert: { c: 'var(--danger)', bg: 'var(--danger-bg)', label: 'Temp alert' },
};
function StatusPill({ status, children }) {
  const s = STATUS[status] || STATUS.scheduled;
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12.5, fontWeight: 600, padding: '4px 10px', borderRadius: 'var(--radius-pill)', background: s.bg, color: s.c }}>
      <span style={{ width: 7, height: 7, borderRadius: '50%', background: s.c }} />{children || s.label}
    </span>
  );
}

function Money({ value, size = 15 }) {
  return <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: size, color: 'var(--harbor-800)' }}>${value.toFixed(2)}</span>;
}
function Avatar({ initials = 'BP', size = 34 }) {
  return <span style={{ width: size, height: size, borderRadius: '50%', background: 'linear-gradient(135deg,var(--tide-400),var(--harbor-700))', color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: size * 0.38, flex: 'none' }}>{initials}</span>;
}

// ---- Data ----------------------------------------------------------------
const PRODUCTS = [
  { id: 'SR-COHO-2LB-FZ', name: 'Coho Salmon Fillet', cat: 'Finfish', tag: 'Wild', price: 14.20, unit: 'lb', temp: '−1°C', grad: 'linear-gradient(150deg,#46C2D4,#073F52)', badge: 'New' },
  { id: 'SC-U10-DRY-FR', name: 'U/10 Dry Scallops', cat: 'Shellfish', tag: 'Dry-packed', price: 28.50, unit: 'lb', temp: '0°C', grad: 'linear-gradient(150deg,#82DCE3,#0A47A8)' },
  { id: 'TN-AHI-SAKU-FZ', name: 'Ahi Tuna Saku', cat: 'Finfish', tag: 'Sashimi', price: 22.75, unit: 'lb', temp: '−18°C', grad: 'linear-gradient(150deg,#9FE3D8,#0E7693)' },
  { id: 'SH-16-20-EZ', name: 'Shrimp 16/20 EZ-Peel', cat: 'Shellfish', tag: 'Farm-raised', price: 11.90, unit: 'lb', temp: '−18°C', grad: 'linear-gradient(150deg,#46C2D4,#0A5A72)' },
  { id: 'CD-ATL-LOIN-FR', name: 'Atlantic Cod Loin', cat: 'Finfish', tag: 'Wild', price: 13.40, unit: 'lb', temp: '−1°C', grad: 'linear-gradient(150deg,#8DB8F2,#073F52)' },
  { id: 'OY-KUMA-DZ', name: 'Kumamoto Oysters', cat: 'Shellfish', tag: 'Live', price: 18.00, unit: 'dz', temp: '4°C', grad: 'linear-gradient(150deg,#9FE3D8,#0E7693)', badge: 'New' },
  { id: 'CR-DUNG-CL', name: 'Dungeness Crab', cat: 'Shellfish', tag: 'Cooked', price: 16.25, unit: 'lb', temp: '−1°C', grad: 'linear-gradient(150deg,#46C2D4,#073F52)' },
  { id: 'BZ-WHOLE-FR', name: 'Branzino, Whole', cat: 'Finfish', tag: 'Farm-raised', price: 9.80, unit: 'lb', temp: '0°C', grad: 'linear-gradient(150deg,#82DCE3,#0A47A8)' },
];

const ORDERS = [
  { id: '#CR-100482', date: 'Jun 2, 2026', items: 7, total: 1284.40, status: 'transit' },
  { id: '#CR-100471', date: 'May 30, 2026', items: 5, total: 902.10, status: 'delivered' },
  { id: '#CR-100463', date: 'May 28, 2026', items: 9, total: 1640.75, status: 'delivered' },
  { id: '#CR-100455', date: 'May 26, 2026', items: 4, total: 588.00, status: 'delivered' },
];

const SHIPMENTS = [
  { id: 'CRX 7741 9930 02', order: '#CR-100482', eta: 'Today, 2:00–4:00 PM', status: 'transit', temp: '−1.1°C', steps: [
    { t: 'Order packed', d: 'Today · 8:14 AM', done: true },
    { t: 'Left cold facility', d: 'Today · 9:02 AM', done: true },
    { t: 'In refrigerated transit', d: 'Today · now', done: true, active: true },
    { t: 'Out for delivery', d: 'Est. 1:30 PM', done: false },
    { t: 'Delivered cold', d: 'Est. 2:00–4:00 PM', done: false },
  ] },
];

// ---- Sidebar -------------------------------------------------------------
function Sidebar({ view, setView, cartCount }) {
  const nav = [
    ['dashboard', 'layout-dashboard', 'Dashboard'],
    ['catalog', 'fish', 'Catalog'],
    ['orders', 'clipboard-list', 'Orders'],
    ['shipments', 'truck', 'Shipments'],
    ['invoices', 'receipt', 'Invoices'],
  ];
  return (
    <aside style={{ width: 248, background: 'var(--harbor-900)', color: 'var(--fg-on-dark)', display: 'flex', flexDirection: 'column', flex: 'none', height: '100vh', position: 'sticky', top: 0 }}>
      <div style={{ padding: '20px 20px 18px', borderBottom: '1px solid var(--border-on-dark)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src="../../assets/logo-mark-white.png" alt="" style={{ height: 30 }} />
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, color: '#fff', whiteSpace: 'nowrap' }}>Cool &amp; Ready</span>
        </div>
      </div>
      <nav style={{ padding: 12, display: 'grid', gap: 3, flex: 1 }}>
        {nav.map(([key, icon, label]) => {
          const active = view === key;
          return (
            <a key={key} onClick={() => setView(key)} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px', borderRadius: 'var(--radius-md)', cursor: 'pointer', fontSize: 14.5, fontWeight: active ? 600 : 500, color: active ? '#fff' : 'var(--fg-on-dark-muted)', background: active ? 'rgba(255,255,255,0.08)' : 'transparent', position: 'relative' }}>
              {active && <span style={{ position: 'absolute', left: 0, top: 8, bottom: 8, width: 3, borderRadius: 3, background: 'var(--tide-300)' }} />}
              <Icon name={icon} size={19} color={active ? 'var(--tide-300)' : 'currentColor'} />
              {label}
              {key === 'orders' && cartCount > 0 && <span style={{ marginLeft: 'auto', background: 'var(--marine-500)', color: '#fff', fontSize: 11, fontWeight: 700, borderRadius: 'var(--radius-pill)', padding: '1px 7px' }}>{cartCount}</span>}
            </a>
          );
        })}
      </nav>
      <div style={{ padding: 14, borderTop: '1px solid var(--border-on-dark)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Avatar initials="BP" />
          <div style={{ minWidth: 0 }}>
            <div style={{ fontSize: 13.5, fontWeight: 600, color: '#fff', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Blue Plate Co.</div>
            <div style={{ fontSize: 12, color: 'var(--fg-on-dark-muted)' }}>Account #4821</div>
          </div>
          <Icon name="chevron-down" size={16} color="var(--fg-on-dark-muted)" style={{ marginLeft: 'auto' }} />
        </div>
      </div>
    </aside>
  );
}

// ---- TopBar --------------------------------------------------------------
function TopBar({ title, sub, onCart, cartCount, right }) {
  return (
    <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 32px', borderBottom: '1px solid var(--border)', background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(10px)', position: 'sticky', top: 0, zIndex: 20 }}>
      <div>
        <h1 style={{ font: 'var(--text-h3)', fontSize: 22, margin: 0 }}>{title}</h1>
        {sub && <p style={{ fontSize: 13.5, color: 'var(--fg-subtle)', margin: '3px 0 0' }}>{sub}</p>}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        {right}
        <button onClick={onCart} style={{ position: 'relative', width: 40, height: 40, borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', background: 'var(--paper)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Icon name="shopping-cart" size={19} color="var(--ink-700)" />
          {cartCount > 0 && <span style={{ position: 'absolute', top: -6, right: -6, background: 'var(--marine-500)', color: '#fff', fontSize: 11, fontWeight: 700, borderRadius: 'var(--radius-pill)', minWidth: 18, height: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 4px' }}>{cartCount}</span>}
        </button>
      </div>
    </header>
  );
}

// ---- Product card --------------------------------------------------------
function ProductCard({ p, qty, onAdd, onInc, onDec }) {
  const [h, setH] = React.useState(false);
  return (
    <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ background: 'var(--paper)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: h ? 'var(--shadow-md)' : 'var(--shadow-sm)', transform: h ? 'translateY(-2px)' : 'none', transition: 'all var(--dur)' }}>
      <div style={{ position: 'relative', height: 124, background: p.grad, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'rgba(255,255,255,0.8)' }}>image slot</span>
        {p.badge && <span style={{ position: 'absolute', top: 10, left: 10, background: 'var(--marine-500)', color: '#fff', fontSize: 11, fontWeight: 700, padding: '3px 9px', borderRadius: 'var(--radius-pill)' }}>{p.badge}</span>}
        <span style={{ position: 'absolute', top: 10, right: 10, background: 'rgba(5,43,56,0.55)', color: '#fff', fontSize: 11, fontWeight: 600, padding: '3px 9px', borderRadius: 'var(--radius-pill)', display: 'flex', alignItems: 'center', gap: 4, backdropFilter: 'blur(4px)' }}><Icon name="snowflake" size={12} />{p.temp}</span>
      </div>
      <div style={{ padding: '13px 15px 15px' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-subtle)' }}>{p.id}</div>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 16.5, margin: '3px 0 9px' }}>{p.name}</div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div><Money value={p.price} size={17} /><span style={{ fontSize: 12.5, color: 'var(--fg-subtle)', fontWeight: 500 }}> / {p.unit}</span></div>
          {qty > 0 ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, border: '1px solid var(--border-strong)', borderRadius: 'var(--radius-md)', padding: '2px' }}>
              <button onClick={onDec} style={qbtn}><Icon name="minus" size={14} /></button>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 14, fontWeight: 600, minWidth: 18, textAlign: 'center' }}>{qty}</span>
              <button onClick={onInc} style={qbtn}><Icon name="plus" size={14} /></button>
            </div>
          ) : (
            <Button variant="secondary" size="sm" icon="plus" onClick={onAdd}>Add</Button>
          )}
        </div>
      </div>
    </div>
  );
}
const qbtn = { width: 26, height: 26, border: 'none', background: 'var(--ice-100)', borderRadius: 'var(--radius-sm)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--harbor-800)' };

Object.assign(window, { Icon, Button, StatusPill, Money, Avatar, Sidebar, TopBar, ProductCard, PRODUCTS, ORDERS, SHIPMENTS, STATUS });
