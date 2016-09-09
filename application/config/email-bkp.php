<?php
defined('BASEPATH') OR exit('No direct script access allowed');

    //configure email settings
    $config['protocol'] = '';
    $config['smtp_host'] = '';
    $config['smtp_port'] = '';
    $config['smtp_user'] = ''; // email id
    $config['smtp_pass'] = ''; // email password
    $config['mailtype'] = 'html';
    $config['wordwrap'] = TRUE;
    $config['charset'] = 'utf-8';
    $config['newline'] = "\r\n"; //use double quotes here
    // $config['smtp_host'] = 'localhost';