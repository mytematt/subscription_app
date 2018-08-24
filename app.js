$(document).ready( function() {
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
})