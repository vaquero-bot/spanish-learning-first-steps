const lessons = [
  { title: 'Greetings and useful phrases', label: 'First steps', level: 'A1', cards: [
    ['Hola', '/ó-la/', 'Hello', 'Hola, ¿cómo estás?', 'Hello, how are you?', 'SALUDOS'],
    ['Buenos días', '/bwé-nos dí-as/', 'Good morning', 'Buenos días, señora García.', 'Good morning, Ms. García.', 'SALUDOS'],
    ['Buenas tardes', '/bwé-nas tár-des/', 'Good afternoon / evening', 'Buenas tardes, ¿tienen una mesa?', 'Good evening, do you have a table?', 'SALUDOS'],
    ['Buenas noches', '/bwé-nas nó-ches/', 'Good night', 'Buenas noches. Hasta mañana.', 'Good night. See you tomorrow.', 'SALUDOS'],
    ['Por favor', '/por fa-vór/', 'Please', 'Un café, por favor.', 'A coffee, please.', 'CORTESÍA'],
    ['Gracias', '/grá-syas/', 'Thank you', 'Muchas gracias por tu ayuda.', 'Thank you very much for your help.', 'CORTESÍA'],
    ['De nada', '/de ná-da/', "You're welcome", '—Gracias. —De nada.', '—Thank you. —You’re welcome.', 'CORTESÍA'],
    ['Hasta luego', '/ás-ta lwé-go/', 'See you later', 'Tengo que irme. ¡Hasta luego!', 'I have to go. See you later!', 'DESPEDIDAS']
  ]},
  { title: 'Getting to know people', label: 'Introductions', level: 'A1', cards: [
    ['¿Cómo te llamas?', '/kó-mo te yá-mas/', 'What is your name?', 'Hola, ¿cómo te llamas?', 'Hi, what is your name?', 'PRESENTACIONES'],
    ['Me llamo…', '/me yá-mo/', 'My name is…', 'Me llamo Alex. ¿Y tú?', 'My name is Alex. And you?', 'PRESENTACIONES'],
    ['Mucho gusto', '/mú-cho gús-to/', 'Nice to meet you', 'Mucho gusto, soy Daniela.', 'Nice to meet you, I’m Daniela.', 'PRESENTACIONES'],
    ['¿De dónde eres?', '/de dón-de é-res/', 'Where are you from?', '¿De dónde eres? ¿De México?', 'Where are you from? Mexico?', 'ORIGEN'],
    ['Soy de…', '/sói de/', 'I am from…', 'Soy de Chicago, pero vivo aquí.', 'I’m from Chicago, but I live here.', 'ORIGEN'],
    ['¿Dónde vives?', '/dón-de ví-ves/', 'Where do you live?', '¿Dónde vives ahora?', 'Where do you live now?', 'ORIGEN'],
    ['Vivo en…', '/ví-vo en/', 'I live in…', 'Vivo en una ciudad pequeña.', 'I live in a small city.', 'ORIGEN'],
    ['¿Hablas inglés?', '/á-blas in-glés/', 'Do you speak English?', '¿Hablas inglés o español?', 'Do you speak English or Spanish?', 'IDIOMAS']
  ]},
  { title: 'At the café and around town', label: 'Everyday life', level: 'A1', cards: [
    ['Quisiera…', '/ki-syé-ra/', 'I would like…', 'Quisiera un té con leche.', 'I would like a tea with milk.', 'EN EL CAFÉ'],
    ['La cuenta, por favor', '/la kwén-ta por fa-vór/', 'The check, please', '¿Nos trae la cuenta, por favor?', 'Can you bring us the check, please?', 'EN EL CAFÉ'],
    ['¿Cuánto cuesta?', '/kwán-to kwés-ta/', 'How much does it cost?', '¿Cuánto cuesta este sándwich?', 'How much does this sandwich cost?', 'COMPRAS'],
    ['¿Dónde está…?', '/dón-de es-tá/', 'Where is…?', 'Perdón, ¿dónde está el baño?', 'Excuse me, where is the restroom?', 'DIRECCIONES'],
    ['A la derecha', '/a la de-ré-cha/', 'To the right', 'La farmacia está a la derecha.', 'The pharmacy is on the right.', 'DIRECCIONES'],
    ['A la izquierda', '/a la is-kyér-da/', 'To the left', 'Gira a la izquierda en la esquina.', 'Turn left at the corner.', 'DIRECCIONES'],
    ['Todo recto', '/tó-do rék-to/', 'Straight ahead', 'Sigue todo recto dos cuadras.', 'Go straight ahead for two blocks.', 'DIRECCIONES'],
    ['¿Me puede ayudar?', '/me pwé-de a-yu-dár/', 'Can you help me?', 'Disculpe, ¿me puede ayudar?', 'Excuse me, can you help me?', 'FRASES ÚTILES']
  ]},
  { title: 'Workplace directions', label: 'At work', level: 'A2', cards: [
    ['Está a la derecha', '/es-tá a la de-ré-cha/', 'It’s on the right', 'La zona de carga está a la derecha.', 'The loading area is on the right.', 'DIRECCIONES'],
    ['Está a la izquierda', '/es-tá a la is-kyér-da/', 'It’s on the left', 'El almacén está a la izquierda.', 'The warehouse is on the left.', 'DIRECCIONES'],
    ['Está por allí', '/es-tá por a-yí/', 'It’s over there', 'La oficina está por allí, junto a la puerta.', 'The office is over there, next to the door.', 'DIRECCIONES'],
    ['¿Puedes traerme esa caja?', '/pwé-des tra-ér-me é-sa ká-ja/', 'Can you bring me that box?', '¿Puedes traerme esa caja, por favor?', 'Can you bring me that box, please?', 'PETICIONES'],
    ['Ponlo en el estante de arriba', '/pón-lo en el es-tán-te de a-rrí-ba/', 'Put it on the top shelf', 'Ponlo en el estante de arriba, junto a las etiquetas.', 'Put it on the top shelf, next to the labels.', 'ALMACÉN'],
    ['Llévalo a la zona de carga', '/yé-va-lo a la só-na de kár-ga/', 'Take it to the loading area', 'Llévalo a la zona de carga cuando esté listo.', 'Take it to the loading area when it’s ready.', 'ALMACÉN'],
    ['¿Está listo para enviar?', '/es-tá lís-to pá-ra en-vi-ár/', 'Is it ready to ship?', 'Revisemos el pedido: ¿está listo para enviar?', 'Let’s check the order: is it ready to ship?', 'PEDIDOS'],
    ['Falta una caja', '/fál-ta ú-na ká-ja/', 'One box is missing', 'Hay diez cajas en la lista, pero falta una caja.', 'There are ten boxes on the list, but one box is missing.', 'PEDIDOS']
  ]}
];

