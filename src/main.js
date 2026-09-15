import './style.css'

import headshot from './images/headshot-placeholder.svg'
import planeImg from './images/plane.jpg'
import lakeLouiseImg from './images/lake_louise.jpg'
import volleyballImg from './images/beach_volleyball.jpg'
import catanImg from './images/catan.jpg'
import marbleHouseImg from './images/marble_house.jpg'
import brunchImg from './images/brunch.jpg'
import petraImg from './images/petra.jpg'

const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`

const experience = [
  {
    org: 'Retirement Income Solutions, Inc.',
    role: 'Investment Analyst Intern',
    when: '2026',
    where: 'Ann Arbor, MI',
    bullets: [
      'Produced a 20+ page deck on Trump Account contribution rules and tax optimization, plus a 2-page take-home client guide',
      "Built a 10+ page deck analyzing the firm's equity fund lineup to recommend funds to retain and replace",
      'Delivered a 20-page assessment of the private credit industry and the firm’s major private credit funds',
    ],
  },
  {
    org: 'Michigan Investment Group',
    role: 'Industrials Desk Co-Head',
    when: '2025 – Present',
    where: 'Novi, MI',
    bullets: [
      'Pitched Karman (KRMN) to 100+ members — DCF implied an upside of 48.3%',
      'Recommended Ferrellgas (FGPR) on post-bankruptcy capital structure simplification — DCF implied 153% upside',
      "Longed Globus Medical (GMED) on ASC migration and MIS platform consolidation — 86% implied upside",
    ],
  },
  {
    org: 'Nexecon Student Consulting Group',
    role: 'Business Analyst',
    when: '2025 – Present',
    where: 'Ann Arbor, MI',
    bullets: [
      'Evaluated 6 growth pathways for a national telehealth firm using TAM/SAM/SOM and 180+ physician surveys, recommending initiatives to cut churn 25%',
      'Diagnosed churn sources for a distributor and built a distress score to flag profit-urgent, high-value customers',
      "Analyzed 100+ survey responses on a major airline's lost-bag process, producing 45+ friction-reduction recommendations",
    ],
  },
  {
    org: 'Community Data Consulting',
    role: 'Head Data Consultant',
    when: '2023 – Present',
    where: 'Detroit, MI',
    bullets: [
      'Built multi-source community needs dashboards from 750+ data points serving 150K+ Detroit residents',
      'Designed an automated student placement system, cutting sorting time 66% while improving accuracy',
      'Ran an ABC/XYZ inventory analysis across 14 categories; co-published a 17-page annual report',
    ],
  },
  {
    org: 'Stewards Sustainability Leadership Institute',
    role: 'Director of Expansion',
    when: '2024 – Present',
    where: 'Novi, MI',
    bullets: [
      'Led an 11-person team through a data-driven expansion strategy that grew engagement 2.5x',
      "Analyzed energy usage across 70+ properties (500+ data points) to prioritize Ann Arbor 2030's audits",
      'Presented the revised sustainability strategy to 150+ attendees at the 2024 Michigan EGLE Youth Summit',
    ],
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
    caption: 'Window seat, wing view, 10/10 no notes.',
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
    img: petraImg,
    tag: 'indianajones',
    caption: 'It belongs in a museum. (My heart, specifically.)',
    likes: 298,
  },
]

const nav = [
  ['Experience', '#experience'],
  ['Highlights', '#highlights'],
  ['Fixations', '#fixations'],
  ['About', '#about'],
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
        <p class="hero-sub">Finance &amp; Data Science at Michigan Ross. I build DCFs, dashboards, and the occasional
          Instagram-style scrapbook of my current obsessions.</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="${resumeUrl}" target="_blank" rel="noopener">View Résumé</a>
          <a class="btn btn-ghost" href="mailto:akkaraju@umich.edu">Email Me</a>
        </div>
        <ul class="hero-stats">
          <li><strong>4.00</strong><span>GPA</span></li>
          <li><strong>1550</strong><span>SAT</span></li>
          <li><strong>Wharton</strong><span>MBA Buyout Finalist</span></li>
        </ul>
      </div>
      <div class="hero-photo reveal">
        <img src="${headshot}" alt="Placeholder headshot for Lalitaditya Akkaraju" />
        <span class="photo-note">photo coming soon</span>
      </div>
    </section>

    <section id="experience" class="section wrap">
      <h2 class="section-title reveal">Experience</h2>
      <ol class="timeline">
        ${experience
          .map(
            (job) => `
          <li class="timeline-item reveal">
            <div class="timeline-when">${job.when}</div>
            <div class="timeline-body">
              <h3>${job.role}</h3>
              <p class="timeline-org">${job.org} — ${job.where}</p>
              <ul>
                ${job.bullets.map((b) => `<li>${b}</li>`).join('')}
              </ul>
            </div>
          </li>`
          )
          .join('')}
      </ol>
    </section>

    <section id="highlights" class="section wrap">
      <h2 class="section-title reveal">Highlights</h2>
      <p class="section-sub reveal">A few projects and pitches I'm proud of.</p>
      <div class="highlight-grid">
        ${highlights
          .map(
            (h) => `
          <article class="highlight-card reveal">
            <span class="highlight-tag">${h.tag}</span>
            <h3>${h.title}</h3>
            <p class="highlight-org">${h.org}</p>
            <p>${h.desc}</p>
          </article>`
          )
          .join('')}
      </div>
    </section>

    <section id="fixations" class="section wrap">
      <h2 class="section-title reveal">Current Fixations</h2>
      <p class="section-sub reveal">A very unserious feed of things I can't stop thinking about.</p>
      <div class="feed-grid">
        ${fixations
          .map(
            (f, i) => `
          <article class="feed-post reveal">
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
    </section>

    <section id="about" class="section wrap about-section">
      <div class="about-text reveal">
        <h2 class="section-title">About</h2>
        <p>I'm a student at the Stephen M. Ross School of Business at the University of Michigan, concentrating in
          Finance with a minor in Data Science. I spend most of my time underwriting equities, building dashboards
          for community organizations, and trying to find the best breakfast spot in Ann Arbor (current answer:
          The Hen).</p>
        <p>Outside of that: plane spotting, Banff National Park, beach volleyball, losing at Catan, Gilded Age
          history, and rewatching Indiana Jones for the hundredth time.</p>
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
      <p class="footer-note">Built with Vite</p>
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
  })
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
