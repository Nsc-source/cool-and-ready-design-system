/* ============================================================
   Cool & Ready — Portal UI Kit · screens
   Uses globals from parts.jsx. Exports PortalApp.
   ============================================================ */

function Panel({ children, style, pad = 22 }) {
  return <div style={{ background: 'var(--paper)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)', padding: pad, ...style }}>{children}</div>;
}
function SectionTitle({ children, action }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
      <h2 style={{ font: 'var(--text-h4)', fontSize: 17, margin: 0 }}>{children}</h2>
      {action}
    </div>
  );
}

// ---- Dashboard -----------------------------------------------------------
function Dashboard({ setView }) {
  const stats = [
    { icon: 'truck', label: 'Active shipments', value: '1', sub: 'arriving today', tone: 'var(--harbor-700)' },
    { icon: 'clipboard-list', label: 'Open orders', value: '2', sub: '7 line items', tone: 'var(--marine-500)' },
    { icon: 'wallet', label: 'Spend this week', value: '$2,186', sub: '+12% vs last', tone: 'var(--success)' },
    { icon: 'calendar-clock', label: 'Next delivery', value: '2–4 PM', sub: 'today', tone: 'var(--tide-500)' },
  ];
  const sh = SHIPMENTS[0];
  return (
    <div style={{ padding: 32, display: 'grid', gap: 24 }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 18 }}>
        {stats.map(s => (
          <Panel key={s.label} pad={18}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <span style={{ width: 38, height: 38, borderRadius: 'var(--radius-md)', background: 'var(--ice-100)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name={s.icon} size={20} color={s.tone} /></span>
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 28, marginTop: 14, color: 'var(--fg)' }}>{s.value}</div>
            <div style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--fg)', marginTop: 2 }}>{s.label}</div>
            <div style={{ fontSize: 12.5, color: 'var(--fg-subtle)', marginTop: 1 }}>{s.sub}</div>
          </Panel>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 24 }}>
        <Panel>
          <SectionTitle action={<Button variant="ghost" size="sm" iconRight="arrow-right" onClick={() => setView('shipments')}>Track</Button>}>Arriving today</SectionTitle>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 16px', background: 'var(--info-bg)', borderRadius: 'var(--radius-md)', marginBottom: 18 }}>
            <Icon name="thermometer-snowflake" size={26} color="var(--harbor-700)" />
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600, fontSize: 14.5 }}>Order {sh.order} · {sh.eta}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12.5, color: 'var(--fg-muted)' }}>{sh.id} · holding {sh.temp}</div>
            </div>
            <StatusPill status="transit" />
          </div>
          <MiniTimeline steps={sh.steps} />
        </Panel>

        <Panel>
          <SectionTitle action={<Button variant="ghost" size="sm" onClick={() => setView('catalog')}>Browse</Button>}>Quick reorder</SectionTitle>
          <div style={{ display: 'grid', gap: 10 }}>
            {PRODUCTS.slice(0, 4).map(p => (
              <div key={p.id} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ width: 40, height: 40, borderRadius: 'var(--radius-sm)', background: p.grad, flex: 'none' }} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 13.5, fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.name}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-subtle)' }}>{p.id}</div>
                </div>
                <Button variant="secondary" size="sm" icon="rotate-cw" onClick={() => setView('catalog')}>Reorder</Button>
              </div>
            ))}
          </div>
        </Panel>
      </div>

      <Panel>
        <SectionTitle action={<Button variant="ghost" size="sm" iconRight="arrow-right" onClick={() => setView('orders')}>All orders</Button>}>Recent orders</SectionTitle>
        <OrdersTable rows={ORDERS} />
      </Panel>
    </div>
  );
}