let currentLesson = 0;
let currentCard = 0;
let revealed = false;
let known = loadKnown();
const $ = id => document.getElementById(id);

function loadKnown() {
  try { const value = JSON.parse(localStorage.getItem('littleStepsSpanishKnown') || '[]'); return [...new Set(value.filter(Number.isInteger).filter(index => index >= 0 && index < lessons.reduce((sum, lesson) => sum + lesson.cards.length, 0)))]; }
  catch { return []; }
}
function saveKnown() { localStorage.setItem('littleStepsSpanishKnown', JSON.stringify(known)); }
function lessonStart(index) { return lessons.slice(0, index).reduce((sum, lesson) => sum + lesson.cards.length, 0); }
function render() {
  const lesson = lessons[currentLesson], card = lesson.cards[currentCard];
  const start = lessonStart(currentLesson), end = start + lesson.cards.length;
  const learned = known.filter(index => index >= start && index < end).length;
  $('lessonNumber').textContent = `Lesson ${currentLesson + 1} · ${lesson.label}`;
  $('lessonTitle').textContent = lesson.title; $('lessonBadge').textContent = lesson.level;
  $('cardNumber').textContent = currentCard + 1; $('cardTotal').textContent = lesson.cards.length;
  $('word').textContent = card[0]; $('pronunciation').textContent = card[1]; $('translation').textContent = card[2];
  $('example').textContent = card[3]; $('exampleTranslation').textContent = card[4];
  document.querySelector('.category').textContent = card[5];
  $('revealHint').classList.toggle('hidden', revealed); $('translation').classList.toggle('hidden', !revealed);
  $('progressLabel').textContent = `${learned} / ${lesson.cards.length} learned`;
  $('progressFill').style.width = `${learned / lesson.cards.length * 100}%`;
  document.querySelectorAll('.lesson-chip').forEach((button, index) => button.setAttribute('aria-current', index === currentLesson));
}
function reveal() { revealed = true; render(); }
function next() {
  const index = lessonStart(currentLesson) + currentCard;
  if (!known.includes(index)) { known.push(index); saveKnown(); }
  currentCard = (currentCard + 1) % lessons[currentLesson].cards.length; revealed = false; render(); toast('Great job! One step further ✦');
}
function changeLesson(index) { currentLesson = (index + lessons.length) % lessons.length; currentCard = 0; revealed = false; render(); }
function toast(message) { $('toast').textContent = message; $('toast').classList.add('show'); setTimeout(() => $('toast').classList.remove('show'), 1700); }
function speak() {
  if (!('speechSynthesis' in window)) { toast('Audio is not available in this browser'); return; }
  const utterance = new SpeechSynthesisUtterance(lessons[currentLesson].cards[currentCard][0]);
  utterance.lang = 'es-MX'; utterance.rate = .82; speechSynthesis.cancel(); speechSynthesis.speak(utterance);
}
lessons.forEach((lesson, index) => {
  const button = document.createElement('button'); button.className = 'lesson-chip'; button.type = 'button';
  button.textContent = `${index + 1}. ${lesson.label}`; button.onclick = () => changeLesson(index); $('lessonPicker').append(button);
});
$('flashcard').onclick = event => { if (!event.target.closest('button')) reveal(); };
$('flashcard').onkeydown = event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); reveal(); } };
$('knowBtn').onclick = next;
$('againBtn').onclick = () => { revealed = false; render(); toast('We’ll come back to this one ✦'); };
$('previousLessonBtn').onclick = () => changeLesson(currentLesson - 1);
$('nextLessonBtn').onclick = () => changeLesson(currentLesson + 1);
$('soundBtn').onclick = event => { event.stopPropagation(); speak(); };
$('resetBtn').onclick = () => { if (confirm('Reset all your progress?')) { known = []; localStorage.removeItem('littleStepsSpanishKnown'); changeLesson(0); toast('Progress reset'); } };
let touchStartX = 0;
$('flashcard').addEventListener('touchstart', event => { touchStartX = event.changedTouches[0].clientX; }, { passive: true });
$('flashcard').addEventListener('touchend', event => {
  const delta = event.changedTouches[0].clientX - touchStartX;
  if (Math.abs(delta) > 70) { if (delta < 0) next(); else reveal(); }
}, { passive: true });
render();
