// Shopping Cart //

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

// forEach product placed into the cart generate a tbody




// delete one product-row in tbody
var table = document.getElementById('table');
var row = document.getElementsByTagName('tbody')[0];


function deleteRow () {
    row.parentNode.removeChild(row);
};