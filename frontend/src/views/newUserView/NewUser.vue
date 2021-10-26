<template>
  <body class="new-user">
    <form class="b-form-group form-group">
      <img
        src="../../assets/logomarca.png"
        class="image-logo"
        alt="Logo da empresa"
      />

      <div role="group">
        <b-form-input
          class="input-name"
          id="input-live"
          v-model="name"
          placeholder="Enter your name"
          trim
        ></b-form-input>

        <b-form-select
          class="input-select"
          v-model="selected"
          :options="options"
        ></b-form-select>
        <b-form-input
          id="input-default"
          placeholder="Enter your name"
          type="password"
        ></b-form-input>

       <b-button block variant="primary" class="button-enter">Create acount</b-button>
      </div>
      
      <div class="enter-link">
        <h6>Enter</h6>
        <h6>Forgot password</h6>
      </div>
    </form>
  </body>
</template>

<script>
export default {
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: "Please select an option" },
        { value: "gerente", text: "Gerente" },
        { value: "funcionario", text: "Funcionário" },
      ],
    };
  },
};
</script>

<style scoped>
@import "./newUser.css";
</style>
