/*מטריצת דגמים*/
var mat = new Array(15);
mat[0] = new Array("rgb(243, 10, 153)", "rgb(153, 11, 202)", "rgb(255, 250, 0)", "rgb(0, 38, 255)" );
mat[1] = new Array("rgb(243, 10, 153)", "rgb(255, 106, 0)", "rgb(0, 255, 33)", "rgb(153, 11, 202)" );
mat[2] = new Array("rgb(153, 11, 202)", "rgb(255, 0, 0)", "rgb(0, 38, 255)", "rgb(0, 169, 255)" );
mat[3] = new Array("rgb(0, 255, 33)", "rgb(0, 169, 255)", "rgb(255, 0, 0)", "rgb(255, 106, 0)" );
mat[4] = new Array("rgb(0, 38, 255)", "rgb(243, 10, 153)", "rgb(0, 169, 255)", "rgb(255, 250, 0)" );
mat[5] = new Array("rgb(0, 255, 33)", "rgb(243, 10, 153)", "rgb(0, 38, 255)", "rgb(255, 0, 0)" );
mat[6] = new Array("rgb(153, 11, 202)", "rgb(255, 0, 0)", "rgb(255, 250, 0)", "rgb(255, 106, 0)" );
mat[7] = new Array("rgb(255, 250, 0)", "rgb(0, 169, 255)", "rgb(153, 11, 202)", "rgb(0, 255, 33)" );
mat[8] = new Array("rgb(255, 0, 0)", "rgb(255, 106, 0)", "rgb(243, 10, 153)", "rgb(153, 11, 202)" );
mat[9] = new Array("rgb(255, 106, 0)", "rgb(0, 255, 33)", "rgb(243, 10, 153)", "rgb(0, 169, 255)" );
mat[10] = new Array("rgb(153, 11, 202)", "rgb(0, 38, 255)", "rgb(0, 169, 255)", "rgb(255, 250, 0)" );
mat[11] = new Array("rgb(255, 250, 0)", "rgb(0, 169, 255)", "rgb(0, 38, 255)", "rgb(255, 106, 0)" );
mat[12] = new Array("rgb(0, 169, 255)", "rgb(153, 11, 202)", "rgb(0, 255, 33)", "rgb(243, 10, 153)" );
mat[13] = new Array("rgb(0, 38, 255)", "rgb(255, 0, 0)", "rgb(153, 11, 202)", "rgb(243, 10, 153)" );
mat[14] = new Array("rgb(255, 106, 0)", "rgb(255, 250, 0)", "rgb(0, 38, 255)", "rgb(0, 255, 33)" );
/*הדגם שהוגרל לסבב זה*/
var gameIndex = -1;
/*הדיב שנבחר לצביעה*/
var nameFify = "colo1r1";
/*מספר ניסיון ניחוש נוכחי*/
var numTry = 1;
var thisColor = 1;
//מחלקת מנויים
class Memder{
    constructor(name, code) {
        this.name = name;
        this.code = code;
    }
    show() {
        return 'name: ' + this.name + ' code: ' + this.code;
    }
}

//אתחול הלוקל סטורג
if (localStorage.members == undefined) {
    var m = [];
    for (var j = 0; j < 100; j++)
        m[j] = new Memder('', '').show();
    localStorage.setItem("members", JSON.stringify(m));
    localStorage.setItem("i", '0');
}
if (localStorage.level == undefined)
    localStorage.setItem('level', '1');
if (localStorage.prevIndexA == undefined)
    localStorage.prevIndexA = '0';
if (localStorage.prevIndexA == undefined)
    localStorage.prevIndexA = '0';
if (localStorage.recordA == undefined)
    localStorage.recordA = '0';
if (localStorage.recordB == undefined)
    localStorage.recordB = '0';

