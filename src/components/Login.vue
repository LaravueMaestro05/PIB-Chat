<script setup>
import { ref } from "vue";

const username = ref("");
const password = ref("");

const onInputName = (e) => {
  username.value = e.target.value;
};

const onInputPwd = (e) => {
  password.value = e.target.value;
};

const handleSubmit = () => {
  alert(username.value);
};
</script>

<template>
  <div class="padding-40">
    <h1 class="text-center">PIBChat</h1>
    <div class="text-center">
      <h2>Sign in</h2>
      <h6>Sign in to continue to PIBChat</h6>
      <form class="text-left padding-20 bg-color-gray mg-b-10">
        <h4>Username</h4>
        <input
          type="text"
          class="width-full height-30 mg-b-10 indent-10"
          @input="onInputName"
          :value="username"
        />
        <h4>Password</h4>
        <input
          type="password"
          class="width-full height-30 mg-b-10 indent-10"
          @input="onInputPwd"
          :value="password"
        />
        <input type="checkbox">Remember me</input>
        <br />
        <button
          type="button"
          class="width-full height-30 mg-b-10"
          @click="handleSubmit"
        >
          Login
        </button>
      </form>
      <h4>Don't have an account? Register now</h4>
      <h4>@2026 PIB Corporation</h4>
    </div>
  </div>
</template>

<style>
.text-center {
  text-align: center;
}
.text-left {
  text-align: left;
}
.padding-20 {
  padding: 20px;
}
.padding-40 {
  padding: 40px;
}
.bg-color-gray {
  background-color: #262e53;
}
.width-full {
  width: 100%;
}
.height-30 {
  height: 30px;
}
.mg-b-10 {
  margin-bottom: 10px;
}
.indent-10 {
  text-indent: 10px;
}
</style>