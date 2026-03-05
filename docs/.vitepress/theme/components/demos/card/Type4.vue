<template>
  <div style="display: flex; justify-content: center">
    <sv-card type="4">
      <template #title>
        <h3>Art paintings</h3>
      </template>
      <template #img>
        <img src="/foto9.png" alt="card image" />
      </template>
      <template #text>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      </template>
      <template #interactions>
        <sv-button danger icon>
          <i class="bx bx-heart"></i>
        </sv-button>
        <sv-button shadow primary>
          <i class="bx bx-chat"></i>
          <span style="padding-left: 5px; font-weight: bold">54</span>
        </sv-button>
      </template>
    </sv-card>
  </div>
</template>
