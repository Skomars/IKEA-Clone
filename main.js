/* JS Code */
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenSocial = document.querySelectorAll(".hidden");
hiddenSocial.forEach((el) => observer.observe(el));

function openModal() {
  alert("Showing modal");
}