function MiniTimeline({ steps }) {
  return (
    <div style={{ display: 'grid', gap: 0 }}>
      {steps.map((s, i) => (
        <div key={i} style={{ display: 'flex', gap: 14 }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ width: 14, height: 14, borderRadius: '50%', background: s.active ? 'var(--marine-500)' : s.done ? 'var(--success)' : 'var(--ice-200)', border: s.active ? '3px solid var(--marine-100)' : 'none', boxSizing: 'border-box' }} />
            {i < steps.length - 1 && <span style={{ width: 2, flex: 1, minHeight: 22, background: s.done ? 'var(--success)' : 'var(--ice-200)' }} />}
          </div>
          <div style={{ paddingBottom: i < steps.length - 1 ? 14 : 0 }}>
            <div style={{ fontSize: 13.5, fontWeight: s.active ? 600 : 500, color: s.done || s.active ? 'var(--fg)' : 'var(--fg-subtle)' }}>{s.t}</div>
            <div style={{ fontSize: 12, color: 'var(--fg-subtle)' }}>{s.d}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function OrdersTable({ rows, onOpen }) {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr style={{ textAlign: 'left' }}>
          {['Order', 'Date', 'Items', 'Total', 'Status', ''].map((h, i) => (
            <th key={i} style={{ fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--fg-subtle)', padding: '8px 10px', borderBottom: '1px solid var(--border)' }}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map(o => (
          <tr key={o.id}>
            <td style={td}><span style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, color: 'var(--harbor-800)' }}>{o.id}</span></td>
            <td style={td}>{o.date}</td>
            <td style={td}>{o.items}</td>
            <td style={td}><Money value={o.total} size={14} /></td>
            <td style={td}><StatusPill status={o.status} /></td>
            <td style={{ ...td, textAlign: 'right' }}><Button variant="ghost" size="sm" iconRight="chevron-right" onClick={onOpen}>View</Button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
const td = { padding: '13px 10px', fontSize: 14, color: 'var(--fg-muted)', borderBottom: '1px solid var(--ice-100)' };

// ---- Catalog -------------------------------------------------------------
function Catalog({ cart, addToCart, inc, dec }) {
  const [filter, setFilter] = React.useState('All');
  const [q, setQ] = React.useState('');
  const filters = ['All', 'Finfish', 'Shellfish'];
  const list = PRODUCTS.filter(p => (filter === 'All' || p.cat === filter) && (q === '' || p.name.toLowerCase().includes(q.toLowerCase()) || p.id.toLowerCase().includes(q.toLowerCase())));
  return (
    <div style={{ padding: 32 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, marginBottom: 22, flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', gap: 8 }}>
          {filters.map(f => (
            <button key={f} onClick={() => setFilter(f)} style={{ fontFamily: 'var(--font-sans)', fontSize: 13.5, fontWeight: 600, padding: '8px 16px', borderRadius: 'var(--radius-pill)', cursor: 'pointer', border: '1px solid', borderColor: filter === f ? 'var(--harbor-800)' : 'var(--border)', background: filter === f ? 'var(--harbor-800)' : 'var(--paper)', color: filter === f ? '#fff' : 'var(--ink-700)' }}>{f}</button>
          ))}
        </div>
        <div style={{ position: 'relative', width: 280 }}>
          <span style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', display: 'flex' }}><Icon name="search" size={17} color="var(--ink-400)" /></span>
          <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search catalog or SKU…" style={{ width: '100%', boxSizing: 'border-box', fontFamily: 'var(--font-sans)', fontSize: 14, padding: '10px 12px 10px 36px', border: '1px solid var(--border-strong)', borderRadius: 'var(--radius-md)', background: 'var(--paper)' }} />
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }}>
        {list.map(p => (
          <ProductCard key={p.id} p={p} qty={cart[p.id] || 0} onAdd={() => addToCart(p.id)} onInc={() => inc(p.id)} onDec={() => dec(p.id)} />
        ))}
      </div>
      {list.length === 0 && <div style={{ textAlign: 'center', padding: 60, color: 'var(--fg-subtle)' }}>No products match “{q}”.</div>}
    </div>
  );
}

// ---- Orders screen -------------------------------------------------------
function Orders() {
  return <div style={{ padding: 32 }}><Panel><SectionTitle>All orders</SectionTitle><OrdersTable rows={ORDERS} /></Panel></div>;
}

// ---- Shipments screen ----------------------------------------------------
function Shipments() {
  const sh = SHIPMENTS[0];
  const log = [['8:14 AM', '−1.0°C'], ['9:02 AM', '−1.1°C'], ['10:30 AM', '−1.0°C'], ['11:45 AM', '−1.2°C'], ['Now', '−1.1°C']];
  return (
    <div style={{ padding: 32, display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 24, alignItems: 'start' }}>
      <Panel>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--fg-subtle)' }}>{sh.id}</div>
            <h2 style={{ font: 'var(--text-h3)', fontSize: 21, margin: '4px 0 0' }}>Order {sh.order}</h2>
          </div>
          <StatusPill status="transit" />
        </div>
        <div style={{ fontSize: 14, color: 'var(--fg-muted)', marginBottom: 22 }}>Arriving <strong style={{ color: 'var(--fg)' }}>{sh.eta}</strong></div>
        <MiniTimeline steps={sh.steps} />
      </Panel>
      <div style={{ display: 'grid', gap: 24 }}>
        <Panel>
          <SectionTitle>Temperature log</SectionTitle>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <span style={{ width: 40, height: 40, borderRadius: 'var(--radius-md)', background: 'var(--success-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="shield-check" size={22} color="var(--success)" /></span>
            <div>
              <div style={{ fontWeight: 600, fontSize: 14.5 }}>Cold chain intact</div>
              <div style={{ fontSize: 12.5, color: 'var(--fg-subtle)' }}>Held below 0°C the entire route</div>
            </div>
          </div>
          <div style={{ display: 'grid', gap: 2 }}>
            {log.map(([t, temp], i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '9px 12px', borderRadius: 'var(--radius-sm)', background: i % 2 ? 'transparent' : 'var(--ice-50)' }}>
                <span style={{ fontSize: 13.5, color: 'var(--fg-muted)' }}>{t}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13.5, fontWeight: 600, color: 'var(--tide-500)' }}>{temp}</span>
              </div>
            ))}
          </div>
        </Panel>
        <Panel pad={18}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Icon name="map-pin" size={20} color="var(--harbor-700)" />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13.5, fontWeight: 600 }}>Blue Plate Co. — back door</div>
              <div style={{ fontSize: 12.5, color: 'var(--fg-subtle)' }}>118 Wharf St, Boston MA</div>
            </div>
          </div>
        </Panel>
      </div>
    </div>
  );
}

function Placeholder({ icon, title }) {
  return (
    <div style={{ padding: 32 }}>
      <Panel pad={56} style={{ textAlign: 'center' }}>
        <span style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--ice-100)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><Icon name={icon} size={26} color="var(--ink-400)" /></span>
        <h2 style={{ font: 'var(--text-h4)', margin: '16px 0 4px' }}>{title}</h2>
        <p style={{ fontSize: 14, color: 'var(--fg-subtle)', margin: 0 }}>This screen isn't part of the kit demo — it's a placeholder.</p>
      </Panel>
    </div>
  );
}

// ---- Cart drawer ---------------------------------------------------------
function CartDrawer({ open, onClose, cart, inc, dec, onPlace }) {
  const lines = PRODUCTS.filter(p => cart[p.id]);
  const subtotal = lines.reduce((s, p) => s + p.price * cart[p.id], 0);
  return (
    <React.Fragment>
      <div onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'rgba(5,43,56,0.4)', opacity: open ? 1 : 0, pointerEvents: open ? 'auto' : 'none', transition: 'opacity var(--dur)', zIndex: 60 }} />
      <div style={{ position: 'fixed', top: 0, right: 0, bottom: 0, width: 400, maxWidth: '90vw', background: 'var(--paper)', boxShadow: 'var(--shadow-xl)', transform: open ? 'translateX(0)' : 'translateX(100%)', transition: 'transform var(--dur-slow) var(--ease-out)', zIndex: 70, display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 22px', borderBottom: '1px solid var(--border)' }}>
          <h2 style={{ font: 'var(--text-h4)', margin: 0 }}>Your order</h2>
          <button onClick={onClose} style={{ border: 'none', background: 'transparent', cursor: 'pointer', display: 'flex' }}><Icon name="x" size={22} color="var(--ink-500)" /></button>
        </div>
        <div style={{ flex: 1, overflowY: 'auto', padding: 22 }}>
          {lines.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '50px 0', color: 'var(--fg-subtle)' }}>
              <Icon name="shopping-cart" size={32} color="var(--ink-300)" style={{ margin: '0 auto 12px' }} />
              <div style={{ fontSize: 14 }}>No items yet. Browse the catalog to build your first order.</div>
            </div>
          ) : lines.map(p => (
            <div key={p.id} style={{ display: 'flex', gap: 12, paddingBottom: 16, marginBottom: 16, borderBottom: '1px solid var(--ice-100)' }}>
              <span style={{ width: 52, height: 52, borderRadius: 'var(--radius-sm)', background: p.grad, flex: 'none' }} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 14, fontWeight: 600 }}>{p.name}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-subtle)' }}>{p.id}</div>
                <div style={{ marginTop: 7, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, border: '1px solid var(--border-strong)', borderRadius: 'var(--radius-md)', padding: 2 }}>
                    <button onClick={() => dec(p.id)} style={qbtn}><Icon name="minus" size={13} /></button>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 600, minWidth: 16, textAlign: 'center' }}>{cart[p.id]}</span>
                    <button onClick={() => inc(p.id)} style={qbtn}><Icon name="plus" size={13} /></button>
                  </div>
                  <Money value={p.price * cart[p.id]} size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ padding: 22, borderTop: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, fontSize: 14, color: 'var(--fg-muted)' }}><span>Subtotal</span><Money value={subtotal} size={14} /></div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16, fontSize: 13, color: 'var(--fg-subtle)' }}><span>Delivery</span><span>Today, 2–4 PM window</span></div>
          <Button variant="accent" size="lg" iconRight="arrow-right" style={{ width: '100%' }} disabled={lines.length === 0} onClick={onPlace}>Place order · ${subtotal.toFixed(2)}</Button>
        </div>
      </div>
    </React.Fragment>
  );
}

