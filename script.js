/* LOADER */

window.addEventListener("load",()=>{

const loader =
document.getElementById("loader");

setTimeout(()=>{

loader.style.opacity = "0";
loader.style.visibility = "hidden";

},1200);

});

/* BUTTONS */

const carsBtn =
document.getElementById("carsBtn");

const heroCarsBtn =
document.getElementById("heroCarsBtn");

const campaignBtn =
document.getElementById("campaignBtn");

const heroCampaignBtn =
document.getElementById("heroCampaignBtn");

/* =========================
   CARS POPUP
========================= */

const carsPopup =
document.createElement("div");

carsPopup.className =
"cars-popup";

carsPopup.innerHTML = `

<div class="cars-container">

<div class="popup-top">

<h2>
Araç Filomuz
</h2>

<span id="closeCars">
✕
</span>

</div>
<div class="filter-bar">

<input
type="text"
id="searchCar"
placeholder="Araç Ara...">

<select id="filterType">

<option value="all">
Tüm Araçlar
</option>

<option value="SUV">
SUV
</option>

<option value="Sedan">
Sedan
</option>

<option value="Hatchback">
Hatchback
</option>

<option value="Ekonomik">
Ekonomik
</option>

</select>

</div>
<div class="cars-grid" id="carsGrid">

</div>

</div>

`;

document.body.appendChild(
carsPopup
);

/* OPEN CARS */

function openCars(){

carsPopup.style.display =
"flex";

renderCars();

}

carsBtn.addEventListener(
"click",
openCars
);

heroCarsBtn.addEventListener(
"click",
openCars
);

/* CLOSE */

document.addEventListener(
"click",
(e)=>{

if(e.target.id === "closeCars"){

carsPopup.style.display =
"none";

}

}
);

/* RENDER */

function renderCars(){

const grid =
document.getElementById(
"carsGrid"
);

grid.innerHTML = "";

const search =
document.getElementById(
"searchCar"
)?.value.toLowerCase() || "";

const filter =
document.getElementById(
"filterType"
)?.value || "all";

const filteredCars =
cars.filter(car=>{

const matchesSearch =
car.name.toLowerCase()
.includes(search);

const matchesFilter =

filter === "all"
||

car.type.includes(filter);

return matchesSearch &&
matchesFilter;

});

filteredCars.forEach(car=>{

grid.innerHTML += `

<div class="car-card">

<img src="${car.image}">

<div class="car-info">

<h3>
${car.name}
</h3>

<p>
${car.type}
</p>

<div class="prices">

<span>
${car.daily}₺ / Gün
</span>

<span>
${car.weekly}₺ / Hafta
</span>

<span>
${car.monthly}₺ / Ay
</span>

</div>

<div class="card-buttons">

<button
onclick="openDetail('${car.name}')">

Detay

</button>

<button
onclick="openRent('${car.name}')">

Kirala

</button>

</div>

</div>

</div>

`;

});

}

/* =========================
   DETAIL POPUP
========================= */

const detailPopup =
document.createElement("div");

detailPopup.className =
"detail-popup";

detailPopup.innerHTML = `

<div class="detail-container">

<span id="closeDetail">
✕
</span>

<div class="detail-left">

<img
id="detailImage"
src="">

</div>

<div class="detail-right">

<h2 id="detailTitle"></h2>

<div class="detail-prices">

<p id="detailDaily"></p>

<p id="detailWeekly"></p>

<p id="detailMonthly"></p>

</div>

<div class="detail-features">

<div>
✔ 7/24 Yol Yardım
</div>

<div>
✔ Full Kasko
</div>

<div>
✔ Adrese Teslim
</div>

<div>
✔ Premium Hizmet
</div>

</div>

<button id="rentNowBtn">

Hemen Kirala

</button>

</div>

</div>

`;

document.body.appendChild(
detailPopup
);

/* OPEN DETAIL */

