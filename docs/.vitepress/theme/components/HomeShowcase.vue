<template>
  <div class="con-components">
    <div class="content-components">
      <!-- Component 1: Avatar card -->
      <div class="component1">
        <sv-avatar size="80" badge badge-color="danger">
          <i class="bx bx-user" style="font-size: 2rem"></i>
          <template #badge>8</template>
        </sv-avatar>
        <div class="con-text">
          <h4>Segoe cute</h4>
          <p>Do you want to participate in our initiative? We are open.</p>
          <footer>
            <sv-button danger>Open</sv-button>
            <sv-button dark shadow>cancel</sv-button>
          </footer>
        </div>
      </div>

      <!-- Component 2: Logo placeholder -->
      <div class="component2">
        <div class="logo-inner">
          <span>Sv</span>
        </div>
      </div>

      <!-- Component 3: Switches -->
      <div class="component3">
        <sv-switch v-model="switch1" />
        <sv-switch v-model="switch2" />
      </div>

      <!-- Component 4: Product card -->
      <div class="component4">
        <div class="product-img">
          <i class="bx bx-leaf" style="font-size: 3rem; color: rgba(var(--sv-primary), 0.4)"></i>
        </div>
        <h4>Potted cactus</h4>
        <sv-button block>Button</sv-button>
      </div>

      <!-- Component 5: Vue info card -->
      <div class="component5">
        <i class="bx bxs-star"></i>
        <div class="con-img">
          <img src="https://vuejs.org/images/logo.png" alt="Vue" />
        </div>
        <h4>Vuejs Components</h4>
        <p>Framework components for VueJS. Create instances quickly with a few lines of code.</p>
      </div>

      <!-- Component 6: Loading spinner -->
      <div class="component6">
        <sv-button icon dark transparent>
          <i class="bx bx-dots-vertical-rounded"></i>
        </sv-button>
        <div class="con-load"></div>
      </div>

      <!-- Component 7: Media card -->
      <div class="component7">
        <div class="con-img">
          <i class="bx bx-video"></i>
          <div class="img-placeholder"></div>
        </div>
        <header>
          <sv-button icon dark shadow>
            <i class="bx bxs-heart" style="color: rgb(255, 71, 87)"></i>
          </sv-button>
          <sv-button dark shadow>
            <i class="bx bxs-chat" style="color: rgba(var(--sv-primary), 1); margin-right: 5px"></i>
            12
          </sv-button>
        </header>
        <div class="content-text">
          <h4>Get Started</h4>
          <p>SaxVue is an open source framework and you can help even in simple details</p>
        </div>
        <footer>
          <sv-input v-model="input1" placeholder="Comment" />
          <sv-button icon flat>
            <i class="bx bx-send"></i>
          </sv-button>
        </footer>
      </div>

      <!-- Component 8: Music card -->
      <div class="component8">
        <div class="con-icon">
          <i class="bx bxs-heart"></i>
        </div>
        <div class="con-img">
          <div class="img-placeholder music-bg"></div>
          <div class="play">
            <i class="bx bxs-right-arrow"></i>
          </div>
        </div>
        <footer>
          <div>
            <h4>SaxVue 1.0</h4>
            <p>Framework</p>
          </div>
          <div class="con-avatars">
            <sv-avatar size="40" circle>
              <i class="bx bx-user" style="font-size: 1rem"></i>
            </sv-avatar>
            <sv-avatar size="40" circle primary>
              <i class="bx bx-user" style="font-size: 1rem"></i>
            </sv-avatar>
            <sv-avatar size="40" circle>
              <i class="bx bx-user" style="font-size: 1rem"></i>
            </sv-avatar>
          </div>
        </footer>
      </div>

      <!-- Component 9: Select dropdown -->
      <div class="component9">
        <sv-select v-model="selectValue" placeholder="Select">
          <sv-option label="Bruno Hoffman" value="1">Bruno Hoffman</sv-option>
          <sv-option label="Chad kerley" value="2">Chad kerley</sv-option>
          <sv-option label="Summer rose" value="3">Summer rose</sv-option>
        </sv-select>
      </div>

      <!-- Component 10: Icon buttons -->
      <div class="component10">
        <sv-button icon danger><i class="bx bx-play"></i></sv-button>
        <sv-button icon warn><i class="bx bx-git-pull-request"></i></sv-button>
        <sv-button icon primary><i class="bx bxl-github"></i></sv-button>
      </div>

      <!-- Component 11: Emoji dropdown -->
      <div :class="{ active: focusDrop }" class="component11">
        <header>
          <input
            placeholder="Dropdown"
            @blur="handleBlurDrop"
            @click="handleClickDrop"
            readonly
            type="text"
          />
          <i class="bx bx-chevron-down"></i>
        </header>
        <div class="liquid"></div>
        <ul :class="{ active: focusDrop }">
          <li>😉</li>
          <li>😺</li>
          <li>😽</li>
          <li>😎</li>
          <li>😂</li>
        </ul>
      </div>

      <!-- Component 12: Search bar -->
      <div class="component12">
        <sv-input v-model="input2" placeholder="Search" />
        <sv-button icon primary class="search-btn">
          <i class="bx bx-search"></i>
        </sv-button>
      </div>

      <!-- Component 13: Checkbox card -->
      <div class="component13">
        <header>
          <sv-input v-model="input3" placeholder="Location" />
          <sv-button icon border>
            <i class="bx bx-chevron-right"></i>
          </sv-button>
        </header>
        <ul>
          <li v-for="(cb, i) in checkboxes" :key="i">
            <sv-checkbox v-model="cb.checked">{{ cb.label }}</sv-checkbox>
          </li>
        </ul>
        <sv-button primary block>Lets Go!</sv-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';

