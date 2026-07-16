"use client";

import { useState } from "react";

const specs33 = [
  ["Model", "ZVACS16-3K3-25-03"],
  ["Input supply", "1 phase, 230V AC · 50 Hz"],
  ["Rated output", "3.3 kVA / 16A"],
  ["Output", "1 phase, 230V AC · 50 Hz"],
  ["Connector", "Universal AC socket"],
  ["Dimensions", "305 × 381 × 175 mm"],
  ["Connectivity", "Wi-Fi and GSM"],
  ["Protection", "IP54 · 30 mA RCD · overload · over-voltage"],
  ["Environment", "−5°C to +60°C · humidity up to 95%"],
];

const specs7 = [
  ["Model", "ZVACS32-7K0-26-01"],
  ["Input supply", "1 phase, 230V AC · 50 Hz"],
  ["Rated output", "7 kVA / 32A"],
  ["Output", "1 phase, 230V AC · 50 Hz"],
  ["Connector", "CCS Type 2 charging gun"],
  ["Dimensions", "305 × 685 × 175 mm"],
  ["Connectivity", "Wi-Fi and GSM"],
  ["Protection", "IP54 · 30 mA RCD · Level 3 surge protection"],
  ["Environment", "−5°C to +60°C · humidity up to 95%"],
];

const setupSteps = [
  {
    title: "Connect to the charger",
    body: "After the electrical connection is complete and the charger is powered on, open Wi-Fi settings on your phone and join the temporary network named similar to ZVOLTA-144EF9.",
    image: "/setup/open-browser.png",
  },
  {
    title: "Open WiFiManager",
    body: "Your phone may show ‘No internet connection’—this is expected. Open a browser, enter 192.168.4.1, then select Configure WiFi.",
    image: "/setup/wifi-manager.png",
  },
  {
    title: "Choose the site network",
    body: "Select the Wi-Fi network that will provide stable coverage at the charger’s final installation location.",
    image: "/setup/network-list.png",
  },
  {
    title: "Enter Wi-Fi details",
    body: "Enter SSID (the Wi-Fi name) and Password (the Wi-Fi password). Do not edit Device ID, Access Token, MQTT fields, GSM APN, or charger capacity unless instructed by Zvolta.",
    image: "/setup/wifi-details.png",
  },
  {
    title: "Save and verify",
    body: "Press Save. Wait for the charger to reconnect and confirm it appears online on the Zvolta platform before handover.",
    image: "/setup/save-settings.png",
  },
];

function SpecTable({ rows }: { rows: string[][] }) {
  return <dl className="spec-table">{rows.map(([term, detail]) => <div key={term}><dt>{term}</dt><dd>{detail}</dd></div>)}</dl>;
}

