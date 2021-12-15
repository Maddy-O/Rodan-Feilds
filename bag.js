

var total = [];
var bag = JSON.parse(localStorage.getItem("bagData")) || [];
displayData(bag)

function displayData(bag) {

    bag.map(function (ele, index) {
        var main = document.createElement("div")
        main.setAttribute("id", "imgdiv")
        var prodImage = document.createElement("img");
        prodImage.setAttribute("src", ele.prodimage);

        var prodName = document.createElement("h3");
        prodName.textContent = ele.prodname;
        prodName.setAttribute("id", "name")

        var prodPrice = document.createElement("h4");
        prodPrice.textContent = ele.price;
        total.push(ele.price)

        main.append(prodImage, prodName, prodPrice)
        document.querySelector("#bagProduct").append(main)

    });
}

var ttl = total.reduce(function (ac, cv) {
    return Number(ac) + Number(cv);
})
document.querySelector("#subtotal_price").textContent = "$ " + ttl;
document.querySelector("#subtotal_price=").textContent = "$ " + ttl;
