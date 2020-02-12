<template>
  <section>
    <transition name="modal">
      <div class="modal" @click="$store.commit('TOOGLE_MODAL')">
        <div class="modal__content" @click.stop>
          <header class="modal__header">
            <h1>Diagnóstico Gratuito de Marketing Digital</h1>
            <p>Preencha as informações abaixo e receba um diagnóstico gratuito sobre o marketing digital da sua empresa.</p>
          </header>
          <div class="modal__form" v-if="!response">
            <div id="mauticform_wrapper_diagnosticogratuito" class="mauticform_wrapper">
              <form ref="modal" @submit.prevent="send">
                <div style="display:none;">
                  <input
                    type="hidden"
                    name="mauticform[formId]"
                    id="mauticform_diagnosticogratuito_id"
                    value="7"
                  />
                  <input
                    type="hidden"
                    name="mauticform[return]"
                    id="mauticform_diagnosticogratuito_return"
                    value
                  />
                  <input
                    type="hidden"
                    name="mauticform[formName]"
                    id="mauticform_diagnosticogratuito_name"
                    value="diagnosticogratuito"
                  />
                </div>
                <div class="mauticform-error" id="mauticform_diagnosticogratuito_error"></div>
                <div class="mauticform-message" id="mauticform_diagnosticogratuito_message"></div>
                <div class="mauticform-innerform">
                  <div class="mauticform-page-wrapper mauticform-page-1" data-mautic-form-page="1">
                    <div
                      id="mauticform_diagnosticogratuito_nome"
                      data-validate="nome"
                      data-validation-type="text"
                      class="mauticform-row mauticform-text mauticform-field-1 mauticform-required"
                    >
                      <label
                        id="mauticform_label_diagnosticogratuito_nome"
                        for="mauticform_input_diagnosticogratuito_nome"
                        class="mauticform-label"
                      >Nome</label>
                      <input
                        id="mauticform_input_diagnosticogratuito_nome"
                        name="mauticform[nome]"
                        value
                        class="mauticform-input"
                        type="text"
                      />
                      <span
                        class="mauticform-errormsg"
                        style="display: none;"
                      >Preenchimento do seu nome é obrigatório.</span>
                    </div>

                    <div
                      id="mauticform_diagnosticogratuito_email"
                      data-validate="email"
                      data-validation-type="email"
                      class="mauticform-row mauticform-email mauticform-field-2 mauticform-required"
                    >
                      <label
                        id="mauticform_label_diagnosticogratuito_email"
                        for="mauticform_input_diagnosticogratuito_email"
                        class="mauticform-label"
                      >E-mail</label>
                      <input
                        id="mauticform_input_diagnosticogratuito_email"
                        name="mauticform[email]"
                        value
                        class="mauticform-input"
                        type="email"
                      />
                      <span
                        class="mauticform-errormsg"
                        style="display: none;"
                      >Preenchimento do e-mail é obrigatório.</span>
                    </div>

                    <div
                      id="mauticform_diagnosticogratuito_cargo"
                      data-validate="cargo"
                      data-validation-type="select"
                      class="mauticform-row mauticform-select mauticform-field-3 mauticform-required"
                    >
                      <label
                        id="mauticform_label_diagnosticogratuito_cargo"
                        for="mauticform_input_diagnosticogratuito_cargo"
                        class="mauticform-label"
                      >Cargo</label>
                      <select
                        id="mauticform_input_diagnosticogratuito_cargo"
                        name="mauticform[cargo]"
                        value
                        class="mauticform-selectbox"
                      >
                        <option value></option>
                        <option value="Autônomo">Autônomo</option>
                        <option value="Estudante">Estudante</option>
                        <option value="Estagiário">Estagiário</option>
                        <option value="Analista de Marketing">Analista de Marketing</option>
                        <option value="Gerente de Marketing">Gerente de Marketing</option>
                        <option value="Gestor">Gestor</option>
                        <option value="Diretor">Diretor</option>
                        <option value="Sócio / CEO">Sócio / CEO</option>
                      </select>
                      <span
                        class="mauticform-errormsg"
                        style="display: none;"
                      >Preenchimento do cargo é obrigatório.</span>
                    </div>

                    <div
                      id="mauticform_diagnosticogratuito_telefone"
                      data-validate="telefone"
                      data-validation-type="tel"
                      class="mauticform-row mauticform-tel mauticform-field-4 mauticform-required"
                    >
                      <label
                        id="mauticform_label_diagnosticogratuito_telefone"
                        for="mauticform_input_diagnosticogratuito_telefone"
                        class="mauticform-label"
                      >Telefone</label>
                      <input
                        id="mauticform_input_diagnosticogratuito_telefone"
                        name="mauticform[telefone]"
                        value
                        class="mauticform-input"
                        type="tel"
                        v-mask="['(##) ####-####', '(##) #####-####']"
                      />
                      <span
                        class="mauticform-errormsg"
                        style="display: none;"
                      >Preenchimento do telefone é obrigatório.</span>
                    </div>

                    <div
                      id="mauticform_diagnosticogratuito_nome_da_empresa"
                      data-validate="nome_da_empresa"
                      data-validation-type="text"
                      class="mauticform-row mauticform-text mauticform-field-5 mauticform-required"
                    >
                      <label
                        id="mauticform_label_diagnosticogratuito_nome_da_empresa"
                        for="mauticform_input_diagnosticogratuito_nome_da_empresa"
                        class="mauticform-label"
                      >Nome da empresa</label>
                      <input
                        id="mauticform_input_diagnosticogratuito_nome_da_empresa"
                        name="mauticform[nome_da_empresa]"
                        value
                        class="mauticform-input"
                        type="text"
                      />
                      <span
                        class="mauticform-errormsg"
                        style="display: none;"
                      >Preenchimento do nome da empresa é obrigatório.</span>
                    </div>

                    <div
                      id="mauticform_diagnosticogratuito_site"
                      class="mauticform-row mauticform-text mauticform-field-6"
                    >
                      <label
                        id="mauticform_label_diagnosticogratuito_site"
                        for="mauticform_input_diagnosticogratuito_site"
                        class="mauticform-label"
                      >Site</label>
                      <input
                        id="mauticform_input_diagnosticogratuito_site"
                        name="mauticform[site]"
                        value
                        class="mauticform-input"
                        type="text"
                      />
                      <span class="mauticform-errormsg" style="display: none;"></span>
                    </div>

                    <div
                      id="mauticform_diagnosticogratuito_n_de_funcionarios"
                      class="mauticform-row mauticform-select mauticform-field-7"
                    >
                      <label
                        id="mauticform_label_diagnosticogratuito_n_de_funcionarios"
                        for="mauticform_input_diagnosticogratuito_n_de_funcionarios"
                        class="mauticform-label"
                      >Nº de funcionários</label>
                      <select
                        id="mauticform_input_diagnosticogratuito_n_de_funcionarios"
                        name="mauticform[n_de_funcionarios]"
                        value
                        class="mauticform-selectbox"
                      >
                        <option value></option>
                        <option value="1 - 5 funcionários">1 - 5 funcionários</option>
                        <option value="6 -24 funcionários">6 -24 funcionários</option>
                        <option value="25 - 50 funcionários">25 - 50 funcionários</option>
                        <option value="50+ funcionários">50+ funcionários</option>
                      </select>
                      <span class="mauticform-errormsg" style="display: none;"></span>
                    </div>

                    <div
                      id="mauticform_diagnosticogratuito_tempo_de_mercado1"
                      class="mauticform-row mauticform-select mauticform-field-8"
                    >
                      <label
                        id="mauticform_label_diagnosticogratuito_tempo_de_mercado1"
                        for="mauticform_input_diagnosticogratuito_tempo_de_mercado1"
                        class="mauticform-label"
                      >Tempo de mercado</label>
                      <select
                        id="mauticform_input_diagnosticogratuito_tempo_de_mercado1"
                        name="mauticform[tempo_de_mercado1]"
                        value
                        class="mauticform-selectbox"
                      >
                        <option value></option>
                        <option value="Menos de 1 ano">Menos de 1 ano</option>
                        <option value="1 - 5 anos">1 - 5 anos</option>
                        <option value="6 - 15 anos">6 - 15 anos</option>
                        <option value="15 - 30 anos">15 - 30 anos</option>
                        <option value="+30 anos">+30 anos</option>
                      </select>
                      <span class="mauticform-errormsg" style="display: none;"></span>
                    </div>

                    <div
                      id="mauticform_diagnosticogratuito_segmento_da_empresa"
                      class="mauticform-row mauticform-select mauticform-field-9"
                    >
                      <label
                        id="mauticform_label_diagnosticogratuito_segmento_da_empresa"
                        for="mauticform_input_diagnosticogratuito_segmento_da_empresa"
                        class="mauticform-label"
                      >Segmento da empresa</label>
                      <select
                        id="mauticform_input_diagnosticogratuito_segmento_da_empresa"
                        name="mauticform[segmento_da_empresa]"
                        value
                        class="mauticform-selectbox"
                      >
                        <option value></option>
                        <option value="Agricultura">Agricultura</option>
                        <option value="Vestuário">Vestuário</option>
                        <option value="Bancário">Bancário</option>
                        <option value="Biotecnologia">Biotecnologia</option>
                        <option value="Produtos químicos">Produtos químicos</option>
                        <option value="Comunicações">Comunicações</option>
                        <option value="Construção">Construção</option>
                        <option value="Educação">Educação</option>
                        <option value="Eletrônicos">Eletrônicos</option>
                        <option value="Energia">Energia</option>
                        <option value="Engenharia">Engenharia</option>
                        <option value="Entretenimento">Entretenimento</option>
                        <option value="De Meio Ambiente">De Meio Ambiente</option>
                        <option value="Finança">Finança</option>
                        <option value="Comida &amp; Bebida">Comida &amp; Bebida</option>
                        <option value="Governo">Governo</option>
                        <option value="Cuidados de saúde">Cuidados de saúde</option>
                        <option value="Hospitalidade">Hospitalidade</option>
                        <option value="Seguro">Seguro</option>
                        <option value="Máquinas">Máquinas</option>
                        <option value="Fabricação">Fabricação</option>
                        <option value="Mídia">Mídia</option>
                        <option value="Sem fins lucrativos">Sem fins lucrativos</option>
                        <option value="Lazer">Lazer</option>
                        <option value="Varejo">Varejo</option>
                        <option value="Entrega">Entrega</option>
                        <option value="Tecnologia">Tecnologia</option>
                        <option value="Telecomunicações">Telecomunicações</option>
                        <option value="Transporte">Transporte</option>
                        <option value="Serviços de utilidade pública">Serviços de utilidade pública</option>
                        <option value="Outros">Outros</option>
                        <option value="Odontologia">Odontologia</option>
                        <option value="Médico">Médico</option>
                      </select>
                      <span class="mauticform-errormsg" style="display: none;"></span>
                    </div>

                    <div
                      id="mauticform_diagnosticogratuito_submit"
                      class="mauticform-row mauticform-button-wrapper mauticform-field-10"
                    >
                      <button
                        type="submit"
                        name="mauticform[submit]"
                        id="mauticform_input_diagnosticogratuito_submit"
                        value
                        class="mauticform-button btn btn-default"
                      >Solicitar diagnóstico gratuito</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <footer class="modal__footer">
            <p class="response" v-if="response" v-html="response"></p>
          </footer>
          <button class="modal__close" @click="$store.commit('TOOGLE_MODAL')">&times;</button>
        </div>
      </div>
    </transition>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "modal",
  data() {
    return {
      response: "",
      status: ""
    };
  },
  methods: {
    async send(e) {
      if (typeof window.FormData !== "function") {
        return;
      }
      const formData = new FormData(this.$refs.modal);
      await axios
        .post(
          "https://automacao.consilio.com.br/form/submit?formId=7",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              "X-Requested-With": "XMLHttpRequest"
            }
          }
        )
        .then(res => {
          this.response =
            "Você acaba de solicitar gratuitamente um diagnóstico de marketing digital, nossa equipe recebeu sua solicitação e já está trabalhando nesse documento, em no máximo 24 horas um de nossos especialistas entrará em contato para te apresentar. <br><br> <b>Você deu o primeiro passo para entender o marketing digital de verdade.</b> 🚀";
        })
        .catch(error => {
          this.response = "Error: " + error.status + " " + error.response;
          console.log("Error --> " + error);
        });
    }
  }
  /*
  beforeDestroy() {
    this.$store.commit("TOOGLE_MODAL");
  }
  */
};
</script>

