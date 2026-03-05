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
        <img class="light-img" src="/vuesax-white-1.svg" alt="Reusable Components" />
        <img class="dark-img" src="/vuesax-dark-1.svg" alt="Reusable Components" />
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
        <img class="light-img" src="/vuesax-white-2.svg" alt="Responsive Design" />
        <img class="dark-img" src="/vuesax-dark-2.svg" alt="Responsive Design" />
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
          <div class="use-img-container">
            <img :class="{ 'light-img': tech.img2 }" :src="tech.img" :alt="tech.name" />
            <img v-if="tech.img2" class="dark-img" :src="tech.img2" :alt="tech.name" />
          </div>
          <p>{{ tech.name }}</p>
        </div>
      </div>
    </section>

    <!-- Feature 3: Help create projects -->
    <section class="sv-feature">
      <div class="feature-visual">
        <img class="light-img" src="/vuesax-white-4.svg" alt="Create Projects" />
        <img class="dark-img" src="/vuesax-dark-4.svg" alt="Create Projects" />
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
        <img class="light-img" src="/vuesax-white-3.svg" alt="Unique Design" />
        <img class="dark-img" src="/vuesax-dark-3.svg" alt="Unique Design" />
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
  { name: 'Vuejs', img: '/use/vuejs-vuesax-1.png' },
  { name: 'Javascript', img: '/use/js-javaScript-vuesax.png' },
  { name: 'Typescript', img: '/use/typescript-vuesax.png' },
  { name: 'Sass', img: '/use/sass-vuesax-4.png' },
  { name: 'Vuepress', img: '/use/vuepress-vuesax-5.png' },
  { name: 'Babel', img: '/use/babel-vuesax-6.png' },
  { name: 'Jest', img: '/use/jest-vuesax-8-w.svg', img2: '/use/jest-vuesax-8.svg' },
  { name: 'Boxicons', img: '/use/boxicons-vuesax-10.png', img2: '/use/boxicons-vuesax-9.png' },
  { name: 'Adobe XD', img: '/use/adobe-xd-1.svg' },
  { name: 'Webpack', img: '/use/webpack-vuesax-13.png', img2: '/use/webpack-vuesax-12.png' },
  { name: 'Illustrator', img: '/use/illustrator-vuesax-11.png' },
];
</script>
