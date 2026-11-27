/* =========================================================
   R-EVOLUCIÓN — ROUTING, DATA & 5S GLITCH CONTROLLER
   ========================================================= */

const PROJECTS_DATA = [
  {
    id: 'proj-01',
    year: '2025–2026',
    category: 'ON TOUR',
    tag: 'LIVE CINEMA // SOUND & MOVEMENT PERFORMANCE',
    title: '[PROJECT 01 — PLACEHOLDER TITLE]',
    synopsis: 'Multidisciplinary stage intervention combining live audiovisual synthesis, experimental sound architecture, and physical theater to confront systemic indifference and reclaim public memory.',
    credits: {
      direction: 'Sasha',
      soundVisual: 'Sasha',
      cast: 'R-Evolución Ensemble',
      support: 'Barcelona Cultural Network / EU Youth Collaboration'
    }
  },
  {
    id: 'proj-02',
    year: '2025',
    category: 'EUROPEAN',
    tag: 'ERASMUS+ // NON-FORMAL EDUCATION & ARTIVISM',
    title: '[PROJECT 02 — EUROPEAN EXCHANGE PLACEHOLDER]',
    synopsis: 'Transnational creative laboratory bringing together emerging artists and youth workers across Europe to develop non-violent artistic tools for Human Rights advocacy.',
    credits: {
      direction: 'Francesco Campolo & Sasha',
      soundVisual: 'Sasha',
      cast: 'International Youth Participants',
      support: 'Co-funded by the European Union (Erasmus+)'
    }
  },
  {
    id: 'proj-03',
    year: '2024',
    category: 'ARCHIVE',
    tag: 'CAPOEIRA & SOMATIC LABORATORY',
    title: '[PROJECT 03 — MOVEMENT & COMMUNITY PLACEHOLDER]',
    synopsis: 'Grassroots movement and Afro-Brazilian Capoeira workshops designed as spaces of collective care, non-violent discipline, and intercultural dialogue.',
    credits: {
      direction: 'Roberto Gnoffo',
      soundVisual: 'Live Percussion & Sound Design',
      cast: 'Community Workshop Participants',
      support: 'Associació Cultural R-Evolución'
    }
  },
  {
    id: 'proj-04',
    year: '2024',
    category: 'ARCHIVE',
    tag: 'SOMATIC ART THERAPY & BODY AWARENESS',
    title: '[PROJECT 04 — ARTE VIVO PLACEHOLDER]',
    synopsis: 'Experiential laboratory integrating body awareness, creative expression, and emotional regulation in accessible community spaces.',
    credits: {
      direction: 'Omassa Maï Guiakora',
      soundVisual: 'R-Evolución Lab',
      cast: 'Open Community Group',
      support: 'Barcelona Civic Space'
    }
  }
];

