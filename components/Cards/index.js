// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.


function cardMaker (artdata) {
    const card = document.createElement('div')
    const headline = document.createElement('div')
    const author = document.createElement('div')
    const image = document.createElement('div')
    const img = document.createElement('img')
    const by = document.createElement('span')

    card.append(headline, author)
    author.append(image, by)
    image.append(img)

    card.classList.add('card')
    headline.classList.add('headline')
    author.classList.add('author')
    image.classList.add('img-container')

    img.src = artdata.authorPhoto
    headline.textContent = artdata.headline
    by.textContent = `By: ${artdata.authorName}`

    return card
}

const finalCard = document.querySelector('.cards-container')

axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then(response => {
console.log('card response', response.data)
const articlekeys = Object.keys(response.data.articles)
articlekeys.forEach((element) => {
    let arrofobjects = (response.data.articles[element])
    arrofobjects.forEach((element) => {
        finalCard.appendChild(cardMaker(element))
    })
})
})
