document.getElementById('btnPackage').addEventListener('click', function () {
  fnScrollTop('bestPackage')
});

function fnScrollTop(_id) {
  var tabOffsetTop = document.getElementById(_id).offsetTop;
  window.scrollTo({ top: tabOffsetTop, behavior: 'smooth' });
}

Array.prototype.map.call(document.getElementsByClassName('icon-question-mark'), function (_icon) {
  _icon.addEventListener('mouseover', function () {
    switch (_icon.getAttribute('data-mark')) {
      case 'curriculum':
        document.getElementsByClassName('question-mark-txt')[0].classList.remove('g_hidden');
        break;
      case 'duration':
        document.getElementsByClassName('question-mark-txt')[1].classList.remove('g_hidden');
        break;
      case 'number':
        document.getElementsByClassName('question-mark-txt')[2].classList.remove('g_hidden');
        break;
    }
  });
});

Array.prototype.map.call(document.getElementsByClassName('icon-question-mark'), function (_icon) {
  _icon.addEventListener('mouseout', function () {
    Array.prototype.map.call(document.getElementsByClassName('question-mark-txt'), function (_txt) {
      _txt.classList.add('g_hidden');
    });
  });
});

// Array.prototype.map.call(document.getElementsByName('time'), function (_pricing_time) {
//   _pricing_time.addEventListener('change', function () {
//     document.getElementById('timeValue').value = this.value;
//     if (this.value === '10') {
//       document.getElementsByClassName('pricing-class')[0].innerHTML = '15';
//       document.getElementById('class1').value = '15';
//       document.getElementsByClassName('pricing-class')[1].innerHTML = '30';
//       document.getElementById('class2').value = '30';
//     }
//     else {
//       document.getElementsByClassName('pricing-class')[0].innerHTML = '7';
//       document.getElementById('class1').value = '7';
//       document.getElementsByClassName('pricing-class')[1].innerHTML = '15';
//       document.getElementById('class2').value = '15';

//     }
//   });
// });

var curriculumValue = document.getElementById('curriculumValue').value;
var timeValue = document.getElementById('timeValue').value;
var classValue = document.getElementById('classValue').value;


//fnShowBookly('17');

function fnShowBookly(_value) {
  // console.log(_value);
  Array.prototype.forEach.call(document.getElementsByClassName('bookly-form'), function (_bookly_form) {
    // console.log(_bookly_form, 'ddd');
    if (_bookly_form.getAttribute('data-show') === _value) {
      _bookly_form.classList.remove('g_hidden');
    }
    else {
      _bookly_form.classList.add('g_hidden');
    }
  });
}

Array.prototype.map.call(document.getElementsByName('curriculum'), function (_curriculum) {
  _curriculum.addEventListener('change', function () {
    curriculumValue = this.value;
  })
});

Array.prototype.map.call(document.getElementsByName('time'), function (_time) {
  _time.addEventListener('change', function () {
    timeValue = this.value;
  })
});

Array.prototype.map.call(document.getElementsByName('class'), function (_class) {
  _class.addEventListener('change', function () {
    classValue = this.value;
    // console.log(1);
    if (curriculumValue === 'standard') {
      if (timeValue === '10') {
        if (classValue === '7') {
          fnShowBookly('28');
        }
        else if (classValue === '15') {
          fnShowBookly('17');
        }
        else {
          fnShowBookly('25')
        }
      }
      else { //20min
        if (classValue === '7') {
          fnShowBookly('28');
        }
        else if (classValue === '15') {
          fnShowBookly('17');
        }
        else {
          fnShowBookly('25')
        }
      }
    }
    else if (curriculumValue === 'free') {
      if (timeValue === '10') {
        if (classValue === '7') {
          fnShowBookly('28');
        }
        else if (classValue === '15') {
          fnShowBookly('17');
        }
        else {
          fnShowBookly('25')
        }
      }
      else { //20min
        if (classValue === '7') {
          fnShowBookly('28');
        }
        else if (classValue === '15') {
          fnShowBookly('17');
        }
        else {
          fnShowBookly('25')
        }
      }

    }
    else {
      if (timeValue === '10') {
        if (classValue === '7') {
          fnShowBookly('28');
        }
        else if (classValue === '15') {
          fnShowBookly('17');
        }
        else {
          fnShowBookly('25')
        }
      }
      else { //20mit
        if (classValue === '7') {
          fnShowBookly('28');
        }
        else if (classValue === '15') {
          fnShowBookly('17');
        }
        else {
          fnShowBookly('25')
        }
      }
    }
  });
});

function changeTableImg() {
  var table = document.querySelector('.pricing-table');
  if (matchMedia("screen and (max-width:650px)").matches) {
    table.src = "/wp-content/uploads/2020/12/ENG-mobilePricing-Image.png";
  } else {
    table.src = "/wp-content/uploads/2020/12/ENG-webPricing-Image.png";
  }
}

changeTableImg();
window.addEventListener("resize", () => changeTableImg());