const newBtn = document.querySelector('#genBtn');
newBtn.addEventListener('click', getQuote);
const spinner = document.querySelector('#js-spinner');
const twitterbtn = document.querySelector('#shareBtn');


const endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';

const quoteText = document.querySelector('#js-quote-text');

async function getQuote() {
  spinner.classList.remove('hidden');
  quoteText.classList.add('hidden');
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw Error(response.statusText);
    }
    const json = await response.json();
      displayQuote(json.message);
      setTwitterBtn(json.message);
      spinner.classList.add('hidden');
      quoteText.classList.remove('hidden');
      quoteText.classList.add('bubble');
  } catch (err) {
    console.log(err)
    alert('Failed to fetch new quote');
  }
}

function displayQuote(quote) {
  quoteText.textContent = quote;
}

function setTwitterBtn(quote){
  twitterbtn.setAttribute('href', `https://twitter.com/share?text=${quote} - Donald Trump`);
}
// getQuote();