const IOT_CAMP_STORAGE_KEY = "iot-camp-screen-state";
const CONFIG_VERSION = 4;
const DAILY_ACCESS_MODE = "manual";
const MAX_STUDENTS_LIMIT = 25;
const DEFAULT_CONFIG = {
  dailyPin: "123",
  lecturerPin: "2468",
  adminPassword: "321",
  maxStudents: 15,
  helpCodeCost: 15,
  helpWiringCost: 15,
  skipCost: 30,
};

const STYLE_SHOP_CONFIG = {
  directUnlockCost: 40,
  randomSpinStarCost: 15,
  randomSpinTokenCost: 1,
  tokenMilestone: 3,
};

const AVATAR_SHOP_CONFIG = {
  directUnlockCost: 30,
  randomSpinCost: 12,
};

const PREVIEW_ALLOW_ANY_PIN = false;
const REQUIRE_LECTURER_PIN_FOR_CHECK = false;

const LEVEL_BADGES = [
  { id: "prvni-led", label: "PRVNI LED", icon: "&#127942;" },
  { id: "iot-mag", label: "IOT MAG", icon: "&#127894;" },
  { id: "architekt", label: "ARCHITEKT", icon: "&#127989;" },
  { id: "expert", label: "EXPERT", icon: "&#10022;" },
];

const STYLE_OPTIONS = [
  {
    id: "classic",
    label: "Classic",
    description: "Puvodni vzhled screenu.",
    accent: "blue",
    unlockType: "default",
  },
  {
    id: "sunrise",
    label: "Sunrise",
    description: "Teplejsi barvy a svetlejsi akcenty.",
    accent: "orange",
    unlockType: "shop",
  },
  {
    id: "forest",
    label: "Forest",
    description: "Zelenejsi laboratorni styl.",
    accent: "green",
    unlockType: "shop",
  },
  {
    id: "ice",
    label: "Ice",
    description: "Chladny modry styl s ostrejsimi kontrasty.",
    accent: "cyan",
    unlockType: "shop",
  },
];

const AVATAR_OPTIONS = [
  { id: "fox", label: "Fox / Purple", src: "./assets/avatar-icons/fox-purple.png", unlockType: "default" },
  { id: "bichon", label: "Bichon / Brown", src: "./assets/avatar-icons/bichon-brown.png", unlockType: "shop" },
  { id: "bull-terrier", label: "Bull Terrier / Blue", src: "./assets/avatar-icons/bull-terrier-blue.png", unlockType: "shop" },
  { id: "sloth", label: "Sloth / Blue", src: "./assets/avatar-icons/sloth-blue.png", unlockType: "shop" },
  { id: "weasel", label: "Weasel / Brown", src: "./assets/avatar-icons/weasel-brown.png", unlockType: "shop" },
  { id: "avatar-1005344", label: "Rhino / Red", src: "./assets/avatar-icons/rhino-red.png", unlockType: "shop" },
  { id: "avatar-1005362", label: "Koala / Brown", src: "./assets/avatar-icons/koala-brown.png", unlockType: "shop" },
  { id: "avatar-1326378-1", label: "Alpaca / Brown", src: "./assets/avatar-icons/alpaca-brown.png", unlockType: "shop" },
  { id: "avatar-1326378", label: "Alpaca / Red", src: "./assets/avatar-icons/alpaca-red.png", unlockType: "shop" },
  { id: "avatar-1326383", label: "Lion / Green", src: "./assets/avatar-icons/lion-green.png", unlockType: "shop" },
  { id: "avatar-1759412", label: "Cow / Brown", src: "./assets/avatar-icons/cow-brown.png", unlockType: "shop" },
  { id: "avatar-1805836", label: "Horse / Red", src: "./assets/avatar-icons/horse-red.png", unlockType: "shop" },
  { id: "avatar-1805874", label: "Beaver / Green", src: "./assets/avatar-icons/beaver-green.png", unlockType: "shop" },
  { id: "avatar-2319674", label: "Zebra / Brown", src: "./assets/avatar-icons/zebra-brown.png", unlockType: "shop" },
  { id: "avatar-2829735", label: "Dog / Blue", src: "./assets/avatar-icons/dog-blue.png", unlockType: "shop" },
  { id: "avatar-2911967", label: "Hippo / Blue", src: "./assets/avatar-icons/hippo-blue.png", unlockType: "shop" },
  { id: "avatar-3309340", label: "Hippo / Brown", src: "./assets/avatar-icons/hippo-brown.png", unlockType: "shop" },
  { id: "avatar-3700537", label: "Camel / Green", src: "./assets/avatar-icons/camel-green.png", unlockType: "shop" },
  { id: "avatar-3798958", label: "Giraffe / Blue", src: "./assets/avatar-icons/giraffe-blue.png", unlockType: "shop" },
  { id: "avatar-3940412", label: "Sheep / Red", src: "./assets/avatar-icons/sheep-red.png", unlockType: "shop" },
  { id: "avatar-3940422", label: "Pig / Blue", src: "./assets/avatar-icons/pig-blue.png", unlockType: "shop" },
  { id: "avatar-414696", label: "Duck / Blue", src: "./assets/avatar-icons/duck-blue.png", unlockType: "shop" },
  { id: "avatar-414718", label: "Raccoon / Red", src: "./assets/avatar-icons/raccoon-red.png", unlockType: "shop" },
  { id: "avatar-4775627", label: "Sloth Face / Blue", src: "./assets/avatar-icons/sloth-face-blue.png", unlockType: "shop" },
  { id: "avatar-4905476", label: "Spider / Brown", src: "./assets/avatar-icons/spider-brown.png", unlockType: "shop" },
  { id: "avatar-5094303", label: "Dog / Green", src: "./assets/avatar-icons/dog-green.png", unlockType: "shop" },
  { id: "avatar-5138246", label: "Pig / Green", src: "./assets/avatar-icons/pig-green.png", unlockType: "shop" },
  { id: "avatar-5266855", label: "Llama / Blue", src: "./assets/avatar-icons/llama-blue.png", unlockType: "shop" },
  { id: "avatar-6359353", label: "Snowman / Purple", src: "./assets/avatar-icons/snowman-purple.png", unlockType: "shop" },
  { id: "avatar-6359394", label: "Bellhop / Purple", src: "./assets/avatar-icons/bellhop-purple.png", unlockType: "shop" },
  { id: "avatar-6359529", label: "Koala / Purple", src: "./assets/avatar-icons/koala-purple.png", unlockType: "shop" },
  { id: "avatar-6359544", label: "Sheep / Purple", src: "./assets/avatar-icons/sheep-purple.png", unlockType: "shop" },
  { id: "avatar-6359560", label: "Reindeer / Purple", src: "./assets/avatar-icons/reindeer-purple.png", unlockType: "shop" },
  { id: "avatar-6359569", label: "Kid / Purple", src: "./assets/avatar-icons/kid-purple.png", unlockType: "shop" },
  { id: "avatar-6359640", label: "Bear / Purple", src: "./assets/avatar-icons/bear-purple.png", unlockType: "shop" },
  { id: "avatar-6359663", label: "Kid / Winter Purple", src: "./assets/avatar-icons/kid-winter-purple.png", unlockType: "shop" },
];

const DEFAULT_AVATAR_ID = AVATAR_OPTIONS[0]?.id ?? "fox";

const TASK_SOLUTIONS = {
  "beginner-led": `// C++ code
//
int X = 0;

void setup()
{
  pinMode(7, INPUT);
  pinMode(8, OUTPUT);
}

void loop()
{
  X = digitalRead(7);
  if (X == 1) {
    digitalWrite(8, HIGH);
  } else {
    digitalWrite(8, LOW);
  }
  delay(500); // Wait for 500 millisecond(s)
}`,
  "beginner-potentiometer": `// C++ code
//
int X = 0;

void setup()
{
  pinMode(A3, INPUT);
  Serial.begin(9600);
}

void loop()
{
  X = analogRead(A3);
  Serial.println(X);
  delay(500); // Wait for 500 millisecond(s)
}`,
  "beginner-and-or": `// C++ code
//
int A = 0;
int B = 0;

void setup()
{
  pinMode(2, INPUT);
  pinMode(3, INPUT);
  pinMode(8, OUTPUT);
  pinMode(9, OUTPUT);
}

void loop()
{
  A = digitalRead(2);
  B = digitalRead(3);

  if (A == 1 || B == 1) {
    digitalWrite(8, HIGH);
  } else {
    digitalWrite(8, LOW);
  }

  if (A == 1 && B == 1) {
    digitalWrite(9, HIGH);
  } else {
    digitalWrite(9, LOW);
  }
}`,
  "beginner-traffic-light": `// C++ code
//
void setup()
{
  pinMode(9, OUTPUT);
  pinMode(8, OUTPUT);
  pinMode(7, OUTPUT);
}

void loop()
{
  digitalWrite(9, HIGH);
  delay(3000); // Wait for 3000 millisecond(s)
  digitalWrite(8, HIGH);
  delay(1000); // Wait for 1000 millisecond(s)
  digitalWrite(9, LOW);
  digitalWrite(8, LOW);
  digitalWrite(7, HIGH);
  delay(3000); // Wait for 3000 millisecond(s)
  digitalWrite(7, LOW);
  digitalWrite(8, HIGH);
  delay(1000); // Wait for 1000 millisecond(s)
  digitalWrite(8, LOW);
}`,
  "beginner-buzzer-button": `// C++ code
//
int tlacitko = 0;

void setup()
{
  pinMode(7, INPUT);
}

void loop()
{
  tlacitko = digitalRead(7);
  if (tlacitko == 1) {
    tone(8, 440, 200);
  } else {
    noTone(8);
  }
  delay(50); // Wait for 50 millisecond(s)
}`,
  "beginner-light-sensor": `// C++ code
//
int svetlo = 0;

void setup()
{
  pinMode(A0, INPUT);
  pinMode(9, OUTPUT);
}

void loop()
{
  svetlo = analogRead(A0);
  if (svetlo < 400) {
    digitalWrite(9, HIGH);
  } else {
    digitalWrite(9, LOW);
  }
  delay(100); // Wait for 100 millisecond(s)
}`,
  "advanced-stair-light": `// C++ code
//
unsigned long casPoslednihoStisku = 0;

void setup()
{
  pinMode(2, INPUT);
  pinMode(3, INPUT);
  pinMode(8, OUTPUT);
}

void loop()
{
  if (digitalRead(2) == 1 || digitalRead(3) == 1) {
    digitalWrite(8, HIGH);
    casPoslednihoStisku = millis();
  }

  if (millis() - casPoslednihoStisku > 3000) {
    digitalWrite(8, LOW);
  }
}`,
  "advanced-crosswalk": `// C++ code
//
void setup()
{
  pinMode(2, INPUT);
  pinMode(7, OUTPUT);
  pinMode(8, OUTPUT);
  pinMode(9, OUTPUT);
}

void loop()
{
  digitalWrite(7, HIGH);
  digitalWrite(8, LOW);
  digitalWrite(9, LOW);

  if (digitalRead(2) == 1) {
    digitalWrite(7, LOW);
    digitalWrite(8, HIGH);
    delay(1000);
    digitalWrite(8, LOW);
    digitalWrite(9, HIGH);
    delay(3000);
    digitalWrite(9, LOW);
    digitalWrite(8, HIGH);
    delay(1000);
    digitalWrite(8, LOW);
  }
}`,
  "advanced-parking": `// C++ code
//
int X = 0;

long readUltrasonicDistance(int triggerPin, int echoPin)
{
  pinMode(triggerPin, OUTPUT);
  digitalWrite(triggerPin, LOW);
  delayMicroseconds(2);
  digitalWrite(triggerPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(triggerPin, LOW);
  pinMode(echoPin, INPUT);
  return pulseIn(echoPin, HIGH);
}

void setup()
{
  Serial.begin(9600);
  pinMode(3, OUTPUT);
  pinMode(4, OUTPUT);
  pinMode(5, OUTPUT);
}

void loop()
{
  X = 0.01723 * readUltrasonicDistance(7, 7);
  Serial.println(X);
  if (X > 20) {
    digitalWrite(3, HIGH);
    digitalWrite(4, LOW);
    digitalWrite(5, LOW);
  } else if (X > 5) {
    digitalWrite(3, LOW);
    digitalWrite(4, HIGH);
    digitalWrite(5, LOW);
  } else {
    digitalWrite(3, LOW);
    digitalWrite(4, LOW);
    digitalWrite(5, HIGH);
  }
  delay(100); // Wait for 100 millisecond(s)
}`,
  "advanced-motion": `// C++ code
//
int pohyb = 0;

void setup()
{
  pinMode(2, INPUT);
  pinMode(8, OUTPUT);
  Serial.begin(9600);
}

void loop()
{
  pohyb = digitalRead(2);
  if (pohyb == 1) {
    digitalWrite(8, HIGH);
    Serial.println("Pohyb detekovan");
  } else {
    digitalWrite(8, LOW);
  }
  delay(100); // Wait for 100 millisecond(s)
}`,
  "advanced-temperature-alarm": `// C++ code
//
int teplota = 0;

void setup()
{
  pinMode(A1, INPUT);
  pinMode(10, OUTPUT);
  pinMode(9, OUTPUT);
  pinMode(8, OUTPUT);
}

void loop()
{
  teplota = analogRead(A1);
  if (teplota < 250) {
    digitalWrite(10, HIGH);
    digitalWrite(9, LOW);
    digitalWrite(8, LOW);
  } else if (teplota < 450) {
    digitalWrite(10, LOW);
    digitalWrite(9, HIGH);
    digitalWrite(8, LOW);
  } else {
    digitalWrite(10, LOW);
    digitalWrite(9, LOW);
    digitalWrite(8, HIGH);
    tone(7, 660, 150);
  }
  delay(200); // Wait for 200 millisecond(s)
}`,
  "advanced-counter": `// C++ code
//
int hodnota = 0;

void setup()
{
  pinMode(6, INPUT);
  pinMode(7, INPUT);
  Serial.begin(9600);
}

void loop()
{
  if (digitalRead(6) == 1) {
    hodnota++;
    Serial.println(hodnota);
    delay(250); // Wait for 250 millisecond(s)
  }
  if (digitalRead(7) == 1) {
    hodnota--;
    Serial.println(hodnota);
    delay(250); // Wait for 250 millisecond(s)
  }
}`,
  "expert-servo": `// C++ code
//
#include <Servo.h>

int X = 0;
int Y = 0;
Servo servo_3;

void setup()
{
  pinMode(A5, INPUT);
  Serial.begin(9600);
  servo_3.attach(3, 500, 2500);
}

void loop()
{
  Y = analogRead(A5);
  X = map(Y, 0, 1023, 0, 180);
  Serial.println(X);
  servo_3.write(X);
  delay(10); // Delay a little bit to improve simulation performance
}`,
  "expert-servo-loop": `// C++ code
//
#include <Servo.h>

int x = 0;
Servo servo_3;

void setup()
{
  servo_3.attach(3, 500, 2500);
}

void loop()
{
  x = 0;
  while (x < 180) {
    x = (x + 1);
    servo_3.write(x);
    delay(20); // Wait for 20 millisecond(s)
  }
  while (x > 1) {
    x = (x - 1);
    servo_3.write(x);
    delay(20); // Wait for 20 millisecond(s)
  }
}`,
  "expert-rgb-loop": `// C++ code
//
int x = 0;
int y = 0;
int z = 0;

void setup()
{
  pinMode(A0, INPUT);
  pinMode(A1, INPUT);
  pinMode(A2, INPUT);
  pinMode(3, OUTPUT);
  pinMode(5, OUTPUT);
  pinMode(6, OUTPUT);
}

void loop()
{
  x = analogRead(A0);
  y = analogRead(A1);
  z = analogRead(A2);
  analogWrite(3, x / 4);
  analogWrite(5, y / 4);
  analogWrite(6, z / 4);
  delay(10); // Delay a little bit to improve simulation performance
}`,
  "expert-reaction-game": `// C++ code
//
void setup()
{
  pinMode(2, INPUT);
  pinMode(8, OUTPUT);
  Serial.begin(9600);
  randomSeed(analogRead(A0));
}

void loop()
{
  if (digitalRead(2) == 1) {
    Serial.println("Nedrz tlacitko predem");
    delay(1000);
    return;
  }

  delay(random(2000, 5000));
  digitalWrite(8, HIGH);

  while (digitalRead(2) == 0) {
  }

  Serial.println("Stisknuto");
  digitalWrite(8, LOW);
  delay(1000);
}`,
  "expert-led-roulette": `// C++ code
//
int leds[] = {3, 4, 5, 6};
int index = 0;
int cil = 0;

void setup()
{
  pinMode(2, INPUT);
  pinMode(3, OUTPUT);
  pinMode(4, OUTPUT);
  pinMode(5, OUTPUT);
  pinMode(6, OUTPUT);
  randomSeed(analogRead(A0));
}

void loop()
{
  if (digitalRead(2) == 1) {
    cil = random(12, 24);
    for (int krok = 0; krok < cil; krok++) {
      digitalWrite(leds[index], LOW);
      index = (index + 1) % 4;
      digitalWrite(leds[index], HIGH);
      delay(60 + krok * 20);
    }
  }
}`,
  "expert-arduino-piano": `// C++ code
//
void setup()
{
  pinMode(2, INPUT);
  pinMode(3, INPUT);
  pinMode(4, INPUT);
}

void loop()
{
  if (digitalRead(2) == 1) {
    tone(8, 262, 120);
  } else if (digitalRead(3) == 1) {
    tone(8, 330, 120);
  } else if (digitalRead(4) == 1) {
    tone(8, 392, 120);
  } else {
    noTone(8);
  }
  delay(20); // Wait for 20 millisecond(s)
}`,
  "expert-smart-barrier": `// C++ code
//
#include <Servo.h>

int vzdalenost = 0;

long readUltrasonicDistance(int triggerPin, int echoPin)
{
  pinMode(triggerPin, OUTPUT);
  digitalWrite(triggerPin, LOW);
  delayMicroseconds(2);
  digitalWrite(triggerPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(triggerPin, LOW);
  pinMode(echoPin, INPUT);
  return pulseIn(echoPin, HIGH);
}

Servo servo_5;

void setup()
{
  servo_5.attach(5, 500, 2500);
  Serial.begin(9600);
}

void loop()
{
  vzdalenost = 0.01723 * readUltrasonicDistance(7, 7);
  Serial.println(vzdalenost);
  if (vzdalenost < 15) {
    servo_5.write(90);
  } else {
    servo_5.write(0);
  }
  delay(100); // Wait for 100 millisecond(s)
}`,
};

