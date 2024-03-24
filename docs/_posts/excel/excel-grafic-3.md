---
title: Визуализация данных в Excel
date: 2024-02-06T20:30:00.000Z
topic: Excel
description: Визуализация данных.
preview: Учимся строить графики.
img: excel/03-excel-graf/excel_art_512.png
placeholder: excel03-excel-graf/excel_art_512-prev.png
alt: Excel - logo pic
linkImg: excel/03-excel-graf/excel_art_512.png
linkImgAlt: Excel - logo Image
# videoURL: 'https://www.youtube-nocookie.com/'
canonicalUrl: excel-grafic-3/
permalink: excel-grafic-3/
redirectFrom: /posts/2024/02/06/excel-grafic-3/
---

::: slot header

# Excel Сводные таблицы и графики

:::

## Введение

Так же как мы уже делали на прошлом занятии - начинаем со сводной таблицы. Можем использовать результат полученный на прошом занятии, можем сделать поновой, это будет полезно для повторения. Так как тема сводных таблиц не самая простая и как показала практика лучше несколько раз ее повторить на реальных примерах. 
В качестве примера можете рассмотреть сводную таблицу, значения строк которой будут вопросы **Как вы узнали о Нас?** а значения подсчитаем по полю **ФИО**. Ориентируйтесь прожде всего по данным опроса, и количеству опрошенных. Если число опрошеных не большое, то имеет смысл взять для демонстрации тестовые данные, так будет нагляднее.

### Графики

Итак, в качестве исходных данных возьмём следующую сводную таблицу.

<div class="website-diagrams">
  <v-lazy-image
      :src="$withBase('/images/excel/03-excel-graf/01-povit-table-source.png')"
      :src-placeholder="$withBase('/images/excel/03-excel-graf/01-povit-table-source-prev.png')"
      alt="cercle config menu"
  />
</div>

И добавим графки с типом **Гистограмма с накоплением**. Для этого зайдем в ``Вставка`` -> ``Гистограмма`` -> ``Гистограмма с накоплением``.

<div class="website-diagrams">
  <v-lazy-image
      :src="$withBase('/images/excel/03-excel-graf/02-povit-table-gistagramm.png')"
      :src-placeholder="$withBase('/images/excel/03-excel-graf/02-povit-table-gistagramm-prev.png')"
      alt="cercle config menu"
  />
</div>

После вставки получим вполне себе рабочуюю диаграмму, однако хотелось бы ее доработать.

<div class="website-diagrams">
  <v-lazy-image
      :src="$withBase('/images/excel/03-excel-graf/03-gistagramm.png')"
      :src-placeholder="$withBase('/images/excel/03-excel-graf/03-gistagramm-prev.png')"
      alt="cercle config menu"
  />
</div>

Например, можем поменять вертикальное расположение столбиков на гризонтальное. Для этого щёлкаем на диаграмму правой клавишей мыши и в диалоговом окне выбираем пункт **Изменить тип диаграммы**. 

<div class="custom-block warning">
Обратите внимание что нужно щелкнуть на пространстве между столбцами диаграммы, иначе меню будет несколько иное.
</div>

<div class="website-diagrams">
  <v-lazy-image
      :src="$withBase('/images/excel/03-excel-graf/04-gistagramm-type.png')"
      :src-placeholder="$withBase('/images/excel/03-excel-graf/04-gistagramm-type-prev.png')"
      alt="cercle config menu"
  />
</div>

В появившемся окне выбираем  ``Линейчатая`` -> ``Линейчатая с накоплением``.

<div class="website-diagrams">
  <v-lazy-image
      :src="$withBase('/images/excel/03-excel-graf/05-gistagramm-type-option.png')"
      :src-placeholder="$withBase('/images/excel/03-excel-graf/05-gistagramm-type-option-prev.png')"
      alt="cercle config menu"
  />
</div>

После чего наш график приобретет уже другой вид:

<div class="website-diagrams">
  <v-lazy-image
      :src="$withBase('/images/excel/03-excel-graf/06-gistagramm-result.png')"
      :src-placeholder="$withBase('/images/excel/03-excel-graf/06-gistagramm-result-prev.png')"
      alt="cercle config menu"
  />
</div>

Следует понимать что практически все элементы графика гибко настраиваемые.

### Настройки графиков

