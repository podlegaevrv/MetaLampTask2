# MetaLampTask2

Тестовое задание

[Демонстрация](https://podlegaevrv.github.io/MetaLampTask2Toxin/dist/index.html)

## Файловая структура

В проекте используется webpack.

Структура папки src выглядит следующим образом:

```bash
src
|  index.js
└─── pages
└─── components
└─── theme
````
`index.js` - главная точка входа для сборщика. В ней автоматически импортируются все скрипты.

В проекте используется методология БЭМ.

`pages` - папка с главными страницами  проекта.

`components` - папка с компонентами(блоками).

`theme` - папка с общими стилями, шрифтами и favicon

`pages` - имеет следующую структуру:

```bash
pages
└─── Название страницы
| |  |  Название страницы.js
| |  |  Название страницы.pug
| |  |  Название страницы.scss
└─── base
| |  |  base.pug
```
Все страницы наследуются от `base.pug`. Файл с расширением `.pug` содержит в себе шаблон. Файл с расширением `.scss` содержит в себе стили для данной страницы. Файл с расшиением `.js` импортирует стили и скрипты в главный бандл.

`components` - имеет следующую структуру:
```bash
components
└─── Название компонента
| |  |  Название компонента.js
| |  |  Название компонента.pug
| |  |  Название компонента.scss
```
Всё работает по аналогии с `pages`.

## Инициализация

```bash
  npm install
```

## Доступные команды:
Запуск dev-server:
```bash
  npm start
```
Сборка build
```bash
  npm run build
```
Сборка dev
```bash
  npm run dev
```
Запуск watch
```bash
  npm run watch
```
## Используемые пакеты:

* [air-datepicker](http://t1m0n.name/air-datepicker/docs/index-ru.html)
* [chart.js](https://www.chartjs.org/)
* [item-quantity-dropdown](https://www.npmjs.com/package/item-quantity-dropdown) с модификацией файла
* [jquery](https://jquery.com/)
* [jquery-mask-plugin](https://igorescobar.github.io/jQuery-Mask-Plugin/)
* [normalize.css](https://necolas.github.io/normalize.css/)
* [noUISlider](https://refreshless.com/nouislider/)
* [slick-carousel](https://kenwheeler.github.io/slick/)
* [wnumb](https://refreshless.com/wnumb/)
