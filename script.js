// ─── TRIP CONFIG ───────────────────────────────────────────────────────────
// Edit this object to customize the trip. That's it — no other files to touch.

const TRIP = {
  name: "Summer 2026",
  dates: "Jun 26 – Aug 1, 2026",
  crew: "Charlcye + Eiman",
  stats: {
    days: 36,
    cities: 7,
    people: 2,
  },

  // Each stop: { date, title, flag, note (optional), events[] }
  // Event tags: "food" | "activity" | "travel" | "lodging" | "free" | "event"
  stops: [
    {
      date: "Jun 26 – Jul 1 · 5 days",
      title: "Austin, TX",
      flag: "🇺🇸",
      note: "🏠 Home base · Feels like ~105°F with 60% humidity — stay hydrated, limit time outside midday.",
      events: [
        { time: "Jul 1", name: "Depart for Vancouver", detail: "Flight details TBD", tag: "travel" },
      ],
    },
    {
      date: "Jul 1 – Jul 5 · 4 days",
      title: "Vancouver, BC",
      flag: "🇨🇦",
      note: "🌡️ Feels like 83°F · Cool evenings — bring a light jacket. No time adjustment needed vs Austin.",
      events: [
        { time: "Jul 2",    name: "FIFA World Cup Match ⚽", detail: "Vancouver venue — check ticket details", tag: "event" },
        { time: "Evening",  name: "AnnaLena",               detail: "Michelin 1-star tasting menu · Book weeks ahead · Closed Mondays", tag: "food" },
        { time: "TBD",      name: "Circle Wellness Granville Island", detail: "2-hr private wellness pod + cold plunge · Book 120-min session", tag: "activity" },
      ],
    },
    {
      date: "Jul 6 – Jul 10 · 4 days",
      title: "Paris, France",
      flag: "🇫🇷",
      note: "🌡️ Feels like 93°F · Some humidity bump, rain likely — pack compact umbrella. OOO block: 5pm–11pm EDT.",
      events: [
        { time: "Jul 8–9",  name: "RAISE Summit 🎤",         detail: "Conference — block calendar for full days", tag: "event" },
        { time: "Morning",  name: "Musée de la Vie Romantique", detail: "Free · Hidden in Montmartre · Garden café · 45 min max", tag: "activity" },
        { time: "Evening",  name: "Neighborhood Bistro Dinner", detail: "Le Comptoir du Relais or similar — walk-in friendly", tag: "food" },
      ],
    },
    {
      date: "Jul 11 – Jul 17 · 6 days",
      title: "Madeira, Portugal",
      flag: "🇵🇹",
      note: "🌡️ Feels like 79°F · Most comfortable stop of the trip — sea breeze, no extreme heat. OOO block: 6pm–midnight EDT.",
      events: [
        { time: "Morning",  name: "Cabo Girão Glass Skywalk", detail: "580m sea cliff · Glass floor · €5 · 30 min", tag: "activity" },
        { time: "Morning",  name: "Palheiro Gardens",         detail: "Misty subtropical gardens above Funchal · Café on site · Go early", tag: "activity" },
      ],
    },
    {
      date: "Jul 18 – Jul 22 · 4 days",
      title: "London, UK",
      flag: "🇬🇧",
      note: "🌡️ Feels like 82°F · Drizzly — ~10 rain days avg in July. Bring umbrella + one smart dinner outfit. OOO block: 6pm–midnight EDT.",
      events: [
        { time: "Evening",  name: "Evelyn's Table",           detail: "12-seat chef's counter below a Soho pub · Asian-influenced British tasting menu · Book at midnight UK time when reservations open", tag: "food" },
        { time: "Daytime",  name: "Borough Market + Thames Walk", detail: "No tickets needed · Half day", tag: "activity" },
      ],
    },
    {
      date: "Jul 23 – Jul 28 · 5 days",
      title: "Phu Quoc, Vietnam",
      flag: "🇻🇳",
      note: "🌡️ Feels like 93°F with 82–86% humidity · Rainy season — heavy/unpredictable showers. Beach mornings only (before 10am), resort/AC afternoons. OOO block: 9am–5pm EDT (near-total NYC blackout).",
      events: [
        { time: "Day 1",    name: "InterContinental HARNN Heritage Spa", detail: "90-min couples treatment · Book immediately on arrival", tag: "activity" },
        { time: "Morning",  name: "Beach Time",                detail: "Before 10am only — UV and heat index spike fast after that", tag: "free" },
        { time: "Evening",  name: "Night Market Seafood",      detail: "Best food of Vietnam leg — go hungry", tag: "food" },
      ],
    },
    {
      date: "Jul 29 – Aug 1 · 3 days",
      title: "Da Nang, Vietnam",
      flag: "🇻🇳",
      note: "🌡️ Feels like 110°F with 88–90% humidity · Hottest feels-like of the entire trip. Plan ALL outdoor activities at sunrise. OOO block: 9am–5pm EDT.",
      events: [
        { time: "7:00am",   name: "Marble Mountains",         detail: "Caves + Buddhist shrines inside cliffs · 5 min from beach · Go 7am sharp, done by 9am", tag: "activity" },
        { time: "Final eve",name: "Gypsy Rooftop Restaurant 🎉", detail: "Michelin-recognized · 4.9 stars · Panoramic views · Trip's closing dinner", tag: "food" },
      ],
    },
  ],
};

// ─── RENDER ────────────────────────────────────────────────────────────────