//פעולת כניסה לדף
function Build() {
    //בניית לוח המשחק
    for (var i = 1; i <= 10; i++) {
        document.getElementById("board").innerHTML += "<div id='d" + i + "' class='containDi' style='visibility:hidden'><div id='result" + i + "' class='containResult'></div><button id='button" + i + "' onclick='result()' class='v'></button><div id='try" + i + "' class='containTry'></div></div>";
        for (var j = 1; j <= 4; j++) {
            document.getElementById("try" + i).innerHTML += "<div id='colo" + i + "r" + j + "' onclick='fify()' class='coloirj'></div>";
            document.getElementById("result" + i).innerHTML += "<div id='an" + i + "s" + j + "' class='anisj'></div>";
        }
    }
    //רמה א
    if (localStorage.level == '1') {
        //משחק חדש
        if (localStorage.prevGameA == 'null' || localStorage.prevGameA == undefined) {
            document.getElementById("d1").style.visibility = "visible";
            gameIndex = Math.round((Math.random() * (mat.length - 1)));
        }
        //פתיחת משחק קודם
        else {
            openPrev(localStorage.prevGameA);
            gameIndex = Number(localStorage.prevIndexA);
        }
    }
    //רמה ב
    else {
        //משחק חדש
        if (localStorage.prevGameB == 'null' || localStorage.prevGameB == undefined) {
            document.getElementById("d1").style.visibility = "visible";
            gameIndex = Math.round((Math.random() * (mat.length - 1)));
        }
        //פתיחת משחק קודם
        else {
            openPrev(localStorage.prevGameB);
            gameIndex = Number(localStorage.prevIndexB);
        }
    }
}

//פתיחת משחק קודם
function openPrev(t) {
    if (confirm("האם תרצה להמשיך את המשחק הקודם?")) {
        var a = JSON.parse(t);
        for (var i = 1; i <= a.length; i += 1) {
            document.getElementById("d" + i).style.visibility = "visible";
            document.getElementById("colo" + i + "r1").style.backgroundColor = a[i - 1][0];
            document.getElementById("colo" + i + "r2").style.backgroundColor = a[i - 1][1];
            document.getElementById("colo" + i + "r3").style.backgroundColor = a[i - 1][2];
            document.getElementById("colo" + i + "r4").style.backgroundColor = a[i - 1][3];
            document.getElementById("an" + i + "s1").style.backgroundColor = a[i - 1][4];
            document.getElementById("an" + i + "s2").style.backgroundColor = a[i - 1][5];
            document.getElementById("an" + i + "s3").style.backgroundColor = a[i - 1][6];
            document.getElementById("an" + i + "s4").style.backgroundColor = a[i - 1][7];
            for (var j = 1; j <= 4; j++) {
                document.getElementById("colo" + i + "r" + j).setAttribute("onclick", "noth()");
                document.getElementById("an" + i + "s" + j).style.border = "solid 1px black";
            }
        }
        //הגדרת משתני המשחק
        document.getElementById("d" + i).style.visibility = "visible";
        nameFify = 'colo' + i + 'r1';
        numTry = i;
    }
    else {
        if (localStorage.level == '2')
            localStorage.prevGameB = 'null';
        else
            localStorage.prevGameA = 'null';
        window.location.assign('game.html');
    }
}

//כניסה ברמה א
function lvl1() {
    localStorage.level = 1;
    if (document.getElementsByTagName('title')[0].innerHTML == 'משחק בול פגיעה') {
        window.location.assign('game.html');
    }
    else {
        window.location.assign('folder/game.html');
    }
}

//כניסה ברמה ב
function lvl2() {
    localStorage.level = 2;
    if (document.getElementsByTagName('title')[0].innerHTML == 'משחק בול פגיעה') {
        window.location.assign('game.html');
    }
    else {
        window.location.assign('folder/game.html');
    }
}

//בוחרת את הדיב הרצוי ומסמנת אותו במסגרת
function fify() {
    document.getElementById(nameFify).style.border = "solid 1px black";
    nameFify = event.target.id
    document.getElementById(nameFify).style.border= "solid 3px red";
}

//צובעת את הדיב בצבע שנבחר
function Paint() {
    document.getElementById(nameFify).style.backgroundColor = event.target.dataset.des;
    thisColor += 1;
    if (thisColor == 5)
        thisColor = 1;
    nameFify = "colo" + numTry + 'r' + thisColor;
}

