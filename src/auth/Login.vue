<template>
  <v-app id="inspire">
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="secondary" dark flat>
                <v-toolbar-title>Login</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form ref="form" v-model="valido" lazy-validation>
                  <v-text-field
                    v-model="usuario.email"
                    :rules="emailRules"
                    label="Email"
                    name="email"
                    prepend-icon="mdi-account"
                    type="text"
                    required
                  ></v-text-field>

                  <v-text-field
                    v-model="usuario.password"
                    :rules="passwordRules"
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                    required
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn :disabled="!valido" @click="validate()" color="secondary"
                  >Login</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Login",
  data: () => ({
    valido: true,
    passwordRules: [
      (v) => !!v || "Senha é obrigatória",
      (v) =>
        (v && v.length <= 10) || "Senha precisa ter menos que 10 caracteres",
    ],
    emailRules: [
      (v) => !!v || "E-mail é obrigatório",
      (v) => /.+@.+\..+/.test(v) || "E-mail precisa ser válido",
    ],
    usuario: {
      email: "",
      password: "",
    },
  }),
  methods: {
    ...mapActions("auth", ["SEND_USER"]),
    validate() {
      this.$refs.form.validate();
      this.SEND_USER(this.usuario);
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>