function openDetail(name){

const car =
cars.find(c=>c.name===name);

if(!car) return;

detailPopup.style.display =
"flex";

document.getElementById(
"detailImage"
).src = car.image;

document.getElementById(
"detailTitle"
).innerText = car.name;

document.getElementById(
"detailDaily"
).innerText =
"Günlük: " + car.daily + "₺";

document.getElementById(
"detailWeekly"
).innerText =
"Haftalık: " + car.weekly + "₺";

document.getElementById(
"detailMonthly"
).innerText =
"Aylık: " + car.monthly + "₺";

document.getElementById(
"rentNowBtn"
).onclick = ()=>{

detailPopup.style.display =
"none";

openRent(car.name);

};

}

/* CLOSE DETAIL */

document.addEventListener(
"click",
(e)=>{

if(e.target.id==="closeDetail"){

detailPopup.style.display =
"none";

}

}
);

/* =========================
   RENT SYSTEM
========================= */

let selectedCar = null;

const rentPopup =
document.createElement("div");

rentPopup.className =
"rent-popup";

rentPopup.innerHTML = `

<div class="rent-container">

<span id="closeRent">
✕
</span>

<h2>
Rezervasyon Oluştur
</h2>

<input
type="text"
id="customerName"
placeholder="Ad Soyad">

<input
type="tel"
id="customerPhone"
placeholder="Telefon">

<label>
Alış Tarihi Seç
</label>

<input
type="text"
id="pickupDate"
placeholder="Alış Tarihi"
onfocus="(this.type='date')">

<label>
Bırakış Tarihi Seç
</label>

<input
type="text"
id="dropDate"
placeholder="Bırakış Tarihi"
onfocus="(this.type='date')">

<select id="deliveryType">

<option value="0">
Ofisten Teslim
</option>

<option value="750">
Adrese Teslim (+750₺)
</option>

</select>

<div class="price-box">

<p id="totalPrice">
Toplam:
</p>

<p id="prePayment">
Ön Ödeme:
</p>

</div>

<button id="goPayment">

Ödemeye Geç

</button>

</div>

`;

document.body.appendChild(
rentPopup
);

/* OPEN RENT */

function openRent(name){

const car =
cars.find(c=>c.name===name);

if(!car) return;

selectedCar = car;

rentPopup.style.display =
"flex";

calculatePrice();

}

/* CLOSE RENT */

document.addEventListener(
"click",
(e)=>{

if(e.target.id==="closeRent"){

rentPopup.style.display =
"none";

}

}
);

/* PRICE */

function calculatePrice(){

if(!selectedCar) return;

const pickup =
new Date(
document.getElementById(
"pickupDate"
).value
);

const drop =
new Date(
document.getElementById(
"dropDate"
).value
);

const diffTime =
drop - pickup;

const days =
Math.ceil(
diffTime /
(1000 * 60 * 60 * 24)
);

if(days <= 0){

document.getElementById(
"totalPrice"
).innerText =
"Tarih seçin";

return;

}

const delivery =
parseInt(
document.getElementById(
"deliveryType"
).value
);

const total =
(selectedCar.daily * days)
+ delivery;

const prepay =
Math.floor(total * 0.30);

document.getElementById(
"totalPrice"
).innerText =
"Toplam: " + total + "₺";

document.getElementById(
"prePayment"
).innerText =
"Ön Ödeme: " + prepay + "₺";

}

document.addEventListener(
"change",
(e)=>{

if(
e.target.id==="pickupDate" ||
e.target.id==="dropDate" ||
e.target.id==="deliveryType"
)

calculatePrice();

}

);

/* =========================
   PAYMENT
========================= */

const paymentPopup =
document.createElement("div");

paymentPopup.className =
"rent-popup";

paymentPopup.innerHTML = `

<div class="rent-container">

<span id="closePayment">
✕
</span>

<h2>
Ödeme Sistemi
</h2>

<div class="payment-box">

<p>
Banka:
Ziraat Bankası
</p>

<p>
IBAN:
TR00 0000 0000 0000 0000 0000 00
</p>

<p id="paymentPrice"></p>

</div>

<input
type="file"
id="receiptFile">

<button id="finishPayment">

Ödeme Yaptım

</button>

</div>

`;

document.body.appendChild(
paymentPopup
);

/* OPEN PAYMENT */

