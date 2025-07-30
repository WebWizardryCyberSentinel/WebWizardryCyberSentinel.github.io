import { default as anime } from '../scripts/animejs/lib/anime.es.js';

document.addEventListener("DOMContentLoaded", function()  {

  const events = [
    { id: 1,  date: "2010", story: "blablablabla" },
    { id: 2,  date: "2015", story: "more bladieblabla" },
    { id: 3,  date: "2020", story: "bralbralbralbral" }
  ];


//generating elements for the capacitor
const timeline = document.querySelector(".timeline");
events.foreach(event => {
  const eventElement = document.createElement("div");
  eventElement.classList.add("timeline-event");
  eventElement.innerHTML = `<strong> ${events.date}</strong><p>${events.story}</p>`;
  timeline.appendChild(eventElement);
});


  anime({
    targets: '.timeline-event',
    translateX: 250,
    direction: 'alternate',
    loop: true,
    easing: 'cubicBezier(.5, .05, .1, .3)'
  });
});
