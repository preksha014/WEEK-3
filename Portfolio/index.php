<?php
     print_r($_GET);
    if($_GET){
        echo "Name ".$_GET['Name'];
        echo "Name ".$_GET['email'];
        echo "Message    ".$_GET['message'];
    }
?>