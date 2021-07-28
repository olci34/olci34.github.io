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
          top: 1300,
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

document.getElementById("resume").addEventListener('click', function () {
  var adobeDCView = new AdobeDC.View({ clientId: "7d378abc401d43b495e37ab4b80b5ff3" });
  adobeDCView.previewFile(
    {
      content: {
        location: {
          url: "https://documentcloud.adobe.com/link/track?uri=urn:aaid:scds:US:ade29aef-5e9b-4d88-8da5-2eb76bb4a03a",
        },
      },
      metaData: { fileName: "Resume.pdf" },
    },
    { embedMode: "LIGHT_BOX" }
  );
});