<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        12311111111
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  // name: 'header'
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/variable.styl"
  @import "../../common/stylus/mixin.styl"
  .header {
    position: relative;
    overflow: hidden;
    background-color: $color-background-ss;
    color: $color-white; // ./var/color.styl 文件中取值
  }
</style>
