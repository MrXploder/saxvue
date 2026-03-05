<template>
  <div class="sv-home">
    <!-- Hero Section -->
    <section class="sv-hero">
      <div class="points-grid">
        <span v-for="n in 16" :key="n" />
      </div>
      <div class="circle-deco" />

      <div class="hero-content">
        <h1>
          <b>SaxVue</b> Framework <br />
          Components for
          <a target="_blank" href="https://vuejs.org/">Vue 3</a>
        </h1>
        <p class="description">We love what we do. Let us help you do what <b>You love</b>.</p>

        <div class="hero-buttons">
          <a class="btn-primary" href="/saxvue/docs/guide/">Get Started</a>
          <a class="btn-outline btn-discord" target="_blank" href="https://discord.gg/6AZNXEa">
            <i class="bx bxl-discord" />
            Discord
          </a>
          <a
            class="btn-outline btn-github"
            target="_blank"
            href="https://github.com/MrXploder/saxvue"
          >
            <i class="bx bxl-github" />
          </a>
        </div>
      </div>

      <div class="hero-showcase">
        <HomeShowcase />
      </div>
    </section>

    <!-- Feature 1: Reusable Components -->
    <section class="sv-feature">
      <div class="feature-visual">
        <div class="feature-placeholder feature-placeholder--1">
          <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            <rect
              x="20"
              y="20"
              width="360"
              height="260"
              rx="20"
              fill="rgba(26,92,255,0.05)"
              stroke="rgba(26,92,255,0.15)"
              stroke-width="2"
            />
            <rect x="50" y="60" width="120" height="40" rx="10" fill="rgba(26,92,255,0.2)" />
            <rect x="50" y="120" width="180" height="12" rx="6" fill="rgba(26,92,255,0.1)" />
            <rect x="50" y="145" width="140" height="12" rx="6" fill="rgba(26,92,255,0.07)" />
            <rect x="50" y="185" width="100" height="36" rx="12" fill="rgba(26,92,255,1)" />
            <rect x="230" y="60" width="120" height="120" rx="15" fill="rgba(26,92,255,0.08)" />
            <circle cx="290" cy="100" r="25" fill="rgba(26,92,255,0.15)" />
            <rect x="260" y="140" width="60" height="10" rx="5" fill="rgba(26,92,255,0.1)" />
          </svg>
        </div>
      </div>
      <div class="feature-text">
        <h2><b>Reusable Components</b> and easy to implement</h2>
        <p>
          With <b>SaxVue</b> you can use any component with few lines of code and with great
          customization, and most importantly very easy to use and understand.
        </p>
        <a class="btn-action" href="/saxvue/docs/components/">Components</a>
      </div>
    </section>

    <!-- Feature 2: Responsive -->
    <section class="sv-feature reverse">
      <div class="feature-visual">
        <div class="feature-placeholder feature-placeholder--2">
          <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            <rect
              x="80"
              y="30"
              width="240"
              height="160"
              rx="12"
              fill="rgba(26,92,255,0.05)"
              stroke="rgba(26,92,255,0.15)"
              stroke-width="2"
            />
            <rect x="95" y="50" width="70" height="120" rx="8" fill="rgba(26,92,255,0.1)" />
            <rect x="175" y="50" width="130" height="55" rx="8" fill="rgba(26,92,255,0.08)" />
            <rect x="175" y="115" width="60" height="55" rx="8" fill="rgba(26,92,255,0.12)" />
            <rect x="245" y="115" width="60" height="55" rx="8" fill="rgba(26,92,255,0.06)" />
            <rect
              x="140"
              y="220"
              width="120"
              height="50"
              rx="8"
              fill="rgba(26,92,255,0.05)"
              stroke="rgba(26,92,255,0.15)"
              stroke-width="2"
            />
            <rect x="150" y="230" width="100" height="8" rx="4" fill="rgba(26,92,255,0.12)" />
            <rect x="150" y="245" width="70" height="8" rx="4" fill="rgba(26,92,255,0.08)" />
          </svg>
        </div>
      </div>
      <div class="feature-text">
        <h2>Do you need support for applications or <b>Responsive Pages</b>?</h2>
        <p>
          SaxVue components have responsive support and adapt to each type of size, apart from that
          you can easily use the grid components to generate
          <b>visual changes based on screen size</b> either a <b>phone</b>, <b>tablet</b> or
          <b>desktop</b>.
        </p>
        <a class="btn-action" href="/saxvue/docs/layout/">Design grid</a>
      </div>
    </section>

    <!-- Uses Section -->
    <section class="sv-uses">
      <header>
        <h2>
          These are some of the <b>libraries</b>, <b>languages</b> and <b>technologies</b> we use to
          create this beautiful
          <b>framework</b>
        </h2>
      </header>
      <div class="uses-grid">
        <div v-for="tech in techs" :key="tech.name" class="use-item">
          <div
            style="
              width: 50px;
              height: 50px;
              background: rgba(26, 92, 255, 0.08);
              border-radius: 12px;
              display: flex;
              align-items: center;
              justify-content: center;
            "
          >
            <i :class="tech.icon" style="font-size: 1.5rem; color: rgba(26, 92, 255, 0.6)"></i>
          </div>
          <p>{{ tech.name }}</p>
        </div>
      </div>
    </section>

    <!-- Feature 3: Help create projects -->
    <section class="sv-feature">
      <div class="feature-visual">
        <div class="feature-placeholder feature-placeholder--3">
          <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            <rect
              x="40"
              y="40"
              width="320"
              height="220"
              rx="16"
              fill="rgba(26,92,255,0.04)"
              stroke="rgba(26,92,255,0.12)"
              stroke-width="2"
            />
            <rect x="60" y="70" width="80" height="25" rx="12" fill="rgba(26,92,255,1)" />
            <rect x="150" y="70" width="80" height="25" rx="12" fill="rgba(26,92,255,0.15)" />
            <rect x="60" y="115" width="280" height="10" rx="5" fill="rgba(26,92,255,0.08)" />
            <rect x="60" y="135" width="200" height="10" rx="5" fill="rgba(26,92,255,0.06)" />
            <rect x="60" y="165" width="130" height="30" rx="10" fill="rgba(26,92,255,0.1)" />
            <rect x="200" y="165" width="130" height="30" rx="10" fill="rgba(26,92,255,0.07)" />
            <rect x="60" y="210" width="90" height="30" rx="10" fill="rgba(26,92,255,0.9)" />
          </svg>
        </div>
      </div>
      <div class="feature-text">
        <h2>
          <b>SaxVue</b> is here to help you create your ideas and develop those
          <b>great projects</b>
        </h2>
        <p>
          Do you have an idea? or some project for a client, SaxVue can help you
          <b>create faster and work less</b> giving you everything you need to implement an
          interface from the simplest to the most complex.
        </p>
        <a class="btn-action" href="/saxvue/docs/guide/gettingStarted"> Get Started </a>
      </div>
    </section>

    <!-- Feature 4: Unique design -->
    <section class="sv-feature reverse">
      <div class="feature-visual">
        <div class="feature-placeholder feature-placeholder--4">
          <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            <circle
              cx="200"
              cy="150"
              r="120"
              fill="rgba(26,92,255,0.04)"
              stroke="rgba(26,92,255,0.1)"
              stroke-width="2"
            />
            <circle cx="200" cy="150" r="80" fill="rgba(26,92,255,0.06)" />
            <circle cx="200" cy="150" r="40" fill="rgba(26,92,255,0.15)" />
            <circle cx="200" cy="150" r="15" fill="rgba(26,92,255,1)" />
            <rect x="100" y="40" width="50" height="20" rx="10" fill="rgba(26,92,255,0.15)" />
            <rect x="280" y="80" width="60" height="20" rx="10" fill="rgba(26,92,255,0.1)" />
            <rect x="60" y="200" width="70" height="20" rx="10" fill="rgba(26,92,255,0.12)" />
          </svg>
        </div>
      </div>
      <div class="feature-text">
        <h2><b>Unique and beautiful</b> design</h2>
        <p>
          <b>Our designs are unique</b> for each component and are not anchored to any visual trends
          or design rules, which makes us unique and of course your projects as well.
        </p>
      </div>
    </section>

    <!-- Footer -->
    <footer class="sv-footer">
      <div class="footer-links">
        <ul>
          <li class="title">SaxVue</li>
          <li><a href="/saxvue/docs/guide/">What is SaxVue?</a></li>
          <li><a href="/saxvue/docs/guide/">Why SaxVue?</a></li>
          <li><a href="/saxvue/docs/guide/gettingStarted">Getting Started</a></li>
        </ul>
        <ul>
          <li class="title">Resources</li>
          <li><a href="/saxvue/docs/components/">Documentation</a></li>
          <li><a href="https://github.com/MrXploder/saxvue" target="_blank">GitHub</a></li>
          <li><a href="https://www.npmjs.com/package/@mrxploder/saxvue" target="_blank">npm</a></li>
        </ul>
        <ul>
          <li class="title">Community</li>
          <li><a href="https://github.com/MrXploder/saxvue/issues" target="_blank">Issues</a></li>
          <li>
            <a href="https://github.com/MrXploder/saxvue/releases" target="_blank">Releases</a>
          </li>
          <li>
            <a href="https://github.com/MrXploder/saxvue/pulls" target="_blank">Pull Requests</a>
          </li>
        </ul>
      </div>
      <div class="copy">
        Copyright © {{ new Date().getFullYear() }} SaxVue — Created by
        <a href="https://github.com/MrXploder" target="_blank">MrXploder</a>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import HomeShowcase from './HomeShowcase.vue';

const techs = [
  { name: 'Vue 3', icon: 'bx bxl-vuejs' },
  { name: 'TypeScript', icon: 'bx bxl-typescript' },
  { name: 'JavaScript', icon: 'bx bxl-javascript' },
  { name: 'Sass', icon: 'bx bxl-sass' },
  { name: 'Webpack', icon: 'bx bx-package' },
  { name: 'Jest', icon: 'bx bx-test-tube' },
  { name: 'Storybook', icon: 'bx bx-book-open' },
  { name: 'VitePress', icon: 'bx bx-file' },
];
</script>
