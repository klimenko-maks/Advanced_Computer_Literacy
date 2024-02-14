---
title: Основные концепции Excel
date: 2024-01-09T20:30:00.000Z
topic: Excel
description: Основные компоненты программы.
preview: Вспоминиаем или изучаем основные элементы программы, и для чего ее вообще применяюет.
img: excel/01-excel-intro/Excel_(5).png
placeholder: excel/01-excel-intro/Excel_5-prev.png
alt: Excel - logo pic
linkImg: excel/01-excel-intro/Excel_(5).png
linkImgAlt: Excel - logo Image
# videoURL: 'https://www.youtube-nocookie.com/'
canonicalUrl: excel-intro-1/
permalink: /excel-intro-1/
redirectFrom: /posts/2024/01/09/excel-intro-1/
---

::: slot header

# Базовые понятия Excel

:::

## Введение

Вопервых, скачиваем результаты нашего опроса из гугул формы в формате .XLSX (через броузер в результатах формы опроса) . Примерно как проказано на картинке ниже.

<div class="website-diagrams">
  <v-lazy-image
      :src="$withBase('/images/excel/01-excel-intro/01-save-from-browser.png')"
      :src-placeholder="$withBase('/images/excel/01-excel-intro/01-save-from-browser-prev.png')"
      alt="Save as XLSX Post Picture"
  />
</div>

Так как дальнейшие действия мы будет производить именно в Excel. Конечно же можно начать обрабатывать данные через Гугл Таблицы. Но в этом случае часть формул может отличаться.

## Основные компоненты Excel

Excel представляет из себя программу для работы с табличными данными, иногда его так же называют табличный процессор.

<div class="zoom-image">
  <v-lazy-image
      :src="$withBase('/images/excel/01-excel-intro/02-main-work-window.png')"
      :src-placeholder="$withBase('/images/excel/01-excel-intro/02-main-work-window-prev.png')"
      alt="Excel working window"
  />
</div>

Очень упрощенно его можно сравнить с обычной школьной тетрадкой в клеточку. Или же с детской игрой в морской бой. Так в программе excel каждая ячейка имеет свою строго определенную координату. Коодинату номера строки и имени столбца (**A1, B4** и тд). Вначале идет адресс столбца, затем номер строки. И на пересечении столбца и стоки и получаем адресс ячейки.
<div class="zoom-image">
  <v-lazy-image
      :src="$withBase('/images/excel/01-excel-intro/03-selected-cell.png')"
      :src-placeholder="$withBase('/images/excel/01-excel-intro/03-selected-cell-prev.png')"
      alt="selected cell"
  />
</div>

Другими словами действeт принцип однозначного соответсвия координатной сетке или принцип <code class="inline-code-block">**адресности**</code>.
Это крайне важно понять, что все вычисления с использованием формул нужно указывать именно на ячейку, а не на конкретную цифру или текст в ней.

### Строка формул

Очень важный компонет программы с которым нам предстоит часто работать. Имеено в стоке формул можно увидеть находится ли в ячейке простое число или это формула.
В данном примере в ячейке **B1** простое число. Так как и в строке формул также содердится простое число, в чем легко можно убедиться сравнив зчания в ячейке и в строке формул.
<div class="zoom-image">
  <v-lazy-image
      :src="$withBase('/images/excel/01-excel-intro/04-simple-number-cell.png')"
      :src-placeholder="$withBase('/images/excel/01-excel-intro/04-simple-number-cell-prev.png')"
      alt="selected cell"
  />
</div>

А вот в ячейки **C1** уже видна формула. Это видно так как вначале идет занк <code class="inline-code-block">**=**</code> и ссылки на ячейки из которых берутся значения. При этом в самой **C1** отображается результат вычислений.
<div class="zoom-image">
  <v-lazy-image
      :src="$withBase('/images/excel/01-excel-intro/05-simple-formula-cell.png')"
      :src-placeholder="$withBase('/images/excel/01-excel-intro/05-simple-formula-cell-prev.png')"
      alt="selected cell"
  />
</div>

### "Шапка" и оформление

Следует понимать что вводить данные можно в любой части рабочего листа excel. Однако для удобства принято начинасть с первых строк и стобцов (кроме логичности, это еще поможет немного сократить общий размер файла с таблицой).

Существуют некоторые стандартыне правила оформления, которых стоит предерживаться. Так стоит выделить заголовки столбцов (ФИО, День рождения, и тд.) более жирным шрифтом, возможно увеличив на один или несколько кегелей размер шрифта. Хорошим тоном будет выделить "шапку" заголовков другим цветом.

<div class="zoom-image">
  <v-lazy-image
      :src="$withBase('/images/excel/01-excel-intro/06-formated-header.png')"
      :src-placeholder="$withBase('/images/excel/01-excel-intro/06-formated-header-prev.png')"
      alt="selected cell"
  />
</div>

Так же не лишним будет включить <code class="inline-code-block">**отображение границ**</code> -> <code class="inline-code-block">**все границы**</code>
<div class="zoom-image">
  <v-lazy-image
      :src="$withBase('/images/excel/01-excel-intro/07-border-line.png')"
      :src-placeholder="$withBase('/images/excel/01-excel-intro/07-border-line-prev.png')"
      alt="selected cell"
  />
</div>

И включить выравнивание текста по <code class="inline-code-block">**центру**</code> и <code class="inline-code-block">**"перенести текст"**</code>. Особенно это актуально если текст не помещается в выбранный размер столбца.

<div class="zoom-image">
  <v-lazy-image
      :src="$withBase('/images/excel/01-excel-intro/08-header-center.png')"
      :src-placeholder="$withBase('/images/excel/01-excel-intro/08-header-center-prev.png')"
      alt="selected cell"
  />
</div>

Шапка позволяет <code class="inline-code-block">**структурировать**</code> данные и сделать их более читабельными и простыми для восприятия человека. Особенно если этой таблицей будем пользоваться не мы одини, а к примеру, результаты нашей работы мы отошлем другому человеку, скажем по электронной почте.

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