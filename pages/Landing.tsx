<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>FreightIntel — FMCSA Data Intelligence</title>
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />
<style>
* { box-sizing: border-box; margin: 0; padding: 0; }
:root {
  --navy: #0a1628;
  --navy2: #0f1f3d;
  --blue: #1a56db;
  --blue2: #3b82f6;
  --cyan: #06b6d4;
  --orange: #f59e0b;
  --muted: #8899bb;
  --card-bg: rgba(255,255,255,0.04);
  --card-border: rgba(255,255,255,0.1);
}
html { scroll-behavior: smooth; }
body {
  font-family: 'DM Sans', sans-serif;
  background: var(--navy);
  color: #fff;
  overflow-x: hidden;
  line-height: 1.6;
}
h1,h2,h3,h4 { font-family: 'Syne', sans-serif; }

/* NAV */
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 3rem;
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(10,22,40,0.88);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(255,255,255,0.06);
}
.logo {
  font-family: 'Syne', sans-serif;
  font-weight: 800;
  font-size: 1.3rem;
  letter-spacing: -0.02em;
  display: flex;
  align-items: center;
  gap: 8px;
}
.logo-icon {
  width: 32px; height: 32px;
  background: linear-gradient(135deg, var(--blue), var(--cyan));
  border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
  font-size: 16px;
}
.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
}
.nav-links a {
  color: var(--muted);
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  transition: color 0.2s;
}
.nav-links a:hover { color: #fff; }
.nav-cta { display: flex; gap: .75rem; align-items: center; }
.btn-ghost {
  padding: .5rem 1.25rem;
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 8px;
  color: #fff;
  font-size: .875rem;
  font-weight: 500;
  cursor: pointer;
  background: transparent;
  transition: all 0.2s;
  font-family: 'DM Sans', sans-serif;
}
.btn-ghost:hover { background: rgba(255,255,255,0.08); }
.btn-primary {
  padding: .5rem 1.25rem;
  background: var(--blue);
  border: 1px solid var(--blue2);
  border-radius: 8px;
  color: #fff;
  font-size: .875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  font-family: 'DM Sans', sans-serif;
}
.btn-primary:hover { background: var(--blue2); transform: translateY(-1px); }

/* HERO */
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 5rem 2rem 4rem;
  position: relative;
  overflow: hidden;
}
.grid-floor {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 55%;
  perspective: 800px;
  overflow: hidden;
  pointer-events: none;
}
.grid-floor-inner {
  position: absolute;
  bottom: 0;
  left: -50%;
  right: -50%;
  height: 200%;
  background-image:
    linear-gradient(rgba(26,86,219,0.2) 1px, transparent 1px),
    linear-gradient(90deg, rgba(26,86,219,0.2) 1px, transparent 1px);
  background-size: 60px 60px;
  transform: rotateX(65deg);
  transform-origin: bottom center;
}
.grid-fade {
  position: absolute;
  bottom: 0; left: 0; right: 0; height: 100%;
  background: linear-gradient(to top, var(--navy) 0%, transparent 60%);
}
.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
}
.orb-1 { width:500px;height:500px;background:rgba(26,86,219,0.25);top:-120px;left:-100px;animation:floatOrb 8s ease-in-out infinite; }
.orb-2 { width:350px;height:350px;background:rgba(6,182,212,0.2);top:20%;right:-60px;animation:floatOrb 10s ease-in-out infinite reverse; }
.orb-3 { width:280px;height:280px;background:rgba(245,158,11,0.1);bottom:30%;left:35%;animation:floatOrb 7s ease-in-out infinite; }
@keyframes floatOrb {
  0%,100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-30px) scale(1.05); }
}
.badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(26,86,219,0.2);
  border: 1px solid rgba(59,130,246,0.4);
  border-radius: 999px;
  padding: 6px 16px;
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--blue2);
  margin-bottom: 2rem;
  letter-spacing: 0.02em;
}
.badge-dot { width:6px;height:6px;border-radius:50%;background:var(--cyan);animation:pulse 2s infinite; }
@keyframes pulse { 0%,100%{opacity:1;transform:scale(1)}50%{opacity:.5;transform:scale(.8)} }
.hero h1 {
  font-size: clamp(2.8rem, 6vw, 5rem);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.04em;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
  max-width: 800px;
}
.hero h1 span {
  background: linear-gradient(135deg, var(--blue2), var(--cyan));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.hero p {
  font-size: 1.125rem;
  color: var(--muted);
  max-width: 520px;
  margin: 0 auto 2.5rem;
  position: relative;
  z-index: 1;
  line-height: 1.7;
}
.hero-cta {
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  margin-bottom: 5rem;
}
.btn-lg {
  padding: .875rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 12px;
  cursor: pointer;
  font-family: 'DM Sans', sans-serif;
  transition: all 0.25s;
}
.btn-lg.primary {
  background: linear-gradient(135deg, var(--blue), var(--blue2));
  border: 1px solid var(--blue2);
  color: #fff;
  box-shadow: 0 8px 32px rgba(26,86,219,0.35);
}
.btn-lg.primary:hover { transform: translateY(-2px); box-shadow: 0 12px 40px rgba(26,86,219,.5); }
.btn-lg.ghost {
  background: transparent;
  border: 1px solid rgba(255,255,255,0.15);
  color: #fff;
}
.btn-lg.ghost:hover { background: rgba(255,255,255,0.06); }

/* 3D DASHBOARD MOCKUP */
.dashboard-3d-wrap {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 820px;
  perspective: 1200px;
  margin: 0 auto;
}
.dashboard-3d {
  transform: rotateX(12deg) rotateY(-2deg);
  transform-style: preserve-3d;
  transition: transform 0.4s ease;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.12);
  box-shadow: 0 40px 80px rgba(0,0,0,.6), 0 0 0 1px rgba(255,255,255,.05), inset 0 1px 0 rgba(255,255,255,.1);
}
.dashboard-3d:hover { transform: rotateX(4deg) rotateY(0deg); }
.db-topbar {
  background: rgba(15,31,61,0.95);
  padding: 12px 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  border-bottom: 1px solid rgba(255,255,255,0.08);
}
.db-dot { width:10px;height:10px;border-radius:50%; }
.db-title { margin-left:12px;font-size:.8rem;color:var(--muted);font-weight:500; }
.db-body {
  background: rgba(10,22,40,0.97);
  display: grid;
  grid-template-columns: 180px 1fr;
  min-height: 340px;
}
.db-sidebar { border-right: 1px solid rgba(255,255,255,0.06); padding: 20px 0; }
.db-sidebar-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 20px;
  font-size: .78rem;
  color: var(--muted);
  cursor: pointer;
}
.db-sidebar-item.active {
  color: #fff;
  background: rgba(26,86,219,0.15);
  border-left: 2px solid var(--blue2);
}
.db-main { padding: 20px; }
.db-stats { display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:16px; }
.db-stat {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 10px;
  padding: 14px;
}
.db-stat-label { font-size:.7rem;color:var(--muted);margin-bottom:6px; }
.db-stat-val { font-size:1.4rem;font-weight:700;font-family:'Syne',sans-serif; }
.db-stat-val.blue { color:var(--blue2); }
.db-stat-val.cyan { color:var(--cyan); }
.db-stat-val.orange { color:var(--orange); }
.db-stat-change { font-size:.68rem;color:#22c55e;margin-top:2px; }
.db-table-header {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 8px;
  padding: 8px 12px;
  font-size: .68rem;
  color: var(--muted);
  font-weight: 600;
  letter-spacing: .05em;
  text-transform: uppercase;
  border-bottom: 1px solid rgba(255,255,255,0.06);
}
.db-row {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 8px;
  padding: 9px 12px;
  font-size: .75rem;
  border-bottom: 1px solid rgba(255,255,255,0.04);
  align-items: center;
}
.db-row:hover { background: rgba(255,255,255,0.025); }
.status-pill { display:inline-block;padding:2px 8px;border-radius:999px;font-size:.65rem;font-weight:600; }
.status-active { background:rgba(34,197,94,0.15);color:#22c55e; }
.status-expired { background:rgba(239,68,68,0.15);color:#f87171; }
.status-pending { background:rgba(245,158,11,0.15);color:var(--orange); }

/* SECTIONS */
section { padding: 6rem 3rem; position: relative; }
.section-label {
  text-align: center;
  font-size: .78rem;
  font-weight: 600;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: var(--blue2);
  margin-bottom: 1rem;
}
.section-title {
  text-align: center;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  margin-bottom: 1rem;
}
.section-sub {
  text-align: center;
  color: var(--muted);
  font-size: 1rem;
  max-width: 500px;
  margin: 0 auto 4rem;
  line-height: 1.7;
}

/* STATS STRIP */
.stats-strip {
  background: rgba(255,255,255,0.03);
  border-top: 1px solid rgba(255,255,255,0.07);
  border-bottom: 1px solid rgba(255,255,255,0.07);
  padding: 2.5rem 3rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  text-align: center;
  gap: 2rem;
}
.stat-num { font-family:'Syne',sans-serif;font-size:2.4rem;font-weight:800;letter-spacing:-0.04em; }
.stat-num span { color: var(--blue2); }
.stat-desc { font-size:.85rem;color:var(--muted);margin-top:4px; }

/* FEATURES 3D */
.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  max-width: 1100px;
  margin: 0 auto;
}
.feat-card {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 16px;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
  cursor: default;
}
.feat-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; height: 1px;
  background: linear-gradient(90deg, transparent, rgba(59,130,246,0.5), transparent);
}
.feat-card:hover {
  transform: perspective(800px) rotateX(-4deg) translateY(-6px);
  border-color: rgba(59,130,246,0.3);
  background: rgba(26,86,219,0.07);
  box-shadow: 0 24px 48px rgba(0,0,0,.3), 0 0 0 1px rgba(59,130,246,.2);
}
.feat-card.tall { grid-row: span 2; }
.feat-icon {
  width: 48px; height: 48px;
  border-radius: 12px;
  display: flex; align-items: center; justify-content: center;
  font-size: 22px;
  margin-bottom: 1.25rem;
}
.feat-icon.blue { background: rgba(26,86,219,0.2); }
.feat-icon.cyan { background: rgba(6,182,212,0.15); }
.feat-icon.orange { background: rgba(245,158,11,0.15); }
.feat-icon.green { background: rgba(34,197,94,0.15); }
.feat-icon.purple { background: rgba(139,92,246,0.15); }
.feat-icon.pink { background: rgba(236,72,153,0.15); }
.feat-card h3 { font-size:1.05rem;font-weight:700;margin-bottom:.625rem;letter-spacing:-0.02em; }
.feat-card p { font-size:.875rem;color:var(--muted);line-height:1.6; }
.feat-tag {
  display: inline-block;
  margin-top: 1rem;
  padding: 4px 10px;
  background: rgba(26,86,219,0.15);
  border: 1px solid rgba(59,130,246,0.2);
  border-radius: 6px;
  font-size: .72rem;
  color: var(--blue2);
  font-weight: 600;
  letter-spacing: .03em;
}
.mini-chart { margin-top:1.5rem;height:80px;display:flex;align-items:flex-end;gap:6px; }
.bar {
  flex: 1;
  border-radius: 4px 4px 0 0;
  background: linear-gradient(to top, var(--blue), var(--blue2));
  opacity: .7;
  transition: opacity .2s;
}
.bar:hover { opacity: 1; }

/* HOW IT WORKS */
.how-section { background: rgba(255,255,255,0.015); }
.how-steps {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
}
.how-steps::before {
  content: '';
  position: absolute;
  top: 52px;
  left: 12.5%; right: 12.5%;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--blue2), var(--cyan), transparent);
}
.step-card { text-align: center; padding: 2rem 1.25rem; position: relative; }
.step-num {
  width: 52px; height: 52px;
  border-radius: 16px;
  background: rgba(26,86,219,0.15);
  border: 1px solid rgba(59,130,246,0.3);
  display: flex; align-items: center; justify-content: center;
  font-family: 'Syne', sans-serif;
  font-weight: 800;
  font-size: 1.2rem;
  margin: 0 auto 1.5rem;
  position: relative;
  z-index: 1;
  transition: all 0.3s;
}
.step-card:hover .step-num {
  background: rgba(26,86,219,0.3);
  transform: scale(1.1) perspective(400px) rotateY(15deg);
}
.step-card h4 { font-size:.95rem;font-weight:700;margin-bottom:.5rem; }
.step-card p { font-size:.82rem;color:var(--muted);line-height:1.6; }

