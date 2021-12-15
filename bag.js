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

        var remove = document.createElement("button");
        remove.textContent = "Remove"



        // var prodN = document.querySelector("#pname").append(prodName)
        // var prodpr = document.querySelector("pprice").append(prodPrice)
        main.append(prodImage, prodName, prodPrice, remove)
        document.querySelector("#bagProduct").append(main)

    });
}