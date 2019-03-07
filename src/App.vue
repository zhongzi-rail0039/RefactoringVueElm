<template>
  <div id="app">
    <cube-button>Button</cube-button>
    <cube-button :primary="true">Primary Button</cube-button>
    <cube-popup type="my-popup" ref="myPopup">
      My Popup Content 1
    </cube-popup>
    <cube-button @click="showPopup('myPopup')">
      Show Popup
    </cube-button>
    <p class="tip-eg">
      <span>cube-ui</span>
      <cube-tip
        ref="tip2"
        :direction="direction"
        :style="tipStyle"
        @close="close"
        @click="clickHandler">
        <div>Awesome!</div>
      </cube-tip>
    </p>
    <cube-button @click="showTip('bottom')">top</cube-button>
    <cube-button @click="showTip('top')">bottom</cube-button>
    <cube-button @click="showTip('right')">left</cube-button>
    <cube-button @click="showTip('left')">right</cube-button>
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  data () {
    return {
      direction: '',
      tipStyle: ''
    }
  },
  methods: {
    showPopup (refId) {
      const component = this.$refs[refId]
      component.show()
      setTimeout(() => {
        component.hide()
      }, 1000)
    },
    showTip (direction) {
      this.direction = direction
      this.$refs.tip2.show()

      switch (direction) {
        case 'top':
          this.tipStyle = 'left: 100px; top: 30px;'
          break
        case 'bottom':
          this.tipStyle = 'left: 100px; top: -50px;'
          break
        case 'left':
          this.tipStyle = 'left: 200px; top: -10px;'
          break
        case 'right':
          this.tipStyle = 'left: 2px; top: -10px;'
          break
      }
    },
    close () {
      console.log('click close button')
    },
    clickHandler () {
      console.log('click tip area')
    }
  },
  components: {
    HelloWorld
  }
}
</script>
<style lang="stylus">
</style>
