

const menuItems = [
    { img: "https://rukminim2.flixcart.com/flap/64/64/image/29327f40e9c4d26b.png?q=100", text: "Grocery" },
    { img: "https://rukminim2.flixcart.com/flap/64/64/image/22fddf3c7da4c4f4.png?q=100", text: "Mobiles" },
    { img: "https://m.media-amazon.com/images/I/81gQeQg4yoL._AC_UF350,350_QL80_.jpg", text: "Fashion" },
    { img: "https://d2e6ccujb3mkqf.cloudfront.net/1bae4ee7-a255-4987-afd9-3875ea1c4b67-3_0c47c1ae-7d17-4f98-9c70-72603dd305e0.jpg", text: "Electronics" },
    { img: "https://img.freepik.com/premium-vector/single-soft-armchair-with-pillow-flat-style-vector-illustration_545793-499.jpg", text: "Home & Living" },
    { img: "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/0139228b2f7eb413.jpg?q=100", text: "Appliances" },
    { img: "https://rukminim2.flixcart.com/flap/64/64/image/71050627a56b4693.png?q=100", text: "Flight Tickets" },
    { img: "https://m.media-amazon.com/images/I/71aDNjQpd2L._AC_UF1000,1000_QL80_.jpg", text: "Toy & Baby" },
    { img: "https://cdn.dealerspike.com/imglib/v1/800x600/imglib/trimsdb/11050021-0-70079131.jpg", text: "Two Wheeler" },
];

const menuContainer = document.getElementById("menu-container");

menuItems.forEach(item => {
    const menuItem = document.createElement("div");
    menuItem.innerHTML = `
        <div><img src="${item.img}" alt="${item.text}"></div>
        <div>${item.text}</div>
    `;
    menuContainer.appendChild(menuItem);
});


const slider = document.getElementById("sliders");

const SilderImg = document.createElement("img");
SilderImg.src = "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/02f983d0220dcd5d.jpeg?q=20"

slider.appendChild(SilderImg);
slider.style.display = "flex";
slider.style.justifyContent = "center";
slider.style.width = "90%";
slider.style.margin = "auto";
SilderImg.style.width = "100%";
slider.style.marginTop = "20px";


