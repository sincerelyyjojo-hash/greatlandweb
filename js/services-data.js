/* Greatland Construction — Services Data + Detail Page Renderer */

const SERVICES = [
  {
    slug: 'full-home-renovation',
    title: 'Full Home Renovation',
    shortDesc: 'Complete home transformations, every room, inside and out. We manage the whole project.',
    intro: 'Complete home renovations tailored to your lifestyle, space, and long-term needs.',
    heroImg: '../full_home_reno/header.jpg',
    includes: [
      'Whole-home updates',
      'Interior layout improvements',
      'Flooring, stairs, ceilings, and painting',
      'Kitchen and bathroom upgrades',
      'Licensed plumbing, electrical, and gas coordination',
      'Final finishing details',
    ],
    photos: [
      'Living room after full renovation',
      'Dining room renovation',
      'Bathroom remodel',
      'Second bathroom update',
      'Entryway and foyer',
      'Home gym addition',
    ],
    photoImgs: [
      '../full_home_reno/new.jpg',
      '../full_home_reno/new%202.jpg',
      '../full_home_reno/bathroom.png',
      '../full_home_reno/bathroom%202.png',
      '../full_home_reno/entryway.png',
      '../full_home_reno/at%20home%20gym.png',
    ],
    iconPath: `<path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/>`,
  },
  {
    slug: 'kitchen-bath',
    title: 'Kitchen & Bath',
    shortDesc: 'Custom kitchens and bathroom upgrades with cabinetry, tile, fixtures, and finishes.',
    intro: 'Functional, beautiful kitchen and bathroom renovations built with care from design to finish.',
    heroImg: '../kitchen_bath/pexels-c-l-russell-1110690659-20773076.jpg',
    includes: [
      'Custom kitchen upgrades',
      'Bathroom remodeling',
      'Tile, flooring, cabinetry, and fixtures',
      'Plumbing and electrical coordination',
      'Lighting and finish selection',
      'Clean final walkthrough',
    ],
    photos: [
      'Kitchen renovation',
      'Custom cabinetry and island',
      'Bathroom remodel',
      'Walk-in shower tile work',
      'Quartz countertops and finishes',
      'Kitchen and bath update',
    ],
    photoImgs: [
      '../kitchen_bath/pexels-curtis-adams-1694007-36777883.jpg',
      '../kitchen_bath/pexels-curtis-adams-1694007-36777896.jpg',
      '../kitchen_bath/pexels-curtis-adams-1694007-6510954.jpg',
      '../kitchen_bath/pexels-curtis-adams-1694007-8186489.jpg',
      '../kitchen_bath/pexels-peter-vang-2157328093-35493890.jpg',
      '../kitchen_bath/new.jpg',
    ],
    iconPath: `<rect x="2" y="7" width="20" height="15" rx="2"/><path d="M16 22V3.5a1.5 1.5 0 00-3 0V7"/>`,
  },
  {
    slug: 'basement-finishing',
    title: 'Basement Finishing',
    shortDesc: 'Legal suites, family rooms, home gyms, theatres — unlock your lower level.',
    intro: 'Transform your lower level into a comfortable, useful living space for family, guests, work, or rental potential.',
    heroImg: '../basement/new%20header.jpg',
    includes: [
      'Finished basements',
      'Entertainment rooms',
      'Home offices and gyms',
      'Basement bathrooms',
      'Flooring, drywall, lighting, and trim',
      'Layout planning and finishing',
    ],
    photos: [
      'Finished basement living area',
      'Basement rec room',
      'Basement bedroom and layout',
      'Finished basement stairway',
      'Basement bathroom',
      'Open basement space',
    ],
    photoImgs: [
      '../basement/pexels-curtis-adams-1694007-11593501.jpg',
      '../basement/pexels-curtis-adams-1694007-15062161.jpg',
      '../basement/pexels-curtis-adams-1694007-36777934.jpg',
      '../basement/pexels-peter-vang-2157328093-35493889.jpg',
      '../basement/pexels-peter-vang-2157328093-35539079.jpg',
      '../basement/header.jpg',
    ],
    iconPath: `<path d="M2 20h20M4 20V10l8-6 8 6v10"/><path d="M10 20v-6h4v6"/>`,
  },
  {
    slug: 'outdoor-living',
    title: 'Outdoor Living',
    shortDesc: 'Patios, decks, pergolas, interlock, landscaping, and exterior upgrades.',
    intro: 'Upgrade your exterior space with functional and inviting outdoor living areas.',
    heroImg: '../outdoor_living/new%20header.png',
    includes: [
      'Decks and patios',
      'Interlock and hardscaping',
      'Fencing',
      'Landscaping upgrades',
      'Roofing repair or replacement',
      'Exterior improvements',
    ],
    photos: [
      'Outdoor living space',
      'Patio and hardscaping',
      'Deck and exterior area',
      'Landscaping project',
      'Outdoor upgrade',
      'Exterior renovation',
    ],
    photoImgs: [
      '../outdoor_living/7f1fdde8-f1a9-4878-a2fa-5a084d4fc910.png',
      '../outdoor_living/a83ef307-7e75-4054-abf6-1b0860e751901.png',
      '../outdoor_living/a83ef307-7e75-4054-abf6-1b0860e751902.png',
      '../outdoor_living/a83ef307-7e75-4054-abf6-1b0860e751903.png',
      '../outdoor_living/dwa.png',
      '../outdoor_living/yard.png',
    ],
    iconPath: `<path d="M12 22V12M12 12C12 12 8 10 5 6c4 1 7 3 7 6zM12 12c0 0 4-2 7-6-4 1-7 3-7 6z"/><path d="M5 22h14"/>`,
  },
  {
    slug: 'commercial-construction',
    title: 'Commercial Construction',
    shortDesc: 'Commercial builds, renovations, and fit-outs completed to code and on schedule.',
    intro: 'Commercial renovation and construction support for businesses that need professional, code-conscious project delivery.',
    heroImg: '../commercial/header.png',
    includes: [
      'Commercial renovations',
      'Office and workspace improvements',
      'Restaurant and hospitality spaces',
      'Plaza and retail units',
      'Scheduling and coordination',
      'Final preparation for business use',
    ],
    photos: [
      'Commercial renovation',
      'Commercial interior build-out',
      'Commercial space',
      'Office renovation',
      'Commercial project',
      'Commercial exterior',
    ],
    photoImgs: [
      '../commercial/9a7c3ab8-86d3-4e1e-aa00-6185a7c61847.png',
      '../commercial/9fc0e7b4-c477-4cba-98c0-481e827f7275.png',
      '../commercial/commercial.png',
      '../commercial/office.png',
      '../commercial/pexels-mikebirdy-6584468.jpg',
      '../commercial/pexels-ottovonrascon-10324970.jpg',
    ],
    iconPath: `<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>`,
  },
  {
    slug: 'retail-office',
    title: 'Retail & Office',
    shortDesc: 'Retail fit-outs and office renovations designed for productivity and client experience.',
    intro: 'Retail and office renovations designed to support your brand, workflow, and customer experience.',
    heroImg: '../services_photos/office.png',
    includes: [
      'Office renovations',
      'Retail fit-outs',
      'Reception and client-facing areas',
      'Staff workspaces',
      'Flooring, lighting, and finishes',
      'Layout improvements',
    ],
    photos: [],
    galleryComingSoon: true,
    iconPath: `<path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18"/><path d="M16 10a4 4 0 01-8 0"/>`,
  },
  {
    slug: 'institutional-specialty',
    title: 'Institutional & Specialty',
    shortDesc: 'Schools, healthcare, sports, and specialty-use spaces with project-specific requirements.',
    intro: 'Specialty spaces require careful planning, coordination, and attention to project-specific needs.',
    heroImg: '../services_photos/institutional.png',
    includes: [
      'Schools and education spaces',
      'Healthcare-related spaces',
      'Sports and activity spaces',
      'Industrial or specialty-use areas',
      'Code-conscious coordination',
      'Durable finish planning',
    ],
    photos: [],
    galleryComingSoon: true,
    iconPath: `<path d="M3 21h18M5 21V7l7-4 7 4v14"/><path d="M9 21V11h6v10"/>`,
  },
  {
    slug: 'custom-build-additions',
    title: 'Custom Build & Additions',
    shortDesc: 'Home additions, custom builds, and major remodels designed around your long-term needs.',
    intro: 'From home additions to major remodels, Greatland helps turn bigger ideas into buildable plans.',
    heroImg: '../services_photos/custom.png',
    includes: [
      'Home additions',
      'Major remodels',
      'Structural renovation coordination',
      'Custom layout planning',
      'Permit-aware project support',
      'Full project management',
    ],
    photos: [],
    galleryComingSoon: true,
    iconPath: `<polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/><line x1="12" y1="22" x2="12" y2="15.5"/><polyline points="22 8.5 12 15.5 2 8.5"/>`,
  },
];

