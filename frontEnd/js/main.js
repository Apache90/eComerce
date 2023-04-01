/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");
/*===== REMOVE MENU =====*/
const navLink = document.querySelectorAll(".nav_link");
navMenu = document.getElementById("nav-menu");

function linkAction() {
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", scrollActive);

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}

/*===== CHANGE COLOR HEADER =====*/
window.onscroll = () => {
  const nav = document.getElementById("header");
  if (this.scrollY >= 200) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
};
/*===== PAY PRODUCTS =====*/
let productList = [];
let carrito = [];
let total = 0;

function add(productId, price) {
  const product = productList.find((p) => p.id === productId);
  product.stock--;

  console.log(productId, price);
  carrito.push(productId);
  total = total + price;
  document.getElementById("checkout").innerHTML = `Pagar $${total}`;
  displayProducts();
}

async function pay() {
  try {
    const productList = await (
      await fetch("/api/pay", {
        method: "post",
        body: JSON.stringify(carrito),
        headers: {
          "Content-Type": "application/json",
        },
      })
    ).json();
  } catch {
    window.alert("Sin stock");
  }

  carrito = [];
  total = 0;
  await fetchProducts();
  document.getElementById("checkout").innerHTML = `Pagar $${total}`;
}

//-----
function displayProducts() {
  let productsHTML = "";
  productList.forEach((p) => {
    let buttonHTML = `<a class="button-light" onclick="add(${p.id}, ${p.price})">Agregar <i class='bx bxs-arrow-from-left button-icon'></i></a>`;

    if (p.stock <= 0) {
      buttonHTML = `<a class="button-light-disabled" onclick="add(${p.id}, ${p.price})">SIN STOCK</a>`;
    }

    productsHTML += `<article class="sneaker">
        <img src="${p.image}" alt="" class="sneaker_img">
        <span class="sneaker_name">${p.name}</span>
        <span class="sneaker_price">$${p.price}</span>
        <a class="button-light" onclick="add(${p.id}, ${p.price})">Agregar <i class='bx bxs-arrow-from-left button-icon'></i></a>
    </article>`;
  });
  document.getElementById("page-content").innerHTML = productsHTML;
}

async function fetchProducts() {
  productList = await (await fetch("/api/products")).json();
  displayProducts();
}

window.onload = async () => {
  await fetchProducts();
};
