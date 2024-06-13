                // toggle icon navbar                
let menuIcon =  document.querySelector('#menu-icon');               
let navbar =  document.querySelector('.navbar'); 

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
                
                //Scroll Sections active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })
                     //  Sticky Navbar
let header = document.querySelector('header');

header.classList.toggle('sticky', window.scrollY > 100);

// Remove toggle icon and navbar when click navbar link (scroll)
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
};


// Send Email 


// document.getElementById('sendMessageBtn').addEventListener('click', function(event) {
//     var fullName = document.getElementById('fullName').value;
//     var emailAddress = document.getElementById('emailAddress').value;
//     var mobileNumber = document.getElementById('mobileNumber').value;
//     var emailSubject = document.getElementById('emailSubject').value;
//     var message = document.getElementById('message').value;

//     // Construct the mailto link
//     var mailtoLink = "mailto:mashsan271219@gmail.com" + 
//                     "?subject=" + encodeURIComponent(emailSubject) + 
//                     "&body=" + encodeURIComponent("Full Name: " + fullName + "\n" +
//                                                 "Email Address: " + emailAddress + "\n" +
//                                                 "Mobile Number: " + mobileNumber + "\n" +
//                                                 "Message: " + message);

//     // Set the mailto link as the href attribute of the send button
//     this.href = mailtoLink;
// });


// Scroll Reveal

ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200 
});

ScrollReveal().reveal('.home-content, .heading', { origin:'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin:'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin:'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin:'right' });
ScrollReveal().reveal('.education', { origin:'bottom' });

// Typed js for typewriter

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Passionate Learner', 'Web Development Enthusiast'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});