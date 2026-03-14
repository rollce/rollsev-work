import { LitElement, html } from "lit";
import { coreSkills, projects, socialLinks, stackGroups } from "@/lib/portfolio-data";

export class RollsevApp extends LitElement {
  static properties = {
    visitCount: { state: true },
  };

  private visitCount = "...";

  protected createRenderRoot(): HTMLElement {
    return this;
  }

  connectedCallback(): void {
    super.connectedCallback();
    void this.loadVisitCounter();
  }

  private async loadVisitCounter() {
    const namespace = "rollsev-work";
    const key = "unique-visitors";
    const localFlag = "rollsev_unique_counted_v1";
    const alreadyCounted =
      typeof window !== "undefined" && window.localStorage.getItem(localFlag) === "1";
    const endpoint = alreadyCounted
      ? `https://api.countapi.xyz/get/${namespace}/${key}`
      : `https://api.countapi.xyz/hit/${namespace}/${key}`;

    try {
      const response = await fetch(endpoint, {
        method: "GET",
        cache: "no-store",
      });

      if (!response.ok) {
        this.visitCount = "N/A";
        return;
      }

      const payload = (await response.json()) as { value?: number };
      if (typeof payload.value === "number") {
        this.visitCount = payload.value.toLocaleString();
        if (!alreadyCounted && typeof window !== "undefined") {
          window.localStorage.setItem(localFlag, "1");
        }
        return;
      }
    } catch {
      // Keep graceful fallback when the counter provider is unavailable.
    }

    this.visitCount = "N/A";
  }

