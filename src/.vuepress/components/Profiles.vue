<template>
  <div>
    <h1>{{title}}</h1>
    <div class="profiles features">
      <a
        class="profile feature"
        v-for="profile in profiles"
        :key="profile.provider"
        :href="profile.link"
        target="_blank" rel="noopener"
        >
          <font-awesome-icon :icon="['fab', profile.provider]" size="4x" />
          <div>{{profile.link}}</div>
      </a>
    </div>
    <!-- {{profiles}} -->
  </div>
</template>

<script>
import yaml from 'js-yaml';
import fs from 'fs';
import profiles from '../../../data/profiles.yml';


export default {
  name: 'Profiles',
  props: {
    filter: Function,
    title: {
      type: String,
      required: false,
      default: () => 'Profiles',
    }
  },
  beforeMount() {
    // console.log('Zsetup');
  },
  data() {
    // console.log(profiles.filter(this.filter));
    return {
      profiles: (typeof this.filter === 'function') ? profiles.filter(this.filter) : profiles,
    }
  }
}
</script>