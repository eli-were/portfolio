# Stephene Obare — Portfolio Website Documentation

> **Last updated:** July 2026  
> **Domain:** [stepheneobare.com](https://www.stepheneobare.com)  
> **Owner:** Stephene Obare — Global Enterprise Risk, Governance & Compliance Executive

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [File Structure](#2-file-structure)
3. [Technology Stack](#3-technology-stack)
4. [Page-by-Page Breakdown](#4-page-by-page-breakdown)
   - [index.html — Main Portfolio](#41-indexhtml--main-portfolio)
   - [privacy.html — Privacy Policy](#42-privacyhtml--privacy-policy)
5. [Design System](#5-design-system)
6. [JavaScript Functionality](#6-javascript-functionality)
7. [SEO & Social Sharing](#7-seo--social-sharing)
8. [Security Measures](#8-security-measures)
9. [Accessibility](#9-accessibility)
10. [Responsive Design & Breakpoints](#10-responsive-design--breakpoints)
11. [Animations & Interactions](#11-animations--interactions)
12. [External Dependencies](#12-external-dependencies)
13. [Deployment & Hosting Notes](#13-deployment--hosting-notes)
14. [Maintenance Guide](#14-maintenance-guide)

---

## 1. Project Overview

This is a **static, single-page portfolio website** for **Stephene Obare**, a senior professional specializing in enterprise risk management, governance, compliance, counter-fraud, and forensic investigations. The site is designed to present his professional profile, core skills, work experience, expertise, academic credentials, professional certifications, and contact information in a polished, modern, dark-themed layout.

### Key Characteristics

- **Fully static** — no server-side rendering, no database, no backend API.
- **Dark-mode-first design** — deep navy/charcoal backgrounds with blue and gold accent colors.
- **Single-page architecture** — all major content sections live in `index.html`, navigated via anchor links.
- **Privacy-conscious** — no cookies, no analytics trackers, no third-party data collection.
- **Security-hardened** — Content Security Policy headers, input sanitization, rate limiting, and more.

---

## 2. File Structure

```
Portfolio/
├── .git/                   # Git version control
├── .gitattributes          # Git line-ending configuration
├── Assets/
│   └── photo.jpg           # Professional portrait photo (~62 KB)
├── index.html              # Main portfolio page (401 lines)
├── privacy.html            # Privacy policy page (95 lines)
├── script.js               # All JavaScript logic (171 lines)
├── styles.css              # Complete stylesheet (1,546 lines)
└── DOCUMENTATION.md        # This file
```

### File Sizes

| File           | Size      | Purpose                              |
|:---------------|:----------|:-------------------------------------|
| `index.html`   | ~24 KB    | Main page structure & content        |
| `styles.css`   | ~30 KB    | Complete design system & responsive  |
| `script.js`    | ~6 KB     | Navigation, form, reveal animations  |
| `privacy.html` | ~8 KB     | Legal privacy policy                 |
| `photo.jpg`    | ~62 KB    | Portrait image                       |

---

## 3. Technology Stack

| Layer          | Technology                                     |
|:---------------|:-----------------------------------------------|
| **Markup**     | HTML5 with semantic elements                   |
| **Styling**    | Vanilla CSS (CSS custom properties, Grid, Flexbox, animations) |
| **Logic**      | Vanilla JavaScript (ES6+, strict mode, IIFE)   |
| **Fonts**      | Google Fonts — Inter, Outfit, Plus Jakarta Sans |
| **Icons**      | Font Awesome 6.5.2 (CDN)                       |
| **Structured Data** | Schema.org JSON-LD for Person type        |

**No frameworks, no build tools, no package managers** — the entire site runs from plain static files.

---

## 4. Page-by-Page Breakdown

### 4.1 `index.html` — Main Portfolio

The main page is divided into **8 distinct sections**, each identified by a unique `id` attribute for anchor navigation:

#### Header & Navigation (`<header>`)
- **Sticky navigation bar** with a frosted-glass effect (`backdrop-filter: blur`).
- **Logo** — the initials "SO" in a styled box, linking to `#home`.
- **Navigation links** — Profile, Skills, Experience, Expertise, Credentials, Contact.
- **Hamburger menu** (`nav-toggle` button) — hidden on desktop, appears on mobile (≤760px).

#### Hero Section (`#home`)
- **Eyebrow text** — "Global Enterprise Risk / Governance / Compliance"
- **Main heading (H1)** — "Strengthening integrity, assurance, and risk governance across complex organizations."
- **Descriptive paragraph** — summarizing Stephene's work in counter-fraud, enterprise risk, investigations, due diligence, and governance.
- **Call-to-action button** — "Start a conversation" linking to the contact section.
- **Profile card (aside)** — contains the portrait photo, full name, title, and location (Nairobi, Kenya).

#### Impact Strip
- A metrics bar overlapping the hero section (pulled up with negative margin).
- **3 stat cards:**
  - **10+ years** — Governance, risk, audit, compliance, and investigations experience
  - **5 regions** — Africa, Asia-Pacific, Middle East, LAC, and the UK
  - **3 markets** — Enterprise risk leadership across Kenya, Uganda, and Tanzania

#### Executive Profile (`#profile`)
- **Two-column layout** (`profile-grid`):
  - **Left: Feature panel** — two paragraphs detailing Stephene's career and work scope.
  - **Right: Focus list** — numbered list of three current focus areas:
    1. Fraud and economic crime risk management
    2. Sanctions, counter-terrorism due diligence, and third-party risk
    3. Board and senior leadership advisory on integrity risk

#### Core Skills (`#skills`)
- **Grid of 11 skill cards** in a 3-column layout.
- Each card contains an **icon**, **title**, and **description**:
  1. Leadership & Management
  2. Enterprise Risk Management
  3. Internal Audit & Controls
  4. Fraud & Misconduct Investigations
  5. Partner & Grantee Due Diligence
  6. Donor Compliance & Assurance
  7. Board & Regulatory Reporting
  8. Sanctions & Remediation
  9. Policy & Process Improvement
  10. Capacity Building
  11. Cross-border Operations
- Cards have **staggered entrance animations** using CSS custom property `--i` as a delay multiplier.

#### Work Experience (`#experience`)
- **Timeline layout** with a vertical line connecting entries.
- **3 roles:**
  1. **Global Counter Fraud Manager** — Christian Aid (April 2022 – Present)
     - Includes an "achievement box" highlighting redesign of fraud risk frameworks and due diligence strengthening.
  2. **Risk Management & Investigations Lead** — Wefarm Limited (March 2021 – April 2022)
  3. **Forensic Investigation and Fraud Risk Consultant** — KPMG East Africa (September 2017 – September 2020)
- Each role lists key responsibilities as bullet points.

#### Core Competencies / Expertise (`#expertise`)
- **Grid of 6 competency cards** (3 columns):
  1. Leadership & Management
  2. Enterprise Risk Management
  3. Fraud & Misconduct Investigations
  4. Partner & Donor Assurance
  5. Governance & Reporting
  6. Multi-Country Operations
- Each card has an icon, title, and description.

#### Credentials (`#credentials`)
- **Two-column grid:**
  - **Left — Education:**
    - Master of Public Policy & Management — Strathmore University (2026 – Ongoing)
    - Bachelor of Laws — University of Nairobi (2019 – 2025)
    - Bachelor of Science, Forensic Science — Kenyatta University (2012 – 2016)
  - **Right — Professional Certifications:**
    - Certified Fraud Examiner (CFE) — ACFE
    - Certified Governance, Risk & Compliance Professional (GRCP) — OCEG
    - Certificate in Leadership & Management — Luxury Academy London (2020)
    - Certified Public Accountant — Ongoing

#### Contact Section (`#contact`)
- **Two-column layout:**
  - **Left** — "Let's connect" heading with animated gradient text, descriptive copy, and a pulsing "Based in Nairobi, Kenya • Available Globally" location badge.
  - **Right** — A **contact form** with Name, Email, and Message fields, plus a submit button.
- **Direct contact icon buttons** beneath the form:
  - **Email** — opens `mailto:stepheneobare1@gmail.com`
  - **WhatsApp** — links to `wa.me/254719868960`
  - **LinkedIn** — links to the LinkedIn profile

#### Footer (`<footer>`)
- Copyright notice with a dynamically set year (via JavaScript).
- Link to the **Privacy Policy** page.

---

### 4.2 `privacy.html` — Privacy Policy

A separate page sharing the same header/footer styling. Contains:

- **Section 1: Introduction** — welcomes visitors and explains the policy's purpose.
- **Section 2: Information Collection & Processing** — explains that no database or server stores data; the contact form uses a `mailto:` redirect.
- **Section 3: Cookies** — confirms no tracking, analytics, or advertising cookies.
- **Section 4: Third-Party Redirections** — disclaims responsibility for LinkedIn and WhatsApp data practices.
- **Section 5: Data Protection Rights** — since no data is stored, users can request deletion of emails directly.
- **Section 6: Changes to This Policy** — notes that updates will be reflected with an updated timestamp.

The footer on this page includes a "Back to Portfolio" link instead of the standard navigation.

---

## 5. Design System

### Color Palette (CSS Custom Properties)

| Variable     | Value                           | Usage                              |
|:-------------|:--------------------------------|:-----------------------------------|
| `--ink`      | `#e2e8f0`                       | Primary body text                  |
| `--muted`    | `#94a3b8`                       | Secondary / subdued text           |
| `--paper`    | `#090e16`                       | Page background                    |
| `--panel`    | `#111823`                       | Card and component backgrounds     |
| `--navy`     | `#ffffff`                       | Headings and strong text (white)   |
| `--accent`   | `#3b82f6`                       | Primary blue accent                |
| `--brass`    | `#fbbf24`                       | Gold / amber accent (eyebrows, badges) |
| `--clay`     | `#f43f5e`                       | Red accent (achievement box border)|
| `--line`     | `rgba(255,255,255,0.08)`        | Subtle borders and dividers        |

### Typography

| Role     | Font Family                          | Weights Used    |
|:---------|:-------------------------------------|:----------------|
| Display  | **Outfit** (fallback: Plus Jakarta Sans) | 300–900      |
| Heading  | **Plus Jakarta Sans** (fallback: Inter)  | 300–800      |
| Body     | **Inter**                            | 400–800         |

### Shadows

| Variable         | Value                                              |
|:-----------------|:---------------------------------------------------|
| `--shadow`       | `0 8px 32px rgba(0,0,0,0.24), 0 1px 4px rgba(0,0,0,0.12)` |
| `--shadow-hover` | `0 16px 48px rgba(0,0,0,0.4), 0 4px 16px rgba(0,0,0,0.2)` |

### Easings

| Variable           | Value                                 |
|:-------------------|:--------------------------------------|
| `--ease-out-expo`  | `cubic-bezier(0.16, 1, 0.3, 1)`      |
| `--ease-spring`    | `cubic-bezier(0.175, 0.885, 0.32, 1.275)` |

### Layout

- **Max container width:** 1200px, centered with auto margins.
- **Section gap:** `clamp(4rem, 8vw, 6rem)` — fluid vertical spacing.
- **Grid background texture:** a subtle 48px × 48px grid of faint white lines applied as a fixed `::before` pseudo-element on `<body>`.

---

## 6. JavaScript Functionality

All JavaScript is in `script.js`, wrapped in an **IIFE** (Immediately Invoked Function Expression) with `'use strict'` mode.

### 6.1 Utility Functions

| Function        | Purpose                                                      |
|:----------------|:-------------------------------------------------------------|
| `sanitizeText`  | HTML-entity-encodes `&`, `<`, `>`, `"`, `'`, `/` characters  |
| `stripHTML`     | Removes all HTML tags from a string                           |
| `isValidEmail`  | Validates email format with a regex                           |

### 6.2 Dynamic Year

The footer's `<span id="year">` is populated with `new Date().getFullYear()`.

### 6.3 Mobile Navigation Toggle

- Clicking the hamburger button toggles the `.open` class on `.nav-links`.
- Clicking any nav link closes the menu.
- Pressing `Escape` closes the menu.
- ARIA attribute `aria-expanded` is updated accordingly.

### 6.4 Contact Form Handler

- **Prevents default** form submission (no page reload).
- **Rate limiting** — blocks resubmission within 30 seconds.
- **Input sanitization** — strips HTML tags from name, email, and message.
- **Length enforcement** — name ≤ 100 chars, email ≤ 254 chars, message ≤ 2,000 chars.
- **Validation** — checks for non-empty fields and valid email format.
- **mailto: redirect** — constructs a `mailto:` URL with URI-encoded subject and body, then opens the user's default email client.
- **Status messaging** — displays success or error messages in the `#contact-status` element.

### 6.5 External Link Security

All `target="_blank"` links are automatically given `rel="noopener noreferrer"` to prevent reverse tabnapping.

### 6.6 Image Drag Protection

All `<img>` elements have `draggable="false"` set to discourage casual content theft.

### 6.7 Scroll-Reveal Animation

- Uses **IntersectionObserver** to detect when `[data-reveal]` elements enter the viewport.
- Adds the `.revealed` class to trigger CSS transitions (fade-in + slide-up).
- **Threshold:** 8% visibility, with a **root margin** of `-60px` at the bottom.
- Respects `prefers-reduced-motion` — if the user has motion reduction enabled, all elements are instantly shown without animation.

---

## 7. SEO & Social Sharing

### Meta Tags

| Meta                 | Content                                                   |
|:---------------------|:----------------------------------------------------------|
| `title`              | Stephene Obare \| Enterprise Risk, Governance & Compliance Executive |
| `description`        | Professional portfolio of Stephene Obare…                  |
| `keywords`           | Stephene Obare, Enterprise Risk, Risk Management, etc.     |
| `author`             | Stephene Obare                                             |
| `robots`             | index, follow                                              |
| `canonical`          | https://www.stepheneobare.com                              |

### Open Graph (Facebook / LinkedIn)

- `og:type` — website
- `og:title`, `og:description`, `og:image` — pointing to the portrait photo.

### Twitter Card

- `twitter:card` — summary_large_image
- `twitter:title`, `twitter:description`, `twitter:image`

### Schema.org JSON-LD

Embedded structured data of type `Person` includes:
- Name, job title, description, URL
- `sameAs` — LinkedIn profile link
- `address` — Nairobi, Kenya
- `alumniOf` — University of Nairobi, Kenyatta University, Strathmore University
- `knowsAbout` — Enterprise Risk Management, Governance, Compliance, Counter Fraud, Forensic Investigations, Due Diligence, Assurance

---

## 8. Security Measures

### Content Security Policy (CSP)

Defined via `<meta http-equiv="Content-Security-Policy">`:

| Directive               | Value                                                       |
|:------------------------|:------------------------------------------------------------|
| `default-src`           | `'self'`                                                    |
| `style-src`             | `'self'`, Google Fonts, cdnjs, `'unsafe-inline'`            |
| `font-src`              | `'self'`, Google Fonts static, cdnjs                        |
| `img-src`               | `'self'`, `data:`                                           |
| `script-src`            | `'self'`                                                    |
| `object-src`            | `'none'`                                                    |
| `base-uri`              | `'self'`                                                    |
| `frame-ancestors`       | `'none'`                                                    |
| `form-action`           | `'self'`, `mailto:`                                         |
| `connect-src`           | `'none'`                                                    |
| `upgrade-insecure-requests` | Enabled                                                 |

### Additional HTTP Security Headers

| Header                            | Value                           |
|:----------------------------------|:--------------------------------|
| `X-Content-Type-Options`          | `nosniff`                       |
| `X-Frame-Options`                 | `DENY`                          |
| `Referrer-Policy`                 | `strict-origin-when-cross-origin` |
| `Permissions-Policy`              | Disables geolocation, microphone, camera, payment, USB, Bluetooth |
| `Cross-Origin-Opener-Policy`      | `same-origin`                   |

### JavaScript Security

- Input sanitization (HTML stripping, entity encoding)
- Form rate limiting (30-second cooldown)
- Maximum input lengths enforced
- External links secured with `noopener noreferrer`

---

## 9. Accessibility

| Feature                           | Implementation                                  |
|:----------------------------------|:------------------------------------------------|
| Language attribute                | `<html lang="en">`                              |
| ARIA labels                       | Profile card, focus list, contact links, nav toggle |
| `aria-expanded`                   | Dynamically toggled on the hamburger menu        |
| `aria-hidden="true"`              | Decorative icons excluded from screen readers    |
| `aria-live="polite"`              | Form status messages announced to screen readers |
| `prefers-reduced-motion`          | Animations disabled; elements shown instantly     |
| Semantic HTML                     | `<header>`, `<main>`, `<nav>`, `<section>`, `<article>`, `<aside>`, `<footer>` |
| Form labels                       | All inputs have associated `<label>` elements    |
| Keyboard navigation               | Escape key closes mobile menu                    |

---

## 10. Responsive Design & Breakpoints

| Breakpoint    | Changes Applied                                                |
|:------------- |:---------------------------------------------------------------|
| **≤ 980px**   | Hero, profile grid, credentials grid, contact shell, and timeline collapse to single-column. Skills and competency grids switch to 2 columns. Timeline vertical line hidden. |
| **≤ 760px**   | Hamburger menu appears. Skills grid stays at 2 columns. Impact grid, competency grid, and hero actions become single-column. Container padding reduced. Footer stacks vertically. |
| **≤ 520px**   | Heading sizes reduced. Portrait frame height capped at 380px. Focus list items become single-column. Skills and competency grids become single-column. Skill card padding reduced. |

The container uses `width: min(1200px, calc(100% - 3rem))` which fluidly adapts to viewport width.

---

## 11. Animations & Interactions

### CSS Keyframe Animations

| Animation            | Target                    | Effect                                     |
|:---------------------|:--------------------------|:-------------------------------------------|
| `hero-fade-up`       | Hero text elements        | Fade in + slide up from 28px               |
| `hero-card-in`       | Profile card              | Fade in + slide up 40px + scale from 0.97  |
| `heading-shimmer`    | Hero H1                   | Gradient background position shift         |
| `hero-glow`          | Hero `::after`            | Subtle floating glow animation (8s loop)   |
| `card-in`            | Skill cards               | Staggered reveal (fade + translate + scale)|
| `contact-gradient`   | "Let's connect" heading   | Animated gradient text (5s alternate)       |
| `pulse-ring`         | Location badge dot        | Expanding pulsing ring effect               |

### Hover Interactions

- **Cards** (skill, competency, feature, timeline) — lift up (`translateY(-5px)`) with enhanced shadow and blue border tint.
- **Logo** — lift + scale with blue glow shadow.
- **Buttons** — lift + inner shine overlay (`::before` gradient).
- **Contact icons** — lift + scale + platform-specific gradient backgrounds:
  - Email: gold-to-red gradient
  - WhatsApp: green gradient
  - LinkedIn: blue gradient
- **Skill card icons** — on card hover, icon fills with accent color, scales, and rotates slightly.
- **Focus list items** — slide right on hover (`translateX(6px)`).
- **Profile card photo** — subtle zoom on hover (`scale(1.04)`).

### Scroll-Triggered Reveals

All sections with `data-reveal` attribute fade in and slide up when scrolled into view. Timeline items and competency cards have **staggered delays** for a cascading entrance effect.

---

## 12. External Dependencies

| Resource                 | Source                                       | Purpose               |
|:-------------------------|:---------------------------------------------|:-----------------------|
| Google Fonts             | `fonts.googleapis.com` / `fonts.gstatic.com` | Inter, Outfit, Plus Jakarta Sans |
| Font Awesome 6.5.2       | `cdnjs.cloudflare.com`                       | Icon library           |

Both are loaded with `integrity` hashes and `crossorigin="anonymous"` where available. Font loading is optimized with `rel="preconnect"`.

---

## 13. Deployment & Hosting Notes

- The site is designed for the domain **stepheneobare.com** (canonical URL set in meta tags).
- Since it's fully static, it can be hosted on any static file host: **GitHub Pages, Netlify, Vercel, Cloudflare Pages, AWS S3 + CloudFront**, etc.
- No build step is required — simply serve the files from the root directory.
- The **CSP headers** defined via `<meta>` tags work without server configuration, but for stronger enforcement, consider also setting them as actual HTTP response headers on the hosting provider.
- The `photo.jpg` in `Assets/` is the only binary asset. Ensure the `Assets/` folder is deployed alongside the HTML files.

---

## 14. Maintenance Guide

### Updating Content

| What to update                   | Where                                           |
|:---------------------------------|:------------------------------------------------|
| Name, title, or bio              | `index.html` — hero section (lines 106–110), profile section (lines 144–149), profile card (lines 121–123) |
| Work experience                  | `index.html` — timeline section (lines 232–274)  |
| Skills                           | `index.html` — skills grid (lines 165–221)        |
| Competencies                     | `index.html` — competency grid (lines 284–291)    |
| Education                        | `index.html` — stack-list (lines 299–303)          |
| Certifications                   | `index.html` — certifications-list (lines 307–336) |
| Contact email                    | `index.html` — mailto link (line 376), `script.js` — mailto target (line 124) |
| WhatsApp number                  | `index.html` — wa.me link (line 379)               |
| LinkedIn URL                     | `index.html` — LinkedIn link (line 382), JSON-LD (line 44) |
| Portrait photo                   | Replace `Assets/photo.jpg` — keep filename the same or update references |
| Privacy policy                   | `privacy.html` — update the "Last Updated" date and relevant sections |
| Schema.org structured data       | `index.html` — JSON-LD block (lines 35–75)         |
| Meta descriptions / OG tags      | `index.html` — `<head>` (lines 14–32)              |

### Adding a New Work Experience Entry

Copy an existing `<article class="timeline-item">` block and update the date, company name, role title, and bullet points. The CSS will automatically style it consistently.

### Adding a New Skill Card

Add a new `<div class="skill-card" style="--i:N">` inside `.skills-grid`, incrementing the `--i` value for the stagger animation delay.

### Adding a New Certification

Add a new `<div class="cert-item">` inside `.certifications-list` following the existing pattern.

### Changing Colors

Modify the CSS custom properties in the `:root` block at the top of `styles.css` (lines 1–19). All components reference these variables, so changes propagate site-wide.

---

*This document was generated to provide a complete reference for anyone maintaining, auditing, or extending this portfolio website.*
