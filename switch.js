// 1
// Напишіть код з використанням if..else, що відповідає наступній конструкції switch:


switch (browser) {
    case 'Edge':
        alert ("You've got the Edge!");
        break;

        case 'Chrome':
        case 'Firefox':
        case 'Safari':
        case 'Opera':
            alert('Ми підтримуємо і ці браузери' );
            break;

        default:
            alert( 'Маємо надію, що ця сторінка виглядає добре!' );

}


if (browser == 'Edge') {
    alert("You've got the Edge!");
} else if (browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera') {
    alert('Ми підтримуємо і ці браузери');
} else {
    alert('Маємо надію, що ця сторінка виглядає добре!');
}