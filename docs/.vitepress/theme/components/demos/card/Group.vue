<template>
  <div style="display: flex; justify-content: center">
    <sv-card-group>
      <sv-card v-for="card in 4" :key="card">
        <template #title>
          <h3>Pot with a plant</h3>
        </template>
        <template #img>
          <img :src="`https://picsum.photos/400/200?random=${card}`" alt="card image" />
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
    </sv-card-group>
  </div>
</template>
