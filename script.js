var flag = false;

var ask;

while (flag == false) {
  ask = prompt("введите месяц своего рождения" , "1");
    switch (ask) {
      case "июнь":
      case "июль":
      case "август":
      case "6":
      case "7":
      case "8":
        alert("вы родились летом");
        flag = true;
        break;
      case "сентябрь":
      case "октябрь":
      case "ноябрь":
      case "9":
      case "10":
      case "11":
        alert("вы родились осенью");
        flag = true;
        break;
      case "декабрь":
      case "январь":
      case "февраль":
      case "12":
      case "1":
      case "2":
        alert("вы родились зимой");
        flag = true;
        break;
      case "март":
      case "апрель":
      case "май":
      case "3":
      case "4":
      case "5":
        alert("вы родились весной");
        flag = true;
        break;
      case null:
        flag = true;
        break;
      default:
        alert("нет такого месяца");
    }
}