Можно проявлять творчество и вкус (при наличие такового) в настройке отделных элементов графика. Для примера поменяем тип столбца, который строится ввиде синего прямоугольника, на фиугру с закругленными углами. Делается это не сложнно. Заходим в меню ``Вставка`` -> ``Фигуры`` -> ``Скругленный прямоугольник``. И нарисуем его в любом месте нашего текущего листа.

<div class="website-diagrams">
  <v-lazy-image
      :src="$withBase('/images/excel/03-excel-graf/07-gistagramm-object.png')"
      :src-placeholder="$withBase('/images/excel/03-excel-graf/07-gistagramm-object-prev.png')"
      alt="cercle config menu"
  />
</div>

Далее работает с этим объектом через вкладку ``Формат`` -> ``Контур фигуры`` -> ``Нет контура``. Убераем контур этого объекта.

<div class="website-diagrams">
  <v-lazy-image
      :src="$withBase('/images/excel/03-excel-graf/08-gistagramm-contur.png')"
      :src-placeholder="$withBase('/images/excel/03-excel-graf/08-gistagramm-contur-prev.png')"
      alt="cercle config menu"
  />
</div>

Так же можем выбрать цвет заливки этого Скругленного прямоугольника, или выбрать Градиент заливки. В том же меню  ``Формат`` -> ``Контур фигуры``. Или правой клавишей мыши на нашей фигуре и меню ``Формат фигуры...``.

<div class="website-diagrams">
  <v-lazy-image
      :src="$withBase('/images/excel/03-excel-graf/09-object-gradient-options.png')"
      :src-placeholder="$withBase('/images/excel/03-excel-graf/09-object-gradient-options-prev.png')"
      alt="cercle config menu"
  />
</div>

Как видим, вариантов настройки и выбора более чем достаточно. Это тоже простор для нашего творчества. Поработав с настройками найдем приемленый для себя вариант. 
Далее скопируем этот объект. Для этого или просто нажимам привычне сочетание клавишь ``Ctrl`` + ``C``. Либо парвой клавишей миши по нашей фигуре и выбираем пункт ``Копировать``.

<div class="website-diagrams">
  <v-lazy-image
      :src="$withBase('/images/excel/03-excel-graf/10-object-copy.png')"
      :src-placeholder="$withBase('/images/excel/03-excel-graf/10-object-copy-prev.png')"
      alt="cercle config menu"
  />
</div>

Теперь самый интересный момент. На нашем графике выделяем все столбики (при этом то что выделены все стоблики на грайике легко понять по подсвеченым маленьким круглым точкам по краям столбиков). Как показано на рисунке ниже.

<div class="website-diagrams">
  <v-lazy-image
      :src="$withBase('/images/excel/03-excel-graf/11-object-select.png')"
      :src-placeholder="$withBase('/images/excel/03-excel-graf/11-object-select-prev.png')"
      alt="cercle config menu"
  />
</div>

 Теперь нажимаем ``Ctrl`` + ``V``. Или  из контекстного меню правой клавиши мыши ->  ``Вставить`` на выделеных столбцах гистраграммы. И наш график преобретет следующий вид:

<div class="website-diagrams">
  <v-lazy-image
      :src="$withBase('/images/excel/03-excel-graf/12-object-past.png')"
      :src-placeholder="$withBase('/images/excel/03-excel-graf/12-object-past-prev.png')"
      alt="cercle config menu"
  />
</div>

Поменялся не только цвет - стала градиентная заливка, но и форма фигур. Это полезно знать и этим можно пользоваться.
Так же добавим подписи данных на диаграмме.
Это можно сделать прямо из меню в виде знака **+** в правом верхнем углу диаграммы. И выбрав нужное нам расположение подписей. 

<div class="website-diagrams">
  <v-lazy-image
      :src="$withBase('/images/excel/03-excel-graf/13-object-headers.png')"
      :src-placeholder="$withBase('/images/excel/03-excel-graf/13-object-headers-prev.png')"
      alt="cercle config menu"
  />
</div>

> Вышеперечисленный объем матариала
> ⏱
> Примерно 15-17 минут объяснения

