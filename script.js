/**
 * ------------------------------------------------------------------
 * 파스텔 포트폴리오 - 랜덤 배경색 전환 스크립트
 * ------------------------------------------------------------------
 */

// 1. 사용할 부드러운 파스텔톤 색상 배열 정의
const pastelColors = [
  '#f86789ff', // 연분홍 (Light Pink)
  '#70b0faff', // 하늘색 (Sky Blue)
  '#7cf7e0ff', // 민트 (Mint)
  '#b156fcff', // 라벤더 (Lavender)
  '#ffeb6aff', // 크림색 (Cream)
  '#FFFDE7', // 연노랑 (Light Yellow)
  '#d399fdff'  // 연보라 (Light Purple)
];

// 현재 적용 중인 배경색 인덱스를 추적 (중복 방지용)
let currentBackgroundIndex = -1;

// 2. DOM 요소 선택
const colorBtn = document.getElementById('color-btn');

/**
 * 무작위로 파스텔 색상을 선택하여 바디 배경에 적용하는 함수
 */
function changeBackgroundColor() {
  let randomIndex;

  // 직전에 적용되었던 색상과 겹치지 않도록 루프를 활용해 새 인덱스 선택
  do {
    randomIndex = Math.floor(Math.random() * pastelColors.length);
  } while (randomIndex === currentBackgroundIndex);

  // 선택된 인덱스 업데이트
  currentBackgroundIndex = randomIndex;
  const nextColor = pastelColors[randomIndex];

  // body의 style 속성 중 배경색을 변경
  document.body.style.backgroundColor = nextColor;
}

// 3. 버튼 클릭 이벤트 리스너 추가
colorBtn.addEventListener('click', changeBackgroundColor);
