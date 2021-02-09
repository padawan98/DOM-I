const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


//nav
let nav = document.querySelectorAll('nav a');
for(let i = 0; i < 6; i++)
{
  nav[i].textContent = siteContent["nav"]["nav-item-"+(i+1)];
}

//SIDE IMAGE
let main_img = document.getElementById("cta-img");
main_img.setAttribute('src', siteContent["cta"]["img-src"]);

//H1
let h1 = document.querySelector("h1");
h1.innerHTML = siteContent["cta"]["h1"].split(" ").join("<br>");
//join puts br in between words
//split by space

//button
let button = document.querySelector("button");
button.innerHTML = siteContent["cta"]["button"];

//h4
let h4 = document.querySelectorAll("h4");
h4[0].textContent = siteContent["main-content"]["features-h4"];
h4[1].textContent = siteContent["main-content"]["about-h4"];
h4[2].textContent = siteContent["main-content"]["services-h4"];
h4[3].textContent = siteContent["main-content"]["product-h4"];
h4[4].textContent = siteContent["main-content"]["vision-h4"];
h4[5].textContent = siteContent["contact"]["contact-h4"];
h4.forEach(item => item.style.color = "pink");
//content
let content = document.querySelectorAll("p");
content[0].textContent = siteContent["main-content"]["features-content"];
content[1].textContent = siteContent["main-content"]["about-content"];
content[2].textContent = siteContent["main-content"]["services-content"];
content[3].textContent = siteContent["main-content"]["product-content"];
content[4].textContent = siteContent["main-content"]["vision-content"];
content[5].textContent = siteContent["contact"]["address"];
content[6].textContent = siteContent["contact"]["phone"];
content[7].textContent = siteContent["contact"]["email"];
content[8].textContent = siteContent["footer"]["copyright"];

//big dipper
let bigdip = document.getElementById("middle-img");
bigdip.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//colorchanger
nav.forEach(item => item.style.color = "green");

//appending
let allnav = document.querySelector('nav');
let aboutme = document.createElement('a');
aboutme.textContent = "About me ;)";
allnav.appendChild(aboutme);
aboutme.style.color = "green";

let hugs = document.createElement('a');
hugs.textContent = "Getcha free hug";
allnav.prepend(hugs);
hugs.style.color = "green";