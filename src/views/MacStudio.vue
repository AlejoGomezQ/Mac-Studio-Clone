<template>
  <div>
    <sub-menu-mac-studio/>
    <initial-description/>
    <superpower/>
    <general-info/>
  </div>
</template>

<script>
import SubMenuMacStudio from '@/components//menus/SubMenuMacStudio'
import InitialDescription from '@/components/mac-studio/InitialDescription'
import Superpower from '@/components/mac-studio/Superpower'
import GeneralInfo from '@/components/mac-studio/GeneralInfo'


export default {
  name: 'MacStudio',

  components: {
    InitialDescription,
    SubMenuMacStudio,
    Superpower,
    GeneralInfo
  },
}
</script>

<style scoped>
  
</style>
