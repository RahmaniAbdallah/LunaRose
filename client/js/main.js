

//main.js




// ==================== Hero Slider ====================

const heroVideos = document.querySelectorAll(".hero-video");
const heroTitle = document.querySelector(".hero-title");
const heroDescription = document.querySelector(".hero-description");
const heroContent = document.querySelector(".hero-content");
const prevBtn = document.querySelector(".hero-arrow-left");
const nextBtn = document.querySelector(".hero-arrow-right");

if (heroContent && prevBtn && nextBtn) {

    const slides = [
        {
            title: "Bring Nature Into Your Home",
            description: "Discover premium indoor and outdoor plants carefully selected to transform every space into a peaceful green sanctuary."
        },
        {
            title: "Grow Beauty Every Day",
            description: "From elegant indoor plants to vibrant flowers, find everything you need to create your dream garden."
        },
        {
            title: "Nature Delivered To Your Door",
            description: "Healthy plants, fast delivery and expert care tips to help your home bloom all year long."
        }
    ];

    let currentVideo = 0;
    let autoSlide;

    function showVideo(index) {
        heroContent.classList.remove("show");
        heroContent.classList.add("hide");

        setTimeout(() => {
            heroVideos.forEach(video => {
                video.classList.remove("active");
                video.pause();
                video.currentTime = 0;
            });

            heroVideos[index].classList.add("active");
            heroVideos[index].play();

            heroTitle.textContent = slides[index].title;
            heroDescription.textContent = slides[index].description;

            heroContent.classList.remove("hide");
            heroContent.classList.add("show");
        }, 350);
    }

    function nextVideo() {
        currentVideo++;
        if (currentVideo >= heroVideos.length) currentVideo = 0;
        showVideo(currentVideo);
        resetAutoSlide();
    }

    function previousVideo() {
        currentVideo--;
        if (currentVideo < 0) currentVideo = heroVideos.length - 1;
        showVideo(currentVideo);
        resetAutoSlide();
    }

    function resetAutoSlide() {
        clearInterval(autoSlide);
        autoSlide = setInterval(nextVideo, 7000);
    }

    nextBtn.addEventListener("click", nextVideo);
    prevBtn.addEventListener("click", previousVideo);

    showVideo(0);
    heroContent.classList.add("show");
    resetAutoSlide();
}

// ==========================================
// Create Product Card
// ==========================================

function createProductCard(product) {

       const isFavoritesPage = window.location.pathname.includes("favorites.html");

    return `

        <a href="product.html?id=${product.id}" class="product-link">

            <article class="product-card">

                <div class="product-image">
                    

             ${isFavoritesPage ? `

             <button
        class="remove-favorite-btn"
        data-id="${product.id}"
        >
        <i class="fa-solid fa-heart"></i>
        </button>

      ` : ""}

                    <img
                        src="${product.images[0]}"
                        data-normal="${product.images[0]}"
                        data-hover="${product.images[1]}"
                        alt="${product.name}"
                    >

                </div>

                <div class="product-info">

                    <span class="product-category">

                        ${product.category}

                    </span>

                    <h3 class="product-name">

                        ${product.name}

                    </h3>

                    <p class="product-price">

                        $${product.price}

                    </p>

                </div>

            </article>

        </a>

    `;

}


// ==========================================
// Render Products
// ==========================================


function renderProducts(category, containerId) {

    const container = document.getElementById(containerId);

    if (!container)return; 


    const filteredProducts = products.filter(product => {

        return product.category === category;

    });

    const previewProducts = filteredProducts.slice(0, 8);

    container.innerHTML = "";

    previewProducts.forEach(product => {

        container.innerHTML += createProductCard(product);

    });



}

// ==========================================
// Render Category Page
// ==========================================

function renderCategoryPage(category, containerId) {

    const container = document.getElementById(containerId);

    if (!container) return;

    const filteredProducts = products.filter(product => {

        return product.category === category;

    });

    container.innerHTML = "";

    filteredProducts.forEach(product => {

        container.innerHTML += createProductCard(product);

    });

}


// ==========================================
// Initialize Website
// ==========================================

function initializeWebsite() {

    renderProducts(

        CATEGORY.ORNAMENTAL,

        "ornamental-products"

    );

    renderProducts(

        CATEGORY.MEDICINAL,

        "medicinal-products"

    );

    renderProducts(

        CATEGORY.SEEDLINGS,

        "seedlings-products"

    );

    renderProducts(

        CATEGORY.SEEDS,

        "seeds-products"

    );

}

