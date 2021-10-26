function Buy(Name) {
    debugger;
    /*alert('You wanna buy ' + productName);*/
    let Cart = document.querySelector('#Cart tbody');

    let newItem = Cart.insertRow();

    let itemName = newItem.insertCell(0);
    itemName.innerHTML = Name;

    let elementID= '#' + Name.replace(' ', '');

    let itemPrice = newItem.insertCell(1);
    itemPrice.innerHTML = document.querySelector(elementID+' .price').innerHTML;

    let itemQuantity = newItem.insertCell(2);
    itemQuantity.innerHTML = document.querySelector(elementID + ' td .quantity').value;

    let subTotal = newItem.insertCell(3);
    subTotal.innerHTML = '$' + (itemPrice.innerHTML.replace('$','') * itemQuantity.innerHTML);
    document.querySelector(elementID + ' td .quantity').value = '';
    
    let total = 0;
    document.querySelectorAll('#Cart tbody tr').forEach(row =>{
        total = total + parseInt(row.cells[3].innerHTML.replace('$',''));
    });
    document.querySelector('#total').innerHTML = total
}
function checkout(){
    document.querySelectorAll('#Cart tbody tr').forEach(row => row.remove());
    alert("thanks for buying");
}

/*funtion clearCart()*/