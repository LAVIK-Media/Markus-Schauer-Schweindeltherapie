// Inhalte aus den Texten der alten Seite (archiv-alte-seite/texte), neu gegliedert.
// Keine neuen medizinischen Aussagen.


export interface Erkrankung {
  slug: string;
  bild: string;
  name: string;
  lang: string;
  alt: string[];
  titel: string;
  beschreibung: string;
  teaser: string;
  antwort: string;
  fakten: [string, string][];
  symptome: string[];
  therapien: string[];
  abschnitte: { h: string; p?: string[]; ul?: string[] }[];
  faq: { f: string; a: string }[];
  verwandt: string[];
  warnung?: string;
  zitat?: string;
}

export const ERKRANKUNGEN: Erkrankung[] = [
  {
    slug: 'lagerungsschwindel',
    bild: 'ohr-kristalle',
    name: 'Lagerungsschwindel',
    lang: 'Benigner peripherer paroxysmaler Lagerungsschwindel (BPLS)',
    alt: ['BPLS', 'Benigner peripherer paroxysmaler Lagerungsschwindel', 'Gutartiger Lagerungsschwindel'],
    titel: 'Lagerungsschwindel (BPLS): Ursache, Anzeichen, Behandlung',
    beschreibung: 'Drehschwindel für Sekunden beim Hinlegen, Aufrichten oder Kopfdrehen? Wie Lagerungsschwindel entsteht und wie er mit gezielten Lagerungsmanövern behandelt wird.',
    teaser: 'Sekundenlanger Drehschwindel bei Lagewechsel',
    antwort: 'Lagerungsschwindel ist ein Drehschwindel, der durch einen Lagewechsel ausgelöst wird, etwa beim Hinlegen, Aufrichten oder Kopfdrehen. Er dauert nur Sekunden. Ursache sind abgelöste Otolithen („Ohrsteinchen“), die in die Bogengänge des Gleichgewichtsorgans gewandert sind.',
    fakten: [['Art', 'Drehschwindel'], ['Dauer', 'Sekunden'], ['Auslöser', 'Hinlegen, Aufrichten, Kopfdrehen'], ['Ursache', 'Gelöste Otolithen in den Bogengängen'], ['Behandlung', 'Gezieltes Lagerungsmanöver']],
    symptome: ['Drehschwindel bei Lagewechsel'],
    therapien: ['Lagerungsmanöver'],
    abschnitte: [
      { h: 'Wie entsteht Lagerungsschwindel?', p: ['Otolithen haften normalerweise fest in den Otolithenorganen Utriculus und Sacculus. Lösen sie sich, wandern sie in die Bogengänge. Bei bestimmten Bewegungen verstärken sie dort die Strömung der Innenohrflüssigkeit. Die Folge ist Schwindel.'] },
      { h: 'Zwei Formen: Canalolithiasis und Cupulolithiasis', p: ['Bei der Canalolithiasis sind die Otolithen frei beweglich. Bei der Cupulolithiasis haften sie fest.', 'In jedem Gleichgewichtsorgan gibt es drei Bogengänge, rechts und links: den posterioren, den horizontalen und den anterioren Bogengang. Alle sechs Bogengänge müssen untersucht werden.'] },
      { h: 'Wie wird Lagerungsschwindel behandelt?', p: ['Die Therapie sollte nicht durch Eigenübungen erfolgen. Sie gehört in die Hand des Behandlers, denn nur eine exakte Ausführung entfernt die Otolithen aus dem Bogengang. Bei korrekter Durchführung durch einen Fachmann sind die Aussichten gut.'] },
      { h: 'Wovon muss man ihn abgrenzen?', p: ['Ein erfahrener Behandler schließt vor allem zentralen Schwindel, zervikogenen Schwindel und internistische Kreislaufstörungen aus.'] },
    ],
    faq: [
      { f: 'Kann ich Lagerungsschwindel selbst mit Übungen behandeln?', a: 'Davon rate ich ab. Nur ein exakt ausgeführtes Lagerungsmanöver entfernt die Otolithen aus dem Bogengang. Deshalb sollte ein Behandler das Manöver gezielt durchführen.' },
      { f: 'Können Physiotherapeuten Lagerungsschwindel behandeln?', a: 'Ja. In meiner Praxis untersuche ich als Physiotherapeut und Heilpraktiker alle sechs Bogengänge und führe das passende Lagerungsmanöver durch.' },
      { f: 'Wie lange dauert ein Anfall bei Lagerungsschwindel?', a: 'Der Drehschwindel dauert nur Sekunden und tritt bei Lagewechsel auf, zum Beispiel beim Hinlegen, Aufrichten oder Kopfdrehen.' },
    ],
    verwandt: ['hws-schwindel', 'neuritis-vestibularis', 'zentraler-schwindel'],
    zitat: 'Stundenlang spüre ich nichts, dann mache ich eine Bewegung und es dreht sich in meinem Kopf ganz heftig. Setze ich mich ruhig hin, wird es wieder besser. Ich bewege mich seitdem vorsichtiger.',
  },
  {
    slug: 'pppd',
    bild: 'sicht-schwank',
    name: 'PPPD',
    lang: 'Persistierender postural-perzeptiver Schwindel',
    alt: ['Persistierender postural-perzeptiver Schwindel', 'Funktioneller Schwindel', 'Phobischer Schwankschwindel', 'Somatoformer Schwindel', 'persistent postural-perceptual dizziness'],
    titel: 'PPPD (funktioneller Schwindel): Symptome und Therapie',
    beschreibung: 'PPPD ist der heutige Name für funktionellen Schwindel und phobischen Schwankschwindel. Symptome, Auslöser und Therapie verständlich erklärt.',
    teaser: 'Anhaltender Schwankschwindel, früher „funktioneller Schwindel“',
    antwort: 'PPPD (persistierender postural-perzeptiver Schwindel) ist ein anhaltender, schwankender Schwindel. Er wird besonders beim Stehen, beim Gehen oder durch bewegte visuelle Reize ausgelöst. Im Sitzen und Liegen ist er oft besser oder gar nicht vorhanden. Früher hieß er funktioneller Schwindel oder phobischer Schwankschwindel.',
    fakten: [['Art', 'Schwankschwindel, Benommenheit'], ['Dauer', 'Anhaltend, Dauerschwindel'], ['Auslöser', 'Stehen, Gehen, bewegte visuelle Reize'], ['Besser', 'Im Sitzen und Liegen'], ['Behandlung', 'Spezialisierte Physiotherapie mit verhaltenstherapeutischer Begleitung']],
    symptome: ['Schwankschwindel', 'Benommenheit', 'Gangunsicherheit', 'Dauerschwindel'],
    therapien: ['Spezialisierte Physiotherapie', 'Verhaltenstherapeutische Begleitung', 'EMDR'],
    abschnitte: [
      { h: 'Was bedeutet PPPD?', p: ['Der funktionelle Schwindel heißt heute offiziell PPPD, persistierender postural-perzeptiver Schwindel. Im Deutschen wird er oft auch als anhaltender lage- und bewegungsabhängiger Schwindel bezeichnet. Der Begriff fasst ältere Bezeichnungen wie phobischer Schwankschwindel oder somatoformer Schwindel zusammen.'] },
      { h: 'Typische Symptome', ul: ['Benommenheit', 'Gangunsicherheit', 'Dauerschwindel', 'Im Sitzen und Liegen oft besser oder gar nicht vorhanden'] },
      { h: 'Wie beginnt PPPD?', p: ['Oft ging ein akuter Schwindel voraus. Das Gefühl des Schwankens kann sich aber auch allmählich entwickeln.'] },
      { h: 'Welche Therapie bei PPPD?', p: ['Ich setze auf eine gezielte Kombination aus spezialisierter Physiotherapie und verhaltenstherapeutischer Begleitung. Ziel ist eine spürbare und dauerhafte Besserung Ihrer Beschwerden.', 'Bei funktionellem Schwindel und phobischem Schwankschwindel kombiniere ich die Schwindeltherapie mit EMDR.'] },
    ],
    faq: [
      { f: 'Ist PPPD dasselbe wie phobischer Schwankschwindel?', a: 'PPPD ist der heutige Oberbegriff. Er fasst frühere Bezeichnungen wie phobischer Schwankschwindel, somatoformer Schwindel und funktioneller Schwindel zusammen.' },
      { f: 'Wie fühlt sich PPPD an?', a: 'Betroffene beschreiben ein anhaltendes Schwanken, Benommenheit und Unsicherheit beim Gehen. Im Sitzen und Liegen ist der Schwindel oft besser oder gar nicht vorhanden.' },
      { f: 'Was löst PPPD aus?', a: 'Besonders Stehen, Gehen und bewegte visuelle Reize. Häufig ging ein akuter Schwindel voraus.' },
    ],
    verwandt: ['hws-schwindel', 'bilaterale-vestibulopathie', 'vestibulaere-migraene'],
    zitat: 'Mehrere Monate habe ich so ein schwammiges Gefühl im Kopf, so eine Benommenheit. Draußen ist es eher ein Schwanken. Es ist wie eine dauernde Unsicherheit. Bis jetzt wurde bei den Untersuchungen nichts gefunden.',
  },
  {
    slug: 'hws-schwindel',
    bild: 'praxis-hws',
    name: 'HWS-Schwindel',
    lang: 'Zervikogener Schwindel, Schwindel durch die Halswirbelsäule',
    alt: ['Zervikogener Schwindel', 'Halswirbelsäulenbedingter Schwindel', 'Schwindel durch HWS'],
    titel: 'HWS-Schwindel: Schwindel durch die Halswirbelsäule',
    beschreibung: 'Kann die Halswirbelsäule Schwindel auslösen? Anzeichen, Ursachen und Abgrenzung des zervikogenen Schwindels, behandelt in der Praxis Markus Schauer in Bad Tölz.',
    teaser: 'Schwanken und Benommenheit durch die Halswirbelsäule',
    antwort: 'HWS-Schwindel (zervikogener Schwindel) ist eine Form des Schwindels, die durch Probleme im Bereich des Halses verursacht wird, insbesondere der Halswirbelsäule. Schwanken, Benommenheit und Gangunsicherheit sind unterschiedlich stark ausgeprägt.',
    fakten: [['Art', 'Schwanken, Benommenheit'], ['Begleitend', 'Gangunsicherheit, Nackenverspannungen'], ['Ursache', 'Überbewegliche HWS-Segmente oder steife Brustwirbelsäule'], ['Behandlung', 'HWS-Behandlung, Wirbelsäulenstabilisation']],
    symptome: ['Schwanken', 'Benommenheit', 'Gangunsicherheit', 'Nackenverspannungen'],
    therapien: ['Halswirbelsäulenbehandlung', 'Wirbelsäulenstabilisation', 'Manuelle Therapie'],
    abschnitte: [
      { h: 'Kann die Halswirbelsäule Schwindel auslösen?', p: ['Die Halswirbelsäule ist eine zentrale Stelle für das Ausrichten des Gleichgewichts und der Lage des Körpers im Raum. In der Behandlung gewinnt der zervikogene Schwindel immer mehr an Bedeutung.'] },
      { h: 'Welche Ursachen stecken dahinter?', p: ['Oft sind einige Wirbelsegmente der Halswirbelsäule überbeweglich (Hypermobilität) oder die Brustwirbelsäule ist steif (Hypomobilität). Meist kommen Nackenverspannungen und Fehlstellungen der Wirbelkörper hinzu.'] },
      { h: 'Warum ist die Abgrenzung wichtig?', p: ['Andere Schwindelformen können ähnlich aussehen, besonders die Vestibularisparoxysmie, die Perilymphfistel und PPPD. Hier zählt Erfahrung.'] },
      { h: 'Was wird untersucht und behandelt?', p: ['Zur Untersuchung gehören Kopfstellung, Wirbelsäulenhaltung, Halswirbelsäuleninstabilität und Atlasdiagnostik. In der Therapie arbeite ich unter anderem mit Halswirbelsäulenbehandlung, Wirbelsäulenstabilisation und Manueller Therapie.'] },
    ],
    faq: [
      { f: 'Welche Symptome hat HWS-Schwindel?', a: 'Typisch sind Schwanken, Benommenheit und Gangunsicherheit. Sie sind unterschiedlich stark ausgeprägt. Meist bestehen zusätzlich Nackenverspannungen.' },
      { f: 'Wie wird HWS-Schwindel festgestellt?', a: 'Durch die Untersuchung der Halswirbelsäule, unter anderem auf Instabilität, durch Atlasdiagnostik und durch die Abgrenzung von Vestibularisparoxysmie, Perilymphfistel und PPPD.' },
    ],
    verwandt: ['pppd', 'lagerungsschwindel', 'seltene-schwindelformen'],
  },
  {
    slug: 'morbus-meniere',
    bild: 'ohr-schnecke',
    name: 'Morbus Menière',
    lang: 'Erkrankung des Innenohres mit Schwindelanfällen',
    alt: ['Menière-Krankheit', 'Meniere'],
    titel: 'Morbus Menière: Anzeichen und Schwindelbehandlung',
    beschreibung: 'Anfälle von starkem Drehschwindel mit Ohrgeräusch, Hörminderung und Druck im Ohr: Anzeichen von Morbus Menière, Abgrenzung und Therapie im Überblick.',
    teaser: 'Drehschwindelanfälle mit Ohrgeräusch und Hörminderung',
    antwort: 'Morbus Menière ist eine Erkrankung des Innenohres. In den Kammern und Kanälen von Hörschnecke und Gleichgewichtsorgan steigt der Innendruck. Typisch ist ein anfallsartiger, starker Drehschwindel, der Minuten bis Stunden dauert, mit Ohrgeräuschen und Hörminderung auf der betroffenen Seite.',
    fakten: [['Art', 'Starker Drehschwindel, anfallsartig'], ['Dauer', 'Minuten bis Stunden'], ['Begleitend', 'Ohrgeräusche, Hörminderung, Druckgefühl im Ohr'], ['Ursache', 'Erhöhter Innendruck im Innenohr']],
    symptome: ['Anfallsartiger Drehschwindel', 'Ohrgeräusche', 'Hörminderung', 'Druckgefühl im Ohr', 'Gangunsicherheit', 'Fallneigung'],
    therapien: ['Schwindeltraining', 'Gezielte Nahrungsergänzung', 'Spezielle Ernährung', 'Medikamente'],
    abschnitte: [
      { h: 'Anzeichen von Morbus Menière', ul: ['Anfallsartiger, starker Drehschwindel', 'Dauer von Minuten bis Stunden', 'Ohrgeräusche auf der betroffenen Seite', 'Hörminderung auf der betroffenen Seite', 'Druckgefühl im Ohr', 'Gangunsicherheit und Fallneigung'] },
      { h: 'Warum ist die Abgrenzung wichtig?', p: ['Drehschwindel ist das Leitsymptom mehrerer Schwindelerkrankungen. Eine genaue Diagnose ist nötig, um die passende Behandlung zu finden.'] },
      { h: 'Wie wird behandelt?', p: ['Die Therapie kann Medikamente, eine spezielle Ernährung, Schwindeltraining und gezielte Nahrungsergänzung umfassen.'] },
    ],
    faq: [
      { f: 'Wie lange dauert ein Schwindelanfall bei Morbus Menière?', a: 'Der starke Drehschwindel dauert Minuten bis Stunden.' },
      { f: 'Woran erkennt man Morbus Menière?', a: 'An der Kombination aus anfallsartigem Drehschwindel, Ohrgeräuschen, Hörminderung und Druckgefühl im betroffenen Ohr. Gangunsicherheit und Fallneigung können hinzukommen.' },
    ],
    verwandt: ['vestibulaere-migraene', 'neuritis-vestibularis', 'seltene-schwindelformen'],
  },
  {
    slug: 'vestibulaere-migraene',
    bild: 'sicht-dreh',
    name: 'Vestibuläre Migräne',
    lang: 'Schwindelmigräne',
    alt: ['Schwindelmigräne', 'Migräneschwindel'],
    titel: 'Vestibuläre Migräne (Schwindelmigräne): Symptome und Hilfe',
    beschreibung: 'Schwindelanfälle mit Übelkeit, Kopfschmerz, Licht- und Lärmempfindlichkeit: wie sich vestibuläre Migräne zeigt und warum die Diagnose oft dauert.',
    teaser: 'Wiederkehrende Schwindelanfälle, mit oder ohne Kopfschmerz',
    antwort: 'Die vestibuläre Migräne ist eine Unterform der Migräne, bei der vor oder während des Anfalls Schwindel auftritt. Typisch sind wiederkehrende Schwindelanfälle mit Gang- und Standunsicherheit, Übelkeit, Kopfschmerzen sowie Licht- und Lärmempfindlichkeit. Selten tritt sie ganz ohne Kopfschmerz auf.',
    fakten: [['Art', 'Wiederkehrende Schwindelanfälle'], ['Begleitend', 'Übelkeit, Kopfschmerz, Licht- und Lärmempfindlichkeit'], ['Schlimmer', 'Durch Bewegung'], ['Besonderheit', 'Selten auch ohne Kopfschmerz']],
    symptome: ['Wiederkehrende Schwindelanfälle', 'Gang- und Standunsicherheit', 'Übelkeit und Erbrechen', 'Kopfschmerzen', 'Licht- und Lärmempfindlichkeit', 'Ruhebedürfnis'],
    therapien: [],
    abschnitte: [
      { h: 'Häufige Symptome', ul: ['Wiederkehrende Schwindelanfälle mit Gang- und Standunsicherheit', 'Übelkeit und Erbrechen', 'Kopfschmerzen', 'Licht- und Lärmempfindlichkeit', 'Ruhebedürfnis', 'Bewegung verschlechtert die Symptome eher'] },
      { h: 'Warum dauert die Diagnose oft so lange?', p: ['Der Kopfschmerz kann in zeitlichem Abstand zum Schwindel auftreten. Selten besteht die Schwindelmigräne ganz ohne Kopfschmerz. Beides erschwert die Diagnose. Andere Ursachen, unter anderem zentrale Erkrankungen, sollten ausgeschlossen werden.'] },
      { h: 'Worauf kommt es bei der Behandlung an?', p: ['Wichtig ist ein Therapeut, der Erfahrung mit Schwindel und mit Migräne hat, die Ursachen genau erkennt und individuell darauf eingeht.'] },
    ],
    faq: [
      { f: 'Gibt es vestibuläre Migräne ohne Kopfschmerzen?', a: 'Ja, selten. Das erschwert die Diagnose zusätzlich.' },
      { f: 'Was verschlimmert vestibuläre Migräne?', a: 'Bewegung verschlechtert die Symptome eher. Viele Betroffene sind zudem licht- und lärmempfindlich und haben ein starkes Ruhebedürfnis.' },
    ],
    verwandt: ['morbus-meniere', 'pppd', 'zentraler-schwindel'],
  },
  {
    slug: 'neuritis-vestibularis',
    bild: 'ohr-nerv',
    name: 'Neuritis vestibularis',
    lang: 'Plötzlicher Ausfall eines Gleichgewichtsorgans',
    alt: ['Neuropathia vestibularis', 'Entzündung des Gleichgewichtsnervs'],
    titel: 'Neuritis vestibularis: Symptome und Behandlung',
    beschreibung: 'Akuter Drehschwindel mit Übelkeit und Fallneigung: Was bei einer Neuritis vestibularis passiert und warum eine rasche, konsequente Therapie wichtig ist.',
    teaser: 'Akuter Drehschwindel durch Ausfall eines Gleichgewichtsorgans',
    antwort: 'Neuritis vestibularis ist der plötzliche Ausfall eines Gleichgewichtsorgans. Ursache ist eine Entzündung des Gleichgewichtsnervs (Nervus vestibularis), unter anderem durch Virusinfektionen und Durchblutungsstörungen. Typisch ist ein akuter Drehschwindel mit Übelkeit, Gleichgewichtsstörungen und Fallneigung.',
    fakten: [['Art', 'Akuter Drehschwindel mit Scheinbewegungen'], ['Beginn', 'Plötzlich'], ['Begleitend', 'Übelkeit, Erbrechen, Schweißausbrüche, Fallneigung'], ['Ursache', 'Entzündung des Gleichgewichtsnervs'], ['Behandlung', 'Kompensationstraining, Beratung']],
    symptome: ['Akuter Drehschwindel mit Scheinbewegungen', 'Übelkeit und Erbrechen', 'Schweißausbrüche', 'Gleichgewichtsstörungen', 'Fallneigung'],
    therapien: ['Kompensationstraining', 'Gezielte Mineralien und Vitamine'],
    abschnitte: [
      { h: 'Mögliche Symptome', ul: ['Akuter Drehschwindel mit Scheinbewegungen', 'Übelkeit und Erbrechen', 'Schweißausbrüche', 'Gleichgewichtsstörungen', 'Fallneigung'] },
      { h: 'Was ist die Ursache?', p: ['Die Ursache liegt in einer Entzündung des Gleichgewichtsnervs, unter anderem durch Virusinfektionen und Durchblutungsstörungen.'] },
      { h: 'Wie wird behandelt?', p: ['Zielführend sind ein Kompensationstraining, Beratung und eventuell die Unterstützung mit gezielten Mineralien und Vitaminen.', 'Eine rasche und konsequente Therapie ist wichtig, um Beschwerden zu lindern und Komplikationen zu vermeiden. Eine frühzeitige Behandlung kann die Genesung beschleunigen und das Risiko von Langzeitproblemen reduzieren.'] },
    ],
    faq: [
      { f: 'Was ist die Ursache einer Neuritis vestibularis?', a: 'Eine Entzündung des Gleichgewichtsnervs, unter anderem durch Virusinfektionen und Durchblutungsstörungen.' },
      { f: 'Warum ist eine frühe Behandlung wichtig?', a: 'Eine frühzeitige Behandlung kann die Genesung beschleunigen und das Risiko von Langzeitproblemen reduzieren.' },
    ],
    verwandt: ['bilaterale-vestibulopathie', 'lagerungsschwindel', 'pppd'],
  },
  {
    slug: 'bilaterale-vestibulopathie',
    bild: 'ohr-bogen',
    name: 'Bilaterale Vestibulopathie',
    lang: 'Beidseitiger Ausfall des Gleichgewichtsorgans',
    alt: ['Beidseitige Vestibulopathie'],
    titel: 'Bilaterale Vestibulopathie: Anzeichen und Training',
    beschreibung: 'Schwankschwindel beim Gehen, schlimmer im Dunkeln und auf unebenem Boden: Anzeichen der bilateralen Vestibulopathie und wie vestibuläre Rehabilitation helfen kann.',
    teaser: 'Schwanken beim Gehen, stärker im Dunkeln',
    antwort: 'Bei der bilateralen Vestibulopathie ist das Gleichgewichtsorgan auf beiden Seiten teilweise oder ganz ausgefallen. Anzeichen sind ein dauerhafter Schwankschwindel beim Gehen oder Stehen, der sich bei Dämmerung, Dunkelheit und auf unebenem Boden verstärkt. Oft verschlechtert sich die Sehschärfe bei Kopfbewegungen.',
    fakten: [['Art', 'Dauerhafter Schwankschwindel'], ['Wann', 'Beim Gehen oder Stehen'], ['Schlimmer', 'Dämmerung, Dunkelheit, unebener Boden'], ['Begleitend', 'Unscharfes Sehen bei Kopfbewegung'], ['Behandlung', 'Vestibuläre Rehabilitation']],
    symptome: ['Dauerhafter Schwankschwindel beim Gehen oder Stehen', 'Verstärkung bei Dunkelheit und unebenem Boden', 'Schlechtere Sehschärfe bei Kopfbewegungen'],
    therapien: ['Vestibuläre Rehabilitation', 'Pflanzenheilkunde', 'Gezielte Nahrungsergänzung'],
    abschnitte: [
      { h: 'Welche Ursachen gibt es?', p: ['Die Ursachen sind vielfältig. Dazu gehören Schädigungen durch Medikamente, Autoimmunerkrankungen und Vitamin-B-Mangel. Manchmal bleibt die Ursache unbekannt (idiopathisch).'] },
      { h: 'Was hilft bei bilateraler Vestibulopathie?', p: ['Die Behandlung kann herausfordernd sein, es gibt aber Hoffnung auf Besserung. Ein spezielles Training ist notwendig. Mit vestibulärer Rehabilitation können Balance und Gleichgewicht verbessert werden.', 'Gezielt kommen auch Substanzen aus der Pflanzenheilkunde und Nahrungsergänzungsmittel zum Einsatz.'] },
      { h: 'Was braucht es dafür?', p: ['Vertrauen, einen individuellen Behandlungsplan, Geduld und regelmäßige Übungen. Sie sind entscheidend für Fortschritte.'] },
    ],
    faq: [
      { f: 'Warum ist der Schwindel im Dunkeln stärker?', a: 'Bei bilateraler Vestibulopathie ist das Gleichgewichtsorgan beidseits teilweise oder ganz ausgefallen. Der Schwankschwindel verstärkt sich bei Dämmerung, Dunkelheit und auf unebenem Boden.' },
      { f: 'Welche Ursachen hat eine bilaterale Vestibulopathie?', a: 'Unter anderem Schädigungen durch Medikamente, Autoimmunerkrankungen und Vitamin-B-Mangel. Manchmal ist keine Ursache erkennbar.' },
    ],
    verwandt: ['altersschwindel', 'neuritis-vestibularis', 'gleichgewichtsstoerung'],
  },
  {
    slug: 'altersschwindel',
    bild: 'sicht-gang',
    name: 'Altersschwindel und Polyneuropathie',
    lang: 'Schwindel im höheren Alter',
    alt: ['Schwindel im Alter', 'Schwindel im höheren Alter', 'Schwindel bei Polyneuropathie'],
    titel: 'Altersschwindel und Polyneuropathie: sicher gehen',
    beschreibung: 'Schwindel im höheren Alter hat oft mehrere Ursachen. Anzeichen, begünstigende Faktoren wie Polyneuropathie und gezielte Therapie in Bad Tölz.',
    teaser: 'Gangunsicherheit und Sturzgefahr im höheren Alter',
    antwort: 'Altersschwindel entsteht meist aus einem Zusammenspiel von körperlichen Veränderungen, altersspezifischen Erkrankungen und Auswirkungen von Medikamenten. Richtungsweisend sind Gangunsicherheit, Schwindel und eine erhöhte Sturzgefahr, besonders bei schlechten Lichtverhältnissen.',
    fakten: [['Art', 'Schwindel, Gangunsicherheit'], ['Schlimmer', 'Bei schlechtem Licht'], ['Begünstigt durch', 'Polyneuropathie, verminderte Sehfähigkeit, Medikamente'], ['Risiko', 'Stürze'], ['Behandlung', 'Therapieprogramm Altersschwindel']],
    symptome: ['Gangunsicherheit', 'Schwindel', 'Erhöhte Sturzgefahr'],
    therapien: ['Therapieprogramm Altersschwindel', 'Gleichgewichtstraining'],
    abschnitte: [
      { h: 'Was begünstigt Schwindel im Alter?', ul: ['Nachlassende Sensibilität der Gleichgewichtsorgane', 'Verminderte Sehfähigkeit', 'Polyneuropathie: Schädigung der peripheren Nerven, besonders in den Füßen, mit Missempfindungen und fehlender Sensibilität', 'Mögliche Auswirkungen von Medikamenten'] },
      { h: 'Warum früh handeln?', p: ['Altersschwindel kann das tägliche Leben erheblich beeinträchtigen und das Risiko von Stürzen erhöhen. Je früher Sie handeln, desto besser können Sie Ihre Unabhängigkeit bewahren.'] },
      { h: 'Was kann eine Therapie erreichen?', p: ['Eine gezielte Therapie kann helfen, Balance und Gleichgewicht zu verbessern. Das unterstützt Ihre Mobilität und einen selbstständigen Alltag. Die Behandlung trägt auch dazu bei, die Angst vor Stürzen zu verringern.'] },
    ],
    faq: [
      { f: 'Was hat Polyneuropathie mit Schwindel zu tun?', a: 'Bei einer Polyneuropathie sind periphere Nerven geschädigt, besonders in den Füßen. Missempfindungen und fehlende Sensibilität begünstigen Gangunsicherheit, Schwindel und Stürze.' },
      { f: 'Lohnt sich eine Therapie bei Altersschwindel noch?', a: 'Eine gezielte Therapie kann Balance und Gleichgewicht verbessern und die Angst vor Stürzen verringern. Je früher Sie beginnen, desto besser.' },
    ],
    verwandt: ['gleichgewichtsstoerung', 'bilaterale-vestibulopathie', 'schwindel-durch-medikamente'],
    zitat: 'Seit einiger Zeit gehe ich nur noch mit Gehstock raus. Ich fühle mich sicherer auf Teerboden, aber auf dem Feldweg ist es schwer. Ist ein dämmriges Licht, wird das Schwanken ganz schön stark.',
  },
  {
    slug: 'gleichgewichtsstoerung',
    bild: 'sicht-lage',
    name: 'Gleichgewichtsstörung',
    lang: 'Gleichgewichtsstörungen mit und ohne Schwindel',
    alt: ['Gangunsicherheit', 'Gleichgewichtsprobleme'],
    titel: 'Gleichgewichtsstörung: Ursachen, Untersuchung, Training',
    beschreibung: 'Unsicher auf den Beinen, mit oder ohne Schwindel? Ursachen von Gleichgewichtsstörungen, Untersuchung und Gleichgewichtstraining in der Praxis Markus Schauer.',
    teaser: 'Unsicher auf den Beinen, mit und ohne Schwindel',
    antwort: 'Eine Gleichgewichtsstörung macht sich als Gangunsicherheit bemerkbar, die bis zur Sturzgefahr führen kann. Oft kommt ein schwindelähnliches Empfinden bis zur Benommenheit hinzu. In meiner Praxis behandle ich Gleichgewichtsstörungen mit und ohne Schwindel.',
    fakten: [['Art', 'Gangunsicherheit, unsicheres Gefühl'], ['Begleitend', 'Schwindelähnliches Empfinden, Benommenheit'], ['Ursachen', 'Innenohr, Nerven, innere Erkrankungen, Medikamente'], ['Risiko', 'Stürze'], ['Behandlung', 'Gleichgewichtstraining']],
    symptome: ['Gangunsicherheit', 'Sturzgefahr', 'Benommenheit'],
    therapien: ['Gleichgewichtstraining, propriozeptiv', 'Vestibularstabilisation'],
    abschnitte: [
      { h: 'Was kann das Gleichgewicht stören?', p: ['Die Ursachen sind vielfältig. Dazu gehören:'], ul: ['Erkrankungen des Innenohrs', 'Neurologische Störungen', 'Internistische Erkrankungen', 'Medikamente'] },
      { h: 'Wie wird das Gleichgewicht untersucht?', p: ['Ich beurteile Ihr Gangbild und teste das Gleichgewicht in unterschiedlichen Situationen, zum Beispiel das Schwanken beim Stehen, beim Gehen und im Dunkeln.'] },
      { h: 'Was gehört zur Behandlung?', p: ['Je nach Ursache kommen propriozeptives Gleichgewichtstraining, Vestibularstabilisation, Blickstabilisation und das Therapieprogramm Altersschwindel zum Einsatz.'] },
    ],
    faq: [
      { f: 'Behandeln Sie auch Gleichgewichtsstörungen ohne Schwindel?', a: 'Ja. In meiner Praxis behandle ich Gleichgewichtsstörungen mit und ohne Schwindel.' },
      { f: 'Wie wird eine Gleichgewichtsstörung getestet?', a: 'Durch Ganganalyse und Gleichgewichtstests in unterschiedlichen Situationen, etwa beim Stehen, beim Gehen und im Dunkeln.' },
    ],
    verwandt: ['altersschwindel', 'bilaterale-vestibulopathie', 'schwindel-durch-medikamente'],
    zitat: 'In die Gymnastikgruppe gehe ich länger schon nicht mehr, da bin ich einmal hingefallen.',
  },
  {
    slug: 'zentraler-schwindel',
    bild: 'sicht-doppel',
    name: 'Zentraler Schwindel',
    lang: 'Schwindel nach neurologischen Erkrankungen',
    alt: ['Schwindel nach Schlaganfall', 'Schwindel nach neurologischen Erkrankungen'],
    titel: 'Zentraler Schwindel: Warnzeichen und Therapie danach',
    beschreibung: 'Zentraler Schwindel entsteht im Nervensystem und muss sofort ärztlich abgeklärt werden. Warnzeichen und Therapie nach neurologischen Erkrankungen wie Schlaganfall.',
    teaser: 'Schwindel nach neurologischen Erkrankungen',
    antwort: 'Beim zentralen Schwindel liegt eine Störung oder Schädigung im zentralen Nervensystem vor. Möglich sind Dreh- oder Schwankschwindel, Übelkeit sowie Stand- und Gangunsicherheit. Die Dauer reicht von Sekunden bis zum Dauerschwindel. Eine sofortige ärztliche Abklärung ist notwendig.',
    warnung: 'Doppelbilder, Sehstörungen, Missempfindungen oder Lähmungen im Gesicht, Schluck- oder Sprachstörungen, gestörte Bewegungskoordination, Lähmungen, Muskelschwäche oder Sensibilitätsstörungen sind ernstzunehmende Warnzeichen. Lassen Sie sie sofort ärztlich abklären. Notruf: 112.',
    fakten: [['Art', 'Dreh- oder Schwankschwindel'], ['Dauer', 'Sekunden bis Dauerschwindel'], ['Begleitend', 'Übelkeit, Stand- und Gangunsicherheit'], ['Ursache', 'Störung im zentralen Nervensystem'], ['Wichtig', 'Sofortige ärztliche Abklärung']],
    symptome: ['Dreh- oder Schwankschwindel', 'Übelkeit', 'Stand- und Gangunsicherheit', 'Doppelbilder', 'Sprachstörungen'],
    therapien: ['Koordinationstraining', 'Augenstabilisation', 'Kompensation'],
    abschnitte: [
      { h: 'Wann spricht man von zentralem Schwindel?', p: ['Wenn der Schwindel von einer Störung oder Schädigung im zentralen Nervensystem ausgeht. Oft treten sehr ernstzunehmende Begleitsymptome auf.'] },
      { h: 'Welche Therapie hilft nach der Abklärung?', p: ['Nach einer neurologischen Erkrankung, zum Beispiel einem Schlaganfall, können Schwindel und Gleichgewichtsstörungen weiterbestehen. Dann ist eine gezielte Therapie zur Koordination, Augenstabilisation und Kompensation zu empfehlen.'] },
    ],
    faq: [
      { f: 'Wann ist Schwindel ein Notfall?', a: 'Wenn Doppelbilder, Sprach- oder Schluckstörungen, Lähmungen, Sensibilitätsstörungen oder Bewusstseinsstörungen hinzukommen. Dann ist eine sofortige ärztliche Abklärung notwendig. Notruf: 112.' },
      { f: 'Was hilft bei Schwindel nach einem Schlaganfall?', a: 'Nach der ärztlichen Behandlung ist eine gezielte Therapie zur Koordination, Augenstabilisation und Kompensation zu empfehlen.' },
    ],
    verwandt: ['gleichgewichtsstoerung', 'vestibulaere-migraene', 'altersschwindel'],
  },
  {
    slug: 'schwindel-durch-medikamente',
    bild: 'sicht-benommen',
    name: 'Schwindel durch Medikamente',
    lang: 'Schwindel als Nebenwirkung',
    alt: ['Medikamentenschwindel', 'Schwindel als Nebenwirkung'],
    titel: 'Schwindel durch Medikamente: Nebenwirkung erkennen',
    beschreibung: 'Medikamente können Schwindel auslösen oder verstärken. Worauf Sie achten sollten und warum Sie Medikamente nie eigenmächtig absetzen dürfen.',
    teaser: 'Schwindel als Nebenwirkung',
    antwort: 'Medikamente können eine häufige Ursache für Schwindel sein. Sie können das zentrale Nervensystem beeinflussen oder den Blutdruck verändern und so Schwindel auslösen oder vorhandene Beschwerden verstärken. Medikamente dürfen nicht eigenmächtig abgesetzt werden.',
    fakten: [['Wirkung', 'Auf Nervensystem oder Blutdruck'], ['Besonders', 'Bei hohen Dosen'], ['Vorgehen', 'Anamnese, Untersuchung, Rücksprache'], ['Wichtig', 'Nie eigenmächtig absetzen']],
    symptome: ['Schwindel als Nebenwirkung'],
    therapien: ['Medikamentenberatung'],
    warnung: 'Setzen Sie Medikamente nicht eigenmächtig ab, sondern nur in Absprache.',
    abschnitte: [
      { h: 'Wie lösen Medikamente Schwindel aus?', p: ['Schwindel kann als Nebenwirkung auftreten oder bestehende Symptome verstärken, vor allem bei hohen Dosen.'] },
      { h: 'Wie findet man heraus, ob es am Medikament liegt?', p: ['Beobachten Sie genau, wann der Schwindel auftritt. Ein erfahrener Therapeut oder Arzt kann durch gründliche Anamnese und Untersuchung feststellen, ob Medikamente die Ursache sind. Andere Ursachen müssen ebenfalls abgeklärt werden.'] },
      { h: 'Was ist dann zu tun?', p: ['In manchen Fällen muss die Medikation angepasst oder abgesetzt werden. Die Behandlung wird immer individuell abgestimmt.'] },
    ],
    faq: [
      { f: 'Darf ich ein Medikament absetzen, wenn mir schwindelig wird?', a: 'Nicht eigenmächtig. Eine Änderung sollte nur in Absprache erfolgen.' },
      { f: 'Wie stelle ich fest, ob ein Medikament den Schwindel verursacht?', a: 'Durch eine gründliche Anamnese und Untersuchung. Hilfreich ist, genau zu beobachten, wann der Schwindel auftritt.' },
    ],
    verwandt: ['altersschwindel', 'gleichgewichtsstoerung', 'bilaterale-vestibulopathie'],
  },
];

