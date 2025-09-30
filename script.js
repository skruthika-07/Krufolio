function projectClick(name) { 
    alert(name + " clicked!"); 
} 
function submitForm(event) { 
    event.preventDefault(); 
    alert("Thank you! Your message has been sent."); 
} 
function toggleMenu() { 
    const nav = document.getElementById("navbar"); 
    nav.classList.toggle("show"); 
}