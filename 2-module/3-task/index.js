let calculator = {
  a:0,
   b: 0
  };
  calculator.read = function(a,b) {
    calculator.a = a;
    calculator.b = b;
  };
  calculator.sum = function() {
   let result = 0;
    result= calculator.a + calculator.b
    return result
  };
  calculator.mul = function() {
   let result = 0;
    result= calculator.a * calculator.b
    return result
  };
  // НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
  window.calculator = calculator; // делает ваш калькулятор доступным глобально
  