const COLLECTIVE_DATA = [
  {
    slug: 'sasha',
    name: 'SASHA',
    role: 'ARTISTIC DIRECTION / SOUND & VISUAL DESIGN / MULTIDISCIPLINARY ARTIST',
    bio: [
      'Sasha is a multidisciplinary artist, audiovisual creator, and sound designer working across live cinema, experimental music, graphic design, and performative arts. His practice explores the intersection of real-time image, sonic architecture, and civic storytelling—treating technology and live composition as tools for collective friction and critical awareness.',
      'As Artistic Director of R-Evolución, he conceptualizes and directs the collective’s scenic and transmedia works, designing the visual and sonic dramaturgy behind its Human Rights and non-violent artivism projects across local and European contexts.'
    ],
    works: [
      '2025 — [Project 01 Placeholder] — Direction, Sound & Live Visuals',
      '2024 — [Project 02 Placeholder] — Concept & Audiovisual Architecture',
      '2024 — [Sound & Live Cinema Laboratory] — Artistic Direction'
    ],
    links: [
      { label: 'PORTFOLIO / WEB', url: '#' },
      { label: 'INSTAGRAM', url: '#' }
    ]
  },
  {
    slug: 'francesco-campolo',
    name: 'FRANCESCO CAMPOLO',
    role: 'PRESIDENT / ACTOR, PERFORMER & PROJECT FACILITATOR',
    bio: [
      'Francesco Campolo is an actor, performer, and cultural producer born in Ustica (Italy) and based in Barcelona. Trained at the international performing arts school Anfibia (Bologna) alongside a background in Economics and Finance, he leads R-Evolución as President, overseeing artistic production, European youth exchanges, and institutional partnerships.',
      'His stage work focuses on Human Rights and social inclusion. Prior to R-Evolución, he toured extensively across Europe, Nepal, and Africa with Raizes Teatro, performing in institutional forums for the Council of Europe and the European Union, while facilitating multiple Erasmus+ and European Youth Foundation projects.'
    ],
    works: [
      '2024 — Paint for Freedom (Erasmus+ Project, Palermo) — Creator, Coordinator & Facilitator',
      '2021–2024 — The Eyes of Humanity: A Look on Kathmandu (Kathmandu, Barcelona, Ustica) — Photography Exhibition & Curation',
      '2021–2024 — Ave Maria / Set to Free / Free to Be (Council of Europe, Strasbourg; EU Fundamental Rights Forum, Vienna) — Performer',
      '2023 — Theatre for Democracy Vol. II (EYF / Council of Europe, Palermo) — Trainer & Facilitator'
    ],
    links: [
      { label: 'INSTAGRAM', url: 'https://www.instagram.com/francesco_campolo_actor' },
      { label: 'YOUTUBE', url: 'https://www.youtube.com/@francescocampolo9767' },
      { label: 'LINKTREE', url: 'https://linktr.ee/francesco_campolo' }
    ]
  },
  {
    slug: 'roberto-gnoffo',
    name: 'ROBERTO GNOFFO',
    role: 'CAPOEIRA PROFESSOR / MOVEMENT & CULTURAL EDUCATOR',
    bio: [
      'Roberto Gnoffo is a Capoeira professor born in Palermo and based in Barcelona. He began his journey in the Afro-Brazilian art of Capoeira in 2004 under Mestre Bora Dos Santos within the Associação Cultural Nação Capoeira, achieving the rank of Formado in 2014 and Professor in 2019 after living and immersing himself in Brazilian cultural traditions.',
      'At R-Evolución, he leads movement and Capoeira laboratories as tools for community cohesion, non-violent discipline, and intercultural dialogue—bringing extensive experience teaching workshops and seminars across Italy, France, Germany, Poland, and Spain.'
    ],
    works: [
      '2019–Present — Nação Capoeira Barcelona / R-Evolución — Lead Capoeira Professor & Movement Facilitator',
      '2014–Present — European Capoeira Seminars & Workshops (Milan, Rome, Paris, Lyon, Hanover, Łódź) — Guest Instructor'
    ],
    links: [
      { label: 'INSTAGRAM', url: 'https://www.instagram.com/16.giga/' },
      { label: 'YOUTUBE', url: 'https://youtube.com/@16.gigante' },
      { label: 'LINKTREE', url: 'https://linktr.ee/gigantenacao' }
    ]
  },
  {
    slug: 'antonia-peris',
    name: 'ANTONIA PERIS',
    role: 'MOVEMENT ARTIST / CONTEMPORARY DANCE, CIRCUS & PHYSICAL THEATER',
    bio: [
      'Antonia Peris is a multidisciplinary movement artist, performer, and director specializing in circus techniques, contemporary dance, and physical theater. Trained across Colombia, France, Portugal (INAC), and Italy (Anfibia, Bologna), her practice explores gesture, object manipulation, and corporeal mime to transform raw human stories into poetic, theatrical universes.',
      'Within R-Evolución, she develops physical dramaturgy and movement-based performances centered on social and environmental awareness, drawing from her international trajectory as both interpreter and stage director across Latin America and Europe.'
    ],
    works: [
      '2022 — Algo Falta (Crudo Festival, Bologna & Studio Round, Dresden) — Creation, Direction & Solo Performance',
      '2022 — Climate Awareness Site-Specific Performance (Raizes Teatro / Marine Protected Area, Ustica) — Performer',
      '2021 — Palaphitas (Companhia PIA, Portugal — FIG / MAPS Festivals) — Co-creation & Performance',
      '2019–2020 — Crónicas de un Periódico Amarillista (Atomos Teatro, Alteatro Festival) — Physical Actress & Clown'
    ],
    links: [
      { label: 'INSTAGRAM', url: 'https://instagram.com/antoniaperis.vpm' }
    ]
  },
  {
    slug: 'omassa-mai-guiakora',
    name: 'OMASSA MAÏ GUIAKORA',
    role: 'PSYCHOTHERAPIST & ART THERAPIST / SOMATIC & CREATIVE FACILITATOR',
    bio: [
      'Omassa Maï Guiakora is a Paris-born psychotherapist, art therapist, and founder of Crear es Vivir, based in Barcelona. Holding a degree in Psychology from Paris Nanterre University alongside specialized training in Art Therapy and somatic work, her integrative practice bridges clinical psychology, body awareness, and creative expression.',
      'With over a decade of international social and humanitarian experience—from vulnerability support in France and the Poor People’s Campaign in Washington to therapeutic community programs in Barcelona—she designs safe, accessible laboratories at R-Evolución where movement and art serve emotional regulation and collective care.'
    ],
    works: [
      '2024–Present — ARTE VIVO — Embodying Art (Barcelona) — Creator & Somatic Art Therapy Facilitator',
      '2024–Present — Coloralma (with Iara Bonhet) — Biodanza, Art Therapy & Body-Awareness Collaboration',
      '2024–2025 — Caregivers Therapeutic Art Groups & Final Exhibition (Integral Salut, Barcelona) — Art Therapist & Coordinator'
    ],
    links: [
      { label: 'INSTAGRAM', url: 'https://www.instagram.com/mai_gkr/' },
      { label: 'LINKEDIN', url: 'https://www.linkedin.com/in/omassa-ma%C3%AF-guiakora-a13682241/' }
    ]
  },
  {
    slug: 'brigette-fortuin',
    name: 'BRIGETTE FORTUIN',
    role: 'EUROPEAN FUNDING & STRATEGIC INNOVATION / PERFORMER',
    bio: [
      'Brigette Fortuin is a performer, strategic innovation specialist, and physicist born in South Africa (Springbok/Atlantis) and based in Barcelona. Holding a PhD cum laude in Physics from the University of the Basque Country as a Marie Skłodowska-Curie Fellow—alongside an Erasmus Mundus MESC+ Master’s and BSc Honours cum laude in Chemistry—she works at Leitat Technological Center developing and managing European funding opportunities in circular economy, sustainability, and strategic innovation.',
      'Within R-Evolución, she bridges high-level European grant strategy with live artistic practice, leading the collective’s international funding architecture while performing in its interdisciplinary movement and civic artivism pieces.'
    ],
    works: [],
    links: [
      { label: 'LINKEDIN', url: '#' },
      { label: 'INSTAGRAM', url: 'https://instagram.com/brigenator' }
    ]
  },
  {
    slug: 'giulia-nocera',
    name: 'GIULIA NOCERA',
    role: 'SECRETARY, PRODUCER & OPERATIONS / LITERATURE & FASHION CURATION',
    bio: [
      'Giulia Nocera is a psychopedagogue, youth worker, and cultural producer born in Palermo and based in Barcelona. Serving as Secretary, Producer, and Operations Lead of R-Evolución, she drives the association’s daily production, community engagement, and strategic development with a focus on gender equality, diversity, and LGBTQ+ advocacy.',
      'Alongside her production role, she leads the collective’s Literature and Fashion initiatives—curating spaces such as the Book Club workshop and bridging artistic expression with local craftswomen and sustainable community trade.'
    ],
    works: [],
    links: []
  },
  {
    slug: 'giorgio-teresi',
    name: 'GIORGIO TERESI',
    role: 'TREASURER / SUSTAINABILITY, ESG & HUMAN RIGHTS ADVISOR',
    bio: [
      'Giorgio Teresi is a Senior Sustainability Consultant born in Palermo and based in Barcelona, holding a Master’s Degree in Sustainable Development with expertise in Human Rights (University of Barcelona) and dual degrees in International Studies from Sciences Po Toulouse and the University of Palermo.',
      'Serving as Treasurer of R-Evolución, he brings strategic rigor in sustainable finance, ESG governance, and non-financial impact assessment—aligning the collective’s cultural and European projects with concrete environmental, social, and human rights standards.'
    ],
    works: [],
    links: []
  }
];