//פעולת שליחת קוד
function result() {
    // 1. הסרת פעולת הקליק של כל הצבעים ושל כפתור השליחה
    for (var i = 1; i <= 4; i++) {
        document.getElementById("colo" + numTry + "r" + i).setAttribute("onclick", "noth()");
    }
    document.getElementById("button" + numTry).setAttribute("onclick", "noth()");

    // 2. הסרת המסגרת האדומה של הדיב האחרון
    document.getElementById(nameFify).style.border = "solid 1px black";
    nameFify = "colo" + (numTry + 1) + "r1";

    //3. בדיקת תקינות הצבעים הבחורים שאין דיב ריק ואין צבע פעמיים
    var f = true;
    for (var i = 1; i <= 4; i++) {
        if (document.getElementById("colo" + numTry + "r" + i).style.backgroundColor == "")
            f = false;
        for (var j = i + 1; j <= 4; j++) {
            if (document.getElementById("colo" + numTry + "r" + i).style.backgroundColor == document.getElementById("colo" + numTry + "r" + j).style.backgroundColor)
                f = false;
        }
    }

    //4. הופעת אלרט במקרה של טעות עוברים לשלב הבא
    if (!f) {
        alert("מצטערים, הקוד שגוי. בפעם הבאה תנחש באופן תקין");
        numTry++;
        if (numTry == 11)
            lose();
        else {
            document.getElementById("d" + numTry).style.visibility = "visible";

        }
    }

    //5. לבדוק את התוצאות כמה בולים וכמה פגיעות והצגת התוצאות
    else {
        var bul = 0, pgia = 0;
        if (localStorage.level == '2') {
            //ספירת בולים ופגיעות לרמה ב
            for (var i = 1; i <= 4; i++)
                if (mat[gameIndex][i - 1] == document.getElementById("colo" + numTry + "r" + i).style.backgroundColor) {
                    bul++;
                }
                else {
                    for (var j = 1; j <= 4; j++)
                        if (mat[gameIndex][i - 1] == document.getElementById("colo" + numTry + "r" + j).style.backgroundColor)
                            pgia++;
                }
            var index = 1;
            //הדפסת בולים
            for (; index <= bul; index++) {
                document.getElementById("an" + numTry + "s" + index).style.backgroundColor = "red";
                document.getElementById("an" + numTry + "s" + index).style.border = "solid 1px black";
            }
            //הדפסת פגיעות
            for (; index <= pgia + bul; index++) {
                document.getElementById("an" + numTry + "s" + index).style.backgroundColor = "yellow";
                document.getElementById("an" + numTry + "s" + index).style.border = "solid 1px black";
            }
        }
        else {
            //ספירת והדפסת התוצאות לרמה א
            for (var i = 1; i <= 4; i++) {
                if (mat[gameIndex][i - 1] == document.getElementById("colo" + numTry + "r" + i).style.backgroundColor) {
                    document.getElementById("an" + numTry + "s" + i).style.backgroundColor = "red";
                    document.getElementById("an" + numTry + "s" + i).style.border = "solid 1px black";
                    bul++;
                }
                else {
                    for (var j = 0; j < 4; j++) {
                        if (mat[gameIndex][j] == document.getElementById("colo" + numTry + "r" + i).style.backgroundColor)
                            document.getElementById("an" + numTry + "s" + i).style.backgroundColor = "yellow";
                    }
                    document.getElementById("an" + numTry + "s" + i).style.border = "solid 1px black";
                }
            }
        }

        //6. אם הגיע לארבע בולים להפנות לפעות ניצחון וסיום המשחק
        if (bul == 4)
            finish();
        //7. אם הגיע לשורה האחרונה להפנות לפעולת כישלון
        else {
            if (numTry == 10)
                lose();

            //8. בכל מקרה אחר להעביר לשורה הבאה ולעדכן את הכאונטר
            else {
                numTry++;
                document.getElementById("d" + numTry).style.visibility = "visible";
                thisColor = 1;
            }
        }
    }
}

//פעולה ריקה להפניית עצמים
function noth(){

}

//פעולת חזרה לדף הראשי מדף המשחק
function openEnter() {
    closse();
    window.location.assign('../enter.html');
}

//פעולת חזרה לדף הראשי מדף ההוראות
function openEnterr() {
    window.location.assign('../enter.html');
}

