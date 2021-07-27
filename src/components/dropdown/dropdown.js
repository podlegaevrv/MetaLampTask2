import './dropdown-with-buttons'
import 'item-quantity-dropdown/lib/item-quantity-dropdown.min.css'
import './dropdown.scss'

$(document).ready(() => {
  $('.dropdown-guests').iqDropdown(
    {
      setSelectionText: (itemCount, totalItems) => {
        if (totalItems == 0){
          $('.clear').hide();
          return 'Сколько гостей'
        }
        if (totalItems == 1){
          return totalItems + ' гость'
        }
        if (totalItems > 1 && totalItems <= 4){
          return totalItems + ' гостя'
        }
        if (totalItems > 4){
          return totalItems + ' гостей'
        }
      },
      btnClear: true,
      btnApply: true,
      onChange: (id, count, totalItems, $this) => {
        if(totalItems == 0){
          $this.find('.clear').hide();
        }
        if (totalItems > 0){
          $this.find('.clear').show();
        }
      },
    });

  $('.dropdown-default').iqDropdown({
    setSelectionText: (itemCount, totalItems) =>{
      let result ='';
      if (totalItems == 0){
        return 'Выберите удобства'
      }
      if (totalItems > 0){
        if (itemCount.item1 > 0 && itemCount.item1 <= 1){
          result += itemCount.item1 + ' спальня'
        }
        if (itemCount.item1 > 1 && itemCount.item1 <= 4){
          result += itemCount.item1 + ' спальни'
        }
        if (itemCount.item1 > 4){
          result += itemCount.item1 + ' спален'
        }
      }
      if (totalItems > 0){
        if (itemCount.item2 > 0 && itemCount.item2 <= 1){
          result += ', ' + itemCount.item2 + ' кровать'
        }
        if (itemCount.item2 > 1 && itemCount.item2 <= 4){
          result += ', ' + itemCount.item2 + ' кровати'
        }
        if (itemCount.item2 > 4){
          result += ', ' + itemCount.item2 + ' кроватей'
        }
      }
      if (totalItems > 0 && itemCount.item3 > 0){
        result += ', ' + itemCount.item3 + ' ванных комнат'
      }
      if (result[0] == ','){
        result = result.slice(1);
      }
      if(result.length > 20){
        result = result.slice(0, 20);
        result += ' ...';
      }
      return result
    }
  })
});
