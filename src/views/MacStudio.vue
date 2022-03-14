<template>
  <div>
    <sub-menu-mac-studio/>
    <initial-description/>
    <superpower/>
    <general-info/>
  </div>
</template>

<script>
import InitialDescription from '@/components/macstudio/InitialDescription'
import SubMenuMacStudio from '@/components//menus/SubMenuMacStudio'
import Superpower from '@/components/macstudio/Superpower'
import GeneralInfo from '@/components/macstudio/GeneralInfo'


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
