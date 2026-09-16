import './style.css'

import headshot from './images/headshot.jpg'
import planeImg from './images/plane.jpg'
import lakeLouiseImg from './images/lake_louise.jpg'
import volleyballImg from './images/beach_volleyball.jpg'
import catanImg from './images/catan.jpg'
import marbleHouseImg from './images/marble_house.jpg'
import brunchImg from './images/brunch.jpg'
import indyJonesImg from './images/indyjones.jpg'

const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`

const experience = [
  {
    org: 'Retirement Income Solutions, Inc.',
    role: 'Investment Analyst Intern',
    when: '2026',
    where: 'Ann Arbor, MI',
    story:
      "At Retirement Income Solutions, most of my work came down to turning complicated financial products into decisions a client could actually act on. My first project dug into Trump Accounts — I mapped out the contribution rules, tax optimization strategies, and long-term growth scenarios across a 20+ page deck, then distilled all of it into a 2-page take-home guide clients could read in five minutes and use immediately. From there I turned to the firm's own book of business, building a 10+ page analysis of fund returns and regional performance to recommend which equity funds to retain and which to replace. I closed out the internship with a 20-page assessment of the private credit industry and the firm's major private credit positions, built to help the firm decide which funds were worth retaining for clients.",
  },
  {
    org: 'Michigan Investment Group',
    role: 'Industrials Desk Co-Head',
    when: '2025 – Present',
    where: 'Novi, MI',
    story:
      "As Co-Head of the Industrials Desk at Michigan Investment Group, I pitch names to a room of 100+ members who will happily poke holes in every assumption in the model. My Karman (KRMN) pitch made the case around its planned integration into existing client products and programs and the compounding benefits that unlocks for future projects; the DCF implied a share price of $121, or 48.3% upside. I recommended Ferrellgas (FGPR) on the strength of its post-bankruptcy capital structure simplification, the Class B-to-A unit conversion, and a potential NASDAQ uplisting, with a DCF implying 153% upside. I also went long Globus Medical (GMED), on its ASC migration, evolving CMS reimbursement dynamics, and MIS platform consolidation, for a DCF-implied upside of 86%.",
  },
  {
    org: 'Nexecon Student Consulting Group',
    role: 'Business Analyst',
    when: '2025 – Present',
    where: 'Ann Arbor, MI',
    story:
      "Nexecon is where I work through problems that don't come with a template. For a national telehealth firm, I evaluated 6 strategic growth pathways using a TAM/SAM/SOM model, survey responses from 180+ physicians, and 50+ supporting analyses, recommending initiatives able to reduce customer churn by 25%. For a distributor client, I diagnosed the sources of churn, assessed 4 potential expansion markets, and built a distress score to identify the profit-urgent, high-value customers worth prioritizing across 4 industries. Most recently, I analyzed 100+ survey responses from a 15-question study on a major U.S. airline's lost-bag process, turning the findings into 45+ concrete recommendations to reduce customer friction.",
  },
  {
    org: 'Community Data Consulting',
    role: 'Head Data Consultant',
    when: '2023 – Present',
    where: 'Detroit, MI',
    story:
      "Community Data Consulting is where I learned that a dashboard is only useful if the person reading it can act on it that day. I built multi-source community needs dashboards from 750+ data points, giving partner organizations real-time visibility into the needs of the 150K+ Detroit residents they serve and surfacing 7 new program expansion opportunities along the way. I also designed an automated placement system for 100+ students that cut sorting time by 66% while improving accuracy and keeping group outcomes aligned with each student's initial preferences. On the operations side, I ran an ABC/XYZ inventory analysis across 14 item categories to align community programs with strategic goals, and co-published a 17-page annual report seen by 5+ partner organizations.",
  },
  {
    org: 'Stewards Sustainability Leadership Institute',
    role: 'Director of Expansion',
    when: '2024 – Present',
    where: 'Novi, MI',
    story:
      "Leading an 11-person team at Stewards Sustainability Leadership Institute, I helped build a data-driven expansion strategy that grew engagement 2.5x; part of that effort involved redesigning our recruitment strategy, based on current member feedback, around each individual member's experience rather than a one-size-fits-all pitch. I also analyzed energy usage across 70+ properties using 500+ data points to help prioritize Ann Arbor 2030's energy audits, presenting the findings to the organization's board and a DTE representative. That same year, I presented our revised sustainable growth strategy at the 2024 Michigan EGLE Youth Summit to 150+ attendees from across Michigan.",
  },
]

const highlights = [
  {
    tag: '48.3% upside',
    title: 'Karman (KRMN) Equity Pitch',
    org: 'Michigan Investment Group',
    desc: "Pitched Karman's integration into existing client programs and compounding capabilities to 100+ members, backed by a DCF implying $121/share.",
  },
  {
    tag: '153% upside',
    title: 'Ferrellgas (FGPR) Thesis',
    org: 'Michigan Investment Group',
    desc: 'Built the case around post-bankruptcy capital structure simplification, Class B-to-A conversion, and a potential NASDAQ uplisting.',
  },
  {
    tag: '25% churn reduction',
    title: 'Telehealth Growth Strategy',
    org: 'Nexecon Student Consulting Group',
    desc: 'Modeled 6 strategic growth pathways with a TAM/SAM/SOM framework and 180+ physician surveys for a national telehealth firm.',
  },
  {
    tag: '150K+ residents',
    title: 'Detroit Community Dashboard',
    org: 'Community Data Consulting',
    desc: 'Built multi-source dashboards from 750+ data points, surfacing 7 new program expansion opportunities for the community.',
  },
  {
    tag: '20+ page deck',
    title: 'Trump Accounts Client Guide',
    org: 'Retirement Income Solutions',
    desc: 'Synthesized contribution rules, tax optimization, and long-term growth scenarios into a client-ready 2-page guide.',
  },
  {
    tag: '70+ properties',
    title: 'Ann Arbor 2030 Energy Audit',
    org: 'Stewards Sustainability Leadership Institute',
    desc: 'Analyzed energy usage across 500+ data points to prioritize audits; presented findings to the board and a DTE rep.',
  },
]

const fixations = [
  {
    img: planeImg,
    tag: 'planespotting',
    caption: 'Caught this one on final approach. Plane spotting is a personality trait at this point.',
    likes: 214,
  },
  {
    img: lakeLouiseImg,
    tag: 'banff',
    caption: 'Lake Louise really said "main character energy."',
    likes: 331,
  },
  {
    img: volleyballImg,
    tag: 'beachvolleyball',
    caption: 'Sand in places sand should not be. Worth it.',
    likes: 156,
  },
  {
    img: catanImg,
    tag: 'catan',
    caption: 'Traded wood for sheep, lost a friendship.',
    likes: 189,
  },
  {
    img: marbleHouseImg,
    tag: 'gildedage',
    caption: 'If the Vanderbilts did it, I’m interested.',
    likes: 142,
  },
  {
    img: brunchImg,
    tag: 'breakfastspots',
    caption: 'The Hen, Ann Arbor: still undefeated.',
    likes: 267,
  },
  {
    img: indyJonesImg,
    tag: 'indianajones',
    caption: 'Found my spirit animal at Legoland. It belongs in a museum.',
    likes: 298,
  },
]

const whyRecalc = [
  {
    step: '01 — Investment judgment',
    title: 'From finding mispricing to creating value',
    text: 'My investing experience has largely taught me to ask what the market may be missing about a company. Recalc interests me because I want to add a second question: if I actually owned the business, what could I change? I want to understand how investors translate operating levers—pricing, M&A, product expansion, or efficiency—into an underwriting case rather than simply forecasting the resulting financials.',
  },
  {
    step: '02 — Analytical execution',
    title: 'Learning what belongs in the model',
    text: 'The more real data I have worked with, the more I have realized that building a model is often easier than deciding which assumptions deserve to go into it. After analyzing community data for a nonprofit and company and industry information in investing roles, I want to get better at moving from messy operating evidence to a defensible investment case. Recalc’s emphasis on business analysis alongside modeling particularly appeals to me for that reason.',
  },
  {
    step: '03 — AI-enabled execution',
    title: 'Using AI without outsourcing judgment',
    text: 'I already use AI heavily to accelerate how I learn finance, but that has made strong fundamentals more—not less—important to me. The real advantage is not getting an answer faster; it is understanding a concept deeply enough to challenge the answer, recognize when it is wrong, and know which work should remain human. Recalc’s explicit focus on learning both the foundational and AI-powered approaches is therefore particularly compelling to me.',
  },
]

const whyRecalcClosing =
  "I don't want Recalc simply to teach me more finance. I want it to change where I add value in the analytical process — from understanding the mechanics of a model to determining what should go into it, what an owner could actually do to change the outcome, and where AI can accelerate that work without replacing my judgment."

const nav = [
  ['About', '#about'],
  ['Highlights', '#highlights'],
  ['Experience', '#experience'],
  ['Fixations', '#fixations'],
  ['Why Recalc', '#why-recalc'],
  ['Contact', '#contact'],
]

document.querySelector('#app').innerHTML = `
  <header class="site-header">
    <div class="wrap header-inner">
      <a href="#" class="brand">LA<span class="brand-dot">.</span></a>
      <nav class="main-nav" id="main-nav">
        ${nav.map(([label, href]) => `<a href="${href}">${label}</a>`).join('')}
      </nav>
      <button class="nav-toggle" id="nav-toggle" aria-label="Toggle navigation" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>

  <main>
    <section class="hero wrap">
      <div class="hero-copy reveal">
        <p class="eyebrow">Ann Arbor, MI</p>
        <h1>Lalitaditya Akkaraju</h1>
        <p class="hero-sub">Finance &amp; Data Science at Michigan Ross.</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="${resumeUrl}" target="_blank" rel="noopener">View Résumé</a>
          <a class="btn btn-ghost" href="mailto:akkaraju@umich.edu">Email Me</a>
        </div>
        <ul class="hero-stats">
          <li>4.00 / 4.00 GPA</li>
          <li>1550 / 1600 SAT</li>
          <li>Wharton MBA Buyout Competition Finalist</li>
        </ul>
      </div>
      <div class="hero-photo reveal">
        <div class="hero-photo-blob"></div>
        <img src="${headshot}" alt="Lalitaditya Akkaraju" />
      </div>
    </section>

    <div class="tag-row wrap">
      ${['Finance', 'Data', 'DCFs', 'Plane Spotting', 'Catan', 'Investing', 'Michigan Ross']
        .map((t, i) => `<span class="tag-chip reveal" style="transition-delay:${i * 60}ms">${t}</span>`)
        .join('')}
    </div>

    <section id="about" class="section wrap about-section">
      <div class="about-text reveal">
        <h2 class="section-title">About</h2>
        <p>I'm a student at the Stephen M. Ross School of Business at the University of Michigan, concentrating in
          Finance with a minor in Data Science. I spend most of my time underwriting equities, building dashboards
          for community organizations, and trying to find the best breakfast spot in Ann Arbor (current answer:
          The Hen).</p>
        <p>Outside of that, I enjoy plane spotting, Banff National Park, beach volleyball, losing at Catan, Gilded
          Age history, and rewatching Indiana Jones for the hundredth time.</p>
      </div>
      <div class="about-card reveal">
        <h3>Education</h3>
        <p class="about-card-main">University of Michigan</p>
        <p>Stephen M. Ross School of Business</p>
        <p>B.B.A., Finance &middot; Minor in Data Science &middot; May 2029</p>
        <ul class="about-awards">
          <li>4.00 / 4.00 GPA</li>
          <li>William J. Branstrom Freshman Prize</li>
          <li>SAT: 1550 / 1600</li>
          <li>Wharton MBA Buyout Competition Finalist</li>
          <li>2nd Place, MIG LBO Competition</li>
        </ul>
      </div>
    </section>

    <section id="highlights" class="section wrap">
      <h2 class="section-title reveal">Highlights</h2>
      <p class="section-sub reveal">A few projects and pitches I'm proud of.</p>
      <div class="highlight-grid">
        ${highlights
          .map(
            (h, i) => `
          <article class="highlight-card reveal" style="transition-delay:${i * 70}ms">
            <span class="highlight-tag">${h.tag}</span>
            <h3>${h.title}</h3>
            <p class="highlight-org">${h.org}</p>
            <p>${h.desc}</p>
          </article>`
          )
          .join('')}
      </div>
    </section>

    <section id="experience" class="section wrap">
      <h2 class="section-title reveal">Experience</h2>
      <ol class="timeline">
        ${experience
          .map(
            (job, i) => `
          <li class="timeline-item reveal" style="transition-delay:${i * 80}ms">
            <div class="timeline-when">${job.when}</div>
            <div class="timeline-body">
              <h3>${job.role}</h3>
              <p class="timeline-org">${job.org} — ${job.where}</p>
              <p class="timeline-story">${job.story}</p>
            </div>
          </li>`
          )
          .join('')}
      </ol>
    </section>

    <section id="fixations" class="section wrap">
      <h2 class="section-title reveal">Current Fixations</h2>
      <p class="section-sub reveal">A very unserious feed of things I can't stop thinking about.</p>
      <div class="feed-wrap">
        <button class="feed-arrow feed-arrow-left" id="feed-prev" aria-label="Scroll left">&#8249;</button>
        <div class="feed-grid" id="feed-grid">
          ${fixations
            .map(
              (f, i) => `
            <article class="feed-post reveal" style="transition-delay:${i * 60}ms">
              <div class="feed-post-header">
                <span class="feed-avatar">LA</span>
                <div>
                  <p class="feed-handle">lalitaditya</p>
                  <p class="feed-hashtag">#${f.tag}</p>
                </div>
              </div>
              <div class="feed-photo">
                <img src="${f.img}" alt="${f.caption}" loading="lazy" />
              </div>
              <div class="feed-actions">
                <button class="like-btn" data-index="${i}" aria-label="Like">❤</button>
                <span class="like-count">${f.likes}</span>
              </div>
              <p class="feed-caption"><strong>lalitaditya</strong> ${f.caption}</p>
            </article>`
            )
            .join('')}
        </div>
        <button class="feed-arrow feed-arrow-right" id="feed-next" aria-label="Scroll right">&#8250;</button>
      </div>
    </section>

    <section id="why-recalc" class="section wrap">
      <h2 class="section-title reveal">Why Recalc</h2>
      <p class="section-sub reveal">Three questions I want this program to help me answer.</p>
      <div class="recalc-grid">
        ${whyRecalc
          .map(
            (r, i) => `
          <article class="recalc-card reveal" style="transition-delay:${i * 90}ms">
            <span class="recalc-step">${r.step}</span>
            <h3>${r.title}</h3>
            <p>${r.text}</p>
          </article>`
          )
          .join('')}
      </div>
      <blockquote class="recalc-quote reveal">${whyRecalcClosing}</blockquote>
    </section>

    <section id="contact" class="section wrap contact-section">
      <h2 class="section-title reveal">Contact</h2>
      <p class="section-sub reveal">Always happy to talk investing, data, or where to find good pancakes.</p>
      <div class="contact-actions reveal">
        <a class="btn btn-primary" href="mailto:akkaraju@umich.edu">akkaraju@umich.edu</a>
        <a class="btn btn-ghost" href="${resumeUrl}" target="_blank" rel="noopener">Download Résumé</a>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="wrap footer-inner">
      <p>&copy; ${new Date().getFullYear()} Lalitaditya Akkaraju</p>
      <p class="footer-note">Fixation photos: Wikimedia Commons &amp; Unsplash</p>
    </div>
  </footer>