/* NAVIGATION CONTROLLER */
function navigateTo(route, param = null) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l => {
    l.classList.toggle('active', l.dataset.route === route);
  });

  const targetView = document.getElementById(`view-${route}`);
  if (targetView) {
    targetView.classList.add('active');
    window.scrollTo(0, 0);
  }

  if (route === 'member' && param) {
    renderMemberDetail(param);
  }

  document.getElementById('mobileNav').classList.remove('open');
}

document.addEventListener('click', (e) => {
  const routeEl = e.target.closest('[data-route]');
  if (routeEl) {
    e.preventDefault();
    navigateTo(routeEl.dataset.route);
  }
});

document.getElementById('mobileMenuBtn').addEventListener('click', () => {
  document.getElementById('mobileNav').classList.toggle('open');
});

/* RENDER PROJECTS */
function renderProjects(filter = 'ALL') {
  const container = document.getElementById('projectsContainer');
  const filtered = filter === 'ALL'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === filter);

  container.innerHTML = filtered.map(p => `
    <article class="project-row">
      <div class="project-row-top">
        <div class="project-media-slot">
          <span>[ PROJECT MEDIA SLOT ]</span>
          <small>WEBP 1200x800 (&lt;200KB)</small>
        </div>
        <div class="project-body">
          <div class="project-meta-line">${p.year} // ${p.category} // ${p.tag}</div>
          <h2 class="project-title">${p.title}</h2>
          <p>${p.synopsis}</p>
        </div>
      </div>
      <div class="credits-cartela">
        <div class="credit-item"><span>CONCEPT & DIRECTION</span>${p.credits.direction}</div>
        <div class="credit-item"><span>SOUND & VISUAL DESIGN</span>${p.credits.soundVisual}</div>
        <div class="credit-item"><span>PERFORMANCE & LIVE CREATION</span>${p.credits.cast}</div>
        <div class="credit-item"><span>INSTITUTIONAL SUPPORT</span>${p.credits.support}</div>
      </div>
    </article>
  `).join('');

  // Also populate Home featured preview (first 3)
  const homePreview = document.getElementById('homeFeaturedProjects');
  if (homePreview) {
    homePreview.innerHTML = PROJECTS_DATA.slice(0, 3).map(p => `
      <div class="project-card-mini">
        <div>
          <div class="project-meta-line">${p.year} // ${p.category}</div>
          <h3 style="font-family: var(--font-display); font-size: 1.35rem; margin-bottom: 0.75rem;">${p.title}</h3>
          <p style="font-size: 0.92rem; margin-bottom: 1.5rem;">${p.synopsis}</p>
        </div>
        <a href="#projects" data-route="projects" class="mono-note">VIEW CREDITS & ARCHIVE →</a>
      </div>
    `).join('');
  }
}

