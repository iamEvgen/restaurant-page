import salsicciaImg from './img/pizzas/salsiccia.png';
import gamberiImg from './img/pizzas/gamberi.png';
import pepeImg from './img/pizzas/pepe.png';
import disgustosoImg from './img/pizzas/disgustoso.png';
import coloratoImg from './img/pizzas/colorato.png';
import pomodoroImg from './img/pizzas/pomodoro.png';
import cremaImg from './img/pizzas/crema.png';
import carneImg from './img/pizzas/carne.png';

const menu = (function() {
  const pizzas = [
    {
      name: 'Salsiccia',
      ingredients: 'Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil',
      url: salsicciaImg
    },
    {
      name: 'Gamberi',
      ingredients: 'Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil',
      url: gamberiImg
    },
    {
      name: 'Pepe',
      ingredients: 'Tomato sauce, Mozarella, Chilli flakes, Olives, Basil',
      url: pepeImg
    },
    {
      name: 'Disgustoso',
      ingredients: 'Tomato sauce, Bacon, Pineapple, Olives, Basil',
      url: disgustosoImg
    },
    {
      name: 'Colorato',
      ingredients: 'Tomato sauce, Mozarella, Onion, Pepper, Champignons, Basil',
      url: coloratoImg
    },
    {
      name: 'Pomodoro',
      ingredients: 'Tomato sauce, Mozarella, Tomato, Onion, Feta cheese, Chilli',
      url: pomodoroImg
    },
    {
      name: 'Crema',
      ingredients: 'White sauce, Mozarella, Shrimps, Salmon, Pineapple, Olives, Basil',
      url: cremaImg
    },
    {
      name: 'Carne',
      ingredients: 'Tomato sauce, Mozarella, Homemade sausage, Bacon, Garlic, Pepper, Chilli',
      url: carneImg
    }
  ];

  const cards = document.createElement('div');
  cards.classList.add('cards');

  pizzas.forEach(element => {
    const card = document.createElement('div');
    card.classList.add('card');

    const pizzaImg = document.createElement('img');
    pizzaImg.src = element.url;
    pizzaImg.alt = `${element.name} icon`;
    card.appendChild(pizzaImg);

    const pizzaName = document.createElement('div');
    pizzaName.textContent = element.name;
    card.appendChild(pizzaName);

    const pizzaIngredients = document.createElement('div');
    pizzaIngredients.textContent = element.ingredients;
    card.appendChild(pizzaIngredients);

    cards.appendChild(card);
  })

  return { cards };
})();

export default menu;