const switch1 = ref(false);
const switch2 = ref(true);
const selectValue = ref('');
const focusDrop = ref(false);
const input1 = ref('');
const input2 = ref('');
const input3 = ref('');

const checkboxes = reactive([
  { label: 'Spain', checked: true },
  { label: 'Germany', checked: false },
  { label: 'Italy', checked: false },
  { label: 'Japan', checked: false },
]);

function handleClickDrop() {
  focusDrop.value = !focusDrop.value;
}
function handleBlurDrop() {
  setTimeout(() => {
    focusDrop.value = false;
  }, 100);
}
</script>

<style scoped>
@keyframes componentAnimate {
  0% {
    transform: translate(0px);
  }
  30% {
    transform: translate(0, -10px);
  }
  50% {
    transform: translate(0, 4px);
  }
  70% {
    transform: translate(0, -15px);
  }
  100% {
    transform: translate(0px);
  }
}
@keyframes rotate-load {
  0% {
    transform: rotate(45deg);
  }
  10% {
    transform: rotate(405deg);
  }
  100% {
    transform: rotate(405deg);
  }
}

/* Container */
.con-components {
  width: 60%;
  position: absolute;
  right: 0;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scale(0.8);
  z-index: 100;
}
.content-components {
  position: relative;
  width: 1100px;
  height: 100%;
}

/* Component 1: Avatar card */
.component1 {
  border-radius: 35px;
  width: 400px;
  box-shadow: 0px 15px 30px -8px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 15px;
  background: var(--sv-theme-layout);
  transition: all 0.25s ease;
  animation: componentAnimate 15s infinite ease;
  position: absolute;
  top: 0px;
  left: 0px;
}
.component1:hover {
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.1);
  transform: translate(0, 5px);
}
.component1 .con-text {
  padding: 0 20px;
  position: relative;
  background: transparent;
  width: calc(100% - 100px);
  padding-left: 23px;
}
.component1 .con-text h4 {
  margin: 0;
  padding: 0 0 5px;
}
.component1 .con-text p {
  font-size: 0.8rem;
  padding-bottom: 20px;
  margin: 0;
  opacity: 0.6;
}
.component1 .con-text footer {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: -30px;
  gap: 6px;
}

