const selectedFruits = new Set();
const basePrice = 80 ;

function toggleJuice(fruit) {
    const layer = document.getElementById(`layer-${fruit}`);
    const buttons = document.querySelectorAll('.fruit-btn');
    
    // Find the clicked button to toggle style
    let clickedBtn;
    buttons.forEach(btn => {
        if(btn.innerText.includes(fruit)) clickedBtn = btn;
    });

    if (selectedFruits.has(fruit)) {
        selectedFruits.delete(fruit);
        layer.style.height = "0%";
        clickedBtn.classList.remove('active');
    } else {
        selectedFruits.add(fruit);
        clickedBtn.classList.add('active');
        updateLayers();
    }
    
    calculateTotal();
}

function updateLayers() {
    const heightPerFruit = 80 ;
    selectedFruits.forEach(fruit => {
        document.getElementById(`layer-${fruit}`).style.height = `${heightPerFruit}%`;
    });
}

function calculateTotal() {
    const total = basePrice;
    document.getElementById('total').innerText = total.toFixed(2);
}
function calculateTotal() {
    let total = 0;

    if (selectedFruits.size > 0) {
        total = basePrice;
    }

    document.getElementById('total').innerText = total.toFixed(2);
}
function checkout() {
    if (selectedFruits.size === 0) {
        alert("Please select a fruit!");
    }
    if(selectedFruits.size > 5) {
        alert("Please pick only one fruit for base!");
    } else {
        const list = Array.from(selectedFruits).join(", ");
        alert("Your order is place")
    }
}
// Select the button and the target section
const menuBtn = document.querySelector('.btn-main');
const menuSection = document.querySelector('.menu-section').parentElement;

// Add a click event listener
menuBtn.addEventListener('click', function() {
    menuSection.scrollIntoView({ 
        behavior: 'smooth', // Smooth animation
        block: 'start'      // Align the top of the section to the top of the screen
    });
});

// Select the button and the target section
const menuBtn1 = document.querySelector('.btn-main1');
const menuSection1 = document.querySelector('.custumize-menu').parentElement;

// Add a click event listener
menuBtn1.addEventListener('click', function() {
    menuSection1.scrollIntoView({ 
        behavior: 'smooth', // Smooth animation
        block: 'start'      // Align the top of the section to the top of the screen
    });
});
document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
      // Only run on mobile (screens < 768px)
      if (window.innerWidth < 768) {
        const content = button.nextElementSibling;
        
        button.classList.toggle('active');
        
        if (button.classList.contains('active')) {
          content.style.maxHeight = content.scrollHeight + "px";
        } else {
          content.style.maxHeight = 0;
        }
      }
    });
  });
  const cardButtons = document.querySelectorAll('.card button');

cardButtons.forEach(button => {
  button.addEventListener('click', function() {
    const originalText = this.innerText;
    this.innerText = "Processing..."; // Change text immediately
    this.disabled = true; // Prevent double clicks

    setTimeout(() => {
      alert("Your order is placed");
      this.innerText = originalText; // Reset button text
      this.disabled = false;
    }, 4000);
  });
});