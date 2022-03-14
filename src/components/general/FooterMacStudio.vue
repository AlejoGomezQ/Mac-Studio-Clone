<template>
  <footer class="pb-4 pt-4">
    <div class="container">
      <div class="row quick-links-container">
        <div class="col-12">
          <breadcrumb />
        </div>
        <div class="col-12 col-lg">
          <span>Shop and Learn</span>
          <div class="dropdown">
            <ul>
              <li>Store</li>
              <li>Mac</li>
              <li>iPad</li>
              <li>iPhone</li>
              <li>Watch</li>
              <li>AirPods</li>
              <li>TV & Home</li>
              <li>iPod touch</li>
              <li>AirTag</li>
              <li>Accessories</li>
              <li>Gift Cards</li>
            </ul>
          </div>
        </div>
        <div class="col-12 col-lg">
          <div class="col-12 col-lg">
            <span>Services</span>
            <ul>
              <li>Apple Music</li>
              <li>Apple TV+</li>
              <li>Apple Fitness+</li>
              <li>Apple News+</li>
              <li>Apple Arcade</li>
              <li>iCloud</li>
              <li>Apple One</li>
              <li>Apple Card</li>
              <li>Apple Books</li>
              <li>Apple Podcast</li>
              <li>Apple Store</li>
            </ul>
          </div>
          <div class="col-12 col-lg">
            <span>Account</span>
            <ul>
              <li>Manage Your Apple ID</li>
              <li>Apple Store Account</li>
              <li>iCloud.com</li>
            </ul>
          </div>
        </div>
        <div class="col-12 col-lg">
          <span>Apple Store</span>
          <ul>
            <li>Find a Store</li>
            <li>Genious Bar</li>
            <li>Today at Apple</li>
            <li>Apple Camp</li>
            <li>Apple Store App</li>
            <li>Refurbished and Clearance</li>
            <li>Financing</li>
            <li>Apple Trade In</li>
            <li>Order Status</li>
            <li>Shopping Help</li>
          </ul>
        </div>
        <div class="col-12 col-lg">
          <div class="col-12 col-lg">
            <span>For Business</span>
            <ul>
              <li>Apple and Business</li>
              <li>Shop for Business</li>
            </ul>
          </div>
          <div class="col-12 col-lg">
            <span>For Education</span>
            <ul>
              <li>Apple and Education</li>
              <li>Shop for K-12</li>
              <li>Shop for College</li>
            </ul>
          </div>
          <div class="col-12 col-lg">
            <span>For Healthcare</span>
            <ul>
              <li>Apple in Healthcare</li>
              <li>Health on Apple Watch</li>
              <li>Health Records on iPhone</li>
            </ul>
          </div>
          <div class="col-12 col-lg">
            <span>For Goverment</span>
            <ul>
              <li>Shop for Goverment</li>
              <li>Shop for Veterans and Military</li>
            </ul>
          </div>
        </div>
        <div class="col-12 col-lg">
          <div class="col-12 col-lg">
            <span>Apple Values</span>
            <ul>
              <li>Accessibility</li>
              <li>Education</li>
              <li>Enviroment</li>
              <li>Inclusion and Diversity</li>
              <li>Privacy</li>
              <li>Racial Equity and Justice</li>
              <li>Supplier Responsability</li>
            </ul>
          </div>
          <div class="col-12 col-lg">
            <span>About Apple</span>
            <ul>
              <li>Newsroom</li>
              <li>Apple Leadership</li>
              <li>Career Opportunities</li>
              <li>Investors</li>
              <li>Ethics & Compliance</li>
              <li>Events</li>
              <li>Contact Apple</li>
            </ul>
          </div>
        </div>
         <div class="col-12 more-info-container">
            <p>
              More ways to shop:
              <span><a href="#">Find an Apple Store</a></span> or
              <span><a href="#">other retailer</a></span> near you. Or call
              1-800-MY-APPLE.
            </p>
          </div>
          <div class="row terms-container">
            <div class="col-12 col-lg-2">
              <span>Copyright © 2022 Apple Inc. All rights reserved.</span>
            </div>
            <div class="col-3 col-lg-2">
              <a href="#">Privacy Policy</a>
            </div>
            <div class="col-3 col-lg-2">
              <a href="#">Terms of Use</a>
            </div>
            <div class="col-3 col-lg-2">
              <a href="#">Sales and Refunds</a>
            </div>
            <div class="col-3 col-lg-2">
              <a href="#">Legal</a>
            </div>
            <div class="col-3 col-lg-2">
              <a href="#">Site Map</a>
            </div>
          </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Breadcrumb from "@/components/general/Breadcrumb";

export default {
  name: "FooterMacStudio",

  components: {
    Breadcrumb,
  },
};
</script>

<style scoped>
footer {
  background: var(--soft-gray);
}
.container {
  padding-left: 170px;
  padding-right: 170px;
}
.quick-links-container {
  border-top: 1px solid var(--gray);
}
span {
  font-size: 13px;
  font-weight: 600;
}
ul {
  padding: 0;
}
li {
  list-style: none;
  font-size: 13px;
}
.more-info-container {
  border-bottom: 1px solid var(--gray);
}
p {
  font-size: 12px;
  color: var(--gray)
}
a {
  text-decoration: none;
  font-size: 12px;
}
.terms-container span {
  font-size: 12px;
  color: var(--gray);
}
.terms-container a {
  text-decoration: none;
  color: var(--black);
}
</style>