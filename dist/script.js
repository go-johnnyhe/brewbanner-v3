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
const templateID1 = 'template_76uilkx';
const templateID2 = 'template_ntseoac';

// Handle form submission for contact form 1
document.getElementById('contact-form-1').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Get form values
  const name = document.getElementById('name').value;
  const businessName = document.getElementById('bname').value;
  const website = document.getElementById('website').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  
  // Send email using EmailJS
  emailjs.send(serviceID, templateID1, {
    name: name,
    businessName: businessName,
    website: website,
    email: email,
    phone: phone
  }, userID)
  .then(function(response) {
    console.log('Email sent successfully!', response);
    alert('Thank you for your message! We will get back to you soon.');
    // Reset form fields
    document.getElementById('contact-form-1').reset();
    closeModal('contact-modal-1');
  }, function(error) {
    console.error('Error sending email:', error);
    alert('Oops! Something went wrong. Please try again later.');
  });
});

// Handle form submission for contact form 2
document.getElementById('contact-form-2').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Get form values
  const firstName = document.getElementById('firstName').value;
  const businessName = document.getElementById('businessName').value;
  const businessAddress = document.getElementById('businessAddress').value;
  const userEmail = document.getElementById('email').value;
  const phoneNumber = document.getElementById('phoneNumber').value;
  const quantity = document.getElementById('quantity').value;
  const type = document.getElementById('type').value;
  const size = document.getElementById('size').value;
  
  // Send email using EmailJS
  emailjs.send(serviceID, templateID2, {
    firstName: firstName,
    businessName: businessName,
    businessAddress: businessAddress,
    userEmail: userEmail,
    phoneNumber: phoneNumber,
    quantity: quantity,
    type: type,
    size: size
  }, userID)
  .then(function(response) {
    console.log('Email sent successfully!', response);
    alert('Thank you for your request! We will contact you within 3 business days.');
    // Reset form fields
    document.getElementById('contact-form-2').reset();
    closeModal('contact-modal-2');
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
