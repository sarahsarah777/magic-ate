<?php
	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Methods: GET, PUT');
	header("Access-Control-Allow-Headers: X-Requested-With");

	$debug = false;

	$realUrl = "https://api.yelp.com/v3/businesses/search?location=" . urlencode($_GET["location"]) . "&term=" . urlencode($_GET["term"]);

	if($debug)
		$realUrl = "http://localhost:8001/simulation.json";

	$authKey = "uIz__6O55cSK30ylNuC1wk3gJFUMldlXfO0LDq5kDynKRrWex_DeRtI2861qzZCDx-jzzzfCVpVh2GeatW2bVEyawDPIN2swswex-dbcZSgHu0V39TtfDcZyHG4tYXYx";

	$opts = array(
		'http' => array(
			'request_fulluri'=>true,
			'header' => array(
				"Authorization: Bearer $authKey"
			)
		)
	);

	$context = stream_context_create($opts);
	if($debug)
		$context = null;
	
	echo file_get_contents($realUrl, false, $context);
?>