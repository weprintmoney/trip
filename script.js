// ─── TRIP CONFIG ───────────────────────────────────────────────────────────
// Edit this object to customize the trip. That's it — no other files to touch.

const TRIP = {
  name: "The Eiman + Charlcye World Tour 2026",
  dates: "Jul 2 – Aug 1, 2026",
  crew: "Charlcye + Eiman",
  endIso: "2026-08-01T00:00:00-05:00",
  stats: {
    days: 30,
    cities: 6,
    people: 2,
  },

  // Each stop: { iso (start datetime for countdown), date, title, flag, note (optional), events[] }
  // Event tags: "food" | "activity" | "travel" | "lodging" | "free" | "event"
  stops: [
    {
      iso:  "2026-07-02T00:00:00-07:00",
      date: "Jul 2 – Jul 5 · 3 days",
      title: "Vancouver, BC",
      flag: "🇨🇦",
      blurb: "A Pacific coast city framed by mountains, ocean, and old-growth forest. North Vancouver sits across the harbor — quieter, more residential, with direct access to waterfront views and trails.",
      note: "🌡️ Feels like 83°F · Cool evenings — bring a light jacket.",
      address: "2820 Panorama Drive, North Vancouver, BC V7G 1V6",
      photo: "images/vancouver-airbnb.png",
      arrival:   [{ date: "Jul 2",  num: "UA 8015", route: "Austin → Vancouver" }],
      departure: [{ date: "Jul 5",  num: "DL 8676", route: "Vancouver → Paris" }],
      events: [
        {
          time: "8:00 PM (Jul 2)",
          name: "🏆 FIFA World Cup 2026 — Switzerland vs. Algeria",
          detail: "Round of 32 · Match 85 · BC Place Stadium",
          tag: "event",
        },
      ],
    },
    {
      iso:  "2026-07-05T00:00:00+02:00",
      date: "Jul 5 – Jul 10 · 5 days",
      title: "Paris, France",
      flag: "🇫🇷",
      blurb: "France's capital and one of the world's great cities — art, food, history, and architecture at every turn. Home to the Louvre, the Seine, and some of the best food on Earth.",
      note: "🌡️ Feels like 93°F · Some humidity bump, rain likely — pack compact umbrella.",
      address: "Hôtel du Louvre, Paris",
      arrival:   [{ date: "Jul 5",  num: "DL 8676", route: "Vancouver → Paris" }],
      departure: [
        { date: "Jul 10", num: "LH 1051", route: "Paris → Frankfurt" },
        { date: "Jul 10", num: "LH 4410", route: "Frankfurt → Madeira" },
      ],
      events: [
        {
          time: "7:00–8:15 PM (Thu Jul 9)",
          name: "Couple's Photo Session",
          detail: "Hosted by Jon · +11 others · 1.25 hours",
          tag: "activity",
        },
        {
          time: "9:15 PM (Thu Jul 9)",
          name: "Eiffel Tower",
          detail: "Sunset + first sparkle show at 10:00 PM",
          tag: "activity",
        },
        {
          time: "10:00 PM (Thu Jul 9)",
          name: "Dinner at Girafe",
          detail: "2 people · Reservation confirmed",
          tag: "food",
        },
      ],
    },
    {
      iso:  "2026-07-10T00:00:00+01:00",
      date: "Jul 10 – Jul 16 · 6 days",
      title: "Madeira, Portugal",
      flag: "🇵🇹",
      blurb: "A Portuguese island in the Atlantic, known for its dramatic volcanic peaks, lush levada walking trails, and year-round mild climate. Called the Island of Eternal Spring — and it earns it.",
      note: "🌡️ Feels like 79°F · Most comfortable stop of the trip — sea breeze, no extreme heat.",
      address: "Caminho da Fajã 96, Arco da Calheta, Madeira 9370, Portugal",
      photo: "images/madeira-airbnb.avif",
      arrival: [
        { date: "Jul 10", num: "LH 1051", route: "Paris → Frankfurt" },
        { date: "Jul 10", num: "LH 4410", route: "Frankfurt → Madeira" },
      ],
      departure: [{ date: "Jul 16", num: "BA 2717", route: "Funchal → London" }],
      events: [
        { time: "3:00 PM",      name: "Check-in",             tag: "lodging" },
        { time: "6:00–7:00 PM", name: "Massage at the house", photo: "images/madeira-massage.avif", tag: "activity" },
        {
          time: "6:00 AM–1:00 PM (Tue Jul 14)",
          name: "Sunrise Tour of Madeira",
          detail: "Sunrise in secret spots off the tourist path · Hiking mountain peaks · Chasing waterfalls through ancient forest · Walking century-old village paths",
          photo: "images/madeira-tour.avif",
          tag: "activity",
        },
        {
          time: "6:30–9:30 PM (Tue Jul 14)",
          name: "Luxury Catamaran & Dolphins – All Inclusive",
          detail: "Hosted by Maria & Jerome · +22 others · 3 hours on the water",
          photo: "images/madeira-catamaran.avif",
          tag: "activity",
        },
      ],
    },
    {
      iso:  "2026-07-16T00:00:00+01:00",
      date: "Jul 16 – Jul 22 · 6 days",
      title: "London, UK",
      flag: "🇬🇧",
      blurb: "The British capital — a global hub of history, culture, and some genuinely excellent food. Buckingham Palace, the Tate, Hyde Park, and the best of British all within reach.",
      note: "🌡️ Feels like 82°F · Drizzly — ~10 rain days avg in July. Bring umbrella + one smart dinner outfit.",
      address: "Mandarin Oriental Hyde Park, London",
      arrival:   [{ date: "Jul 16", num: "BA 2717", route: "Funchal → London" }],
      departure: [
        { date: "Jul 22", num: "TK 1972", route: "London → Istanbul" },
        { date: "Jul 22", num: "TK 162",  route: "Istanbul → Ho Chi Minh City" },
        { date: "Jul 23", num: "VN 1835", route: "Ho Chi Minh City → Phu Quoc" },
      ],
      events: [
        {
          time: "8:45 PM (Sat Jul 18)",
          name: "Dinner at Evelyn's Table",
          tag: "food",
        },
      ],
    },
    {
      iso:  "2026-07-23T00:00:00+07:00",
      date: "Jul 23 – Jul 27 · 4 days",
      title: "Phu Quoc, Vietnam",
      flag: "🇻🇳",
      blurb: "Vietnam's largest island, off the southwestern coast. Known for white-sand beaches, clear turquoise water, and an unhurried resort pace. July is lush and green — occasional rain, always warm.",
      note: "🌡️ Feels like 93°F with 82–86% humidity · Rainy season — beach mornings only (before 10am).",
      arrival: [
        { date: "Jul 22", num: "TK 1972", route: "London → Istanbul" },
        { date: "Jul 22", num: "TK 162",  route: "Istanbul → Ho Chi Minh City" },
        { date: "Jul 23", num: "VN 1835", route: "Ho Chi Minh City → Phu Quoc" },
      ],
      departure: [{ date: "Jul 27", num: "9G 2962", route: "Phu Quoc → Da Nang" }],
      events: [],
    },
    {
      iso:  "2026-07-27T00:00:00+07:00",
      date: "Jul 27 – Aug 1 · 5 days",
      title: "Da Nang, Vietnam",
      flag: "🇻🇳",
      blurb: "A coastal city in central Vietnam, flanked by the ancient town of Hội An to the south and the Marble Mountains to the north. Long sandy beaches, modern bridges, and a city that moves fast.",
      note: "🌡️ Feels like 110°F with 88–90% humidity · Hottest stop of the trip — plan outdoor activities at sunrise.",
      arrival:   [{ date: "Jul 27", num: "9G 2962", route: "Phu Quoc → Da Nang" }],
      departure: [{ date: "Aug 1",  num: null,       route: "Da Nang → Austin (home)" }],
      events: [],
    },
  ],
};

