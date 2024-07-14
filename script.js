
/*
const clkToggle = () => 
{
document.getElementById("navbar").style.display="block";

}

*/



$(document).ready(function(){
  $(".fa-bars").click(function(){
    $("#navbar").slideToggle("3000");
  });
});


function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}



/* whatsapp integration */

  document.addEventListener("DOMContentLoaded", function() {
    let form = document.getElementById("contact_form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission
        
        // Get form field values using tag name
        let inputs = form.getElementsByTagName("input");
        let firstName = inputs[0].value; // First input element
        let email = inputs[1].value; // Second input element
        let number = inputs[2].value; // Third input element
        let address = inputs[3].value; // Fourth input element
        let whatsappNumber = '9934610150';

        // Construct WhatsApp message with headers
        let whatsappMessage = `Help me with the following information:||`;
        whatsappMessage += `Name: ${firstName}||`;
        whatsappMessage += `Email: ${email}||`;
        whatsappMessage += `Phone Number: ${number}||`;
        whatsappMessage += `Address: ${address}||`;



        // Create WhatsApp link
        let whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

        // Redirect to WhatsApp
        window.open(whatsappLink, '_blank');
    });
});





