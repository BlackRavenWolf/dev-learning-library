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
    { name: "Snyk", url: "https://snyk.io/blog" },
    { name: "PortSwigger Blog", url: "https://portswigger.net/blog" },
    { name: "The Hacker News", url: "https://thehackernews.com" }
  ],

  FRONTEND: [
    { name: "CSS Tricks", url: "https://css-tricks.com" },
    { name: "Smashing Magazine", url: "https://smashingmagazine.com" },
    { name: "MDN", url: "https://developer.mozilla.org" },
    { name: "Web.dev", url: "https://web.dev" },
    { name: "Frontend Masters Blog", url: "https://frontendmasters.com/blog/" }
  ],

  BACKEND: [
    { name: "InfoQ", url: "https://infoq.com" },
    { name: "Martin Fowler", url: "https://martinfowler.com" },
    { name: "High Scalability", url: "https://highscalability.com" },
    { name: "Node.js Blog", url: "https://nodejs.org/en/blog/" },
    { name: "Netflix Tech Blog", url: "https://netflixtechblog.com/" }
  ],

  TOOLS: [
    { name: "GitHub Trending", url: "https://github.com/trending" },
    { name: "Product Hunt", url: "https://producthunt.com" },
    { name: "NPM Trends", url: "https://npmtrends.com" },
    { name: "StackShare", url: "https://stackshare.io" },
    { name: "AlternativeTo", url: "https://alternativeto.net" }
  ],

  VIDEO: [
    { name: "Fireship", url: "https://youtube.com/@fireship" },
    { name: "Traversy Media", url: "https://youtube.com/@TraversyMedia" },
    { name: "Web Dev Simplified", url: "https://youtube.com/@WebDevSimplified" },
    { name: "Theo (t3.gg)", url: "https://youtube.com/@t3dotgg" },
    { name: "Primeagen", url: "https://youtube.com/@ThePrimeTimeagen" },
    { name: "Computerphile", url: "https://youtube.com/@Computerphile" },
    { name: "Low Level Learning", url: "https://www.youtube.com/@LowLevelTV" },
    { name: "John Hammond", url: "https://www.youtube.com/@_JohnHammond" },
    { name: "LiveOverflow", url: "https://www.youtube.com/@LiveOverflow" }
  ],

  "JS ECOSYSTEM": [
    { name: "JavaScript Weekly", url: "https://javascriptweekly.com/" },
    { name: "React Docs", url: "https://react.dev/" },
    { name: "TypeScript Docs", url: "https://www.typescriptlang.org/docs/" },
    { name: "Node.js Docs", url: "https://nodejs.org/en/docs/" },
    { name: "Express Docs", url: "https://expressjs.com/" },
    { name: "React Blog", url: "https://react.dev/blog" },
    { name: "TypeScript Blog", url: "https://devblogs.microsoft.com/typescript/" },
    { name: "Node.js Blog", url: "https://nodejs.org/en/blog/" }
  ],

  DATABASES: [
    { name: "PostgreSQL Docs", url: "https://www.postgresql.org/docs/" },
    { name: "SQLBolt", url: "https://sqlbolt.com/" },
    { name: "DB Fiddle", url: "https://www.db-fiddle.com/" },
    { name: "Prisma Docs", url: "https://www.prisma.io/docs" },
    { name: "PlanetScale Blog", url: "https://planetscale.com/blog" }
  ],

  PYTHON: [
    { name: "Python Docs", url: "https://docs.python.org/3/" },
    { name: "Real Python", url: "https://realpython.com/" },
    { name: "PyPI", url: "https://pypi.org/" },
    { name: "Python Weekly", url: "https://pythonweekly.com/" }
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
  count.textContent = devSources[category].length + " resources";
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