const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// UPDATE THE NAV BAR && CHANGE COLOR TO GREEN

const navBar = document.querySelectorAll("nav a");
console.log(navBar);
navBar.forEach((item, i) => {
  item.textContent = siteContent["nav"][`nav-item-${i + 1}`];
  item.style.color = "green";
});

// console.log("this is the navBar", navBar)

// PREPEND AND APPEND CHILD TO NAV BAR

const navigation = document.querySelector("nav");

const newLink = document.createElement("a");

newLink.textContent = "History";

navigation.append(newLink);

newLink.style.color = "green";

const newLink2 = document.createElement("a");

newLink2.textContent = "Pricing";

navigation.prepend(newLink2);

newLink2.style.color = "green";

// H1
const h1 = (document.querySelector("h1").textContent =
  siteContent["cta"]["h1"]);

// BUTTON

const button = (document.querySelector("button").textContent =
  siteContent["cta"]["button"]);

// IMAGE BUTTON

const ctaImg = (document.getElementById("cta-img").src =
  siteContent["cta"]["img-src"]);

// H4's

const headerOne = document.querySelector(".text-content h4");

// console.log(topH4);

headerOne.textContent = siteContent["main-content"]["features-h4"];

const headers = document.querySelectorAll("h4");

console.log(headers);

// console.log(headers[2])

headers[1].textContent = siteContent["main-content"]["about-h4"];
headers[2].textContent = siteContent["main-content"]["services-h4"];

headers[3].textContent = siteContent["main-content"]["product-h4"];

headers[4].textContent = siteContent["main-content"]["vision-h4"];

headers[5].textContent = siteContent["contact"]["contact-h4"];

// PARAGRAPHS

const paragraphOne = document.querySelector(".text-content p");

paragraphOne.textContent = siteContent["main-content"]["features-content"];

const paragraphs = document.querySelectorAll("p");

console.log(paragraphs);

paragraphs[1].textContent = siteContent["main-content"]["about-content"];

paragraphs[2].textContent = siteContent["main-content"]["services-content"];

paragraphs[3].textContent = siteContent["main-content"]["product-content"];

paragraphs[4].textContent = siteContent["main-content"]["vision-content"];

paragraphs[5].textContent = siteContent["contact"]["address"];

paragraphs[6].textContent = siteContent["contact"]["phone"];

paragraphs[7].textContent = siteContent["contact"]["email"];

paragraphs[8].textContent = siteContent["footer"]["copyright"];

// middle image

const middleImg = (document.getElementById("middle-img").src =
  siteContent["main-content"]["middle-img-src"]);