initializeWebsite();



// ==============================
// NAVBAR AUTH
// ==============================

const loginLink = document.querySelector(".login-link-1");
const registerLink = document.querySelector(".register-link");

const token = localStorage.getItem("token");

if (loginLink && registerLink) {

    if (token) {

        loginLink.textContent = "Profile";
        loginLink.href = "profile.html";

        registerLink.textContent = "Logout";
        registerLink.href = "#";

        registerLink.addEventListener("click", (e) => {

            e.preventDefault();

            const confirmLogout = confirm(
                "Are you sure you want to logout?"
            );

            if (!confirmLogout) return;

            localStorage.removeItem("token");
            localStorage.removeItem("currentUser");

            window.location.href = "index.html";

        });

    } else {

        loginLink.textContent = "Login";
        loginLink.href = "login.html";

        registerLink.textContent = "Register";
        registerLink.href = "register.html";

    }

}



const productImages = document.querySelectorAll(".product-image img");

productImages.forEach(image => {

    image.addEventListener("mouseenter", () => {

        image.style.opacity = "0";

        setTimeout(() => {

            image.src = image.dataset.hover;

            image.style.opacity = "1";

        }, 150);

    });

    image.addEventListener("mouseleave", () => {

        image.style.opacity = "0";

        setTimeout(() => {

            image.src = image.dataset.normal;

            image.style.opacity = "1";

        }, 150);

    });

});


//=======================NAV BAR BG  ====================================

const header = document.querySelector(".header");


function updateHeader() {

    if (!header) return;

    if (window.scrollY > 80) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

}

window.addEventListener("scroll", updateHeader);

updateHeader();



// ============================
// PRODUCT PAGE
// ============================

function loadProductPage() {

    const params = new URLSearchParams(window.location.search);

    const id = Number(params.get("id"));

    const product = products.find(product => product.id === id);


    if (!product) return;

    document.getElementById("breadcrumb-category").textContent = product.category;

    document.getElementById("breadcrumb-name").textContent = product.name;

    document.getElementById("product-category").textContent = product.category;

    document.getElementById("product-name").textContent = product.name;

    document.getElementById("product-price").textContent = `$${product.price}`;

    document.getElementById("product-description").textContent = product.description;

    document.getElementById("main-product-image").src = product.images[0];

const addToCartBtn = document.getElementById("add-to-cart-btn");

if (addToCartBtn) {

    addToCartBtn.addEventListener("click", () => {

        addToCart(product.id);

    });

}
    setupBuyNowModal();

    setupFavoriteButton(product);

    setupDetailsModal(product);

    renderRelatedProducts(product);

}

loadProductPage();


// ============================
// QUANTITY BUTTONS
// ============================

const minusBtn = document.getElementById("minus-btn");
const plusBtn = document.getElementById("plus-btn");
const quantityInput = document.getElementById("quantity-input");

if (minusBtn && plusBtn && quantityInput) {

    minusBtn.addEventListener("click", () => {

        let value = Number(quantityInput.value);

        if (value > 1) {

            quantityInput.value = value - 1;

        }

    });

    plusBtn.addEventListener("click", () => {

        let value = Number(quantityInput.value);

        quantityInput.value = value + 1;

    });

}




function renderRelatedProducts(currentProduct) {

    const container = document.getElementById("related-products-grid");

    if (!container) return;

    const relatedProducts = products.filter(product => {

        return product.category === currentProduct.category &&
               product.id !== currentProduct.id;

    });

    relatedProducts.sort(() => Math.random() - 0.5);

    const selectedProducts = relatedProducts.slice(0, 4);

    container.innerHTML = "";

    selectedProducts.forEach(product => {

        container.innerHTML += createProductCard(product);

    });

}





// ==============================
// FAVORITES API
// ==============================

async function getFavorites() {

    const token = localStorage.getItem("token");

    const response = await fetch("/api/favorites", {

        headers: {

            Authorization: `Bearer ${token}`

        }

    });

    const data = await response.json();

    return data.favorites;

}


async function addFavorite(productId) {

    const token = localStorage.getItem("token");

    const response = await fetch(`/api/favorites/${productId}`, {

        method: "POST",

        headers: {

            Authorization: `Bearer ${token}`

        }

    });

    const data = await response.json();

return data.favorites;

}


async function removeFavorite(productId) {

    const token = localStorage.getItem("token");

    const response = await fetch(`/api/favorites/${productId}`, {

        method: "DELETE",

        headers: {

            Authorization: `Bearer ${token}`

        }

    });

    const data = await response.json();

return data.favorites;

}





