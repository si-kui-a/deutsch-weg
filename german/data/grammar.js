// ============================================================
// grammar.js — 文法資料庫
// Schema:
//   id: 唯一識別         title: 主題名（繁中＋德文術語）
//   core: 一句話核心概念（先講人話）
//   mn: 口訣（Eselsbrücke）
//   table: {head:[...], rows:[[...]]} 或 null
//   pts: 條列重點（含例句，例句用 ▸ 開頭）
// 新增主題 = 複製一筆物件。表格欄位可自由增減。
// ============================================================
window.GRAMMAR = {
a1: [
{id:"a1-artikel",title:"定冠詞與名詞性別 der / die / das",
core:"德文每個名詞都有性別，性別決定冠詞。性別大多無邏輯，因此「單字+冠詞一起背」是唯一正解。",
mn:"口訣：der 男藍、die 女紅、das 中綠 —— 本站所有名詞都照這三色標示，看顏色記性別。",
table:{head:["性別","冠詞","例","顏色記憶"],rows:[
["陽性 maskulin","der","der Mann, der Tisch","藍"],
["陰性 feminin","die","die Frau, die Zeit","紅"],
["中性 neutrum","das","das Kind, das Haus","綠"],
["複數（全部）","die","die Kinder","紅（複數一律 die）"]]},
pts:["可靠字尾規則：-ung / -heit / -keit / -schaft / -ion → 必為 die","-chen / -lein（小化詞）→ 必為 das，例：das Mädchen","▸ Das Mädchen liest die Zeitung. 女孩在讀報紙。"]},
{id:"a1-konjugation",title:"現在式動詞變位 Präsens",
core:"動詞去掉 -en 得到詞幹，再依人稱加字尾。全德文 90% 動詞照這張表走。",
mn:"口訣：e-st-t，en-t-en（ich-du-er / wir-ihr-sie 的字尾順序）",
table:{head:["人稱","字尾","machen（做）","sein（是，不規則）"],rows:[
["ich 我","-e","mache","bin"],
["du 你","-st","machst","bist"],
["er/sie/es 他/她/它","-t","macht","ist"],
["wir 我們","-en","machen","sind"],
["ihr 你們","-t","macht","seid"],
["sie/Sie 他們/您","-en","machen","sind"]]},
pts:["sein / haben / werden 三大不規則動詞必須整組硬背，是後面所有時態的地基","▸ Ich mache Hausaufgaben. 我在做作業。"]},
{id:"a1-v2",title:"動詞第二位規則 V2-Stellung",
core:"德文直述句的動詞永遠站在「第二個位置」。第一位可以是主詞、時間、地點——但動詞死守第二位。",
mn:"口訣：動詞是句子的心臟，永遠在第二拍。",
table:{head:["第一位","第二位（動詞）","其餘"],rows:[
["Ich","gehe","heute ins Kino."],
["Heute","gehe","ich ins Kino."],
["Ins Kino","gehe","ich heute."]]},
pts:["把時間放句首是德語母語者的高頻習慣，主詞退到動詞後面","是非問句：動詞放第一位 ▸ Gehst du ins Kino?","▸ Heute lerne ich Deutsch. 今天我學德文。"]},
{id:"a1-akkusativ",title:"直接受格 Akkusativ",
core:"動詞的直接對象（動作落在誰身上）用 Akkusativ。只有陽性冠詞會變：der → den。",
mn:"口訣：受格只變男（der→den），女中複數原地不動。",
table:{head:["性別","主格 Nominativ","受格 Akkusativ"],rows:[
["陽","der / ein","den / einen"],
["陰","die / eine","die / eine"],
["中","das / ein","das / ein"],
["複","die","die"]]},
pts:["高頻受格動詞：haben, kaufen, sehen, brauchen, es gibt","▸ Ich sehe den Mann. 我看見那個男人。（der→den）"]}
],
a2: [
{id:"a2-dativ",title:"間接受格 Dativ",
core:"「給誰、對誰、在哪」用 Dativ。三個性別的冠詞全變，複數名詞還要加 -n。",
mn:"口訣：dem-der-dem-den(+n) —— 男女中複，複數名詞尾巴掛 n。",
table:{head:["性別","Dativ 定冠詞","例"],rows:[
["陽","dem","mit dem Mann"],
["陰","der","mit der Frau"],
["中","dem","mit dem Kind"],
["複","den +n","mit den Kindern"]]},
pts:["永遠接 Dativ 的介系詞口訣：aus-bei-mit-nach-seit-von-zu（唱成一串背）","高頻 Dativ 動詞：helfen, danken, gefallen, gehören","▸ Ich helfe dir. 我幫你。（helfen 接 Dativ）"]},
{id:"a2-trennbar",title:"可分離動詞 Trennbare Verben",
core:"an|rufen 這類動詞，變位時前綴會被「甩到句尾」。前綴帶重音＝可分離。",
mn:"口訣：前綴像回力鏢——句子開始時甩出去，句尾才回來。",
table:{head:["原形","現在式句子","結構"],rows:[
["anrufen 打電話","Ich rufe dich an.","rufe...an"],
["einkaufen 購物","Sie kauft heute ein.","kauft...ein"],
["aufstehen 起床","Er steht um 7 Uhr auf.","steht...auf"]]},
pts:["不可分離前綴（無重音）：be- / er- / ver- / ent- / ge- / zer- / emp-","Perfekt 時 ge 夾中間：angerufen（an-ge-rufen）","▸ Der Zug fährt um 8 Uhr ab. 火車八點出發。"]},
{id:"a2-modal",title:"情態動詞 Modalverben",
core:"können/müssen/wollen 等六個動詞表達「能、必須、想」。它們佔動詞第二位，把原形動詞踢到句尾。",
mn:"口訣：情態動詞坐第二位，本動詞罰站句尾。",
table:{head:["情態動詞","意思","ich/er 變位"],rows:[
["können","能夠","kann"],
["müssen","必須","muss"],
["wollen","想要（強）","will"],
["möchten","想要（禮貌）","möchte"],
["dürfen","可以（許可）","darf"],
["sollen","應該","soll"]]},
pts:["ich 和 er/sie/es 變位相同且無字尾——情態動詞獨有特徵","▸ Ich muss morgen früh aufstehen. 我明天必須早起。（aufstehen 原形置尾）"]},
{id:"a2-perfekt",title:"現在完成式 Perfekt",
core:"口語過去用 Perfekt：haben/sein + 過去分詞(句尾)。移動類與狀態變化動詞用 sein。",
mn:"口訣：位置會移、狀態會變 → 用 sein；其他一律 haben。",
table:{head:["類型","助動詞","例"],rows:[
["一般動詞","haben","Ich habe gegessen."],
["移動 (gehen, fahren)","sein","Ich bin gefahren."],
["狀態變化 (aufwachen)","sein","Er ist aufgewacht."],
["例外雙雄","sein","bleiben → geblieben, sein → gewesen"]]},
pts:["規則分詞：ge+詞幹+t（gemacht）；不規則：ge+變幹+en（gesehen）","-ieren 動詞不加 ge：studiert, telefoniert","▸ Ich habe gestern Deutsch gelernt. 我昨天學了德文。"]}
],
b1: [
{id:"b1-nebensatz",title:"從句與動詞置尾 Nebensätze (weil / dass / wenn)",
core:"weil、dass、wenn 開頭的從句，動詞被踢到最後一位。這是德語語序的分水嶺，練熟就脫離 A 級。",
mn:"口訣：連接詞是磁鐵，把動詞吸到句子最尾端。",
table:{head:["連接詞","意思","例"],rows:[
["weil","因為","..., weil ich müde bin."],
["dass","（引導受詞句）","Ich glaube, dass er kommt."],
["wenn","如果/每當","Wenn es regnet, bleibe ich zu Hause."],
["obwohl","雖然","..., obwohl es teuer ist."]]},
pts:["從句在前，主句動詞緊跟逗號（動詞碰動詞）：Wenn es regnet, bleibe ich...","口語陷阱：denn(因為)是並列連接詞，動詞不置尾——weil 才置尾","▸ Ich lerne Deutsch, weil ich in Deutschland arbeiten will. 我學德文因為我想在德國工作。"]},
{id:"b1-adjektiv",title:"形容詞字尾變化 Adjektivdeklination",
core:"形容詞放名詞前面就要加字尾。原理只有一條：「性別訊號必須出現一次」——冠詞給了訊號，形容詞就弱化；冠詞沒給，形容詞補上。",
mn:"口訣：定冠詞後只有 -e / -en 兩種；訊號有人給，形容詞躺平。",
table:{head:["情境","陽","陰","中","複"],rows:[
["der/die/das 之後 (Nom)","-e","-e","-e","-en"],
["ein/eine 之後 (Nom)","-er","-e","-es","-en"],
["無冠詞 (Nom)","-er","-e","-es","-e"]]},
pts:["實戰策略：先背熟「定冠詞+Nom/Akk」高頻組合，其餘遇到再查——溝通不會因字尾錯而中斷","▸ Das ist ein guter Plan. 這是個好計畫。（ein 沒給陽性訊號，-er 補上）"]},
{id:"b1-reflexiv",title:"反身動詞 Reflexive Verben",
core:"動作回到自己身上時用反身代名詞 sich。很多德文動詞「必須」反身，中文沒有對應，只能當固定搭配背。",
mn:"口訣：mich-dich-sich-uns-euch-sich，只有第三人稱永遠 sich。",
table:{head:["高頻反身動詞","搭配","例"],rows:[
["sich freuen auf","+Akk 期待","Ich freue mich auf das Wochenende."],
["sich interessieren für","+Akk 感興趣","Er interessiert sich für Musik."],
["sich gewöhnen an","+Akk 習慣","Wir gewöhnen uns an das Klima."],
["sich bewerben um","+Akk 應徵","Sie bewirbt sich um die Stelle."]]},
pts:["反身動詞+介系詞+格位 = 三位一體，永遠整組背","▸ Ich interessiere mich für Datenanalyse. 我對數據分析感興趣。"]},
{id:"b1-praeteritum",title:"過去簡單式 Präteritum",
core:"書面敘事用 Präteritum。口語只需要 war / hatte / 情態動詞的過去式——這三組是日常剛需，其他動詞閱讀看懂即可。",
mn:"口訣：口語過去三劍客：war, hatte, konnte——先背這三組就能活。",
table:{head:["原形","Präteritum (ich/er)","例"],rows:[
["sein","war","Ich war gestern krank."],
["haben","hatte","Er hatte keine Zeit."],
["können","konnte","Wir konnten nicht kommen."],
["müssen","musste","Sie musste arbeiten."]]},
pts:["規則動詞：詞幹+te（machte）；不規則變母音（gehen→ging, kommen→kam）","▸ Als Kind wollte ich Fotografin werden. 小時候我想當攝影師。"]}
],
b2: [
{id:"b2-passiv",title:"被動語態 Passiv",
core:"焦點放在「事情被做」而非「誰做」。過程被動 werden+P.II，狀態被動 sein+P.II。學術與職場書寫的主力句型。",
mn:"口訣：werden 在動、sein 已定——werden 是進行中的被動，sein 是完成後的狀態。",
table:{head:["類型","結構","例"],rows:[
["過程被動 Vorgangspassiv","werden + P.II","Das Haus wird gebaut.（正在被蓋）"],
["狀態被動 Zustandspassiv","sein + P.II","Das Haus ist gebaut.（已蓋好的狀態）"],
["過去被動","wurde + P.II","Die Regel wurde geändert."],
["情態+被動","muss + P.II + werden","Das muss geprüft werden."]]},
pts:["行為者用 von+Dativ 帶出：Der Bericht wurde von ihr geschrieben.","無人稱被動 Es wird...：Es wird viel diskutiert.（大家討論得很兇）","▸ Die Daten werden automatisch gesichert. 資料會被自動備份。"]},
{id:"b2-konjunktiv2",title:"虛擬二式 Konjunktiv II",
core:"表達「與事實相反」與「禮貌」。日常 90% 場景只需要 würde+原形 和 wäre/hätte/könnte。",
mn:"口訣：würde 打天下，wäre/hätte/könnte 三兄弟例外自己變。",
table:{head:["功能","結構","例"],rows:[
["禮貌請求","könnten/würden Sie...","Könnten Sie mir helfen?"],
["假設(現在)","wäre / hätte / würde","Wenn ich Zeit hätte, würde ich reisen."],
["假設(過去)","wäre/hätte + P.II","Ich hätte das anders gemacht."],
["建議","an deiner Stelle würde ich...","An deiner Stelle würde ich warten."]]},
pts:["職場信件幾乎每句都有 Konjunktiv II——это 是禮貌的語法化","▸ Ich hätte eine Frage. 我想請教一個問題。（比 Ich habe 禮貌一級）"]},
{id:"b2-relativ",title:"關係子句 Relativsätze",
core:"用關係代名詞把兩句黏成一句。關係代名詞的性別/數看先行詞，格位看它在子句裡的角色。動詞照樣置尾。",
mn:"口訣：性別看前面，格位看裡面，動詞丟後面。",
table:{head:["格位","陽","陰","中","複"],rows:[
["Nom","der","die","das","die"],
["Akk","den","die","das","die"],
["Dativ","dem","der","dem","denen"],
["Genitiv","dessen","deren","dessen","deren"]]},
pts:["介系詞跟著進子句：Der Kollege, mit dem ich arbeite, ...","▸ Das ist die App, die ich entwickelt habe. 這是我開發的 App。（App=die 陰性；在子句中是受詞 Akk→die）"]},
{id:"b2-nominal",title:"名詞化 Nominalisierung",
core:"把動詞/形容詞變名詞，讓句子更緊湊正式。德文報告與公文的骨架，讀懂它才能讀懂德國職場文件。",
mn:"口訣：動詞戴上大寫帽+das，就升級成名詞。",
table:{head:["原形","名詞化","例"],rows:[
["lesen 讀","das Lesen","Das Lesen deutscher Texte fällt mir leichter."],
["entscheiden","die Entscheidung","nach der Entscheidung = nachdem entschieden wurde"],
["ankommen","die Ankunft","bei der Ankunft = als ich ankam"]]},
pts:["介系詞+名詞化 可替換整個從句：vor der Abreise = bevor ich abreise","閱讀策略：看到名詞化先還原成動詞句，理解速度翻倍","▸ Beim Lernen höre ich Lofi-Musik. 學習時我聽 Lofi。"]}
],
c1: [
{id:"c1-konjunktiv1",title:"虛擬一式與間接引語 Konjunktiv I / Indirekte Rede",
core:"新聞與學術報告轉述他人說法時用 Konjunktiv I，表示「這是他說的，我不背書」。讀懂德媒的鑰匙。",
mn:"口訣：K1 = 記者的免責聲明。看到 sei / habe，就知道是轉述不是事實陳述。",
table:{head:["直接引語","間接引語 (K I)"],rows:[
["Er sagt: „Ich bin krank.“","Er sagt, er sei krank."],
["Sie sagt: „Ich habe keine Zeit.“","Sie sagt, sie habe keine Zeit."],
["„Wir kommen morgen.“","Sie sagten, sie kämen morgen.（K I 與直陳式同形時退用 K II）"]]},
pts:["實務上只有第三人稱單數常用：sei, habe, könne, müsse, werde","寫作加分：報告中轉述文獻觀點用 K I，立刻有學術腔","▸ Die Studie besagt, der Effekt sei signifikant. 該研究稱效果顯著。"]},
{id:"c1-partizip",title:"分詞結構 Partizipialkonstruktionen",
core:"用分詞片語壓縮關係子句，是學術德語的密度來源。die steigenden Preise = die Preise, die steigen。",
mn:"口訣：P.I 主動進行（-end），P.II 被動完成——分詞是折疊起來的子句。",
table:{head:["結構","展開後","翻譯"],rows:[
["die steigenden Kosten","die Kosten, die steigen","不斷上升的成本"],
["das gelöste Problem","das Problem, das gelöst wurde","已解決的問題"],
["die zu klärende Frage","die Frage, die geklärt werden muss","有待釐清的問題"]]},
pts:["zu+P.I（Gerundivum）＝「必須被…的」：die zu zahlende Summe 應付金額","閱讀策略：分詞前的一長串修飾語先跳過，抓到名詞後回頭展開","▸ die von uns entwickelte App 我們開發的 App"]},
{id:"c1-stil",title:"名詞風格 vs 動詞風格 Nominalstil / Verbalstil",
core:"同一句話可以寫成公文腔（名詞堆疊）或口語腔（動詞驅動）。C1 的核心能力是在兩種文體間自由切換。",
mn:"口訣：對機構說名詞，對人說動詞。",
table:{head:["Nominalstil（正式）","Verbalstil（自然）"],rows:[
["die Durchführung einer Analyse","eine Analyse durchführen"],
["unter Berücksichtigung von X","wenn man X berücksichtigt"],
["nach Abschluss des Projekts","nachdem das Projekt abgeschlossen ist"]]},
pts:["求職信策略：動機段用 Verbalstil 顯真誠，能力段用 Nominalstil 顯專業","▸ Zur Gewährleistung der Datensicherheit... 為保障資料安全……（典型公文開頭）"]},
{id:"c1-partikeln",title:"情態助詞 Modalpartikeln (doch, mal, ja, eben)",
core:"doch/mal/ja 這些小字不改變句意，只改變語氣——它們是母語者與教科書德語的分界線。",
mn:"口訣：小字無實義，全是弦外之音。背例句不背定義。",
table:{head:["助詞","語氣","例"],rows:[
["mal","軟化請求","Komm mal her. 你過來一下嘛。"],
["doch","不耐/鼓勵","Das weißt du doch! 這你明明知道啊！"],
["ja","「你我都知道」","Es ist ja schon spät. 反正也晚了。"],
["eben/halt","無奈接受","Das ist eben so. 就是這樣，沒辦法。"]]},
pts:["學法：整句連語境背，禁止單字翻譯","口說加分最快的一類詞——用對一個 doch，母語感立刻+30%","▸ Dann machen wir das eben morgen. 那就明天再弄吧（聳肩）。"]}
],
c2: [
{id:"c2-fvg",title:"功能動詞結構 Funktionsverbgefüge",
core:"「動詞+名詞」固定搭配取代簡單動詞：eine Entscheidung treffen ≈ entscheiden。公文、法律、新聞的標準配備。",
mn:"口訣：動詞退位當工具，名詞才是主角。",
table:{head:["FVG","≈ 簡單動詞","語域"],rows:[
["eine Entscheidung treffen","entscheiden","正式"],
["zur Verfügung stehen","verfügbar sein","公文"],
["in Anspruch nehmen","beanspruchen","法律/商務"],
["Kritik üben an","kritisieren","新聞"],
["in Kraft treten","gültig werden","法律"]]},
pts:["搭配動詞不可換：treffen 一場決定、üben 一場批評——換了就是錯","▸ Die neue Regelung tritt am 1. Januar in Kraft. 新規定一月一日生效。"]},
{id:"c2-idiome",title:"慣用語與搭配詞 Idiome & Kollokationen",
core:"C2 的差距不在文法而在搭配：知道 starker Kaffee 不能說 kräftiger Kaffee。慣用語則是文化的壓縮檔。",
mn:"口訣：搭配詞問語料庫，不問邏輯。",
table:{head:["慣用語","字面","實義"],rows:[
["die Daumen drücken","壓拇指","祝好運"],
["ins kalte Wasser springen","跳進冷水","硬著頭皮上"],
["um den heißen Brei reden","繞著熱粥講話","講話繞圈子"],
["zwei Fliegen mit einer Klappe","一拍打倆蒼蠅","一石二鳥"]]},
pts:["學法：一週 3 個，主動用在寫作/口說中各一次才算「擁有」","▸ Ich drücke dir die Daumen für die Prüfung! 考試祝你好運！"]},
{id:"c2-satzklammer",title:"句框與框外置放 Satzklammer & Ausklammerung",
core:"德文句子由動詞兩部分撐開一個「框」，資訊塞在框內。C2 玩的是刻意破框（Ausklammerung）製造強調與節奏。",
mn:"口訣：框內是規矩，破框是風格——先能守框，才配破框。",
table:{head:["技巧","例","效果"],rows:[
["標準句框","Ich habe das Buch gestern gelesen.","中性"],
["框外置放","Ich habe gestern das Buch gelesen — mit großem Vergnügen.","補充強調"],
["前場佔位","Gelesen habe ich es. Verstanden nicht.","對比修辭"]]},
pts:["書面體中比較結構常出框：...schneller gearbeitet als je zuvor","▸ Er hat mehr erreicht, als alle erwartet hatten. 他的成就超出所有人預期。"]},
{id:"c2-register",title:"語域與文體切換 Register",
core:"同一訊息在 Amt（公家機關）、職場、朋友圈需要三種說法。C2 = 對每個場合自動切換正確語域。",
mn:"口訣：對 Amt 用被動與名詞，對同事用 Konjunktiv，對朋友用 Partikeln。",
table:{head:["語域","「我需要這份文件」","特徵"],rows:[
["公文","Um Zusendung des Dokuments wird gebeten.","無人稱被動"],
["職場","Könnten Sie mir das Dokument zukommen lassen?","K II + lassen"],
["朋友","Schick mir das mal rüber!","命令式 + mal"]]},
pts:["最常見的 C1→C2 失分：對朋友太正式（生疏感）、對機關太口語（不專業）","▸ Anbei erhalten Sie die gewünschten Unterlagen. 隨函附上您所需文件。（商務信固定句）"]}
]
};
