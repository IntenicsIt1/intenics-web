let cursorPointer = document.querySelector("#cursor-pointer");
let main = document.querySelector("#main");
let mainPosterImgDiv = document.querySelector("#mainPosterImgDiv");
// main.addEventListener("mousemove", (dept) => {
//   gsap.to(cursorPointer, {
//     x: dept.x,
//     y: dept.y,
//   });
// });
main.addEventListener("mousemove", function (dept) {
  gsap.to(cursorPointer, {
    x: dept.x - 5,
    y: dept.y - 65,
  });
});
mainPosterImgDiv.addEventListener("mouseenter", function (event) {
  cursorPointer.innerHTML = "Intenics";
  gsap.to(cursorPointer, {
    scale: 4,
  });
});
mainPosterImgDiv.addEventListener("mouseleave", function (event) {
  cursorPointer.innerHTML = "";
  gsap.to(cursorPointer, {
    scale: 1,
  });
});
