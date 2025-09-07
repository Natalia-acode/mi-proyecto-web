
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (header) {
    header.classList.toggle("scrolled", window.scrollY > 50);
  }
});


const cartas = document.querySelectorAll(".carta");


const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); 
      }
    });
  },
  { threshold: 0.2 } 
);


cartas.forEach((carta) => {
  observer.observe(carta);
});
