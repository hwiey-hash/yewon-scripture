const CHARACTERS = [
  { emoji: "🐰", name: "토끼", theme: "love", label: "사랑", color: "#FFE4E8", cheering: "너는 정말 사랑받고 있어!", cheerColor: "#E8788A" },
  { emoji: "🐻", name: "곰돌이", theme: "comfort", label: "위로", color: "#FFF0DB", cheering: "힘들었지? 곰돌이가 안아줄게!", cheerColor: "#C4953A" },
  { emoji: "🐸", name: "개구리", theme: "gratitude", label: "감사", color: "#E8F5E9", cheering: "오늘도 감사한 하루! 개굴~", cheerColor: "#4CAF50" },
  { emoji: "🐷", name: "돼지", theme: "hope", label: "희망", color: "#FFE0EC", cheering: "좋은 일이 곧 찾아올 거야! 꿀꿀~", cheerColor: "#E57399" },
  { emoji: "🦊", name: "여우", theme: "wisdom", label: "지혜", color: "#FFF3E0", cheering: "넌 이미 충분히 잘하고 있어!", cheerColor: "#E8913A" },
  { emoji: "🐨", name: "코알라", theme: "peace", label: "평안", color: "#F3E5F5", cheering: "잠깐 쉬어가도 괜찮아, 안심해~", cheerColor: "#9C72B2" }
];