//פעולה לסיום המשחק בכישלון כשנגמרים עשרת הניחושים
function lose() {
    //הצגת ההודעה
    document.getElementById("mess").style.display = "inline-block";
    document.getElementById("mess").style.position = "absolute";
    //מילוי הודעת כישלון רמה ב
    if (localStorage.level == '2') {
        localStorage.prevGameB = 'null';
        document.getElementById("mess").innerHTML = "הפסדת!! חבל<br/>נסה שוב<br/>מספר הנקודות שלך: " + 0 + " ברמה ב של המשחק.<br/>השיא שלך ברמה זו: " + localStorage.recordB + "<br/>הקוד שנבחר הוא:<div id='messcon'><div id='messd' style='background-color:" + mat[gameIndex][0] + "'></div><div id='messd' style='background-color:" + mat[gameIndex][1] + "'></div><div id='messd' style='background-color:" + mat[gameIndex][2] + "'></div><div id='messd' style='background-color:" + mat[gameIndex][3] + "'></div></div>";
        document.getElementById("mess").innerHTML += "<button class='buttons' onclick='lvl2()'><span></span><span></span><span></span><span></span>משחק חדש</button>";
    }
    //מילוי הודעת כישלון רמה א
    else {
        localStorage.prevGameA = 'null';
        document.getElementById("mess").innerHTML = "הפסדת!! חבל<br/>נסה שוב<br/>מספר הנקודות שלך: " + 0 + " ברמה א של המשחק.<br/>השיא שלך ברמה זו: " + localStorage.recordA + "<br/>הקוד שנבחר הוא:<div id='messcon'><div id='messd' style='background-color:" + mat[gameIndex][0] + "'></div><div id='messd' style='background-color:" + mat[gameIndex][1] + "'></div><div id='messd' style='background-color:" + mat[gameIndex][2] + "'></div><div id='messd' style='background-color:" + mat[gameIndex][3] + "'></div></div>";
        document.getElementById("mess").innerHTML += "<button class='buttons' onclick='lvl1()'><span></span><span></span><span></span><span></span>משחק חדש</button>";
    }
    document.getElementById("mess").innerHTML += "<button class='buttons' onclick='openEnterr()'><span></span><span></span><span></span><span></span>לתפריט הראשי</button>";
}

//פעולה לסיום המשחק בניצחון
function finish() {
    //הצגת ההודעה
    document.getElementById("mess").style.display = "inline-block";
    document.getElementById("mess").style.position = "absolute";
    //חישוב הנקודות
    var points = 100 - (numTry - 1) * 10;
    if (localStorage.level == '2') {
        //עדכון שיא הנקודות רמה ב
        if (points > Number(localStorage.recordB))
            localStorage.recordB = points;
        //מילוי הודעת ניצחון רמה ב
        document.getElementById("mess").innerHTML = "!נצחת!! יפה מאוד<br/>מספר נקודות שלך: " + points + " ברמה ב של המשחק<br/>השיא שלך ברמה זו: " + localStorage.recordB + "<br/>הקוד שנבחר הוא:<div id='messcon'><div id='messd' style='background-color:" + mat[gameIndex][0] + "'></div><div id='messd' style='background-color:" + mat[gameIndex][1] + "'></div><div id='messd' style='background-color:" + mat[gameIndex][2] + "'></div><div id='messd' style='background-color:" + mat[gameIndex][3] + "'></div></div>";
        document.getElementById("mess").innerHTML += "<button class='buttons' onclick='lvl2()'><span></span><span></span><span></span><span></span>משחק חדש</button>";
        localStorage.prevGameB = 'null';
    }
    else {
        //עדכון שיא הנקודות רמה א
        if (points > Number(localStorage.recordA))
            localStorage.recordA = points;
        //מילוי הודעת הנצחון רמה א
        document.getElementById("mess").innerHTML = "!נצחת!! יפה מאוד<br/>מספר נקודות שלך: " + points + " ברמה א של המשחק<br/>השיא שלך ברמה זו: " + localStorage.recordA + "<br/>הקוד שנבחר הוא:<div id='messcon'><div id='messd' style='background-color:" + mat[gameIndex][0] + "'></div><div id='messd' style='background-color:" + mat[gameIndex][1] + "'></div><div id='messd' style='background-color:" + mat[gameIndex][2] + "'></div><div id='messd' style='background-color:" + mat[gameIndex][3] + "'></div></div>";
        document.getElementById("mess").innerHTML += "<button class='buttons' onclick='lvl1()'><span></span><span></span><span></span><span></span>משחק חדש</button>";
        localStorage.prevGameA = 'null';
    }
    document.getElementById("mess").innerHTML += "<button class='buttons' onclick='openEnterr()'><span></span><span></span><span></span><span></span>לתפריט הראשי</button>";
}

