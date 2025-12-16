let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 9000); // Change image every 2 seconds
}





let cart = [];

function changeQty(btn, change){
  const qtyEl = btn.parentElement.querySelector('.qty');
  let qty = parseInt(qtyEl.textContent);
  qty = Math.max(1, qty + change);
  qtyEl.textContent = qty;
}

function addToCart(btn){
  const card = btn.closest('.product-card');
  const name = card.dataset.name;
  const price = parseFloat(card.dataset.price);
  const qty = parseInt(card.querySelector('.qty').textContent);

  cart.push({ name, price, qty });

  alert(qty + " x " + name + " added to cart 🇿🇼");
  console.log(cart);
}

