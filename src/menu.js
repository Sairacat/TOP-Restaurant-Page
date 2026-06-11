import coffee from './pic/coffee.jpg';
import sandwich from './pic/sandwich.jpg';
import salad from './pic/salad.jpg';
import spag from './pic/spag.jpg';

const moduleArea = document.querySelector('.module');

const menuTitle = document.createElement('div');
menuTitle.textContent = 'Our Delicious Food';
menuTitle.classList.add('menu-title');

const foodArray = [];

class Food {
    constructor(name, price, pic) {
        this.name = name;
        this.price = price;
        this.pic = pic;
    }
}

const domCoffee = new Food('Witch Coffee', '$5', coffee);
const domSanwich = new Food('Witch Sandwich', '$10', sandwich);
const domSalad = new Food('Witch Salad', '$8', salad);
const domSpag = new Food('Witch Noodle', '$12', spag);

foodArray.push(domCoffee, domSanwich, domSalad, domSpag);

const cardArray = foodArray.map(food => {

    const card = document.createElement('div');
    card.classList.add('food-card');

    const foodTitle = document.createElement('div');
    foodTitle.textContent = food.name;
    foodTitle.classList.add('food-title');

    const foodPrice = document.createElement('div');
    foodPrice.textContent = food.price;
    foodPrice.classList.add('food-price');

    const foodImage = document.createElement('img');
    foodImage.src = food.pic;

    card.appendChild(foodTitle);
    card.appendChild(foodPrice);
    card.appendChild(foodImage);

    return card;
})



function generateMenu() {
    if(moduleArea.classList.contains('menu-module-grid')) {
        return;
    }else {
        moduleArea.className = 'module';
        moduleArea.classList.add('menu-module-grid');
        moduleArea.replaceChildren();
    }

    moduleArea.appendChild(menuTitle);
    for(let card of cardArray) {
        moduleArea.appendChild(card);
    }
}

export {generateMenu};
