
<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$newsletter_email = $_POST['newsletter_email'];
// Формирование самого письма
if(isset($_POST['newsletter_email'])) {
    $title = "Подписка на рассылку";
    $body = "
    <h2>Новое письмо</h2>
    <b>Email:</b> $newsletter_email<br>
    ";
} 
// Формирование самого письма

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'exppost0@gmail.com'; // Логин на почте
    $mail->Password   = 'gloacademy'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('exppost0@gmail.com', 'Назар Вохминцев'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('nazar.offc@mail.ru');  
    // $mail->addAddress('youremail@gmail.com'); // Ещё один, если нужен
// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    
// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

if (isset($_POST['newsletter_email'])) {
    header('Location:thanks.html');
}
// Отображение результата
