document.getElementById('generate-btn').addEventListener('click', generateLottoNumbers);

function generateLottoNumbers() {
  const container = document.getElementById('balls-container');
  const numbers = [];
  
  // 1부터 45까지의 숫자 생성
  const pool = Array.from({ length: 45 }, (_, i) => i + 1);
  
  // 무작위로 6개 선택
  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * pool.length);
    numbers.push(pool.splice(randomIndex, 1)[0]);
  }
  
  // 숫자 정렬
  numbers.sort((a, b) => a - b);
  
  // 기존 공 제거
  container.innerHTML = '';
  
  // 새 공 추가 (애니메이션 효과를 위해 지연 생성 가능하지만 여기선 한꺼번에)
  numbers.forEach((num, index) => {
    const ball = document.createElement('div');
    ball.classList.add('ball');
    ball.textContent = num;
    
    // 번호 대역별 클래스 추가
    if (num <= 10) ball.classList.add('ball-1-10');
    else if (num <= 20) ball.classList.add('ball-11-20');
    else if (num <= 30) ball.classList.add('ball-21-30');
    else if (num <= 40) ball.classList.add('ball-31-40');
    else ball.classList.add('ball-41-45');
    
    // 애니메이션 지연 효과
    ball.style.animationDelay = `${index * 0.1}s`;
    
    container.appendChild(ball);
  });
}
