console.log("Developer Intelligence Dashboard starting...");

const dashboard = document.getElementById("dashboard");

console.log("Dashboard element:", dashboard);

const devSources = {
  DAILY: [
    { name: "Hacker News", url: "https://news.ycombinator.com" },
    { name: "Dev.to", url: "https://dev.to" },
    { name: "GitHub Trending", url: "https://github.com/trending" },
    { name: "Reddit Programming", url: "https://reddit.com/r/programming" }
  ],

  SECURITY: [
    { name: "NVD", url: "https://nvd.nist.gov" },
    { name: "CVE", url: "https://cve.mitre.org" },
    { name: "OWASP", url: "https://owasp.org" },
    { name: "Snyk", url: "https://snyk.io/blog" }
  ],

  FRONTEND: [
    { name: "CSS Tricks", url: "https://css-tricks.com" },
    { name: "Smashing Magazine", url: "https://smashingmagazine.com" },
    { name: "MDN", url: "https://developer.mozilla.org" },
    { name: "Web.dev", url: "https://web.dev" }
  ],

  BACKEND: [
    { name: "InfoQ", url: "https://infoq.com" },
    { name: "Martin Fowler", url: "https://martinfowler.com" },
    { name: "High Scalability", url: "https://highscalability.com" }
  ],

  TOOLS: [
    { name: "GitHub Trending", url: "https://github.com/trending" },
    { name: "Product Hunt", url: "https://producthunt.com" },
    { name: "NPM Trends", url: "https://npmtrends.com" }
  ],

  VIDEO: [
    { name: "Fireship", url: "https://youtube.com/@fireship" },
    { name: "Traversy Media", url: "https://youtube.com/@TraversyMedia" },
    { name: "Web Dev Simplified", url: "https://youtube.com/@WebDevSimplified" },
    { name: "Theo (t3.gg)", url: "https://youtube.com/@t3dotgg" },
    { name: "Primeagen", url: "https://youtube.com/@ThePrimeTimeagen" },
    { name: "Computerphile", url: "https://youtube.com/@Computerphile" },
    { name: "Low Level Learning", url: "https://youtube.com/@LowLevelLearning" },
    { name: "John Hammond", url: "https://youtube.com/@JohnHammond010" }
  ]
};

console.log("Dev sources loaded:", devSources);

for (const category in devSources) {
  console.log("Creating section for:", category);

  const section = document.createElement("section");
  section.className = "section";

  const title = document.createElement("h2");
  title.textContent = category;
  section.appendChild(title);

  const count = document.createElement("p");
  count.className = "section-count";
  count.textContent = devSources[category].length + " sources";
  section.appendChild(count);

  const list = document.createElement("ul");
  const items = devSources[category];

  console.log("Items in category:", items);

  for (let i = 0; i < items.length; i++) {
    console.log("Adding item:", items[i].name);

    const li = document.createElement("li");
    const link = document.createElement("a");

    link.href = items[i].url;
    link.textContent = items[i].name;
    link.target = "_blank";

    li.appendChild(link);
    list.appendChild(li);
  }

  section.appendChild(list);
  dashboard.appendChild(section);
}

console.log("Dashboard build complete.");