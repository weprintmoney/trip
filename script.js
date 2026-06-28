// ─── TRIP CONFIG ───────────────────────────────────────────────────────────
// Edit this object to customize the trip. That's it — no other files to touch.

const TRIP = {
  name: "The Trip",
  destination: "Destination TBD",
  dates: "July 4 – July 10, 2026",
  crew: "Charlcye + friends",
  stats: {
    days: 7,
    people: 4,
    activities: 12,
  },

  // Each day: { date, title, note (optional), events[] }
  // Event tags: "food" | "activity" | "travel" | "lodging" | "free"
  days: [
    {
      date: "Saturday, July 4",
      title: "Arrival Day 🛬",
      note: "Meet at the airport by 10am. Group chat for any delays.",
      events: [
        { time: "10:00am", name: "Depart / Fly", detail: "Flight details TBD", tag: "travel" },
        { time: "2:00pm",  name: "Check In",    detail: "Airbnb / Hotel — address TBD", tag: "lodging" },
        { time: "4:00pm",  name: "Explore neighborhood", detail: "Walk around, get oriented", tag: "activity" },
        { time: "7:00pm",  name: "Welcome dinner 🥂",   detail: "Restaurant TBD — everyone picks one dish", tag: "food" },
      ],
    },
    {
      date: "Sunday, July 5",
      title: "Day 2 — TBD",
      events: [
        { time: "9:00am",  name: "Breakfast", detail: "Spot TBD", tag: "food" },
        { time: "11:00am", name: "Activity 1", detail: "Details coming", tag: "activity" },
        { time: "1:00pm",  name: "Lunch",     detail: "TBD", tag: "food" },
        { time: "3:00pm",  name: "Free time",  detail: "Explore on your own", tag: "free" },
        { time: "7:00pm",  name: "Dinner",     detail: "TBD", tag: "food" },
      ],
    },
    {
      date: "Monday, July 6",
      title: "Day 3 — TBD",
      events: [
        { time: "9:00am",  name: "Breakfast", detail: "TBD", tag: "food" },
        { time: "10:30am", name: "Activity 2", detail: "Details coming", tag: "activity" },
        { time: "1:00pm",  name: "Lunch",     detail: "TBD", tag: "food" },
        { time: "7:00pm",  name: "Dinner",     detail: "TBD", tag: "food" },
      ],
    },
    {
      date: "Tuesday, July 7",
      title: "Day 4 — TBD",
      events: [
        { time: "9:00am",  name: "Breakfast", detail: "TBD", tag: "food" },
        { time: "11:00am", name: "Activity 3", detail: "Details coming", tag: "activity" },
        { time: "7:00pm",  name: "Dinner",     detail: "TBD", tag: "food" },
      ],
    },
    {
      date: "Wednesday, July 8",
      title: "Day 5 — TBD",
      events: [
        { time: "9:00am",  name: "Breakfast", detail: "TBD", tag: "food" },
        { time: "11:00am", name: "Activity 4", detail: "Details coming", tag: "activity" },
        { time: "7:00pm",  name: "Dinner",     detail: "TBD", tag: "food" },
      ],
    },
    {
      date: "Thursday, July 9",
      title: "Day 6 — TBD",
      events: [
        { time: "9:00am",  name: "Breakfast", detail: "TBD", tag: "food" },
        { time: "11:00am", name: "Activity 5", detail: "Details coming", tag: "activity" },
        { time: "7:00pm",  name: "Last big dinner 🎉", detail: "TBD", tag: "food" },
      ],
    },
    {
      date: "Friday, July 10",
      title: "Departure Day 🛫",
      note: "Check-out by 11am. Coordinate airport rides.",
      events: [
        { time: "8:00am",  name: "Final breakfast together", detail: "TBD", tag: "food" },
        { time: "10:00am", name: "Check out",  detail: "Pack up, settle up", tag: "lodging" },
        { time: "12:00pm", name: "Head to airport", detail: "Flights TBD", tag: "travel" },
      ],
    },
  ],
};

// ─── RENDER ────────────────────────────────────────────────────────────────

document.getElementById("trip-name").textContent   = TRIP.name;
document.getElementById("trip-dates").textContent  = TRIP.dates;
document.getElementById("trip-crew").textContent   = TRIP.crew;
document.getElementById("stat-days").textContent   = TRIP.stats.days;
document.getElementById("stat-people").textContent = TRIP.stats.people;
document.getElementById("stat-activities").textContent = TRIP.stats.activities;

const container = document.getElementById("days-container");

TRIP.days.forEach((day, i) => {
  const card = document.createElement("div");
  card.className = "day-card";

  const eventsHTML = day.events.map(ev => `
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

  const noteHTML = day.note
    ? `<div class="day-note">📌 ${day.note}</div>`
    : "";

  card.innerHTML = `
    <div class="day-header">
      <div class="day-number">${i + 1}</div>
      <div class="day-header-text">
        <div class="day-date">${day.date}</div>
        <div class="day-title">${day.title}</div>
      </div>
      <svg class="day-toggle" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
    </div>
    <div class="day-body">
      <div class="events">${eventsHTML}</div>
      ${noteHTML}
    </div>
  `;

  // open Day 1 by default; auto-open today's day if applicable
  if (i === 0) card.classList.add("open");

  card.querySelector(".day-header").addEventListener("click", () => {
    card.classList.toggle("open");
  });

  container.appendChild(card);
});

// auto-open today's day card
function autoOpenToday() {
  if (!TRIP.days.length) return;
  // parse first/last dates from TRIP.dates string — optional enhancement
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
