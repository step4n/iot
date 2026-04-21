# IoT Camp Screen

Tento projekt neni finalni samostatny web. Je to lokalni preview noveho screenu, ktery se pozdeji vlozi do existujicich stranek.

Aktualni zamer:
- screen bude slouzit pro uceni deti na tabore praci s IoT,
- deti budou prochazet ukoly, sbirat hvezdicky a pouzivat je na napovedy nebo dalsi odmeny,
- konkretni Arduino ukoly jsou uz rozrazene podle obtiznosti a lze je dal upravovat.

Aktualne pripravena kostra:
- 3 sekce: `Zacatecnik`, `Pokrocily`, `Expert`,
- screen je prepsany na logiku ve stylu Duolingo,
- kazda sekce ma svoji cestu s uzly, na ktere se postupne proklikava,
- detail jednoho ukolu se otevira zvlast, ne jako dlouhy seznam vsech ukolu na jedne strance,
- hvezdicky a postup se ukladaji do `localStorage`,
- screen je zapouzdreny do `window.IotCampScreen.mount(...)`,
- lokalni preview se spousti pres `index.html`.

Aktualni sada ukolu:
- `Zacatecnik`: `LED`, `Potenciometr`, `AND - OR`, `Semafor`, `Tlacitko + buzzer`, `Nocni svetlo`,
- `Pokrocily`: `Schodistove svetlo`, `Semafor + prechod`, `Parkovaci system`, `Detekce pohybu`, `Teplotni alarm`, `Pocitadlo + a -`,
- `Expert`: `Servo motor`, `Loop servo`, `Loop RGB`, `Reakcni hra`, `LED ruleta`, `Arduino piano`, `Automaticka zavora`.

Pravidla funkcionality:
- vstup na screen je chranen dennim PINem,
- dalsi sekce se ma odemykat az po dokonceni predchozi,
- dalsi ukol v ceste se ma odemykat az po splneni predchoziho,
- u kazdeho ukolu bude mozne potvrdit splneni pres lektorsky PIN,
- za splneni ukolu se budou pripisovat body,
- body bude mozne utratit za napovedu, preskoceni ukolu a dalsi veci,
- obchod pro body ma uz pripravenou kostru i misto pro dalsi odmeny.

Napovedy:
- `Kod` a `Zapojeni` se kupuji za hvezdicky,
- po odemceni se v detailu ukolu otevre obsah napovedy,
- texty napoved jsou odvozene ze zadani a screenshotu, ktere byly poslany pri navrhu,
- originalni obrazky zapojeni bude nejpresnejsi doplnit az jako soubory primo do projektu.

Konfigurace:
- docasne PINy jsou zamerne jen zastupne hodnoty v `app.js`,
- nepouzivat citlive nebo osobni PINy,
- pred integraci do hlavniho webu je vhodne presunout konfiguraci PINu mimo klientsky kod.

Poznamka k integraci:
- pri lokalnim preview se screen mountuje automaticky do `#app`,
- pri pozdejsim napojeni na existujici web staci pridat kontejner a zavolat `window.IotCampScreen.mount(elementOrSelector)`.