document.getElementById('projectFilters').addEventListener('click', (e) => {
  if (e.target.classList.contains('filter-btn')) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    renderProjects(e.target.dataset.filter);
  }
});

/* RENDER COLLECTIVE DIRECTORY */
function renderCollective() {
  const grid = document.getElementById('collectiveGrid');
  grid.innerHTML = COLLECTIVE_DATA.map(m => `
    <div class="member-card" data-slug="${m.slug}">
      <div class="member-photo-slot">
        <span>[ PORTRAIT: ${m.name} ]</span>
        <small>3:4 VERTICAL B&W WEBP</small>
      </div>
      <div class="member-card-info">
        <div class="member-card-name">${m.name}</div>
        <div class="member-card-role">${m.role}</div>
      </div>
    </div>
  `).join('');

  grid.addEventListener('click', (e) => {
    const card = e.target.closest('.member-card');
    if (card) {
      navigateTo('member', card.dataset.slug);
    }
  });
}

function renderMemberDetail(slug) {
  const m = COLLECTIVE_DATA.find(item => item.slug === slug);
  if (!m) return;

  const worksHtml = m.works.length
    ? `<div class="mono-kicker" style="margin-top:2rem;">SELECTED WORKS & PRACTICE</div>
       <ul class="member-works-list">${m.works.map(w => `<li>${w}</li>`).join('')}</ul>`
    : '';

  const linksHtml = m.links.map(l => `<a href="${l.url}" target="_blank" rel="noopener" class="mono-note">[ ${l.label} ↗ ]</a>`).join('');

  document.getElementById('memberDetailContainer').innerHTML = `
    <div class="member-detail-layout">
      <div class="member-detail-photo">
        <span>[ PORTRAIT: ${m.name} ]</span>
        <small>3:4 VERTICAL WEBP (&lt;150KB)</small>
      </div>
      <div>
        <div class="mono-kicker">${m.role}</div>
        <h1 class="page-title" style="margin-bottom:1.25rem;">${m.name}</h1>
        ${m.bio.map(p => `<p class="lead-paragraph">${p}</p>`).join('')}
        ${worksHtml}
        <div class="member-links-row">
          ${linksHtml}
          <button class="btn-sharp btn-accent" onclick="bookArtist('${m.name}')">BOOK / COLLABORATE VIA R-EVOLUCIÓN →</button>
        </div>
      </div>
    </div>
  `;
}

window.bookArtist = function(artistName) {
  navigateTo('contact');
  const subjectInput = document.getElementById('formSubject');
  if (subjectInput) {
    subjectInput.value = `Booking / Collaboration Inquiry: ${artistName}`;
  }
};

/* CONTACT FORM FEEDBACK */
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  document.getElementById('formFeedback').textContent =
    '[ DISPATCH LOGGED — Clinmedia: Connect this form to WordPress SMTP / Contact Form 7 ]';
});

/* 5-SECOND LOOP & GLITCH SYNC ON SECOND 5 */
let loopSec = 1;
const counterEl = document.getElementById('loopCounter');
const glitchEl = document.querySelector('.glitch-target');

setInterval(() => {
  loopSec = loopSec >= 5 ? 1 : loopSec + 1;
  if (counterEl) {
    counterEl.textContent = `LOOP 00:0${loopSec} / 00:05 [GLITCH_SYNC]`;
  }
  if (glitchEl) {
    if (loopSec === 5) {
      glitchEl.classList.add('glitch-active');
      setTimeout(() => glitchEl.classList.remove('glitch-active'), 450);
    }
  }
}, 1000);

/* INIT */
renderProjects();
renderCollective();