const TopOffers = [
    { image: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/c/q/a/5xl-68709201-puma-original-imah64swwzkqg42k.jpeg?q=70", name: "Puma", price: "Rs. 500" },
    { image: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/c/q/a/5xl-68709201-puma-original-imah64swwzkqg42k.jpeg?q=70", name: "Puma", price: "Rs. 500" },
    { image: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/c/q/a/5xl-68709201-puma-original-imah64swwzkqg42k.jpeg?q=70", name: "Puma", price: "Rs. 500" },
    { image: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/c/q/a/5xl-68709201-puma-original-imah64swwzkqg42k.jpeg?q=70", name: "Puma", price: "Rs. 500" },
    { image: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/c/q/a/5xl-68709201-puma-original-imah64swwzkqg42k.jpeg?q=70", name: "Puma", price: "Rs. 500" },
    { image: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/c/q/a/5xl-68709201-puma-original-imah64swwzkqg42k.jpeg?q=70", name: "Puma", price: "Rs. 500" },
]

const TopDeals = document.getElementById("top-deals");


TopDeals.style.display = "flex";
TopDeals.style.gap = "20px";
TopDeals.style.width = "90%";
TopDeals.style.margin = "auto";
TopDeals.style.marginTop = "20px";
TopDeals.style.gap = "50px";

const AdsDev = document.createElement("div");
const AdsDevImg = document.createElement("img");
AdsDev.style.display = "flex";
AdsDev.style.flexDirection = "column";
AdsDev.style.justifyContent = "center";
AdsDev.style.alignItems = "center";

AdsDev.style.border = "1px solid #ddd";

AdsDev.style.padding = "10px";
AdsDev.style.borderRadius = "5px";
AdsDevImg.style.width = "100%";


TopOffers.forEach(item => {

    const TopDealsText = document.createElement("div");
    TopDealsText.style.display = "flex";
    TopDealsText.style.flexDirection = "column";
    TopDealsText.style.justifyContent = "center";
    TopDealsText.style.alignItems = "center";
    TopDealsText.style.border = "1px solid #ddd";
    TopDealsText.style.padding = "15px";
    TopDealsText.style.borderRadius = "8px";
    TopDealsText.style.backgroundColor = "#f9f9f9";
    TopDealsText.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
    TopDealsText.style.transition = "transform 0.3s, box-shadow 0.3s";

    TopDealsText.addEventListener("mouseenter", () => {
        TopDealsText.style.transform = "translateY(-5px)";
        TopDealsText.style.boxShadow = "0 8px 12px rgba(0, 0, 0, 0.2)";
    });

    TopDealsText.addEventListener("mouseleave", () => {
        TopDealsText.style.transform = "translateY(0)";
        TopDealsText.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
    });

    const TopDealsImg = document.createElement("img");
    TopDealsImg.src = item.image;
    TopDealsImg.style.width = "120px";
    TopDealsImg.style.height = "120px";
    TopDealsImg.style.objectFit = "cover";
    TopDealsImg.style.marginBottom = "10px";

    const TopDealsPrice = document.createElement("p");
    TopDealsPrice.innerHTML = item.price;
    TopDealsPrice.style.margin = "5px 0";
    TopDealsPrice.style.fontSize = "14px";
    TopDealsPrice.style.color = "#333";

    const TopDealsName = document.createElement("p");
    TopDealsName.innerHTML = item.name;
    TopDealsName.style.fontWeight = "bold";
    TopDealsName.style.fontSize = "16px";
    TopDealsName.style.color = "#555";
    TopDealsName.style.margin = "5px 0";

    TopDealsText.appendChild(TopDealsImg);
    TopDealsText.appendChild(TopDealsName);
    TopDealsText.appendChild(TopDealsPrice);

    TopDeals.appendChild(TopDealsText);

});


AdsDevImg.src = "https://rukminim2.flixcart.com/fk-p-flap/530/810/image/ec9bba198c534edb.jpg?q=20";
AdsDev.appendChild(AdsDevImg);
TopDeals.appendChild(AdsDev);

const brandsOffPics = [
    { image: "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/d042ed7a0d8176fe.jpg?q=20" },
    { image: "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/08ed687587b6272c.jpg?q=20" },
    { image: "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/1826e1a067a49778.jpg?q=20" },
    { image: "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/148e9883140d6e35.png?q=20" },
    { image: "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/7a15ff56886d1051.jpg?q=20" },
    { image: "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/7a15ff56886d1051.jpg?q=20" }
];

const brandsOff = document.getElementById("brands-off");
brandsOff.style.display = "flex";
brandsOff.style.flexWrap = "wrap";
brandsOff.style.gap = "83px";
brandsOff.style.width = "90%";
brandsOff.style.margin = "20px auto";
brandsOff.style.justifyContent = "center"; 
brandsOff.style.marginTop = "80px";

brandsOffPics.forEach(item => {
    const brandsOffImgDiv = document.createElement("div");
   
    brandsOffImgDiv.style.display = "flex";
    brandsOffImgDiv.style.justifyContent = "center";
    brandsOffImgDiv.style.alignItems = "center";

    const brandsOffImg = document.createElement("img");
    brandsOffImg.src = item.image;
    brandsOffImg.style.width = "400px"; 
    brandsOffImgDiv.appendChild(brandsOffImg);
    brandsOff.appendChild(brandsOffImgDiv);
});



const flightAds = document.getElementById("Flight-ads");

const flightAdsImg = document.createElement("img");
flightAdsImg.src = "https://rukminim2.flixcart.com/fk-p-flap/1600/350/image/d3d9fe6aa331e1fa.jpg?q=20"

flightAds.appendChild(flightAdsImg);
flightAds.style.display = "flex";
flightAds.style.justifyContent = "center";
flightAds.style.width = "90%";
flightAds.style.margin = "auto";
flightAdsImg.style.width = "100%";
flightAds.style.marginTop = "50px";



flightAds.style.marginBottom = "50px";
