<?php
// send-mail.php

// Allow CORS (change '*' to your domain in production)
header("Access-Control-Allow-Origin: https://bilalhaiderwebdev.vercel.app/");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

// Handle preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    echo json_encode(['status' => 'ok']);
    exit;
}

// Only allow POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['status' => 'error', 'message' => 'Method not allowed']);
    exit;
}

// Helper: sanitize string (remove CRLF to prevent header injection)
function sanitize_string($str) {
    $str = trim($str);
    $str = str_replace(["\r", "\n"], ' ', $str);
    return htmlspecialchars($str, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

// Get POST values (works with FormData or application/x-www-form-urlencoded)
$name = isset($_POST['name']) ? sanitize_string($_POST['name']) : '';
$email = isset($_POST['email']) ? sanitize_string($_POST['email']) : '';
$message = isset($_POST['message']) ? sanitize_string($_POST['message']) : '';

// Basic validation
if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'All fields are required.']);
    exit;
}

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Invalid email address.']);
    exit;
}

// Prepare mail
$to = "nexusgroup.brands@gmail.com"; // <-- change this to your email
$subject = "Contact form submission from " . $name;

$body_plain = "You have a new contact form message:\n\n";
$body_plain .= "Name: " . $name . "\n";
$body_plain .= "Email: " . $email . "\n\n";
$body_plain .= "Message:\n" . $message . "\n";

// Use a fixed from address to avoid problems; add Reply-To with user's email
$from_email = "no-reply@bilalhaiderwebdev.vercel.app"; // change to domain email if possible
$headers = "From: " . $from_email . "\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Send mail
$sent = mail($to, $subject, $body_plain, $headers);

if ($sent) {
    http_response_code(200);
    echo json_encode(['status' => 'success', 'message' => 'Message sent successfully.']);
} else {
    http_response_code(500);
    echo json_encode(['status' => 'error', 'message' => 'Failed to send email. Server error.']);
}
?>
