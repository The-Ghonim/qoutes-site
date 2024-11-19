const quotes = [
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein",
  },
  {
    quote: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi",
  },
  {
    quote:
      "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost",
  },
  {
    quote: "If you tell the truth, you don't have to remember anything.",
    author: "Mark Twain",
  },
  {
    quote: "الانسان من دون أمل كالنبات بدون ماء",
    author: "Abdo Ghonim",
  },
  {
    quote:
      "كثرة الاسباب لتحقيق شئ ستحولك من شخص عادى الى وحش مفترس لتحقيق هذا الشئ",
    author: "Abdo Ghonim",
  },
  {
    quote:
      "To live is the rarest thing in the world. Most people exist, that is all.",
    author: "Oscar Wilde",
  },
  {
    quote: "Without music, life would be a mistake.",
    author: "Friedrich Nietzsche",
  },
  {
    quote:
      "It is better to be hated for what you are than to be loved for what you are not.",
    author: "Andre Gide",
  },
];
let lastIndex = -1;

function getNewQuote() {
  let randomIndex;

  for (
    randomIndex = Math.floor(Math.random() * quotes.length);
    randomIndex === lastIndex;
    randomIndex = Math.floor(Math.random() * quotes.length)
  );

  lastIndex = randomIndex;

  document.getElementById("text").innerHTML = quotes[randomIndex].quote;
  document.getElementById("name").innerHTML = quotes[randomIndex].author;
}