<style lang="scss" scoped>
@import "./assets/scss/_flexbox.scss";
@import "./assets/scss/_variables.scss";

.mauticform-page-wrapper {
  display: flex;
  flex-direction: column;
  flex: auto;
}
.mauticform_wrapper {
  padding: 20px 0px;
  width: 100%;
}
.mauticform-row.mauticform-required .mauticform-label:after {
  color: #e32;
  content: " *";
  display: inline;
}
.mauticform-button-wrapper .mauticform-button.btn-default[disabled],
.mauticform-pagebreak-wrapper .mauticform-pagebreak.btn-default[disabled] {
  background-color: #ffffff;
  border-color: #dddddd;
  opacity: 0.75;
  cursor: not-allowed;
}
.mauticform-row {
  width: 100%;
  @include flexbox;
  @include flex-direction(row);
  margin: 0 0 7px 0;
  white-space: nowrap;
  & label,
  select {
    width: 100%;
  }
  & label {
    font-size: 14px;
    color: $primary;
    font-family: Quicksand, sans-serif;
    font-weight: 700;
    line-height: 30px;
    padding-right: 20px;
    flex: 1;
    @media screen and (min-width: $break-md) {
      flex: 0;
    }
  }
  & select {
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    -o-appearance: none;
    appearance: none;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='%23586371'><polygon points='0,0 100,0 50,50'/></svg>");
    background-size: 0.8em;
    background-repeat: no-repeat;
    background-position: right 20px center;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  & input {
    width: 100%;
    box-sizing: border-box;
  }
  & input,
  select {
    padding: 0 20px;
    height: 30px;
    border-radius: 20px;
    background-color: #fff;
    border: 1px solid $gray_light;
    font-size: 13px;
    color: #b3b3b3;
    font-family: Quicksand, sans-serif;
    font-weight: 700;
    box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.03);
  }
  & textarea {
    width: 100%;
    box-sizing: border-box;
    padding: 10px 20px;
    min-height: 100px;
    border-radius: 20px;
    background-color: #fff;
    border: none;
    font-size: 13px;
    color: #b3b3b3;
    font-family: Quicksand, sans-serif;
    font-weight: 700;
    box-shadow: 8px 10px 12px rgba(0, 0, 0, 0.1);
  }
  & button {
    width: 100%;
    font-family: Poppins, sans-serif;
    font-weight: 600;
    text-transform: uppercase;
    border-radius: 30px;
    padding: 10px 15px;
    margin-top: 30px;
    line-height: 1em;
    display: inline-block;
    letter-spacing: 0.1em;
    -webkit-transition: border-color 0.2s ease-in-out,
      background 0.2s ease-in-out, color 0.2s ease-in-out;
    transition: border-color 0.2s ease-in-out, background 0.2s ease-in-out,
      color 0.2s ease-in-out;
    box-shadow: 1px 13px 41px -4px rgba(46, 61, 98, 0.15);
    border: 3px solid rgba(255, 255, 255, 0);
    color: $white;
    background: $primary;
    -webkit-transition-timing-function: linear;
    transition-timing-function: linear;
    -webkit-transition: all 1s;
    transition: all 1s;
    &:hover {
      transform: scale(1.05);
      -webkit-transform: translateY(-5px);
      transform: translateY(-5px);
      box-shadow: 1px 13px 41px 5px rgba(46, 61, 98, 0.19);
    }
    &:focus {
      transform: scale(1.05);
      -webkit-transform: translateY(-5px);
      transform: translateY(-5px);
      box-shadow: 1px 13px 41px 5px rgba(46, 61, 98, 0.19);
    }
  }
}
.inner {
  margin: 5%;
  @media screen and (min-width: $break-md) {
  }
}

