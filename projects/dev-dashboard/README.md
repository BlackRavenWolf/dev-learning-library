# Developer Intelligence Dashboard

A small learning project that builds a personal **Developer Intelligence Dashboard** using **HTML, CSS, and JavaScript**.

The dashboard collects useful developer resources such as news sites, security sources, blogs, tools, documentation, and YouTube channels in one overview.

Instead of writing all links manually in HTML, the dashboard **generates the sections dynamically using JavaScript** from a structured data object.

This makes the project easier to maintain and expand while learning web development.

---

# Purpose

This project exists as a **learning exercise** while studying web development.

It demonstrates how to:

- structure a simple web project
- separate **HTML, CSS, and JavaScript**
- generate HTML elements dynamically using JavaScript
- work with **objects and arrays**
- loop through data structures
- manipulate the **DOM**
- debug code using `console.log`

The project also serves as a **personal developer resource dashboard** that can grow over time.

---

# Features

The dashboard currently includes the following resource categories:

## DAILY

- Hacker News  
- Dev.to  
- GitHub Trending  
- Reddit Programming  

---

## SECURITY

- NVD  
- CVE  
- OWASP  
- Snyk  
- PortSwigger Blog  
- The Hacker News  

---

## FRONTEND

- CSS Tricks  
- Smashing Magazine  
- MDN  
- Web.dev  
- Frontend Masters Blog  

---

## BACKEND

- InfoQ  
- Martin Fowler  
- High Scalability  
- Node.js Blog  
- Netflix Tech Blog  

---

## TOOLS

- GitHub Trending  
- Product Hunt  
- NPM Trends  
- StackShare  
- AlternativeTo  

---

## VIDEO

- Fireship  
- Traversy Media  
- Web Dev Simplified  
- Theo (t3.gg)  
- The Primeagen  
- Computerphile  
- Low Level Learning  
- John Hammond  
- LiveOverflow  

---

## JS ECOSYSTEM

- JavaScript Weekly  
- React Docs  
- TypeScript Docs  
- Node.js Docs  
- Express Docs  
- React Blog  
- TypeScript Blog  
- Node.js Blog  

---

## DATABASES

- PostgreSQL Docs  
- SQLBolt  
- DB Fiddle  
- Prisma Docs  
- PlanetScale Blog  

---

## PYTHON

- Python Docs  
- Real Python  
- PyPI  
- Python Weekly  

---

All sections are generated **automatically from a JavaScript data object**, making it easy to add or remove resources without editing the HTML.

---

# Project Structure

```
dev-news-dashboard
│
├─ index.html
├─ css
│   └─ style.css
└─ js
    └─ script.js
```

## index.html

Contains the basic page structure and a container where the dashboard will be rendered.

---

## css/style.css

Handles the styling of the page, including:

- layout
- dashboard grid
- cards
- typography
- colors and shadows

---

## js/script.js

Contains:

- the developer resource data
- logic for generating the dashboard
- DOM manipulation code
- debugging output using `console.log`

---

# How It Works

All resources are stored in a JavaScript object:

```javascript
const devSources = {
  DAILY: [...],
  SECURITY: [...],
  FRONTEND: [...],
  BACKEND: [...],
  TOOLS: [...],
  VIDEO: [...],
  "JS ECOSYSTEM": [...],
  DATABASES: [...],
  PYTHON: [...]
};
```

The script then:

1. Loops through each category
2. Creates a dashboard section
3. Adds the category title
4. Displays the number of resources
5. Generates a list of links
6. Appends everything to the dashboard container

This demonstrates basic **DOM manipulation and dynamic rendering**.

---

# Debugging

During development the script uses `console.log()` statements to display:

- when the script starts
- which categories are being processed
- which resources are being added
- when the dashboard build is complete

You can view this output in the browser console:

```
F12 → Console
```

This helps understand how the JavaScript code builds the dashboard step by step.

---

# Future Improvements

Possible future upgrades for this project:

- improved responsive layout
- search or filtering of resources
- RSS feed integration
- API integrations (GitHub / Hacker News)
- bookmarking favorite resources
- light/dark mode toggle
- resource sorting options

---

# Status

Learning project — actively improving while studying web development.

The dashboard is designed to grow as new technologies, tools, and developer resources are discovered.

---

# Author

Created as part of a personal **web development learning journey**.