let calculator = {
  read(a = 0, b = 0) {
    return {
      a: this.a = +a,
      b: this.b = +b,
    }
  }, sum() {
    return this.a + this.b
  }, mul() {
    return this.a * this.b
  }
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
