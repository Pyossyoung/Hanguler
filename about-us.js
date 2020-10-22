class Tutorcards {
  constructor(cards, startidx = 0) {
    this.cards = cards;
    this.startidx = startidx;
  }

  shiftRight() {
    if (this.startidx != this.cards.length - this.toShow) {
      this.startidx += 1;
    }
    this.displayCards();
  }

  shiftLeft() {
    if (this.startidx != 0) {
      this.startidx -= 1;
    }
    this.displayCards();
  }

  displayCards() {
    if (
      matchMedia("screen and (min-width:580px) and (max-width:784px)").matches
    ) {
      this.toShow = 2;
    } else if (matchMedia("screen and (max-width:580px)").matches) {
      this.toShow = 1;
    } else {
      this.toShow = 3;
    }
    if (this.startidx > this.cards.length - this.toShow) {
      this.startidx = this.cards.length - this.toShow;
    }
    for (let i = 0; i < this.cards.length; i++) {
      if (i >= this.startidx && i < this.startidx + this.toShow) {
        this.cards[i].classList.add("act");
      } else {
        this.cards[i].classList.remove("act");
      }
    }
  }
}

tutor_cards = new Tutorcards(document.querySelectorAll(".card"));
tutor_cards.displayCards();

var prev = document.getElementById("prev-arrow");
var next = document.getElementById("next-arrow");
prev.onclick = () => tutor_cards.shiftLeft();
next.onclick = () => tutor_cards.shiftRight();

window.addEventListener("resize", () => tutor_cards.displayCards());