// ─── RENDER ────────────────────────────────────────────────────────────────

document.getElementById("trip-name").textContent   = TRIP.name;
document.getElementById("trip-dates").textContent  = TRIP.dates;
document.getElementById("stat-days").textContent   = TRIP.stats.days;
document.getElementById("stat-cities").textContent = TRIP.stats.cities;
document.getElementById("stat-people").textContent = TRIP.stats.people;

const container = document.getElementById("days-container");

TRIP.stops.forEach((stop, i) => {
  const card = document.createElement("div");
  card.className = "day-card";

  // About
  const blurbHTML = stop.blurb
    ? `<div class="stop-section">
        <div class="stop-section-label">About</div>
        <p class="stop-blurb">${stop.blurb}</p>
       </div>`
    : "";

  // Weather
  const weatherHTML = stop.note
    ? `<div class="stop-section">
        <div class="stop-section-label">Weather</div>
        <div class="stop-weather">${stop.note}</div>
       </div>`
    : "";

  // Staying
  const lodgingImg = stop.photo
    ? `<img class="card-img" src="${stop.photo}" alt="${stop.title} accommodation" loading="lazy" />`
    : `<div class="card-img-placeholder"><span>🏨</span></div>`;
  const stayingHTML = `
    <div class="stop-section">
      <div class="stop-section-label">Staying</div>
      <div class="lodging-card">
        ${lodgingImg}
        <div class="lodging-name">📍 ${stop.address || "Accommodation TBD"}</div>
      </div>
    </div>`;

  // Doing
  const activitiesHTML = stop.events.length
    ? stop.events.map(ev => {
        const thumb = ev.photo
          ? `<img class="activity-thumb" src="${ev.photo}" alt="${ev.name}" loading="lazy" />`
          : `<div class="activity-thumb activity-thumb-placeholder"><span>📅</span></div>`;
        return `
          <div class="activity-card">
            ${thumb}
            <div class="activity-info">
              ${ev.time ? `<div class="activity-time">${ev.time}</div>` : ""}
              <div class="activity-name">${ev.name}</div>
              ${ev.detail ? `<div class="activity-detail">${ev.detail}</div>` : ""}
              <span class="event-tag tag-${ev.tag}">${capitalize(ev.tag)}</span>
            </div>
          </div>`;
      }).join("")
    : `<div class="activity-tbd">Activities TBD</div>`;

  const doingHTML = `
    <div class="stop-section">
      <div class="stop-section-label">Doing</div>
      <div class="activity-list">${activitiesHTML}</div>
    </div>`;

  function flightLegsHTML(legs) {
    return legs.map(f => `
      <div class="flight-leg">
        ${f.num ? `<span class="flight-num">${f.num}</span>` : ""}
        <span class="flight-route">${f.route}</span>
        <span class="flight-date">${f.date}</span>
      </div>`).join("");
  }

  const flightsHTML = (stop.arrival || stop.departure) ? `
    <div class="stop-flights">
      ${stop.arrival ? `<div class="stop-flight"><span class="flight-dir">↓ Arrive</span><div class="flight-legs">${flightLegsHTML(stop.arrival)}</div></div>` : ""}
      ${stop.departure ? `<div class="stop-flight"><span class="flight-dir">↑ Depart</span><div class="flight-legs">${flightLegsHTML(stop.departure)}</div></div>` : ""}
    </div>` : "";

  card.innerHTML = `
    <div class="day-header">
      <div class="day-number">${stop.flag}</div>
      <div class="day-header-text">
        <div class="day-date">${stop.date}</div>
        <div class="day-title">${stop.title}</div>
      </div>
      <svg class="day-toggle" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
    </div>
    <div class="day-body">
      ${blurbHTML}
      ${weatherHTML}
      ${stayingHTML}
      ${doingHTML}
      ${flightsHTML}
    </div>
  `;

  if (i === 0) card.classList.add("open");

  card.querySelector(".day-header").addEventListener("click", () => {
    card.classList.toggle("open");
  });

  container.appendChild(card);
});

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// ─── TIMESHIFTER ──────────────────────────────────────────────────────────

