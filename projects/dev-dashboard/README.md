# Developer Intelligence Dashboard

A small learning project that builds a personal **Developer Intelligence Dashboard** using HTML, CSS, and JavaScript.

The dashboard collects useful developer resources such as news sites, security sources, blogs, tools, and YouTube channels in one overview.

The project automatically generates the dashboard sections using JavaScript instead of writing all links manually in HTML.

---

# Purpose

This project exists as a **learning exercise** while studying web development.

It demonstrates how to:

* structure a simple web project
* separate HTML, CSS, and JavaScript
* generate HTML elements dynamically using JavaScript
* work with objects and arrays
* loop through data structures
* manipulate the DOM
* debug code using `console.log`

---

# Features

The dashboard currently includes these categories:

### DAILY

* Hacker News
* Dev.to
* GitHub Trending
* Reddit Programming

### SECURITY

* NVD
* CVE
* OWASP
* Snyk

### FRONTEND

* CSS Tricks
* Smashing Magazine
* MDN
* Web.dev

### BACKEND

* InfoQ
* Martin Fowler
* High Scalability

### TOOLS

* GitHub Trending
* Product Hunt
* NPM Trends

### VIDEO

* Fireship
* Traversy Media
* Web Dev Simplified
* Theo (t3.gg)
* The Primeagen
* Computerphile
* Low Level Learning
* John Hammond

All sections are generated dynamically from a JavaScript data object.

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

### index.html

Contains the page structure and a container where the dashboard is rendered.

### css/style.css

Handles the styling of the layout, cards, grid system, and typography.

### js/script.js

Contains the dashboard data and dynamically builds the sections using JavaScript.

---

# How It Works

The dashboard data is stored in a JavaScript object:

```
devSources = {
  DAILY: [...],
  SECURITY: [...],
  FRONTEND: [...],
  BACKEND: [...],
  TOOLS: [...],
  VIDEO: [...]
}
```

The script then:

1. Loops through each category
2. Creates a section element
3. Adds a title and source count
4. Generates a list of links
5. Appends everything to the dashboard container

This demonstrates basic **DOM manipulation**.

---

# Debugging

During development the script uses `console.log()` statements to show:

* when the script starts
* when sections are created
* which items are being added
* when the dashboard build is complete

You can view this output in the browser console:

```
F12 → Console
```

---

# Future Improvements

Possible future upgrades:

* responsive layout improvements
* search/filter for resources
* RSS feed integration
* API integrations (Hacker News / GitHub)
* bookmarking favorite resources
* dark/light mode toggle

---

# Status

Learning project — actively improving while studying web development.

---

# Author

Created as part of a personal web development learning journey.
