# ivisPro Description
In unserer Visualisierung geht es um dem Mount Everest. 

Mit unserer Lösung zeigen wir, in welchem Jahr wieviele Leute den Gipfel erfolgreich bestiegen haben. Zudem zeigen wir, wie viele beim Versuch gestorben sind und die jeweilige Todesursachen.
Ersichtlich sind:
- Allgemeine Informationen zum Berg
- Timeline
- Name des Bergsteigers
- Geschlecht des Bergsteigers
- Herkunft des Bergsteigers (Land)
- Sherpa

Filtern kann man nach:
- Jahr
- Geschlecht
- Schweizer
- Sherpa
- Todesursache

Hinweis: Teilweise kommen Personen bei den Fatalities und den Summiters vor, dies liegt daran, dass diese Personen beim Weg nach unten verunfallt sind.

# DataSources
Die Hauptdatenquelle stammt von http://www.8000ers.com/. Dort fand man zwei seperate Files mit allen erfolgreichen Besteiger 
und allen Verunfallten. 
Der Vorteil dieser Daten war einerseits, dass man die Dateien als PDF-Datei herunterladen konnte und andererseits, dass auch zusätzliche Infos zu den einzelnen Menschen enthalten waren.
Vorallem die Todesursache, Nation, Sherpa / nicht Sherpa und männlich/weiblich waren Angaben, welche wir für unsere Visualisierung brauchten.

Um die Richtigkeit der Daten zu überprüfen, vergleichten wir diese Strichprobeartig mit anderen Quellen:
- https://en.wikipedia.org/wiki/List_of_people_who_died_climbing_Mount_Everest
- https://www.upeverest.com/summitteers

# CleanData
Unsere Daten haben wir mit dem Tool «Trifcta Wrangler» bereinigt. Folgendes haben wir vorgenommen:
- Leere Zeilen entfernt
- Unbenötigte Spalten entfernt
- Grund für Fatalities gruppiert
- Die wichtigsten/meisten Gründe für Fatalities bestimmt, der Rest als «other» definiert
- Leere Felder als null definiert
- Die zwei seperaten Files zu einem vereint, sodass wir in einem einzigen File alle Sumitter uns Fatalities haben
- usw.

# Sketchs
Die Grafiken und Strichmännchen wurden in der Sketchapp entworfen.

# Installation
Das Projekt kann unter dem Link https://norinasteiner.github.io/ivisPro/ aufgerufen werden.
Je nach Internetverbindung kann es etwas dauern, bis alle Daten geladen sind.

# Browser
Um eine korrekte Darstellung der Visualisierung zu erreichen, muss das Projekt mit dem Browser «Google Chrome» geöffnet werden. 

# Contributors
Das ivis-Projekt wurde von Sandra Meier und Norina Steiner im Team erarbeitet.