document.getElementById("trip-name").textContent   = TRIP.name;
document.getElementById("trip-dates").textContent  = TRIP.dates;
document.getElementById("trip-crew").textContent   = TRIP.crew;
document.getElementById("stat-days").textContent   = TRIP.stats.days;
document.getElementById("stat-cities").textContent = TRIP.stats.cities;
document.getElementById("stat-people").textContent = TRIP.stats.people;

const container = document.getElementById("days-container");

TRIP.stops.forEach((stop, i) => {
  const card = document.createElement("div");
  card.className = "day-card";

  const eventsHTML = stop.events.map(ev => `
    <div class="event">
      <span class="event-time">${ev.time}</span>
      <div class="event-dot"></div>
      <div class="event-content">
        <div class="event-name">${ev.name}</div>
        ${ev.detail ? `<div class="event-detail">${ev.detail}</div>` : ""}
        <span class="event-tag tag-${ev.tag}">${capitalize(ev.tag)}</span>
      </div>
    </div>
  `).join("");

  const noteHTML = stop.note
    ? `<div class="day-note">${stop.note}</div>`
    : "";

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
      ${noteHTML}
      <div class="events">${eventsHTML}</div>
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

// ─── BOOKING PRIORITY BANNER ───────────────────────────────────────────────

const BOOKING_PRIORITY = [
  { name: "Evelyn's Table", detail: "Book at midnight UK time when reservations open", urgency: "high" },
  { name: "AnnaLena",       detail: "Book now — weeks out, closed Mondays", urgency: "high" },
  { name: "HARNN Heritage Spa", detail: "Book day 1 of Phu Quoc arrival", urgency: "med" },
];

const bookingContainer = document.getElementById("booking-priority");
if (bookingContainer) {
  bookingContainer.innerHTML = BOOKING_PRIORITY.map(b => `
    <div class="booking-item urgency-${b.urgency}">
      <div class="booking-name">${b.name}</div>
      <div class="booking-detail">${b.detail}</div>
    </div>
  `).join("");
}

// ─── TIMEZONE WIDGET ──────────────────────────────────────────────────────

const ZONES = [
  { city: "Austin",    tz: "America/Chicago",     isYou: true },
  { city: "New York / Cyborg", tz: "America/New_York" },
  { city: "Vancouver", tz: "America/Vancouver" },
  { city: "Paris",     tz: "Europe/Paris" },
  { city: "Madeira",   tz: "Atlantic/Madeira" },
  { city: "London",    tz: "Europe/London" },
  { city: "Phu Quoc",  tz: "Asia/Ho_Chi_Minh" },
  { city: "Da Nang",   tz: "Asia/Ho_Chi_Minh" },
];

function callStatus(hour) {
  if (hour >= 8 && hour < 12)  return { label: "Morning ✓",  cls: "status-great" };
  if (hour >= 12 && hour < 18) return { label: "Afternoon ✓", cls: "status-great" };
  if (hour >= 18 && hour < 22) return { label: "Evening ✓",  cls: "status-ok" };
  return { label: "Do not disturb", cls: "status-bad" };
}

function formatMinutes(totalMinutes) {
  const h24 = Math.floor(totalMinutes / 60) % 24;
  const min = totalMinutes % 60;
  const ampm = h24 < 12 ? "AM" : "PM";
  const h12 = h24 % 12 === 0 ? 12 : h24 % 12;
  return `${h12}:${String(min).padStart(2, "0")} ${ampm}`;
}

function getUTCOffset(tz) {
  const now = new Date();
  const tzDate = new Date(now.toLocaleString("en-US", { timeZone: tz }));
  const utcDate = new Date(now.toLocaleString("en-US", { timeZone: "UTC" }));
  return (tzDate - utcDate) / 60000;
}

function renderTimezones(austinMinutes) {
  const grid = document.getElementById("tz-grid");
  const austinOffset = getUTCOffset("America/Chicago");
  const utcMinutes = austinMinutes - austinOffset;

  grid.innerHTML = ZONES.map(zone => {
    const offset = getUTCOffset(zone.tz);
    let localMinutes = (utcMinutes + offset) % 1440;
    if (localMinutes < 0) localMinutes += 1440;

    const localHour = Math.floor(localMinutes / 60);
    const dayDiff = Math.floor((utcMinutes + offset) / 1440);
    const dayLabel = dayDiff > 0 ? `+${dayDiff} day` : dayDiff < 0 ? `${dayDiff} day` : "same day";

    const { label, cls } = callStatus(localHour);
    const isBad = cls === "status-bad";

    return `
      <div class="tz-card${zone.isYou ? " is-you" : ""}${isBad ? " bad-time" : ""}">
        <div class="tz-city">${zone.city}${zone.isYou ? " (you)" : ""}</div>
        <div class="tz-time">${formatMinutes(localMinutes)}</div>
        <div class="tz-day-label">${dayLabel}</div>
        <span class="tz-status ${cls}">${label}</span>
      </div>`;
  }).join("");
}

(function initTimezoneWidget() {
  const slider = document.getElementById("tz-slider");
  const display = document.getElementById("tz-slider-time");

  function update() {
    const val = parseInt(slider.value, 10);
    display.textContent = formatMinutes(val);
    slider.style.setProperty("--fill", `${(val / 1439) * 100}%`);
    renderTimezones(val);
  }

  const now = new Date();
  const austinNow = new Date(now.toLocaleString("en-US", { timeZone: "America/Chicago" }));
  const currentMinutes = austinNow.getHours() * 60 + austinNow.getMinutes();
  slider.value = currentMinutes;

  slider.addEventListener("input", update);
  update();
})();