const TASK_IMAGE_CONFIG = {
  "beginner-led": {
    src: "./assets/led.png",
    alt: "LED - prezentacni screenshot zapojeni a bloku",
  },
  "beginner-potentiometer": {
    src: "./assets/potenciometr.png",
    alt: "Potenciometr - prezentacni screenshot zapojeni a bloku",
  },
  "beginner-and-or": {
    src: "./assets/and-or.png",
    alt: "AND - OR - prezentacni screenshot zapojeni a bloku",
  },
  "beginner-traffic-light": {
    src: "./assets/semafor.png",
    alt: "Semafor - prezentacni screenshot zapojeni a bloku",
  },
  "advanced-parking": {
    src: "./assets/parkovaci-system.png",
    alt: "Parkovaci system - prezentacni screenshot zapojeni a bloku",
  },
  "advanced-motion": {
    src: "./assets/detekce-pohybu.png",
    alt: "Detekce pohybu - prezentacni screenshot zapojeni",
  },
  "expert-servo": {
    src: "./assets/servo-motor.png",
    alt: "Servo motor - prezentacni screenshot zapojeni a bloku",
  },
  "expert-servo-loop": {
    src: "./assets/loop-servo.png",
    alt: "Loop servo - prezentacni screenshot zapojeni a bloku",
  },
  "expert-rgb-loop": {
    src: "./assets/loop-rgb.png",
    alt: "Loop RGB - prezentacni screenshot zapojeni a bloku",
  },
};

const legacySections = [
  {
    id: "beginner",
    title: "Zacatecnik",
    subtitle: "Zaklady sveta IoT",
    icon: "&#128273;",
    accent: "green",
    tasks: [
      {
        id: "b1",
        title: "Blikani LED",
        description: "Demo karta pro preview vzhledu. Pozdeji ji nahradime tvym skutecnym ukolem.",
        hint: "Napoveda pro ukol bude doplnena pozdeji.",
        points: 5,
      },
      {
        id: "b2",
        title: "Cteni vstupu",
        description: "Demo karta pro preview vzhledu. Pozdeji ji nahradime tvym skutecnym ukolem.",
        hint: "Napoveda pro ukol bude doplnena pozdeji.",
        points: 5,
      },
      {
        id: "b3",
        title: "Seriova komunikace",
        description: "Demo karta pro preview vzhledu. Pozdeji ji nahradime tvym skutecnym ukolem.",
        hint: "Napoveda pro ukol bude doplnena pozdeji.",
        points: 5,
      },
    ],
  },
  {
    id: "advanced",
    title: "Pokrocily",
    subtitle: "Propojovani systemu",
    icon: "&#9881;",
    accent: "amber",
    tasks: [
      {
        id: "a1",
        title: "MQTT Broker",
        description: "Demo karta pro preview vzhledu. Pozdeji ji nahradime tvym skutecnym ukolem.",
        hint: "Napoveda pro ukol bude doplnena pozdeji.",
        points: 5,
      },
      {
        id: "a2",
        title: "ESP32 Server",
        description: "Demo karta pro preview vzhledu. Pozdeji ji nahradime tvym skutecnym ukolem.",
        hint: "Napoveda pro ukol bude doplnena pozdeji.",
        points: 5,
      },
      {
        id: "a3",
        title: "OLED displej",
        description: "Demo karta pro preview vzhledu. Pozdeji ji nahradime tvym skutecnym ukolem.",
        hint: "Napoveda pro ukol bude doplnena pozdeji.",
        points: 5,
      },
    ],
  },
  {
    id: "expert",
    title: "Expert",
    subtitle: "Profesionalni hardware",
    icon: "&#128640;",
    accent: "purple",
    tasks: [
      {
        id: "e1",
        title: "Vlastni PCB",
        description: "Demo karta pro preview vzhledu. Pozdeji ji nahradime tvym skutecnym ukolem.",
        hint: "Napoveda pro ukol bude doplnena pozdeji.",
        points: 5,
      },
      {
        id: "e2",
        title: "AI Edge",
        description: "Demo karta pro preview vzhledu. Pozdeji ji nahradime tvym skutecnym ukolem.",
        hint: "Napoveda pro ukol bude doplnena pozdeji.",
        points: 5,
      },
      {
        id: "e3",
        title: "LoRa Mesh",
        description: "Demo karta pro preview vzhledu. Pozdeji ji nahradime tvym skutecnym ukolem.",
        hint: "Napoveda pro ukol bude doplnena pozdeji.",
        points: 5,
      },
    ],
  },
];

