<template>
  <div>
    <input id="menu" type="checkbox" />
    <label for="menu">
      <svg class="burger" width="86" height="60" viewBox="0 0 150 150">
        <g stroke-width="8">
          <line x1="6" y1="6" x2="80" y2="6" />
          <line x1="6" y1="28" x2="80" y2="28" />
          <line x1="6" y1="50" x2="80" y2="50" />
        </g>
      </svg>
      <svg class="close" width="86" height="60" viewBox="0 0 150 150">
        <g stroke-width="8">
          <line x1="42" y1="6" x2="42" y2="80" />
          <line x1="6" y1="42" x2="80" y2="42" />
        </g>
      </svg>
    </label>
    <div class="menu">
      <n-link to="/">
        <div>Home</div>
      </n-link>
      <n-link to="/a-consilio">
        <div>A Consilio</div>
      </n-link>
      <n-link to="/metodologia">
        <div>Metodologia</div>
      </n-link>
      <n-link to="/estrategias">
        <div>Estratégias</div>
      </n-link>
      <n-link to="/contato">
        <div>Contato</div>
      </n-link>
    </div>
  </div>
</template>