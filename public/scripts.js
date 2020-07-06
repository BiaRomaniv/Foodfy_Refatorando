const cards = document.querySelectorAll('.card')
for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function() {
        window.location.href = `/receitas_detalhe/${i}`
    })
}

//for (let card of cards) {
//   card.addEventListener("click", function() {
//      const recipeId = card.getAttribute("id")

//    window.location.href = `/receitas_detalhe/${recipeId}`

// })
//}