const TIMESHIFTER = {
  legs: [
    {
      title: "Vancouver → Paris",
      badge: "+9 hrs east · Hard",
      startNote: "Protocol starts Fri Jul 3 — day after FIFA match, still in Vancouver",
      days: [
        {
          date: "Fri Jul 3", location: "Vancouver",
          actions: [
            { type: "light-soft",      label: "Soft light + caffeine",    time: "8–10 AM" },
            { type: "light-bright",    label: "Bright light",             time: "11 AM–4 PM" },
            { type: "caffeine-closed", label: "No caffeine",              time: "after 1 PM" },
            { type: "light-avoid",     label: "Avoid light",              time: "9 PM+" },
            { type: "melatonin",       label: "Melatonin 0.5mg + sleep",  time: "10–11 PM" },
          ]
        },
        {
          date: "Sat Jul 4", location: "Vancouver",
          actions: [
            { type: "sleep",           label: "Sleep ends early",         time: "~4 AM" },
            { type: "light-soft",      label: "Soft light + caffeine",    time: "morning" },
            { type: "melatonin",       label: "Sleep window shifting earlier", time: "earlier" },
          ]
        },
        {
          date: "Sun Jul 5", location: "Vancouver → flight (1:10 PM)",
          actions: [
            { type: "light-avoid",     label: "Avoid light",              time: "early AM" },
            { type: "light-soft",      label: "Soft light + caffeine",    time: "6–9 AM" },
            { type: "light-bright",    label: "Bright light",             time: "10 AM–1 PM" },
            { type: "caffeine-closed", label: "No caffeine",              time: "after 8 AM" },
            { type: "melatonin",       label: "Melatonin + sleep on plane", time: "9–11 PM" },
          ]
        },
        {
          date: "Mon Jul 6", location: "Arrive Paris 7:50 AM ⚠️ Hardest day",
          done: false,
          actions: [
            { type: "light-avoid",     label: "Avoid light on arrival",   time: "7:50 AM" },
            { type: "light-soft",      label: "Soft light + caffeine",    time: "9 AM–1 PM" },
            { type: "light-bright",    label: "Bright light",             time: "3–8 PM" },
            { type: "light-avoid",     label: "Avoid light",              time: "10 PM+" },
            { type: "melatonin",       label: "Melatonin 0.5mg + sleep",  time: "~11 PM" },
          ]
        },
        {
          date: "Tue Jul 7", location: "Paris",
          actions: [
            { type: "light-soft",      label: "Same structure",           time: "morning" },
            { type: "sleep",           label: "Sleep window tightening",  time: "to Paris schedule" },
          ]
        },
        {
          date: "Wed Jul 8", location: "Paris · RAISE Summit",
          done: true,
          actions: [
            { type: "sleep",           label: "✅ Fully shifted — RAISE Summit ready", time: "" },
          ]
        },
      ],
      notes: [
        "Caffeine cutoffs are hard rules — no afternoon espresso on Jul 6 even though you'll be wrecked and it's Paris",
        "Light avoidance = sunglasses indoors if needed, not just staying inside",
        "Jul 6 is the hardest day: land at 7:50 AM after overnight flight, seek light immediately, do NOT sleep in",
        "Melatonin dose: 0.5mg — confirm supply before departing Austin",
      ]
    },
    {
      title: "London → Phu Quoc",
      badge: "+7 hrs east · Hard",
      startNote: "Protocol starts Mon Jul 20 — 2 days before departure",
      days: [
        {
          date: "Mon Jul 20", location: "London",
          actions: [
            { type: "light-soft",      label: "Soft light + caffeine",    time: "8–10 AM" },
            { type: "light-bright",    label: "Bright light",             time: "11 AM–4 PM" },
            { type: "caffeine-closed", label: "No caffeine",              time: "after 1 PM" },
            { type: "light-avoid",     label: "Avoid light",              time: "9 PM+" },
            { type: "melatonin",       label: "Melatonin 0.5mg + sleep",  time: "10–11 PM" },
          ]
        },
        {
          date: "Tue Jul 21", location: "London",
          actions: [
            { type: "sleep",           label: "Sleep ends early",         time: "~4 AM" },
            { type: "light-soft",      label: "Same morning pattern",     time: "morning" },
            { type: "sleep",           label: "Window shifting earlier",  time: "earlier" },
          ]
        },
        {
          date: "Wed Jul 22", location: "London → flight (6:30 PM)",
          actions: [
            { type: "light-soft",      label: "Soft light + caffeine",    time: "5–9 AM" },
            { type: "light-bright",    label: "Bright light",             time: "10 AM–noon" },
            { type: "caffeine-closed", label: "No caffeine",              time: "after 11 AM" },
            { type: "melatonin",       label: "Melatonin + sleep on plane", time: "9–10 PM" },
          ]
        },
        {
          date: "Thu Jul 23", location: "Istanbul (1:50 AM) → HCMC → Phu Quoc (9:30 PM) ⚠️ Most complex day",
          actions: [
            { type: "light-avoid",     label: "Avoid light",              time: "arrival IST" },
            { type: "light-soft",      label: "Soft light + caffeine",    time: "2–7 AM IST" },
            { type: "nap",             label: "Nap — SET HARD ALARM",     time: "8–10 AM IST" },
            { type: "light-bright",    label: "Bright light",             time: "11 AM IST+" },
            { type: "caffeine-closed", label: "No caffeine",              time: "after 11 AM IST" },
            { type: "light-bright",    label: "Bright light on arrival",  time: "until 6 PM HCMC" },
            { type: "light-avoid",     label: "Avoid light",              time: "11 PM HCMC+" },
            { type: "melatonin",       label: "Melatonin + sleep",        time: "~10 PM HCMC" },
          ]
        },
        {
          date: "Fri Jul 24", location: "Phu Quoc",
          actions: [
            { type: "sleep",           label: "Sleep until 7 AM",         time: "7 AM" },
            { type: "light-soft",      label: "Soft light + caffeine",    time: "8 AM–1 PM" },
            { type: "caffeine-closed", label: "No caffeine",              time: "after 2 PM" },
            { type: "light-avoid",     label: "Avoid light",              time: "10 PM+" },
            { type: "melatonin",       label: "Melatonin 0.5mg + sleep",  time: "~11 PM" },
          ]
        },
        {
          date: "Sat Jul 25", location: "Phu Quoc",
          done: true,
          actions: [
            { type: "sleep",           label: "✅ Fully shifted — beach time", time: "" },
          ]
        },
      ],
      notes: [
        "Jul 23 is the most complex execution day — two timezone markers (Istanbul + HCMC), active clock transition mid-transit",
        "The Istanbul layover nap (8–10 AM Istanbul time) is prescribed — take it, but set a hard alarm. Missing the wake cue breaks the shift.",
        "Arrive Phu Quoc 9:30 PM exhausted — avoid light, go straight to melatonin + sleep. Beach can wait.",
        "Adaptation is faster than the Paris leg because you're already partially eastward-shifted from Europe.",
      ]
    },
  ],
  rules: [
    "Caffeine cutoffs > comfort — the afternoon coffee you skip is the reason you sleep on schedule",
    "Light avoidance = active effort — sunglasses indoors, screen brightness down, sleep mask on plane",
    "0.5mg melatonin only — higher doses cause grogginess and don't shift the clock faster",
    "Nap windows have length limits — if a nap is shown, honor the end time with an alarm",
    "Eastward shifts are harder — you're shortening your day against biology; the pre-trip protocol is what makes it work",
    "Don't get on local time by brute force — follow the sequence",
  ]
};