export default function Home() {
  const [charger, setCharger] = useState<"3.3" | "7">("3.3");
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSpecs = charger === "3.3" ? specs33 : specs7;

  return (
    <main>
      <section className="hero" id="top">
        <nav className="nav-wrap" aria-label="Main navigation">
          <a className="brand" href="#top" aria-label="Zvolta Charger Manual"><img src="/zvolta-logo.png" alt="Zvolta" /></a>
          <div className={menuOpen ? "nav-links open" : "nav-links"}>
            <a href="#chargers" onClick={() => setMenuOpen(false)}>Chargers</a>
            <a href="#installation" onClick={() => setMenuOpen(false)}>Install</a>
            <a href="#connectivity" onClick={() => setMenuOpen(false)}>Connect</a>
            <a href="#support" onClick={() => setMenuOpen(false)}>Support</a>
          </div>
          <button className="menu-button" aria-label="Open menu" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span>⚡</span> ZVOLTA HOST MANUAL</p>
            <h1>Your charger.<br /><em>Ready to host.</em></h1>
            <p className="hero-text">A practical guide for Zvolta hosts: install your charger, connect it to the network, complete commissioning, and manage it day to day.</p>
            <div className="hero-actions"><a className="primary-button" href="#installation">Start setup <b>→</b></a><a className="text-button" href="#chargers">Find your charger</a></div>
          </div>
          <div className="charger-art" aria-label="Zvolta 7.0 kVA charger">
            <div className="halo" />
            <img className="hero-charger-image" src="/charger-7kva.png" alt="Zvolta 7.0 kVA charger" />
            <div className="art-label"><span>CONNECTED</span><strong>Wi-Fi + GSM</strong></div>
          </div>
        </div>
        <div className="benefit-strip">
          <div><i>◎</i><span><b>Install safely</b>Site readiness guidance</span></div>
          <div><i>◌</i><span><b>Connect reliably</b>Wi-Fi and GSM setup</span></div>
          <div><i>↯</i><span><b>Commission correctly</b>App-based test session</span></div>
          <div><i>⌁</i><span><b>Operate confidently</b>Partner Portal guidance</span></div>
        </div>
      </section>

      <section className="section product-section" id="chargers">
        <p className="section-kicker">01 · CHARGER GUIDE</p>
        <div className="section-heading"><h2>Find your charger.<br /><em>Follow its guide.</em></h2><p>Select the charger installed at your location to review its specifications and site requirements.</p></div>
        <div className="product-switch" role="tablist" aria-label="Charger selection">
          <button className={charger === "3.3" ? "active" : ""} onClick={() => setCharger("3.3")} role="tab">01 · 3.3 kVA</button>
          <button className={charger === "7" ? "active" : ""} onClick={() => setCharger("7")} role="tab">02 · 7.0 kVA</button>
        </div>
        <div className="product-detail">
          <div className="product-visual">
            <span className="product-number">{charger === "3.3" ? "03.3" : "07.0"}</span>
            <img className={charger === "3.3" ? "product-image product-image-33" : "product-image product-image-7"} src={charger === "3.3" ? "/charger-3kva.png" : "/charger-7kva.png"} alt={`Zvolta ${charger === "3.3" ? "3.3" : "7.0"} kVA charger`} />
            <p>{charger === "3.3" ? "Universal AC socket" : "CCS Type 2 charging gun"}</p>
          </div>
          <div className="product-info">
            <p className="eyebrow">{charger === "3.3" ? "ZVACS16-3K3-25-03" : "ZVACS32-7K0-26-01"}</p>
            <h3>Zvolta {charger === "3.3" ? "3.3 kVA" : "7.0 kVA"}<br />Charger</h3>
            <p className="product-description">{charger === "3.3" ? "Compact, universal charging for electric two- and three-wheelers and compatible EVs at homes, shops and smaller workplaces." : "Higher-capacity charging for electric cars, workplaces, apartments and destination-charging locations."}</p>
            <SpecTable rows={activeSpecs} />
          </div>
        </div>
        {charger === "7" && <aside className="earth-warning"><span>!</span><div><b>Verified earthing is mandatory.</b><p>The 7.0 kVA charger must not be installed, commissioned or used without a properly installed and verified earth/ground connection at the location.</p></div></aside>}
      </section>

      <section className="section dark-section" id="installation">
        <p className="section-kicker">02 · INSTALLATION</p>
        <div className="section-heading"><h2>Start with a<br /><em>safe site.</em></h2><p>A qualified electrician or Zvolta-approved installation partner must complete all electrical work.</p></div>
        <div className="site-grid">
          <article><span>01</span><h3>Check the location</h3><p>Use a strong, dry, accessible mounting surface. Keep clear of standing water, likely impact and trip hazards.</p></article>
          <article><span>02</span><h3>Prepare power</h3><p>Provide a dedicated single-phase 230V AC circuit rated for the selected charger capacity.</p></article>
          <article><span>03</span><h3>Connect correctly</h3><p>Red: Live. Blue: Neutral. Yellow/Green: Earth/Ground. Isolate supply before all electrical work.</p></article>
          <article><span>04</span><h3>Check coverage</h3><p>Confirm reliable Wi-Fi coverage or GSM signal at the charger’s exact final position.</p></article>
        </div>
        <div className="installation-note"><div><p className="eyebrow">7.0 kVA SITE REQUIREMENT</p><h3>Earthing is not optional.</h3></div><p>Before installing the 7.0 kVA charger, verify earth continuity, correct termination and suitability of the dedicated 32A circuit. Do not proceed if earthing cannot be verified.</p></div>
      </section>

      <section className="section" id="connectivity">
        <p className="section-kicker">03 · WI-FI COMMISSIONING</p>
        <div className="section-heading"><h2>Connect the charger<br />to <em>the network.</em></h2><p>Use this installer-only process after completing the electrical connection and powering on the charger.</p></div>
        <aside className="info-callout"><b>Before you start</b><p>Connect your phone to the charger’s temporary ZVOLTA network. A “No internet connection” message is normal during setup.</p></aside>
        <div className="steps-grid">{setupSteps.map((step, index) => <article className="setup-step" key={step.title}><div className="step-count">0{index + 1}</div><div className="step-image"><img src={step.image} alt={step.title} /></div><h3>{step.title}</h3><p>{step.body}</p></article>)}</div>
        <div className="commissioning-panel"><div><p className="eyebrow">FINAL COMMISSIONING</p><h3>Restart. Scan. Test.</h3></div><ol><li><b>Restart:</b> switch the internal MCB inside the charging box off, wait a few seconds, then switch it back on.</li><li><b>Wait for the QR:</b> once the QR code displays, the charger is ready for commissioning.</li><li><b>Run a live test:</b> use the Zvolta Customer App to scan the QR, start a session, stop it, and confirm the record appears on the platform.</li><li><b>GSM setup:</b> when using GSM, complete the same restart and test-session process once the QR code displays.</li></ol></div>
      </section>

      <section className="section app-section">
        <p className="section-kicker">04 · DAILY OPERATIONS</p>
        <div className="section-heading"><h2>Simple for drivers.<br /><em>Clear for partners.</em></h2></div>
        <div className="operations-grid"><article><p className="eyebrow">ZVOLTA CUSTOMER APP</p><h3>Start a charging session</h3><ol><li>Sign in using your registered mobile number.</li><li>Connect the compatible cable or charging gun.</li><li>Scan the charger QR code or select the charger in the app.</li><li>Tap Start Charging and monitor the session.</li><li>Tap Stop Charging before disconnecting.</li></ol></article><article><p className="eyebrow">ZVOLTA PARTNER PORTAL</p><h3>Keep the site running</h3><ul><li>View live charger status</li><li>Monitor online and offline chargers</li><li>Review sessions, consumption and revenue</li><li>Identify chargers that need attention</li><li>Track transaction history</li></ul></article></div>
      </section>

      <section className="section support-section" id="support">
        <p className="section-kicker">05 · SUPPORT</p>
        <div className="support-layout"><div><h2>Keep charging<br /><em>with confidence.</em></h2><p>Do not use a charger that has visible damage, water ingress, a damaged cable, loose connections or an unresolved fault message.</p><a className="primary-button" href="https://wa.me/923104446529">Contact support <b>→</b></a></div><div className="fault-list"><div><b>Charger offline?</b><span>Check power, Wi-Fi or GSM signal, then allow time to reconnect.</span></div><div><b>Charging stops?</b><span>Check vehicle connection, power supply and charger status before restarting.</span></div><div><b>Connector will not fit?</b><span>Do not force it. Confirm vehicle and cable compatibility.</span></div><div><b>Visible damage or fault?</b><span>Stop use immediately and contact Zvolta support.</span></div></div></div>
      </section>

      <footer><a className="brand" href="#top" aria-label="Zvolta"><img src="/zvolta-logo.png" alt="Zvolta" /></a><div><b>Zvolta Charger Manual</b><p>Installation, commissioning and support guidance.</p></div><div className="footer-contact"><a href="https://wa.me/923104446529">+92 310 4446529</a><a href="mailto:support@zvolta.com">support@zvolta.com</a></div></footer>
    </main>
  );
}
