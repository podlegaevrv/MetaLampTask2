/* global jQuery */

// plugin styles


/* eslint-disable func-names */
(function ($) {
  const defaults = {
    maxItems: Infinity,
    minItems: 0,
    selectionText: 'item',
    textPlural: 'items',
    btnClear: false,
    btnApply: false,
    controls: {
      position: 'right',
      displayCls: 'iqdropdown-content',
      controlsCls: 'iqdropdown-item-controls',
      counterCls: 'counter',
    },
    items: {},
    onChange: () => {},
    beforeDecrement: () => true,
    beforeIncrement: () => true,
    setSelectionText (itemCount, totalItems) {
      const usePlural = totalItems !== 1 && this.textPlural.length > 0;
      const text = usePlural ? this.textPlural : this.selectionText;
      return `${totalItems} ${text}`;
    },
  };

  $.fn.iqDropdown = function (options) {
    this.each(function () {
      const $this = $(this);
      const $selection = $this.find('p.iqdropdown-selection').last();
      const $menu = $this.find('div.iqdropdown-menu');
      const $items = $menu.find('div.iqdropdown-menu-option');
      const dataAttrOptions = {
        selectionText: $selection.data('selection-text'),
        textPlural: $selection.data('text-plural'),
      };
      const settings = $.extend(true, {}, defaults, dataAttrOptions, options);
      const itemCount = {};
      let totalItems = 0;

      function updateDisplay () {
        $selection.html(settings.setSelectionText(itemCount, totalItems));
      }

      function setItemSettings (id, $item) {
        const minCount = Number($item.data('mincount'));
        const maxCount = Number($item.data('maxcount'));

        settings.items[id] = {
          minCount: Number.isNaN(Number(minCount)) ? 0 : minCount,
          maxCount: Number.isNaN(Number(maxCount)) ? Infinity : maxCount,
        };
      }

      function addClearBtn($menu){
        const { onChange } = settings;
        const $btnClear = $(`<button type="button" class="button-type-3 clear" >Очистить</button>`);

        $menu.append($btnClear);

        $btnClear.click((event) =>{
          const {items} = settings;
          const $counters = $items.find('.counter')
          event.preventDefault();
          event.stopPropagation();

          for (const el in itemCount) {
            itemCount[el] = 0;
            $counters.html(itemCount[el])
          }

          totalItems = 0;
          onChange(0, itemCount[0], totalItems, $this);
          updateDisplay();
        });

        return $menu;
      };

      function addApplyBtn($menu){
        const $btnApply = $(`<button type="button" class="button-type-3 apply">Применить</button>`);
        $menu.append($btnApply);

        $btnApply.click((event) => {
          event.preventDefault();
          event.stopPropagation();

          $this.toggleClass('menu-open');

          updateDisplay();
        })

        return $menu;
      };

      function addButtons($menu){
        const { btnClear, btnApply } = settings;

        const $buttonsBox = $(`<div class="dropdown-buttons"></div>`);

        $buttonsBox.click((event)=>{
          event.preventDefault();
          event.stopPropagation();
        });

        if(btnClear || btnClear){
          if(btnClear){
            addClearBtn($buttonsBox);
          }
          if(btnApply){
            addApplyBtn($buttonsBox);
          }
          $menu.append($buttonsBox);
        }

        return $menu;
      }

      function addControls (id, $item) {
        const $controls = $('<div />').addClass(settings.controls.controlsCls);
        const $decrementButton = $(`
          <button class="button-decrement">
            <i class="icon-decrement"></i>
          </button>
        `);
        const $incrementButton = $(`
          <button class="button-increment">
            <i class="icon-decrement icon-increment"></i>
          </button>
        `);
        const $counter = $(`<span>${itemCount[id]}</span>`).addClass(settings.controls.counterCls);

        $item.children('div').addClass(settings.controls.displayCls);
        $controls.append($decrementButton, $counter, $incrementButton);

        if (settings.controls.position === 'right') {
          $item.append($controls);
        } else {
          $item.prepend($controls);
        }

        $decrementButton.click((event) => {
          const { items, minItems, beforeDecrement, onChange, btnApply } = settings;
          const allowClick = beforeDecrement(id, itemCount);

          if (allowClick && totalItems > minItems && itemCount[id] > items[id].minCount) {
            itemCount[id] -= 1;
            totalItems -= 1;
            $counter.html(itemCount[id]);
            if(!btnApply){
              updateDisplay();
            }
            onChange(id, itemCount[id], totalItems, $this);
          }

          event.preventDefault();
        });

        $incrementButton.click((event) => {
          const { items, maxItems, beforeIncrement, onChange, btnApply } = settings;
          const allowClick = beforeIncrement(id, itemCount);

          if (allowClick && totalItems < maxItems && itemCount[id] < items[id].maxCount) {
            itemCount[id] += 1;
            totalItems += 1;
            $counter.html(itemCount[id]);
            if(!btnApply){
              updateDisplay();
            }
            onChange(id, itemCount[id], totalItems, $this);
          }

          event.preventDefault();
        });

        $item.click(event => event.stopPropagation());

        return $item;
      }

      $this.click(() => {
        $this.toggleClass('menu-open');
      });

      $items.each(function () {
        const $item = $(this);
        const id = $item.data('id');
        const defaultCount = Number($item.data('defaultcount') || '0');

        itemCount[id] = defaultCount;
        totalItems += defaultCount;
        setItemSettings(id, $item);
        addControls(id, $item);
      });

      addButtons($menu);

      updateDisplay();
    });

    return this;
  };
}(jQuery));