/* Component 2: Logo */
.component2 {
  width: 140px;
  height: 140px;
  position: absolute;
  left: 460px;
  top: 0px;
  box-shadow: 0px 15px 30px -8px rgba(0, 0, 0, 0.08);
  border-radius: 30%;
  background: var(--sv-theme-layout);
  transition: all 0.25s ease;
  animation: componentAnimate 19s infinite ease reverse;
  overflow: hidden;
}
.component2:hover {
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.1);
  transform: translate(0, 7px);
}
.component2 .logo-inner {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(var(--sv-primary), 0.06);
  border-radius: inherit;
}
.component2 .logo-inner span {
  font-size: 2.2rem;
  font-weight: 800;
  color: rgba(var(--sv-primary), 1);
}

/* Component 3: Switches */
.component3 {
  position: absolute;
  left: 650px;
  top: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  transition: all 0.25s ease;
  animation: componentAnimate 21s infinite ease alternate;
}

/* Component 4: Product card */
.component4 {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  width: 140px;
  background: var(--sv-theme-layout);
  padding: 10px;
  border-radius: 30px;
  user-select: none;
  box-shadow: 0px 15px 30px -8px rgba(0, 0, 0, 0.08);
  transition: all 0.25s ease;
  animation: componentAnimate 16s infinite ease;
  left: 668px;
  top: 120px;
}
.component4:hover {
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.1);
  transform: translate(0, 7px);
}
.component4 .product-img {
  width: 120px;
  height: 120px;
  border-radius: 30px;
  background: rgba(var(--sv-primary), 0.06);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.25s ease;
}
.component4:hover .product-img {
  transform: scale(1.2) translate(0px, -10px);
}
.component4 h4 {
  margin: 0;
  margin-top: 8px;
  margin-bottom: 6px;
  font-size: 0.8rem;
}

/* Component 5: Vue info card */
.component5 {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  width: 220px;
  background: var(--sv-theme-layout);
  padding: 20px;
  border-radius: 30px;
  left: 860px;
  top: 85px;
  user-select: none;
  box-shadow: 0px 15px 30px -8px rgba(0, 0, 0, 0.08);
  transition: all 0.25s ease;
  animation: componentAnimate 13s infinite ease reverse;
}
.component5:hover {
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.1);
  transform: translate(0, 7px);
}
.component5:hover .con-img {
  transform: scale(1.2) translate(0px, -10px);
}
.component5 > i {
  position: absolute;
  top: 15px;
  right: 15px;
  opacity: 0.2;
}
.component5 .con-img {
  width: 90px;
  height: 90px;
  border-radius: 25px;
  overflow: hidden;
  background: rgba(65, 184, 131, 0.08);
  transition: all 0.25s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}
.component5 .con-img img {
  padding: 20px;
  width: 100%;
}
.component5 h4 {
  margin: 10px 0;
  font-size: 0.8rem;
}
.component5 p {
  font-size: 0.7rem;
  opacity: 0.6;
  text-align: center;
  margin: 0;
}

/* Component 6: Loading */
.component6 {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  width: 160px;
  height: 160px;
  background: var(--sv-theme-layout);
  padding: 20px;
  border-radius: 30px;
  left: 920px;
  top: 350px;
  user-select: none;
  box-shadow: 0px 15px 30px -8px rgba(0, 0, 0, 0.08);
  transition: all 0.25s ease;
  z-index: 200;
  animation: componentAnimate 18s infinite ease alternate;
}
.component6:hover {
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.1);
  transform: translate(0, 7px);
}
.component6 :deep(.sv-button) {
  position: absolute;
  top: 5px;
  right: 5px;
}
.component6 .con-load {
  width: 85px;
  height: 85px;
  border-radius: 50%;
  border: 8px solid rgba(var(--sv-primary), 1);
  box-shadow: 0px 0px 20px 0px rgba(var(--sv-primary), 0.1),
    inset 0px 0px 20px 0px rgba(var(--sv-primary), 0.1);
  border-left: 8px solid rgba(var(--sv-primary), 0.1);
  transform: rotate(45deg);
  animation: rotate-load infinite 8s ease;
}