`

// mobile nav toggle
const navToggle = document.getElementById('nav-toggle')
const mainNav = document.getElementById('main-nav')
navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open')
  navToggle.setAttribute('aria-expanded', String(isOpen))
})
mainNav.querySelectorAll('a').forEach((link) =>
  link.addEventListener('click', () => {
    mainNav.classList.remove('open')
    navToggle.setAttribute('aria-expanded', 'false')
  })
)

// fun like buttons on the fixations feed
document.querySelectorAll('.like-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const liked = btn.classList.toggle('liked')
    const countEl = btn.nextElementSibling
    const base = fixations[Number(btn.dataset.index)].likes
    countEl.textContent = liked ? base + 1 : base
    btn.classList.remove('pop')
    void btn.offsetWidth
    btn.classList.add('pop')
  })
})

// horizontal scroll arrows for the fixations feed
const feedGrid = document.getElementById('feed-grid')
const scrollAmount = 320
document.getElementById('feed-prev').addEventListener('click', () => {
  feedGrid.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
})
document.getElementById('feed-next').addEventListener('click', () => {
  feedGrid.scrollBy({ left: scrollAmount, behavior: 'smooth' })
})

// click-and-drag scrolling on desktop
let isDragging = false
let dragStartX = 0
let dragScrollLeft = 0
feedGrid.addEventListener('mousedown', (e) => {
  isDragging = true
  feedGrid.classList.add('dragging')
  dragStartX = e.pageX - feedGrid.offsetLeft
  dragScrollLeft = feedGrid.scrollLeft
})
;['mouseleave', 'mouseup'].forEach((evt) =>
  feedGrid.addEventListener(evt, () => {
    isDragging = false
    feedGrid.classList.remove('dragging')
  })
)
feedGrid.addEventListener('mousemove', (e) => {
  if (!isDragging) return
  e.preventDefault()
  const x = e.pageX - feedGrid.offsetLeft
  feedGrid.scrollLeft = dragScrollLeft - (x - dragStartX)
})

// scroll reveal
const revealEls = document.querySelectorAll('.reveal')
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
        io.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.12 }
)
revealEls.forEach((el) => io.observe(el))
