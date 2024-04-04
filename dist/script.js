console.clear();

ScrollOut({
  cssProps: {
    visibleY: true,
    viewportY: true
  }
});

Splitting({ target: '.heading' });

// EmailJS configuration
const userID = 'aA9YXj15SJU7mu_rf';
const serviceID = 'service_885cw97';
const templateID = 'template_76uilkx';

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Send email using EmailJS
  emailjs.send(serviceID, templateID, {
    name: name,
    email: email,
    message: message
  }, userID)
    .then(function(response) {
      console.log('Email sent successfully!', response);
      alert('Thank you for your message! We will get back to you soon.');
      // Reset form fields
      document.getElementById('contact-form').reset();
    }, function(error) {
      console.error('Error sending email:', error);
      alert('Oops! Something went wrong. Please try again later.');
    });
});

// Open modal
function openModal(modalId) {
  document.getElementById(modalId).classList.add('modal-open');
}

// Close modal
function closeModal(modalId) {
  document.getElementById(modalId).classList.remove('modal-open');
}

// Handle form submissions
document.getElementById('contact-form-1').addEventListener('submit', function(event) {
  event.preventDefault();
  // Handle form submission for contact form 1
  closeModal('contact-modal-1');
});

document.getElementById('contact-form-2').addEventListener('submit', function(event) {
  event.preventDefault();
  // Handle form submission for contact form 2
  closeModal('contact-modal-2');
});
