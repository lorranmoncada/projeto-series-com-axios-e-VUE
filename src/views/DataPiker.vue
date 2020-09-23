<template>
  <div>
    <v-row>
      <v-col xs12>
        <v-card>
          <v-date-picker
            locale="pt"
            :min="minimoData"
            :max="maximoData"
            full-width
            v-model="teste.data"
            @change="getValor(teste.data)"
          >
          </v-date-picker>
        </v-card>
        <v-card color="red" dark>
          <v-card-text class="text-h6 text-center">
            {{ teste.dolar }} {{ teste.data | dataPtBr }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import moment from "moment";
import { mapActions, mapState, mapGetters } from "vuex";

export default {
  name: "DataPiker",
  data: () => ({
    minimoData: "1984",
    maximoData: "",
    teste: { data: moment().format("YYYY-MM-DD"), dolar: "" },
  }),
  computed: {
    ...mapState(["valorMoeda"]),
    ...mapGetters(["GET_MOEDA"]),
  },
  filters: {
    dataPtBr: function(valor) {
      return moment(valor).format("DD/MM/YYYY") === "Invalid date"
        ? ""
        : "- " + moment(valor).format("DD/MM/YYYY");
    },
  },
  methods: {
    async getValor(data) {
      console.log(data);
      data ? moment(data).format("DD-MM-YYYY") : moment().format("DD-MM-YYYY");
      await this.getAllPosts(moment(data).format("DD-MM-YYYY"));
      this.teste.dolar = this.GET_MOEDA;
    },
    ...mapActions(["getAllPosts"]),
  },
  async mounted() {
    this.maximoData = moment().format("YYYY-MM-DD");
    await this.getAllPosts(moment(this.teste.data).format("DD-MM-YYYY"));
    this.teste.dolar = this.GET_MOEDA;
  },
};
</script>
