<template>
<nav class="navbar is-transparent">
  <div class="navbar-brand">
    <router-link class="navbar-item" to="/">
      <img src="../assets/athena-badge.jpg" alt="littleOwl" width="25" height="25">
    </router-link>
    <div
      class="navbar-burger burger"
      :class="{ 'is-active': isActive }"
      @click="isActive = !isActive"
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div class="navbar-menu" :class="{ 'is-active': isActive }">
    <div class="navbar-start">
      <router-link
        class="navbar-item" to="/about"
        @click.native="isActive = false"
      >
        About
      </router-link>
      <router-link
        class="navbar-item" to="/all-threads"
        @click.native="isActive = false"
      >
        See all threads
      </router-link>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="field is-grouped" v-if="!$root.user">
          <p class="control">
            <router-link
              class="navbar-item" to="/login"
              @click.native="isActive = false">
              Login
            </router-link>
          </p>
          <p class="control">
            <router-link
              class="navbar-item" to="/signup"
              @click.native="isActive = false"
            >
              Signup
            </router-link>
          </p>
        </div>
        <div class="field is-grouped" v-else>
          <p class="control">
            <router-link class="navbar-item" :to="'/profile/' + $root.user.id">My profile</router-link>
          </p>
          <p class="control">
            <a
              class="navbar-item"
              @click="logout"
            >
              Logout
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
import api from "../api";
export default {
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    logout() {
      api.logout();
      this.$root.user = null;
      this.$router.push("/login");
    }
  }
};
</script>