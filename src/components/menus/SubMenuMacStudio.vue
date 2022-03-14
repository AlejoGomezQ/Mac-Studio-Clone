<template>
  <div>
    <div class="submenu-container">
      <div class="row container-fluid d-flex">
        <div class="col-6 left-info">
          <a href="#" class="mac-studio-link"
          ><p>Available starting 3.18</p>
          <span>Mac Studio</span></a
        >
        </div>
        <div class="col-6 rigth-info align-self-end text-end">
          <span>Overview</span>
          <span><a href="#">Why Mac</a></span>
          <span><a href="#">Tech Specs</a></span>
          <button type="button" class="btn btn-primary btn-sm">Order now</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SubMenuMacStudio",
};
</script>

<style scoped>
.submenu-container {
  width: 100%;
  height: 100px;
  
}
.container-fluid {
  position: fixed;
  width: 100%;
  height: 70px;
  padding: 0 250px;
  background: var(--white);
  border-bottom: 1px solid var(--gray);
  z-index: 100;
}
h2 {
  margin-left: 230px;
}
a,
a:link,
a:focus,
a:hover {
  text-decoration: none;
  font-size: 13px;
  color: var(--black);
}
a:hover {
  color: #48e;
}
.mac-studio-link:hover {
  color: var(--black);
}
.left-info p {
  color: var(--gray);
}
.left-info span {
  font-size: 19px;
  font-weight: 500;
}
.rigth-info > span, button {
  margin-right: 15px;
  font-size: 12px;
  
}

button {
  width: 85px;
  border-radius: 15px;
}
</style>