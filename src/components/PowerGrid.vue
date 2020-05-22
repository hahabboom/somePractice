<template>
    <div class="content">
      <div class="result-back">
        <div v-for="i in 10"></div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'PowerGrid',
  data () {
    return {
      interval: null
    }
  },
  props: {},
  watch: {},
  methods: {
    // 看见了关于闭包打印的题然后想到了可以做这种一格一格亮着的灯（第一版）
    getStateProgressVersion1 () {
      var connect = document.getElementsByClassName('result-back')
        for (var i = 0; i < 10; i++) {
          (function (j) {
            setTimeout(function () {
              connect[0].children[j].className = 'status-check'
            }, 400 * j)
          })(i)
        }
    },
    //就想着可不可以做那种一直亮下去，满了清掉再重来的（第二版）
    getStateProgressVersion2 () {
      var connect = document.getElementsByClassName('result-back')
      let index = 0
      if (!this.interval) {
        this.interval = setInterval(() => {
          connect[0].children[index].className = 'status-check'
          index++
          if (index === 10) {
            for (let i = 0; i < connect[0].children.length; i++) {
              connect[0].children[i].classList.remove('status-check')
            }
            index = 0
          }
        }, 200)
      }
    },
  },
  computed: {},
  created () {
  },
  mounted () {
    this.getStateProgressVersion2()
  }
}
</script>

<style scoped lang="scss">
  .result-back{
    width: calc(100% - 120px - 148px);
    height: 100%;
    display: flex;
    margin-top: 10px;
    >div{
      height: 46px;
      width: 18px;
      margin-left: 5px;
      border: 1px solid RGBA(145, 217, 254, 1);
    }
    .status-check{
      background:linear-gradient(to top,#60FC87,#5091FB);
      box-shadow: 0 0 5px #5EEE96
    }
  }
</style>
