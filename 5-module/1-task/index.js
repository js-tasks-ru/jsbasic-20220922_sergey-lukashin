function hideSelf() {
  let btn = document.querySelector('.hide-self-button');
  btn.addEventListener('click', function hide() {
    this.hidden = true;
  });
}