document.getElementById(
"goPayment"
).addEventListener(
"click",
()=>{

const customerName =
document.getElementById(
"customerName"
).value;

const customerPhone =
document.getElementById(
"customerPhone"
).value;

if(
customerName==="" ||
customerPhone===""
){

showNotification(
"Eksik Bilgi",
"Lütfen tüm alanları doldurun."
);

return;

}

document.getElementById(
"paymentPrice"
).innerText =
document.getElementById(
"prePayment"
).innerText;

paymentPopup.style.display =
"flex";

}
);

/* CLOSE PAYMENT */

document.addEventListener(
"click",
(e)=>{

if(e.target.id==="closePayment"){

paymentPopup.style.display =
"none";

}

}
);

/* FINISH PAYMENT */

document.getElementById(
"finishPayment"
).addEventListener(
"click",
()=>{

const receipt =
document.getElementById(
"receiptFile"
).files[0];

if(!receipt){

alert(
"Dekont yükleyin."
);

return;

}

showNotification(
"Rezervasyon Oluşturuldu",
"Ödemeniz kontrol ediliyor"
);

paymentPopup.style.display =
"none";

rentPopup.style.display =
"none";

const pickup =
document.getElementById(
"pickupDate"
).value;

const drop =
document.getElementById(
"dropDate"
).value;

const delivery =
document.getElementById(
"deliveryType"
).selectedOptions[0].text;

document.getElementById(
"summaryName"
).innerText =
"Ad Soyad: " +
document.getElementById(
"customerName"
).value;

document.getElementById(
"summaryPhone"
).innerText =
"Telefon: " +
document.getElementById(
"customerPhone"
).value;

document.getElementById(
"summaryPickup"
).innerText =
"Alış Tarihi: " + pickup;

document.getElementById(
"summaryDrop"
).innerText =
"Bırakış Tarihi: " + drop;

document.getElementById(
"summaryDelivery"
).innerText =
"Teslim Tipi: " + delivery;

document.getElementById(
"summaryCar"
).innerText =
"Araç: " +
selectedCar.name;

document.getElementById(
"summaryDaily"
).innerText =
"Günlük: " +
selectedCar.daily + "₺";

document.getElementById(
"summaryWeekly"
).innerText =
"Haftalık: " +
selectedCar.weekly + "₺";

document.getElementById(
"summaryMonthly"
).innerText =
"Aylık: " +
selectedCar.monthly + "₺";

document.getElementById(
"summaryTotal"
).innerText =
document.getElementById(
"totalPrice"
).innerText;

document.getElementById(
"summaryPrepay"
).innerText =
document.getElementById(
"prePayment"
).innerText;

summaryPopup.style.display =
"flex";

}
);

/* =========================
   CAMPAIGN
========================= */

function openCampaign(){

campaignPopup.style.display =
"flex";

renderCampaigns();

}

campaignBtn.addEventListener(
"click",
openCampaign
);

heroCampaignBtn.addEventListener(
"click",
openCampaign
);

/* =========================
   CHATBOT
========================= */

const chatbot =
document.createElement("div");

chatbot.className =
"chatbot";

chatbot.innerHTML =
"💬";

document.body.appendChild(
chatbot
);

chatbot.addEventListener(
"click",
()=>{

alert(
"ZIRVE AI DESTEK\n\nSize nasıl yardımcı olabiliriz?"
);

});/* =========================
   REAL CHATBOT
========================= */

const chatWindow =
document.createElement("div");

chatWindow.className =
"chat-window";

chatWindow.innerHTML = `

<div class="chat-top">

<h3>
ZIRVE AI DESTEK
</h3>

<span id="closeChat">
✕
</span>

</div>

<div class="chat-body" id="chatBody">

<div class="bot-message">
Merhaba 😄
Size nasıl yardımcı olabiliriz?
</div>

</div>

<div class="chat-input">

<input
type="text"
id="chatText"
placeholder="Mesaj yaz...">

<button id="sendMessage">
Gönder
</button>

</div>

`;

document.body.appendChild(
chatWindow
);

/* OPEN CHAT */

chatbot.addEventListener(
"click",
()=>{

chatWindow.style.display =
"flex";

}
);

/* CLOSE */

