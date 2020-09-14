<template>
  <header class="hero">
    <div class="hero-head">
      <slot name="header"></slot>
    </div>

    <h1
      v-if="data.heroText !== null"
      id="main-title"
    >
      {{ data.heroText || $title || 'Hello' }}
    </h1>

    <p
      v-if="data.tagline !== null"
      class="description"
    >
      {{ data.tagline || $description || 'Welcome to your VuePress site' }}
    </p>

    <p
      v-if="!!data.actionText && !!data.actionLink"
      class="action"
    >
      <NavLink
        class="action-button"
        :item="actionLink"
      />
    </p>
    <!-- <pre><code>{{JSON.stringify(data, null, 2)}}</code></pre> -->
  </header>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue'
export default {
  name: 'Hero',
  props: {
    src: String,
  },
  components: {
    NavLink,
  },
  computed: {
    // src() {
    //   return import(this.heroImage)
    // },
    data () {
      console.log(this.$page.frontmatter);
      return this.$page.frontmatter || {}
    },
    actionLink () {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    }
  },
}
</script>
<style lang="stylus" scoped>
.hero-head {
  
  img{
    width:200px;
    border-radius: 50%;
  }
}
</style>