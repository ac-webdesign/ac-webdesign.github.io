<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message']; 


    // Email address where you want to receive messages
    $to = "alex.chorevas@gmail.com";
    $subject = "New message from $name";

    $body = "Name: $name\nEmail: $email\n\n$message";

    // Headers
    $headers = "From: $email";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo "Your message has been sent successfully!";
    } else {
        echo "Sorry, something went wrong. Please try again later.";
    }
}
?>
