<script setup>
import { ref } from "vue";

const username = ref("");
const password = ref("");
const pwdconfirm = ref("");

const onInputName = (e) => {
  username.value = e.target.value;
};

const onInputPwd = (e) => {
  password.value = e.target.value;
};

const onInputPwdConf = (e) => {
  pwdconfirm.value = e.target.value;
};

const handleSubmit = () => {
  alert(username.value);
};
</script>

<template>
  <div class="padding-40">
    <h1 class="text-center">PIBChat</h1>
    <div class="text-center">
      <h2>Sign up</h2>
      <h6>Get your chat via account now</h6>
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
        <h4>Confirm Password</h4>
        <input
          type="password"
          class="width-full height-30 mg-b-10 indent-10"
          @input="onInputPwdConf"
          :value="pwdconfirm"
        />
        <br />
        <button
          type="button"
          class="width-full height-30 mg-b-10"
          @click="handleSubmit"
        >
          Sign up
        </button>
        <h4>By registering you agree to the Chatvia Terms of Use</h4>
      </form>
      <h4>Aleardy have an account? Signin</h4>
      <h4>@2026 Chatvia Crafted with by Themebrand</h4>
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