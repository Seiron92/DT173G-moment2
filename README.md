# Moment 2

## *Automatesringens syfte*
Automatisering görs för att slippa upprepa kommandon (DRY), exempelvis för att slå ihop filer eller komprimera dem.

### Paket och verktyg
Jag har valt ann använda följande:
* gulp-concat (https://www.npmjs.com/package/gulp-concat)
* gulp-uglify-es (https://www.npmjs.com/package/gulp-uglify-es)
* gulp-clean-css (https://www.npmjs.com/package/gulp-clean-css)
* gulp-concat-css (https://www.npmjs.com/package/gulp-concat-css)
* gulp-watch (https://www.npmjs.com/package/watch)
* gulp-imagemin (https://www.npmjs.com/package/gulp-imagemin)
* gulp-livereload (https://www.npmjs.com/package/gulp-livereload?fbclid=IwAR3_gixo4fMoAyzDtbmkI2LS7kpkfimaFSrfrDom-MvEtw2MhdOBakMU6HY)

Concat och uglify-es visades i föreläsningen så jag valde dem för att concata och komprimera, 
eftersom de användes i exemplet så antog jag att dessa paket var av god kvalité.

Clean-css och concat-css används för att komprimera och concata css-filer

Watch fick jag installera eftersom jag fick ett felmeddelande om att dte inte var ett "känt kommando" och en watch behövde jag. 

Gällande live reloads testade jag lite olika (utan någon direkt framgång), hur jag än gjorde så fungerade inget, 
livereload fungerade i terminalen (vid varje uppdatering stod det att filerna hade reloadats) så jag valde den men fick det inte att fungera i
webbläsaren. Efter en hel del googlande hittade jag att man var tvungen att 
installera ett tillägg i webbläsaren (https://chrome.google.com/webstore/search/live%20reload), efter det var gjort fungerade
allt. På något vis känns det inte rätt, eller ja, som om att det inte borde behövas om man gör "rätt" så något galet har jag nog gjort.
Jag får väll trösta mig med att många haft problem med detta och att denna lösning åtmnståne fungerar. 

Denna extension finns bara för chrome men snarlika finns för webbläsare som Firefox, Edge och Safari (googla: webbläsarens namn + livereload extension).

## *Beskrivning av systemet*

Systemet startas (efter hämtning) genom att skriva "npm install" i terminalen.
För att se att allt fungerar från start kan man antingen tömma "pub"-mappen eller radera hela mappen och skapa en ny.

*Det kan bli strul om porten för livereload är upptagen så se till att denna port finns tillgänglig.*

Systemet består av automatisering för css (cssTask), JS (jsTask) och bildfiler (imgTask), där hela bildmappen kopieras 
samt kopiering av HTML filer (copyHTML). 
Utöver detta finns en watcher task för att kopiera över filer (till pub) för var ändring som görs. 
