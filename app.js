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

  $('#add').on('click', function() {
    var plan = $('#plan')
    var installment = plan.val()
    var price = $('#price').text()
    var inCart = $('#cart')
    var numeric = price.replace(/[[A-Za-z$\/\s]/g, '')
    var data = 'data-price"'+numeric + '" data-plan="' + installment + '"'

    inCart.append('<li class="entry"' + data + '>' + installment + ' - ' + price + '</li>')
  })

})