const PROCESS_STEPS = [
  { num: '01', title: 'Consultation', desc: 'We visit your space, listen to your goals, and get a clear picture of the project scope.' },
  { num: '02', title: 'Planning & Estimate', desc: 'We put together a detailed estimate with clear pricing and timelines, no surprises.' },
  { num: '03', title: 'Material & Finish Selection', desc: 'We guide you through material and finish choices that suit your taste and budget.' },
  { num: '04', title: 'Construction', desc: 'Our licensed team gets to work with regular updates so you always know where things stand.' },
  { num: '05', title: 'Final Walkthrough', desc: 'We walk through every detail together before we call it done.' },
];

function renderServiceDetail(slug) {
  const s = SERVICES.find(x => x.slug === slug);
  if (!s) return;

  document.title = s.title + ' | Greatland Construction';
  document.querySelector('meta[name="description"]').content =
    s.intro + ' Serving the GTA. Book a free on-site estimate today.';

  const includesHTML = s.includes.map(item => `
    <li style="display:flex;align-items:flex-start;gap:13px;padding:15px 0;border-bottom:1px solid rgba(1,1,1,.07);">
      <span style="flex-shrink:0;width:22px;height:22px;background:#FCB816;border-radius:6px;display:flex;align-items:center;justify-content:center;margin-top:2px;">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#010101" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      </span>
      <span style="font-size:.97rem;line-height:1.65;color:rgba(1,1,1,.72);">${item}</span>
    </li>`).join('');

  const processHTML = PROCESS_STEPS.map((step, i) => `
    <div class="fu d${i+1}" style="display:flex;gap:20px;align-items:flex-start;padding:18px 0;border-top:1px solid rgba(1,1,1,.07);">
      <div style="flex-shrink:0;width:52px;height:52px;background:#FCB816;border-radius:14px;display:flex;align-items:center;justify-content:center;">
        <span style="font-family:'Montserrat',sans-serif;font-weight:900;font-size:.88rem;color:#010101;">${step.num}</span>
      </div>
      <div style="padding-top:2px;">
        <h4 style="font-family:'Montserrat',sans-serif;font-weight:800;font-size:1rem;margin-bottom:6px;letter-spacing:-.02em;">${step.title}</h4>
        <p style="font-size:.9rem;line-height:1.72;color:rgba(1,1,1,.54);">${step.desc}</p>
      </div>
    </div>`).join('');

  const photosHTML = s.galleryComingSoon
    ? `<div style="grid-column:1/-1;border-radius:18px;background:#f4f3ee;border:1.5px dashed rgba(1,1,1,.13);padding:64px 32px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;">
        <div style="width:52px;height:52px;background:#FCB816;border-radius:14px;display:flex;align-items:center;justify-content:center;">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#010101" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
        </div>
        <h3 style="font-family:'Montserrat',sans-serif;font-weight:800;font-size:1.2rem;letter-spacing:-.02em;color:#010101;margin:0;">Coming Soon</h3>
        <p style="font-size:.9rem;color:rgba(1,1,1,.42);text-align:center;max-width:280px;line-height:1.65;margin:0;">Project photos will be added soon.</p>
      </div>`
    : s.photos.map((label, i) => {
        const src = (s.photoImgs && s.photoImgs[i])
          ? s.photoImgs[i]
          : `https://placehold.co/800x600/e8e4d8/7a7060?text=${encodeURIComponent(label.replace(/ /g, '+'))}`;
        return `
        <div class="ph-card fu d${(i % 6) + 1}" style="border-radius:18px;overflow:hidden;aspect-ratio:4/3;">
          <img src="${src}"
               alt="${label}" loading="lazy"
               style="width:100%;height:100%;object-fit:cover;display:block;transition:transform .5s cubic-bezier(.22,1,.36,1);"
               onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
        </div>`;
      }).join('');

  document.getElementById('page-shell').innerHTML = `
  <!-- NAV -->
  <header id="nav" style="position:fixed;top:0;left:0;right:0;z-index:100;background:#FFFFF6;border-bottom:1px solid rgba(1,1,1,.07);transition:box-shadow .3s;">
    <div style="max-width:1280px;margin:0 auto;padding:0 24px;">
      <div style="display:flex;align-items:center;justify-content:space-between;padding:13px 0;">
        <a href="../index.html" style="display:flex;align-items:center;">
          <img src="../brand_assets/brand_logo.png" alt="Greatland Construction" style="height:62px;width:auto;">
        </a>
        <nav id="dnav" style="display:flex;align-items:center;gap:30px;">
          <a href="../index.html" class="nl">Home</a>
          <a href="../about.html" class="nl">About</a>
          <a href="../services/index.html" class="nl act">Services</a>
          <a href="../projects/index.html" class="nl">Projects</a>
          <a href="../contact.html" class="nl">Contact</a>
        </nav>
        <a href="../contact.html" class="btn bkk-submit" id="dbtn" style="font-size:.84rem;padding:11px 22px;">
          Book Estimate
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
        <button id="hbtn" class="hbg" aria-label="Toggle menu" style="display:none;flex-direction:column;gap:6px;background:none;border:none;padding:8px;cursor:pointer;">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
    <div id="mob-nav" style="display:none;background:#FFFFF6;padding:0 24px 24px;border-bottom:1px solid rgba(1,1,1,.08);">
      <div style="border-top:1px solid rgba(1,1,1,.1);padding-top:18px;display:flex;flex-direction:column;gap:2px;">
        <a href="../index.html" class="nl" style="padding:11px 0;border-bottom:1px solid rgba(1,1,1,.07);">Home</a>
        <a href="../about.html" class="nl" style="padding:11px 0;border-bottom:1px solid rgba(1,1,1,.07);">About</a>
        <a href="../services/index.html" class="nl act" style="padding:11px 0;border-bottom:1px solid rgba(1,1,1,.07);">Services</a>
        <a href="../projects/index.html" class="nl" style="padding:11px 0;border-bottom:1px solid rgba(1,1,1,.07);">Projects</a>
        <a href="../contact.html" class="nl" style="padding:11px 0;">Contact</a>
        <a href="../contact.html" class="btn bkk-submit" style="margin-top:14px;justify-content:center;">Book a Free Estimate</a>
      </div>
    </div>
  </header>

  <!-- HERO -->
  <section style="padding-top:88px;">
    <div style="position:relative;height:62vh;min-height:420px;overflow:hidden;">
      <img id="svc-hero-img" src="${s.heroImg}" alt="${s.title}"
           style="width:100%;height:100%;object-fit:cover;display:block;">
      <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(1,1,1,.72) 0%,rgba(1,1,1,.22) 50%,transparent 100%);"></div>
      <div style="position:absolute;bottom:0;left:0;right:0;padding:48px 24px;">
        <div style="max-width:1280px;margin:0 auto;">
          <a href="../services/index.html" style="display:inline-flex;align-items:center;gap:8px;font-family:'Montserrat',sans-serif;font-weight:700;font-size:.82rem;color:#010101;text-decoration:none;margin-bottom:18px;background:#FCB816;padding:10px 18px 10px 14px;border-radius:100px;transition:background .25s cubic-bezier(.22,1,.36,1),color .25s;" onmouseover="this.style.background='#010101';this.style.color='#FCB816'" onmouseout="this.style.background='#FCB816';this.style.color='#010101'">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
            All Services
          </a>
          <h1 style="font-family:'Montserrat',sans-serif;font-weight:900;font-size:clamp(2.2rem,4.5vw,3.8rem);color:#fff;line-height:1.06;letter-spacing:-.03em;margin-bottom:14px;">${s.title}</h1>
          <p style="font-size:1.05rem;line-height:1.72;color:rgba(255,255,255,.78);max-width:520px;margin-bottom:28px;">${s.intro}</p>
          <a href="../contact.html" class="btn bkk-submit" style="font-size:.93rem;padding:15px 28px;">
            Book a Free On-Site Estimate
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- WHAT WE HANDLE + PROCESS -->
  <section style="padding:80px 0;background:#fff;">
    <div style="max-width:1280px;margin:0 auto;padding:0 24px;">
      <div id="twocol" style="display:grid;grid-template-columns:1fr 1fr;gap:72px;align-items:start;">

        <!-- What We Handle -->
        <div class="fu">
          <h2 style="font-family:'Montserrat',sans-serif;font-weight:900;font-size:clamp(1.8rem,3vw,2.6rem);letter-spacing:-.03em;line-height:1.08;margin-bottom:10px;">What We Handle</h2>
          <p style="font-size:.97rem;line-height:1.78;color:rgba(1,1,1,.52);margin-bottom:28px;">Here's a clear look at what's covered when you work with us on ${s.title.toLowerCase()}.</p>
          <ul style="list-style:none;padding:0;margin:0;border-top:1px solid rgba(1,1,1,.07);">
            ${includesHTML}
          </ul>
        </div>

        <!-- Process -->
        <div class="fu d2">
          <h2 style="font-family:'Montserrat',sans-serif;font-weight:900;font-size:clamp(1.8rem,3vw,2.6rem);letter-spacing:-.03em;line-height:1.08;margin-bottom:10px;">Our Process</h2>
          <p style="font-size:.97rem;line-height:1.78;color:rgba(1,1,1,.52);margin-bottom:28px;">A simple, transparent process from first call to final walkthrough.</p>
          <div style="display:flex;flex-direction:column;border-bottom:1px solid rgba(1,1,1,.07);">
            ${processHTML}
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- PHOTOS -->
  <section style="padding:0 0 88px;background:#fff;">
    <div style="max-width:1280px;margin:0 auto;padding:0 24px;">
      <div class="fu" style="margin-bottom:36px;">
        <h2 style="font-family:'Montserrat',sans-serif;font-weight:900;font-size:clamp(1.8rem,3vw,2.6rem);letter-spacing:-.03em;line-height:1.08;">Related Photos</h2>
      </div>
      <div id="photo-grid" style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;">
        ${photosHTML}
      </div>
    </div>
  </section>

  <!-- FINAL CTA -->
  <section style="padding:88px 0;background:#FCB816;">
    <div style="max-width:1280px;margin:0 auto;padding:0 24px;text-align:center;">
      <div class="fu">
        <h2 style="font-family:'Montserrat',sans-serif;font-weight:900;font-size:clamp(2.2rem,4vw,3.4rem);letter-spacing:-.03em;line-height:1.06;margin-bottom:18px;max-width:600px;margin-left:auto;margin-right:auto;">Ready to Start Your Project?</h2>
        <p style="font-size:1.05rem;line-height:1.78;color:rgba(1,1,1,.62);max-width:460px;margin:0 auto 36px;">Tell us about your project and our team will help you plan the next step.</p>
        <a href="../contact.html" class="btn bkk-submit" style="font-size:.97rem;padding:17px 32px;">
          Book a Free On-Site Estimate
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer style="background:#010101;color:#fff;padding:60px 0 28px;">
    <div style="max-width:1280px;margin:0 auto;padding:0 24px;">
      <div id="fg" style="display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:44px;margin-bottom:48px;">
        <div>
          <img src="../brand_assets/favicon.png" alt="Greatland Construction" style="height:56px;width:56px;margin-bottom:18px;border-radius:14px;">
          <p style="font-size:.85rem;line-height:1.78;color:rgba(255,255,255,.45);max-width:270px;margin-bottom:22px;">Full-service residential and commercial construction across the Greater Toronto Area. Licensed, insured, and built on trust.</p>
          <div style="display:flex;gap:10px;">
            <a href="https://www.instagram.com/greatlandbear/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style="width:36px;height:36px;background:rgba(255,255,255,.08);border-radius:9px;display:flex;align-items:center;justify-content:center;color:#fff;text-decoration:none;" onmouseover="this.style.background='#FCB816';this.style.color='#010101'" onmouseout="this.style.background='rgba(255,255,255,.08)';this.style.color='#fff'"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
            <a href="https://www.xiaohongshu.com/user/profile/6192aa870000000010009378" target="_blank" rel="noopener noreferrer" aria-label="RedNote" style="width:36px;height:36px;background:rgba(255,255,255,.08);border-radius:9px;display:flex;align-items:center;justify-content:center;color:#fff;text-decoration:none;" onmouseover="this.style.background='#FCB816';this.style.color='#010101'" onmouseout="this.style.background='rgba(255,255,255,.08)';this.style.color='#fff'"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg></a>
            <a href="https://www.youtube.com/@greatlandconstruction/featured" target="_blank" rel="noopener noreferrer" aria-label="YouTube" style="width:36px;height:36px;background:rgba(255,255,255,.08);border-radius:9px;display:flex;align-items:center;justify-content:center;color:#fff;text-decoration:none;" onmouseover="this.style.background='#FCB816';this.style.color='#010101'" onmouseout="this.style.background='rgba(255,255,255,.08)';this.style.color='#fff'"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></a>
          </div>
        </div>
        <div>
          <h4 style="font-family:'Montserrat',sans-serif;font-weight:700;font-size:.82rem;color:#FCB816;letter-spacing:.07em;text-transform:uppercase;margin-bottom:18px;">Services</h4>
          <div style="display:flex;flex-direction:column;gap:9px;">
            <a href="../services/full-home-renovation.html" style="font-size:.83rem;color:rgba(255,255,255,.45);text-decoration:none;" onmouseover="this.style.color='#FCB816'" onmouseout="this.style.color='rgba(255,255,255,.45)'">Home Renovation</a>
            <a href="../services/kitchen-bath.html" style="font-size:.83rem;color:rgba(255,255,255,.45);text-decoration:none;" onmouseover="this.style.color='#FCB816'" onmouseout="this.style.color='rgba(255,255,255,.45)'">Kitchen &amp; Bath</a>
            <a href="../services/basement-finishing.html" style="font-size:.83rem;color:rgba(255,255,255,.45);text-decoration:none;" onmouseover="this.style.color='#FCB816'" onmouseout="this.style.color='rgba(255,255,255,.45)'">Basement Finishing</a>
            <a href="../services/outdoor-living.html" style="font-size:.83rem;color:rgba(255,255,255,.45);text-decoration:none;" onmouseover="this.style.color='#FCB816'" onmouseout="this.style.color='rgba(255,255,255,.45)'">Outdoor Living</a>
            <a href="../services/commercial-construction.html" style="font-size:.83rem;color:rgba(255,255,255,.45);text-decoration:none;" onmouseover="this.style.color='#FCB816'" onmouseout="this.style.color='rgba(255,255,255,.45)'">Commercial</a>
          </div>
        </div>
        <div>
          <h4 style="font-family:'Montserrat',sans-serif;font-weight:700;font-size:.82rem;color:#FCB816;letter-spacing:.07em;text-transform:uppercase;margin-bottom:18px;">Company</h4>
          <div style="display:flex;flex-direction:column;gap:9px;">
            <a href="../about.html" style="font-size:.83rem;color:rgba(255,255,255,.45);text-decoration:none;" onmouseover="this.style.color='#FCB816'" onmouseout="this.style.color='rgba(255,255,255,.45)'">About Us</a>
            <a href="../projects/index.html" style="font-size:.83rem;color:rgba(255,255,255,.45);text-decoration:none;" onmouseover="this.style.color='#FCB816'" onmouseout="this.style.color='rgba(255,255,255,.45)'">Projects</a>
            <a href="../contact.html" style="font-size:.83rem;color:rgba(255,255,255,.45);text-decoration:none;" onmouseover="this.style.color='#FCB816'" onmouseout="this.style.color='rgba(255,255,255,.45)'">Contact</a>
          </div>
        </div>
        <div>
          <h4 style="font-family:'Montserrat',sans-serif;font-weight:700;font-size:.82rem;color:#FCB816;letter-spacing:.07em;text-transform:uppercase;margin-bottom:18px;">Contact</h4>
          <div style="display:flex;flex-direction:column;gap:10px;">
            <a href="tel:+14164565666" style="font-size:.83rem;color:rgba(255,255,255,.45);text-decoration:none;">416-456-5666</a>
            <a href="mailto:greatlandconstruction@hotmail.com" style="font-size:.83rem;color:rgba(255,255,255,.45);text-decoration:none;">greatlandconstruction@hotmail.com</a>
            <span style="font-size:.83rem;color:rgba(255,255,255,.45);">Greater Toronto Area, ON</span>
          </div>
        </div>
      </div>
      <div style="border-top:1px solid rgba(255,255,255,.08);padding-top:22px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px;">
        <p style="font-size:.77rem;color:rgba(255,255,255,.28);">© 2025 Greatland Construction. All rights reserved.</p>
        <div style="display:flex;gap:22px;">
          <a href="#" style="font-size:.77rem;color:rgba(255,255,255,.28);text-decoration:none;">Privacy Policy</a>
          <a href="#" style="font-size:.77rem;color:rgba(255,255,255,.28);text-decoration:none;">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>`;

  /* ── Post-inject wiring ── */

  /* Nav scroll shadow */
  const navEl = document.getElementById('nav');
  window.addEventListener('scroll', () => navEl.classList.toggle('sc', window.scrollY > 10), { passive: true });

  /* Hamburger */
  const hbtn = document.getElementById('hbtn');
  const mobNav = document.getElementById('mob-nav');
  hbtn.addEventListener('click', () => {
    hbtn.classList.toggle('op');
    mobNav.style.display = mobNav.style.display === 'block' ? 'none' : 'block';
  });

  /* Responsive: hide/show desktop nav */
  function applyResponsive() {
    const mobile = window.innerWidth <= 768;
    document.getElementById('dnav').style.display = mobile ? 'none' : 'flex';
    document.getElementById('dbtn').style.display = mobile ? 'none' : 'inline-flex';
    hbtn.style.display = mobile ? 'flex' : 'none';
  }
  applyResponsive();
  window.addEventListener('resize', applyResponsive);

  /* Two-col responsive */
  function applyTwoCol() {
    const tc = document.getElementById('twocol');
    if (tc) tc.style.gridTemplateColumns = window.innerWidth <= 900 ? '1fr' : '1fr 1fr';
  }
  applyTwoCol();
  window.addEventListener('resize', applyTwoCol);

  /* Photo grid responsive */
  function applyPhotoGrid() {
    const pg = document.getElementById('photo-grid');
    if (!pg) return;
    if (window.innerWidth <= 540) pg.style.gridTemplateColumns = '1fr';
    else if (window.innerWidth <= 900) pg.style.gridTemplateColumns = 'repeat(2,1fr)';
    else pg.style.gridTemplateColumns = 'repeat(3,1fr)';
  }
  applyPhotoGrid();
  window.addEventListener('resize', applyPhotoGrid);

  /* Footer responsive */
  function applyFooter() {
    const fg = document.getElementById('fg');
    if (!fg) return;
    if (window.innerWidth <= 500) fg.style.gridTemplateColumns = '1fr';
    else if (window.innerWidth <= 900) { fg.style.gridTemplateColumns = '1fr 1fr'; fg.style.gap = '30px'; }
    else { fg.style.gridTemplateColumns = '2fr 1fr 1fr 1fr'; fg.style.gap = '44px'; }
  }
  applyFooter();
  window.addEventListener('resize', applyFooter);

  /* Intersection observer for .fu elements */
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('iv'); obs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fu').forEach(el => obs.observe(el));
}
