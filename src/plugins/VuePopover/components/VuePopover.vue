<template>
  <div class="popover">
    <div v-show = "showContent" class="popover__content" ref = "popoverContent" v-bind:style="style">
      <slot name = "content"></slot>
    </div>
    <div class="popover__button" ref = "popoverButton" @click = "setPlacement()">
      <slot name="button"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VuePopover',
  props: {
    placement: {
      type: String,
      validator: function (value) {
        return ['top', 'right', 'bottom', 'left'].indexOf(value) !== -1;
      },
     },
    offset: {
      type: Number,
      default: 10,
      validator: function (value) {
        return value >= 0;
      },
    },
    innerWidth: {
      type: Number,
      default: 150,
      validator: function (value) {
        return value >= 0;
      },
    },
  },
  data: function() {
    return {
      showContent: true,
      style: {
        top: 0,
        left: 0,
        width: this.innerWidth + "px",
      },
      heightContent: 0,
      widthContent: 0,
    }
  },
  methods: {
    findClassName(el, cls) {
      while ( (el = el.parentElement) && !el.classList.contains(cls) );
      return el;
    },
    setPlacement() {
      const heightButton = this.$refs.popoverButton.clientHeight,
            widthButton = this.$refs.popoverButton.clientWidth;
      switch(this.placement) {
        case 'top':
          this.$set(this.style, 'top', -(this.heightContent + this.offset) + "px");
          this.$set(this.style, 'left', (widthButton / 2 - this.widthContent / 2) + "px");   
          break;
        case 'right':
          this.$set(this.style, 'left', (widthButton + this.offset) + "px");
          this.$set(this.style, 'top', (heightButton / 2 - this.heightContent / 2) + "px");
          break;
        case 'bottom':

          this.$set(this.style, 'top', heightButton + this.offset + "px");
          this.$set(this.style, 'left', (widthButton / 2 - this.widthContent / 2) + "px");
          break;
        case 'left':
          this.$set(this.style, 'left', -(this.widthContent + this.offset) + "px");
          this.$set(this.style, 'top', (heightButton / 2 - this.heightContent / 2) + "px");
          break;
      }
    }
  },

  mounted() {
    this.heightContent = this.$refs.popoverContent.clientHeight;
    this.widthContent = this.$refs.popoverContent.clientWidth;
    this.showContent = false;
  },
  created() {
    const _this = this;
    document.addEventListener('click', function (e) {
      const isButton = _this.findClassName(e.target, 'popover__button');
      const isContent = _this.findClassName(e.target, 'popover__content');
      const inThisPopover =  _this.findClassName(e.target, 'popover') === _this.$el ;

      _this.showContent = (isContent && inThisPopover 
        || !_this.showContent && isButton  && inThisPopover);

    });
  },
}
</script>

<style scoped>
  .popover {
    position: relative;
  } 
  .popover__button {
    display: inline-block;
  }
  .popover__content {
    position: absolute;
    background: #fff;
    min-width: 150px;
    border-radius: 4px;
    border: 1px solid #ebeef5;
    padding: 12px;
    z-index: 2000;
    color: #606266;
    line-height: 1.4;
    text-align: justify;
    font-size: 14px;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    overflow-x: auto;
  }
</style>
