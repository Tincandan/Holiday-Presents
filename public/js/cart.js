// Shopping Cart //
// Focus on getting add to cart button to save user's saved items, make a table in your user table that is an array of product ids 
// Create an api route to get user's saved products ids and use this information for the productArr
// Run a fetch to get cart data, then you can assign that cart data to be your productArr

// forEach product placed into the cart generate a row
function renderProduct(productArr) {
    productArr.forEach((product) => {
      const tBody = document.getElementsByTagName('tbody');
      const rowEl = document.createElement('tr');
      rowEl.innerHTML = `
      <td class="removeProduct">
            <button onclick="deleteRow()">x</button>
          </td>
          <td>
            <div class="product-img">
            <div class="img-product"><figure class="image is-128x128">${product_image}</figure>
            </div>
            </div>
          </td>
          <td><p>${product_name}</p>
          </td>
          <td>
            <div class="button-container">
            <button class="cart-qty-plus" type="button" value="+">+</button>

            <input type="text" name="qty" min="0" class="qty form-control" value="0">

          <button class="cart-qty-minus" type="button" value="-">-</button>
            </div> 
          </td>
          <td>
          <span class="price form-control" disabled></span>
          </td>
          <td align="right">$ {{product_price}}<span id="amount" class="amount" placeholder="0"></span>
          </td>
          `;
          tBody.appendChild(rowEl);
    });
}

//--- Update Qty and Price ---/
$(document).ready(function() {
  update_amounts();
  $('.qty, .price').on('keyup keypress blur change',
 function(e) {
  update_amounts();
 });
});

//--- Sum of the Total Amount ---/
function update_amounts() {
  var sum = 0.0;
  $('#cartTable > tbody > tr').each(function() {
    var qty = $(this).find('.qty').val();
    var price = $(this).find('.price').val
    var amount = (qty*price)
    sum+=amount;
    $(this).find('.amount').text('' + amount);
  });
  $('.total').text(sum);
}

//--- for quantity - increment or decrement ---//
var incrementQty;
var decrementQty;
var plusBtn = $(".cart-qty-plus");
var minusBtn = $(".cart-qty-minus");

incrementQty = plusBtn.click(function(){
  var $n = $(this)
  .parent(".button-container")
  .find(".qty");
  $n.val(Number($n.val())+1);
  update_amounts();
});

decrementQty = minusBtn.click(function(){
  var $n = $(this)
  .parent(".button-container")
  .find(".qty");
  var QtyVal = Number($n.val());
  if (QtyVal > 0) {
    $n.val(QtyVal-1)
  }
  update_amounts();
});

// delete one product-row in tbody cart
var table = document.getElementById('table');
var row = document.getElementsByTagName('tbody')[0];

function deleteRow () {
    row.parentNode.removeChild(row);
};