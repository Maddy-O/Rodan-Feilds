

var total = [];
var arr2 = JSON.parse(localStorage.getItem("bagData")) || [];
// localStorage.setItem("bagData", JSON.stringify(arr2))
displayData(arr2)

function displayData(arr2) {

    arr2.map(function (ele, index) {

        var main = document.createElement("div")
        main.setAttribute("id", "imgdiv")
        var prodImage = document.createElement("img");
        prodImage.setAttribute("src", ele.prodimage);

        var prodName = document.createElement("h3");
        prodName.textContent = ele.prodname;


        var prodPrice = document.createElement("h4");
        prodPrice.textContent = " $ " + " " + ele.price;
        total.push(ele.price)

        var remove = document.createElement("button");
        remove.textContent = "Remove";
        remove.setAttribute("class", "remove")
        remove.addEventListener("click", function () {
            deletetask(index);
        });


        var div2 = document.createElement("div");
        div2.append(prodName, prodPrice)
        div2.setAttribute("id", "name-price")


        main.append(prodImage, div2, remove)
        document.querySelector("#bagProduct").append(main)

    });
}

var ttl = total.reduce(function (ac, cv) {
    return Number(ac) + Number(cv);
})
document.querySelector("#subtotal_price").textContent = "$ " + ttl;
document.querySelector("#continue").addEventListener("click", gotobest);

function gotobest() {
    window.location.href = "bestsellers.html"
}
function deletetask(index) {
    arr2.splice(index, 1)
    localStorage.setItem("bagData", JSON.stringify(arr2));

    displayData(arr2)
}
