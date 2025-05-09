// 콘텐츠 데이터 정의 (간략화된 버전)
const spotlightItem = {
  0: {
    title: "팬덤과 플랫폼이 만든 또 하나의 우주, 슈퍼 IP",
    author: { name: "장민지", affiliation: "경남대학교 미디어영상학과 조교수" },
  },
  1: {
    title: "작지만 강한 스몰 IP의 힘",
    author: { name: "이성민", affiliation: "한국방송통신대학교 미디어영상학과 부교수" },
  },
  2: {
    title: "커뮤니티와 함께 성장하기 : 숏폼IP가 보여주는 콘텐츠 비즈니스 실험",
    author: { name: "강혜원", affiliation: "성균관대학교 컬처앤테크놀로지 융합전공 초빙교수" },
  },
};

const globalItem = {
  0: {
    title: "영상 제작 활성화를 위한 주목할 만한 글로벌 인센티브 정책",
    author: { name: "이수연", affiliation: "글로벌비즈랩" },
  },
};

const peopleItem = {
  0: {
    title: "케이프스플래닛, 유일한 대표/PD<br>SBS '문명특급' 홍민지 PD",
    author: { name: "홍민지", affiliation: "SBS" },
  },
};

const trendItem = {
  0: {
    title: "게임 IP의 영상콘텐츠 제작 트렌드 변화",
    author: { name: "정우진", affiliation: "게임미디어센터" },
  },
};

const dataPointItem = {
  0: {
    title: "2024년도 방송영상 상장사 시장 결산 및 동향 분석",
    author: { name: "김다혜", affiliation: "한국콘텐츠진흥원" },
  },
};

// 섹션별 정보 통합
const contentMap = [
  { label: "스포트라이트", path: "spotlight", items: spotlightItem },
  { label: "글로벌 마켓 리포트", path: "global", items: globalItem },
  { label: "피플 인사이트", path: "people", items: peopleItem },
  { label: "트렌드 하이라이트", path: "trend", items: trendItem },
  { label: "데이터 포인트", path: "dataPoint", items: dataPointItem },
];

// 메뉴 열기 및 렌더링
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const closeBtn = document.getElementById("menu-close");
  const menu = document.getElementById("mobile-menu");
  const content = document.getElementById("menu-content");

  toggle.addEventListener("click", () => {
    menu.classList.add("active");
    document.body.style.overflow = "hidden";
    renderMenu();
  });
  
  closeBtn.addEventListener("click", () => {
    menu.classList.remove("active");
    document.body.style.overflow = "";
  });

  function renderMenu() {
    content.innerHTML = "";

    contentMap.forEach(({ label, path, items }) => {
      const section = document.createElement("div");
      section.innerHTML = `
        <h2 class="section-title">${label}</h2>
        <ul class="section-list">
          ${Object.entries(items)
          .map(([key, item]) => {
            const author = item.author
              ? `<p class="author">${item.author.name} | ${item.author.affiliation}</p>`
              : "";
            return `
                <li class="section-item">
                  <a href="./${path}/${key}.html" class="menu-link">
                    <p>${stripFootnotesAndTags(item.title)}</p>
                    ${author}
                  </a>
                </li>
              `;
          })
          .join("")}
        </ul>
      `;
      content.appendChild(section);
    });
  }
});