/* Component 7: Media card */
.component7 {
  width: 260px;
  background: var(--sv-theme-layout);
  border-radius: 30px;
  padding: 15px;
  position: absolute;
  left: 760px;
  top: 410px;
  z-index: 100;
  box-shadow: 0px 15px 30px -8px rgba(0, 0, 0, 0.08);
  transition: all 0.25s ease;
  animation: componentAnimate 15s infinite ease;
}
.component7:hover {
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.1);
  transform: translate(0, 7px);
}
.component7 .con-img {
  width: 230px;
  height: 200px;
  position: relative;
  overflow: hidden;
  border-radius: 30px 30px 30px 8px;
  z-index: 100;
}
.component7 .con-img > i {
  position: absolute;
  top: 20px;
  left: 20px;
  color: #fff;
  font-size: 1.2rem;
  z-index: 5;
}
.component7 .con-img .img-placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(var(--sv-primary), 0.3), rgba(var(--sv-primary), 0.15));
}
.component7 header {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 10px;
  margin-top: -20px;
  z-index: 200;
  position: relative;
  gap: 5px;
}
.component7 .content-text h4 {
  margin: 0;
  margin-top: 15px;
}
.component7 .content-text p {
  margin: 5px 0;
  font-size: 0.7rem;
  opacity: 0.6;
}
.component7 footer {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  gap: 8px;
}
.component7 footer :deep(.sv-input-parent) {
  width: calc(100% - 50px);
}

/* Component 8: Music card */
.component8 {
  width: 260px;
  background: var(--sv-theme-layout);
  border-radius: 30px;
  padding: 15px;
  position: absolute;
  left: 365px;
  top: 180px;
  z-index: 100;
  box-shadow: 0px 15px 30px -8px rgba(0, 0, 0, 0.08);
  transition: all 0.25s ease;
  animation: componentAnimate 22s infinite ease reverse;
}
.component8:hover {
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.1);
  transform: translate(0, 7px);
}
.component8 .con-icon {
  position: absolute;
  top: -20px;
  left: -20px;
  width: 60px;
  height: 60px;
  border-radius: 22px;
  background: var(--sv-theme-layout);
  box-shadow: 10px 12px 50px -6px rgba(0, 0, 0, 0.3);
  z-index: 300;
  display: flex;
  align-items: center;
  justify-content: center;
}
.component8 .con-icon i {
  color: rgb(255, 71, 87);
  font-size: 1.4rem;
}
.component8 .con-img {
  width: 230px;
  height: 250px;
  position: relative;
  overflow: hidden;
  border-radius: 30px 30px 30px 8px;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.component8 .con-img .music-bg {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(var(--sv-primary), 0.4), rgba(100, 50, 200, 0.3));
  display: flex;
  align-items: center;
  justify-content: center;
}
.component8 .con-img .play {
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.3);
  position: absolute;
  border-radius: 50%;
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.25s ease;
}
.component8 .con-img:hover .play {
  width: 80px;
  height: 80px;
  border-radius: 25px;
}
.component8 .con-img .play i {
  font-size: 1.5rem;
  color: #fff;
}
.component8 footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
}
.component8 footer h4 {
  margin: 0;
}
.component8 footer p {
  font-size: 0.8rem;
  margin: 0;
}
.component8 footer .con-avatars {
  display: flex;
  align-items: center;
  justify-content: center;
}
.component8 footer .con-avatars :deep(.sv-avatar-content) {
  margin-left: -15px;
  border: 2px solid var(--sv-theme-layout);
}
.component8 footer .con-avatars :deep(.sv-avatar-content:first-child) {
  margin-left: 0;
}

/* Component 9: Select */
.component9 {
  position: absolute;
  top: 580px;
  left: 490px;
  transition: all 0.25s ease;
  border-radius: 15px;
  user-select: none;
  animation: componentAnimate 19s infinite ease-out alternate;
  min-width: 200px;
}
.component9:hover {
  transform: translate(0, 5px);
}

/* Component 10: Icon buttons */
.component10 {
  top: 600px;
  position: absolute;
  left: 360px;
  background: var(--sv-theme-layout);
  border-radius: 18px;
  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.04);
  transition: all 0.25s ease;
  animation: componentAnimate 14s infinite ease;
  display: flex;
  padding: 15px;
  gap: 5px;
}
.component10:hover {
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.1);
  transform: translate(0, 5px);
}