(function initTimeshifter() {
  const container = document.getElementById("ts-legs");
  if (!container) return;

  const CHIP_ICONS = {
    "light-soft":      "☀️",
    "light-bright":    "🟠",
    "light-avoid":     "🚫☀️",
    "caffeine-open":   "☕",
    "caffeine-closed": "🚫☕",
    "sleep":           "😴",
    "nap":             "💤",
    "melatonin":       "🌙",
  };

  TIMESHIFTER.legs.forEach(leg => {
    const panel = document.createElement("details");
    panel.className = "ts-leg";
    panel.open = true;

    const daysHTML = leg.days.map(day => {
      const actionsHTML = day.actions.map(a => `
        <span class="ts-chip ${a.type}">
          ${CHIP_ICONS[a.type] || ""} ${a.label}${a.time ? ` <em>${a.time}</em>` : ""}
        </span>
      `).join("");

      return `
        <div class="ts-day${day.done ? " ts-day-done" : ""}">
          <div class="ts-day-label">
            <span class="ts-day-date">${day.date}</span>
            <span class="ts-day-loc">${day.location}</span>
          </div>
          <div class="ts-actions">${actionsHTML}</div>
        </div>
      `;
    }).join("");

    const notesHTML = leg.notes.map(n => `<li>${n}</li>`).join("");

    panel.innerHTML = `
      <summary class="ts-leg-header">
        <div class="ts-leg-title">${leg.title}</div>
        <span class="ts-badge">${leg.badge}</span>
      </summary>
      <div class="ts-leg-body">
        <p class="ts-start-note">⏱ ${leg.startNote}</p>
        <div class="ts-days">${daysHTML}</div>
        <div class="ts-notes">
          <p class="ts-notes-title">Critical Notes</p>
          <ul>${notesHTML}</ul>
        </div>
      </div>
    `;

    container.appendChild(panel);
  });

  // Rules
  const rulesEl = document.createElement("div");
  rulesEl.className = "ts-rules";
  rulesEl.innerHTML = `
    <p class="ts-rules-title">General Rules</p>
    <ol>${TIMESHIFTER.rules.map(r => `<li>${r}</li>`).join("")}</ol>
  `;
  container.after(rulesEl);
})();

