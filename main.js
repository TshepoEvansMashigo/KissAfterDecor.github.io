const modalImage = document.getElementById('modalImage');
let currentImages = [];
let currentIndex = 0;

// Initialize the modal
const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));

// When an image is clicked
document.querySelectorAll('.gallery-img').forEach((img) => {
  img.addEventListener('click', () => {
    // Get images in the same active tab
    const activeTabPane = img.closest('.tab-pane');
    currentImages = Array.from(activeTabPane.querySelectorAll('.gallery-img'));
    currentIndex = currentImages.indexOf(img);

    modalImage.src = img.src;
    imageModal.show();
  });
});

// Next Button
document.getElementById('nextBtn').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % currentImages.length;
  modalImage.src = currentImages[currentIndex].src;
});

// Prev Button
document.getElementById('prevBtn').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
  modalImage.src = currentImages[currentIndex].src;
});

// Ensure modal closes completely
document.getElementById('imageModal').addEventListener('hidden.bs.modal', function () {
  document.body.classList.remove('modal-open');
  const backdrops = document.getElementsByClassName('modal-backdrop');
  while (backdrops.length > 0) {
    backdrops[0].parentNode.removeChild(backdrops[0]);
  }
});
// Initialize EmailJS with your Public key
document.addEventListener("DOMContentLoaded", function () {

emailjs.init("WJKX-VuJHHRVrQNOI"); 

// Listen for form submission
document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent default form submission

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Send email using EmailJS
  emailjs.send("service_cs0x8dw", "template_3c91j64", {
    from_name: name,
    from_email: email,
    message: message
  })
  .then(function(response) {
    alert("✅ Message sent successfully!");
    // Optionally clear the form
    document.querySelector("form").reset();
  }, function(error) {
    alert("❌ Failed to send message. Please try again.");
    console.error("EmailJS error:", error);
  });
});
});
