**Тест-кейс 1:**<br>
Описание: Всплывает сообщение "Вопрос является обязательным",  после клика на кнопку Отправить, если поле 'Ваше имя' не заполнено.<br>
Предусловие: поля email, цель обращения, ваше сообщение заполнены валидными значениями<br>
Ожидаемый результат: Всплывает сообщение "Вопрос является обязательным", поле выделяется красным<br>
Приоритет: high<br>

**Тест-кейс 2:**<br>
Описание: Всплывает сообщение "Вопрос является обязательным",  после клика на кнопку Отправить, если поле 'email' не заполнено.<br>
Предусловие: поля Ваше имя, цель обращения, ваше сообщение заполнены валидными значениями<br>
Ожидаемый результат: Всплывает сообщение "Вопрос является обязательным", поле выделяется красным<br>
Приоритет: high<br>

**Тест-кейс 3:**<br>
Описание: Всплывает сообщение "Вопрос является обязательным",  после клика на кнопку Отправить, если поле 'Ваше сообщение' не заполнено.<br>
Предусловие: поля Ваше имя, цель обращения, email заполнены валидными значениями<br>
Ожидаемый результат: Всплывает сообщение "Вопрос является обязательным", поле выделяется красным<br>
Приоритет: high<br>

**Тест-кейс 4:**<br>
Описание: Всплывает сообщение "Вопрос является обязательным",  после клика на кнопку Отправить, если в поле 'Цель сообщения' не выбрано ни одного значения.<br>
Предусловие: поля Ваше имя, ваше сообщение, email заполнены валидными значениями<br>
Ожидаемый результат: Всплывает сообщение "Вопрос является обязательным", поле выделяется красным<br>
Приоритет: high<br>

**Тест-кейс 5:**<br>
Описание: Система отправляет сообщение,  после клика на кнопку Отправить, если не заполнено поле телефон<br>
Предусловие: поля Ваше имя, ваше сообщение, email, цель обращения  заполнены валидными значениями<br>
Ожидаемый результат: Сообщение отправляется, происходит переход на страницу с сообщением 'Благодарим за сообщение'<br>
Приоритет: high<br>

**Тест-кейс 6:**<br>
Описание:Всплывает сообщение "Вопрос является обязательным"под всеми обязательными полями ввода, после клика на кнопку Отправить.<br>
Предусловие: заполнено только поле телефон, остальные поля пустые<br>
Ожидаемый результат: :Всплывает сообщение "Вопрос является обязательным" под всеми обязательными полями, обязательные поля выделяются красным<br>
Приоритет: high<br>

**Тест-кейс 7:**<br>
Описание:Система отправляет сообщение,  после клика на кнопку Отправить,после заполнения всех полей формы<br>
Предусловие: поля Ваше имя, ваше сообщение, email, цель обращения, телефон  заполнены валидными значениями<br>
Ожидаемый результат: Сообщение отправляется, происходит переход на страницу с сообщением 'Благодарим за сообщение'<br>
Приоритет: high<br>

**Тест-кейс 8:**<br>
Описание: Всплывает сообщение об ошибке при заполнение поля email невалидными значениями, после клика на кнопку Отправить<br>
Предусловие: поля Ваше имя, ваше сообщение, цель обращения, телефон  заполнены валидными значениями<br>
Шаги:<br>
1. Заполнить поле email невалидными значениями и кликнуть на кнопку отправить<br>
Ожидаемый результат: Сообщение не отправляется, всплывает сообщение об ошибке под полем ввода email<br>
Приоритет: high<br>

**Тест-кейс 9:**<br>
Описание: Всплывает сообщение об ошибке при заполнение поля Ваше имя невалидными значениями, после клика на кнопку Отправить<br>
Предусловие: поля email, ваше сообщение, цель обращения, телефон  заполнены валидными значениями<br>
Шаги:<br>
1. Заполнить поле Ваше имя невалидными значениями и кликнуть на кнопку Отправить<br>
Ожидаемый результат: Сообщение не отправляется, всплывает сообщение об ошибке под полем ввода Ваше имя<br>
Приоритет: high<br>

**Тест-кейс 10:**<br>
Описание: Всплывает сообщение об ошибке при заполнение поля Ваше сообщение невалидными значениями, после клика на кнопку Отправить<br>
Предусловие: поля email, ваше имя, цель обращения, телефон  заполнены валидными значениями<br>
Шаги:<br>
1. Заполнить поле Ваше сообщение невалидными значениями и кликнуть на кнопку отправить<br>
Ожидаемый результат: Сообщение не отправляется, всплывает сообщение об ошибке под полем ввода Ваше сообщение<br>
Приоритет: high<br>