document.addEventListener(
"click",
(e)=>{

if(e.target.id==="closeChat"){

chatWindow.style.display =
"none";

}

}
);

/* SEND */

document.getElementById(
"sendMessage"
).addEventListener(
"click",
sendMessage
);

function sendMessage(){

const input =
document.getElementById(
"chatText"
);

const text =
input.value.trim();

if(text==="") return;

const body =
document.getElementById(
"chatBody"
);

body.innerHTML += `

<div class="user-message">
${text}
</div>

`;

setTimeout(()=>{

body.innerHTML += `

<div class="bot-message">

Canlı destek ekibimiz
size WhatsApp üzerinden
yardımcı olacaktır 😄

</div>

`;

body.scrollTop =
body.scrollHeight;

},700);

input.value = "";

body.scrollTop =
body.scrollHeight;

}/* KAMPANYA POPUP */

const campaignPopup =
document.createElement("div");

campaignPopup.className =
"campaign-popup";

campaignPopup.innerHTML = `

<div class="campaign-container">

<div class="campaign-top">

<h2>
Kampanyalar
</h2>

<span id="closeCampaign">
✕
</span>

</div>

<div class="campaign-grid" id="campaignGrid">

</div>

</div>

`;

document.body.appendChild(
campaignPopup
);

/* CLOSE */

document.addEventListener(
"click",
(e)=>{

if(e.target.id==="closeCampaign"){

campaignPopup.style.display =
"none";

}

}
);

/* RENDER */

function renderCampaigns(){

const grid =
document.getElementById(
"campaignGrid"
);

grid.innerHTML = "";

cars.slice(0,12).forEach(car=>{

const normal =
car.daily * 5;

const discount =
Math.floor(normal * 0.80);

grid.innerHTML += `

<div class="campaign-card">

<div class="discount-badge">
%20 İndirim
</div>

<h3>
${car.name}
</h3>

<div class="old-price">
${normal}₺
</div>

<div class="new-price">
${discount}₺
</div>

<div class="campaign-features">

<div>
✔ 5 Gün Kirala 4 Gün Öde
</div>

<div>
✔ Full Kasko
</div>

<div>
✔ Yol Yardım
</div>

</div>

<button
onclick="openRent('${car.name}')">

Kampanyadan Yararlan

</button>

</div>

`;

});

}/* FILTER EVENTS */

document.addEventListener(
"input",
(e)=>{

if(
e.target.id==="searchCar"
){

renderCars();

}

}
);

document.addEventListener(
"change",
(e)=>{

if(
e.target.id==="filterType"
){

renderCars();

}

}
);/* =========================
   COMPARE SYSTEM
========================= */

const comparePopup =
document.createElement("div");

comparePopup.className =
"compare-popup";

comparePopup.innerHTML = `

<div class="compare-container">

<div class="compare-top">

<h2>
Araç Karşılaştırma
</h2>

<span id="closeCompare">
✕
</span>

</div>

<div class="compare-selects">

<select id="compare1"></select>

<select id="compare2"></select>

</div>

<div class="compare-result" id="compareResult">

</div>

</div>

`;

document.body.appendChild(
comparePopup
);

/* BUTTON */

const compareBtn =
document.createElement("button");

compareBtn.innerText =
"Karşılaştır";

compareBtn.style.marginTop =
"20px";

compareBtn.style.padding =
"15px 25px";

compareBtn.style.border =
"none";

compareBtn.style.borderRadius =
"14px";

compareBtn.style.background =
"#111";

compareBtn.style.color =
"white";

compareBtn.style.cursor =
"pointer";

document.querySelector(
".hero-buttons"
).appendChild(compareBtn);

/* OPEN */

compareBtn.addEventListener(
"click",
()=>{

comparePopup.style.display =
"flex";

loadCompareOptions();

renderCompare();

}
);

/* CLOSE */

document.addEventListener(
"click",
(e)=>{

if(e.target.id==="closeCompare"){

comparePopup.style.display =
"none";

}

}
);

/* OPTIONS */

