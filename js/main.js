// 计算网站运行时间
const startTime = new Date('2024-06-19T00:00:00').getTime();

function updateRunningTime() {
  const now = Date.now();
  const diff = now - startTime;
  
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
  const timeString = `${days} 天 ${String(hours).padStart(2, '0')} 小时 ${String(minutes).padStart(2, '0')} 分钟 ${String(seconds).padStart(2, '0')} 秒`;
  
  const el = document.getElementById('running-time');
  if (el) {
    el.textContent = timeString;
  }
}

// 更新年份
document.getElementById('year').textContent = new Date().getFullYear();

// 每秒更新一次运行时间
updateRunningTime();
setInterval(updateRunningTime, 1000);

// 页面加载动画
window.addEventListener('load', () => {
  document.querySelectorAll('.card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    setTimeout(() => {
      card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, index * 150);
  });
});
