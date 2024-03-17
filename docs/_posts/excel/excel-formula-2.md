---
title: Формулы и вычисления в Excel
date: 2024-01-23T20:30:00.000Z
topic: Excel
description: Формулы и вычисления.
preview: Учимся ипользоват формулы при вычислениях.
img: excel/02-excel-formula/Alecive-Flatwoken-Apps-File-Formula.512.png
placeholder: excel/02-excel-formula/Alecive-Flatwoken-Apps-File-Formula.512-prev.png
alt: Excel - logo pic
linkImg: excel/02-excel-formula/Alecive-Flatwoken-Apps-File-Formula.512.png
linkImgAlt: Excel - logo Image
# videoURL: 'https://www.youtube-nocookie.com/'
canonicalUrl: excel-formula-2/
permalink: /excel-formula-2/
redirectFrom: /posts/2024/01/16/excel-formula-2/
---

::: slot header

# Excel Формулы и сводные таблицы

:::

## Введение

Рассмотрим для примера, форму опроса заполненную ранее через Google Forms.
Вопервых, скачиваем результаты нашего опроса из гугул формы в формате .XLSX (через броузер в результатах формы опроса) . Примерно как проказано на картинке ниже.

<div class="website-diagrams">
  <v-lazy-image
      :src="$withBase('/images/excel/01-excel-intro/01-save-from-browser.png')"
      :src-placeholder="$withBase('/images/excel/01-excel-intro/01-save-from-browser-prev.png')"
      alt="Save as XLSX Post Picture"
  />
</div>

Так как дальнейшие действия мы будет производить именно в Excel. Конечно же можно начать обрабатывать данные через Гугл Таблицы. Но в этом случае часть формул может отличаться.

## Обработка формы опроса

Обратите внимение, что после экспорта в Excel результатов опроса Google Forms в таблице "шапочка" заголовков уже закреплена автоватически. Google Forms уже позаботился и сделалл это за нас. И тем не мение приведем ее к облее опрятному виду. Сделаем шрифт жирным и по желаню зальём цветом, выставим выравнивание текста по центру. Как на рисунке выше.

Если тект не вмещается в ячейки, то можно воспользоваться автоподбором высоты. Для этого подведем курср к номерам строк, станем между номерами строк. И два раза щелкаем левй клавишей мышь. После этого весь заголовки заголовков будет виден.

<div class="website-diagrams">
  <v-lazy-image
      :src="$withBase('/images/excel/02-excel-formula/01-auto-higth.png')"
      :src-placeholder="$withBase('/images/excel/02-excel-formula/01-auto-higth-prev.png')"
      alt="Auto higth"
  />
</div>

Так же можно добится того же результата через Меню Ффрмат. Выберите строку или строки, высоту которых требуется изменить. Перейдите в раздел ``Главная`` > ``Ячейки`` > ``формат``. В разделе ``Размер ячейки`` выберите ``Автоподбор`` высоты строки.

<div class="website-diagrams">
  <v-lazy-image
      :src="$withBase('/images/excel/02-excel-formula/02-auto-higth-alt.png')"
      :src-placeholder="$withBase('/images/excel/02-excel-formula/02-auto-higth-alt-prev.png')"
      alt="Auto higth alt"
  />
</div>