const sections = [
  {
    id: "beginner",
    title: "Zacatecnik",
    subtitle: "Zaklady Arduino a prvni logika",
    icon: "&#128273;",
    accent: "green",
    tasks: [
      {
        id: "beginner-led",
        title: "LED",
        description: "Ovladej prvni LED tlacitkem bez programu a druhou LED pomoci programu v Arduinu.",
        points: 5,
        imageLabel: "Arduino UNO + tlacitko + 2 LED diody",
        goals: [
          "Ovladej LED1 tlacitkem bez programovani.",
          "Ovladej LED2 tlacitkem pres Arduino program.",
        ],
        wiringHelp: [
          "Priprav jednu LED ovladanou primo tlacitkem a druhou LED zapojenou na digitalni vystup Arduina.",
          "Tlacitko pripoj jako vstup a druhou LED nech ridit pres vystupni pin.",
          "Obe LED zapoj pres rezistory a spoj GND breadboardu s GND na Arduinu.",
        ],
        codeHelp: [
          "V setup nastav pin tlacitka jako INPUT a pin druhe LED jako OUTPUT.",
          "V loop precti stav tlacitka pomoci digitalRead().",
          "Kdyz je tlacitko stisknute, nastav LED na HIGH, jinak LOW.",
        ],
      },
      {
        id: "beginner-potentiometer",
        title: "Potenciometr",
        description: "Nacti hodnotu z potenciometru a vypisuj ji do serioveho monitoru.",
        points: 5,
        imageLabel: "Potenciometr + LED + seriovy monitor",
        goals: [
          "Pripoj potenciometr mezi 5V a GND.",
          "Stredni vyvod prived na analogovy vstup Arduina.",
          "Hodnotu vypisuj do serioveho monitoru.",
        ],
        wiringHelp: [
          "Krajni vyvody potenciometru ved na 5V a GND.",
          "Stredni vyvod zapoj na analogovy pin, podle referencniho ukolu treba A3.",
          "LED muze slouzit jako jednoducha indikace na vystupu pres rezistor.",
        ],
        codeHelp: [
          "Spust Serial.begin() v setup().",
          "V loop cti analogRead() z vybraneho analogoveho pinu.",
          "Hodnotu vypis pres Serial.println() a pridej kratke delay().",
        ],
      },
      {
        id: "beginner-and-or",
        title: "AND - OR",
        description: "Postav logickou ulohu se dvema vstupy a LED vystupy pro operace AND a OR.",
        points: 5,
        imageLabel: "2 tlacitka + 2 LED diody + breadboard",
        goals: [
          "Pouzij dve tlacitka jako vstupy A a B.",
          "Jedna LED se ma chovat jako AND a druha jako OR.",
          "Vyzkousej vsechny kombinace stisku obou tlacitek.",
        ],
        wiringHelp: [
          "Priprav dve tlacitka jako dva samostatne vstupy a dve LED jako dva vystupy.",
          "Kazdou LED pripoj pres vlastni rezistor a davej pozor na spravnou orientaci diod.",
          "Tlacitka museji mit definovany klidovy stav.",
        ],
        codeHelp: [
          "Nacti dva vstupy pomoci digitalRead().",
          "Pro OR rozsvit LED, kdyz je aktivni alespon jeden vstup.",
          "Pro AND rozsvit LED jen tehdy, kdyz jsou aktivni oba vstupy najednou.",
        ],
      },
      {
        id: "beginner-traffic-light",
        title: "Semafor",
        description: "Rozblikej semafor se tremi LED v klasickem cyklu cervena - oranzova - zelena.",
        points: 5,
        imageLabel: "3 LED diody jako semafor",
        goals: [
          "Pouzij cervenou, oranzovou a zelenou LED.",
          "Vytvor opakovany semaforovy cyklus v programu.",
          "Dodrz poradi svetel podle zadani.",
        ],
        wiringHelp: [
          "Kazdou LED dej na vlastni digitalni vystup pres rezistor.",
          "Spoj vsechny zaporne vetve s GND.",
          "Barvy LED si oznac tak, aby bylo jasne, ktera je cervena, oranzova a zelena.",
        ],
        codeHelp: [
          "V setup nastav tri vystupni piny jako OUTPUT.",
          "V loop postupne prepinaj LED pomoci digitalWrite().",
          "Mezi jednotlivymi stavy pouzij delay() podle pozadovane delky svetel.",
        ],
      },
      {
        id: "beginner-buzzer-button",
        title: "Tlacitko + buzzer",
        description: "Po stisku tlacitka spust zvuk na buzzeru, po pusteni se ma zvuk zastavit.",
        points: 5,
        imageLabel: "Tlacitko + piezo buzzer + Arduino UNO",
        goals: [
          "Zapoj jedno tlacitko jako vstup.",
          "Po stisku tlacitka aktivuj buzzer.",
          "Po pusteni tlacitka se ma zvuk vypnout.",
        ],
        wiringHelp: [
          "Tlacitko zapoj na samostatny digitalni vstup s definovanym klidovym stavem.",
          "Piezo buzzer pripoj na vystupni pin a GND.",
          "Dohlidni na spolecnou zem a prehledne vedeni vodicu na breadboardu.",
        ],
        codeHelp: [
          "V setup nastav tlacitko jako INPUT a buzzer jako OUTPUT.",
          "V loop cti stav tlacitka pres digitalRead().",
          "Pri stisku pouzij tone() nebo digitalWrite() pro aktivaci buzzeru, jinak noTone() nebo LOW.",
        ],
      },
      {
        id: "beginner-light-sensor",
        title: "Nocni svetlo",
        description: "Pomoci fotorezistoru rozsvit LED jen tehdy, kdyz je kolem tma.",
        points: 5,
        imageLabel: "Fotorezistor + LED + rezistor",
        goals: [
          "Zapoj fotorezistor na analogovy vstup.",
          "Prubezne mer uroven svetla v okoli.",
          "Pri nizke hodnote rozsvit LED a pri dostatku svetla ji zhasni.",
        ],
        wiringHelp: [
          "Fotorezistor zapoj jako delic napeti s rezistorem a vystup ved na analogovy pin.",
          "LED pripoj na digitalni nebo PWM vystup pres rezistor.",
          "Napajeci vetve 5V a GND rozved prehledne po breadboardu.",
        ],
        codeHelp: [
          "V loop cti hodnotu senzoru pomoci analogRead().",
          "Stanov si hranici, pod kterou budes brat prostredi jako tmu.",
          "Pomoci if podminky prepinej LED na HIGH a LOW podle zmerene hodnoty.",
        ],
      },
    ],
  },
  {
    id: "advanced",
    title: "Pokrocily",
    subtitle: "Vetsi logika, senzory a realne scenare",
    icon: "&#9881;",
    accent: "amber",
    tasks: [
      {
        id: "advanced-stair-light",
        title: "Schodistove svetlo",
        description: "Pridaj druhe tlacitko a naprogramuj svetlo tak, aby po poslednim stisku zhaslo az po 3 sekundach.",
        points: 5,
        imageLabel: "2 tlacitka + LED s casovanim",
        goals: [
          "Pridaj do obvodu druhe tlacitko.",
          "LED se ma rozsvitit po stisku libovolneho z obou tlacitek.",
          "Zhasnout ma az 3 sekundy po poslednim stisku.",
        ],
        wiringHelp: [
          "Vychazej ze zapojeni se svetlem a dopln druhe tlacitko jako dalsi vstup.",
          "Obe tlacitka ved do samostatnych vstupnich pinu.",
          "LED nech na vystupnim pinu pres rezistor.",
        ],
        codeHelp: [
          "Uloz si cas posledniho stisku do promenne pomoci millis().",
          "Kdyz je stisknute kterekoli tlacitko, LED rozsvit a aktualizuj cas posledni aktivity.",
          "LED zhasni az ve chvili, kdy od posledni aktivity ubehly vice nez 3 sekundy.",
        ],
      },
      {
        id: "advanced-crosswalk",
        title: "Semafor + prechod",
        description: "Rozsir semafor o tlacitko pro chodce. Po stisku probehne bezpecny cyklus a pak se vrati zelena pro auta.",
        points: 5,
        imageLabel: "Semafor s tlacitkem pro chodce",
        goals: [
          "Semafor ma mit trvale zelenou pro auta.",
          "Po stisku tlacitka spust cyklus oranzova -> cervena -> oranzova -> zelena.",
          "Po dokonceni se vrat do vychoziho stavu.",
        ],
        wiringHelp: [
          "Pouzij stejne tri LED jako u semaforu a pridej jedno tlacitko pro chodce.",
          "Tlacitko zapoj jako samostatny vstup.",
          "LED nech rozdelene na tri samostatne vystupy.",
        ],
        codeHelp: [
          "Ve vychozim stavu nech svitit zelenou.",
          "Pri stisku tlacitka nespoustej cyklus znovu opakovane, ale jednorazove.",
          "Cyklus sloz ze sekvence digitalWrite() a delay(), pripadne z jednoducheho stavoveho automatu.",
        ],
      },
      {
        id: "advanced-parking",
        title: "Parkovaci system",
        description: "Pouzij ultrazvukovy snimac, tri LED a pripadne buzzer pro signalizaci vzdalenosti prekazky.",
        points: 5,
        imageLabel: "Ultrazvukovy snimac + 3 LED + buzzer",
        goals: [
          "Kdyz je objekt daleko, sviti zelena.",
          "Kdyz je bliz, sviti zluta.",
          "Kdyz je kriticky blizko, sviti cervena a muze piskat buzzer.",
        ],
        wiringHelp: [
          "Pripoj ultrazvukovy snimac na napajeni a signalni piny podle typu modulu.",
          "Tri LED dej na tri vystupni piny, kazdou pres rezistor.",
          "Buzzer zapoj jako dalsi vystup, pokud ho chces pouzit.",
        ],
        codeHelp: [
          "Nejdriv zmer vzdalenost senzorem a uloz ji do promenne.",
          "Podle hranic, napr. 20 cm a 5 cm, prepinej jednotlive LED.",
          "Pro kritickou vzdalenost pridej digitalWrite() nebo tone() pro buzzer.",
        ],
      },
      {
        id: "advanced-motion",
        title: "Detekce pohybu",
        description: "Zapoj PIR senzor a vytvor reakci na zaznamenany pohyb.",
        points: 5,
        imageLabel: "PIR senzor + Arduino",
        goals: [
          "Zapoj PIR senzor jako vstup.",
          "Pri zaznamenanem pohybu reaguj v programu, treba LED nebo vypisem.",
          "Over, ze obvod vraci stabilni stav i bez pohybu.",
        ],
        wiringHelp: [
          "PIR senzor pripoj na 5V, GND a vystupni signalni pin.",
          "Signal senzoru ved na digitalni vstup Arduina.",
          "Pro test muzes pridat LED na vystupni pin.",
        ],
        codeHelp: [
          "Nastav signalni pin PIR jako INPUT.",
          "V loop cti stav senzoru pres digitalRead().",
          "Pri aktivaci proved akci, napr. rozsvit LED nebo vypis zpravu do serioveho monitoru.",
        ],
      },
      {
        id: "advanced-temperature-alarm",
        title: "Teplotni alarm",
        description: "Mer teplotu senzorem a podle hodnoty prepinej LED nebo spust varovani.",
        points: 5,
        imageLabel: "Teplotni senzor + 3 LED + buzzer",
        goals: [
          "Zapoj teplotni senzor na analogovy vstup.",
          "Rozdel teploty aspon do tri pasem, napr. nizka, normalni a vysoka.",
          "Pri vysoke teplote rozsvit cervenou LED nebo spust buzzer.",
        ],
        wiringHelp: [
          "Teplotni senzor pripoj na 5V, GND a analogovy vystup.",
          "Tri LED dej na samostatne vystupy pres rezistory.",
          "Buzzer muzes pridat jako doplnek pro kritickou teplotu.",
        ],
        codeHelp: [
          "Nejdriv cti analogovou hodnotu senzoru pomoci analogRead().",
          "Podle typu senzoru preved hodnotu na orientacni teplotu nebo nastav hranice primo nad analogovymi hodnotami.",
          "Pomoci if / else prepinej LED a pripadne aktivuj tone() pro alarm.",
        ],
      },
      {
        id: "advanced-counter",
        title: "Pocitadlo + a -",
        description: "Dve tlacitka maji zvetsovat a zmensovat pocitadlo, jehoz hodnotu vypisujes do serioveho monitoru.",
        points: 5,
        imageLabel: "2 tlacitka + seriovy monitor",
        goals: [
          "Jedno tlacitko zvysi hodnotu o 1.",
          "Druhe tlacitko ji snizi o 1.",
          "Po kazde zmene vypis aktualni stav do serioveho monitoru.",
        ],
        wiringHelp: [
          "Priprav dve tlacitka jako dva samostatne vstupy s jasne definovanym klidovym stavem.",
          "Neni potreba zadny vystupni prvek, pokud budes vysledek sledovat jen v seriovem monitoru.",
          "Pokud chces, muzes pridat LED jako indikaci zmeny hodnoty.",
        ],
        codeHelp: [
          "Vytvor promennou pro ulozeni aktualni hodnoty pocitadla.",
          "Pri stisku prvniho tlacitka hodnotu zvetsuj, pri druhem zmensuj.",
          "Kazdou zmenu vypis pres Serial.println() a osetri kratke zpozdeni proti vice stiskum.",
        ],
      },
    ],
  },
  {
    id: "expert",
    title: "Expert",
    subtitle: "Plynuly pohyb, mapovani a herni logika",
    icon: "&#128640;",
    accent: "purple",
    tasks: [
      {
        id: "expert-servo",
        title: "Servo motor",
        description: "Ovladej servo pomoci potenciometru a mapuj analogovou hodnotu na rozsah uhlu serva.",
        points: 5,
        imageLabel: "Servo + potenciometr + seriovy monitor",
        goals: [
          "Nacti hodnotu z potenciometru.",
          "Preved ji na uhel serva v rozsahu 0 az 180.",
          "Otacej servem podle aktualni hodnoty.",
        ],
        wiringHelp: [
          "Potenciometr zapoj mezi 5V a GND, stredni vyvod dej na analogovy vstup.",
          "Servo pripoj na napajeni, zem a signalni pin.",
          "Signal serva ved na vhodny ridici pin a spoj vsechny zeme dohromady.",
        ],
        codeHelp: [
          "Pouzij knihovnu Servo a vytvor objekt serva.",
          "Nacti analogRead() z potenciometru a preved hodnotu pomoci map().",
          "Odesli vysledek do serva pomoci write().",
        ],
      },
      {
        id: "expert-servo-loop",
        title: "Loop servo",
        description: "Rozhybej servo sem a tam v plynule smycce a rid jeho pohyb v obou smerech.",
        points: 5,
        imageLabel: "Servo v plynulem loopu",
        goals: [
          "Vytvor plynuly pohyb serva od minima do maxima.",
          "Po dosazeni kraje obrat smer.",
          "Pohyb opakuj donekonecna.",
        ],
        wiringHelp: [
          "Pouzij jednoduche zapojeni serva s napajenim a signalnim pinem.",
          "Napajeni serva nech stabilni a spolecnou zem spoj s Arduinem.",
          "Neni potreba dalsi vstup, pokud servo neni rizene potenciometrem.",
        ],
        codeHelp: [
          "Udrzuj aktualni uhel v promenne a v kazdem kroku jej zvetsuj nebo zmensuj.",
          "Pri dosazeni hranic 0 a 180 obrat smer pohybu.",
          "Mezi kroky nech male delay() pro plynuly efekt.",
        ],
      },
      {
        id: "expert-rgb-loop",
        title: "Loop RGB",
        description: "Namixuj barvu RGB LED pomoci tri potenciometru a tri analogovych vstupu.",
        points: 5,
        imageLabel: "RGB LED + 3 potenciometry",
        goals: [
          "Pouzij tri potenciometry pro tri barevne kanaly.",
          "Cti tri analogove vstupy.",
          "Nastav intenzitu cervene, zelene a modre slozky LED.",
        ],
        wiringHelp: [
          "RGB LED pripoj na tri vystupni piny pres rezistory.",
          "Kazdy potenciometr zapoj mezi 5V a GND, stredni vyvod vede na vlastni analogovy vstup.",
          "Dohlidni na spravnou orientaci RGB LED a spolecnou zem.",
        ],
        codeHelp: [
          "Cti hodnoty z tri analogovych vstupu, napr. A0, A1 a A2.",
          "Podle hodnot nastav vystupy pomoci analogWrite().",
          "Pokud je treba, hodnoty zmapuj na rozsah 0 az 255.",
        ],
      },
      {
        id: "expert-reaction-game",
        title: "Reakcni hra",
        description: "Po nahodne dobe se rozsviti LED. Hrac musi co nejrychleji zmacknout tlacitko, jinak prohraje nebo podvadi.",
        points: 5,
        imageLabel: "LED + tlacitko + nahodne zpozdeni",
        goals: [
          "LED se ma rozsvitit po nahodne dobe, treba 2 az 5 sekund.",
          "Po rozsviceni ma hrac stisknout tlacitko co nejrychleji.",
          "Kdyz drzi tlacitko predem, ukol se nema povest.",
        ],
        wiringHelp: [
          "Pouzij jednu LED na vystupu a jedno tlacitko na vstupu.",
          "Tlacitko musi mit jasne definovany klidovy stav.",
          "LED pripoj pres rezistor a mysli na spolecnou zem.",
        ],
        codeHelp: [
          "Vygeneruj nahodne cekani pomoci random() a vyckej na rozsviceni LED.",
          "Pred startem kontroluj, jestli hrac nedrzi tlacitko.",
          "Po rozsviceni LED mer dobu do stisku a podle vysledku oznam uspech nebo podvadeni.",
        ],
      },
      {
        id: "expert-led-roulette",
        title: "LED ruleta",
        description: "Vytvor radu LED, ktera se po stisku tlacitka nejdriv rozjede, pak zpomali a zastavi na nahodne diode.",
        points: 5,
        imageLabel: "Bezici rada LED + tlacitko",
        goals: [
          "Vytvor efekt beziciho svetla pres vice LED diod.",
          "Po stisku tlacitka se rozjezd zrychli a pak zacne zpomalovat.",
          "Na konci se zastav na nahodne vybrane LED.",
        ],
        wiringHelp: [
          "Priprav radu vice LED na samostatnych vystupnich pinech.",
          "Tlacitko pridej jako spoustec sekvence.",
          "Kazdou LED pripoj pres vlastni rezistor.",
        ],
        codeHelp: [
          "Ukladej si seznam vystupnich pinu LED do pole.",
          "Postupne rozsvecuj jednotlive LED s menicim se zpozdenim mezi kroky.",
          "Pred koncem zpomaluj a ukonci animaci na nahodne zvolenem indexu.",
        ],
      },
      {
        id: "expert-arduino-piano",
        title: "Arduino piano",
        description: "Pomoci vice tlacitek zahraj na buzzer ruzne tony jako jednoduche mini piano.",
        points: 5,
        imageLabel: "3 tlacitka + piezo buzzer",
        goals: [
          "Kazde tlacitko ma spustit jiny ton.",
          "Kdyz neni stisknute zadne tlacitko, buzzer nehraje.",
          "Otestuj, ze lze zahrat vice ruznych tonu podle vstupu.",
        ],
        wiringHelp: [
          "Zapoj vice tlacitek na samostatne vstupni piny.",
          "Piezo buzzer pripoj na vystupni pin a GND.",
          "Tlacitka zapoj tak, aby mela stabilni klidovy stav a vzajemne se nerusila.",
        ],
        codeHelp: [
          "V loop postupne kontroluj jednotliva tlacitka pres digitalRead().",
          "Kazdemu tlacitku prirad jinou frekvenci v tone().",
          "Pokud neni aktivni zadne tlacitko, vypni zvuk pomoci noTone().",
        ],
      },
      {
        id: "expert-smart-barrier",
        title: "Automaticka zavora",
        description: "Spoj ultrazvukovy senzor a servo tak, aby se zavora otevrela pri prijezdu auta a po chvili zase zavrela.",
        points: 5,
        imageLabel: "Ultrazvukovy senzor + servo + LED signalizace",
        goals: [
          "Zmer vzdalenost prijizdejiciho objektu.",
          "Kdyz je objekt dost blizko, otevri servo zavoru.",
          "Po odjezdu nebo po kratkem case vrat servo do zavrene polohy.",
        ],
        wiringHelp: [
          "Pripoj ultrazvukovy senzor na napajeni a signalni piny.",
          "Servo zapoj na napajeni, GND a signalni vystup.",
          "Pro lepsi orientaci muzes pridat LED, ktera ukaze stav otevreno nebo zavreno.",
        ],
        codeHelp: [
          "Pouzij funkci pro mereni vzdalenosti podobne jako u parkovaciho systemu.",
          "Podle zmerene hodnoty nastav servo do otevrene nebo zavrene polohy.",
          "Pro stabilnejsi chovani dopln podminku s millis() nebo kratkym delay() mezi zmenami stavu.",
        ],
      },
    ],
  },
];

function getTodayKey() {
  return new Date().toISOString().slice(0, 10);
}

function buildDailyPin() {
  if (PREVIEW_ALLOW_ANY_PIN) {
    return "";
  }

  if (DAILY_ACCESS_MODE === "date-based") {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0");
    return `${day}${month}`;
  }

  return DEFAULT_CONFIG.dailyPin;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function normalizeEmail(email) {
  return String(email ?? "").trim().toLowerCase();
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizeEmail(email));
}

function buildNicknameFromEmail(email) {
  const localPart = normalizeEmail(email).split("@")[0] ?? "";
  return (localPart || "student").slice(0, 20);
}

function hasAll(text, patterns) {
  return patterns.every((pattern) => text.includes(pattern));
}

function hasAny(text, patterns) {
  return patterns.some((pattern) => text.includes(pattern));
}