### Круговые диаграммы

 Для отображения процентов или долей, как правило использутся круговые диаграммы. При этом типе графика нам не нужно вычеснять процент или долю по формуле а достаточно включить соответвующую подпись на диаграмме. Этим мы уже занимались на [предыдущем занятии](http://localhost:8080/Advanced_Computer_Literacy/excel-formula-2/#%D0%B4%D0%B8%D0%B0%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D1%8B-%D0%B8-%D0%B2%D0%B8%D0%B7%D1%83%D0%B0%D0%BB%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F-%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85) и подродно рассматривали как это делать. Просто повторяем тоже самое для ракрепления, но используя другой тип графика ``Круговая`` -> ``Кольцевая``. 
 Но повторюсь все настройки идентичны как на прошлом занятии.
 
### Автоматическая подсцветка наибольшего значения на диаграмме

Пример более сложной ситуации, когда нам нужна автоматизация выбора и посцвеки наибольшего значения из диапазона цифр на нашем графике. Решается уже с использованием формул.
Для этого используем такую табличку (не обязательно через сводную таблицу, можно просто скопировать эти значения).

| Округа  | К-во Человек в Округе, чел |
| ------- | -------------------------- |
|   ОУО   |             800            |
|   ОО    |             901            |
|   ОЕО   |             450            |
|   ОРО   |             900            |
|**ВСЕГО**|           **3051**         |

И построим по этим значениям соответствующую диаграмму. Как уже делали это ранее через меню  ``Вставка`` -> ``Гистограмма`` -> ``Гистограмма с группировкой``. Получим примерно такой вид гистрограммы.

<div class="website-diagrams">
  <v-lazy-image
      :src="$withBase('/images/excel/03-excel-graf/14-simple-diagramm.png')"
      :src-placeholder="$withBase('/images/excel/03-excel-graf/14-simple-diagramm-prev.png')"
      alt="cercle config menu"
  />
</div>

Все хорошо, данные выведенны в виде столбцов с подписями. Однако как же выделать столбик с самым большим значением? Превое что приходит на ум - это выделить мышкой столбик **ОО** с максимальным значением **901**. Правой клавишей мыши на этот столбик диаграммы (убедитесь что выделен именно один столбик а не все сразу!)  и выбираем меню ``Заливка`` -> ``Цвет заливки``. И выберим допустим красный.

<div class="website-diagrams">
  <v-lazy-image
      :src="$withBase('/images/excel/03-excel-graf/15-simple-diagramm-max.png')"
      :src-placeholder="$withBase('/images/excel/03-excel-graf/15-simple-diagramm-max-prev.png')"
      alt="cercle config menu"
  />
</div>

Все получилось, столбец с максимальным значением выделен красным цветом. Но есть один не приятный момент. А именно, если значения в таблице обновяться, и стоблик **ОО** **901** уже не будет дейстительно соответствовать максимальному занчению. То тогда выделение цветом останется, но уже не будет правильным. Что же делать, что бы избежать этого? 

Правильный ответ - вбирать максимальное значение не вручную, а с использоватьнием формул!

Итак приступим. Нам нужно выбрать максимальнон значение из диапазона (столбика К-во Человек в Округе, чел). Для этого отлично подходит встроенная функция Excel под названием ``=МАКС()``. Можем применить ее в столбике рядом над диапазонм данных. И получим такую таблицу:

```JS
=МАКС($C$5:$C$8)
```

| Округа  | К-во Человек в Округе, чел | Макс значние |
| ------- | -------------------------- | ------------ |
|   ОУО   |             800            |      901     |
|   ОО    |             901            |      901     |
|   ОЕО   |             450            |      901     |
|   ОРО   |             900            |      901     |
|**ВСЕГО**|           **3051**         |              |

Неплохо, но не совсем то что бы нам хотелось получть. Не трудно заметить что в каждой строке было выбрано максимально значение **901**. Но нам нужно только одно максимальное занчеием, причем в той строке где оно реально находится. Для этого добавим в фрмулу дополнительную проверку действительно ли значение в строке максмально. И если да - то выведем это значени, если не максимально, просто ничего не выводим. В этом нам поможет функция ``=ЕСЛИ()``

```JS
=ЕСЛИ(C5=МАКС($C$5:$C$8);C5;"")
```

Краткий алгоритм работы этой формулы:

``МАКС($C$5:$C$8)``: Эта часть определяет максимальное значение в диапазоне ячеек C5:C8. В данном случае, это наибольшее значение из чисел 800, 901, 450 и 900.

``ЕСЛИ(C5=МАКС($C$5:$C$8);C5;"")``: В этой части используется функция ``ЕСЛИ``, которая проверяет условие: равно ли значение в ячейке C5 максимальному значению в диапазоне C5:C8. Если да, то возвращается значение из ячейки C5, иначе возвращается пустая строка (""). Таким образом, эта часть формулы возвращает значение в ячейке C5, если оно является максимальным в диапазоне C5:C8, иначе возвращает пустую строку.

После распростанения формулы, получим такую таблицу.

| Округа  | К-во Человек в Округе, чел | Макс значние |
| ------- | -------------------------- | ------------ |
|   ОУО   |             800            |              |
|   ОО    |             901            |      901     |
|   ОЕО   |             450            |              |
|   ОРО   |             900            |              |
|**ВСЕГО**|           **3051**         |              |

Хорошо, максимальное значение получено, остается теперь добавить его на график в качестве отдельного столбца!
Для этого выделим нашу диаграмму, и нажмем правой клавишей миши на пустом месте в диагремме и далее в контекстном меню находим пункт ``Выбрать данные ...``.
Появиться следующее диалоговое окно:

<div class="website-diagrams">
  <v-lazy-image
      :src="$withBase('/images/excel/03-excel-graf/16-diagramm-add.png')"
      :src-placeholder="$withBase('/images/excel/03-excel-graf/16-diagramm-add-prev.png')"
      alt="cercle config menu"
  />
</div>

Нажимаем кнопку ``Добавить`` как показано на риунке выше. И в качестве значений указываем наш столбик с вычесленным максимальным значением.

<div class="website-diagrams">
  <v-lazy-image
      :src="$withBase('/images/excel/03-excel-graf/17-diagramm-column.png')"
      :src-placeholder="$withBase('/images/excel/03-excel-graf/17-diagramm-column-prev.png')"
      alt="cercle config menu"
  />
</div>

Получаем вот такую диаграмму:

<div class="website-diagrams">
  <v-lazy-image
      :src="$withBase('/images/excel/03-excel-graf/18-diagramm-marge.png')"
      :src-placeholder="$withBase('/images/excel/03-excel-graf/18-diagramm-marge-prev.png')"
      alt="cercle config menu"
  />
</div>

Неплохо, но видим, что новый столбик с максимальнм значение оказался рядом с основным графиком. Это так же можно проправить небольшим трюком.
Два раза счелкаем левой клавишей мыши на новый оранженый стоблик и сакимальнм занчением. О спарва откроется меню настройки параместров гарфика ``Формат ряда данных``.
Приведем настройки к следующему виду:
Выставим ``Перекрытие рядов`` на **100%**,а  ``Боковой зазор``на **150%**.

<div class="website-diagrams">
  <v-lazy-image
      :src="$withBase('/images/excel/03-excel-graf/19-diagramm-marge-options.png')"
      :src-placeholder="$withBase('/images/excel/03-excel-graf/19-diagramm-marge-options-prev.png')"
      alt="cercle config menu"
  />
</div>

И получаем нужный вид диаграммы!

<div class="website-diagrams">
  <v-lazy-image
      :src="$withBase('/images/excel/03-excel-graf/20-diagramm-final.png')"
      :src-placeholder="$withBase('/images/excel/03-excel-graf/20-diagramm-final-prev.png')"
      alt="cercle config menu"
  />
</div>

Теперь при изменении значейний таблицы, диаграмма будет автоматически парестраиватся, выделяя цветом максимальное значение.
Проэсперементируете с этим, поменяв значение в таблице.
Подумайте над вариантом выделения другим цветом мнимального значения, в качестве домашнего задания.

## ВПР

Одна из самых непонятных и загадочных фенкций для новичков. Итак что же такое ВПР? ВПР (Vlookup, или вертикальный просмотр) — поисковая функция в Excel. Она находит значения в одной таблице и переносит их в другую. Функция ВПР нужна, чтобы работать с большими объёмами данных — не нужно самостоятельно сопоставлять и переносить сотни наименований, функция делает это автоматически.
Как это можно представить проще? Это сопоставление двух различных стобцов, в каждом из которых ищется совпадение. 

<script>
import VLazyImage from 'v-lazy-image/v2/v-lazy-image.es.js';

export default {
  components: {
    VLazyImage
  }
}
</script>

<style lang="stylus" scoped>
.website-diagrams
  width: 30.6875rem
  margin: 0 auto
  .v-lazy-image
    filter: blur(0.375rem)
    will-change: filter
    width: 100%
  .v-lazy-image-loaded
    transition: filter 0.7s
    filter: blur(0)
.zoom-image
  width: 30.6875rem
  margin: 0 auto
  .v-lazy-image
    filter: blur(0.375rem)
    will-change: filter
  .v-lazy-image-loaded
    transition: filter 0.7s
    filter: blur(0)
</style>