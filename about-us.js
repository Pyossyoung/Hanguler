class Tutorcard {
  constructor(krname, engname, krvoice, engvoice, introduction, star = 5) {
    this.krname = krname;
    this.engname = engname;
    //voices : media src
    this.krvoice = krvoice;
    this.engvoice = engvoice;
    //reviews : array of string reviews
    this.reviews = new Array();
    this.introduction = introduction;
    this.star = star;
  }

  addReview(review) {
    this.reviews.push(review);
  }
}

class Tutorcards {
  constructor(cards, startidx = 0) {
    this.cards = cards;
    this.startidx = startidx;
  }

  shiftRight() {
    if (this.startidx != this.cards.length - 3) {
      this.startidx += 1;
      this.displayCards();
    }
  }

  shiftLeft() {
    if (this.startidx != 0) {
      this.startidx -= 1;
      this.displayCards();
    }
  }

  displayCards() {
    var krnames = document.querySelectorAll(".korean-name");
    var engnames = document.querySelectorAll(".english-name");
    var introductions = document.querySelectorAll(".tutor-introduce");
    //var reviews = document.querySelectorAll(".review p");
    console.log(krnames.length);
    for (let i = this.startidx; i < this.startidx + 3; i++) {
      krnames[i - this.startidx].innerHTML = this.cards[i].krname;
      engnames[i - this.startidx].innerHTML = this.cards[i].engname;
      introductions[i - this.startidx].innerHTML = this.cards[i].introduction;
    }
  }
}

//Tutor card content here
cardList = [
  // seq : korean name, english name, korean voice src, english voice src, introduction
  new Tutorcard(
    "이름1",
    "Jiwoo Yang",
    "kr_jiwoo",
    "eng_jiwoo",
    "1st card\
    Hi~~~ Nice to meet you.\
    I like K-pop stars and listening to K-pop music.\
    Let's talk about your favorite K-pop star together.\
    I'll teach you important Korean words, the you'll be\
    able to better understand the lyrics.\
    Let's master Korean with me!"
  ),
  new Tutorcard(
    "이름2",
    "SeonYoung Pyo",
    "kr_sy",
    "eng_sy",
    "2nd card\
    This is 표선영1"
  ),
  new Tutorcard(
    "이름3",
    "Jiwoo Yang",
    "kr_jiwoo",
    "eng_jiwoo",
    "3rd card\
    Jiwoo Yang 222222"
  ),
  new Tutorcard(
    "이름4",
    "SeonYoung Pyo",
    "kr_sy",
    "eng_sy",
    "4th card\
    엽떡 먹고 싶다"
  ),
  new Tutorcard(
    "이름5",
    "Pyossyoung",
    "kr_sy",
    "eng_sy",
    "5th card\
  앙버터도"
  ),
];

cards = new Tutorcards(cardList);
cards.displayCards();

var prev = document.getElementById("prev-arrow");
var next = document.getElementById("next-arrow");
console.log(prev);
prev.onclick = () => cards.shiftLeft();
next.onclick = () => cards.shiftRight();

//TODO : reviews change.... queryselectorAll doesn't work as I intended OTL....
