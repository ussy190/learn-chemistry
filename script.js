let score = Number(localStorage.getItem("score")) || 0;

function toggleDark(){
document.body.classList.toggle("dark");
}

function logout(){
localStorage.clear();
location="login.html";
}

function load(p){
let c=document.getElementById("content");

if(p==="home"){
c.innerHTML=`
<h2>Welcome 👋</h2>
<p>This platform covers full SS1–SS3 Chemistry with notes, quizzes and AI help.</p>
<p><b>Goal:</b> Help you pass WAEC & NECO confidently.</p>`;
}

/* ================= SS1 FULL NOTES ================= */
if(p==="ss1"){
c.innerHTML=`
<h2>SS1 Chemistry – Full Notes</h2>

<h3>1. Introduction to Chemistry</h3>
<p>Chemistry is the branch of science that studies matter, its composition, properties and changes.</p>

<h3>2. Matter</h3>
<p>Matter is anything that has mass and occupies space.</p>
<ul>
<li>Solid – fixed shape (stone)</li>
<li>Liquid – fixed volume (water)</li>
<li>Gas – no fixed shape (air)</li>
</ul>

<h3>3. Separation of Mixtures</h3>
<ul>
<li>Filtration</li>
<li>Evaporation</li>
<li>Distillation</li>
<li>Chromatography</li>
</ul>

<h3>4. Atomic Structure</h3>
<p>An atom contains protons (+), neutrons (0) and electrons (-).</p>
`;
}

/* ================= SS2 FULL NOTES ================= */
if(p==="ss2"){
c.innerHTML=`
<h2>SS2 Chemistry – Full Notes</h2>

<h3>1. Periodic Table</h3>
<p>The periodic table arranges elements according to atomic number.</p>

<h3>2. Acids, Bases and Salts</h3>
<ul>
<li>Acids release H⁺ ions (e.g. HCl)</li>
<li>Bases release OH⁻ ions (e.g. NaOH)</li>
<li>Salts are formed from acid + base</li>
</ul>

<h3>3. Mole Concept</h3>
<p>Mole = Mass ÷ Molar Mass</p>

<h3>4. Chemical Equations</h3>
<p>They show chemical reactions using symbols.</p>
`;
}

/* ================= SS3 FULL NOTES ================= */
if(p==="ss3"){
c.innerHTML=`
<h2>SS3 Chemistry – Full Notes</h2>

<h3>1. Organic Chemistry</h3>
<p>Study of carbon compounds.</p>

<h3>2. Hydrocarbons</h3>
<ul>
<li>Alkanes – single bonds</li>
<li>Alkenes – double bonds</li>
<li>Alkynes – triple bonds</li>
</ul>

<h3>3. Electrolysis</h3>
<p>Use of electricity to break compounds.</p>

<h3>4. Chemical Equilibrium</h3>
<p>Forward and backward reactions occur at equal rates.</p>
`;
}

/* ================= QUIZ ================= */
if(p==="quiz"){
c.innerHTML=`
<h2>Quiz 📝</h2>
<p>What particle has negative charge?</p>
<button onclick="correct()">Electron</button>
<button onclick="wrong()">Proton</button>
<p id="res"></p>`;
}

/* ================= EXAM ================= */
if(p==="exam"){
c.innerHTML=`
<h2>WAEC / NECO Practice</h2>
<p>Exam tip: Always write balanced equations and show calculations.</p>`;
}

/* ================= SMART AI ================= */
if(p==="ai"){
c.innerHTML=`
<h2>Smart AI Chemistry Tutor 🤖</h2>
<input id="q" placeholder="Ask any chemistry question">
<button onclick="ai()">Ask</button>
<p id="a"></p>`;
}

/* ================= PROGRESS ================= */
if(p==="progress"){
c.innerHTML=`
<h2>Your Progress 📊</h2>
<p>Total Quiz Score: <b>${score}</b></p>`;
}
}

/* ================= QUIZ FUNCTIONS ================= */
function correct(){
score++;
localStorage.setItem("score",score);
document.getElementById("res").innerText="Correct ✔ Score: "+score;
}

function wrong(){
document.getElementById("res").innerText="Wrong ❌";
}

/* ================= SMART AI LOGIC ================= */
function ai(){
let q=document.getElementById("q").value.toLowerCase();
let a="I am your chemistry tutor 😊 Ask me anything.";

if(q.includes("chemistry")) a="Chemistry is the study of matter and its changes.";
if(q.includes("atom")) a="An atom is the smallest unit of matter.";
if(q.includes("proton")) a="A proton has a positive charge.";
if(q.includes("electron")) a="An electron has a negative charge.";
if(q.includes("neutron")) a="A neutron has no charge.";
if(q.includes("acid")) a="An acid releases hydrogen ions (H⁺) in water.";
if(q.includes("base")) a="A base releases hydroxide ions (OH⁻).";
if(q.includes("salt")) a="A salt is formed from an acid and a base.";
if(q.includes("mole")) a="Mole = Mass ÷ Molar Mass.";
if(q.includes("electrolysis")) a="Electrolysis is the breakdown of compounds using electricity.";
if(q.includes("organic")) a="Organic chemistry deals with carbon compounds.";
if(q.includes("waec") || q.includes("neco"))
a="WAEC/NECO tip: Learn definitions, equations and calculations.";

document.getElementById("a").innerText=a;
}

load("home");
