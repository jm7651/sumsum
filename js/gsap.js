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

// 컨테이너 높이를 이미지 비율에 맞춰 조정하는 함수
function adjustContainerHeight() {
  const container = document.querySelector(".sumsum_002_pc_bg");
  const originalWidth = 1280; // 이미지의 원래 너비
  const originalHeight = 1460; // 이미지의 원래 높이

  const newWidth = container.clientWidth; // 컨테이너의 너비를 가져옴
  const newHeight = (originalHeight / originalWidth) * newWidth; // 비율에 맞춘 새로운 높이 계산

  container.style.height = `${newHeight}px`; // 계산된 높이를 설정
}

// 페이지 로드 시 및 윈도우 리사이즈 시 컨테이너 높이 조정
window.onload = adjustContainerHeight;
window.onresize = adjustContainerHeight;

// 뷰포트 높이를 CSS 변수로 설정하는 함수
function setViewportHeight() {
  const vh = window.innerHeight * 0.01; // 뷰포트 높이의 1%
  document.documentElement.style.setProperty("--vh", `${vh}px`); // CSS 변수 설정
}

// 페이지 로드 시 및 윈도우 리사이즈 시 뷰포트 높이 설정
window.addEventListener("load", setViewportHeight);
window.addEventListener("resize", setViewportHeight);

// sumsum_004 요소와 그 내부 이미지 높이 조정
function adjustContainerHeightToImage() {
  const sumsum004 = document.querySelector(".sumsum_004");
  const sumsum004Img = document.querySelector(".sumsum_004 img");

  if (sumsum004 && sumsum004Img) {
    const sumsum004ImgHeight = sumsum004Img.height; // 이미지의 높이를 가져옴
    sumsum004.style.height = `${sumsum004ImgHeight}px`; // 이미지의 높이를 sumsum004 요소의 높이로 설정
  }
}

// 페이지 로드 시 및 윈도우 리사이즈 시 이미지 높이에 맞춰 컨테이너 높이 조정
window.addEventListener("load", adjustContainerHeightToImage);
window.addEventListener("resize", adjustContainerHeightToImage);
