const app = document.getElementById('typewriter');

const typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString('Desarrollo sitios web y software.')
  .pauseFor(200)
  .deleteChars(10)
  .start();