const VERSES = {
  love: [
    {
      korean: "사랑은 오래 참고 사랑은 온유하며 투기하는 자가 되지 아니하며 사랑은 자랑하지 아니하며 교만하지 아니하며",
      english: "Love is patient, love is kind. It does not envy, it does not boast, it is not proud.",
      reference: "고린도전서 13:4",
      referenceEn: "1 Corinthians 13:4"
    },
    {
      korean: "사랑하지 아니하는 자는 하나님을 알지 못하나니 이는 하나님은 사랑이심이라",
      english: "Whoever does not love does not know God, because God is love.",
      reference: "요한일서 4:8",
      referenceEn: "1 John 4:8"
    },
    {
      korean: "하나님이 세상을 이처럼 사랑하사 독생자를 주셨으니 이는 그를 믿는 자마다 멸망하지 않고 영생을 얻게 하려 하심이라",
      english: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
      reference: "요한복음 3:16",
      referenceEn: "John 3:16"
    },
    {
      korean: "나의 계명은 곧 내가 너희를 사랑한 것 같이 너희도 서로 사랑하라 하는 이것이니라",
      english: "My command is this: Love each other as I have loved you.",
      reference: "요한복음 15:12",
      referenceEn: "John 15:12"
    },
    {
      korean: "내가 확신하노니 사망이나 생명이나 천사들이나 권세자들이나 현재 일이나 장래 일이나 능력이나 높음이나 깊음이나 다른 어떤 피조물이라도 우리를 우리 주 그리스도 예수 안에 있는 하나님의 사랑에서 끊을 수 없으리라",
      english: "For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.",
      reference: "로마서 8:38-39",
      referenceEn: "Romans 8:38-39"
    },
    {
      korean: "여호와께 감사하라 그는 선하시며 그 인자하심이 영원함이로다",
      english: "Give thanks to the LORD, for he is good. His love endures forever.",
      reference: "시편 136:1",
      referenceEn: "Psalm 136:1"
    },
    {
      korean: "무엇보다도 뜨겁게 서로 사랑할지니 사랑은 허다한 죄를 덮느니라",
      english: "Above all, love each other deeply, because love covers over a multitude of sins.",
      reference: "베드로전서 4:8",
      referenceEn: "1 Peter 4:8"
    }
  ],
  comfort: [
    {
      korean: "내가 사망의 음침한 골짜기로 다닐지라도 해를 두려워하지 않을 것은 주께서 나와 함께 하심이라 주의 지팡이와 막대기가 나를 안위하시나이다",
      english: "Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me.",
      reference: "시편 23:4",
      referenceEn: "Psalm 23:4"
    },
    {
      korean: "두려워하지 말라 내가 너와 함께 함이라 놀라지 말라 나는 네 하나님이 됨이라 내가 너를 굳세게 하리라 참으로 너를 도와주리라 참으로 나의 의로운 오른손으로 너를 붙들리라",
      english: "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.",
      reference: "이사야 41:10",
      referenceEn: "Isaiah 41:10"
    },
    {
      korean: "수고하고 무거운 짐 진 자들아 다 내게로 오라 내가 너희를 쉬게 하리라",
      english: "Come to me, all you who are weary and burdened, and I will give you rest.",
      reference: "마태복음 11:28",
      referenceEn: "Matthew 11:28"
    },
    {
      korean: "여호와는 마음이 상한 자에게 가까이 하시고 충심으로 통회하는 자를 구원하시는도다",
      english: "The LORD is close to the brokenhearted and saves those who are crushed in spirit.",
      reference: "시편 34:18",
      referenceEn: "Psalm 34:18"
    },
    {
      korean: "찬송하리로다 그는 우리 주 예수 그리스도의 하나님이시요 자비의 아버지시요 모든 위로의 하나님이시며 우리의 모든 환난 중에서 우리를 위로하시는 이시로다",
      english: "Praise be to the God and Father of our Lord Jesus Christ, the Father of compassion and the God of all comfort, who comforts us in all our troubles.",
      reference: "고린도후서 1:3-4",
      referenceEn: "2 Corinthians 1:3-4"
    },
    {
      korean: "하나님은 우리의 피난처시요 힘이시니 환난 중에 만날 큰 도움이시로다",
      english: "God is our refuge and strength, an ever-present help in trouble.",
      reference: "시편 46:1",
      referenceEn: "Psalm 46:1"
    },
    {
      korean: "우리가 알거니와 하나님을 사랑하는 자 곧 그의 뜻대로 부르심을 입은 자들에게는 모든 것이 합력하여 선을 이루느니라",
      english: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.",
      reference: "로마서 8:28",
      referenceEn: "Romans 8:28"
    }
  ],
  gratitude: [
    {
      korean: "범사에 감사하라 이것이 그리스도 예수 안에서 너희를 향하신 하나님의 뜻이니라",
      english: "Give thanks in all circumstances; for this is God's will for you in Christ Jesus.",
      reference: "데살로니가전서 5:18",
      referenceEn: "1 Thessalonians 5:18"
    },
    {
      korean: "여호와께 감사하라 그는 선하시며 그 인자하심이 영원함이로다",
      english: "Give thanks to the LORD, for he is good; his love endures forever.",
      reference: "시편 107:1",
      referenceEn: "Psalm 107:1"
    },
    {
      korean: "아무 것도 염려하지 말고 다만 모든 일에 기도와 간구로 너희 구할 것을 감사함으로 하나님께 아뢰라",
      english: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.",
      reference: "빌립보서 4:6",
      referenceEn: "Philippians 4:6"
    },
    {
      korean: "감사함으로 그의 문에 들어가며 찬송함으로 그의 궁정에 들어가서 그에게 감사하며 그의 이름을 송축할지어다",
      english: "Enter his gates with thanksgiving and his courts with praise; give thanks to him and praise his name.",
      reference: "시편 100:4",
      referenceEn: "Psalm 100:4"
    },
    {
      korean: "또 무엇을 하든지 말에나 일에나 다 주 예수의 이름으로 하고 그를 힘입어 하나님 아버지께 감사하라",
      english: "And whatever you do, whether in word or deed, do it all in the name of the Lord Jesus, giving thanks to God the Father through him.",
      reference: "골로새서 3:17",
      referenceEn: "Colossians 3:17"
    },
    {
      korean: "이 날은 여호와께서 정하신 것이라 이 날에 우리가 즐거워하고 기뻐하리로다",
      english: "The LORD has done it this very day; let us rejoice today and be glad.",
      reference: "시편 118:24",
      referenceEn: "Psalm 118:24"
    },
    {
      korean: "항상 기뻐하라 쉬지 말고 기도하라 범사에 감사하라",
      english: "Rejoice always, pray continually, give thanks in all circumstances.",
      reference: "데살로니가전서 5:16-18",
      referenceEn: "1 Thessalonians 5:16-18"
    }
  ],
  hope: [
    {
      korean: "너희를 향한 나의 계획을 내가 알고 있노라 평안이요 재앙이 아니니라 너희에게 미래와 희망을 주는 계획이니라",
      english: "For I know the plans I have for you, declares the LORD, plans to prosper you and not to harm you, plans to give you hope and a future.",
      reference: "예레미야 29:11",
      referenceEn: "Jeremiah 29:11"
    },
    {
      korean: "소망의 하나님이 모든 기쁨과 평강을 믿음 안에서 너희에게 충만하게 하사 성령의 능력으로 소망이 넘치게 하시기를 원하노라",
      english: "May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit.",
      reference: "로마서 15:13",
      referenceEn: "Romans 15:13"
    },
    {
      korean: "믿음은 바라는 것들의 실상이요 보이지 않는 것들의 증거니",
      english: "Now faith is confidence in what we hope for and assurance about what we do not see.",
      reference: "히브리서 11:1",
      referenceEn: "Hebrews 11:1"
    },
    {
      korean: "오직 여호와를 앙망하는 자는 새 힘을 얻으리니 독수리가 날개치며 올라감 같을 것이요 달음박질하여도 곤비하지 아니하겠고 걸어가도 피곤하지 아니하리로다",
      english: "But those who hope in the LORD will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.",
      reference: "이사야 40:31",
      referenceEn: "Isaiah 40:31"
    },
    {
      korean: "여호와를 바라라 강하고 담대하며 여호와를 바라라",
      english: "Wait for the LORD; be strong and take heart and wait for the LORD.",
      reference: "시편 27:14",
      referenceEn: "Psalm 27:14"
    },
    {
      korean: "정녕히 마침이 있겠고 네 소망이 끊어지지 아니하리라",
      english: "There is surely a future hope for you, and your hope will not be cut off.",
      reference: "잠언 23:18",
      referenceEn: "Proverbs 23:18"
    },
    {
      korean: "우리가 소망으로 구원을 얻었으매 보이는 소망이 소망이 아니니 보는 것을 누가 바라리요",
      english: "For in this hope we were saved. But hope that is seen is no hope at all. Who hopes for what they already have?",
      reference: "로마서 8:24",
      referenceEn: "Romans 8:24"
    }
  ],
  wisdom: [
    {
      korean: "너는 마음을 다하여 여호와를 신뢰하고 네 명철을 의지하지 말라 너는 범사에 그를 인정하라 그리하면 네 길을 지도하시리라",
      english: "Trust in the LORD with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
      reference: "잠언 3:5-6",
      referenceEn: "Proverbs 3:5-6"
    },
    {
      korean: "너희 중에 누구든지 지혜가 부족하거든 모든 사람에게 후히 주시고 꾸짖지 아니하시는 하나님께 구하라 그리하면 주시리라",
      english: "If any of you lacks wisdom, you should ask God, who gives generously to all without finding fault, and it will be given to you.",
      reference: "야고보서 1:5",
      referenceEn: "James 1:5"
    },
    {
      korean: "여호와를 경외하는 것이 지혜의 근본이요 거룩하신 자를 아는 것이 명철이니라",
      english: "The fear of the LORD is the beginning of wisdom, and knowledge of the Holy One is understanding.",
      reference: "잠언 9:10",
      referenceEn: "Proverbs 9:10"
    },
    {
      korean: "대저 여호와는 지혜를 주시며 지식과 명철을 그 입에서 내심이여",
      english: "For the LORD gives wisdom; from his mouth come knowledge and understanding.",
      reference: "잠언 2:6",
      referenceEn: "Proverbs 2:6"
    },
    {
      korean: "지혜를 얻는 것이 금을 얻는 것보다 얼마나 나은고 명철을 얻는 것이 은을 얻는 것보다 나으니라",
      english: "How much better to get wisdom than gold, to get insight rather than silver!",
      reference: "잠언 16:16",
      referenceEn: "Proverbs 16:16"
    },
    {
      korean: "여호와를 경외하는 것이 지혜의 근본이라 그의 계명을 지키는 자는 다 훌륭한 지각을 가진 자이니 여호와를 찬양함이 영원히 계속되리로다",
      english: "The fear of the LORD is the beginning of wisdom; all who follow his precepts have good understanding. To him belongs eternal praise.",
      reference: "시편 111:10",
      referenceEn: "Psalm 111:10"
    }
  ],
  peace: [
    {
      korean: "그러면 모든 지각에 뛰어난 하나님의 평강이 그리스도 예수 안에서 너희 마음과 생각을 지키시리라",
      english: "And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.",
      reference: "빌립보서 4:7",
      referenceEn: "Philippians 4:7"
    },
    {
      korean: "평안을 너희에게 끼치노니 곧 나의 평안을 너희에게 주노라 내가 너희에게 주는 것은 세상이 주는 것과 같지 아니하니라 너희는 마음에 근심하지도 말고 두려워하지도 말라",
      english: "Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid.",
      reference: "요한복음 14:27",
      referenceEn: "John 14:27"
    },
    {
      korean: "주께서 심지가 견고한 자를 평강에 평강으로 지키시리니 이는 그가 주를 신뢰함이니이다",
      english: "You will keep in perfect peace those whose minds are steadfast, because they trust in you.",
      reference: "이사야 26:3",
      referenceEn: "Isaiah 26:3"
    },
    {
      korean: "여호와는 네게 복을 주시고 너를 지키시기를 원하며 여호와는 그의 얼굴을 네게 비추사 은혜 베푸시기를 원하며 여호와는 그 얼굴을 네게로 향하여 드사 평강 주시기를 원하노라",
      english: "The LORD bless you and keep you; the LORD make his face shine on you and be gracious to you; the LORD turn his face toward you and give you peace.",
      reference: "민수기 6:24-26",
      referenceEn: "Numbers 6:24-26"
    },
    {
      korean: "내가 평안히 눕고 자기도 하리니 나를 안전히 살게 하시는 이는 오직 여호와이시니이다",
      english: "In peace I will lie down and sleep, for you alone, LORD, make me dwell in safety.",
      reference: "시편 4:8",
      referenceEn: "Psalm 4:8"
    },
    {
      korean: "이것을 너희에게 이름은 너희로 내 안에서 평안을 누리게 하려 함이라 세상에서는 너희가 환난을 당하나 담대하라 내가 세상을 이기었노라",
      english: "I have told you these things, so that in me you may have peace. In this world you will have trouble. But take heart! I have overcome the world.",
      reference: "요한복음 16:33",
      referenceEn: "John 16:33"
    },
    {
      korean: "그리스도의 평강이 너희 마음을 주장하게 하라 너희는 평강을 위하여 한 몸으로 부르심을 받았나니 감사하는 자가 되라",
      english: "Let the peace of Christ rule in your hearts, since as members of one body you were called to peace. And be thankful.",
      reference: "골로새서 3:15",
      referenceEn: "Colossians 3:15"
    }
  ]
};
