const breakfastMenu = ['Pancakes - $20', 'Eggs Benedict - $10', 'Oatmeal - $10', 'Frittata - $5'];
const mainCourseMenu = ['Steak - $3', 'Pasta - $20', 'Burger - $15', 'Salmon - $20'];
const dessertMenu = ['Cake - $40', 'Ice Cream - $1', 'Pudding - $5', 'Fruit Salad - $2'];
const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;
let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;
let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;
