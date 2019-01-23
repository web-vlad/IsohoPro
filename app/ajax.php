<?php

include "libmail.php";



	$m = new Mail();
	//$m->smtp_on('',)
	$m->From( "im04@il.i" );
	$m->To("im04@il.i");
	//$m->To("im04@il.i");

	if(isset($_POST['order-call'])) {
		$m->Subject('Заказ');
        $body = '<p><b>Имя:</b> '.$_POST['name'].'</p>'
            .'<p><b>Телефон:</b> '.$_POST['phone'].'</p>'
            .'<p><b>Email:</b> '.$_POST['email'].'</p>'
            .'<p><b>Сообщение:</b> '.$_POST['message'].'</p>';
        echo "thanks";
	}
    
    elseif (isset($_POST['order-call-2'])) {
		$m->Subject('Тест Драйв');
		$body = '<p><b>Имя:</b> '.$_POST['name'].'</p>'
            .'<p><b>Телефон:</b> '.$_POST['phone'].'</p>'
			.'<p><b>Email:</b> '.$_POST['email'].'</p>'
			.'<p><b>Сообщение:</b> '.$_POST['message'].'</p>';
		echo "thanks";
	}

	elseif (isset($_POST['contact'])) {
        $m->Subject('Вопросы');
        $body = '<p><b>Имя:</b> '.$_POST['name'].'</p>'
            .'<p><b>Телефон:</b> '.$_POST['phone'].'</p>'
            .'<p><b>Email:</b> '.$_POST['email'].'</p>'
            .'<p><b>Сообщение:</b> '.$_POST['message'].'</p>';
        echo "thanks";
    }



	$m->Body($body, 'html');
	$m->Send();
?>
