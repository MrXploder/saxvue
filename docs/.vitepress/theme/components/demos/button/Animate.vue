<template>
  <div class="center">
    <sv-button
      >Home<template #animate><i class="bx bx-home-alt"></i></template
    ></sv-button>
    <sv-button flat success animation-type="vertical"
      >Message<template #animate><i class="bx bx-mail-send"></i> Send</template></sv-button
    >
    <sv-button gradient style="min-width: 60px" warn animation-type="scale"
      ><i class="bx bxs-shopping-bag"></i><template #animate>Store</template></sv-button
    >
    <sv-button icon relief danger animation-type="rotate"
      ><i class="bx bx-like"></i><template #animate><i class="bx bxs-like"></i></template
    ></sv-button>
  </div>
</template>
