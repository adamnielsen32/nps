import { parkInfoTemplate, footerTemplate } from "./templates.mjs";
import enableNavigation from "./navigation.mjs";

function setHeaderInfo(data) {
  const disclaimer = document.querySelector(".disclaimer > a");
  disclaimer.href = data.url;
  disclaimer.innerHTML = data.fullName;

  document.title = data.fullName;

  const heroImg = document.querySelector(".hero-banner img");
  heroImg.src = data.images[0].url;
  heroImg.alt = data.images[0].altText;

  document.querySelector(".hero-banner__title").textContent = data.fullName;
  document.querySelector(".hero-banner__subtitle").innerHTML = `
    <span>${data.designation}</span>
    <span>${data.states}</span>
  `;
}

function setFooter(data) {
  const footerEl = document.querySelector("#park-footer");
  footerEl.insertAdjacentHTML("afterbegin", footerTemplate(data));
}

export default function setHeaderFooter(parkData) {
  setHeaderInfo(parkData);
  setFooter(parkData);
  enableNavigation();
}

