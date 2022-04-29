const home = (function() {
  const mainPage = document.createElement('div');
  mainPage.classList.add('mainPage');

  const mainImg = document.createElement('div');
  mainImg.classList.add('mainImg');
  mainPage.appendChild(mainImg);

  const mainText = document.createElement('div');
  mainText.classList.add('mainText');
  mainText.innerHTML = 'Hungry? Then why don’t you treat yourself tonight to one of our delicious takeaways – order now www.link.com<br><br>We have been making the best pizzas since 1384'
  mainPage.appendChild(mainText);

  return { mainPage };
})();

export default home;