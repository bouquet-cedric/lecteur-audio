# Zik Lector

## Utilisation

1. Insertion du script
 
Ajouter :
<div class="bloc">

```html
<head>
	<script src="https://bouquet-cedric.github.io/lecteur-audio/scripts/utils.js"> </script>
</head>
```

</div>
dans le header de votre page HTML.

2. Utilisation basique

Ajouter le script suivant dans une div de votre site web :
<div class="bloc">

```html
<script type="text/javascript">
```
```js
var lecteur = new Lecteur();
lecteur.addRecord("Aqua - Barbie Girl.mp3"); 
// Attention le chemin vers le fichier doit exister, 
// et il faut bien séparer l'auteur et le titre par ' - '

// Vous pouvez ajouter autant de record que vous voulez

lecteur.show();
```	
```html
</script>
```

</div>

3. Personnalisation

<div class="bloc">

```html
<script type="text/javascript">
```
```js
var lecteur = new Lecteur();
Lecteur.useStyleProgressBar(true); // Utilise la barre de défilement personnalisée
Lecteur.setColorTime([
	"blue",
	"green",
	"yellow",
	"red"
]); // Définit les couleurs de la barre de progression du temps
lecteur.addRecord("Aqua - Barbie Girl.mp3");
lecteur.show();
```
```html
</script>
```

</div>


<style>
span.com{
	color:lime;
}

pre span.com{
	display:none;
}

pre:hover span.com{
	display:inline;
}

ol{
	border:1px solid orange;
	background-color:lightgrey;
	border-radius:25px;
	width:20%!important;
	text-align:center;
}

.bloc{
	border:1px solid gray;
	padding:0.5em 2em;
	width:70%;
	margin-left:10%;
}

h1{
	text-align:center;
}

pre.lang-js,pre.lang-html{
	padding:0;
	border:none;
	margin-top:0;
	margin-bottom:0;
	box-shadow:none;
	width:100%!important;
}
pre.lang-js code{
	border:none;
	margin-left:4em;
}
</style>