  render() {
    return html`
      <aside class="social-rail">
        <div class="rail-line"></div>
        <div class="social-links">
          <a href=${socialLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            ${githubIcon}
          </a>
          <a href=${socialLinks.telegram} target="_blank" rel="noreferrer" aria-label="Telegram">
            ${telegramIcon}
          </a>
        </div>
      </aside>

      <main class="layout">
        <header class="topbar">
          <div class="brand">
            <span class="logo-mark" aria-hidden="true"></span>
            <span>Denis (rollsev)</span>
          </div>

          <nav class="menu">
            <a href="#home"><span>#</span>home</a>
            <a href="#works"><span>#</span>works</a>
            <a href="#skills"><span>#</span>skills</a>
            <a href="#about-me"><span>#</span>about-me</a>
            <a href="#contacts"><span>#</span>contacts</a>
          </nav>
        </header>

        <section id="home" class="hero">
          <div>
            <h1>
              Denis (rollsev) is a <span class="accent">backend engineer</span> and
              <span class="accent">automation developer</span>
            </h1>
            <p>
              He builds Telegram bots, web apps, and AI automations for real-world
              tasks.
            </p>

            <div class="counter">
              <div class="counter-label">Public unique visitors (browser-based)</div>
              <div class="counter-value">Unique visitors: <span class="accent">${this.visitCount}</span></div>
            </div>

            <a class="btn" href=${socialLinks.telegram} target="_blank" rel="noreferrer">Contact me</a>
          </div>

          <div class="hero-media">
            <div class="outline-cube cube-a"></div>
            <div class="outline-cube cube-b"></div>
            <div class="dot-grid grid-a"></div>
            <img src="/template/hero-person.png" alt="Denis portrait" width="447" height="559" />
            <div class="status-badge">
              <span></span>
              Currently working on portfolio ecosystem
            </div>
          </div>
        </section>

        <section class="quote">
          <p>With great power comes great electricity bill</p>
          <span>- Dr. Who</span>
        </section>

        <section id="works">
          <h2><span>#</span>projects</h2>
          <div class="cards-grid">
            ${projects.map(
              (project) => html`
                <article class="project-card">
                  <div class="project-head">
                    <strong>${project.name}</strong>
                    <a href=${project.domain} target="_blank" rel="noreferrer">${project.short}</a>
                  </div>
                  <p>${project.value}</p>
                  <div class="meta">${project.problem}</div>
                  <div class="chips">
                    ${project.stack.map((item) => html`<span>${item}</span>`)}
                  </div>
                  <a class="repo" href=${project.repo} target="_blank" rel="noreferrer">Repository</a>
                </article>
              `,
            )}
          </div>
        </section>

        <section id="skills">
          <h2><span>#</span>skills</h2>

          <div class="skills-groups">
            ${stackGroups.map(
              (group) => html`
                <article class="skill-box">
                  <h3>${group.title}</h3>
                  <p>${group.items.join(" • ")}</p>
                </article>
              `,
            )}
          </div>

          <div class="core-list">
            ${coreSkills.map((item) => html`<div>${item}</div>`)}
          </div>
        </section>

        <section id="about-me" class="about">
          <div>
            <h2><span>#</span>about-me</h2>
            <p>
              Hello, I am Denis (rollsev). I am a backend engineer based in
              Moscow focused on Telegram bots, web applications, and AI-powered
              automations.
            </p>
            <p>
              I transform raw ideas into reliable production systems that solve
              real workflows.
            </p>
            <a class="btn secondary" href=${socialLinks.github} target="_blank" rel="noreferrer">Read more</a>
          </div>
          <div class="about-media">
            <img src="/template/about-person.png" alt="About portrait" width="220" height="330" />
          </div>
        </section>

        <section id="contacts">
          <h2><span>#</span>contacts</h2>
          <div class="contacts">
            <p>
              I am interested in freelance opportunities and product-focused backend roles.
              If you have another request or question, contact me directly.
            </p>
            <div class="contact-list">
              <article>
                <h4>Message me</h4>
                <a href=${socialLinks.telegram} target="_blank" rel="noreferrer">@rollsev</a>
              </article>
              <article>
                <h4>GitHub</h4>
                <a href=${socialLinks.github} target="_blank" rel="noreferrer">github.com/rollce</a>
              </article>
            </div>
          </div>
        </section>

        <footer class="footer">
          <div>
            <strong>Denis (rollsev)</strong>
            <p>Backend engineer, Telegram bot and AI automation developer</p>
          </div>
          <div class="footer-icons">
            <a href=${socialLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              ${githubIcon}
            </a>
            <a href=${socialLinks.telegram} target="_blank" rel="noreferrer" aria-label="Telegram">
              ${telegramIcon}
            </a>
          </div>
        </footer>
      </main>
    `;
  }
}

customElements.define("rollsev-app", RollsevApp);

const githubIcon = html`
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
    <path
      d="M12 2a10 10 0 0 0-3.16 19.49c.5.1.68-.21.68-.47v-1.66c-2.78.6-3.36-1.18-3.36-1.18-.45-1.14-1.11-1.45-1.11-1.45-.9-.61.07-.6.07-.6 1 .08 1.53 1.02 1.53 1.02.88 1.52 2.3 1.08 2.86.83.09-.64.34-1.08.62-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.02-2.68-.1-.25-.44-1.28.1-2.67 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.9-1.3 2.74-1.02 2.74-1.02.55 1.39.2 2.42.1 2.67.64.7 1.03 1.6 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.67.92.67 1.86v2.75c0 .26.18.58.69.47A10 10 0 0 0 12 2Z"
    ></path>
  </svg>
`;

const telegramIcon = html`
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
    <path
      d="M22.3 3.7a1.2 1.2 0 0 0-1.25-.2L2.5 10.4a1.2 1.2 0 0 0 .08 2.27l4.6 1.5 1.8 5.75a1.2 1.2 0 0 0 2.08.4l2.56-3.12 4.66 3.44c.37.27.87.31 1.28.1.41-.22.7-.66.76-1.12l2.67-14.57a1.2 1.2 0 0 0-.69-1.4ZM9.63 13.7l7.8-5.37-6.08 6.22-.8 2.86-.92-3.71Z"
    ></path>
  </svg>
`;