// ==============================
// FAVORITES
// ==============================

function setupFavoriteButton(product){

    const favoriteBtn = document.getElementById("favorite-btn");

    const favoriteIcon = document.getElementById("favorite-icon");

    const favoriteText = document.getElementById("favorite-text");

    if(!favoriteBtn) return;

    initializeFavorite();

async function initializeFavorite() {

    try {

        const favorites = await getFavorites();

        updateFavoriteUI(favorites.includes(product.id));

    } catch (error) {

        console.error(error);

    }

}
favoriteBtn.addEventListener("click", async () => {
    const token = localStorage.getItem("token");
    
    // إذا ماكانش عندو توكن، نخرجولو toast تحذير أصفر
    if (!token) {
        showToast("Please login first to add to favorites.", "warning");
        return;
    }

    try {
        const favorites = await getFavorites();
        if (favorites.includes(product.id)) {
            await removeFavorite(product.id);
            updateFavoriteUI(false);
        } else {
            await addFavorite(product.id);
            updateFavoriteUI(true);
        }
    } catch (error) {
        console.error(error);
        showToast("Something went wrong.", "error");
    }
});





    function updateFavoriteUI(favorite){

    favoriteBtn.classList.remove("bounce");

    void favoriteBtn.offsetWidth;

    favoriteBtn.classList.add("bounce");

    if(favorite){

        favoriteBtn.classList.add("active");

        favoriteIcon.className = "fa-solid fa-heart";

        favoriteText.textContent = "Added to Favorites";

    }else{

        favoriteBtn.classList.remove("active");

        favoriteIcon.className = "fa-regular fa-heart";

        favoriteText.textContent = "Add to Favorites";

    }

}

}




//===================================
// FAVORITES PAGE
//===================================

async function loadFavoritesPage(){

    const grid = document.getElementById("favorites-grid");

    const empty = document.getElementById("favorites-empty");

    if(!grid || !empty) return;

   const favorites = await getFavorites();

const favoriteProducts = products.filter(product =>

    favorites.includes(product.id)

);

    if(favoriteProducts.length === 0){

        grid.style.display = "none";

        empty.style.display = "block";

        return;

    }

    empty.style.display = "none";

    grid.innerHTML = "";

    favoriteProducts.forEach(product=>{

        grid.innerHTML += createProductCard(product);

     
        

    });

    const removeButtons = document.querySelectorAll(".remove-favorite-btn");

     removeButtons.forEach(button=>{

     button.addEventListener("click",(event)=>{

        event.preventDefault();

        event.stopPropagation();

        selectedProductId = Number(button.dataset.id);

        modal.classList.add("show");

});

    });

}

const modal = document.getElementById("confirm-modal");

const cancelBtn = document.getElementById("cancel-remove");

const confirmBtn = document.getElementById("confirm-remove");

let selectedProductId = null;


loadFavoritesPage();


if(modal){

    cancelBtn.addEventListener("click",()=>{

        modal.classList.remove("show");

    });

    modal.addEventListener("click",(event)=>{

        if(event.target===modal){

            modal.classList.remove("show");

        }

    });

   confirmBtn.addEventListener("click", async () => {

    await removeFavorite(selectedProductId);

    modal.classList.remove("show");

    loadFavoritesPage();

});

}


//-===================================================

// CAAAARRRRRRTTTTTTTTTTTTT=================================================
//======================================================================


// ==============================
// CART API
// ==============================

async function getCart() {

    const token = localStorage.getItem("token");

    const response = await fetch("/api/cart", {

        headers: {

            Authorization: `Bearer ${token}`

        }

    });

    const data = await response.json();

    return data.cart;

}

async function addCart(productId) {

    const token = localStorage.getItem("token");

    const response = await fetch(`/api/cart/${productId}`, {

        method: "POST",

        headers: {

            Authorization: `Bearer ${token}`

        }

    });

    const data = await response.json();

    return data.cart;

}

async function removeCart(productId) {

    const token = localStorage.getItem("token");

    const response = await fetch(`/api/cart/${productId}`, {

        method: "DELETE",

        headers: {

            Authorization: `Bearer ${token}`

        }

    });

    const data = await response.json();

    return data.cart;

}


