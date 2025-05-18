<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <title>INFO</title>
</head>

<body>
    <div id="contenu">
        <?php
        $aujourdhui = date('Y-m-d');
        echo '<p id="date_ajourdhui"> Bonjour, nous sommes le ' . $aujourdhui . '</p>' . "\n";
        ?>

        <form action="traitement.php" method="post">
            <label for="genre">Votre genre :</label>
            <select name="genre" id="genre">
                <option>Mme</option>
                <option>M</option>
            </select><br />
            <label for="prenom">Votre prénom :</label>
            <input type="text" name="prenom" id="prenom"><br />
            <label for="dateNaissance">Votre date de naissance</label>
            <input type="date" name="dateNaissance" id="dateNaissance">
            <input type="submit" value="Envoyer">
        </form>
    </div>
</body>

</html>