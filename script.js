const pages = [...document.querySelectorAll('.page')];
const progressFill = document.getElementById('progress-fill');
const stageLabel = document.getElementById('stage-label');
const stageCount = document.getElementById('stage-count');
const stageNames = ['a little journey...', 'case file #01', 'you were warned ⚠️', 'questionable comedy', 'comedy intermission', 'jokes aside...', 'the actual question 💌'];
let currentPage = 0;
let selectedAnswer = '';
const answerMessages = {
  yes: {
    response: 'That would make me really happy. 💗 I would love for us to take our time, keep being ourselves, and see where this goes.',
    copy: 'Hey Joshua 💗 I would like that. Let’s take our time and see where this goes.'
  },
  talk: {
    response: 'Absolutely. 💬 I would be happy to talk about it in person. No pressure to figure everything out through a website!',
    copy: 'Hey Joshua 💬 Can we talk about this in person? I would rather have the conversation with you.'
  },
  time: {
    response: "That's completely okay. 🌷 Take the time you need. You don't owe anyone an instant answer, and I still respect you either way.",
    copy: 'Hey Joshua 🌷 I need a little time to think about it. Thank you for being honest with me.'
  }
};
function showPage(index) {
  currentPage = Math.max(0, Math.min(index, pages.length - 1));
  pages.forEach((page, i) => {
    const active = i === currentPage;
    page.hidden = !active;
    page.classList.toggle('active', active);
  });
  progressFill.style.width = `${((currentPage + 1) / pages.length) * 100}%`;
  stageLabel.textContent = stageNames[currentPage];
  stageCount.textContent = `${currentPage + 1} / ${pages.length}`;
  document.getElementById('answer-panel').hidden = true;
  document.querySelectorAll('.choice').forEach(button => button.classList.remove('selected'));
  window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
}
document.querySelectorAll('[data-next]').forEach(button => button.addEventListener('click', () => showPage(currentPage + 1)));
document.querySelectorAll('[data-back]').forEach(button => button.addEventListener('click', () => showPage(currentPage - 1)));
document.querySelectorAll('[data-answer]').forEach(button => button.addEventListener('click', () => {
  selectedAnswer = button.dataset.answer;
  document.querySelectorAll('.choice').forEach(item => item.classList.toggle('selected', item === button));
  document.getElementById('answer-text').textContent = answerMessages[selectedAnswer].response;
  document.getElementById('answer-panel').hidden = false;
  document.getElementById('copy-status').textContent = '';
  document.getElementById('answer-panel').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}));
document.getElementById('copy-answer').addEventListener('click', async () => {
  const text = answerMessages[selectedAnswer]?.copy;
  if (!text) return;
  const status = document.getElementById('copy-status');
  try {
    await navigator.clipboard.writeText(text);
    status.textContent = 'Copied! You can paste it into your chat. 💗';
  } catch {
    status.textContent = 'Copy is unavailable here. You can select and copy the message above or write your own.';
  }
});
document.getElementById('restart').addEventListener('click', () => showPage(0));