**Тест-кейс 11:**<br>
Описание: Всплывает сообщение об ошибке при заполнение поля Телефон невалидными значениями, после клика на кнопку Отправить<br>
Предусловие: поля email, ваше имя, цель обращения, ваше сообщение   заполнены валидными значениями<br>
Шаги:<br>
1. Заполнить поле телефон невалидными значениями и кликнуть на кнопку отправить<br>
Ожидаемый результат: Сообщение не отправляется, всплывает сообщение об ошибке под полем ввода Телефон что номер введен некорректно<br>
Приоритет: high<br>

**Тест-кейс 12:**<br>
Описание: Сообщение отправляется при выборе пункта Заказ в поле Цель обращения, после клика на кнопку Отправить<br>
Предусловие: поля email, ваше имя, ваше сообщение   заполнены валидными значениями<br>
Шаги: <br>
1. В поле цель сообщения выбираем пункт Заказ и кликаем на кнопку Отправить<br>
Ожидаемый результат: Сообщение  отправляется, происходит переход на страницу с сообщением 'Благодарим за сообщение'<br>
Приоритет: high<br>

**Тест-кейс 13:**<br>
Описание: Сообщение отправляется при выборе пункта Вопрос о товаре в поле Цель обращения, после клика на кнопку Отправить<br>
Предусловие: поля email, ваше имя, ваше сообщение   заполнены валидными значениями<br>
Шаги:<br> 
1. В поле цель сообщения выбираем пункт Вопрос о товаре и кликаем на кнопку Отправить<br>
Ожидаемый результат: Сообщение  отправляется, происходит переход на страницу с сообщением 'Благодарим за сообщение'<br>
Приоритет: high<br>

**Тест-кейс 14:**<br>
Описание: Сообщение отправляется при выборе пункта Вопрос в тех. поддержку в поле Цель обращения, после клика на кнопку Отправить<br>
Предусловие: поля email, ваше имя, ваше сообщение   заполнены валидными значениями<br>
Шаги: <br>
1. В поле цель сообщения выбираем пункт Вопрос в тех. поддержку и кликаем на кнопку Отправить<br>
Ожидаемый результат: Сообщение  отправляется, происходит переход на страницу с сообщением 'Благодарим за сообщение'<br>
Приоритет: high<br>

**Тест-кейс 15:**<br>
Описание: Сообщение отправляется при выборе пункта Отзыв в поле Цель обращения, после клика на кнопку Отправить<br>
Предусловие: поля email, ваше имя, ваше сообщение   заполнены валидными значениями<br>
Шаги: <br>
1. В поле цель сообщения выбираем пункт Отзыв и кликаем на кнопку Отправить<br>
Ожидаемый результат: Сообщение  отправляется, происходит переход на страницу с сообщением 'Благодарим за сообщение'<br>
Приоритет: high<br>

**Тест-кейс 16:**<br>
Описание: Сообщение отправляется при выборе пункта Жалоба в поле Цель обращения, после клика на кнопку Отправить<br>
Предусловие: поля email, ваше имя, ваше сообщение   заполнены валидными значениями<br>
Шаги:<br>
1. В поле цель сообщения выбираем пункт Жалоба и кликаем на кнопку Отправить<br>
Ожидаемый результат: Сообщение  отправляется, происходит переход на страницу с сообщением 'Благодарим за сообщение'<br>
Приоритет: high<br>

**Тест-кейс 17:**<br>
Описание: Сообщение отправляется при выборе пункта Другое в поле Цель обращения, после клика на кнопку Отправить<br>
Предусловие: поля email, ваше имя, ваше сообщение   заполнены валидными значениями<br>
Шаги:<br>
 1. В поле цель сообщения выбираем пункт Другое и кликаем на кнопку Отправить<br>
Ожидаемый результат: Сообщение  отправляется, происходит переход на страницу с сообщением 'Благодарим за сообщение'<br>
Приоритет: high<br>

**Тест-кейс 18:**<br>
Описание: Удаляется выбранный пункт из поля Цель обращения после клика на иконку X<br>
Предусловие: поля email, ваше имя, ваше сообщение   заполнены валидными значениями<br>
Шаги:<br>
1. В поле Цель сообщения выбираем один из пунктов  (ОР: Выбранный пункт отображается в поле Цель сообщения)<br>
2. Кликаем на X рядом с выбранным пунктом<br>
Ожидаемый результат: Выбранный пункт Другое удаляется из поля Цель сообщения<br>
Приоритет: high<br>