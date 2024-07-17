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

function adjustContainerHeight() {
  const container = document.querySelector(".sumsum_002_pc_bg");
  const originalWidth = 1280; // 이미지의 원래 width
  const originalHeight = 1460; // 이미지의 원래 height

  const newWidth = container.clientWidth; // 컨테이너의 width를 가져옴
  const newHeight = (originalHeight / originalWidth) * newWidth;

  container.style.height = `${newHeight}px`; // 계산된 height을 설정
}

window.onload = adjustContainerHeight;
window.onresize = adjustContainerHeight;

function setViewportHeight() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}

// 페이지 로드 시 및 윈도우 리사이즈 시 높이 설정
window.addEventListener("load", setViewportHeight);
window.addEventListener("resize", setViewportHeight);
