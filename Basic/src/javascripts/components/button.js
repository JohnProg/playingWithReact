class Button {
  initialize() {
    this.$el = document.querySelector('body');

    if (!this.$el) return false;

    this.attachEvents();
  }

  attachEvents() {
    if (this.$el.querySelector('.box-animation__button')) {
      this.$el
        .querySelector('.box-animation__button')
        .addEventListener('click', this._actionToggle.bind(this));
    }
  }

  _actionToggle(event) {
    this.$el
      .querySelector('.box-animation__button')
      .classList.toggle('box-animation__button--active');
  }

  // scroll(curTop) {
  //   if (curTop >= 100 && !this.sticky) {
  //     this.sticky = true;
  //     this.$el.classList.add('sticky');
  //   } else if (curTop < 100 && this.sticky) {
  //     this.sticky = false;
  //     this.$el.classList.remove('sticky');
  //   }
  // }
}

export default Button;
