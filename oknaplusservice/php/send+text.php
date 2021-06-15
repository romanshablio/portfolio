<?php

// получение данных с формы
$Name = $_POST['Name'];
$Phone = $_POST['Phone'];
$Text = $_POST['Text'];

//обработка и преобразование данных
$Name = htmlspecialchars($Name); //преобразование символов в сущности
$Phone= htmlspecialchars($Phone);
$Text = htmlspecialchars($Text);


$Name = urldecode($Name); //декодирование URL
$Phone= urldecode($Phone);
$Text = urldecode($Text);

$Name = trim($Name); //удаление лишних пробелов
$Phone= trim($Phone);
$Text = trim($Text);

if (mail("larinasvetlana977@gmail.com",
            "Новое письмо с сайта ОКНА+СЕРВИС!",
            "Имя: ".$Name."\n".
            "Телефон: ".$Phone."\n".
            "Текст сообщения: ".$Text."\n",
            "From: no-reply@mydomain.ru \r\n")
            ) {
                echo ('Ваше сообщение успешно отправлено!');
                
            }
            else {
                echo('Есть ошибки, проверьте все ли обязательные поля заполнены.');
            }
?>
<div>
<a href="/index.html" class="primary-btn about-btn">Вернуться назад</a>
</div>