function loadCompareOptions(){

const select1 =
document.getElementById(
"compare1"
);

const select2 =
document.getElementById(
"compare2"
);

select1.innerHTML = "";
select2.innerHTML = "";

cars.forEach(car=>{

select1.innerHTML += `
<option value="${car.name}">
${car.name}
</option>
`;

select2.innerHTML += `
<option value="${car.name}">
${car.name}
</option>
`;

});

}

/* RENDER */

function renderCompare(){

const car1 =
cars.find(
c=>c.name===
document.getElementById(
"compare1"
).value
);

const car2 =
cars.find(
c=>c.name===
document.getElementById(
"compare2"
).value
);

if(!car1 || !car2) return;

const winner =

car1.daily < car2.daily
? car1.name + " daha ekonomik 😄"
: car2.name + " daha ekonomik 😄";

document.getElementById(
"compareResult"
).innerHTML = `

<div class="compare-card">

<img src="${car1.image}">

<h3>
${car1.name}
</h3>

<p>
Tip:
${car1.type}
</p>

<p>
Günlük:
${car1.daily}₺
</p>

<p>
Haftalık:
${car1.weekly}₺
</p>

<p>
Aylık:
${car1.monthly}₺
</p>

</div>

<div class="compare-card">

<img src="${car2.image}">

<h3>
${car2.name}
</h3>

<p>
Tip:
${car2.type}
</p>

<p>
Günlük:
${car2.daily}₺
</p>

<p>
Haftalık:
${car2.weekly}₺
</p>

<p>
Aylık:
${car2.monthly}₺
</p>

</div>

<div class="winner">

${winner}

</div>

`;

}

/* CHANGE */

document.addEventListener(
"change",
(e)=>{

if(
e.target.id==="compare1" ||
e.target.id==="compare2"
){

renderCompare();

}

});/* =========================
   NOTIFICATION SYSTEM
========================= */

function showNotification(
title,
message
){

const notification =
document.createElement("div");

notification.className =
"notification";

notification.innerHTML = `

<div class="notification-icon">
✔
</div>

<div class="notification-text">

<h4>
${title}
</h4>

<p>
${message}
</p>

</div>

`;

document.body.appendChild(
notification
);

setTimeout(()=>{

notification.classList.add(
"show"
);

},100);

setTimeout(()=>{

notification.classList.remove(
"show"
);

setTimeout(()=>{

notification.remove();

},400);

},3500);

}/* =========================
   AUTO NOTIFICATIONS
========================= */

setTimeout(()=>{

showNotification(
"Yeni Kampanya",
"%20 indirimli araçlar aktif 😄"
);

},3000);

setTimeout(()=>{

showNotification(
"7/24 Destek",
"Canlı destek ekibi aktif."
);

},7000);/* =========================
   SUMMARY SYSTEM
========================= */

const summaryPopup =
document.createElement("div");

summaryPopup.className =
"summary-popup";

summaryPopup.innerHTML = `

<div class="summary-container">

<div class="summary-top">

<h2>
Rezervasyon Özeti
</h2>

<span id="closeSummary">
✕
</span>

</div>

<div class="summary-grid">

<div class="summary-box">

<h3>
Müşteri Bilgileri
</h3>

<p id="summaryName"></p>

<p id="summaryPhone"></p>

<p id="summaryPickup"></p>

<p id="summaryDrop"></p>

<p id="summaryDelivery"></p>

</div>

<div class="summary-box">

<h3>
Araç Bilgileri
</h3>

<p id="summaryCar"></p>

<p id="summaryDaily"></p>

<p id="summaryWeekly"></p>

<p id="summaryMonthly"></p>

</div>

</div>

<div class="summary-total">

<h2 id="summaryTotal"></h2>

<p id="summaryPrepay"></p>

</div>

<button id="downloadPdf">

PDF Sözleşme İndir

</button>

</div>

`;

document.body.appendChild(
summaryPopup
);

/* CLOSE */

document.addEventListener(
"click",
(e)=>{

if(e.target.id==="closeSummary"){

summaryPopup.style.display =
"none";

}

}
);
/* PDF */

document.getElementById(
"downloadPdf"
).addEventListener(
"click",
()=>{

showNotification(
"PDF Hazırlandı",
"Sözleşme indirildi 😄"
);

}
);
