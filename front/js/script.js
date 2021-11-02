// - Récupération des données inclus dans l'API
async function getArticles() {
    var articlesCatch = await fetch("http://localhost:3000/api/products")
    return await articlesCatch.json();
}