"use strict";
(function() {
  const $lis = document.querySelectorAll("li");

  $lis.forEach(($li, index) => {
    $li.addEventListener("animationend", () => {
      if (index === $lis.length - 1) {
        $lis[0].classList.toggle("isActive");
      } else {
        $lis.forEach($li => $li.classList.remove("isActive"));
        $lis[index + 1].classList.toggle("isActive");
      }
    });
  });
})();
