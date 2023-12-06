let bagItems = [];
onLoad();

function onLoad() {
    let bagItemsStr = localStorage.getItem('bagItems');
    bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
    displayShoesItem();
    bagCount();


}



function addToBag(itemId) {
    bagItems.push(itemId);
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    bagCount();
}

function bagCount() {
    let bagCountElement = document.querySelector('#bag-item-count');
    if (bagItems.length > 0) {
        console.log('hello');
        bagCountElement.style.visibility = 'visible';
        bagCountElement.innerText = bagItems.length;
    } else {
        bagCountElement.style.visibility = 'hidden';

    }
}

function displayShoesItem() {

    let shoesSectionElement = document.querySelector('#shoes-section');
    if (!shoesSectionElement) {
        return;
    }
    let innerHtml = '';
    items.forEach(item => {
        innerHtml += `   
<div id="shoes">
    <img id="shoesimg" src="${item.shoesimg}">
    <div id="rating">
        ${item.rating.star} ❤ |${item.rating.count}
    </div>
    <div id="comapanyname">${item.companyname}</div>
    <div id="shoesname">${item.shoesname}</div>
    <div id="shoesprices">
        <span id="currentprice"> Rs ${item.current_price}</span>
        <span id="originalprice"> Rs ${item.original_price}</span>
        <span id="discount">(${item.discount_percentage}% OFF)</span>
    </div>
    <button id="add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
</div>`
    });

    shoesSectionElement.innerHTML = innerHtml;

}