/* PRICING */
.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  max-width: 960px;
  margin: 0 auto;
  perspective: 1000px;
}
.plan-card {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 20px;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.plan-card:hover {
  transform: translateY(-8px) rotateX(-3deg) rotateY(2deg);
  box-shadow: 0 32px 64px rgba(0,0,0,.4);
}
.plan-card.featured {
  border-color: rgba(59,130,246,0.5);
  background: rgba(26,86,219,0.1);
  transform: scale(1.03);
}
.plan-card.featured:hover {
  transform: scale(1.03) translateY(-8px) rotateX(-3deg);
  box-shadow: 0 32px 64px rgba(26,86,219,0.35);
}
.popular-badge {
  position: absolute;
  top: 16px; right: 16px;
  background: linear-gradient(135deg, var(--blue), var(--cyan));
  color: #fff;
  font-size: .68rem;
  font-weight: 700;
  letter-spacing: .06em;
  text-transform: uppercase;
  padding: 4px 10px;
  border-radius: 999px;
}
.plan-name { font-family:'Syne',sans-serif;font-size:1.1rem;font-weight:700;margin-bottom:.25rem; }
.plan-desc { font-size:.82rem;color:var(--muted);margin-bottom:1.5rem; }
.plan-price { display:flex;align-items:baseline;gap:4px;margin-bottom:.25rem; }
.plan-price .dollar { font-size:1.2rem;color:var(--muted);font-weight:500; }
.plan-price .amount { font-family:'Syne',sans-serif;font-size:2.8rem;font-weight:800;letter-spacing:-0.05em; }
.plan-price .period { font-size:.82rem;color:var(--muted); }
.plan-limit { font-size:.8rem;color:var(--muted);margin-bottom:1.5rem; }
.plan-limit span { color:#fff;font-weight:600; }
.plan-features { list-style:none;margin-bottom:2rem; }
.plan-features li { display:flex;align-items:center;gap:8px;font-size:.85rem;color:var(--muted);padding:5px 0; }
.plan-features li .check { color:#22c55e;font-size:14px; }
.plan-features li .cross { color:rgba(255,255,255,0.2);font-size:14px; }
.plan-btn {
  width:100%;
  padding:.8rem;
  border-radius:10px;
  font-size:.9rem;
  font-weight:600;
  cursor:pointer;
  font-family:'DM Sans',sans-serif;
  transition: all .25s;
}
.plan-btn.outline { background:transparent;border:1px solid rgba(255,255,255,0.15);color:#fff; }
.plan-btn.outline:hover { background:rgba(255,255,255,0.06); }
.plan-btn.solid {
  background:linear-gradient(135deg,var(--blue),var(--blue2));
  border:none;color:#fff;
  box-shadow:0 4px 16px rgba(26,86,219,.4);
}
.plan-btn.solid:hover { transform:translateY(-1px);box-shadow:0 8px 24px rgba(26,86,219,.5); }

/* CTA */
.cta-section { text-align:center;padding:7rem 3rem;position:relative;overflow:hidden; }
.cta-box {
  max-width: 700px;
  margin: 0 auto;
  background: rgba(255,255,255,0.035);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 24px;
  padding: 4rem;
  position: relative;
  overflow: hidden;
}
.cta-box::before {
  content: '';
  position: absolute;
  top: -1px; left: 15%; right: 15%; height: 2px;
  background: linear-gradient(90deg, transparent, var(--blue2), var(--cyan), transparent);
}
.cta-box h2 { font-size:clamp(1.8rem,4vw,2.5rem);font-weight:800;letter-spacing:-0.04em;margin-bottom:1rem; }
.cta-box p { color:var(--muted);margin-bottom:2rem;line-height:1.7; }
.cta-btns { display:flex;gap:1rem;justify-content:center;flex-wrap:wrap; }

/* FOOTER */
footer {
  border-top: 1px solid rgba(255,255,255,0.07);
  padding: 2.5rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: .82rem;
  color: var(--muted);
}
.footer-links { display:flex;gap:1.5rem; }
.footer-links a { color:var(--muted);text-decoration:none; }
.footer-links a:hover { color:#fff; }

/* ANIMATIONS */
.reveal { opacity:0;transform:translateY(30px);transition:all .6s cubic-bezier(0.16,1,0.3,1); }
.reveal.in { opacity:1;transform:translateY(0); }
</style>
</head>
<body>

<!-- NAV -->
<nav>
  <div class="logo">
    <div class="logo-icon">🚛</div>
    FreightIntel
  </div>
  <ul class="nav-links">
    <li><a href="#features">Features</a></li>
    <li><a href="#how">How it works</a></li>
    <li><a href="#pricing">Pricing</a></li>
  </ul>
  <div class="nav-cta">
    <button class="btn-ghost">Sign in</button>
    <button class="btn-primary">Get started</button>
  </div>
</nav>

<!-- HERO -->
<section class="hero">
  <div class="orb orb-1"></div>
  <div class="orb orb-2"></div>
  <div class="orb orb-3"></div>
  <div class="grid-floor">
    <div class="grid-floor-inner"></div>
    <div class="grid-fade"></div>
  </div>

  <div class="badge"><span class="badge-dot"></span> FMCSA Data Intelligence Platform</div>
  <h1>Unlock every<br><span>carrier's story</span><br>in seconds.</h1>
  <p>Real-time FMCSA data scraping, carrier search, renewal tracking, and insurance intelligence — all in one powerful platform.</p>
  <div class="hero-cta">
    <button class="btn-lg primary">Start free trial →</button>
    <button class="btn-lg ghost">View demo</button>
  </div>

  <!-- 3D DASHBOARD MOCKUP -->
  <div class="dashboard-3d-wrap reveal">
    <div class="dashboard-3d" id="db3d">
      <div class="db-topbar">
        <div class="db-dot" style="background:#ff5f57"></div>
        <div class="db-dot" style="background:#febc2e"></div>
        <div class="db-dot" style="background:#28c840"></div>
        <span class="db-title">FreightIntel — Carrier Dashboard</span>
      </div>
      <div class="db-body">
        <div class="db-sidebar">
          <div class="db-sidebar-item active">📊 Dashboard</div>
          <div class="db-sidebar-item">🔍 Carrier Search</div>
          <div class="db-sidebar-item">⚙️ Scraper</div>
          <div class="db-sidebar-item">📋 Renewals</div>
          <div class="db-sidebar-item">🚫 Cancellations</div>
          <div class="db-sidebar-item">💳 Subscription</div>
          <div class="db-sidebar-item">🏗️ New Venture</div>
        </div>
        <div class="db-main">
          <div class="db-stats">
            <div class="db-stat">
              <div class="db-stat-label">Carriers Scraped</div>
              <div class="db-stat-val blue">48,293</div>
              <div class="db-stat-change">↑ 12.4% this week</div>
            </div>
            <div class="db-stat">
              <div class="db-stat-label">Active Policies</div>
              <div class="db-stat-val cyan">7,841</div>
              <div class="db-stat-change">↑ 3.1% this week</div>
            </div>
            <div class="db-stat">
              <div class="db-stat-label">Renewals Due</div>
              <div class="db-stat-val orange">329</div>
              <div class="db-stat-change" style="color:#f87171">↑ 18 today</div>
            </div>
          </div>
          <div class="db-table-header">
            <span>Carrier Name</span><span>DOT #</span><span>State</span><span>Status</span>
          </div>
          <div class="db-row"><span>Apex Logistics LLC</span><span>3921847</span><span>TX</span><span class="status-pill status-active">Active</span></div>
          <div class="db-row"><span>BlueStar Freight Inc</span><span>2740193</span><span>CA</span><span class="status-pill status-expired">Expired</span></div>
          <div class="db-row"><span>Meridian Transport Co</span><span>4018273</span><span>FL</span><span class="status-pill status-pending">Pending</span></div>
          <div class="db-row"><span>Ironclad Hauling LLC</span><span>3365012</span><span>OH</span><span class="status-pill status-active">Active</span></div>
          <div class="db-row"><span>Pacific Rim Carriers</span><span>2981736</span><span>WA</span><span class="status-pill status-active">Active</span></div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- STATS STRIP -->
<div class="stats-strip reveal">
  <div><div class="stat-num">2<span>M+</span></div><div class="stat-desc">Carriers in database</div></div>
  <div><div class="stat-num">99<span>.7%</span></div><div class="stat-desc">Data accuracy rate</div></div>
  <div><div class="stat-num">50<span>k+</span></div><div class="stat-desc">Daily scrapes processed</div></div>
  <div><div class="stat-num">340<span>+</span></div><div class="stat-desc">Insurance agencies using FreightIntel</div></div>
</div>

<!-- FEATURES -->
<section id="features">
  <div class="section-label">Features</div>
  <h2 class="section-title">Everything you need to dominate<br>freight intelligence</h2>
  <p class="section-sub">From raw FMCSA data to actionable carrier insights — built for insurance pros, brokers, and analysts.</p>

  <div class="features-grid reveal">
    <div class="feat-card tall">
      <div class="feat-icon blue">🔍</div>
      <h3>Advanced Carrier Search</h3>
      <p>Filter across 2M+ FMCSA carriers by state, DOT number, authority type, safety rating, and more. Find your targets in seconds.</p>
      <div class="mini-chart">
        <div class="bar" style="height:40%"></div>
        <div class="bar" style="height:65%"></div>
        <div class="bar" style="height:50%"></div>
        <div class="bar" style="height:80%"></div>
        <div class="bar" style="height:70%"></div>
        <div class="bar" style="height:95%"></div>
        <div class="bar" style="height:85%"></div>
        <div class="bar" style="height:100%"></div>
      </div>
      <div class="feat-tag">Carrier Search</div>
    </div>
    <div class="feat-card">
      <div class="feat-icon cyan">⚙️</div>
      <h3>Automated Scraper</h3>
      <p>Set daily scraping limits and extract thousands of fresh FMCSA records automatically based on your plan tier.</p>
      <div class="feat-tag">Scraper Engine</div>
    </div>
    <div class="feat-card">
      <div class="feat-icon orange">📋</div>
      <h3>Renewal Policy Tracker</h3>
      <p>Never miss an insurance renewal. Track expiry dates, send alerts, and stay ahead of your entire book of business.</p>
      <div class="feat-tag">Renewals</div>
    </div>
    <div class="feat-card">
      <div class="feat-icon green">🚫</div>
      <h3>Mid-Term Cancellations</h3>
      <p>Identify carriers with mid-term cancellations and reach out at exactly the right moment to win new business.</p>
      <div class="feat-tag">Cancellations</div>
    </div>
    <div class="feat-card">
      <div class="feat-icon purple">🏗️</div>
      <h3>New Venture Intelligence</h3>
      <p>Spot freshly registered carriers before your competitors. First-mover advantage for every new authority issued.</p>
      <div class="feat-tag">New Ventures</div>
    </div>
    <div class="feat-card">
      <div class="feat-icon pink">📝</div>
      <h3>FMCSA Register</h3>
      <p>Direct access to the official FMCSA register with enhanced filtering, export, and annotation capabilities built in.</p>
      <div class="feat-tag">FMCSA Register</div>
    </div>
  </div>
</section>

<!-- HOW IT WORKS -->
<section id="how" class="how-section">
  <div class="section-label">How it works</div>
  <h2 class="section-title">From FMCSA data to closed<br>deals in 4 steps</h2>
  <p class="section-sub">A seamless workflow built for speed and precision.</p>

  <div class="how-steps reveal">
    <div class="step-card">
      <div class="step-num">01</div>
      <h4>Sign up &amp; choose a plan</h4>
      <p>Create your account and select the daily extraction limit that fits your workflow.</p>
    </div>
    <div class="step-card">
      <div class="step-num">02</div>
      <h4>Set your scraper filters</h4>
      <p>Choose state, authority type, carrier age, or any combination of FMCSA fields.</p>
    </div>
    <div class="step-card">
      <div class="step-num">03</div>
      <h4>Extract &amp; enrich data</h4>
      <p>Our engine pulls fresh records daily and enriches them with insurance signals.</p>
    </div>
    <div class="step-card">
      <div class="step-num">04</div>
      <h4>Reach out &amp; convert</h4>
      <p>Export leads, track renewals, and turn FMCSA data into revenue opportunities.</p>
    </div>
  </div>
</section>

<!-- PRICING -->
<section id="pricing">
  <div class="section-label">Pricing</div>
  <h2 class="section-title">Simple, usage-based pricing</h2>
  <p class="section-sub">Pay for what you extract. Upgrade or downgrade any time.</p>

  <div class="pricing-grid reveal">
    <div class="plan-card">
      <div class="plan-name">Starter</div>
      <div class="plan-desc">For individual agents getting started</div>
      <div class="plan-price"><span class="dollar">$</span><span class="amount">49</span><span class="period">/mo</span></div>
      <div class="plan-limit">Up to <span>500</span> records/day</div>
      <ul class="plan-features">
        <li><span class="check">✓</span> Carrier Search</li>
        <li><span class="check">✓</span> Basic Scraper</li>
        <li><span class="check">✓</span> Renewal Tracker</li>
        <li><span class="cross">✗</span> Cancellation Alerts</li>
        <li><span class="cross">✗</span> New Venture Feed</li>
        <li><span class="cross">✗</span> Admin Panel</li>
      </ul>
      <button class="plan-btn outline">Get started</button>
    </div>

    <div class="plan-card featured">
      <div class="popular-badge">Most popular</div>
      <div class="plan-name">Pro</div>
      <div class="plan-desc">For growing agencies and power users</div>
      <div class="plan-price"><span class="dollar">$</span><span class="amount">149</span><span class="period">/mo</span></div>
      <div class="plan-limit">Up to <span>5,000</span> records/day</div>
      <ul class="plan-features">
        <li><span class="check">✓</span> Carrier Search</li>
        <li><span class="check">✓</span> Advanced Scraper</li>
        <li><span class="check">✓</span> Renewal Tracker</li>
        <li><span class="check">✓</span> Cancellation Alerts</li>
        <li><span class="check">✓</span> New Venture Feed</li>
        <li><span class="cross">✗</span> Admin Panel</li>
      </ul>
      <button class="plan-btn solid">Get started →</button>
    </div>

    <div class="plan-card">
      <div class="plan-name">Enterprise</div>
      <div class="plan-desc">For large teams with custom needs</div>
      <div class="plan-price"><span class="dollar">$</span><span class="amount">399</span><span class="period">/mo</span></div>
      <div class="plan-limit">Up to <span>50,000</span> records/day</div>
      <ul class="plan-features">
        <li><span class="check">✓</span> Carrier Search</li>
        <li><span class="check">✓</span> Unlimited Scraper</li>
        <li><span class="check">✓</span> Renewal Tracker</li>
        <li><span class="check">✓</span> Cancellation Alerts</li>
        <li><span class="check">✓</span> New Venture Feed</li>
        <li><span class="check">✓</span> Admin Panel</li>
      </ul>
      <button class="plan-btn outline">Contact sales</button>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="cta-section">
  <div class="orb" style="width:400px;height:400px;background:rgba(26,86,219,0.15);top:-100px;left:50%;transform:translateX(-50%);filter:blur(100px);"></div>
  <div class="cta-box reveal">
    <h2>The freight market moves fast.<br>You should too.</h2>
    <p>Join hundreds of insurance agencies and brokers using FreightIntel to find, track, and convert FMCSA carrier leads.</p>
    <div class="cta-btns">
      <button class="btn-lg primary">Start free trial →</button>
      <button class="btn-lg ghost">Explore features</button>
    </div>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <div class="logo" style="font-size:1rem">
    <div class="logo-icon" style="width:24px;height:24px;font-size:12px">🚛</div>
    FreightIntel
  </div>
  <div class="footer-links">
    <a href="#">Privacy</a>
    <a href="#">Terms</a>
    <a href="#">Support</a>
    <a href="#">FMCSA</a>
  </div>
  <span>© 2026 FreightIntel. All rights reserved.</span>
</footer>

<script>
  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('in');
    });
  }, { threshold: 0.1 });
  reveals.forEach(r => io.observe(r));

  // Mouse parallax on dashboard
  const db = document.getElementById('db3d');
  document.addEventListener('mousemove', e => {
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    const dx = (e.clientX - cx) / cx;
    const dy = (e.clientY - cy) / cy;
    db.style.transform = `rotateX(${12 - dy * 4}deg) rotateY(${-2 + dx * 3}deg)`;
    db.style.transition = 'transform 0.15s ease-out';
  });
</script>
</body>
</html>
