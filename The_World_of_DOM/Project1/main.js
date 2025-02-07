document.addEventListener("DOMContentLoaded", () => {
  // Select all necessary elements
  const cards = document.querySelectorAll(".card");
  const totalPriceElement = document.querySelector(".total");

  // Initialize total price
  let totalPrice = 0;

  // Function to update total price display
  function updateTotalPrice() {
    totalPrice = 0;
    cards.forEach((card) => {
      if (card.parentElement.style.display !== "none") {
        const quantity = parseInt(card.querySelector(".quantity").textContent);
        const unitPrice = parseInt(
          card.querySelector(".unit-price").textContent
        );
        totalPrice += quantity * unitPrice;
      }
    });
    totalPriceElement.textContent = `${totalPrice} $`;
  }

  // Add event listeners to each card
  cards.forEach((card) => {
    const plusBtn = card.querySelector(".fa-plus-circle");
    const minusBtn = card.querySelector(".fa-minus-circle");
    const quantityElement = card.querySelector(".quantity");
    const deleteBtn = card.querySelector(".fa-trash-alt");
    const heartBtn = card.querySelector(".fa-heart");

    // Plus button functionality
    plusBtn.addEventListener("click", () => {
      let quantity = parseInt(quantityElement.textContent);
      quantity++;
      quantityElement.textContent = quantity;
      updateTotalPrice();
    });

    // Minus button functionality
    minusBtn.addEventListener("click", () => {
      let quantity = parseInt(quantityElement.textContent);
      if (quantity > 0) {
        quantity--;
        quantityElement.textContent = quantity;
        updateTotalPrice();
      }
    });

    // Delete button functionality
    deleteBtn.addEventListener("click", () => {
      card.parentElement.style.display = "none";
      quantityElement.textContent = "0";
      updateTotalPrice();
    });

    // Heart button functionality
    heartBtn.addEventListener("click", () => {
      heartBtn.classList.toggle("text-danger");
    });
  });

  // Initial total price calculation
  updateTotalPrice();
});