/* Component 11: Emoji dropdown */
.component11 {
  position: absolute;
  top: 640px;
  left: 100px;
  transition: all 0.25s ease;
  border-radius: 15px;
  user-select: none;
  animation: componentAnimate 16s infinite ease reverse;
}
.component11 .liquid {
  width: 20px;
  background: var(--sv-theme-layout);
  height: 15px;
  right: 30px;
  position: absolute;
  bottom: 0;
  transform: translate(0, 80%) scaleX(0.4);
  z-index: 200;
  opacity: 0;
  transition: all 0.25s ease;
}
.component11.active .liquid {
  opacity: 1;
  transform: translate(0, 100%);
}
.component11.active header i {
  transform: rotate(-180deg);
}
.component11 header {
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.component11 header input {
  background: var(--sv-theme-layout);
  padding: 12px 15px;
  width: 100%;
  border: 0;
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.25s ease;
  font-size: 0.8rem;
  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.04);
  max-width: 170px;
  outline: none;
  color: var(--sv-theme-color);
  font-family: inherit;
}
.component11 header i {
  position: absolute;
  right: 12px;
  pointer-events: none;
  font-size: 1.4rem;
  transition: all 0.25s ease;
}
.component11 ul {
  width: 100%;
  position: absolute;
  top: 0;
  background: var(--sv-theme-layout);
  list-style: none;
  border-radius: 15px;
  padding: 7px 0 5px;
  opacity: 0;
  visibility: hidden;
  transition: all 0.25s ease;
  z-index: 100;
  transform: translate(0, 10px);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.04);
  margin: 0;
}
.component11 ul.active {
  opacity: 1;
  visibility: visible;
  transform: translate(0, 40px);
}
.component11 ul li {
  padding: 7px 4px;
  font-size: 0.8rem;
  transition: all 0.25s ease;
  cursor: pointer;
}
.component11 ul li:hover {
  transform: scale(1.3);
}

/* Component 12: Search */
.component12 {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 540px;
  left: 0;
  transition: all 0.25s ease;
  animation: componentAnimate 20s infinite ease alternate;
}
.component12 :deep(.sv-input-parent) {
  width: 275px;
}
.component12 :deep(.sv-input-content) {
  background: var(--sv-theme-layout);
  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.04);
}
.component12 .search-btn {
  margin-left: -5px;
  z-index: 10;
}

/* Component 13: Checkbox card */
.component13 {
  width: 300px;
  padding: 15px;
  background: var(--sv-theme-layout);
  border-radius: 20px;
  top: 180px;
  left: 0;
  position: absolute;
  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.04);
  transition: all 0.25s ease;
  animation: componentAnimate 18s infinite ease;
}
.component13:hover {
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.1);
  transform: translate(0, 5px);
}
.component13 header {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 10px;
}
.component13 header :deep(.sv-input-parent) {
  width: calc(100% - 50px);
}
.component13 ul {
  margin: 0;
  padding: 10px 0;
  list-style: none;
}
.component13 ul li {
  padding: 3px 0;
}

/* Responsive */
@media (max-width: 1150px) {
  .content-components {
    transform: scale(0.7);
  }
}
@media (max-width: 960px) {
  .con-components {
    width: 100%;
    position: relative;
    right: auto;
    height: auto;
    min-height: 600px;
    margin-top: 20px;
  }
  .content-components {
    transform: scale(0.7);
    width: 100% !important;
  }
}
@media (max-width: 760px) {
  .con-components {
    display: none;
  }
}

/* Dark mode overrides */
:global(.dark) .component1,
:global(.dark) .component2,
:global(.dark) .component4,
:global(.dark) .component5,
:global(.dark) .component6,
:global(.dark) .component7,
:global(.dark) .component8,
:global(.dark) .component10,
:global(.dark) .component13 {
  background: var(--sv-theme-bg2);
}
:global(.dark) .component11 header input {
  background: var(--sv-theme-bg2);
}
:global(.dark) .component11 ul {
  background: var(--sv-theme-bg2);
}
:global(.dark) .component8 .con-icon {
  background: var(--sv-theme-bg2);
}
</style>
