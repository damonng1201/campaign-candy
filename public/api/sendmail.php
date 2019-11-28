<?php
    // Import PHPMailer classes into the global namespace
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    // Load Composer's autoloader
    require '../vendor/autoload.php';

    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    $input = file_get_contents("php://input");
    $_POST = json_decode($input, true);
    error_log(print_r($_POST['values'], true));

    if(count($_POST) > 0) {
        // Instantiation and passing `true` enables exceptions
        $mail = new PHPMailer(true);
        try {
            //Server settings
            //$mail->SMTPDebug = SMTP::DEBUG_SERVER;                      // Enable verbose debug output
            //$mail->isSMTP();                                            // Send using SMTP
            //$mail->Host       = 'smtp1.example.com';                    // Set the SMTP server to send through
            //$mail->SMTPAuth   = true;                                   // Enable SMTP authentication
            //$mail->Username   = 'user@example.com';                     // SMTP username
            //$mail->Password   = 'secret';                               // SMTP password
            //$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
            //$mail->Port       = 587;                                    // TCP port to connect to
        
            //Recipients
            $mail->setFrom('info@campaigncandy.com.sg', 'Campaign Candy');
            $emails = explode(',', $_POST['values']['email']);
            foreach($emails as $email) {
                $mail->addAddress($email);
            }
            $mail->addReplyTo('info@campaigncandy.com.sg', 'Campaign Candy');
        
            // Content
            $mail->isHTML(true);                                  // Set email format to HTML
            $mail->Subject = 'Here is the subject';
            $body = 'Submitted info:<br>';
            foreach($_POST['values'] as $key => $value) {
                $body .= $key . ': ' . (is_array($value) === true ? implode(',', $value) : $value) . '<br>';
            }
            $mail->Body    = $body;
        
            $mail->send();
            echo 'Message has been sent';
        } catch (Exception $e) {
            echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        }
    } else {
        echo json_encode(
            array("message" => "Invalid Request.")
        );
    }
?>