export const SELTENE = [
  { id: 'vestibularisparoxysmie', bild: 'ohr-nerv', name: 'Vestibularisparoxysmie', teaser: 'Gefäßkontakt am Gleichgewichtsnerv', p: ['Durch den Kontakt eines Blutgefäßes mit dem Nervus vestibulocochlearis kommt es zu Irritationen. Symptome können Dreh- und Schwankschwindel, Tinnitus, Hörempfindlichkeit und Gleichgewichtsstörungen sein.', 'Schulmedizinisch kommen Medikamente zum Einsatz. Ich arbeite mit cranio-sacraler Technik und HWS-Behandlung in Kombination mit Vestibulartherapie.'] },
  { id: 'perilymphfistel', bild: 'ohr-schnecke', name: 'Perilymphfistel', teaser: 'Verbindung zwischen Innen- und Mittelohr', p: ['Eine Perilymphfistel kann zwischen dem Perilymphraum des Labyrinths und dem Mittelohr entstehen. Symptome sind unter anderem Gleichgewichtsstörungen, Dreh- und Schwankschwindel, Tinnitus, Hörverschlechterung und Oszillopsie.'] },
  { id: 'bogengangsdehiszenz', bild: 'ohr-bogen', name: 'Bogengangsdehiszenz', teaser: 'Fehlende oder dünne Knochenschicht im Innenohr', p: ['Bei der Bogengangsdehiszenz fehlt die knöcherne Abdeckung eines Bogengangs im Innenohr oder sie ist zu dünn. Das führt zu Überempfindlichkeit gegenüber Geräuschen und Druckveränderungen. Mögliche Folgen sind Schwindel, Gleichgewichtsstörungen, Tinnitus, Oszillopsien und Hörprobleme. Laute Geräusche oder körperliche Anstrengung können die Symptome verstärken.', 'Die Diagnose erfolgt in der Regel durch Anamnese, Untersuchung und bildgebende Verfahren wie CT. Die Behandlung kann konservativ sein. In schweren Fällen wird die knöcherne Abdeckung chirurgisch wiederhergestellt.'] },
  { id: 'kinetose', bild: 'sicht-lift', name: 'Kinetose', teaser: 'Reisekrankheit, Empfindlichkeit bei Bewegung', p: ['Kinetose bezeichnet die Empfindlichkeit bei Bewegung. Seekrankheit, Übelkeit beim Autofahren und Höhenschwindel gehören nicht zu den klassischen Schwindelerkrankungen.'] },
];

