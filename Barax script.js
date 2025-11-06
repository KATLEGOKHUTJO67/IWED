// ===== BARAX Website JavaScript (jQuery) =====

$(document).ready(function() {

  // 🟩 1️⃣ Fade in the page header smoothly
  $('header').hide().fadeIn(1200);
  $('main').hide().fadeIn(1500);

  // 🟩 2️⃣ Display today's date automatically in the footer
  const today = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = today.toLocaleDateString('en-ZA', options);
  $("footer").append(`<p class="date">Today's Date: ${formattedDate}</p>`);

  // 🟩 3️⃣ Smooth scrolling when clicking nav links (for same-page anchors)
  $('nav a').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();
      const hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800);
    }
  });

  // 🟩 4️⃣ Change color on hover (navigation links)
  $('nav a').hover(
    function() {
      $(this).css('color', 'orange');
    },
    function() {
      $(this).css('color', 'white');
    }
  );

  // 🟩 5️⃣ Add fade/zoom animation when images load or hover
  $('img').hide().fadeIn(1500);
  $('img').hover(
    function() {
      $(this).css({
        transform: 'scale(1.05)',
        transition: 'transform 0.3s ease'
      });
    },
    function() {
      $(this).css('transform', 'scale(1)');
    }
  );

  // 🟩 6️⃣ Highlight effect when hovering over sections
  $('section').hover(
    function() {
      $(this).css('background-color', '#f9f9f9');
    },
    function() {
      $(this).css('background-color', 'white');
    }
  );

  // 🟩 7️⃣ Animate all <h1> and <h2> on load
  $('h1, h2').css('opacity', 0).animate({ opacity: 1 }, 2000);

  // 🟩 8️⃣ Alert when going to the contact page
  $('a[href="contact.html"]').on('click', function() {
    alert('Redirecting to our Contact Page...');
  });

  // 🟩 9️⃣ Product image click fade effect (if gallery exists)
  if ($('.product-item img').length > 0) {
    $('.product-item img').on('click', function() {
      $(this).fadeOut(200).fadeIn(200);
    });
  }

  // 🟩 🔟 Scroll-to-top button setup
  $('body').append('<button id="toTop">⬆</button>');
  $('#toTop').css({
    display: 'none',
    position: 'fixed',
    bottom: '25px',
    right: '25px',
    padding: '10px 15px',
    background: 'black',
    color: 'white',
    fontWeight: 'bold',
    border: '2px solid orange',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '16px',
    boxShadow: '0 0 10px rgba(255,140,0,0.4)',
    transition: 'all 0.3s ease'
  });

  // Show/hide scroll-to-top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 150) {
      $('#toTop').fadeIn();
    } else {
      $('#toTop').fadeOut();
    }
  });

  // Scroll smoothly to top when clicked
  $('#toTop').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 800);
  });
});

