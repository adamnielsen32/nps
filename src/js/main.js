import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

const disclaimer = document.querySelector(".disclaimer > a");
disclaimer.href = parkData.url;
disclaimer.innerHTML = parkData.fullName;

document.title = parkData.fullName;

const heroImg = document.querySelector(".hero-banner img");
heroImg.src = parkData.images[0].url;
heroImg.alt = parkData.images[0].altText;

const heroName = document.querySelector(".hero-banner__title");
const heroSubtitle = document.querySelector(".hero-banner__subtitle");

heroName.textContent = parkData.fullName;
heroSubtitle.innerHTML = `
  <span>${parkData.designation}</span>
  <span>${parkData.states}</span>
`;
