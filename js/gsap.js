gsap.registerPlugin(ScrollTrigger);

gsap.from("#title", {
  scrollTrigger: {
    trigger: "#title",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play pause resume reset",
  },
  opacity: 0,
  y: 50,
  duration: 4,
  ease: "power4.out",
});
// sumsum_002_pc_bg 컨테이너 높이를 이미지 비율에 맞춰 조정하는 함수
function adjustContainerHeight() {
  const container = document.querySelector(".sumsum_002_pc_bg");
  const originalWidth = 1280; // 이미지의 원래 너비
  const originalHeight = 1460; // 이미지의 원래 높이

  if (container) {
    const newWidth = container.clientWidth; // 컨테이너의 너비를 가져옴
    const newHeight = (originalHeight / originalWidth) * newWidth; // 비율에 맞춘 새로운 높이 계산
    container.style.height = `${newHeight}px`; // 계산된 높이를 설정
  }
}

// 페이지 로드 시 및 윈도우 리사이즈 시 모든 높이 조정
window.addEventListener("load", () => {
  adjustContainerHeight();
});

window.addEventListener("resize", () => {
  adjustContainerHeight();
});
function setHeight() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}

window.addEventListener("resize", setHeight);
setHeight();
