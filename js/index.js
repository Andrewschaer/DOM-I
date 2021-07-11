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
    "h1": "DOM<br> Is<br> Awesome",
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

// Image Updates
const logoImg = document.querySelector('#logo-img')
logoImg.src = siteContent['nav']['img-src']

const headerImg = document.querySelector('#cta-img')
headerImg.src = siteContent['cta']['img-src']

const mainImg = document.querySelector('#middle-img')
mainImg.src = siteContent['main-content']['middle-img-src']

// Nav Updates
const nav = document.querySelector('nav')
const navPrepend = document.createElement('a')
const navAppend = document.createElement('a')
navPrepend.textContent = 'Home'
navAppend.textContent = 'Forum'
nav.prepend(navPrepend)
nav.appendChild(navAppend)

const navItems = document.querySelectorAll('nav a')
navItems[1].textContent = siteContent.nav["nav-item-1"]
navItems[2].textContent = siteContent.nav["nav-item-2"]
navItems[3].textContent = siteContent.nav["nav-item-3"]
navItems[4].textContent = siteContent.nav["nav-item-4"]
navItems[5].textContent = siteContent.nav["nav-item-5"]
navItems[6].textContent = siteContent.nav["nav-item-6"]

navItems.forEach(item => {
  item.style.color = 'green'
})

// CTA Section Updates
const ctaText = document.querySelector('.cta-text h1')
ctaText.innerHTML = siteContent.cta.h1
const ctaBtn = document.querySelector('.cta-text button')
ctaBtn.textContent = siteContent.cta.button

// Main Section Updates
const contentHeaders = document.querySelectorAll(`.main-content h4`)
const contentText = document.querySelectorAll(`.main-content p`)
contentHeaders[0].textContent = siteContent["main-content"]["features-h4"]
contentHeaders[1].textContent = siteContent["main-content"]["about-h4"]
contentHeaders[2].textContent = siteContent["main-content"]["services-h4"]
contentHeaders[3].textContent = siteContent["main-content"]["product-h4"]
contentHeaders[4].textContent = siteContent["main-content"]["vision-h4"]
contentText[0].textContent = siteContent["main-content"]["features-content"]
contentText[1].textContent = siteContent["main-content"]["about-content"]
contentText[2].textContent = siteContent["main-content"]["services-content"]
contentText[3].textContent = siteContent["main-content"]["product-content"]
contentText[4].textContent = siteContent["main-content"]["vision-content"]

// Contact Section Updates
const contactHeader = document.querySelector('.contact h4')
contactHeader.textContent = siteContent.contact["contact-h4"]
const contactText = document.querySelectorAll('.contact p')
contactText[0].textContent = siteContent.contact.address
contactText[1].textContent = siteContent.contact.phone
contactText[2].textContent = siteContent.contact.email

//Footer Section Updates
const footerText = document.querySelector('footer p')
footerText.textContent = siteContent.footer.copyright