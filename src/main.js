import './style.css'

document.querySelector('#app').innerHTML = `
  <header>
    <nav>
      <div class="brand">
        <span class="brand-icon">⬡</span>
        <span class="brand-name">Nihadi Technologies</span>
      </div>
      <ul class="nav-links">
        <li><a href="#products">Products</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>

  <section id="hero">
    <div class="hero-content">
      <p class="tagline">Enterprise Software Solutions</p>
      <h1>Build smarter.<br>Ship faster.</h1>
      <p class="hero-sub">Nihadi Technologies LLC crafts developer tools and enterprise software that streamline complex workflows.</p>
      <a href="#products" class="btn-primary">Explore Products</a>
    </div>
  </section>

  <section id="products">
    <div class="section-inner">
      <h2 class="section-title">Our Products</h2>
      <p class="section-sub">Purpose-built tools for developers and operations teams.</p>
      <div class="product-grid">
        <div class="product-card featured">
          <div class="product-badge">Available Now</div>
          <div class="product-icon">
            <svg viewBox="0 0 100 100" width="48" height="48" aria-hidden="true">
              <rect x="10" y="10" width="80" height="80" rx="12" fill="currentColor" opacity="0.15"/>
              <text x="50" y="68" font-size="52" text-anchor="middle" fill="currentColor">⌨</text>
            </svg>
          </div>
          <h3>Autosys Scheduler</h3>
          <p class="product-type">VS Code Extension</p>
          <p class="product-desc">Bring Autosys job scheduling directly into VS Code. Define, edit, and manage JIL files with syntax highlighting, validation, and job dependency visualization — without leaving your editor.</p>
          <div class="savings-banner">
            <span class="savings-number">80%</span>
            <span class="savings-text">faster job creation — measured across real-world Autosys workflows</span>
          </div>
          <div class="savings-calc">
            <h4 class="calc-title">Calculate Your Monthly Savings</h4>
            <div class="calc-inputs">
              <label>
                <span>Developer hourly rate (USD)</span>
                <div class="input-wrap"><span class="input-prefix">$</span><input type="number" id="hourly-rate" value="75" min="1" max="500" /></div>
              </label>
              <label>
                <span>Hours/month spent on job creation</span>
                <div class="input-wrap"><input type="number" id="hours-month" value="20" min="1" max="500" /><span class="input-suffix">hrs</span></div>
              </label>
            </div>
            <div class="calc-result">
              <div class="result-item">
                <span class="result-label">Time saved per month</span>
                <span class="result-value" id="hours-saved">16 hrs</span>
              </div>
              <div class="result-item highlight">
                <span class="result-label">Cost saved per month</span>
                <span class="result-value" id="money-saved">$1,200</span>
              </div>
              <div class="result-item">
                <span class="result-label">Annual savings</span>
                <span class="result-value" id="annual-saved">$14,400</span>
              </div>
            </div>
          </div>
          <ul class="product-features">
            <li>JIL syntax highlighting &amp; IntelliSense</li>
            <li>Job dependency graph viewer</li>
            <li>Inline validation &amp; error detection</li>
            <li>Works with CA Workload Automation AE</li>
          </ul>
          <div class="trial-banner">
            <span class="trial-icon">🎉</span>
            <div>
              <strong>Free Trial — No credit card required</strong>
              <p>Try the full extension with all features unlocked. No restrictions — use it for any project, any purpose, for free during the trial period.</p>
            </div>
          </div>
          <div class="pricing-grid">
            <div class="pricing-plan">
              <div class="plan-name">Individual</div>
              <div class="plan-price"><span class="plan-amount">$19</span><span class="plan-period">/month</span></div>
              <div class="plan-desc">Perfect for solo developers and small teams.</div>
              <a href="https://marketplace.visualstudio.com/search?term=autosys&target=VSCode" target="_blank" rel="noopener" class="btn-primary">Get Started</a>
            </div>
            <div class="pricing-plan enterprise">
              <div class="plan-name">Enterprise</div>
              <div class="plan-price"><span class="plan-amount">Custom</span></div>
              <div class="plan-desc">Volume licensing, priority support, and custom integrations.</div>
              <a href="mailto:nihadi.technologies@gmail.com" class="btn-outline">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="about">
    <div class="section-inner about-inner">
      <div class="about-text">
        <h2>About Nihadi Technologies LLC</h2>
        <p>We are a software company focused on building tools that make developers and operations teams more productive. From IDE extensions to enterprise automation, our products tackle real-world complexity with clean, reliable software.</p>
      </div>
      <div class="about-stats">
        <div class="stat">
          <span class="stat-number">1</span>
          <span class="stat-label">Product Launched</span>
        </div>
        <div class="stat">
          <span class="stat-number">∞</span>
          <span class="stat-label">More Coming</span>
        </div>
      </div>
    </div>
  </section>

  <section id="contact">
    <div class="section-inner contact-inner">
      <h2>Get in Touch</h2>
      <p>Have questions about our products or want to request a feature?</p>
      <a href="mailto:nihadi.technologies@gmail.com" class="btn-outline">nihadi.technologies@gmail.com</a>
    </div>
  </section>

  <footer>
    <div class="footer-inner">
      <span class="brand-name">Nihadi Technologies LLC</span>
      <span class="footer-copy">&copy; ${new Date().getFullYear()} All rights reserved.</span>
    </div>
  </footer>
`

// Savings calculator
function updateCalc() {
  const rate = parseFloat(document.getElementById('hourly-rate').value) || 0
  const hours = parseFloat(document.getElementById('hours-month').value) || 0
  const hoursSaved = hours * 0.8
  const moneySaved = hoursSaved * rate
  const annualSaved = moneySaved * 12
  const fmt = (n) => '$' + Math.round(n).toLocaleString()
  document.getElementById('hours-saved').textContent = hoursSaved.toFixed(1) + ' hrs'
  document.getElementById('money-saved').textContent = fmt(moneySaved)
  document.getElementById('annual-saved').textContent = fmt(annualSaved)
}

document.getElementById('hourly-rate').addEventListener('input', updateCalc)
document.getElementById('hours-month').addEventListener('input', updateCalc)
