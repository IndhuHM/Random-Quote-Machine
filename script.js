const quotes = [
["First say to yourself what you would be; and then do what you have to do", "Epictetus"],
["You can't stop the waves, but you can learn how to surf", "Jon Kabat-Zinn"],
["Happiness is anyone and anything that's loved by you", "Charlie Brown"],
["Learn from yesterday, live for today, look to tomorrow, rest this afternoon", "Charlie Brown"],
["The best ideas come as jokes. Make your thinking as funny as possible", "David Ogilvy"],
["The way you start your day determines how well you live your day", "Robin Sharma"],
["When you think and say I can, confidence and happiness will fill your entire being", "Remez Sasson"],
["From there to here, and here to there, funny things are everywhere", "Dr. Seuss"],
["Learn how to be happy with what you have while you pursue all that you want", "Jim Rohn"],
["If you want it and expect it, it will be yours very soon", "Esther Hicks"],
["There isn't anything that I cannot be or do or have", "Abraham Hicks"],
["The beginning is the most important part of any work", "Plato"]];

class RandomQuotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomIndex: 0 };


    this.handleClick = this.handleClick.bind(this);

  }

  handleClick() {
    this.setState({
      randomIndex: Math.floor(Math.random() * quotes.length) });

  }

  render() {
    const quote = quotes[this.state.randomIndex];


    return /*#__PURE__*/(
      React.createElement("div", { id: "text" }, /*#__PURE__*/
      React.createElement("div", { id: "quote" }, /*#__PURE__*/
      React.createElement("h1", null, quote[0]), /*#__PURE__*/
      React.createElement("h2", { id: "author" }, quote[1]), /*#__PURE__*/
      React.createElement("button", { id: "new-quote", onClick: this.handleClick }, "New Quote"), /*#__PURE__*/
      React.createElement("a", { id: "tweet-quote", href: "twitter.com/intent/tweet" }, "Tweet"))));



  }}
;
ReactDOM.render( /*#__PURE__*/
React.createElement(RandomQuotes, null),
document.getElementById("quote-box"));