<template>
  <div class="monitor">
    实时工况
      <iframe class="iframe" src="https://console.dafudata.com/webscada/index" frameborder="0"></iframe>
  </div>
</template>

<script>
export default {};
</script>

<style lang="">
.monitor {
  position: absolute;
  /* width: 100%; */
  /* height: 100%; */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.monitor .iframe{
    width: 100%;
    height: 100%;
}
</style>