// ─── COUNTDOWN ────────────────────────────────────────────────────────────

(function initCountdown() {
  const labelEl = document.getElementById("cd-label");
  const destEl  = document.getElementById("cd-dest");
  const daysEl  = document.getElementById("cd-days");
  const hrsEl   = document.getElementById("cd-hours");
  const minsEl  = document.getElementById("cd-mins");
  const secsEl  = document.getElementById("cd-secs");
  if (!labelEl) return;

  const milestones = TRIP.stops
    .filter(s => s.iso)
    .map(s => ({ name: s.title, flag: s.flag, ts: new Date(s.iso).getTime(), last: false }));

  if (TRIP.endIso) {
    milestones.push({ name: "Austin", flag: "🏠", ts: new Date(TRIP.endIso).getTime(), last: true });
  }

  function pad(n) { return String(n).padStart(2, "0"); }

  function tick() {
    const now = Date.now();
    const next = milestones.find(m => m.ts > now);

    if (!next) {
      labelEl.textContent = "Thanks for an amazing trip! 🏠";
      destEl.textContent  = "";
      daysEl.textContent  = hrsEl.textContent = minsEl.textContent = secsEl.textContent = "--";
      return;
    }

    const diff = next.ts - now;
    const totalSecs = Math.floor(diff / 1000);
    const days = Math.floor(totalSecs / 86400);
    const hrs  = Math.floor((totalSecs % 86400) / 3600);
    const mins = Math.floor((totalSecs % 3600) / 60);
    const secs = totalSecs % 60;

    labelEl.textContent = next.last ? "Heading home" : "Next stop";
    destEl.textContent  = `${next.flag} ${next.name}`;
    daysEl.textContent  = pad(days);
    hrsEl.textContent   = pad(hrs);
    minsEl.textContent  = pad(mins);
    secsEl.textContent  = pad(secs);
  }

  tick();
  setInterval(tick, 1000);
})();

// ─── GLOBE ────────────────────────────────────────────────────────────────