//פעולה למעבר לדף ההוראות רמה א
function openStruct1() {
    window.location.assign('folder/Struction.html');
    localStorage.level = 1;
}

//פעולה למעבר לדף ההוראות רמה ב
function openStruct2() {
    window.location.assign('folder/Struction.html');
    localStorage.level = 2;
}

//פעולה לפתיחת החלונית הצפה
function openNav() {
    document.getElementById("BoardMenu").style.top = "0";
    document.getElementById("openBoardMenu").style.top = "50vh";
    document.getElementById("openBoardMenu").setAttribute("z-index", "5");
    document.getElementById("BoardMenu").setAttribute("z-index", "5");
}

//פעולה לסגירת החלונית הצפה
function closeNav() {
    document.getElementById("BoardMenu").style.top = "-52vh";
    document.getElementById("openBoardMenu").setAttribute("z-index", "1");
    document.getElementById("BoardMenu").setAttribute("z-index", "1");
    document.getElementById("openBoardMenu").style.top = "0vh";
}

//פעולה להוספת מנוי למערכת
function addMember() {
    let text = localStorage.members;
    let mem = JSON.parse(text);
    const m = new Memder(document.getElementById("name").value, document.getElementById("code").value);
    var f = false;
    //בדיקה עם המנוי קיים
    for (let j = 0; j < Number(localStorage.i) && !f; j++)
        if (m.show() == mem[j]) {
            document.getElementsByClassName("login-box")[0].innerHTML = "<b><br/><br/>משתמש/ת מוכר/ת למערכת<br/>ברוך שובך, " + m.name + ":)</b>";
            f = true;
        }
    //הוספת המנוי החדש
    if(!f) {
        document.getElementsByClassName("login-box")[0].innerHTML = "<b><br/><br/>תודה שנרשמת למשחק שלנו<br/>חוויה מהנה:)</b>";
        mem[Number(localStorage.i)] = m.show();
        text = JSON.stringify(mem);
        localStorage.members = text;
        localStorage.i = Number(localStorage.i) + 1;
    }
    document.getElementById('name').value = null;
    document.getElementById('code').value = null;
}

