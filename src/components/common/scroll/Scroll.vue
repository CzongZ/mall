<template>
  <div ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

	export default {
		name: "Scroll",
    props: {
		  probeType: {
		    type: Number,
        default: 1
      },
      data: {
		    type: Array,
        default: () => {
          return []
        }
      },
      pullUpLoad: {
		    type: Boolean,
        default: false
      },
      pullDownRefresh: {
        type: Boolean,
        default: false
      }
    },
    data() {
		  return {
		    scroll: {}
      }
    },
    mounted() {
		  setTimeout(this.__initScroll, 100)
    },
    methods: {
		  __initScroll() {
		    // 1.初始化BScroll对象
		    if (!this.$refs.wrapper) return
        this.scroll = new BScroll(this.$refs.wrapper, {
          /**
           * probeType:是否监听滚动，默认0，可选1,2,3,4
           * 作用：有时候我们需要知道滚动的位置。
           * 当 probeType 为 1 的时候，会非实时（屏幕滑动超过一定时间后）派发scroll 事件；
           * 当 probeType 为 2 的时候，会在屏幕滑动的过程中实时的派发 scroll 事件；
           * 当 probeType 为 3 的时候，不仅在屏幕滑动的过程中，而且在 momentum 滚动动画运行过程中实时派发 scroll 事件。
           */
          probeType: this.probeType,
          /**
           * 是否实现内部组件的点击事件
           */
          click: true,
          /**
           * 作用：这个配置用于做上拉加载功能，默认为 false。
           * 当设置为 true 或者是一个 Object 的时候，可以开启上拉加载，可以配置离底部距离阈值（threshold）来决定开始加载的时机，
           */
          pullUpLoad: this.pullUpLoad,
          /**
           * 作用：这个配置用于做下拉刷新功能，默认为 false。
           * 当设置为 true 或者是一个 Object 的时候，可以开启下拉刷新，可以配置顶部下拉的距离（threshold） 来决定刷新时机以及回弹停留的距离（stop）
           */
          pullDownRefresh: this.pullDownRefresh
        })

        // 2.将监听事件回调  监听scroll滚动
        this.scroll.on('scroll', pos => {
          this.$emit('scroll', pos)
        })

        // 3.监听上拉到底部
        this.scroll.on('pullingUp', () => {
          console.log('上拉加载');
          this.$emit('pullingUp')
        })
        // 4.监听顶部下拉
        // this.scroll.on('pullingDown', () => {
        //   console.log("--下拉刷新--");
        // })
      },
      refresh() {
        //scroll 刷新 重新计算高度
        console.log("scroll进行了刷新");
        this.scroll && this.scroll.refresh && this.scroll.refresh()
      },
      finishPullUp() {
        //完成上拉加载
		    this.scroll && this.scroll.finishPullUp && this.scroll.finishPullUp()
      },
      scrollTo(x, y, time) {
        //设置滚到的位置和时间
		    this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x, y, time)
      },
      getScrollY() {
        return this.scroll.y
      }
    },
    watch: {
		  data() {
        setTimeout(this.refresh, 100)
      }
    }
	}
</script>

<style scoped>

</style>