.modal {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(white, 0.6);
  z-index: 999;
  color: $primary;

  &-enter-active,
  &-leave-active {
    transition: opacity 350ms;
  }

  &-enter,
  &-leave-to {
    opacity: 0;
  }

  &-leave,
  &-enter-to {
    opacity: 1;
  }

  &__content {
    @include flexbox;
    @include flex-direction(column);
    @include justify-content(center);
    @include align-items(center);
    position: relative;
    width: 100%;
    height: 94vh;
    padding: 30px 30px 0px 30px;
    background-color: white;
    border-radius: 12px 12px 0px 0px;
    text-align: center;
    box-shadow: 0 0.5rem 1.75rem -0.25rem rgba(88, 99, 113, 0.4);
    margin-top: 15%;
    @media screen and (min-width: $break-md) {
      overflow: initial;
      margin: initial;
      border-radius: 0px;
      padding: 30px 30%;
    }
  }

  &__header {
    @media screen and (min-width: $break-md) {
      margin: 0px 40px;
    }
    & h1 {
      font-size: 28px;
      font-family: "Quicksand", sans-serif;
      font-weight: 600;
      padding-top: 20px;
      padding-bottom: 15px;
    }
    & p {
    }
  }

  &__form {
    width: 100%;
    @media screen and (min-width: $break-md) {
      width: initial;
    }
  }
  &__footer {
    & .response {
      padding: 40px;
    }
  }

  &__link {
    margin-top: 1.5rem;
    position: relative;
    font-size: 1.2rem;
    font-weight: 300;
    z-index: 0;

    &::after {
      content: "";
      width: 100%;
      height: 1px;
      position: absolute;
      bottom: 0;
      left: 0;
      background-color: currentColor;
      z-index: -1;
      transition: background-color 225ms ease-out;
    }

    &:hover::after {
      background-color: $secondary;
    }
  }

  &__close {
    position: absolute;
    right: 1rem;
    font-size: 1.75rem;
    font-weight: 400;
    opacity: 0.5;
    transition: opacity 150ms ease-out;
    top: 0.25rem;
    &:hover {
      opacity: 1;
    }
  }
}
</style>