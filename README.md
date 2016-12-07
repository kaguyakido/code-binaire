# code-binaire
binaire code
A ajouter lors de la prochaine connection
et maintenant ajouter le code


<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<style>
body {
	font-family: verdana, arial, sans-serif;
	font-size: 0.75em;
}
</style>
</head>
<body>
<?php
// Inclure les ressources
require_once 'php_utils.php';

// Connexion
try {
	// Crée un objet connexion
	$link = new PDO ( 'mysql:host=' . SVR . ';dbname=' . DBS, USR, PWD );
	$link->setAttribute ( PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC );
	
	// Récupère tous les clients via SQL
	$sql = 'SELECT * FROM clients WHERE CODE_CLIENT="' . $_GET ['code'] . '"';
	$data = $link->query ( $sql );
	echo '<h1>Client : ' . $_GET ['code'] . '</h1>';
	
	// Parcourt chaque colonne de la ligne
	$html = '<form id="frmClients" method="post" action="clients_upd.php?code=' . $_GET ['code'] . '">';
	$ligne = $data->fetch ();
	foreach ( $ligne as $cle => $value ) {
		$html .= '<div><label>' . $cle . ' : </label><input type="text" value="' . utf8_encode ( $value ) . '" name="' . $cle . '" /></div>';
	}
	$html .= '<input type="submit" value="Enregistrer ce client" />';
	$html .= '</form>';
	echo $html;
	
	// Désinstanciation de la variable
	$link = null; // ou unset($link)
} catch ( Exception $e ) {
	die ( 'Erreur : ' . $e->getMessage () );
}
?>
</body>
</html>