// ---- App -----------------------------------------------------------------
function PortalApp() {
  const [view, setView] = React.useState('dashboard');
  const [cart, setCart] = React.useState({ 'SR-COHO-2LB-FZ': 4, 'SC-U10-DRY-FR': 3 });
  const [cartOpen, setCartOpen] = React.useState(false);
  const [toast, setToast] = React.useState('');
  const cartCount = Object.values(cart).reduce((a, b) => a + b, 0);
  const addToCart = id => { setCart(c => ({ ...c, [id]: 1 })); flash('Added to order'); };
  const inc = id => setCart(c => ({ ...c, [id]: (c[id] || 0) + 1 }));
  const dec = id => setCart(c => { const n = (c[id] || 0) - 1; const nc = { ...c }; if (n <= 0) delete nc[id]; else nc[id] = n; return nc; });
  const flash = msg => { setToast(msg); clearTimeout(window.__pt); window.__pt = setTimeout(() => setToast(''), 2400); };
  const placeOrder = () => { setCart({}); setCartOpen(false); flash('Order placed — arriving today'); setView('shipments'); };

  const titles = {
    dashboard: ['Dashboard', 'Welcome back, Blue Plate Co.'],
    catalog: ['Catalog', `${PRODUCTS.length} products · cold-chain delivered`],
    orders: ['Orders', 'Your order history'],
    shipments: ['Shipments', 'Live cold-chain tracking'],
    invoices: ['Invoices', 'Billing & statements'],
  };
  const [title, sub] = titles[view];

  return (
    <div style={{ display: 'flex', fontFamily: 'var(--font-sans)', color: 'var(--fg)', background: 'var(--bg)', minHeight: '100vh' }}>
      <Sidebar view={view} setView={setView} cartCount={cartCount} />
      <main style={{ flex: 1, minWidth: 0 }}>
        <TopBar title={title} sub={sub} cartCount={cartCount} onCart={() => setCartOpen(true)}
          right={view === 'catalog' ? <Button variant="accent" size="md" icon="shopping-cart" onClick={() => setCartOpen(true)}>Review order</Button> : null} />
        {view === 'dashboard' && <Dashboard setView={setView} />}
        {view === 'catalog' && <Catalog cart={cart} addToCart={addToCart} inc={inc} dec={dec} />}
        {view === 'orders' && <Orders />}
        {view === 'shipments' && <Shipments />}
        {view === 'invoices' && <Placeholder icon="receipt" title="Invoices" />}
      </main>
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} cart={cart} inc={inc} dec={dec} onPlace={placeOrder} />
      <div style={{ position: 'fixed', left: '50%', bottom: toast ? 28 : -80, transform: 'translateX(-50%)', transition: 'bottom var(--dur-slow) var(--ease-out)', background: 'var(--harbor-900)', color: '#fff', padding: '12px 20px', borderRadius: 'var(--radius-pill)', boxShadow: 'var(--shadow-xl)', display: 'flex', alignItems: 'center', gap: 9, zIndex: 100, fontSize: 14 }}>
        <Icon name="check-circle" size={18} color="var(--seafoam-300)" />{toast}
      </div>
    </div>
  );
}

Object.assign(window, { PortalApp });