export const SELTENE_SLUG = 'seltene-schwindelformen';

export function finde(slug: string): { href: string; name: string; teaser: string; bild: string } {
  if (slug === SELTENE_SLUG) return { href: `/schwindelerkrankungen/${SELTENE_SLUG}/`, name: 'Seltene Schwindelformen', teaser: 'Vestibularisparoxysmie, Perilymphfistel, Bogengangsdehiszenz', bild: 'ohr' };
  const e = ERKRANKUNGEN.find((x) => x.slug === slug);
  if (!e) throw new Error('Unbekannte Erkrankung: ' + slug);
  return { href: `/schwindelerkrankungen/${e.slug}/`, name: e.name, teaser: e.teaser, bild: e.bild };
}

// Vier Patientenschilderungen der alten Startseite
export const GEFUEHLE = [
  { id: 'schwank', label: 'Es schwankt', form: 'Schwankschwindel', zitat: 'Mehrere Monate habe ich so ein schwammiges Gefühl im Kopf, so eine Benommenheit. Draußen ist es eher ein Schwanken. An manchen Tagen ist es besser. Radfahren kann ich noch. Meine Arbeit kriege ich noch so hin, aber insgesamt belastet mich das sehr. Es ist wie eine dauernde Unsicherheit. Bis jetzt wurde bei den Untersuchungen nichts gefunden.', links: ['pppd', 'hws-schwindel'] },
  { id: 'dreh', label: 'Es dreht sich', form: 'Drehschwindel', zitat: 'Mehrmals am Tag bekomme ich Sekunden bis Minuten andauernde Schwindelanfälle. Es ist so ein Drehgefühl. Oft tritt es auf, wenn ich den Kopf schnell bewege. Manchmal habe ich gleichzeitig ein Rauschen im rechten Ohr.', links: ['morbus-meniere', 'vestibulaere-migraene', 'seltene-schwindelformen'] },
  { id: 'lage', label: 'Nur bei Lagewechsel', form: 'Lageabhängiger Schwindel', zitat: 'Stundenlang spüre ich nichts, dann mache ich eine Bewegung und es dreht sich in meinem Kopf ganz heftig. Setze ich mich ruhig hin, wird es wieder besser. Ich bewege mich seitdem vorsichtiger. Ich habe das nun schon seit vier Wochen und es wird nicht besser. In letzter Zeit kommt noch ein Gefühl wie Watte im Kopf dazu.', links: ['lagerungsschwindel', 'hws-schwindel'] },
  { id: 'gang', label: 'Unsicher auf den Beinen', form: 'Gleichgewicht und Schwindel', zitat: 'Seit einiger Zeit gehe ich nur noch mit Gehstock raus. Ich fühle mich sicherer auf Teerboden, aber auf dem Feldweg ist es schwer. Ist ein dämmriges Licht, wird das Schwanken ganz schön stark. In die Gymnastikgruppe gehe ich länger schon nicht mehr, da bin ich einmal hingefallen.', links: ['altersschwindel', 'bilaterale-vestibulopathie', 'gleichgewichtsstoerung'] },
];
