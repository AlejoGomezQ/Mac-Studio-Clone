<template>
  <div id="app">
    <header-mac-studio/>
    <router-view/>
    <footer-mac-studio/>
  </div>
</template>

<script>
import '@/assets/css/globalStyle.css'
import HeaderMacStudio from '@/components/general/HeaderMacStudio'
import FooterMacStudio from '@/components/general/FooterMacStudio'


export default {
  name: 'App',
  
  components: {
    HeaderMacStudio,
    FooterMacStudio
  },
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
</style>