async function loadCartPage() {

    const cart = await getCart();

    const cartItems = document.getElementById("cart-items");
    const emptyCart = document.getElementById("cart-empty");
    const cartContainer = document.querySelector(".cart-container");

    if (!cartItems || !emptyCart || !cartContainer) return;

    if (cart.length === 0) {

        cartContainer.style.display = "none";
        emptyCart.style.display = "block";

        return;

    }

    cartContainer.style.display = "grid";
    emptyCart.style.display = "none";

    cartItems.innerHTML = "";

    let subtotal = 0;

    cart.forEach(item => {

        const product = products.find(p => p.id === item.id);

        if (!product) return;

        subtotal += product.price * item.quantity;

        const card = document.createElement("div");

        card.className = "cart-item";

        card.innerHTML = `

            <div class="cart-product">

                <img src="${product.images[0]}" alt="${product.name}">

                <div class="cart-product-info">

                    <h3>${product.name}</h3>

                    <p>$${product.price}</p>

                </div>

            </div>

            <div class="cart-actions">

                <div class="quantity-control">

                    <button class="qty-btn minus" data-id="${product.id}">
                        -
                    </button>

                    <span>${item.quantity}</span>

                    <button class="qty-btn plus" data-id="${product.id}">
                        +
                    </button>

                </div>

                <button class="remove-cart-btn" data-id="${product.id}">

                    <i class="fa-solid fa-trash"></i>

                </button>

            </div>

        `;

        cartItems.appendChild(card);

        
const plusBtn = card.querySelector(".plus");

plusBtn.addEventListener("click", async () => {

    await addCart(product.id);

    loadCartPage();

});




const minusBtn = card.querySelector(".minus");

minusBtn.addEventListener("click", async () => {

    if (item.quantity > 1) {

        await removeCart(product.id);

        for (let i = 1; i < item.quantity; i++) {

            await addCart(product.id);

        }

    }

    loadCartPage();

});


const removeBtn = card.querySelector(".remove-cart-btn");

removeBtn.addEventListener("click", async () => {

    await removeCart(product.id);

    loadCartPage();

});




    });

    document.getElementById("subtotal").textContent = "$" + subtotal.toFixed(2);
    document.getElementById("total").textContent = "$" + subtotal.toFixed(2);

}

if (window.location.pathname.includes("cart.html")) {

    loadCartPage();
    setupCheckoutModal();
    

}


 async function addToCart(productId) {
    const token = localStorage.getItem("token");
    
    // إذا ماكانش عندو توكن، نخرجولو toast أحمر ونحبسو الدالة
    if (!token) {
        showToast("Please login first to add to cart.", "error");
        return;
    }

    try {
        await addCart(productId);
        showToast("Product added to cart!", "success");
    } catch (error) {
        console.error(error);
        showToast("Something went wrong.", "error");
    }
}



//function showToast(message){

   // const toast = document.getElementById("toast");

 //   const text = document.getElementById("toast-message");

   // text.textContent = message;

   // toast.classList.add("show");

 //   setTimeout(() => {

 //       toast.classList.remove("show");

 //   },2000);

  //   }


function showToast(message, type = "success") {
    const toast = document.getElementById("toast");
    const text = document.getElementById("toast-message");
    const icon = toast.querySelector("i"); // جلب الأيقونة الموجودة داخل الـ toast

    if (!toast || !text) return;

    text.textContent = message;

    // تنظيف الكلاسات القديمة
    toast.classList.remove("success", "error", "warning");
    toast.classList.add(type);

    // تغيير الأيقونة حسب نوع التنبيه
    if (icon) {
        icon.className = ""; // تنظيف الأيقونة القديمة
        if (type === "success") {
            icon.className = "fa-solid fa-check-circle"; // علامة الصح
        } else if (type === "warning") {
            icon.className = "fa-solid fa-triangle-exclamation"; // علامة التحذير ⚠️
        } else if (type === "error") {
            icon.className = "fa-solid fa-circle-exclamation"; // علامة الخطأ ❗
        }
    }

    toast.classList.add("show");

    clearTimeout(toast.timeout);
    toast.timeout = setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}









function setupCheckoutButton() {

    const checkoutBtn = document.getElementById("checkout-btn");

    if (!checkoutBtn) return;

    checkoutBtn.addEventListener("click", () => {

        alert(
`Thank you for choosing LunaRose 

Checkout will be available in the next version.`
        );

    });

}


//=======================SETUP CHECKOUT MODAL===--================================