//פעולת פתיחת דף ההוראות
function scor() {
    document.getElementsByTagName("body")[0].style.direction = "rtl";
    document.getElementsByTagName("body")[0].innerHTML = "<br /><br /><button class='buttons' onclick='openEnterr()'><span></span><span></span><span></span><span></span>חזרה לתפריט הראשי</button>";
    if (localStorage.level == '1')
        document.getElementsByTagName("body")[0].innerHTML += "<h1>בול פגיעה רמה א'</h1><b> כללי המשחק:</b><p>המחשב מגריל עבורכם קוד המורכב מארבעה צבעים מבין שמונת הצבעים שיופיעו לכם בתחתית העמוד,<br />עליכם לנחש את הקוד שהוגרל תוך שימוש בכמה שפחות ניחושים.<br />לאחר שבחרתם את הקוד יש ללחוץ על כפתור השליחה,<br />אך לפני כן, <b>יש לשים לב! </b>כדאי לבדוק שהקוד שבחרתם חוקי!<br />הקוד לא יכולל לכלול חלקים לבנים ללא בחירת צבע, וכן אסור לשבץ צבע אחד פעמיים!<br />הקוד חייב לכלול ארבעה צבעים שונים! במקרה של חריגה מהפורמט החוקי המחשב יקפיץ התראה על קוד לא חוקי ואתם תפסידו תור.<br>לאחר ששלחתם את הקוד לבדיקה אתם תקבלו ציון בהתאמה עבור כל חלק בקוד.<br />אם ניחשתם צבע שמופיע בקוד המקורי באותו מקום אתם תראו באותה משבצת <b>'בול'</b> המסומן בסמן אדום.<br />אם ניחשתם צבע שמופיע בקוד המקורי במקום שונה אתם תראו באותה משבצת <b>'פגיעה'</b> המסומנת בסמן צהוב.<br />אך אם הצבע שניחשתם לא מופיע בקוד המקורי, אתם לא תקבלו עליו ציון.<br />אם תצליחו לגלות את הקוד המקורי תוך עשרה ניחושים אתם תנצחו!!<br /><b>בהצלחה!!!</b></p>";
    else
        document.getElementsByTagName("body")[0].innerHTML += "<h1>בול פגיעה רמה ב'</h1><b> כללי המשחק:</b><p>המחשב מגריל עבורכם קוד המורכב מארבעה צבעים מבין שמונת הצבעים שיופיעו לכם בתחתית העמוד,<br />עליכם לנחש את הקוד שהוגרל תוך שימוש בכמה שפחות ניחושים.<br />לאחר שבחרתם את הקוד יש ללחוץ על כפתור השליחה,<br />אך לפני כן, <b>יש לשים לב! </b>כדאי לבדוק שהקוד שבחרתם חוקי!<br />הקוד לא יכולל לכלול חלקים לבנים ללא בחירת צבע, וכן אסור לשבץ צבע אחד פעמיים!<br />הקוד חייב לכלול ארבעה צבעים שונים! במקרה של חריגה מהפורמט החוקי המחשב יקפיץ התראה על קוד לא חוקי ואתם תפסידו תור.<br>לאחר ששלחתם את הקוד לבדיקה אתם תקבלו ציון עליו.<br />אם ניחשתם צבע שמופיע בקוד המקורי באותו מקום אתם תקבלו  <b>'בול'</b> המסומן בסמן אדום.<br />אם ניחשתם צבע שמופיע בקוד המקורי במקום שונה אתם תקבלו <b>'פגיעה'</b> המסומנת בסמן צהוב.<br />אך אם הצבע שניחשתם לא מופיע בקוד המקורי, אתם לא תקבלו עליו ציון.<br />אין לכם כל מידע על אילו צבעים קבלתם את הבולים והפגיעות, לכן הניחושים קשים יותר.<br />אם תצליחו לגלות את הקוד המקורי תוך עשרה ניחושים אתם תנצחו!!<br /><b>בהצלחה!!!</b></p>";
}

//פעולה המזומנת בסגירת דף המשחק
function closse() {
    //אם המשחק לא נגמר
    if (document.getElementById("mess").style.display == '' && document.getElementById("d2").style.visibility == "visible") {
        //יצירת מערך המתאר את מצב הלוח
        var mm =[];
        for (var i = 0; i < numTry-1; i += 1) {
            mm[i] = new Array(document.getElementById("colo" + (i + 1) + "r1").style.backgroundColor, document.getElementById("colo" + (i + 1) + "r2").style.backgroundColor, document.getElementById("colo" + (i + 1) + "r3").style.backgroundColor, document.getElementById("colo" + (i + 1) + "r4").style.backgroundColor, document.getElementById("an" + (i + 1) + "s1").style.backgroundColor, document.getElementById("an" + (i + 1) + "s2").style.backgroundColor, document.getElementById("an" + (i + 1) + "s3").style.backgroundColor, document.getElementById("an" + (i + 1) + "s4").style.backgroundColor);
        }
        //שמירת המערך ואינדק הקוד שנבחר בלוקל סטורג
        var text = JSON.stringify(mm);
        if (localStorage.level == '1') {
            localStorage.setItem('prevGameA', text);
            localStorage.setItem('prevIndexA', gameIndex);
        }
        else {
            localStorage.setItem('prevGameB', text);
            localStorage.setItem('prevIndexB', gameIndex);
        }
    }
    //אם המשחק נגמר-לאתחל את הזכרון
    else {
        if (localStorage.level == '1')
            localStorage.prevGameA = 'null';
        else
            localStorage.prevGameB = 'null';
    }
}