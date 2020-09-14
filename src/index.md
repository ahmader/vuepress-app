---
home: true
heroImage: ./images/me.jpg
heroText: AHMADER
tagline: Ahmad Esam Ruhaiyem
actionText: Quick Start →
actionLink: /guide/
features:
- title: First Page
  details: First page Ever
  actionText: First Page →
  actionLink: /first
# - title: Feature 2 Title
#   details: Feature 2 Description
- title: Personal
  details: Personal pages
  actionText: Personal →
  actionLink: /personal/
- title: Guide
  details: Guide Description
  actionText: Guide →
  actionLink: /guide/
footer: Made by ahmader with ❤️
---

<!-- 
# 
<OtherComponent/>--
<Foo-Bar/>
 -->

::: slot page-top
<Hero>
  <template v-slot:header>
    <img src="./images/me.jpg"/>
  </template>
</Hero>
:::

::: slot page-bottom
<!-- <Profiles title="ProfileS REduced" :filter="(d)=>(['facebook', 'twitter'].indexOf(d.provider) !==-1)"/>
<hr /> -->
<Profiles />
:::