(async function initGlobe() {
  const container = document.getElementById("globe-wrap");
  if (!container || typeof d3 === "undefined" || typeof topojson === "undefined") return;

  const GLOBE_STOPS = [
    { name: "Vancouver", flag: "🇨🇦", coords: [-123.12, 49.28] },
    { name: "Paris",     flag: "🇫🇷", coords: [  2.35,  48.86] },
    { name: "Funchal",   flag: "🇵🇹", coords: [-16.92,  32.67] },
    { name: "London",    flag: "🇬🇧", coords: [ -0.13,  51.51] },
    { name: "Phu Quoc",  flag: "🇻🇳", coords: [103.98,  10.29] },
    { name: "Da Nang",   flag: "🇻🇳", coords: [108.20,  16.05] },
  ];

  // Pre-interpolate great circle arcs (80 steps each for smooth curves)
  const STEPS = 80;
  const arcs = [];
  for (let i = 0; i < GLOBE_STOPS.length - 1; i++) {
    const interp = d3.geoInterpolate(GLOBE_STOPS[i].coords, GLOBE_STOPS[i + 1].coords);
    arcs.push(Array.from({ length: STEPS + 1 }, (_, t) => interp(t / STEPS)));
  }
  const totalPts = arcs.reduce((s, a) => s + a.length, 0);

  // Size
  const size = Math.min(container.clientWidth || 540, 540);
  const cx = size / 2, cy = size / 2;
  const radius = size / 2 - 16;

  const svg = d3.select(container).append("svg")
    .attr("width", size).attr("height", size);

  // ── Defs ──
  const defs = svg.append("defs");

  // Ocean gradient
  const og = defs.append("radialGradient").attr("id", "globe-ocean").attr("cx", "38%").attr("cy", "35%");
  og.append("stop").attr("offset", "0%").attr("stop-color", "#1d4a8a");
  og.append("stop").attr("offset", "100%").attr("stop-color", "#08111f");

  // Arc glow
  const gf = defs.append("filter").attr("id", "arc-glow")
    .attr("x", "-40%").attr("y", "-40%").attr("width", "180%").attr("height", "180%");
  gf.append("feGaussianBlur").attr("in", "SourceGraphic").attr("stdDeviation", "3.5").attr("result", "blur");
  const fm = gf.append("feMerge");
  fm.append("feMergeNode").attr("in", "blur");
  fm.append("feMergeNode").attr("in", "SourceGraphic");

  // Dot glow
  const df = defs.append("filter").attr("id", "dot-glow")
    .attr("x", "-100%").attr("y", "-100%").attr("width", "300%").attr("height", "300%");
  df.append("feGaussianBlur").attr("in", "SourceGraphic").attr("stdDeviation", "2").attr("result", "blur");
  const dfm = df.append("feMerge");
  dfm.append("feMergeNode").attr("in", "blur");
  dfm.append("feMergeNode").attr("in", "SourceGraphic");

  // ── Projection ──
  const proj = d3.geoOrthographic()
    .scale(radius)
    .translate([cx, cy])
    .clipAngle(90)
    .rotate([123.12, -49.28]); // Start centered on Vancouver

  const geoPath = d3.geoPath().projection(proj);
  const graticule = d3.geoGraticule()();

  // ── Load world data ──
  const world = await fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json")
    .then(r => r.json()).catch(() => null);
  if (!world) return;
  const land = topojson.feature(world, world.objects.land);

  // ── Draw static layers ──
  svg.append("circle").attr("cx", cx).attr("cy", cy).attr("r", radius).attr("fill", "url(#globe-ocean)");
  svg.append("circle").attr("cx", cx).attr("cy", cy).attr("r", radius)
    .attr("fill", "none").attr("stroke", "rgba(255,255,255,0.08)").attr("stroke-width", 1);

  const gratPath  = svg.append("path").attr("fill", "none").attr("stroke", "rgba(255,255,255,0.06)").attr("stroke-width", 0.5);
  const landPath  = svg.append("path").attr("fill", "#2a1e12").attr("stroke", "#4a3520").attr("stroke-width", 0.4);

  // ── Arc paths ──
  const arcPaths = arcs.map(() =>
    svg.append("path")
      .attr("fill", "none")
      .attr("stroke", "#7c6ff7")
      .attr("stroke-width", 2)
      .attr("stroke-linecap", "round")
      .attr("stroke-linejoin", "round")
      .attr("filter", "url(#arc-glow)")
      .attr("opacity", 0)
  );

  // ── Stop markers ──
  const markers = GLOBE_STOPS.map((stop, i) => {
    const g = svg.append("g").attr("opacity", 0);
    g.append("circle").attr("r", 5.5).attr("fill", "#f7c06f").attr("stroke", "#fff")
      .attr("stroke-width", 1.5).attr("filter", "url(#dot-glow)");
    const lbl = g.append("text").text(stop.name)
      .attr("font-size", "11.5px").attr("font-weight", "600")
      .attr("font-family", "'Inter',sans-serif").attr("fill", "#fff")
      .attr("text-anchor", "middle").attr("dy", "-11px")
      .style("text-shadow", "0 1px 4px rgba(0,0,0,0.95)").style("pointer-events", "none");
    return { stop, g, lbl };
  });

  // ── Animation state ──
  let drawProgress = 0;   // 0 → totalPts
  let drawDone = false;
  let rotLambda = 123.12;
  let rotPhi = -49.28;
  let autoRotating = true;
  let dragging = false;
  const DRAW_MS = 8000;
  let startTime = null;

  // Target rotation: follow the drawing cursor
  function cursorCoords(progress01) {
    let idx = Math.floor(progress01 * totalPts);
    let cum = 0;
    for (const arc of arcs) {
      if (idx < cum + arc.length) return arc[idx - cum];
      cum += arc.length;
    }
    return GLOBE_STOPS[GLOBE_STOPS.length - 1].coords;
  }

  function visibleHemisphere(coords) {
    const rot = proj.rotate();
    const center = [-rot[0], -rot[1]];
    return d3.geoDistance(coords, center) < Math.PI / 2;
  }

  function render() {
    proj.rotate([rotLambda, rotPhi]);
    gratPath.attr("d", geoPath(graticule));
    landPath.attr("d", geoPath(land));

    // Arcs — reveal based on drawProgress
    let remaining = drawProgress;
    arcs.forEach((pts, ai) => {
      if (remaining <= 0) { arcPaths[ai].attr("opacity", 0); return; }
      const take = Math.min(Math.floor(remaining), pts.length);
      remaining -= pts.length;
      if (take < 2) { arcPaths[ai].attr("opacity", 0); return; }
      const line = { type: "LineString", coordinates: pts.slice(0, take) };
      arcPaths[ai].attr("d", geoPath(line)).attr("opacity", 0.9);
    });

    // Markers — show stop once its arc has started
    markers.forEach(({ stop, g, lbl }, i) => {
      const arcStartPt = arcs.slice(0, i).reduce((s, a) => s + a.length, 0);
      const show = drawProgress >= arcStartPt;
      if (!show) { g.attr("opacity", 0); return; }
      const p = proj(stop.coords);
      const vis = p && visibleHemisphere(stop.coords);
      g.attr("opacity", vis ? 1 : 0);
      if (vis) {
        g.attr("transform", `translate(${p[0]},${p[1]})`);
        // Flip label below if near top of globe
        lbl.attr("dy", p[1] < cy * 0.5 ? "20px" : "-11px");
      }
    });
  }

  // ── Main loop ──
  d3.timer(elapsed => {
    if (!drawDone) {
      if (!startTime) startTime = elapsed;
      const t = Math.min((elapsed - startTime) / DRAW_MS, 1);
      const eased = d3.easeCubicInOut(t);
      drawProgress = eased * totalPts;

      if (!dragging) {
        const cursor = cursorCoords(eased);
        const tLambda = -cursor[0];
        const tPhi    = Math.max(-50, Math.min(50, -cursor[1] * 0.55));
        rotLambda += (tLambda - rotLambda) * 0.018;
        rotPhi    += (tPhi    - rotPhi)    * 0.018;
      }

      if (t >= 1) {
        drawDone = true;
        drawProgress = totalPts;
      }
    } else {
      if (autoRotating && !dragging) {
        rotLambda -= 0.12;
        rotPhi += (-20 - rotPhi) * 0.008;
      }
    }
    render();
  });

  // ── Drag ──
  let dragPos0 = null, dragRot0 = null;
  svg.style("cursor", "grab").call(d3.drag()
    .on("start", e => {
      dragging = true;
      autoRotating = false;
      dragPos0 = [e.x, e.y];
      dragRot0 = [rotLambda, rotPhi];
      svg.style("cursor", "grabbing");
    })
    .on("drag", e => {
      rotLambda = dragRot0[0] + (e.x - dragPos0[0]) * 0.45;
      rotPhi    = Math.max(-80, Math.min(80, dragRot0[1] - (e.y - dragPos0[1]) * 0.45));
    })
    .on("end", () => {
      dragging = false;
      svg.style("cursor", "grab");
      setTimeout(() => { autoRotating = true; }, 2500);
    })
  );
})();