function setupCheckoutModal(){

    const checkoutBtn = document.getElementById("checkout-btn");

    const modal = document.getElementById("checkout-modal");

    const okBtn = document.getElementById("checkout-ok-btn");

    if(!checkoutBtn || !modal || !okBtn) return;

    checkoutBtn.addEventListener("click", ()=>{

        modal.classList.add("active");

    });

    okBtn.addEventListener("click", ()=>{

        modal.classList.remove("active");

    });

    modal.addEventListener("click",(e)=>{

        if(e.target === modal){

            modal.classList.remove("active");

        }

    });

}





function setupBuyNowModal(){

    const buyBtn = document.getElementById("buy-now-btn");

    const modal = document.getElementById("buy-modal");

    const okBtn = document.getElementById("buy-ok-btn");

    if(!buyBtn || !modal || !okBtn) return;

    buyBtn.addEventListener("click",()=>{

        modal.classList.add("active");

    });

    okBtn.addEventListener("click",()=>{

        modal.classList.remove("active");

    });

    modal.addEventListener("click",(e)=>{

        if(e.target === modal){

            modal.classList.remove("active");

        }

    });

}



/*==============================
        PROFILE PAGE
==============================*/


const profilePage = document.querySelector(".profile-page");

if (profilePage) {


const token = localStorage.getItem("token");

if (!token) {

    window.location.href = "/html/login.html";

}


/*==============================
    Check Login Status
==============================*/


/*
if (!currentUser) {

    window.location.href = "login.html";

}
    */
 







async function loadProfile() {

    try {

        const response = await fetch("/api/auth/me", {

            headers: {

                Authorization: `Bearer ${token}`

            }

        });

        if (!response.ok) {

            localStorage.removeItem("token");
            localStorage.removeItem("currentUser");

            window.location.href = "/html/login.html";

            return;

        }

        const currentUser = await response.json();

        document.getElementById("profile-name").textContent =
            currentUser.fullName;

        document.getElementById("profile-email").textContent =
            currentUser.email;

        document.getElementById("user-full-name").textContent =
            currentUser.fullName;

        document.getElementById("user-email").textContent =
            currentUser.email;

const initials = currentUser.fullName
    .trim()
    .split(" ")
    .slice(0,2)
    .map(name => name[0])
    .join("")
    .toUpperCase();

document.getElementById("avatar-initials").textContent = initials;


        if (currentUser.createdAt) {

            document.getElementById("member-date").textContent =
    new Date(currentUser.createdAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
    });

        }

    } catch (error) {

        console.error(error);

    }

}

loadProfile();




 


/*==============================
        Logout
==============================*/

const logoutBtn = document.getElementById("logout-btn");

logoutBtn.addEventListener("click",()=>{

    const confirmLogout = confirm(
        "Are you sure you want to logout?"
    );

    if(!confirmLogout) return;

    localStorage.removeItem("currentUser");
localStorage.removeItem("token");

    window.location.href = "index.html";

});


/*==============================
        Edit Profile
==============================*/

const editBtn = document.querySelector(".edit-profile-btn");

editBtn.addEventListener("click",()=>{

   showToast("Edit Profile page coming soon.", "warning");

});



}




/*==============================
        REGISTER
==============================*/
const registerForm = document.getElementById("register-form");

if (registerForm) {

    registerForm.addEventListener("submit", async (e) => {

        e.preventDefault();

        const inputs = registerForm.querySelectorAll("input");

        const fullName = inputs[0].value.trim();
        const email = inputs[1].value.trim();
        const password = inputs[2].value;
        const confirmPassword = inputs[3].value;

        if (password !== confirmPassword) {
           showToast("Passwords do not match.", "error");
            return;
        }

        try {

            const response = await fetch("/api/auth/register", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    fullName,
                    email,
                    password
                })

            });

           const data = await response.json();

if (response.ok) {

    showToast(data.message, "success");

    window.location.href = "/html/login.html";

} else {

    showToast(data.message, "error");

}

        } catch (error) {

           showToast("Something went wrong.", "error");

        }

    });

}

 
 /*==============================
        LOGIN
==============================*/




const loginForm = document.getElementById("login-form");

if (loginForm) {

    loginForm.addEventListener("submit", async (e) => {

        e.preventDefault();

        const inputs = loginForm.querySelectorAll("input");

        const email = inputs[0].value.trim();
        const password = inputs[1].value;

        try {

            const response = await fetch("/api/auth/login", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    email,
                    password
                })

            });

          const data = await response.json();

if (response.ok) {

    showToast(data.message, "success");

    localStorage.setItem(
        "currentUser",
        JSON.stringify(data.user)
    );

    localStorage.setItem("token", data.token);

    window.location.href = "/html/profile.html";

} else {

    showToast(data.message, "error");

}

        } catch (error) {

           showToast("Something went wrong.", "error");

        }

    });

}




