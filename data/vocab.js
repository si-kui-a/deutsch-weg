// ============================================================
// vocab.js — 單字資料庫（唯一需要日常維護的檔案之一）
// Schema（每筆必填欄位）:
//   de: 德文原詞           zh: 繁中釋義
//   pos: 詞性 n/v/adj/adv/prep/conj/phrase
//   g: 名詞性別 "der"|"die"|"das"|null（非名詞填 null）
//   pl: 複數形（非名詞填 null）
//   ex: 德文例句           exZh: 例句繁中翻譯
//   mn: 記憶口訣/聯想（諧音、字源、圖像聯想擇一）
// 新增單字 = 複製一筆物件改內容即可，不需動任何程式碼。
// ============================================================
window.VOCAB = {
a1: [
{de:"das Haus",zh:"房子",pos:"n",g:"das",pl:"Häuser",ex:"Das Haus ist alt.",exZh:"這棟房子很舊。",mn:"英文 house 同源，發音幾乎相同"},
{de:"die Frau",zh:"女人；太太",pos:"n",g:"die",pl:"Frauen",ex:"Die Frau liest ein Buch.",exZh:"那位女士在讀書。",mn:"諧音「浮勞」→ 傳統上女性操勞浮於家務"},
{de:"der Mann",zh:"男人；先生",pos:"n",g:"der",pl:"Männer",ex:"Der Mann arbeitet viel.",exZh:"那位先生工作很多。",mn:"英文 man 同源，德文多一個 n"},
{de:"das Kind",zh:"小孩",pos:"n",g:"das",pl:"Kinder",ex:"Das Kind spielt im Garten.",exZh:"小孩在花園玩。",mn:"幼稚園 Kindergarten 就是「小孩的花園」"},
{de:"das Wasser",zh:"水",pos:"n",g:"das",pl:"—",ex:"Ich trinke Wasser.",exZh:"我喝水。",mn:"英文 water，w 開頭 s 音變 ss"},
{de:"das Brot",zh:"麵包",pos:"n",g:"das",pl:"Brote",ex:"Ich kaufe frisches Brot.",exZh:"我買新鮮麵包。",mn:"諧音「玻蘿的」→ 菠蘿麵包"},
{de:"gehen",zh:"走；去",pos:"v",g:null,pl:null,ex:"Ich gehe zur Schule.",exZh:"我去上學。",mn:"英文 go 同源；ge- 開頭想成「跨步」"},
{de:"kommen",zh:"來",pos:"v",g:null,pl:null,ex:"Kommst du morgen?",exZh:"你明天來嗎？",mn:"英文 come 同源"},
{de:"haben",zh:"有",pos:"v",g:null,pl:null,ex:"Ich habe eine Frage.",exZh:"我有一個問題。",mn:"英文 have 同源，b/v 互換"},
{de:"sein",zh:"是",pos:"v",g:null,pl:null,ex:"Ich bin müde.",exZh:"我很累。",mn:"最重要不規則動詞：bin/bist/ist/sind/seid/sind"},
{de:"gut",zh:"好的",pos:"adj",g:null,pl:null,ex:"Das Essen ist gut.",exZh:"食物很好吃。",mn:"英文 good 同源"},
{de:"groß",zh:"大的；高的",pos:"adj",g:null,pl:null,ex:"Berlin ist eine große Stadt.",exZh:"柏林是座大城市。",mn:"英文 gross（總的、大的）同源"},
{de:"klein",zh:"小的",pos:"adj",g:null,pl:null,ex:"Das Zimmer ist klein.",exZh:"房間很小。",mn:"諧音「克萊因」→ 克萊因瓶很小巧"},
{de:"heute",zh:"今天",pos:"adv",g:null,pl:null,ex:"Heute ist Montag.",exZh:"今天是星期一。",mn:"諧音「豪伊特」→ 今天很豪"},
{de:"die Zeit",zh:"時間",pos:"n",g:"die",pl:"Zeiten",ex:"Ich habe keine Zeit.",exZh:"我沒有時間。",mn:"諧音「猜特」→ 猜時間"},
{de:"der Freund",zh:"朋友；男友",pos:"n",g:"der",pl:"Freunde",ex:"Er ist mein bester Freund.",exZh:"他是我最好的朋友。",mn:"英文 friend 同源，i 變 eu"}
],
a2: [
{de:"die Erfahrung",zh:"經驗",pos:"n",g:"die",pl:"Erfahrungen",ex:"Ich habe viel Erfahrung mit Kindern.",exZh:"我在帶小孩方面很有經驗。",mn:"fahren(行駛)+er- → 走過的路就是經驗；-ung 結尾必為 die"},
{de:"die Umgebung",zh:"周遭環境",pos:"n",g:"die",pl:"Umgebungen",ex:"Die Umgebung ist sehr ruhig.",exZh:"周遭環境很安靜。",mn:"um(圍繞)+geben(給) → 圍繞著你的東西"},
{de:"verstehen",zh:"理解",pos:"v",g:null,pl:null,ex:"Verstehst du die Aufgabe?",exZh:"你懂這個作業嗎？",mn:"英文 understand 結構相同：ver(徹底)+stehen(站) → 站進去看透"},
{de:"erklären",zh:"解釋",pos:"v",g:null,pl:null,ex:"Kannst du das noch einmal erklären?",exZh:"你能再解釋一次嗎？",mn:"er-+klar(清楚) → 使變清楚"},
{de:"die Wohnung",zh:"公寓住所",pos:"n",g:"die",pl:"Wohnungen",ex:"Die Wohnung hat drei Zimmer.",exZh:"這間公寓有三個房間。",mn:"wohnen(居住)+ung；-ung 必 die"},
{de:"der Termin",zh:"預約；約定時間",pos:"n",g:"der",pl:"Termine",ex:"Ich habe morgen einen Termin beim Arzt.",exZh:"我明天有醫生的預約。",mn:"英文 terminal 同源 → 時間的節點；德國文化核心字"},
{de:"anrufen",zh:"打電話給",pos:"v",g:null,pl:null,ex:"Ich rufe dich heute Abend an.",exZh:"我今晚打給你。",mn:"可分離動詞：an(向)+rufen(呼喊) → 向某人喊 = 打電話"},
{de:"einladen",zh:"邀請",pos:"v",g:null,pl:null,ex:"Ich lade dich zum Essen ein.",exZh:"我請你吃飯。",mn:"ein(進)+laden(裝載) → 把人載進來 = 邀請"},
{de:"gesund",zh:"健康的",pos:"adj",g:null,pl:null,ex:"Obst ist gesund.",exZh:"水果很健康。",mn:"Gesundheit!(祝健康，打噴嚏時說)的形容詞形"},
{de:"wichtig",zh:"重要的",pos:"adj",g:null,pl:null,ex:"Das ist eine wichtige Frage.",exZh:"這是個重要的問題。",mn:"Gewicht(重量)同根 → 有重量的 = 重要的"},
{de:"die Möglichkeit",zh:"可能性；機會",pos:"n",g:"die",pl:"Möglichkeiten",ex:"Es gibt viele Möglichkeiten.",exZh:"有很多可能。",mn:"möglich(可能的)+keit；-keit 必 die"},
{de:"der Unterschied",zh:"差別",pos:"n",g:"der",pl:"Unterschiede",ex:"Was ist der Unterschied zwischen A und B?",exZh:"A 和 B 的差別是什麼？",mn:"unter(之間)+scheiden(分開) → 在中間切開"},
{de:"bekommen",zh:"得到（≠become）",pos:"v",g:null,pl:null,ex:"Ich bekomme ein Paket.",exZh:"我收到一個包裹。",mn:"經典假朋友：長得像 become，意思是 get"},
{de:"die Prüfung",zh:"考試",pos:"n",g:"die",pl:"Prüfungen",ex:"Ich bereite mich auf die Prüfung vor.",exZh:"我在準備考試。",mn:"prüfen(檢驗)+ung → 被檢驗的場合"},
{de:"leider",zh:"可惜；遺憾地",pos:"adv",g:null,pl:null,ex:"Leider habe ich keine Zeit.",exZh:"可惜我沒時間。",mn:"Leid(痛苦)衍生 → 帶著痛苦地說"},
{de:"die Gesundheit",zh:"健康",pos:"n",g:"die",pl:"—",ex:"Gesundheit ist das Wichtigste.",exZh:"健康最重要。",mn:"-heit 必 die；打噴嚏必聽字"}
],
b1: [
{de:"die Entscheidung",zh:"決定",pos:"n",g:"die",pl:"Entscheidungen",ex:"Das war eine schwierige Entscheidung.",exZh:"那是個困難的決定。",mn:"ent-(分離)+scheiden(切) → 一刀切下去 = 做決定"},
{de:"die Voraussetzung",zh:"前提條件",pos:"n",g:"die",pl:"Voraussetzungen",ex:"Deutschkenntnisse sind Voraussetzung für diesen Job.",exZh:"德語能力是這份工作的前提。",mn:"voraus(預先)+setzen(放置) → 預先擺好的東西"},
{de:"sich bewerben",zh:"申請（工作/學校）",pos:"v",g:null,pl:null,ex:"Ich bewerbe mich um die Stelle.",exZh:"我應徵這個職位。",mn:"be-+werben(招攬) → 反身：把自己推銷出去"},
{de:"die Bewerbung",zh:"求職申請",pos:"n",g:"die",pl:"Bewerbungen",ex:"Meine Bewerbung wurde angenommen.",exZh:"我的申請被接受了。",mn:"上一個字+ung → 求職信/申請文件包"},
{de:"ausgezeichnet",zh:"極出色的",pos:"adj",g:null,pl:null,ex:"Sie spricht ausgezeichnet Deutsch.",exZh:"她德語說得極好。",mn:"aus(出)+zeichnen(標記) → 被標記出來的 = 傑出"},
{de:"die Verantwortung",zh:"責任",pos:"n",g:"die",pl:"Verantwortungen",ex:"Er übernimmt die Verantwortung.",exZh:"他承擔責任。",mn:"ver-+antworten(回答) → 必須為此回答的東西 = 責任（英 responsibility 邏輯相同）"},
{de:"sich gewöhnen an",zh:"習慣於",pos:"v",g:null,pl:null,ex:"Ich habe mich an das Wetter gewöhnt.",exZh:"我已經習慣這裡的天氣了。",mn:"Gewohnheit(習慣)同根；固定搭配 an+Akk"},
{de:"die Meinung",zh:"意見",pos:"n",g:"die",pl:"Meinungen",ex:"Meiner Meinung nach ist das falsch.",exZh:"依我看那是錯的。",mn:"meinen(認為)+ung；Meiner Meinung nach = 萬用口說句型"},
{de:"vermeiden",zh:"避免",pos:"v",g:null,pl:null,ex:"Ich vermeide Zucker.",exZh:"我避免吃糖。",mn:"ver-+meiden(迴避) 加強版；諧音「非賣的」→ 避開不買"},
{de:"der Vorteil",zh:"優點",pos:"n",g:"der",pl:"Vorteile",ex:"Das hat viele Vorteile.",exZh:"這有很多優點。",mn:"vor(前)+Teil(部分) → 站在前面的部分；反義 Nachteil"},
{de:"der Nachteil",zh:"缺點",pos:"n",g:"der",pl:"Nachteile",ex:"Jede Lösung hat Nachteile.",exZh:"每個方案都有缺點。",mn:"nach(後)+Teil → 落在後面的部分"},
{de:"die Erfindung",zh:"發明",pos:"n",g:"die",pl:"Erfindungen",ex:"Das Internet ist eine wichtige Erfindung.",exZh:"網路是重要的發明。",mn:"er-+finden(找到) → 找出來的新東西"},
{de:"zuverlässig",zh:"可靠的",pos:"adj",g:null,pl:null,ex:"Sie ist eine zuverlässige Kollegin.",exZh:"她是可靠的同事。",mn:"sich verlassen auf(依靠)同根 → 可以靠上去的"},
{de:"die Umwelt",zh:"環境（生態）",pos:"n",g:"die",pl:"—",ex:"Wir müssen die Umwelt schützen.",exZh:"我們必須保護環境。",mn:"um(圍繞)+Welt(世界) → 圍繞我們的世界"},
{de:"anscheinend",zh:"看起來似乎",pos:"adv",g:null,pl:null,ex:"Anscheinend hat er es vergessen.",exZh:"看來他忘了。",mn:"scheinen(顯得)衍生 → 從表象判斷"},
{de:"die Fähigkeit",zh:"能力",pos:"n",g:"die",pl:"Fähigkeiten",ex:"Sie hat die Fähigkeit, Probleme schnell zu lösen.",exZh:"她有快速解決問題的能力。",mn:"fähig(有能力的)+keit；-keit 必 die"}
],
b2: [
{de:"die Herausforderung",zh:"挑戰",pos:"n",g:"die",pl:"Herausforderungen",ex:"Der neue Job ist eine große Herausforderung.",exZh:"新工作是個大挑戰。",mn:"heraus(出來)+fordern(要求) → 把你逼出舒適圈的要求"},
{de:"die Auswirkung",zh:"影響；後果",pos:"n",g:"die",pl:"Auswirkungen",ex:"Die Krise hat Auswirkungen auf die Wirtschaft.",exZh:"危機對經濟有影響。",mn:"aus+wirken(作用) → 作用擴散出去的結果"},
{de:"berücksichtigen",zh:"考慮到；顧及",pos:"v",g:null,pl:null,ex:"Wir müssen alle Faktoren berücksichtigen.",exZh:"我們必須考慮所有因素。",mn:"Rücksicht(顧慮)動詞化 → zurück+Sicht：回頭看一眼"},
{de:"die Voraussicht",zh:"遠見",pos:"n",g:"die",pl:"—",ex:"Mit etwas Voraussicht wäre das vermeidbar gewesen.",exZh:"稍有遠見這本可避免。",mn:"voraus(預先)+Sicht(視野) → 預先看到"},
{de:"gewährleisten",zh:"確保；保障",pos:"v",g:null,pl:null,ex:"Die Sicherheit muss gewährleistet werden.",exZh:"必須保障安全。",mn:"Gewähr(擔保)+leisten(履行)；正式文書高頻字"},
{de:"die Nachhaltigkeit",zh:"永續性",pos:"n",g:"die",pl:"—",ex:"Nachhaltigkeit ist ein zentrales Thema.",exZh:"永續是核心議題。",mn:"nachhalten(持續保持)+keit；德企 ESG 報告必見字"},
{de:"sich auseinandersetzen mit",zh:"深入探討；與…周旋",pos:"v",g:null,pl:null,ex:"Ich setze mich mit diesem Thema auseinander.",exZh:"我深入研究這個主題。",mn:"auseinander(分開)+setzen → 把問題拆開來坐下研究"},
{de:"die Einschätzung",zh:"評估；判斷",pos:"n",g:"die",pl:"Einschätzungen",ex:"Nach meiner Einschätzung ist das Risiko gering.",exZh:"依我評估風險很低。",mn:"schätzen(估價)衍生 → 給事情標個價"},
{de:"erheblich",zh:"顯著的；相當大的",pos:"adj",g:null,pl:null,ex:"Das ist ein erheblicher Unterschied.",exZh:"這是顯著的差異。",mn:"erheben(舉起)衍生 → 舉得起來的份量"},
{de:"die Maßnahme",zh:"措施",pos:"n",g:"die",pl:"Maßnahmen",ex:"Die Regierung ergreift neue Maßnahmen.",exZh:"政府採取新措施。",mn:"Maß(尺度)+nehmen(採取)；固定搭配 Maßnahmen ergreifen"},
{de:"beeinträchtigen",zh:"損害；妨礙",pos:"v",g:null,pl:null,ex:"Lärm beeinträchtigt die Konzentration.",exZh:"噪音妨礙專注。",mn:"eintragen 古義「侵入」→ be- 及物化：侵入並造成損害"},
{de:"die Wahrnehmung",zh:"感知；認知",pos:"n",g:"die",pl:"Wahrnehmungen",ex:"Jeder hat eine andere Wahrnehmung der Situation.",exZh:"每個人對情況的感知不同。",mn:"wahr(真實)+nehmen(取) → 把真實取進腦中"},
{de:"anspruchsvoll",zh:"要求高的；有深度的",pos:"adj",g:null,pl:null,ex:"Das ist eine anspruchsvolle Aufgabe.",exZh:"這是高難度的任務。",mn:"Anspruch(要求)+voll(滿) → 裝滿要求的"},
{de:"die Rahmenbedingung",zh:"框架條件",pos:"n",g:"die",pl:"Rahmenbedingungen",ex:"Die Rahmenbedingungen haben sich geändert.",exZh:"框架條件已改變。",mn:"Rahmen(框架)+Bedingung(條件)；商業/政策文本高頻"},
{de:"überzeugen",zh:"說服",pos:"v",g:null,pl:null,ex:"Ihre Argumente haben mich überzeugt.",exZh:"她的論點說服了我。",mn:"über(越過)+Zeuge(證人) → 用證據壓過對方"},
{de:"die Zuverlässigkeit",zh:"可靠性",pos:"n",g:"die",pl:"—",ex:"Zuverlässigkeit ist in Deutschland eine Kernkompetenz.",exZh:"在德國，可靠是核心能力。",mn:"B1 的 zuverlässig 名詞化；德式職場價值觀第一名"}
],
c1: [
{de:"die Diskrepanz",zh:"落差；不一致",pos:"n",g:"die",pl:"Diskrepanzen",ex:"Es besteht eine Diskrepanz zwischen Theorie und Praxis.",exZh:"理論與實務之間存在落差。",mn:"英文 discrepancy 同源；-anz 結尾必 die"},
{de:"implizieren",zh:"暗示；隱含",pos:"v",g:null,pl:null,ex:"Das impliziert eine grundlegende Änderung.",exZh:"這隱含著根本性的改變。",mn:"英文 imply 同源；學術寫作高頻"},
{de:"die Gewissheit",zh:"確定性",pos:"n",g:"die",pl:"Gewissheiten",ex:"Mit Gewissheit lässt sich das nicht sagen.",exZh:"這無法斷言。",mn:"gewiss(確定的)+heit；Gewissen(良心)同根 → 心裡確知"},
{de:"differenziert",zh:"細緻區分的；有層次的",pos:"adj",g:null,pl:null,ex:"Man muss das Thema differenziert betrachten.",exZh:"必須以有層次的方式看待這個議題。",mn:"differenzieren(微分/區分) → 德式思辨最愛的形容詞"},
{de:"die Ambivalenz",zh:"矛盾情感；兩面性",pos:"n",g:"die",pl:"Ambivalenzen",ex:"Seine Haltung ist von Ambivalenz geprägt.",exZh:"他的態度充滿矛盾。",mn:"ambi(雙)+valere(價值) → 兩種價值同時拉扯"},
{de:"gravierend",zh:"嚴重的；重大的",pos:"adj",g:null,pl:null,ex:"Das hat gravierende Folgen.",exZh:"這有嚴重後果。",mn:"拉丁 gravis(重) → gravity 同源：有重力的後果"},
{de:"die Erkenntnis",zh:"認知成果；洞見",pos:"n",g:"die",pl:"Erkenntnisse",ex:"Neue Erkenntnisse widerlegen diese These.",exZh:"新的研究成果推翻了這個論點。",mn:"erkennen(認識到)+nis；學術報告必用：neue Erkenntnisse"},
{de:"plausibel",zh:"有說服力的；合理的",pos:"adj",g:null,pl:null,ex:"Diese Erklärung klingt plausibel.",exZh:"這個解釋聽起來合理。",mn:"英文 plausible 同源"},
{de:"die Befangenheit",zh:"偏見；不中立",pos:"n",g:"die",pl:"—",ex:"Der Richter wurde wegen Befangenheit abgelehnt.",exZh:"法官因不中立被迴避。",mn:"befangen(被困住的) → 被自己立場困住"},
{de:"konsolidieren",zh:"鞏固；整合",pos:"v",g:null,pl:null,ex:"Das Unternehmen konsolidiert seine Marktposition.",exZh:"公司鞏固其市場地位。",mn:"英文 consolidate 同源；財報高頻字"},
{de:"die Tragweite",zh:"影響範圍；深遠程度",pos:"n",g:"die",pl:"—",ex:"Die Tragweite dieser Entscheidung ist enorm.",exZh:"這個決定影響深遠。",mn:"tragen(承載)+Weite(廣度) → 能承載多遠"},
{de:"stringent",zh:"嚴謹的；邏輯一貫的",pos:"adj",g:null,pl:null,ex:"Die Argumentation ist stringent.",exZh:"論證邏輯嚴謹。",mn:"英文 stringent 同形；學術評語常見"},
{de:"die Abwägung",zh:"權衡",pos:"n",g:"die",pl:"Abwägungen",ex:"Nach sorgfältiger Abwägung aller Argumente...",exZh:"在仔細權衡所有論點之後……",mn:"ab+wägen(秤重) → 放上天平秤"},
{de:"etw. in Kauf nehmen",zh:"（為換取某物而）接受代價",pos:"phrase",g:null,pl:null,ex:"Er nimmt lange Arbeitszeiten in Kauf.",exZh:"他接受長工時作為代價。",mn:"字面「一併買下」→ 買想要的東西時連缺點一起買"},
{de:"die Weichenstellung",zh:"關鍵抉擇；方向設定",pos:"n",g:"die",pl:"Weichenstellungen",ex:"Diese Reform ist eine wichtige Weichenstellung.",exZh:"這項改革是重要的方向設定。",mn:"Weiche(鐵路道岔)+stellen → 扳道岔決定火車往哪開"},
{de:"unabdingbar",zh:"不可或缺的",pos:"adj",g:null,pl:null,ex:"Vertrauen ist unabdingbar für Zusammenarbeit.",exZh:"信任是合作不可或缺的。",mn:"un+ab+dingen(談判掉) → 談判也去不掉的"}
],
c2: [
{de:"die Unwägbarkeit",zh:"不可預測因素",pos:"n",g:"die",pl:"Unwägbarkeiten",ex:"Das Projekt birgt viele Unwägbarkeiten.",exZh:"這個專案潛藏許多不可預測因素。",mn:"un+wägen(秤) → 秤不出重量的東西"},
{de:"der Spagat",zh:"（比喻）兩難間的平衡",pos:"n",g:"der",pl:"Spagate",ex:"Sie meistert den Spagat zwischen Beruf und Familie.",exZh:"她在事業與家庭間取得平衡。",mn:"原意「劈腿（體操）」→ 雙腳撐在兩端"},
{de:"etw. gerecht werden",zh:"符合（要求/期待）",pos:"phrase",g:null,pl:null,ex:"Der Film wird dem Roman nicht gerecht.",exZh:"電影沒有拍出原著的水準。",mn:"gerecht(公正) + Dativ → 對某物做到公道"},
{de:"die Gratwanderung",zh:"走鋼索般的處境",pos:"n",g:"die",pl:"Gratwanderungen",ex:"Diplomatie ist oft eine Gratwanderung.",exZh:"外交常是走鋼索。",mn:"Grat(山脊)+Wanderung(健行) → 在山脊上行走，兩邊都是懸崖"},
{de:"obsolet",zh:"過時的；已廢棄的",pos:"adj",g:null,pl:null,ex:"Diese Technologie ist längst obsolet.",exZh:"這項技術早已過時。",mn:"英文 obsolete 同源，去掉尾 e"},
{de:"die Deutungshoheit",zh:"詮釋主導權",pos:"n",g:"die",pl:"—",ex:"Beide Parteien kämpfen um die Deutungshoheit.",exZh:"雙方爭奪話語詮釋權。",mn:"Deutung(詮釋)+Hoheit(主權) → 誰有權定義事件意義"},
{de:"sich anbahnen",zh:"（事態）逐漸成形",pos:"v",g:null,pl:null,ex:"Eine Lösung bahnt sich an.",exZh:"解決方案正逐漸成形。",mn:"Bahn(軌道) → 事情開始鋪軌"},
{de:"das Unbehagen",zh:"隱隱的不安",pos:"n",g:"das",pl:"—",ex:"Ein leises Unbehagen begleitete die Verhandlung.",exZh:"談判過程伴隨著隱隱不安。",mn:"un+behagen(舒適) → 不舒適感；文學高頻"},
{de:"stichhaltig",zh:"站得住腳的",pos:"adj",g:null,pl:null,ex:"Das Argument ist nicht stichhaltig.",exZh:"這論點站不住腳。",mn:"Stich(刺)+haltig → 經得起刀刺檢驗的（源自驗幣）"},
{de:"die Zäsur",zh:"歷史性斷點；轉捩點",pos:"n",g:"die",pl:"Zäsuren",ex:"Der Mauerfall war eine Zäsur der deutschen Geschichte.",exZh:"柏林圍牆倒塌是德國史的斷代點。",mn:"拉丁 caesura(切割)；凱撒 Caesar 同根 → 一刀切開時代"},
{de:"ausloten",zh:"探測（可能性的）深度",pos:"v",g:null,pl:null,ex:"Wir müssen alle Optionen ausloten.",exZh:"我們必須摸清所有選項的底。",mn:"Lot(鉛錘) → 把鉛錘放到水底量深度"},
{de:"das Sinnbild",zh:"象徵",pos:"n",g:"das",pl:"Sinnbilder",ex:"Die Brücke ist ein Sinnbild der Versöhnung.",exZh:"這座橋是和解的象徵。",mn:"Sinn(意義)+Bild(圖像) → 承載意義的圖像"},
{de:"unumwunden",zh:"直言不諱地",pos:"adv",g:null,pl:null,ex:"Sie gab unumwunden zu, sich geirrt zu haben.",exZh:"她坦率承認自己錯了。",mn:"un+umwinden(纏繞) → 不繞圈子"},
{de:"die Gemengelage",zh:"多重因素交織的局面",pos:"n",g:"die",pl:"Gemengelagen",ex:"Eine komplexe Gemengelage aus Interessen und Ängsten.",exZh:"利益與恐懼交織的複雜局面。",mn:"mengen(混合)+Lage(局勢) → 攪在一起的局"},
{de:"beileibe nicht",zh:"絕非；遠遠不是",pos:"phrase",g:null,pl:null,ex:"Das ist beileibe nicht alles.",exZh:"這絕不是全部。",mn:"bei Leibe(以身體發誓)古語殘留 → 以性命擔保：不是"},
{de:"die Akribie",zh:"一絲不苟",pos:"n",g:"die",pl:"—",ex:"Sie arbeitet mit größter Akribie.",exZh:"她工作極度一絲不苟。",mn:"希臘 akribeia(精確)；形容德式工作態度的終極詞"}
]
};
