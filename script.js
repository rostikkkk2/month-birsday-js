var i = 0;

while (i == 0) {
  var ask = prompt("введите месяц своего рождения" , "01");
  if(ask != ""){
    i = 1;
  }
}

switch (ask) {
  case "июнь":
  case "июль":
  case "август":
  case "06":
  case "07":
  case "08":
    alert("вы родились летом");
    break
  case "сентябрь":
  case "октябрь":
  case "ноябрь":
  case "09":
  case "10":
  case "11":
    alert("вы родились осенью");
    break;
  case "декабрь":
  case "январь":
  case "февраль":
  case "12":
  case "01":
  case "02":
    alert("вы родились зимой");
    break;
  case "март":
  case "апрель":
  case "май":
  case "03":
  case "04":
  case "05":
    alert("вы родились весной");
    break;
  default:
    alert("нет такого месяца");
}
