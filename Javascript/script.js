

// Navigation
function toggleMenu(){
    const toggleMenu = document.querySelector(".toggleMenu");
    const navigation = document.querySelector(".navigation");
toggleMenu.classList.toggle ("active");
// let element = document.body;
navigation.classList.toggle ("active");
}
// Navigationd End


// this is dark light shuffle Function
function darklight(){
    const darklight = document.querySelector(".darkLight");
    darklight.classList.toggle("active");
    let element = document.body;
    element.classList.toggle("dark-theme")
};
// this is dark light shuffle Function End


// // Scroll function
//   function smoothScroll(target) {
//     const targetElement = document.querySelector(target);
//     const headerOffset = 60; // Adjust this value to consider your header's height
//     const elementPosition = targetElement.getBoundingClientRect().top;
//     const offsetPosition = elementPosition - headerOffset;

//     window.scrollBy({
//       top: offsetPosition,
//       behavior: 'smooth'
//     });
//   }


