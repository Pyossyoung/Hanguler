function bindingAccordionEvent(wrap) {
  let areaArr = document.querySelectorAll(wrap);

  areaArr.forEach(function (area) {
    let hasGroup = area.dataset["group"] !== undefined ? true : false;
    let btn = area.querySelector(".btn_toggle");

    btn.addEventListener("click", function () {
      if (hasGroup === true) {
        let name = area.dataset["group"];
        let groupArr = document.querySelectorAll(
          wrap + '[data-group="' + name + '"]'
        );
        let thisContent = area.querySelector(".content_area");

        groupArr.forEach(function (group) {
          let content = group.querySelector(".content_area");
          let btn = group.querySelector(".btn_toggle");
          if (content == thisContent) {
            content.classList.toggle("act");
            if (content.classList.contains("act")) {
              btn.setAttribute("data-after", "-");
            } else {
              btn.setAttribute("data-after", "+");
            }
          } else {
            content.classList.remove("act");
            btn.setAttribute("data-after", "+");
          }
        });
      } else {
        let content = area.querySelector(".content_area");
        content.classList.toggle("act");
      }
    });
  });
}

document.querySelectorAll(".btn_toggle").forEach((btn) => {
  btn.setAttribute("data-after", "+");
});

bindingAccordionEvent(".accordion_area");
