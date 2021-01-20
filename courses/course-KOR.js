
Array.prototype.forEach.call(document.getElementsByClassName('head-tab')[0].getElementsByTagName('li'), function (_tab_li) {
  _tab_li.addEventListener('click', function () {
    switch (_tab_li.getAttribute('data-scroll')) {
      case 'professional':
        fnScrollTop('professional');
        break;
      case 'diverse':
        fnScrollTop('diverse');
        break;
    }
  });
});

Array.prototype.forEach.call(document.getElementsByClassName('head-tab')[1].getElementsByTagName('li'), function (_tab_li) {
  _tab_li.addEventListener('click', function () {
    switch (_tab_li.getAttribute('data-scroll')) {
      case 'standardBox':
        fnScrollTop('standardBox');
        break;
      case 'freeTalking':
        fnScrollTop('freeTalking');
        break;
      case 'currentIssues':
        fnScrollTop('currentIssues');
        break;
    }
  });
});

function fnScrollTop(_id) {
  var tabOffsetTop = document.getElementById(_id).offsetTop;
  window.scrollTo({ top: tabOffsetTop, behavior: 'smooth' });
}

function changeLevelTableImg() {
  var table = document.querySelector('.level-table');
  if (matchMedia("screen and (max-width:650px)").matches) {
    table.src = "/wp-content/uploads/2020/12/KOR-mobileCourses-Image.png";
  } else {
    table.src = "/wp-content/uploads/2020/12/KOR-webCourses-Image.png";
  }
}

changeLevelTableImg();
window.addEventListener("resize", () => changeLevelTableImg());