const ant = 'images/ant.jpg';
const apple = 'images/apple.jpg';
const bell = 'images/bell.jpg';
const bird = 'images/bird.jpg';
const jelly = 'images/jelly.jpg';
const cat = 'images/cat.jpg';
const cheese = 'images/cheese.jpg';
const scarf = 'images/scarf.jpg';
const cow = 'images/cow.jpg';
const coin = 'images/coin.jpg';
const doll = 'images/doll.jpg';
const fish = 'images/fish.jpg';
const glove = 'images/glove.jpg';
const grape = 'images/grape.jpg';
const lettuce = 'images/lettuce.jpg';
const horse = 'images/horse.jpg';
const lizard = 'images/lizard.jpg';
const juice = 'images/juice.jpg';
const kite = 'images/kite.jpg';
const lobster = 'images/lobster.jpg';
const lollipop = 'images/lollipop.jpg';
const milk = 'images/milk.jpg';
const olive = 'images/olive.jpg';
const ostrich = 'images/ostrich.jpg';
const peanut = 'images/peanut.jpg';
const box = 'images/box.jpg';
const cinnamon = 'images/cinnamon.jpg';
const sock = 'images/sock.jpg';
const swing = 'images/swing.jpg';
const tie = 'images/tie.jpg';
const turtle = 'images/turtle.jpg';
const pig = 'images/pig.jpg';
const plunger = 'images/plunger.jpg';
const puzzle = 'images/puzzle.jpg';
const scooter = 'images/scooter.jpg';
const seesaw = 'images/seesaw.jpg';
const sheep = 'images/sheep.jpg';
const cake = 'images/cake.jpg';
const candle = 'images/candle.jpg';
const cherry = 'images/cherry.jpg';
const dog = 'images/dog.jpg';
const donkey = 'images/donkey.jpg';
const egg = 'images/egg.jpg';
const garlic = 'images/garlic.jpg';
const onion = 'images/onion.jpg';
const pool = 'images/pool.jpg';
const shield = 'images/shield.jpg';
const slide = 'images/slide.jpg';
const snake = 'images/snake.jpg';
const pumpkin = 'images/pumpkin.jpg';
const zucchini = 'images/zucchini.jpg';
const eggplant = 'images/eggplant.jpg';
const beetle = 'images/beetle.jpg';
const stove = 'images/stove.jpg';
const skunk = 'images/skunk.jpg';
const dolphin = 'images/dolphin.jpg';
const urchin = 'images/urchin.jpg';
const pepper = 'images/pepper.jpg';
const octopus = 'images/octopus.jpg';
const bag = 'images/bag.jpg';

var imgs = [];
function preload() {
  for (var i = 0; i < arguments.length; i++) {
    imgs[i] = new Image();
    imgs[i].src = preload.arguments[i];
  }
}

preload(
  ant,
  apple,
  bell,
  bird,
  jelly,
  cat,
  cheese,
  scarf,
  cow,
  coin,
  doll,
  fish,
  glove,
  grape,
  lettuce,
  horse,
  lizard,
  juice,
  kite,
  lobster,
  lollipop,
  milk,
  olive,
  ostrich,
  peanut,
  box,
  cinnamon,
  sock,
  swing,
  tie,
  turtle,
  pig,
  plunger,
  puzzle,
  scooter,
  seesaw,
  sheep,
  cake,
  candle,
  cherry,
  dog,
  donkey,
  egg,
  garlic,
  onion,
  pool,
  shield,
  slide,
  snake,
  pumpkin,
  zucchini,
  eggplant,
  beetle,
  stove,
  skunk,
  dolphin,
  urchin,
  pepper,
  octopus,
  bag
);
