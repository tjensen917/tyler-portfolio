document.addEventListener("DOMContentLoaded", function () {
    // Typing effect
    const words = ["Tyler Jensen", "a Developer", "a Cybersecurity Expert"];
    let wordIndex = 0;
    let letterIndex = 0;
    const typingElement = document.querySelector(".typing");

    function type() {
        if (letterIndex < words[wordIndex].length) {
            typingElement.textContent += words[wordIndex][letterIndex];
            letterIndex++;
            setTimeout(type, 100);
        } else {
            setTimeout(erase, 1000);
        }
    }

    function erase() {
        if (letterIndex > 0) {
            typingElement.textContent = words[wordIndex].substring(0, letterIndex - 1);
            letterIndex--;
            setTimeout(erase, 50);
        } else {
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, 500);
        }
    }
    
    type();

    // Contact Form Submission
    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Thank you for your message! I'll get back to you soon.");
        this.reset();
    });

    $(function() { 
        $('a[href*=\\#]').on('click', function(e) {
          e.preventDefault();
          $('html, body').animate({ 
            scrollTop: $($(this).attr('href')).offset().top 
          }, 500, 'linear');
        });
      });
      
});
