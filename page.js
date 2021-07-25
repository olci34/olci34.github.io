AOS.init({
  startEvent: "DOMContentLoaded",
  easing: "ease",
  duration: 1000
});
let slider = 0;
const scroll = (e) => {
  switch (e.target.id) {
    case "about-link":
      window.scroll({
          top: 0,
          left:0,
          behavior: "smooth"
      });
      break;
    case "skills-link":
      window.scroll({
          top: 450,
          left:0,
          behavior: "smooth"});
      break;
    case "education-link":
      window.scroll({
          top: 880,
          left: 0,
          behavior: "smooth"});
      break;
    case "projects-link":
      window.scroll({
          top: 1200,
          left: 0,
          behavior: "smooth"});
      break;
    default:
      window.scrollTo(0, 0);
      break;
  }
};

Array.from(document.getElementsByClassName("navbar-item")).map((ele) =>
  ele.addEventListener("click", scroll)
);
