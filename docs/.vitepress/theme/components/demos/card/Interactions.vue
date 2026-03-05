<template>
  <div style="display: flex; justify-content: center">
    <sv-card>
      <template #title><h3>Interactive Card</h3></template>
      <template #img><img src="/foto11.png" alt="card" /></template>
      <template #text><p>Hover to see interactions</p></template>
      <template #interactions>
        <sv-button icon flat danger>
          <i class="bx bx-heart"></i>
        </sv-button>
        <sv-button icon flat>
          <i class="bx bx-chat"></i>
        </sv-button>
        <sv-button icon flat>
          <i class="bx bx-share-alt"></i>
        </sv-button>
      </template>
    </sv-card>
  </div>
</template>
