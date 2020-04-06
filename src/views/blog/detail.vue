<template>
  <section class="posts">
    <article class="post block">
      <h1 class="title">{{ result.title }}</h1>
      <div class="meta">
        <span>{{ result.categoryText }}</span>
        <i class="space" />
        <time>{{ result.createDt | timeFilter }}</time>
      </div>
      <div class="entry" v-html="result.contents" />
    </article>
  </section>
</template>

<script>
import { getBlog } from '@/api/blog'
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
      result: {}
    }
  },
  created() {
    const id = this.$route.params && this.$route.params.id
    this.getBlogData(id)
  },
  methods: {
    getBlogData(id) {
      getBlog(id).then(response => {
        this.setData(response.data.data)
      })
    },
    setData(data) {
      const {
        title,
        subtitle,
        category,
        categoryText,
        contents,
        createDt
      } = data
      this.result = {
        title,
        subtitle,
        category,
        categoryText,
        contents,
        createDt
      }
    }
  }
}
</script>

<style></style>