function countMatches(text, pattern) {
  return (text.match(pattern) ?? []).length;
}

function normalizeCodeForValidation(code) {
  return code
    .replace(/\/\*[\s\S]*?\*\//g, " ")
    .replace(/\/\/.*$/gm, " ")
    .replace(/"(?:\\.|[^"\\])*"/g, "\"\"")
    .replace(/'(?:\\.|[^'\\])*'/g, "''")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

function getAllTasks() {
  return sections.flatMap((section) => section.tasks);
}

function findTask(taskId) {
  return getAllTasks().find((task) => task.id === taskId) ?? null;
}

function findSectionIndexByTaskId(taskId) {
  return sections.findIndex((section) => section.tasks.some((task) => task.id === taskId));
}

function createDefaultTaskState() {
  const taskState = {};

  getAllTasks().forEach((task) => {
    taskState[task.id] = {
      completed: false,
      completionType: null,
      openedHelp: [],
    };
  });

  return taskState;
}

function createDefaultScreenState() {
  return {
    currentView: "overview",
    activeSectionId: sections[0]?.id ?? null,
    activeTaskId: null,
    activeHelpType: null,
    codeDrafts: {},
    overviewTab: "styles",
    styleShopOpen: false,
    profileMenuOpen: false,
  };
}

function createDefaultAccountState() {
  return {
    stars: 20,
    styleTokens: 0,
    selectedStyleId: "classic",
    unlockedStyleIds: ["classic"],
    nickname: null,
    selectedAvatarId: DEFAULT_AVATAR_ID,
    unlockedAvatarIds: [DEFAULT_AVATAR_ID],
    linkedEmail: null,
    taskState: createDefaultTaskState(),
    screenState: createDefaultScreenState(),
  };
}