Далее дадим название нашей таблице. Например ``Результаты анкетирования причин прихода в движение``. Для этого добавим строки выше и оформим как уже деали это в [предыдущей теме](http://localhost:8080/Advanced_Computer_Literacy/excel-intro-1/#%D1%88%D0%B0%D0%BF%D0%BA%D0%B0-%D0%B8-%D0%BE%D1%84%D0%BE%D1%80%D0%BC%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5).

### Сортировка данных

Первым этапом в обработке данных, может быть их сортировака. Напоминаю что любое действие производится над выделенно областью данных. Давайе поробуем осортировать нашу такблице по ФИО. Для этого ставим курсов к столбик ФИО.
Переходим в меню ``Данные`` -> ``Сортировка по возрастанию``. При появлении сообщения **"Обнаружены данные вне указанного диапазон"**, выбираем **"автоматически расширить выделенный диапазон"** и нажимаем клавишу ``Сортировка``.

<div class="website-diagrams">
  <v-lazy-image
      :src="$withBase('/images/excel/02-excel-formula/03-sort-order.png')"
      :src-placeholder="$withBase('/images/excel/02-excel-formula/03-sort-order-prev.png')"
      alt="Sort order"
  />
</div>

Можете потринироваться с порядком сортировки - по возрастанию, по убыванию. И отсортировать так же по другим столбцам, например по дате заполнения.

Далее повторяем пройденный материал про [разделению данных на столбцы](http://localhost:8080/Advanced_Computer_Literacy/excel-intro-1/#%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0-%D1%81-%D1%82%D0%B5%D0%BA%D1%81%D1%82%D0%BE%D0%BC-%D0%B2-excel). Как уже проходили на первой лекции. Кроме столбика ФИО можете взять к примеру **Структурная единица, Номер, Округ**. В этом примере выбираем только сами данные без шапки, иначе образуется большое количество лишних столбцов.

> Вышеперечисленный объем матариала
> ⏱
> Примерно 15 минут объяснения

### Начальный анализ данных

Поодобная сортировка и разбиенние данных и есть начальный, подготовительный это в анализе данных. Что такое Анализ? Возьмем определение этого слова из словаря.

<div class="custom-block tip">
Анализ - это метод научного исследования путём рассмотрения отдельных сторон, свойств, составных частей чего-нибуть.
</div>

Вот и мы с вами разбиваем весь объем данных на мелкие составляющие, для более подробного их рассмотрения (как под микроскопом).

Мы уже рассматривали резбиение данных на примере ФИО, то есть разбиения текстовых полей. Так же часто возникает необходимость в разбивке числовых полей на отдельные значения.
К примеру 12.06.2000 мы захотим разбить на отдельные столбцы: Число, Месяц, Год. Мы уже делали подобное на [прошлом занятии](http://localhost:8080/Advanced_Computer_Literacy/excel-intro-1/#%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0-%D1%81-%D0%B4%D0%B0%D1%82%D0%B0%D0%BC%D0%B8-%D0%B2-excel).
 Давайте повторим это для столбца **Когда Вы пришли в Движение**. Для этого заранее вставим 2 столбика *справо* от **Когда Вы пришли в Движение** и озаглавим их как Месяц, Год. В данном случае для анази день нам не очень важен, а вот месяц важен. Так мы сожем опреденить наиболее продукивный сезон.

<div class="website-diagrams">
  <v-lazy-image
      :src="$withBase('/images/excel/02-excel-formula/04-data-column.png')"
      :src-placeholder="$withBase('/images/excel/02-excel-formula/04-data-column-prev.png')"
      alt="data"
  />
</div>

Разбиение дат на составняе элементы проще всего осуществлять с использованием формул. В нашем примере для того чтобы получить месяц используем соотвествующую функциюю. И распростаним ее на все значения столбика.

```JS
=МЕСЯЦ(K4)
```

Год так же полчаем при помощью соответсвующей функции ГОД. И так же распросраняем формулу а весь диапазон значений в столбике.

```JS
=ГОД(K4)
```
И получим примерно следующее:

<div class="website-diagrams">
  <v-lazy-image
      :src="$withBase('/images/excel/02-excel-formula/05-data-column-func.png')"
      :src-placeholder="$withBase('/images/excel/02-excel-formula/05-data-column-func-prev.png')"
      alt="data function"
  />
</div>

<div class="custom-block warning">
 Обратите внимание, что Excel чувствителен к локализации. Если у вас англоязычная версия Excel то формулы также потребуется вводить на английском. те  Mounth, Year и тд.
</div>

<div class="custom-block danger">
Если в результате выполнения формулы =МЕСЯЦ() вы получить все тоже полное значение даты 12.06.2000, то вам нужно исправить формат ячейки. Как мы уже делали с вами ранее на прошлом занятии <a href="http://localhost:8080/Advanced_Computer_Literacy/excel-intro-1/#%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0-%D1%81-%D0%B4%D0%B0%D1%82%D0%B0%D0%BC%D0%B8-%D0%B2-excel">(по ссылке выше)</a>.
</div>

Если с функцией ``=ГОД`` произошла также проблема, то быстрее всего будет скопировать формат с столбца **Месяц** через меню ``Главная`` -> ``Формат по образцу``.

<div class="website-diagrams">
  <v-lazy-image
      :src="$withBase('/images/excel/02-excel-formula/06-copy-format.png')"
      :src-placeholder="$withBase('/images/excel/02-excel-formula/06-copy-format-prev.png')"
      alt="clone format"
  />
</div>

> Вышеперечисленный объем матариала
> ⏱
> Примерно 30 минут объяснения

<div class="custom-block danger">
ДОПОЛНИТЕЛЬНЫЙ МАТЕРИАЛ НЕ ОЗВУЧЕННЫЙ НА ЗАНЯТИИ
</div>

На занятии мы проговаривали, что хорошо бы узнать **Сезон**, в который приходит больше всего людей. Однако это не реализовали и ограничились только выводом месяца прихода и не более того. Вывод сезона так же можно огранизовать добавив дополнительный столбик рядом с месяцем. И воспользовавшись формулой и  использованием функций ``ЕСЛИ`` и ``ИЛИ``.

```JS
=ЕСЛИ(ИЛИ(L4=12; L4=1; L4=2); "Зима"; ЕСЛИ(ИЛИ(L4=3; L4=4; L4=5); "Весна"; ЕСЛИ(ИЛИ(L4=6; L4=7; L4=8); "Лето"; ЕСЛИ(ИЛИ(L4=9; L4=10; L4=11); "Осень"; ""))))
```

Вид формулы довольно устрашающий, однако в сущности ничего сложного в ней.

Алгоритм работы данной формулы:
- Сначала выполняется проверка значения ячейки L4 (с номером месяца).
- Если значение ячейки равно 12, 1 или 2 (что соответствует зимним месяцам), то результатом будет строка "Зима".
- Если значение ячейки равно 3, 4 или 5 (что соответствует весенним месяцам), то результатом будет строка "Весна".
- Если значение ячейки равно 6, 7 или 8 (что соответствует летним месяцам), то результатом будет строка "Лето".
- Если значение ячейки равно 9, 10 или 11 (что соответствует осенним месяцам), то результатом будет строка "Осень".
- Если значение ячейки не соответствует ни одному из вышеперечисленных условий, то результатом будет пустая строка "".
- Таким образом, формула проверяет номер месяца и возвращает соответствующий сезон, основываясь на заданных условиях.

<div class="website-diagrams">
  <v-lazy-image
      :src="$withBase('/images/excel/02-excel-formula/07-get-season.png')"
      :src-placeholder="$withBase('/images/excel/02-excel-formula/07-get-season-prev.png')"
      alt="get season"
  />
</div>

В качестве дополнительного задания можете придумать как вывысти квартал, в зависимости от месяца.

<div class="custom-block danger">
Конец дополнительного материала
</div>

<!-- Отдельно стоит выделить когда в нашем голосованиии был выбран вариант **несколько из списка**. К примеру в нашем опросе присутствовал нункт опроса про **Причины вашего приходы в движение** и были несколько вариантов ответов: Очень Важно, Важно, Второстепенно, не существенно. И далее был ряд вариантов ответов - Социально экономическая ситуация, Климатические изменение, Проблемы со здоровъем, Обеспопоенность о будущем и тд. Обработать такой список будет немного сложнее.

<div class="website-diagrams">
  <v-lazy-image
      :src="$withBase('/images/excel/02-excel-formula/08-gform-quiz.png')"
      :src-placeholder="$withBase('/images/excel/02-excel-formula/08-gform-quiz-prev.png')"
      alt="get season"
  />
</div> -->

### Сводные таблицы

Если мы посмотрим на определение Сводных таблиц, то узнаем следующее:

<div class="custom-block tip">
Сводная таблица (англ. Pivot table) — инструмент обработки данных, служащий для их обобщения.
</div>

Этим инструментом мы и воспользуемся для обощения и обработки данных нашего опроса.
Вопервых выделим всю нашу таблицу. Так как тиблица бомет быть достаточно большой то удобно воспользоваться клавиатурными комбинациями. Для этого станем в самую левую верхнюю ячеку с данными (в нашем случае это была ячейка А4) и нажимаем сочетание клавиш ``CTRL + SHIFT + стрелочка вправо →``.  Так мы выделем все столбцы в которых есть данные, затем сыделим все строки с данными. Для этого не сбрасывая ранее выделенное нажмем  ``CTRL + SHIFT + стрелочка вниз ↓``. Так мы выделим всю область с заполнеными данными избегая выделения пусых ячеек.

<div class="website-diagrams">
  <v-lazy-image
      :src="$withBase('/images/excel/02-excel-formula/09-select-data-on-list.png')"
      :src-placeholder="$withBase('/images/excel/02-excel-formula/09-select-data-on-list-prev.png')"
      alt="Select data on list"
  />
</div>

Конечно можно выделить область данных и с помощью мишы, но повторюсь на больших таблицах это не всегда удобнно. Для этого может понадобиться вначале уменьшить масштаб листа. Это можно сделать как и в броузерах нажав клавишу ``CTRL и прокрутив колесо мыши``.

Итак выделив область значений на листе перейдем в меню **Вставка** -> **Сводная таблица**.

<div class="website-diagrams">
  <v-lazy-image
      :src="$withBase('/images/excel/02-excel-formula/10-povit-menu.png')"
      :src-placeholder="$withBase('/images/excel/02-excel-formula/10-povit-menu-prev.png')"
      alt="Select data on list"
  />
</div>

В появившемся меню выбираем оставляем занчения по умолчанию, тут нас все устраивает.

<div class="website-diagrams">
  <v-lazy-image
      :src="$withBase('/images/excel/02-excel-formula/11-povit-menu-2.png')"
      :src-placeholder="$withBase('/images/excel/11-povit-menu-2-prev.png')"
      alt="povit table menu"
  />
</div>

После нажатия клавиши Ok мы попадаем на созданный лист (Лист2) на которой уже запущен инструмент работы со сводными таблицами.

<div class="website-diagrams">
  <v-lazy-image
      :src="$withBase('/images/excel/02-excel-formula/12-povit-list.png')"
      :src-placeholder="$withBase('/images/excel/12-povit-list-prev.png')"
      alt="povit table menu"
  />
</div>

Тут можно сказать, что к уже известному нам *причинно следственному* принципу, те к строке формул и области данных добавляется еще один оперативный элемент - поля сводной таблицы (можно увидеть на рисунке выше в правой части рисунка). С ними мы и будем оперировать.

Для начала перенесем поле **Округ** в область **Строки**. Или просто достаточно поставить галочку в полу **Округ** и она автоматически добавиться в область **Строки**.

<div class="website-diagrams">
  <v-lazy-image
      :src="$withBase('/images/excel/02-excel-formula/povit-string.gif')"
      :src-placeholder="$withBase('/images/excel/povit-string.gif')"
      alt="povit string"
  />
</div>

Сразу после этого в области данных на листе появится такая небольшая таблица.

<div class="website-diagrams">
  <v-lazy-image
      :src="$withBase('/images/excel/02-excel-formula/13-povit-region.png')"
      :src-placeholder="$withBase('/images/excel/13-povit-region-prev.png')"
      alt="povit region"
  />
</div>

Далее поле **Отметка времени** переместим в область **Значения**. Просто перетащив его мышкой как мы только что сделали с полем **Округ**.

<div class="website-diagrams">
  <v-lazy-image
      :src="$withBase('/images/excel/02-excel-formula/povit-value.gif')"
      :src-placeholder="$withBase('/images/excel/povit-value.gif')"
      alt="povit value"
  />
</div>

И наша сводная таблица получится в следующем виде.

<div class="website-diagrams">
  <v-lazy-image
      :src="$withBase('/images/excel/02-excel-formula/14-povit-count.png')"
      :src-placeholder="$withBase('/images/excel/14-povit-count-prev.png')"
      alt="povit value"
  />
</div>

Этим действием мы получили разбивку количества людей по округам. 

### Настройка значений сводной таблицы

Так же обратите внимание на небольшой символ треугольника вниз из области **Значения** полей Сводной таблицы. Если нажать на этот треугольник то откроется контекстное меню в котором будет пункт **Параметры полей значений**. Он нам и нужен.

<div class="website-diagrams">
  <v-lazy-image
      :src="$withBase('/images/excel/02-excel-formula/22-povit-count-options.png')"
      :src-placeholder="$withBase('/images/excel/22-povit-count-options-prev.png')"
      alt="povit value"
  />
</div>

Далее в появившемся диалоговом окне **Параметры поля значений** мы можем выбрать тип операций которые будут производится над данными.

<div class="website-diagrams">
  <v-lazy-image
      :src="$withBase('/images/excel/02-excel-formula/23-povit-count-operation.png')"
      :src-placeholder="$withBase('/images/excel/23-povit-count-operation-prev.png')"
      alt="povit value"
  />
</div>

<div class="custom-block warning">
Это крайне важно, что именно будет выбрано - сумма или количество. Так как текстовые поля целесообразнее считать количеством (напимер число людей по ФИО или по округу). Тогда как, например, сумма взноса по округу - это сумма! И подсчитывать ее нужно суммой а не количеством. А если выбрать количество то мы получим неадекватный результат! Всегда нужно перепроверять себя и что именно вычисляется!
</div>

### Обновление данных

При этом если на листе и исходными данными, мы удалим или отредактируем строки, то в сводной таблице так же обновяться. Если этого не произошло, то нажимаем правой клавишей мыши по любой ячейки сводной таблицы и выбираем меню ``Обновить``. После чего наша сводная таблица пересчитается.

<div class="website-diagrams">
  <v-lazy-image
      :src="$withBase('/images/excel/02-excel-formula/15-povit-refresh.png')"
      :src-placeholder="$withBase('/images/excel/15-povit-refresh-prev.png')"
      alt="povit refresh"
  />
</div>

Следует отметить что и в этой небольшой таблице так же прерастно работает сортировка данных. Можем смело отсортировть по возратанию и узнать самый успешный округ.

Учитывая большое количество полей опроса, тут большой простор для творчества, попробуйте еще несколько различных вариантов полей для анализа и сортировки. Например взять **Месяц прихода** и в качестве значений использовать **Отметка времени**. Таким образом мы получим разбивку по тому сколько человек пришло в каком месяце.

Так же покажите использование **Столбцов**. Добавьте поле **Структурная единица** и покажтите такую форму отчета.

<div class="website-diagrams">
  <v-lazy-image
      :src="$withBase('/images/excel/02-excel-formula/16-povit-column.png')"
      :src-placeholder="$withBase('/images/excel/16-povit-column-prev.png')"
      alt="povit colunm"
  />
</div>

<div class="website-diagrams">
  <v-lazy-image
      :src="$withBase('/images/excel/02-excel-formula/17-povit-column-result.png')"
      :src-placeholder="$withBase('/images/excel/17-povit-column-result-prev.png')"
      alt="povit result"
  />
</div>

> Вышеперечисленный объем матариала
> ⏱
> Примерно 45-50 минут объяснения

### Диаграммы и визуализация данных

Итак мы постоили свою первую сводную таблицу. Давайте теперь визуализируем наши полученные результаты. Для этого вначале выделем данные в нашей сводной таблице, а затем перейдем на вкладку ``Вставка`` -> ``Диаграммы`` -> ``Круговая``.

<div class="website-diagrams">
  <v-lazy-image
      :src="$withBase('/images/excel/02-excel-formula/18-cercle-diagramm.png')"
      :src-placeholder="$withBase('/images/excel/18-cercle-diagramm-prev.png')"
      alt="cercle diagramm"
  />
</div>

Далее можем заняться уже непосредственно настройкой самой диаграммы. Добавим подпись данных на диаграмме. Для этого выделим непосредственно кругувою диаграмму (а не белую область картики!). И нажмем правой клавишей мыши. В появившемся контекстном меню выбираем ``Добавить подписи данных`` -> ``Добавить подписи данных`` (или ``Добавить выноски данных`` на  ваше усмотрение).

<div class="website-diagrams">
  <v-lazy-image
      :src="$withBase('/images/excel/02-excel-formula/19-diagramm-info.png')"
      :src-placeholder="$withBase('/images/excel/19-diagramm-info-prev.png')"
      alt="cercle info"
  />
</div>

Так на круговой диаргамме появятся числовые значения из таблицы. Так же можем более детально настроить эти подписи. Для этого опять таки  выделим непосредственно кругувою диаграмму и нажмем правой клавишей мыши. В появившемся контекстном меню выбираем ``Формат подписей данных``.

<div class="website-diagrams">
  <v-lazy-image
      :src="$withBase('/images/excel/02-excel-formula/20-diagramm-config.png')"
      :src-placeholder="$withBase('/images/excel/20-diagramm-config-prev.png')"
      alt="cercle config"
  />
</div>

Справа также откроется меню настройки в котором можно настроить отображение подписей еще более тонко.

<div class="website-diagrams">
  <v-lazy-image
      :src="$withBase('/images/excel/02-excel-formula/21-diagramm-config-menu.png')"
      :src-placeholder="$withBase('/images/excel/21-diagramm-config-menu-prev.png')"
      alt="cercle config menu"
  />
</div>

Можете смело поэксперементировать с настройками, поискать вариант который вам больше всего понравиться. Так интересным вариантом будет если выбрать пункт **Доли**. Такна график добавится не непсредственно значение из таблицы, а автоматически вычислиться процент.

При этом "Легенду диаграммы" можем и вовсе убрать, выделев ее и нажав клавишу ``Delete`` на клавиатуре.

> Вышеперечисленный объем матариала
> ⏱
> Примерно 60 - 70 минут объяснения

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