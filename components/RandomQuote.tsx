import { Component } from "react";

export default class RandomQuote extends Component {
  goodQuoteCount = 6;

  quotes = [
    `"Better consume your bread before your bread consumes you." -me`,
    `"I can barely stay awake. I need to get my sleep schedule in order." -me (at 11pm, a perfectly reasonable time to go to sleep)`,
    `"If you close your eyes this no longer becomes a website. Just a web." -me`,
    `"When I order a burger, it's called an 'orger'. This is why I screamed 'Where is my orger!' at Five Guys. People looked confused so I thought I should clarify." -me`,
    `"My new years resolution is 240x160px. Yes, that's right, I will become a Game Boy Advance SP and nothing will stop me." -me`,
    `"It's nothing personal." -me (at the germs on my hands when I see public hand sanitizer dispenser)`,

    `"What's up with wind? Where's air trying to be other than my lungs?" -me`,
    `"What life choices led you to this point? You've made some weird ones if you ended up here." - me`,
    `"Quadrilateral is just another word for square." -me`,
    `"Don't let the Ogopogo win!!" -me (during my war against Ogopogo)`,
    `"Don't let SomeRanDev win!!" -Ogopogo (during Ogopogo's war against me)`,
    `"You can put your cold hands in your shirt if they get too cold." -me`,
    `"I want to die... err yee haw!!!" -me (while having diarrhea)`,
    `"I really should just get each room their own couch." -me (out of breath; arm are super tired)`,
    `"It's so over." -me (the public hand sanitizer dispenser was empty as always)`,
  ];

  state = {
    existingQuotes: [],
    quotes: [],
    quoteIndex: 0,
  };

  loadData() {
    // Load quote time tracker
    const timeSinceLastQuote = this.loadLocalStorage("timeSinceLastQuote", 0);
    const now = Date.now();

    // Load quote data
    const recentQuotes: number[] = this.loadLocalStorage("recentQuotes", []);
    const existingQuotes: number[] = this.loadLocalStorage("quotesFound", []);

    // If it hasn't been 10 seconds since last quote, reuse the old one.
    // If it has, find quote index that wasn't used recently.
    let quoteIndex: number;
    if (recentQuotes.length > 0 && now - timeSinceLastQuote < 10000) {
      quoteIndex = recentQuotes[recentQuotes.length - 1];
    } else {
      // restrict it to only my good quotes for the first 3 times.
      const len =
        recentQuotes.length < 4 ? this.goodQuoteCount : this.quotes.length;
      do {
        quoteIndex = Math.floor(Math.random() * len);
      } while (recentQuotes.includes(quoteIndex));

      localStorage.setItem("timeSinceLastQuote", now.toString());
    }

    // Setup state
    // this.state = {
    //   quote: quoteIndex,
    // };

    // Add quote index to recents
    if (recentQuotes.length > 4) recentQuotes.shift();
    recentQuotes.push(quoteIndex);
    localStorage.setItem("recentQuotes", JSON.stringify(recentQuotes));

    // Add quote index to list of ones that have been found
    if (existingQuotes.length < this.quotes.length) {
      if (!existingQuotes.includes(quoteIndex)) {
        existingQuotes.push(quoteIndex);
        localStorage.setItem("quotesFound", JSON.stringify(existingQuotes));
      }
    }

    this.setState({
      existingQuotes,
      quotes: this.quotes,
      quoteIndex,
    });
  }

  // Load item from localstorage and parse it automatically
  loadLocalStorage<T>(id: string, defValue: T): T {
    let result;
    try {
      const item = localStorage.getItem(id);
      result = item !== null ? JSON.parse(item) : defValue;
    } catch (_) {
      result = defValue;
    }
    return result;
  }

  componentDidMount() {
    this.loadData();
  }

  // Render the quote + quote discover progress
  render() {
    const quoteProgress =
      this.state.existingQuotes.length < this.state.quotes.length
        ? this.state.existingQuotes.length +
          " / " +
          this.quotes.length +
          " quotes found."
        : "All quotes discovered!";
    return (
      <>
        <p style={{ maxWidth: "min(600px, 90vw)", fontSize: "1.5em" }}>
          {this.state.quotes[this.state.quoteIndex]}
        </p>
        <p style={{ fontSize: "1em", color: "#666", paddingTop: "8px" }}>
          {"(" + quoteProgress + ")"}
        </p>
      </>
    );
  }
}