function createIotCampScreen(container, options = {}) {
  const storageKey = options.storageKey ?? IOT_CAMP_STORAGE_KEY;

  function loadState() {
    const raw = localStorage.getItem(storageKey);

    if (!raw) {
      return {
        configVersion: CONFIG_VERSION,
        config: { ...DEFAULT_CONFIG },
        accounts: {},
        emailAccounts: {},
        authenticatedForDay: null,
        currentStudentNumber: null,
        currentEmail: null,
        adminPanelOpen: false,
        adminAuthenticated: false,
        adminPreviewActive: false,
        stars: 20,
        styleTokens: 0,
        selectedStyleId: "classic",
        unlockedStyleIds: ["classic"],
        nickname: null,
        selectedAvatarId: DEFAULT_AVATAR_ID,
        unlockedAvatarIds: [DEFAULT_AVATAR_ID],
        linkedEmail: null,
        taskState: createDefaultTaskState(),
        screenState: createDefaultScreenState(),
      };
    }

    try {
      const parsed = JSON.parse(raw);
      const shouldResetConfig = parsed.configVersion !== CONFIG_VERSION;
      const config = {
        ...DEFAULT_CONFIG,
        ...(shouldResetConfig ? {} : (parsed.config ?? {})),
      };
      const accounts = shouldResetConfig ? {} : (parsed.accounts ?? {});
      const emailAccounts = shouldResetConfig ? {} : (parsed.emailAccounts ?? {});
      const currentStudentNumber = shouldResetConfig ? null : (parsed.currentStudentNumber ?? null);
      const currentEmail = shouldResetConfig ? null : normalizeEmail(parsed.currentEmail ?? "");
      const currentAccount = currentEmail && emailAccounts[currentEmail]
        ? emailAccounts[currentEmail]
        : currentStudentNumber && accounts[currentStudentNumber]
          ? accounts[currentStudentNumber]
          : createDefaultAccountState();

      return {
        authenticatedForDay: shouldResetConfig ? null : (parsed.authenticatedForDay ?? null),
        currentStudentNumber,
        currentEmail,
        adminPanelOpen: false,
        adminAuthenticated: false,
        adminPreviewActive: false,
        configVersion: CONFIG_VERSION,
        config,
        accounts,
        emailAccounts,
        stars: Number.isFinite(currentAccount.stars)
          ? currentAccount.stars
          : Number.isFinite(parsed.stars)
            ? parsed.stars
            : Number.isFinite(parsed.points)
              ? parsed.points
              : 20,
        styleTokens: Number.isFinite(currentAccount.styleTokens)
          ? currentAccount.styleTokens
          : 0,
        selectedStyleId: typeof currentAccount.selectedStyleId === "string"
          ? currentAccount.selectedStyleId
          : "classic",
        unlockedStyleIds: Array.isArray(currentAccount.unlockedStyleIds) && currentAccount.unlockedStyleIds.length
          ? currentAccount.unlockedStyleIds
          : ["classic"],
        nickname: typeof currentAccount.nickname === "string" ? currentAccount.nickname : null,
        selectedAvatarId: typeof currentAccount.selectedAvatarId === "string"
          ? currentAccount.selectedAvatarId
          : DEFAULT_AVATAR_ID,
        unlockedAvatarIds: Array.isArray(currentAccount.unlockedAvatarIds) && currentAccount.unlockedAvatarIds.length
          ? currentAccount.unlockedAvatarIds
          : [DEFAULT_AVATAR_ID],
        linkedEmail: typeof currentAccount.linkedEmail === "string" ? normalizeEmail(currentAccount.linkedEmail) : null,
        taskState: {
          ...createDefaultTaskState(),
          ...(currentAccount.taskState ?? parsed.taskState ?? {}),
        },
        screenState: {
          ...createDefaultScreenState(),
          ...(currentAccount.screenState ?? parsed.screenState ?? {}),
        },
      };
    } catch (error) {
      return {
        configVersion: CONFIG_VERSION,
        config: { ...DEFAULT_CONFIG },
        accounts: {},
        emailAccounts: {},
        authenticatedForDay: null,
        currentStudentNumber: null,
        currentEmail: null,
        adminPanelOpen: false,
        adminAuthenticated: false,
        adminPreviewActive: false,
        stars: 20,
        styleTokens: 0,
        selectedStyleId: "classic",
        unlockedStyleIds: ["classic"],
        nickname: null,
        selectedAvatarId: DEFAULT_AVATAR_ID,
        unlockedAvatarIds: [DEFAULT_AVATAR_ID],
        linkedEmail: null,
        taskState: createDefaultTaskState(),
        screenState: createDefaultScreenState(),
      };
    }
  }

  let state = loadState();

  function sanitizeLockedSectionProgress() {
    sections.forEach((section, sectionIndex) => {
      const sectionUnlocked = sectionIndex === 0 || sections[sectionIndex - 1].tasks.every((task) => {
        const previousTaskState = state.taskState[task.id];
        return previousTaskState?.completed;
      });

      if (sectionUnlocked) {
        return;
      }

      section.tasks.forEach((task) => {
        if (!state.taskState[task.id]) {
          return;
        }

        state.taskState[task.id] = {
          ...state.taskState[task.id],
          completed: false,
          completionType: null,
        };
      });
    });
  }

  function sanitizeScreenState() {
    const validSection = getSectionIndexById(state.screenState.activeSectionId) >= 0;
    if (!validSection) {
      state.screenState.activeSectionId = sections[0]?.id ?? null;
    }

    if (state.screenState.activeTaskId && !findTask(state.screenState.activeTaskId)) {
      state.screenState.activeTaskId = null;
      state.screenState.activeHelpType = null;
      state.screenState.currentView = "overview";
    }

    if (!["code", "wiring", "solution", null].includes(state.screenState.activeHelpType ?? null)) {
      state.screenState.activeHelpType = null;
    }
  }

  sanitizeLockedSectionProgress();
  sanitizeScreenState();
  let toastTimer = null;

  function buildCurrentAccountSnapshot() {
    return {
      stars: state.stars,
      styleTokens: state.styleTokens,
      selectedStyleId: state.selectedStyleId,
      unlockedStyleIds: state.unlockedStyleIds,
      nickname: state.nickname,
      selectedAvatarId: state.selectedAvatarId,
      unlockedAvatarIds: state.unlockedAvatarIds,
      linkedEmail: state.linkedEmail ?? null,
      taskState: state.taskState,
      screenState: state.screenState,
    };
  }

  function applyAccountSnapshot(account) {
    const source = account ?? createDefaultAccountState();
    state.stars = Number.isFinite(source.stars) ? source.stars : 20;
    state.styleTokens = Number.isFinite(source.styleTokens) ? source.styleTokens : 0;
    state.selectedStyleId = typeof source.selectedStyleId === "string" ? source.selectedStyleId : "classic";
    state.unlockedStyleIds = Array.isArray(source.unlockedStyleIds) && source.unlockedStyleIds.length
      ? source.unlockedStyleIds
      : ["classic"];
    state.nickname = typeof source.nickname === "string" ? source.nickname : null;
    state.selectedAvatarId = typeof source.selectedAvatarId === "string" ? source.selectedAvatarId : DEFAULT_AVATAR_ID;
    state.unlockedAvatarIds = Array.isArray(source.unlockedAvatarIds) && source.unlockedAvatarIds.length
      ? source.unlockedAvatarIds
      : [DEFAULT_AVATAR_ID];
    state.linkedEmail = typeof source.linkedEmail === "string" ? normalizeEmail(source.linkedEmail) : null;
    state.taskState = {
      ...createDefaultTaskState(),
      ...(source.taskState ?? {}),
    };
    state.screenState = {
      ...createDefaultScreenState(),
      ...(source.screenState ?? {}),
    };
    sanitizeLockedSectionProgress();
    sanitizeScreenState();
  }

  function commitCurrentAccount() {
    if (!state.currentStudentNumber && !state.currentEmail) {
      return;
    }

    const snapshot = buildCurrentAccountSnapshot();

    if (state.currentStudentNumber) {
      state.accounts[state.currentStudentNumber] = snapshot;
    }

    const emailKey = state.currentEmail || state.linkedEmail;
    if (emailKey && state.emailAccounts[emailKey]) {
      state.emailAccounts[emailKey] = {
        ...snapshot,
        linkedEmail: emailKey,
        password: state.emailAccounts[emailKey].password,
      };
    }
  }

  function saveState() {
    commitCurrentAccount();
    localStorage.setItem(storageKey, JSON.stringify({
      configVersion: CONFIG_VERSION,
      config: state.config,
      accounts: state.accounts,
      emailAccounts: state.emailAccounts,
      authenticatedForDay: state.authenticatedForDay,
      currentStudentNumber: state.currentStudentNumber,
      currentEmail: state.currentEmail,
    }));
  }

  function isAuthenticated() {
    return state.adminPreviewActive
      || Boolean(state.currentEmail)
      || (Boolean(state.currentStudentNumber) && state.authenticatedForDay === getTodayKey());
  }

  function isAdminPreview() {
    return Boolean(state.adminPreviewActive);
  }

  function loadAccount(studentNumber) {
    const storedAccount = state.accounts[studentNumber] ?? createDefaultAccountState();
    state.currentStudentNumber = studentNumber;
    state.currentEmail = null;
    applyAccountSnapshot(storedAccount);
  }

  function loadEmailAccount(email) {
    const normalizedEmail = normalizeEmail(email);
    const storedAccount = state.emailAccounts[normalizedEmail];

    if (!storedAccount) {
      return false;
    }

    state.currentEmail = normalizedEmail;
    state.currentStudentNumber = null;
    state.authenticatedForDay = null;
    applyAccountSnapshot(storedAccount);
    return true;
  }

  function linkAccountToEmail(email, password) {
    const normalizedEmail = normalizeEmail(email);
    const trimmedPassword = String(password ?? "").trim();

    if (!normalizedEmail || !isValidEmail(normalizedEmail)) {
      return { ok: false, message: "Zadej platny e-mail." };
    }

    if (trimmedPassword.length < 4) {
      return { ok: false, message: "Heslo musi mit aspon 4 znaky." };
    }

    if (state.linkedEmail) {
      return { ok: false, message: "Tento ucet uz ma propojeny e-mail a nejde prepsat." };
    }

    if (state.emailAccounts[normalizedEmail]) {
      return { ok: false, message: "Tento e-mail uz je zaregistrovany a nejde pouzit znovu." };
    }

    const snapshot = {
      ...buildCurrentAccountSnapshot(),
      nickname: state.nickname ?? buildNicknameFromEmail(normalizedEmail),
      linkedEmail: normalizedEmail,
      password: trimmedPassword,
    };

    state.linkedEmail = normalizedEmail;
    state.nickname = snapshot.nickname;
    state.emailAccounts[normalizedEmail] = snapshot;
    saveState();
    render();
    return { ok: true, message: "Ucet byl propojen s e-mailem." };
  }

  function loginWithEmail(email, password) {
    const normalizedEmail = normalizeEmail(email);
    const trimmedPassword = String(password ?? "").trim();
    const account = state.emailAccounts[normalizedEmail];

    if (!normalizedEmail || !trimmedPassword) {
      return { ok: false, message: "Zadej e-mail i heslo." };
    }

    if (!account) {
      return { ok: false, message: "Tento e-mail neni zaregistrovany." };
    }

    if (account.password !== trimmedPassword) {
      return { ok: false, message: "Heslo nesouhlasi." };
    }

    loadEmailAccount(normalizedEmail);
    saveState();
    render();
    return { ok: true, message: "Prihlaseni pres e-mail bylo uspesne." };
  }

  function getTaskState(taskId) {
    return state.taskState[taskId];
  }

  function getTaskCounts(sectionIndex) {
    const section = sections[sectionIndex];
    const total = section.tasks.length;
    const completed = section.tasks.filter((task) => getTaskState(task.id)?.completed).length;
    const available = section.tasks.reduce((sum, task) => sum + task.points, 0);
    const earned = section.tasks.reduce((sum, task) => {
      const taskState = getTaskState(task.id);
      return taskState?.completionType === "verified" ? sum + task.points : sum;
    }, 0);

    return { total, completed, available, earned };
  }

  function getTotalCompletedTasks() {
    return sections.reduce((sum, _section, index) => sum + getTaskCounts(index).completed, 0);
  }

  function getTotalTaskCount() {
    return sections.reduce((sum, _section, index) => sum + getTaskCounts(index).total, 0);
  }

  function getTotalScore() {
    return sections.reduce((sum, _section, index) => sum + getTaskCounts(index).earned, 0);
  }

  function getMaxScore() {
    return sections.reduce((sum, _section, index) => sum + getTaskCounts(index).available, 0);
  }

  function getVerifiedTaskCount(taskState = state.taskState) {
    return getAllTasks().filter((task) => taskState?.[task.id]?.completionType === "verified").length;
  }

  function getCompletedCountFromTaskState(taskState) {
    return getAllTasks().filter((task) => taskState?.[task.id]?.completed).length;
  }

  function getStudentStats() {
    const totalTasks = getAllTasks().length;

    return Array.from({ length: state.config.maxStudents }, (_item, index) => {
      const studentNumber = String(index + 1);
      const account = state.accounts[studentNumber] ?? createDefaultAccountState();
      const completed = getCompletedCountFromTaskState(account.taskState);
      const stars = Number.isFinite(account.stars) ? account.stars : 20;
      const styleTokens = Number.isFinite(account.styleTokens) ? account.styleTokens : 0;
      const percent = totalTasks ? Math.round((completed / totalTasks) * 100) : 0;

      return {
        studentNumber,
        completed,
        totalTasks,
        stars,
        styleTokens,
        percent,
      };
    });
  }

  function getSelectedStyle() {
    return STYLE_OPTIONS.find((style) => style.id === state.selectedStyleId) ?? STYLE_OPTIONS[0];
  }

  function getSelectedAvatar() {
    const fallbackAvatar = AVATAR_OPTIONS[0];
    const selectedAvatar = AVATAR_OPTIONS.find((avatar) => avatar.id === state.selectedAvatarId);
    return selectedAvatar ?? fallbackAvatar;
  }

  function getUnlockedStyleIds() {
    const ids = Array.isArray(state.unlockedStyleIds) ? state.unlockedStyleIds : ["classic"];
    return Array.from(new Set(["classic", ...ids]));
  }

  function isStyleUnlocked(styleId) {
    return getUnlockedStyleIds().includes(styleId);
  }

  function unlockStyle(styleId) {
    state.unlockedStyleIds = Array.from(new Set([...getUnlockedStyleIds(), styleId]));
  }

  function getUnlockedAvatarIds() {
    const validIds = new Set(AVATAR_OPTIONS.map((avatar) => avatar.id));
    const ids = Array.isArray(state.unlockedAvatarIds) ? state.unlockedAvatarIds.filter((id) => validIds.has(id)) : [];
    return Array.from(new Set([DEFAULT_AVATAR_ID, ...ids]));
  }

  function isAvatarUnlocked(avatarId) {
    return getUnlockedAvatarIds().includes(avatarId);
  }

  function unlockAvatar(avatarId) {
    state.unlockedAvatarIds = Array.from(new Set([...getUnlockedAvatarIds(), avatarId]));
  }

  function selectStyle(styleId) {
    if (!isStyleUnlocked(styleId)) {
      showMessage("Tento styl jeste nemas odemceny.");
      return;
    }

    state.selectedStyleId = styleId;
    saveState();
    render();
    showMessage("Styl byl aktivovan.", "success");
  }

  function buyStyle(styleId) {
    const style = STYLE_OPTIONS.find((item) => item.id === styleId);

    if (!style || style.unlockType !== "shop") {
      showMessage("Tento styl ted nejde koupit.");
      return;
    }

    if (isStyleUnlocked(styleId)) {
      selectStyle(styleId);
      return;
    }

    if (!hasEnoughStars(STYLE_SHOP_CONFIG.directUnlockCost)) {
      showMessage("Nemas dost hvezdicek na odemceni stylu.");
      return;
    }

    state.stars -= STYLE_SHOP_CONFIG.directUnlockCost;
    unlockStyle(styleId);
    state.selectedStyleId = styleId;
    saveState();
    render();
    showMessage(`Styl ${style.label} byl odemceny.`, "success");
  }

  function spinRandomStyle() {
    const lockedStyles = STYLE_OPTIONS.filter((style) => style.unlockType === "shop" && !isStyleUnlocked(style.id));

    if (!lockedStyles.length) {
      showMessage("Mas odemcene vsechny dostupne styly.");
      return;
    }

    if (!hasEnoughStars(STYLE_SHOP_CONFIG.randomSpinStarCost) || state.styleTokens < STYLE_SHOP_CONFIG.randomSpinTokenCost) {
      showMessage("Na vytoceni stylu potrebujes hvezdicky i token stylu.");
      return;
    }

    state.stars -= STYLE_SHOP_CONFIG.randomSpinStarCost;
    state.styleTokens -= STYLE_SHOP_CONFIG.randomSpinTokenCost;
    const randomStyle = lockedStyles[Math.floor(Math.random() * lockedStyles.length)];
    unlockStyle(randomStyle.id);
    state.selectedStyleId = randomStyle.id;
    saveState();
    render();
    showMessage(`Vytocen styl ${randomStyle.label}.`, "success");
  }

  function setOverviewTab(tab) {
    state.screenState.overviewTab = tab;
    saveState();
    render();
  }

  function setNickname(nextNickname) {
    const nickname = String(nextNickname ?? "").trim().slice(0, 20);

    if (!state.linkedEmail && !state.currentEmail) {
      showMessage("Nick jde menit az po propojeni uctu s e-mailem.");
      return;
    }

    if (nickname.length < 2) {
      showMessage("Nick musi mit aspon 2 znaky.");
      return;
    }

    state.nickname = nickname;
    saveState();
    render();
    showMessage("Nick byl ulozen.", "success");
  }

  function selectAvatar(avatarId) {
    if (!isAvatarUnlocked(avatarId)) {
      showMessage("Tento avatar jeste nemas odemceny.");
      return;
    }

    state.selectedAvatarId = avatarId;
    saveState();
    render();
    showMessage("Avatar byl nastaven.", "success");
  }

  function buyAvatar(avatarId) {
    const avatar = AVATAR_OPTIONS.find((item) => item.id === avatarId);

    if (!avatar || avatar.unlockType !== "shop") {
      showMessage("Tento avatar ted nejde koupit.");
      return;
    }

    if (isAvatarUnlocked(avatarId)) {
      selectAvatar(avatarId);
      return;
    }

    if (!hasEnoughStars(AVATAR_SHOP_CONFIG.directUnlockCost)) {
      showMessage("Nemas dost hvezdicek na odemceni avataru.");
      return;
    }

    state.stars -= AVATAR_SHOP_CONFIG.directUnlockCost;
    unlockAvatar(avatarId);
    state.selectedAvatarId = avatarId;
    saveState();
    render();
    showMessage(`Avatar ${avatar.label} byl odemceny.`, "success");
  }

  function spinRandomAvatar() {
    const lockedAvatars = AVATAR_OPTIONS.filter((avatar) => avatar.unlockType === "shop" && !isAvatarUnlocked(avatar.id));

    if (!lockedAvatars.length) {
      showMessage("Mas odemcene vsechny dostupne avatary.");
      return;
    }

    if (!hasEnoughStars(AVATAR_SHOP_CONFIG.randomSpinCost)) {
      showMessage("Nemas dost hvezdicek na vytoceni avataru.");
      return;
    }

    state.stars -= AVATAR_SHOP_CONFIG.randomSpinCost;
    const randomAvatar = lockedAvatars[Math.floor(Math.random() * lockedAvatars.length)];
    unlockAvatar(randomAvatar.id);
    state.selectedAvatarId = randomAvatar.id;
    saveState();
    render();
    showMessage(`Vytocen avatar ${randomAvatar.label}.`, "success");
  }

  function renderAvatarImage(avatar, sizeClass) {
    return `<img class="avatar-image ${sizeClass}" src="${avatar.src}" alt="${escapeHtml(avatar.label)}">`;
  }

  function toggleProfileMenu() {
    state.screenState.profileMenuOpen = !state.screenState.profileMenuOpen;
    saveState();
    render();
  }

  function toggleStyleShop() {
    state.screenState.styleShopOpen = !state.screenState.styleShopOpen;
    saveState();
    render();
  }

  function closeProfileMenu() {
    if (!state.screenState.profileMenuOpen) {
      return;
    }

    state.screenState.profileMenuOpen = false;
    saveState();
    render();
  }

  function isSectionCompleted(sectionIndex) {
    const { total, completed } = getTaskCounts(sectionIndex);
    return total > 0 && total === completed;
  }

  function isSectionUnlocked(sectionIndex) {
    if (isAdminPreview()) {
      return true;
    }

    if (sectionIndex === 0) {
      return true;
    }

    return isSectionCompleted(sectionIndex - 1);
  }

  function isTaskUnlocked(sectionIndex, taskIndex) {
    if (isAdminPreview()) {
      return true;
    }

    if (!isSectionUnlocked(sectionIndex)) {
      return false;
    }

    if (taskIndex === 0) {
      return true;
    }

    const previousTask = sections[sectionIndex].tasks[taskIndex - 1];
    return getTaskState(previousTask.id)?.completed ?? false;
  }

  function showMessage(text, tone = "info") {
    const message = container.querySelector('[data-role="action-message"]');
    if (!message) {
      return;
    }

    message.textContent = text;
    message.className = `toast toast--${tone}`;
    message.hidden = false;

    if (toastTimer) {
      clearTimeout(toastTimer);
    }

    toastTimer = setTimeout(() => {
      message.hidden = true;
    }, 2600);
  }

  function getCodeDraft(taskId) {
    if (isAdminPreview()) {
      return state.screenState.codeDrafts?.[taskId] ?? getTaskSolution(taskId);
    }

    return state.screenState.codeDrafts?.[taskId] ?? "";
  }

  function setCodeDraft(taskId, value) {
    state.screenState.codeDrafts = {
      ...(state.screenState.codeDrafts ?? {}),
      [taskId]: value,
    };
    saveState();
  }

  function openHelp(taskId, type) {
    if (state.screenState.activeTaskId !== taskId) {
      return;
    }

    state.screenState.activeHelpType = type;
    saveState();
    render();
  }

  function closeHelp() {
    state.screenState.activeHelpType = null;
    saveState();
    render();
  }

  function getTaskSolution(taskId) {
    return TASK_SOLUTIONS[taskId] ?? "";
  }

  function getTaskImageConfig(taskId) {
    return TASK_IMAGE_CONFIG[taskId] ?? null;
  }

  function getTaskPosition(taskId) {
    for (let sectionIndex = 0; sectionIndex < sections.length; sectionIndex += 1) {
      const taskIndex = sections[sectionIndex].tasks.findIndex((task) => task.id === taskId);
      if (taskIndex >= 0) {
        return { sectionIndex, taskIndex };
      }
    }

    return null;
  }

  function getAdjacentTaskId(taskId, direction) {
    const position = getTaskPosition(taskId);

    if (!position) {
      return null;
    }

    const allTasks = sections.flatMap((section, sectionIndex) => section.tasks.map((task, taskIndex) => ({
      id: task.id,
      sectionIndex,
      taskIndex,
    })));
    const currentIndex = allTasks.findIndex((task) => task.id === taskId);
    const adjacent = allTasks[currentIndex + direction];

    if (!adjacent) {
      return null;
    }

    if (direction > 0 && !canOpenTask(adjacent.sectionIndex, adjacent.taskIndex)) {
      return null;
    }

    return adjacent.id;
  }

  function hasCodeDraft(taskId) {
    return getCodeDraft(taskId).trim().length > 0;
  }

  function isCodeSubmissionValid(taskId) {
    const code = getCodeDraft(taskId).trim();

    if (!code) {
      return false;
    }

    const normalized = normalizeCodeForValidation(code);
    const hasSetup = /\bsetup\s*\(/.test(normalized);
    const hasLoop = /\bloop\s*\(/.test(normalized);
    const hasArduinoAction = normalized.includes("digitalwrite")
      || normalized.includes("digitalread")
      || normalized.includes("analogread")
      || normalized.includes("analogwrite")
      || normalized.includes("pinmode")
      || normalized.includes("serial.")
      || normalized.includes("servo");
    const baseArduinoShape = hasSetup && hasLoop && hasArduinoAction;

    if (!baseArduinoShape) {
      return false;
    }

    const taskSpecificChecks = {
      "beginner-led": () => {
        const readsInput = countMatches(normalized, /digitalread\s*\(/g) >= 1;
        const writesOutput = normalized.includes("digitalwrite");
        const hasCondition = hasAny(normalized, ["if(", "if (", "?", " else "]);
        return readsInput && writesOutput && hasCondition;
      },
      "beginner-potentiometer": () => {
        return countMatches(normalized, /analogread\s*\(/g) >= 1
          && hasAny(normalized, ["serial.begin", "serial.println", "serial.print"]);
      },
      "beginner-and-or": () => {
        const reads = countMatches(normalized, /digitalread\s*\(/g);
        const writes = countMatches(normalized, /digitalwrite\s*\(/g);
        const hasLogic = hasAny(normalized, ["&&", "||"]);
        return reads >= 2 && writes >= 1 && hasLogic;
      },
      "beginner-traffic-light": () => {
        const outputWrites = countMatches(normalized, /digitalwrite\s*\(/g);
        const delays = countMatches(normalized, /delay\s*\(/g);
        return outputWrites >= 3 && delays >= 2;
      },
      "beginner-buzzer-button": () => {
        const buttonReads = countMatches(normalized, /digitalread\s*\(/g);
        const hasSound = hasAny(normalized, ["tone(", "notone(", "digitalwrite("]);
        return buttonReads >= 1 && hasSound && hasAny(normalized, ["if(", "if ("]);
      },
      "beginner-light-sensor": () => {
        const lightRead = countMatches(normalized, /analogread\s*\(/g) >= 1;
        const ledReaction = hasAny(normalized, ["digitalwrite(", "analogwrite("]);
        return lightRead && ledReaction && hasAny(normalized, ["if(", "if ("]);
      },
      "advanced-stair-light": () => {
        const reads = countMatches(normalized, /digitalread\s*\(/g);
        const hasTiming = hasAny(normalized, ["millis(", "delay("]);
        return reads >= 2 && hasTiming && hasAny(normalized, ["if(", "if ("]);
      },
      "advanced-crosswalk": () => {
        const outputWrites = countMatches(normalized, /digitalwrite\s*\(/g);
        const inputReads = countMatches(normalized, /digitalread\s*\(/g);
        return outputWrites >= 4 && inputReads >= 1 && hasAny(normalized, ["if(", "if ("]);
      },
      "advanced-parking": () => {
        const hasDistanceMeasure = hasAny(normalized, ["pulsein(", "ultrasonic", "distance", "readultrasonicdistance"]);
        const hasReaction = hasAny(normalized, ["digitalwrite(", "tone(", "serial.println", "serial.print"]);
        return hasDistanceMeasure && hasReaction;
      },
      "advanced-motion": () => {
        return countMatches(normalized, /digitalread\s*\(/g) >= 1
          && hasAny(normalized, ["if(", "if (", "serial.println", "serial.print", "digitalwrite("]);
      },
      "advanced-temperature-alarm": () => {
        const tempRead = countMatches(normalized, /analogread\s*\(/g) >= 1;
        const hasDecision = hasAny(normalized, ["if(", "if (", " else "]);
        const hasAlarmOutput = hasAny(normalized, ["digitalwrite(", "analogwrite(", "tone(", "serial.println", "serial.print"]);
        return tempRead && hasDecision && hasAlarmOutput;
      },
      "advanced-counter": () => {
        const reads = countMatches(normalized, /digitalread\s*\(/g);
        const hasCounterChange = hasAny(normalized, ["++", "--", "+=", "-="]);
        const hasSerialOutput = hasAny(normalized, ["serial.println", "serial.print"]);
        return reads >= 2 && hasCounterChange && hasSerialOutput;
      },
      "expert-servo": () => {
        return hasAll(normalized, ["servo", "attach", "write"])
          && hasAny(normalized, ["analogread(", "map("]);
      },
      "expert-servo-loop": () => {
        const hasLooping = hasAny(normalized, ["while(", "for("]);
        return hasAll(normalized, ["servo", "attach", "write"]) && hasLooping;
      },
      "expert-rgb-loop": () => {
        const analogReads = countMatches(normalized, /analogread\s*\(/g);
        const analogWrites = countMatches(normalized, /analogwrite\s*\(/g);
        return analogReads >= 3 && analogWrites >= 3;
      },
      "expert-reaction-game": () => {
        const hasDelayOrTime = hasAny(normalized, ["random(", "millis(", "delay("]);
        const hasButtonRead = countMatches(normalized, /digitalread\s*\(/g) >= 1;
        const hasOutputReaction = hasAny(normalized, ["digitalwrite(", "serial.println", "serial.print"]);
        return hasDelayOrTime && hasButtonRead && hasOutputReaction;
      },
      "expert-led-roulette": () => {
        const outputWrites = countMatches(normalized, /digitalwrite\s*\(/g);
        const hasLooping = hasAny(normalized, ["for(", "while("]);
        return outputWrites >= 2 && hasLooping && hasAny(normalized, ["random(", "delay("]);
      },
      "expert-arduino-piano": () => {
        const buttonReads = countMatches(normalized, /digitalread\s*\(/g);
        const hasToneControl = hasAny(normalized, ["tone(", "notone("]);
        return buttonReads >= 2 && hasToneControl && hasAny(normalized, ["if(", "if ("]);
      },
      "expert-smart-barrier": () => {
        const hasServoControl = hasAll(normalized, ["servo", "attach", "write"]);
        const hasDistanceMeasure = hasAny(normalized, ["pulsein(", "distance", "readultrasonicdistance"]);
        return hasServoControl && hasDistanceMeasure && hasAny(normalized, ["if(", "if ("]);
      },
    };

    const taskCheck = taskSpecificChecks[taskId];
    return taskCheck ? taskCheck() : baseArduinoShape;
  }

  function syncCodeTextareaHeight(textarea) {
    if (!textarea) {
      return;
    }

    textarea.style.height = "auto";
    textarea.style.height = `${Math.max(textarea.scrollHeight, 160)}px`;
  }

  function hasEnoughStars(cost) {
    return state.stars >= cost;
  }

  function getSectionIndexById(sectionId) {
    return sections.findIndex((section) => section.id === sectionId);
  }

  function canOpenTask(sectionIndex, taskIndex) {
    const section = sections[sectionIndex];
    const task = section?.tasks[taskIndex];

    if (!task) {
      return false;
    }

    const taskState = getTaskState(task.id);
    return Boolean(taskState?.completed || isTaskUnlocked(sectionIndex, taskIndex));
  }

  function openSection(sectionId) {
    const sectionIndex = getSectionIndexById(sectionId);

    if (sectionIndex < 0) {
      return;
    }

    if (!isSectionUnlocked(sectionIndex)) {
      showMessage("Tato sekce je zatim zamcena.");
      return;
    }

    state.screenState.currentView = "section";
    state.screenState.activeSectionId = sectionId;
    state.screenState.activeTaskId = null;
    saveState();
    render();
  }

  function openTask(taskId) {
    const task = findTask(taskId);

    if (!task) {
      return;
    }

    const sectionIndex = findSectionIndexByTaskId(taskId);
    const taskIndex = sections[sectionIndex].tasks.findIndex((item) => item.id === taskId);

    if (!canOpenTask(sectionIndex, taskIndex)) {
      showMessage("Tento ukol je zatim zamceny.");
      return;
    }

    state.screenState.currentView = "task";
    state.screenState.activeSectionId = sections[sectionIndex].id;
    state.screenState.activeTaskId = taskId;
    state.screenState.activeHelpType = null;

    if (isAdminPreview() && !state.screenState.codeDrafts?.[taskId]) {
      setCodeDraft(taskId, getTaskSolution(taskId));
    }

    saveState();
    render();
  }

  function backToOverview() {
    state.screenState.currentView = "overview";
    state.screenState.activeTaskId = null;
    state.screenState.activeHelpType = null;
    saveState();
    render();
  }

  function backToSection() {
    state.screenState.currentView = "section";
    state.screenState.activeTaskId = null;
    state.screenState.activeHelpType = null;
    saveState();
    render();
  }

  function unlockHint(taskId) {
    const taskProgress = getTaskState(taskId);

    if (!taskProgress || taskProgress.completed) {
      showMessage("Napovedu ted nelze odemknout.");
      return;
    }

    if (isAdminPreview()) {
      openHelp(taskId, "code");
      return;
    }

    if ((taskProgress.openedHelp ?? []).includes("code")) {
      openHelp(taskId, "code");
      return;
    }

    if (!hasEnoughStars(state.config.helpCodeCost)) {
      showMessage("Nemas dost hvezdicek na napovedu ke kodu.");
      return;
    }

    state.stars -= state.config.helpCodeCost;
    taskProgress.openedHelp = Array.from(new Set([...(taskProgress.openedHelp ?? []), "code"]));
    saveState();
    openHelp(taskId, "code");
    showMessage("Napoveda ke kodu byla odemcena.");
  }

  function unlockWiringHelp(taskId) {
    const taskProgress = getTaskState(taskId);

    if (!taskProgress || taskProgress.completed) {
      showMessage("Napovedu k zapojeni ted nelze odemknout.");
      return;
    }

    if (isAdminPreview()) {
      openHelp(taskId, "wiring");
      return;
    }

    if ((taskProgress.openedHelp ?? []).includes("wiring")) {
      openHelp(taskId, "wiring");
      return;
    }

    if (!hasEnoughStars(state.config.helpWiringCost)) {
      showMessage("Nemas dost hvezdicek na napovedu k zapojeni.");
      return;
    }

    state.stars -= state.config.helpWiringCost;
    taskProgress.openedHelp = Array.from(new Set([...(taskProgress.openedHelp ?? []), "wiring"]));
    saveState();
    openHelp(taskId, "wiring");
    showMessage("Napoveda k zapojeni byla odemcena.");
  }

  function unlockSolution(taskId) {
    const taskProgress = getTaskState(taskId);

    if (!taskProgress || taskProgress.completed) {
      showMessage("Reseni ted nelze odemknout.");
      return;
    }

    if (isAdminPreview()) {
      openHelp(taskId, "solution");
      return;
    }

    if ((taskProgress.openedHelp ?? []).includes("solution")) {
      openHelp(taskId, "solution");
      return;
    }

    if (!hasEnoughStars(state.config.skipCost)) {
      showMessage("Nemas dost hvezdicek na odkryti reseni.");
      return;
    }

    state.stars -= state.config.skipCost;
    taskProgress.openedHelp = Array.from(new Set([...(taskProgress.openedHelp ?? []), "solution"]));
    saveState();
    openHelp(taskId, "solution");
    showMessage("Spravne reseni bylo odemceno.");
  }

  function completeTask(taskId) {
    const task = findTask(taskId);
    const taskProgress = getTaskState(taskId);

    if (!task || !taskProgress || taskProgress.completed) {
      showMessage("Tento ukol uz nejde potvrdit.");
      return;
    }

    if (!hasCodeDraft(taskId)) {
      showMessage("Nejdriv vloz kod pro kontrolu.", "error");
      return;
    }

    if (!isCodeSubmissionValid(taskId)) {
      showMessage("Reseni zatim nevypada jako uspesny Arduino program.", "error");
      return;
    }

    if (REQUIRE_LECTURER_PIN_FOR_CHECK) {
      const enteredPin = window.prompt("Zadej lektorsky PIN pro potvrzeni splneni:");

      if (enteredPin === null) {
        showMessage("Potvrzeni bylo zruseno.", "info");
        return;
      }

      if (!PREVIEW_ALLOW_ANY_PIN && enteredPin.trim() !== state.config.lecturerPin) {
        showMessage("Lektorsky PIN neni spravny.", "error");
        return;
      }
    }

    taskProgress.completed = true;
    taskProgress.completionType = "verified";
    state.stars += task.points;
    const verifiedTaskCount = getVerifiedTaskCount();
    const earnedStyleToken = verifiedTaskCount > 0 && verifiedTaskCount % STYLE_SHOP_CONFIG.tokenMilestone === 0;
    if (earnedStyleToken) {
      state.styleTokens += 1;
    }
    saveState();
    backToSection();
    showMessage(
      earnedStyleToken
        ? `Reseni uspesne. Ziskano ${task.points} hvezdicek a 1 token stylu.`
        : `Reseni uspesne. Ziskano ${task.points} hvezdicek.`,
      "success",
    );
  }

  function resetProgress() {
    const confirmed = window.confirm("Opravdu chces resetovat body i cely postup?");

    if (!confirmed) {
      return;
    }

    if (!state.currentStudentNumber) {
      return;
    }

    state.accounts[state.currentStudentNumber] = createDefaultAccountState();
    loadAccount(state.currentStudentNumber);
    state.authenticatedForDay = getTodayKey();
    saveState();
    render();
    showMessage("Preview postup byl resetovan.", "info");
  }

  function logoutStudent() {
    commitCurrentAccount();
    state.authenticatedForDay = null;
    state.currentStudentNumber = null;
    state.currentEmail = null;
    state.adminPreviewActive = false;
    state.linkedEmail = null;
    state.screenState = createDefaultScreenState();
    saveState();
    render();
  }

  function enterAdminPreview() {
    state.adminPreviewActive = true;
    state.adminPanelOpen = false;
    state.screenState = createDefaultScreenState();
    saveState();
    render();
  }

  function exitAdminPreview() {
    state.adminPreviewActive = false;
    state.adminPanelOpen = true;
    state.screenState = createDefaultScreenState();
    saveState();
    render();
  }

  function openAdminPanel() {
    state.adminPanelOpen = true;
    state.adminAuthenticated = false;
    saveState();
    render();
  }

  function closeAdminPanel() {
    state.adminPanelOpen = false;
    state.adminAuthenticated = false;
    saveState();
    render();
  }

  function bindEvents() {
    const actionButtons = container.querySelectorAll("[data-action]");

    actionButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const action = button.dataset.action;
        const sectionId = button.dataset.sectionId;
        const taskId = button.dataset.taskId;

        if (action === "open-section" && sectionId) {
          openSection(sectionId);
          return;
        }

        if (action === "open-task" && taskId) {
          openTask(taskId);
          return;
        }

        if (action === "back-to-overview") {
          backToOverview();
          return;
        }

        if (action === "enter-admin-preview") {
          enterAdminPreview();
          return;
        }

        if (action === "exit-admin-preview") {
          exitAdminPreview();
          return;
        }

        if (action === "logout-student") {
          logoutStudent();
          return;
        }

        if (action === "buy-style" && button.dataset.styleId) {
          buyStyle(button.dataset.styleId);
          return;
        }

        if (action === "select-style" && button.dataset.styleId) {
          selectStyle(button.dataset.styleId);
          return;
        }

        if (action === "spin-style") {
          spinRandomStyle();
          return;
        }

        if (action === "open-profile-panel") {
          toggleProfileMenu();
          return;
        }

        if (action === "toggle-style-shop") {
          toggleStyleShop();
          return;
        }

        if (action === "buy-avatar" && button.dataset.avatarId) {
          buyAvatar(button.dataset.avatarId);
          return;
        }

        if (action === "select-avatar" && button.dataset.avatarId) {
          selectAvatar(button.dataset.avatarId);
          return;
        }

        if (action === "spin-avatar") {
          spinRandomAvatar();
          return;
        }

        if (action === "close-profile-menu") {
          closeProfileMenu();
          return;
        }

        if (action === "back-to-section") {
          backToSection();
          return;
        }

        if (action === "close-help") {
          closeHelp();
          return;
        }

        if (action === "hint" && taskId) {
          unlockHint(taskId);
          return;
        }

        if (action === "wiring-help" && taskId) {
          unlockWiringHelp(taskId);
          return;
        }

        if (action === "show-solution" && taskId) {
          unlockSolution(taskId);
          return;
        }

        if (action === "complete" && taskId) {
          completeTask(taskId);
          return;
        }
      });
    });

    const resetButton = container.querySelector('[data-action="reset-progress"]');
    const resetAccessButton = container.querySelector('[data-action="reset-access"]');
    const loginForm = container.querySelector('[data-role="daily-pin-form"]');
    const emailLoginForm = container.querySelector('[data-role="email-login-form"]');
    const accountLinkForm = container.querySelector('[data-role="account-link-form"]');
    const nicknameForm = container.querySelector('[data-role="nickname-form"]');
    const adminToggleButton = container.querySelector('[data-action="open-admin"]');
    const adminCloseButton = container.querySelector('[data-action="close-admin"]');
    const adminLoginForm = container.querySelector('[data-role="admin-login-form"]');
    const adminForm = container.querySelector('[data-role="admin-form"]');
    const codeTextarea = container.querySelector("[data-role='code-submission']");
    const codeCheckButton = container.querySelector("[data-role='code-submit']");

    if (resetButton) {
      resetButton.addEventListener("click", resetProgress);
    }

    if (resetAccessButton) {
      resetAccessButton.addEventListener("click", logoutStudent);
    }

    if (loginForm) {
      loginForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const message = container.querySelector('[data-role="daily-pin-message"]');
        const formData = new FormData(loginForm);
        const enteredPin = String(formData.get("dailyPin") ?? "").trim();
        const studentNumber = String(formData.get("studentNumber") ?? "").replace(/\D/g, "");

        if (!studentNumber) {
          message.textContent = "Zadej cislo studenta.";
          return;
        }

        const studentNumberValue = Number(studentNumber);

        if (studentNumberValue < 1 || studentNumberValue > state.config.maxStudents) {
          message.textContent = `Cislo studenta musi byt v rozsahu 1 az ${state.config.maxStudents}.`;
          return;
        }

        if (!PREVIEW_ALLOW_ANY_PIN && enteredPin !== state.config.dailyPin) {
          message.textContent = "PIN neni spravny.";
          return;
        }

        loadAccount(studentNumber);
        state.authenticatedForDay = getTodayKey();
        state.currentStudentNumber = studentNumber;
        saveState();
        render();
      });
    }

    if (emailLoginForm) {
      emailLoginForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const message = container.querySelector('[data-role="email-login-message"]');
        const formData = new FormData(emailLoginForm);
        const email = String(formData.get("email") ?? "");
        const password = String(formData.get("password") ?? "");
        const result = loginWithEmail(email, password);
        message.textContent = result.message;
      });
    }

    if (accountLinkForm) {
      accountLinkForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const message = container.querySelector('[data-role="account-link-message"]');
        const formData = new FormData(accountLinkForm);
        const email = String(formData.get("email") ?? "");
        const password = String(formData.get("newPassword") ?? "");
        const result = linkAccountToEmail(email, password);
        message.textContent = result.message;
      });
    }

    if (nicknameForm) {
      nicknameForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData(nicknameForm);
        setNickname(String(formData.get("nickname") ?? ""));
      });
    }

    if (adminToggleButton) {
      adminToggleButton.addEventListener("click", openAdminPanel);
    }

    if (adminCloseButton) {
      adminCloseButton.addEventListener("click", closeAdminPanel);
    }

    if (adminLoginForm) {
      adminLoginForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const message = container.querySelector('[data-role="admin-login-message"]');
        const formData = new FormData(adminLoginForm);
        const adminPassword = String(formData.get("adminPassword") ?? "").trim();

        if (adminPassword !== state.config.adminPassword) {
          message.textContent = "Admin PIN neni spravny.";
          return;
        }

        state.adminAuthenticated = true;
        saveState();
        render();
      });
    }

    if (adminForm) {
      adminForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const message = container.querySelector('[data-role="admin-message"]');
        const formData = new FormData(adminForm);

        const nextDailyPin = String(formData.get("nextDailyPin") ?? "").trim();
        const nextMaxStudents = Number(formData.get("nextMaxStudents") ?? "");
        const didDailyPinChange = nextDailyPin && nextDailyPin !== state.config.dailyPin;

        if (nextDailyPin) {
          state.config.dailyPin = nextDailyPin;
        }

        if (Number.isFinite(nextMaxStudents) && nextMaxStudents > 0) {
          state.config.maxStudents = Math.min(nextMaxStudents, MAX_STUDENTS_LIMIT);
        }

        if (didDailyPinChange) {
          state.accounts = {};
          state.authenticatedForDay = null;
          state.currentStudentNumber = null;
          state.currentEmail = null;
          state.stars = 20;
          state.styleTokens = 0;
          state.selectedStyleId = "classic";
          state.unlockedStyleIds = ["classic"];
          state.linkedEmail = null;
          state.taskState = createDefaultTaskState();
          state.screenState = createDefaultScreenState();
        }

        saveState();
        render();
        showMessage(
          didDailyPinChange
            ? "Admin nastaveni bylo ulozeno a studentske statistiky byly resetovany."
            : "Admin nastaveni bylo ulozeno.",
          "success",
        );
      });
    }

    if (codeTextarea && codeCheckButton) {
      const taskId = codeTextarea.dataset.taskId;

      syncCodeTextareaHeight(codeTextarea);
      codeCheckButton.disabled = !hasCodeDraft(taskId);

      codeTextarea.addEventListener("input", () => {
        setCodeDraft(taskId, codeTextarea.value);
        syncCodeTextareaHeight(codeTextarea);
        codeCheckButton.disabled = !hasCodeDraft(taskId);
      });

      document.addEventListener("keydown", (event) => {
        const activeTaskId = state.screenState.activeTaskId;
        const isEnter = event.key === "Enter";
        const isInsideTextarea = event.target === codeTextarea;

        if (!isEnter || isInsideTextarea || !activeTaskId || activeTaskId !== taskId) {
          return;
        }

        if (codeCheckButton.disabled) {
          return;
        }

        event.preventDefault();
        completeTask(taskId);
      });
    }
  }

  function renderProgressHeader() {
    const completedTasks = getTotalCompletedTasks();
    const totalTasks = getTotalTaskCount();
    const completedSections = sections.filter((_section, index) => isSectionCompleted(index)).length;

    const badgesMarkup = LEVEL_BADGES.map((badge, index) => {
      const isReached = completedSections > index || completedTasks >= Math.max(1, index * 2);
      return `
        <div class="badge ${isReached ? "badge--active" : ""}">
          <span class="badge__icon">${badge.icon}</span>
          <span class="badge__label">${escapeHtml(badge.label)}</span>
        </div>
      `;
    }).join("");

    return `
      <section class="hero-card">
        <div class="hero-card__score">
          <span class="hero-card__score-main">${completedTasks}</span>
          <span class="hero-card__score-max">/${totalTasks}</span>
        </div>
        <div class="hero-card__copy">
          <h1>Celkove skore</h1>
        </div>
        <div class="badge-strip">
          ${badgesMarkup}
        </div>
      </section>
    `;
  }

  function renderCurrencyBar() {
    return `
      <section class="currency-bar">
        <div class="currency-pill currency-pill--stars">
          <span class="currency-pill__icon">&#9733;</span>
          <span class="currency-pill__value">${state.stars}</span>
          <span class="currency-pill__label">Hvezdicky</span>
        </div>
        <div class="currency-pill currency-pill--tokens">
          <span class="currency-pill__icon">&#10022;</span>
          <span class="currency-pill__value">${state.styleTokens}</span>
          <span class="currency-pill__label">Tokeny stylu</span>
        </div>
      </section>
    `;
  }

  function renderStyleShopPanel() {
    const selectedStyle = getSelectedStyle();
    const isOpen = Boolean(state.screenState.styleShopOpen);
    const styleCardsMarkup = STYLE_OPTIONS.map((style) => {
      const unlocked = isStyleUnlocked(style.id);
      const isActive = style.id === selectedStyle.id;
      const buttonLabel = !unlocked
        ? `Odemknout za ${STYLE_SHOP_CONFIG.directUnlockCost} hvezdicek`
        : isActive
          ? "Aktivni"
          : "Pouzit";
      const buttonAction = unlocked ? "select-style" : "buy-style";

      return `
        <article class="style-card style-card--${style.accent} ${isActive ? "style-card--active" : ""}">
          <div class="style-card__top">
            <strong>${escapeHtml(style.label)}</strong>
            <span>${unlocked ? (isActive ? "Pouzivas" : "Odemceno") : "Zamceno"}</span>
          </div>
          <p>${escapeHtml(style.description)}</p>
          <button
            type="button"
            data-action="${buttonAction}"
            data-style-id="${style.id}"
            ${isActive ? "disabled" : ""}
          >${buttonLabel}</button>
        </article>
      `;
    }).join("");

    return `
      <aside class="shop-panel shop-panel--styles">
        <div class="shop-tabs">
          <button type="button" class="shop-tabs__tab shop-tabs__tab--active" data-action="toggle-style-shop">
            ${isOpen ? "Nakup stylu - skryt" : "Nakup stylu"}
          </button>
        </div>
        ${isOpen ? `
          <div class="shop-panel__intro">
            <p class="eyebrow">STYLY</p>
            <h2>Vzhled screenu</h2>
            <p>Napovedy zustavaji prakticke. Za meny si tu muzes odemykat a menit vzhled celeho rozhrani.</p>
          </div>
          <div class="style-spin-card">
            <strong>Nahodny styl</strong>
            <p>Vytoc novy styl za ${STYLE_SHOP_CONFIG.randomSpinStarCost} hvezdicek a ${STYLE_SHOP_CONFIG.randomSpinTokenCost} token stylu.</p>
            <button type="button" data-action="spin-style">Vytocit styl</button>
          </div>
          <div class="style-card-list">
            ${styleCardsMarkup}
          </div>
        ` : ""}
      </aside>
    `;
  }

  function renderAccountLinkPanel() {
    const linkedEmail = state.linkedEmail ? normalizeEmail(state.linkedEmail) : null;

    return `
      <aside class="shop-panel shop-panel--account">
        <div class="shop-tabs">
          <button type="button" class="shop-tabs__tab shop-tabs__tab--active">Propojeni uctu</button>
        </div>
        <div class="shop-panel__intro">
          <p class="eyebrow">UCET</p>
          <h2>E-mail a heslo</h2>
          <p>Pro dlouhodobe ulozeni si muzes tenhle ucet propojit s e-mailem. Pak se prihlasis i dalsi dny bez denniho PINu.</p>
        </div>
        ${linkedEmail ? `
          <div class="account-link-status">
            <strong>Ucet je propojen</strong>
            <p>${escapeHtml(linkedEmail)}</p>
          </div>
        ` : `
          <form data-role="account-link-form" class="login-form login-form--stack">
            <input name="email" type="email" autocomplete="off" placeholder="E-mail" required>
            <input name="newPassword" type="password" autocomplete="new-password" placeholder="Nove heslo" required>
            <button type="submit">Propojit ucet</button>
          </form>
          <p data-role="account-link-message" class="account-link-message" aria-live="polite"></p>
        `}
      </aside>
    `;
  }

  function renderProfileMenu() {
    const selectedAvatar = getSelectedAvatar();
    const nickname = state.nickname ?? buildNicknameFromEmail(state.linkedEmail || state.currentEmail || "");
    const avatarCardsMarkup = AVATAR_OPTIONS.map((avatar) => {
      const unlocked = isAvatarUnlocked(avatar.id);
      const isActive = avatar.id === selectedAvatar.id;
      const buttonLabel = !unlocked
        ? `Odemknout za ${AVATAR_SHOP_CONFIG.directUnlockCost} hvezdicek`
        : isActive
          ? "Aktivni"
          : "Pouzit";
      const buttonAction = unlocked ? "select-avatar" : "buy-avatar";

      return `
        <button
          type="button"
          class="avatar-tile ${isActive ? "avatar-tile--active" : ""} ${unlocked ? "" : "avatar-tile--locked"}"
          data-action="${buttonAction}"
          data-avatar-id="${avatar.id}"
          ${isActive ? "disabled" : ""}
        >
          ${renderAvatarImage(avatar, "avatar-image--lg")}
          <span class="avatar-tile__label">${escapeHtml(avatar.label)}</span>
          <span class="avatar-tile__meta">${buttonLabel}</span>
        </button>
      `;
    }).join("");

    return `
      <div class="profile-menu">
        <div class="profile-menu__top">
          <strong>Profil</strong>
          <button type="button" class="ghost-button" data-action="close-profile-menu">Zavrit</button>
        </div>
        <div class="profile-panel__head">
          <div class="profile-avatar">
            ${renderAvatarImage(selectedAvatar, "avatar-image--xl")}
          </div>
          <div>
            <h2>${escapeHtml(nickname)}</h2>
            <p>${escapeHtml(state.linkedEmail || state.currentEmail || "")}</p>
          </div>
        </div>
        <form data-role="nickname-form" class="login-form login-form--stack">
          <input name="nickname" type="text" autocomplete="off" placeholder="Nickname" value="${escapeHtml(nickname)}" required>
          <button type="submit">Ulozit nick</button>
        </form>
        <div class="avatar-spin-card">
          <strong>Nahodny avatar</strong>
          <p>Vytoc novy avatar za ${AVATAR_SHOP_CONFIG.randomSpinCost} hvezdicek.</p>
          <button type="button" data-action="spin-avatar">Vytocit avatar</button>
        </div>
        <div class="avatar-picker-grid">
          ${avatarCardsMarkup}
        </div>
      </div>
    `;
  }

  function renderOverview() {
    return `
      <div class="overview-layout">
        <div class="overview-layout__main">
          ${renderProgressHeader()}
          <div class="section-stack">
            ${renderSectionCards()}
          </div>
        </div>
        <div class="overview-layout__side">
          ${renderStyleShopPanel()}
          ${isAdminPreview() ? "" : renderAccountLinkPanel()}
        </div>
      </div>
    `;
  }

  function renderSectionCards() {
    return sections.map((section, sectionIndex) => {
      const counts = getTaskCounts(sectionIndex);
      const sectionUnlocked = isSectionUnlocked(sectionIndex);
      const progressPercent = counts.total ? Math.round((counts.completed / counts.total) * 100) : 0;
      const tasksMarkup = section.tasks.map((task, taskIndex) => {
        const unlocked = isTaskUnlocked(sectionIndex, taskIndex);
        const taskState = getTaskState(task.id);
        const isCompleted = taskState?.completed;
        const stateClass = !sectionUnlocked || !unlocked
          ? "task-pill--locked"
          : isCompleted
            ? "task-pill--complete"
            : "task-pill--active";
        const icon = !sectionUnlocked || !unlocked ? "&#128274;" : isCompleted ? "&#10003;" : "&#9675;";

        return `
          <div class="task-pill ${stateClass}">
            <span class="task-pill__status">${icon}</span>
            <span class="task-pill__title">${escapeHtml(task.title)}</span>
            <span class="task-pill__arrow">&rsaquo;</span>
          </div>
        `;
      }).join("");

      return `
        <button class="section-card section-card--${section.accent} ${sectionUnlocked ? "section-card--clickable" : "section-card--locked"}" type="button" data-action="open-section" data-section-id="${section.id}" ${sectionUnlocked ? "" : "disabled"}>
          <div class="section-card__header">
            <div class="section-card__icon">${section.icon}</div>
            <div>
              <h2>${escapeHtml(section.title)}</h2>
              <p>${escapeHtml(section.subtitle)}</p>
            </div>
            <span class="section-card__tag">${sectionUnlocked ? (isSectionCompleted(sectionIndex) ? "DOKONCENO" : "AKTIVNI") : "ZAMCENO"}</span>
          </div>
          <div class="section-card__tasks">
            ${tasksMarkup}
          </div>
          <div class="section-card__footer">
            <div class="progress-bar">
              <span style="width:${progressPercent}%"></span>
            </div>
            <strong>${counts.completed}/${counts.total} splneno</strong>
          </div>
        </button>
      `;
    }).join("");
  }

  function renderSectionView(sectionId) {
    const sectionIndex = getSectionIndexById(sectionId);
    const section = sections[sectionIndex];

    if (!section) {
      return "";
    }

    const tasksMarkup = section.tasks.map((task, taskIndex) => {
      const taskState = getTaskState(task.id);
      const isCompleted = Boolean(taskState?.completed);
      const isActive = !isCompleted && isTaskUnlocked(sectionIndex, taskIndex);
      const isLocked = !isCompleted && !isActive;
      const statusLabel = isCompleted ? "Splneno" : isActive ? "Aktivni" : "Zamceno";
      const statusClass = isCompleted ? "task-row--complete" : isActive ? "task-row--active" : "task-row--locked";

      return `
        <button
          class="task-row ${statusClass}"
          type="button"
          data-action="open-task"
          data-task-id="${task.id}"
          ${canOpenTask(sectionIndex, taskIndex) ? "" : "disabled"}
        >
          <span class="task-row__left">
            <span class="task-row__dot">${isCompleted ? "&#10003;" : isActive ? "&rarr;" : "&#128274;"}</span>
            <span>
              <strong>${escapeHtml(task.title)}</strong>
              <small>${statusLabel}</small>
            </span>
          </span>
          <span class="task-row__right">${task.points} b</span>
        </button>
      `;
    }).join("");

    return `
      <section class="detail-card">
        <div class="detail-card__topbar">
          <button class="ghost-button" type="button" data-action="back-to-overview">Zpet na prehled</button>
          <span class="detail-card__badge detail-card__badge--${section.accent}">${escapeHtml(section.title)}</span>
        </div>
        <h2>${escapeHtml(section.title)}</h2>
        <p class="detail-card__meta">${escapeHtml(section.subtitle)}</p>
        <p class="detail-card__meta">Kliknout jde jen na splnene ukoly a na prave aktivni ukol. Dalsi se odemykaji postupne podle postupu.</p>
        <div class="task-row-list">
          ${tasksMarkup}
        </div>
      </section>
    `;
  }

  function renderTaskView(taskId) {
    const task = findTask(taskId);

    if (!task) {
      return `
        <section class="detail-card">
          <h2>Ukol nenalezen</h2>
          <button class="ghost-button" type="button" data-action="back-to-overview">Zpet</button>
        </section>
      `;
    }

    const taskProgress = getTaskState(taskId);
    const sectionIndex = findSectionIndexByTaskId(taskId);
    const section = sections[sectionIndex];
    const openedHelp = taskProgress.openedHelp ?? [];
    const hasCodeHelp = openedHelp.includes("code");
    const hasWiringHelp = openedHelp.includes("wiring");
    const hasSolutionHelp = openedHelp.includes("solution");
    const codeHelpDisabled = isAdminPreview()
      ? false
      : taskProgress.completed
      ? !hasCodeHelp
      : !hasCodeHelp && !hasEnoughStars(state.config.helpCodeCost);
    const wiringHelpDisabled = isAdminPreview()
      ? false
      : taskProgress.completed
      ? !hasWiringHelp
      : !hasWiringHelp && !hasEnoughStars(state.config.helpWiringCost);
    const solutionDisabled = isAdminPreview()
      ? false
      : taskProgress.completed
      ? !hasSolutionHelp
      : !hasSolutionHelp && !hasEnoughStars(state.config.skipCost);
    const codeDraft = getCodeDraft(task.id);
    const canSubmitCode = codeDraft.trim().length > 0 && !taskProgress.completed;
    const activeHelpType = state.screenState.activeHelpType ?? null;
    const statusText = isAdminPreview()
      ? "Admin nahled"
      : taskProgress.completed
      ? taskProgress.completionType === "skipped"
        ? "Splneno preskocenim"
        : "Splneno lektorem"
      : "Pripraveno";
    const goalsMarkup = (task.goals ?? []).map((goal) => `<li>${escapeHtml(goal)}</li>`).join("");
    const activeHelpContent = activeHelpType === "code"
      ? (task.codeHelp ?? [])
      : activeHelpType === "wiring"
        ? (task.wiringHelp ?? [])
        : [];
    const activeHelpTitle = activeHelpType === "code"
      ? "Napoveda ke kodu"
      : activeHelpType === "wiring"
        ? "Napoveda k zapojeni"
        : "Spravne reseni";
    const activeSolution = activeHelpType === "solution" ? getTaskSolution(task.id) : "";
    const taskImage = getTaskImageConfig(task.id);
    const previousTaskId = getAdjacentTaskId(task.id, -1);
    const nextTaskId = getAdjacentTaskId(task.id, 1);
    const activeHelpMarkup = activeHelpType ? `
      <section class="help-panel">
        <div class="help-panel__top">
          <div>
            <p class="eyebrow">NAPOVEDA</p>
            <h3>${activeHelpTitle}</h3>
          </div>
          <button class="ghost-button" type="button" data-action="close-help">Zavrit</button>
        </div>
        <p class="help-panel__meta">Reference z tveho zadani pro ukol ${escapeHtml(task.title)}.</p>
        <div class="help-panel__hero">
          <strong>${escapeHtml(task.imageLabel ?? "Referencni zapojeni")}</strong>
          <span>${activeHelpType === "solution" ? "Tady je kompletni textove reseni, ktere muzete pouzit po slozeni bloku v Tinkercadu." : "Originalni obrazek sem muzu vlozit presne, jakmile ho budeme mit jako soubor v projektu."}</span>
        </div>
        ${activeHelpType === "wiring" && taskImage ? `
          <div class="help-panel__wiring-crop">
            <img src="${escapeHtml(taskImage.src)}" alt="${escapeHtml(taskImage.alt)}">
          </div>
        ` : ""}
        ${activeHelpType === "solution" ? `
          <pre class="solution-code"><code>${escapeHtml(activeSolution)}</code></pre>
        ` : `
          <ol class="help-panel__steps">
            ${activeHelpContent.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ol>
        `}
      </section>
    ` : "";
    const wiringPreviewMarkup = isAdminPreview() && taskImage ? `
      <div class="detail-card__wiring-preview">
        <img src="${escapeHtml(taskImage.src)}" alt="${escapeHtml(taskImage.alt ?? task.imageLabel ?? `Zapojeni pro ukol ${task.title}`)}">
      </div>
    ` : `
      <div class="detail-card__placeholder">
        <div class="detail-card__placeholder-copy">
          <strong>${escapeHtml(task.imageLabel ?? "Referencni zapojeni")}</strong>
          <span>${isAdminPreview() ? "Jakmile pridame screenshot z prezentace do slozky assets, admin tu uvidi cely obrazek vcetne bloku." : "Ve studentskem rezimu se cast zapojeni ukaze po kliknuti na napovedu Zapojeni."}</span>
        </div>
      </div>
    `;

    return `
      <section class="detail-card">
        <div class="detail-card__topbar">
          <button class="ghost-button" type="button" data-action="back-to-section">Zpet na sekci</button>
          <div class="detail-card__top-actions">
            <details class="help-menu">
              <summary>Napoveda</summary>
              <div class="help-menu__content">
                <button type="button" data-action="hint" data-task-id="${task.id}" ${codeHelpDisabled ? "disabled" : ""}>
                  <span>${hasCodeHelp || isAdminPreview() ? "Kod - otevrit" : "Kod"}</span>
                  <span class="help-menu__price">${isAdminPreview() ? "ADMIN" : `&#9733; ${state.config.helpCodeCost}`}</span>
                </button>
                <button type="button" data-action="wiring-help" data-task-id="${task.id}" ${wiringHelpDisabled ? "disabled" : ""}>
                  <span>${hasWiringHelp || isAdminPreview() ? "Zapojeni - otevrit" : "Zapojeni"}</span>
                  <span class="help-menu__price">${isAdminPreview() ? "ADMIN" : `&#9733; ${state.config.helpWiringCost}`}</span>
                </button>
                <button type="button" data-action="show-solution" data-task-id="${task.id}" ${solutionDisabled ? "disabled" : ""}>
                  <span>${hasSolutionHelp || isAdminPreview() ? "Reseni - otevrit" : "Preskocit"}</span>
                  <span class="help-menu__price">${isAdminPreview() ? "ADMIN" : `&#9733; ${state.config.skipCost}`}</span>
                </button>
              </div>
            </details>
            <span class="detail-card__stars">&#9733; ${state.stars}</span>
            <span class="detail-card__badge detail-card__badge--${section.accent}">${escapeHtml(section.title)}</span>
          </div>
        </div>
        <p class="detail-card__section">${escapeHtml(section.title)}</p>
        <h2>${escapeHtml(task.title)}</h2>
        <p class="detail-card__meta">Hvezdicky za splneni: ${task.points}</p>
        <p class="detail-card__meta">Zadani:</p>
        <ul class="task-goals">
          ${goalsMarkup}
        </ul>
        ${wiringPreviewMarkup}
        <p>${escapeHtml(task.description)}</p>
        ${activeHelpMarkup}
        <div class="code-check-panel">
          <label class="code-check-panel__label" for="code-submission">Kod pro kontrolu</label>
          <textarea
            id="code-submission"
            class="code-check-panel__input"
            data-role="code-submission"
            data-task-id="${task.id}"
            placeholder="Sem se bude vkladat Arduino kod pro kontrolu."
          >${escapeHtml(codeDraft)}</textarea>
          <p class="code-check-panel__note">Kontrola patri k ukolu, ktery se sklada ze zapojeni obvodu a programu.</p>
        </div>
        <div class="detail-card__actions detail-card__actions--single">
          <button
            type="button"
            data-action="complete"
            data-role="code-submit"
            data-task-id="${task.id}"
            ${canSubmitCode ? "" : "disabled"}
          >Zkontrolovat</button>
        </div>
        <div class="task-nav">
          <button type="button" class="ghost-button task-nav__button" data-action="open-task" data-task-id="${previousTaskId ?? ""}" ${previousTaskId ? "" : "disabled"}>&larr; Predchozi</button>
          <button type="button" class="ghost-button task-nav__button" data-action="open-task" data-task-id="${nextTaskId ?? ""}" ${nextTaskId ? "" : "disabled"}>Dalsi &rarr;</button>
        </div>
      </section>
    `;
  }

  function renderLogin() {
    const adminStats = getStudentStats();
    const adminStatsMarkup = adminStats.map((student) => `
      <div class="admin-stats-row">
        <div class="admin-stats-row__top">
          <strong>Student ${escapeHtml(student.studentNumber)}</strong>
          <span>${student.completed}/${student.totalTasks} ukolu</span>
        </div>
        <div class="admin-stats-row__bar">
          <span style="width:${student.percent}%"></span>
        </div>
        <div class="admin-stats-row__meta">
          <span>${student.percent}% hotovo</span>
          <span>&#9733; ${student.stars} | T ${student.styleTokens}</span>
        </div>
      </div>
    `).join("");

    container.innerHTML = `
      <section class="login-screen">
        <div class="login-card ${state.adminPanelOpen ? "login-card--admin" : ""}">
          <div class="login-card__corner">
            ${state.adminPanelOpen
              ? '<button type="button" class="ghost-button admin-toggle" data-action="close-admin">Zavrit admin</button>'
              : '<button type="button" class="ghost-button admin-toggle" data-action="open-admin">Admin</button>'}
          </div>
          ${state.adminPanelOpen ? `
            <section class="admin-panel admin-panel--full">
              <p class="eyebrow">ADMIN</p>
              ${state.adminAuthenticated ? `
                <div class="admin-layout">
                  <div class="admin-layout__main">
                    <h1>Nastaveni dne</h1>
                    <p class="admin-panel__note">Po ulozeni budou studenti moci zadat jen cisla od 1 do nastaveneho poctu studentu.</p>
                    <form data-role="admin-form" class="login-form login-form--stack">
                      <input name="nextDailyPin" type="text" autocomplete="off" placeholder="PIN na tento den" value="${escapeHtml(state.config.dailyPin)}" required>
                      <input name="nextMaxStudents" type="number" min="1" max="${MAX_STUDENTS_LIMIT}" step="1" autocomplete="off" placeholder="Pocet studentu" value="${state.config.maxStudents}" required>
                      <button type="submit">Ulozit nastaveni dne</button>
                    </form>
                    <div class="admin-panel__actions">
                      <button type="button" data-action="enter-admin-preview">Vstoupit jako admin</button>
                    </div>
                    <p class="admin-panel__note">V admin nahledu uvidis vsechny sekce, vsechny ukoly a reseni bez odemykani.</p>
                    <p data-role="admin-message" aria-live="polite"></p>
                  </div>
                  <aside class="admin-stats">
                    <div class="admin-stats__top">
                      <h2>Statistika</h2>
                      <span>${state.config.maxStudents} studentu</span>
                    </div>
                    <p class="admin-panel__note">Prehled postupu vsech studentu podle poctu splnenych ukolu.</p>
                    <div class="admin-stats__list">
                      ${adminStatsMarkup}
                    </div>
                  </aside>
                </div>
              ` : `
                <h1>Prihlaseni admina</h1>
                <p class="admin-panel__note">Zadej admin PIN a otevres dalsi okno s nastavenim denniho PINu a poctu studentu.</p>
                <form data-role="admin-login-form" class="login-form login-form--stack">
                  <input name="adminPassword" type="password" autocomplete="off" placeholder="Admin PIN" required>
                  <button type="submit">Prihlasit jako admin</button>
                </form>
                <p data-role="admin-login-message" aria-live="polite"></p>
              `}
            </section>
          ` : `
            <section>
              <p class="eyebrow">IOT TABOR</p>
              <h1>Prihlaseni studenta</h1>
              <p>Zadej denni PIN a cislo studenta. Povolena cisla jsou od 1 do ${state.config.maxStudents}.</p>
              <form data-role="daily-pin-form" class="login-form login-form--stack">
                <input id="daily-pin-input" name="dailyPin" type="password" inputmode="numeric" autocomplete="off" placeholder="Denni PIN" required>
                <input id="student-number-input" name="studentNumber" type="text" inputmode="numeric" autocomplete="off" placeholder="Cislo studenta" required>
                <button type="submit">Vstoupit</button>
              </form>
              <p data-role="daily-pin-message" aria-live="polite"></p>
              <div class="login-divider"><span>Nebo prihlaseni pres e-mail</span></div>
              <form data-role="email-login-form" class="login-form login-form--stack">
                <input name="email" type="email" autocomplete="username" placeholder="E-mail" required>
                <input name="password" type="password" autocomplete="current-password" placeholder="Heslo" required>
                <button type="submit">Prihlasit e-mailem</button>
              </form>
              <p data-role="email-login-message" aria-live="polite"></p>
            </section>
          `}
        </div>
      </section>
    `;

    bindEvents();
  }

  function renderApp() {
    let bodyContent = "";
    const selectedAvatar = getSelectedAvatar();
    const profileNickname = state.nickname ?? buildNicknameFromEmail(state.linkedEmail || state.currentEmail || "");

    if (state.screenState.currentView === "task" && state.screenState.activeTaskId) {
      bodyContent = renderTaskView(state.screenState.activeTaskId);
    } else if (state.screenState.currentView === "section" && state.screenState.activeSectionId) {
      bodyContent = renderSectionView(state.screenState.activeSectionId);
    } else {
      bodyContent = renderOverview();
    }

    container.innerHTML = `
      <section class="dashboard-shell theme--${getSelectedStyle().id}">
        <div class="app-shell__corner">
          <button type="button" class="ghost-button app-shell__back-button" data-action="logout-student">&larr; Zpet</button>
        </div>
        ${!isAdminPreview() && (state.linkedEmail || state.currentEmail) ? `
          <button type="button" class="profile-chip" data-action="open-profile-panel">
            <span class="profile-chip__avatar">
              ${renderAvatarImage(selectedAvatar, "avatar-image--sm")}
            </span>
            <span class="profile-chip__name">${escapeHtml(profileNickname)}</span>
          </button>
          ${state.screenState.profileMenuOpen ? renderProfileMenu() : ""}
        ` : ""}
        ${renderCurrencyBar()}
        ${isAdminPreview() ? `
          <div class="admin-preview-banner">
            <strong>Admin nahled</strong>
            <button type="button" class="ghost-button" data-action="exit-admin-preview">Zpet do adminu</button>
          </div>
        ` : ""}
        ${bodyContent}
        <div class="toast" data-role="action-message" hidden></div>
      </section>
    `;

    bindEvents();
  }

  function render() {
    if (!isAuthenticated()) {
      renderLogin();
      return;
    }

    renderApp();
  }

  return {
    render,
  };
}

window.IotCampScreen = {
  mount(target, options) {
    const container = typeof target === "string" ? document.querySelector(target) : target;

    if (!container) {
      throw new Error("Cilovy kontejner pro IotCampScreen nebyl nalezen.");
    }

    const screen = createIotCampScreen(container, options);
    screen.render();
    return screen;
  },
};

document.addEventListener("DOMContentLoaded", () => {
  const previewRoot = document.querySelector("#app");

  if (previewRoot) {
    window.IotCampScreen.mount(previewRoot);
  }
});