// ─── TIMEZONE WIDGET ──────────────────────────────────────────────────────

const ZONES = [
  { city: "Austin, Texas",    flag: "🇺🇸", tz: "America/Chicago",    isYou: true },
  { city: "New York / Cyborg",flag: "🇺🇸", tz: "America/New_York" },
  { city: "Vancouver",        flag: "🇨🇦", tz: "America/Vancouver" },
  { city: "Paris",            flag: "🇫🇷", tz: "Europe/Paris" },
  { city: "Madeira",          flag: "🇵🇹", tz: "Atlantic/Madeira" },
  { city: "London",           flag: "🇬🇧", tz: "Europe/London" },
  { city: "Phu Quoc",         flag: "🇻🇳", tz: "Asia/Ho_Chi_Minh" },
  { city: "Da Nang",          flag: "🇻🇳", tz: "Asia/Ho_Chi_Minh" },
];

function fmtMins(m) {
  const h24 = ((Math.floor(m / 60) % 24) + 24) % 24;
  const min = ((m % 60) + 60) % 60;
  const h12 = h24 % 12 === 0 ? 12 : h24 % 12;
  return `${h12}:${String(min).padStart(2,"0")} ${h24 < 12 ? "AM" : "PM"}`;
}

function utcOffset(tz) {
  const now = new Date();
  const a = new Date(now.toLocaleString("en-US", { timeZone: tz }));
  const b = new Date(now.toLocaleString("en-US", { timeZone: "UTC" }));
  return (a - b) / 60000;
}

function offsetLabel(tz) {
  const off = utcOffset(tz);
  const sign = off >= 0 ? "+" : "-";
  const h = Math.floor(Math.abs(off) / 60);
  const m = Math.abs(off) % 60;
  return `UTC${sign}${h}${m ? `:${String(m).padStart(2,"0")}` : ""}`;
}

