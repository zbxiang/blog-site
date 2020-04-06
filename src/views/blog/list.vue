<template>
  <section class="posts block">
    <article
      v-for="(item, index) in blogList"
      :key="index"
      class="post block"
    >
      <h2 class="entry-title h2">
        <a href="">{{ item.title }}</a>
      </h2>
      <div class="meta">
        <span>{{ item.categoryText }}</span>
        <i class="space" />
        <time class="entry-date">{{ item.createDt | timeFilter }}</time>
      </div>
      <div class="entry">
        <p>{{ item.subtitle }}</p>
        <div class="ReadMore">
          <a
            href="javascript:;"
            class="read-more"
            @click="location(item.id)"
          >阅读全文</a>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
import { listBlog } from '@/api/blog'
import { parseTime } from '@/utils'

export default {
  filters: {
    timeFilter(time) {
      if (time) {
        return parseTime(time, '{y}-{m}-{d}')
      } else {
        return '无'
      }
    }
  },
  data() {
    return {
      blogList: {}
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    getList() {
      listBlog().then(response => {
        this.blogList = response.data.data
        console.log(this.blogList)
      })
    },
    location(id) {
      this.$router.push(`/detail/${id}`)
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped></style>