/*==============================
      DETAILS MODAL
==============================*/
async function setupDetailsModal(product) {

    const detailsBtn = document.querySelector(".details-btn");

    const modal = document.getElementById("details-modal");

    const closeBtn = document.getElementById("close-details-modal");

    if (!detailsBtn || !modal || !closeBtn) return;

    detailsBtn.addEventListener("click", async () => {

        try {

           const response = await fetch(
    `/api/details/${product.id}`
);

            const details = await response.json();

            document.getElementById("modal-product-name").textContent =
                product.name;

            document.getElementById("modal-scientific-name").textContent =
                details.scientificName;

            document.getElementById("modal-family").textContent =
                details.family;

            document.getElementById("modal-origin").textContent =
                details.origin;

            document.getElementById("modal-type").textContent =
                details.plantType;

            document.getElementById("modal-sunlight").textContent =
                details.sunlight;

            document.getElementById("modal-watering").textContent =
                details.watering;

            document.getElementById("modal-difficulty").textContent =
                details.difficulty;

            document.getElementById("modal-height").textContent =
                details.height;

            document.getElementById("modal-description").textContent =
                details.description;

            modal.classList.add("active");

        } catch (error) {

            console.error(error);

           showToast("Unable to load product details.", "error");

        }

    });

    closeBtn.addEventListener("click", () => {

        modal.classList.remove("active");

    });

    modal.addEventListener("click", (e) => {

        if (e.target === modal) {

            modal.classList.remove("active");

        }

    });

}





// ==============================
// SEARCH SUGGESTIONS (Live Search)
// ==============================
const searchInputs = document.querySelectorAll(".search-input");

searchInputs.forEach(input => {
    const container = input.closest(".search");
    if (!container) return;

    // Create the suggestions container dynamically
    const suggestionsBox = document.createElement("div");
    suggestionsBox.className = "search-suggestions";
    container.appendChild(suggestionsBox);

    input.addEventListener("input", (e) => {
        const query = e.target.value.trim().toLowerCase();
        
        // Hide if the input is empty
        if (query.length === 0) {
            suggestionsBox.classList.remove("show");
            return;
        }

        // Filter products that include the searched letters
        const filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(query) ||
            product.category.toLowerCase().includes(query)
        );

        // Render results
        if (filteredProducts.length > 0) {
            suggestionsBox.innerHTML = filteredProducts.map(product => `
                <a href="product.html?id=${product.id}" class="suggestion-item">
                    <img src="${product.images[0]}" alt="${product.name}">
                    <span>${product.name}</span>
                </a>
            `).join("");
        } else {
            suggestionsBox.innerHTML = `
                <div class="suggestion-empty">
                    No plants found for "${e.target.value}"...
                </div>
            `;
        }
        
        suggestionsBox.classList.add("show");
    });

    // Hide suggestions when clicking anywhere outside the search bar
    document.addEventListener("click", (e) => {
        if (!container.contains(e.target)) {
            suggestionsBox.classList.remove("show");
        }
    });
});





// ==============================
// PRELOAD HOVER IMAGES (Automatic)
// ==============================
function preloadHoverImages() {
    // ننتظر قليلاً بعد تحميل DOM لضمان وجود المنتجات
    setTimeout(() => {
        if (typeof products !== "undefined" && Array.isArray(products)) {
            products.forEach(product => {
                if (product.images && product.images.length > 1) {
                    const img = new Image();
                    img.src = product.images[1]; // تحميل الصورة الثانية مسبقاً في الكاش
                }
            });
        }
    }, 500);
}

// تشغيل التحميل التلقائي فور فتح الصفحة
preloadHoverImages();






/*==============================
   TOGGLE PASSWORD VISIBILITY
==============================*/
const togglePasswordIcons = document.querySelectorAll(".toggle-password");

togglePasswordIcons.forEach(icon => {
    icon.addEventListener("click", function () {
        // تحديد حقل الإدخال المرتبط بهذه الأيقونة
        const input = this.previousElementSibling;
        
        // التبديل بين إظهار وإخفاء النص
        const type = input.getAttribute("type") === "password" ? "text" : "password";
        input.setAttribute("type", type);
        
        // تغيير شكل الأيقونة (عين مفتوحة / عين مغلقة)
        this.classList.toggle("fa-eye");
        this.classList.toggle("fa-eye-slash");
    });
});