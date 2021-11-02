// - Récupération des données inclus dans l'API
async function getArticles() {
    var articlesCatch = await fetch("http://localhost:3000/api/products")
    return await articlesCatch.json();
}


    // Répartition des données de l'API dans le DOM
    async function fillSection() {
        var result = await getArticles ()
        .then(function (resultatAPI){
            const articles = resultatAPI;
            console.table(articles);
            for (let article in articles) {
    
                // Insertion de l'élément "a"
                let productLink = document.createElement("a");
                document.querySelector(".items").appendChild(productLink);
                productLink.href = `product.html?id=${resultatAPI[article]._id}`;