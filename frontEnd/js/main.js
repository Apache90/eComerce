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

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector(".nav_menu a[href*=" + sectionId + "]").classList.add("active");
        }else {
            document.querySelector(".nav_menu a[href*=" + sectionId + "]").classList.remove("active");
        }
    });
}

/*===== CHANGE COLOR HEADER =====*/
window.onscroll = ()=>{
    const nav = document.getElementById('header')
    if(this.scrollY >=200) nav.classList.add('scroll-header');
    else nav.classList.remove('scroll-header')
}

=======


/*===== PAY PRODUCTS =====*/
let products = [];
let total = 0;

function add(product,price){
    console.log(product,price);
    products.push(product);
    total = total + price;
    document.getElementById('pay').innerHTML = `$ ${total}`
}
function pay(){
    window.alert(products.join(", \n"));
}

/*===== SHOW PRODUCTS =====*/
function displayProducts(productlist){
    let productsHTML = '';
    productlist.forEach(element => {
        productsHTML +=
        `<article class="sneaker">
            <img src="${element.image}" alt="" class="sneaker_img">
            <span class="sneaker_name">${element.name}</span>
            <span class="sneaker_price">$${element.price}</span>
            <a class="button-light" onclick="add(${element.id},${element.price})">Agregar <i class='bx bxs-arrow-from-left button-icon'></i></a>
        </article>`
    });
    document.getElementById('catalog_product').innerHTML = productsHTML;
}

/*===== FETCH =====*/
window.onload = async() => {
    const productlist = await (await fetch("/api/products")).json();
    console.log(productlist);
    displayProducts(productlist);
}

/*===== SHOP =====*/
function add(product,price){
    console.log(product,price);
}