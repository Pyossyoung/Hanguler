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
    var reviews = document.querySelectorAll(".review p");
    console.log(reviews);
    for (let i = this.startidx; i < this.startidx + 3; i++) {
      krnames[i - this.startidx].innerHTML = this.cards[i].krname;
      engnames[i - this.startidx].innerHTML = this.cards[i].engname;
      introductions[i - this.startidx].innerHTML = this.cards[i].introduction;
      reviews[(i - this.startidx) * 5].innerHTML = this.cards[i].reviews[0];
      reviews[(i - this.startidx) * 5 + 1].innerHTML = this.cards[i].reviews[1];
      reviews[(i - this.startidx) * 5 + 2].innerHTML = this.cards[i].reviews[2];
      reviews[(i - this.startidx) * 5 + 3].innerHTML = this.cards[i].reviews[3];
      reviews[(i - this.startidx) * 5 + 4].innerHTML = this.cards[i].reviews[4];
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

tutor_cards = new Tutorcards(cardList);

// add reviews here
tutor_cards.cards[0].addReview("이름1-review1");
tutor_cards.cards[0].addReview("이름1-review2");
tutor_cards.cards[0].addReview("이름1-review3");
tutor_cards.cards[0].addReview("이름1-review4");
tutor_cards.cards[0].addReview("이름1-review5");

tutor_cards.cards[1].addReview("이름2-review1");
tutor_cards.cards[1].addReview("이름2-review2");
tutor_cards.cards[1].addReview("이름2-review3");
tutor_cards.cards[1].addReview("이름2-review4");
tutor_cards.cards[1].addReview("이름2-review5");

tutor_cards.cards[2].addReview("이름3-review1");
tutor_cards.cards[2].addReview("이름3-review2");
tutor_cards.cards[2].addReview("이름3-review3");
tutor_cards.cards[2].addReview("이름3-review4");
tutor_cards.cards[2].addReview("이름3-review5");

tutor_cards.cards[3].addReview("이름4-review1");
tutor_cards.cards[3].addReview("이름4-review2");
tutor_cards.cards[3].addReview("이름4-review3");
tutor_cards.cards[3].addReview("이름4-review4");
tutor_cards.cards[3].addReview("이름4-review5");

tutor_cards.cards[4].addReview("이름5-review1");
tutor_cards.cards[4].addReview("이름5-review2");
tutor_cards.cards[4].addReview("이름5-review3");
tutor_cards.cards[4].addReview("이름5-review4");
tutor_cards.cards[4].addReview("이름5-review5");

tutor_cards.displayCards();

var prev = document.getElementById("prev-arrow");
var next = document.getElementById("next-arrow");
prev.onclick = () => tutor_cards.shiftLeft();
next.onclick = () => tutor_cards.shiftRight();

//TODO : reviews change.... queryselectorAll doesn't work as I intended OTL....