// Build a gradient where the bright zone (8am–6pm) is anchored to LOCAL time,
// but the x-axis of the bar represents Austin clock time.
// offsetDiffMins = zone's UTC offset minus Austin's UTC offset.
function tzGradient(isYou, offsetDiffMins) {
  const c = isYou
    ? { night: "#8abb29", shoulder: "#a5df3b", day: "#b8ff41" }
    : { night: "#4b4c4d", shoulder: "#575b5c", day: "#6b7071" };

  function colorAt(localMins) {
    const m = ((localMins % 1440) + 1440) % 1440;
    if (m < 360 || m >= 1320) return c.night;
    if (m < 480 || m >= 1080) return c.shoulder;
    return c.day;
  }

  // Convert local time (minutes from local midnight) to Austin-bar position (0–1440)
  function toBar(localMins) {
    return ((localMins - offsetDiffMins) % 1440 + 1440) % 1440;
  }

  // Austin midnight corresponds to local time = offsetDiffMins
  const startColor = colorAt(offsetDiffMins);

  // At each local time boundary, add a hard stop (two points, same position, different color)
  let pts = [{ pos: 0, color: startColor }];
  for (const lb of [360, 480, 1080, 1320]) {
    const barPos = toBar(lb);
    pts.push({ pos: barPos, color: colorAt(lb - 1) }); // color just before boundary
    pts.push({ pos: barPos, color: colorAt(lb + 1) }); // color just after boundary
  }
  pts.push({ pos: 1440, color: startColor });
  pts.sort((a, b) => a.pos - b.pos);

  return "linear-gradient(to right, " +
    pts.map(p => `${p.color} ${(p.pos / 1440 * 100).toFixed(2)}%`).join(", ") +
    ")";
}

(function initTimezoneWidget() {
  const LABEL_W = 200;
  const widget  = document.getElementById("tz-widget");
  const cursor  = document.getElementById("tz-cursor");
  const pill    = document.getElementById("tz-cursor-pill");
  const timeEl  = document.getElementById("tz-cursor-time");
  const rowsEl  = document.getElementById("tz-rows");

  const austinOff = utcOffset("America/Chicago");

  const sortedZones = [...ZONES].sort((a, b) => utcOffset(a.tz) - utcOffset(b.tz));

  rowsEl.innerHTML = sortedZones.map((z, i) => `
    <div class="tz-row">
      <div class="tz-label">
        <span class="tz-name">${z.flag} ${z.city}</span>
        <span class="tz-offset">${offsetLabel(z.tz)}</span>
      </div>
      <div class="tz-bar-wrap" id="tz-bw-${i}">
        <div class="tz-bar" id="tz-bar-${i}"></div>
        <span class="tz-row-time" id="tz-rt-${i}"></span>
      </div>
    </div>`).join("");

  // Apply per-zone gradient now that DOM is built
  sortedZones.forEach((z, i) => {
    const bar = document.getElementById(`tz-bar-${i}`);
    const offsetDiff = utcOffset(z.tz) - austinOff;
    bar.style.background = tzGradient(z.isYou, offsetDiff);
  });

  let austinMins = 720;

  function barW() {
    return widget.offsetWidth - LABEL_W - 24;
  }

  function minsToX(mins) {
    return LABEL_W + (mins / 1440) * barW();
  }

  function xToMins(x) {
    const clamped = Math.min(Math.max(x - LABEL_W, 0), barW());
    return Math.round((clamped / barW()) * 1440 / 15) * 15;
  }

  function render() {
    const x = minsToX(austinMins);
    cursor.style.left = x + "px";
    timeEl.textContent = fmtMins(austinMins);

    const utcMins = austinMins - austinOff;
    sortedZones.forEach((z, i) => {
      const localMins = ((utcMins + utcOffset(z.tz)) % 1440 + 1440) % 1440;
      const rt = document.getElementById(`tz-rt-${i}`);
      const bw = document.getElementById(`tz-bw-${i}`);
      if (!rt || !bw) return;
      rt.textContent = fmtMins(localMins);
      const bwRect = bw.getBoundingClientRect();
      const wRect  = widget.getBoundingClientRect();
      rt.style.left = (x - (bwRect.left - wRect.left)) + "px";
    });
  }

  function startDrag(startX) {
    const wRect = widget.getBoundingClientRect();
    function move(cx) {
      austinMins = xToMins(cx - wRect.left);
      render();
    }
    const mm = e => move(e.clientX);
    const tm = e => move(e.touches[0].clientX);
    const stop = () => {
      document.removeEventListener("mousemove", mm);
      document.removeEventListener("mouseup", stop);
      document.removeEventListener("touchmove", tm);
      document.removeEventListener("touchend", stop);
    };
    document.addEventListener("mousemove", mm);
    document.addEventListener("mouseup", stop);
    document.addEventListener("touchmove", tm, { passive: true });
    document.addEventListener("touchend", stop);
    move(startX);
  }

  pill.addEventListener("mousedown",  e => { e.preventDefault(); startDrag(e.clientX); });
  pill.addEventListener("touchstart", e => startDrag(e.touches[0].clientX), { passive: true });

  widget.addEventListener("click", e => {
    if (pill.contains(e.target)) return;
    const wRect = widget.getBoundingClientRect();
    austinMins = xToMins(e.clientX - wRect.left);
    render();
  });

  window.addEventListener("resize", render);

  const now = new Date();
  const austinNow = new Date(now.toLocaleString("en-US", { timeZone: "America/Chicago" }));
  austinMins = austinNow.getHours() * 60 + austinNow.getMinutes();
  requestAnimationFrame(render);
})();
