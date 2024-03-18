document.getElementById("offerButton").addEventListener("click", function () {
  var address = document.getElementById("addressInput").value;
  if (address) {
    // Implement your logic to handle the cash offer here
    console.log("The cash offer for " + address + " is being processed.");
  } else {
    alert("Please enter your street address.");
  }
});

// List of background images
const backgrounds = [
  "Images/aerial-view.jpg",
  "Images/beautiful-interior.jpg",
  "Images/cozy-modern-house.jpg",
  // Add more images as needed
];

// Function to change background image
function changeBackground() {
  const header = document.getElementById("header");
  let i = 0; // Start with the first image

  // Change image every 3 seconds (3000 milliseconds)
  setInterval(() => {
    header.style.backgroundImage = `url('${backgrounds[i]}')`;
    i = (i + 1) % backgrounds.length; // Cycle through the images
  }, 3000);
}

// Call the function when the script loads
changeBackground();
