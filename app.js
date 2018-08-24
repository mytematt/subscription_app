$(document).ready( function() {
  
  //event listner for toggling price text
  $('#plan').on('change', function (){
    var priceText

    switch(this.value) {
      case 'monthly':
        priceText = '$10.00 /mo'
        break
      case 'quarterly':
        priceText = '$9.00 /mo'
        break
      case 'annually':
        priceText = '$7.00 /mo'
        break
    }

    $('#price').text(priceText)
  })
//adds
  $('#add').on('click', function() {
    var plan = $('#plan')
    var installment = plan.val()
    var price = $('#price').text()
    var inCart = $('#cart')
    var numeric = price.replace(/[[A-Za-z$\/\s]/g, '')
    var data = 'data-price="'+numeric + '" data-plan="' + installment + '"'

    inCart.append('<li class="entry"' + data + '>' + installment + ' - ' + price + '<button class="remove">X</button></li>')
    updateTotal()
  })

    $('#empty').on('click', function() {
      $('#cart').empty()
      updateTotal()
    })

  //Updates
  function updateTotal() {
    var total = 0;
    var entries = $('.entry')

    if(entries.length)
      $('#empty').show();
    else
      $('empty').hide();


    $('.entries').each(function(index, entry){
      var data = $(entry).data()
      var price = parseFloat(data.price)
      var installment = data.plan

      switch(installment) {
        case 'monthly':
          total += price
          break
        case 'quarterly':
          total += price * 4
          break
        case 'annually':
          total += price * 12
          break
      }
    
    })
    $('#total').text('$' + total)
  }

//delete
$(document).on('click', '.remove', function(){
  $(this).parents('li').remove()
  updateTotal()
})

//animations
$('#display-cart').on('click', function(){
  var cart = $('#cart')
  var button = $(this)

  if(button.text() === 'hide cart')
    button.text('Show Cart')
  else
    button.text('Hide Cart')

  cart.slideToggle();
})


})