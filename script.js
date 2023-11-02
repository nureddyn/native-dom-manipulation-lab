let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
  const mainTitle = document.querySelector('#main-title');
  mainTitle.textContent = "I'm DOM Toretto, and this is my Page";

  // Part 2
  const body = document.querySelector('body');
  body.style.backgroundColor = 'Grey';

  // Part 3
  const favoriteThings = document.querySelector('#favorite-things');
  favoriteThings.removeChild(favoriteThings.children[5]);

  // Part 4
  document.querySelectorAll('.special-title').forEach((title) => {
    title.style.fontSize = '2rem';
  });

  // Part 5
  const pastRaces = document.querySelector('#past-races');
  pastRaces.removeChild(pastRaces.children[3]);

  // Part 6
  const newLi = document.createElement('li');
  newLi.innerHTML = 'Pittsburgh';
  pastRaces.append(newLi);

  // Part 7
  const newPost = document.createElement('div');
  newPost.classList.add('blog-post');
  newPost.classList.toggle('purple');
  let newH1 = document.createElement('h1');
  newH1.innerHTML = newLi.innerHTML;
  let paragraph = document.createElement('p');
  paragraph.textContent = 'I JUMPED WITH MY CAR FROM MOUNT WASHINGTON TO THE OHIO RIVER!';
  newPost.append(newH1, paragraph);
  document.querySelector('.main').append(newPost);

  // Part 8
  document.querySelector('#quote-title').onclick = () => {
    randomQuote();
  };

  // Part 9
  document.querySelectorAll('.blog-post').forEach((post) => {
    post.addEventListener('mouseout', () => {post.classList.toggle('purple')});
    post.addEventListener('mouseenter', () => {post.classList.toggle('red')});
  });
});
