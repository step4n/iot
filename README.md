# IoT Camp Screen

Tento projekt neni finalni samostatny web. Je to lokalni preview noveho screenu, ktery se pozdeji vlozi do existujicich stranek.

Aktualni zamer:
- screen bude slouzit pro uceni deti na tabore praci s IoT,
- deti budou prochazet ukoly, sbirat body a pouzivat je na napovedy nebo dalsi odmeny,
- konkretni obsah ukolu zatim neni zadany a doplni se pozdeji.

Aktualne pripravena kostra:
- 3 sekce: `Zacatecnik`, `Pokrocily`, `Expert`,
- screen je prepsany na logiku ve stylu Duolingo,
- kazda sekce ma svoji cestu s uzly, na ktere se postupne proklikava,
- detail jednoho ukolu se otevira zvlast, ne jako dlouhy seznam vsech ukolu na jedne strance,
- body a postup se ukladaji do `localStorage`,
- screen je zapouzdreny do `window.IotCampScreen.mount(...)`,
- lokalni preview se spousti pres `index.html`.

Pravidla funkcionality:
- vstup na screen je chranen dennim PINem,
- dalsi sekce se ma odemykat az po dokonceni predchozi,
- dalsi ukol v ceste se ma odemykat az po splneni predchoziho,
- u kazdeho ukolu bude mozne potvrdit splneni pres lektorsky PIN,
- za splneni ukolu se budou pripisovat body,
- body bude mozne utratit za napovedu, preskoceni ukolu a dalsi veci,
- obchod pro body ma uz pripravenou kostru i misto pro dalsi odmeny.

Co je ted zamerne prazdne:
- konkretni ukoly pro jednotlive sekce,
- texty zadani, obrazky a skutecne napovedy,
- konkretni dalsi odmeny v obchodu mimo napovedu a preskoceni.

Konfigurace:
- docasne PINy jsou zamerne jen zastupne hodnoty v `app.js`,
- nepouzivat citlive nebo osobni PINy,
- pred integraci do hlavniho webu je vhodne presunout konfiguraci PINu mimo klientsky kod.

Poznamka k integraci:
- pri lokalnim preview se screen mountuje automaticky do `#app`,
- pri pozdejsim napojeni na existujici web staci pridat kontejner a zavolat `window.IotCampScreen.mount(elementOrSelector)`.
