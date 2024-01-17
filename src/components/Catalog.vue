<template>
  <v-container>
    <v-card flat class="border mb-4">
      <div class="d-flex justify-space-between">
        <v-card-title>Leads para Contato</v-card-title>

        <v-card-title-card-title>
          <v-btn @click="formOpen = true" variant="tonal" size="small" class="ma-2" color="primary">Cadastrar Lead</v-btn>
        </v-card-title-card-title>
      </div>
      
      <v-dialog
        transition="dialog-bottom-transition"
        class="mx-auto"
        max-width="500"
        v-model="formOpen"
      >
        <template v-slot:default="{ isActive }">
          <v-card>
            <v-card-item class="bg-purple-darken-4">
              <v-card-title>
                <span class="text-h5">Cadastrar Lead</span>
              </v-card-title>
              
              <template v-slot:append>
                <v-defaults-provider
                  :defaults="{
                    VBtn: {
                      variant: 'text',
                      density: 'compact',
                    },
                  }"
                >
                <v-btn size="x-large" class="mb-1" icon @click="isActive.value = false">X</v-btn>
              </v-defaults-provider>
            </template>
          </v-card-item>

          <v-card-text>
            <v-row>
              <v-col>
                <v-text-field label="Nome" variant="outlined"></v-text-field>
              </v-col>
            </v-row>
            <v-row class="mt-0">
              <v-col>
                  <v-text-field label="E-mail" variant="outlined" :rules="emailRules"></v-text-field>
              </v-col>
              <v-col>
                <v-text-field label="Telefone" variant="outlined"></v-text-field>
              </v-col>
            </v-row>
            <v-row class="mt-0">
              <v-col>
                <v-select
                  variant="outlined"
                  label="Tipo de Lead"
                  :items="['Frio', 'Aquecido', 'Quente']"
                ></v-select>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions class="ma-3">
            <v-spacer></v-spacer>
            <v-btn variant="text" color="primary" @click="isActive.value = false">Cancelar</v-btn>
            <v-btn variant="tonal" color="primary">Salvar</v-btn>
          </v-card-actions>
          </v-card>
        </template>
      </v-dialog>

      <v-dialog
        transition="dialog-bottom-transition"
        class="mx-auto"
        max-width="500"
        v-model="dialogOpen"
      >
        <template v-slot:default="{ isActive }">
          <v-card>
            <v-card-item class="bg-cyan-darken-1">
              <v-card-title>
                <span class="text-h5">nome do Contato</span>
              </v-card-title>

              <template v-slot:append>
                <v-defaults-provider
                  :defaults="{
                    VBtn: {
                      variant: 'text',
                      density: 'compact',
                    },
                  }"
                >
                  <v-btn size="x-large" class="mb-1" icon @click="isActive.value = false">X</v-btn>
                </v-defaults-provider>
              </template>
            </v-card-item>

            <v-list>
              <v-list-item
                prepend-icon="mdi-phone"
                title="(27) 99555-1234"
              ></v-list-item>

              <v-divider inset></v-divider>

              <v-list-item
                prepend-icon="mdi-email"
                title="mcbeal@example.com"
              ></v-list-item>

              <v-divider inset></v-divider>

              <v-list-item
                prepend-icon="mdi-map-marker"
                title="Viçosa, MG n801"
              ></v-list-item>
            </v-list>
          </v-card>
        </template>
      </v-dialog>

      <v-table density="compact">
        <thead>
          <tr>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Primeiro contato</th>
            <th>Tipo Cliente</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Pedro</td>
            <td>pedro@gmail.com</td>
            <td>20/08/2023</td>
            <td>
              <v-chip 
              color="primary"
              variant="outlined" 
              size="small">Quente</v-chip>
            </td>
            <td>
              <v-btn
                @click="dialogOpen = true"
                color="primary"
                style="border-radius: 5px"
                density="compact"
                icon="mdi-phone"
                class="mr-2"
              />
              <v-btn
                color="primary"
                style="border-radius: 5px"
                density="compact"
                icon="mdi-check-bold"
                class="mr-2"
              />
              <v-btn
                color="primary"
                style="border-radius: 5px"
                density="compact"
                icon="mdi-trash-can-outline"
                class="mr-2"
              />
            </td>
          </tr>
          <tr>
            <td>Gabriela</td>
            <td>gabi222@gmail.com</td>
            <td>12/11/2023</td>
            <td>
              <v-chip 
              color="primary"
              variant="outlined" 
              size="small">Frio</v-chip>
            </td>
            <td>
              <v-btn
                @click="dialogOpen = true"
                color="primary"
                style="border-radius: 5px"
                density="compact"
                icon="mdi-phone"
                class="mr-2"
              />
              <v-btn
                color="primary"
                style="border-radius: 5px"
                density="compact"
                icon="mdi-check-bold"
                class="mr-2"
              />
              <v-btn
                color="primary"
                style="border-radius: 5px"
                density="compact"
                icon="mdi-trash-can-outline"
                class="mr-2"
              />
            </td>
          </tr>
        </tbody>
      </v-table>
    </v-card>

    <v-row>
      <v-col cols="12" sm="6" md="4" >
        <v-card height="530" class="mx-auto" border density="compact">
          <v-card-title>Bonito, Mato Grosso do Sul</v-card-title>

          <v-img
            class="mx-auto align-center text-white"
            cover
            width="300"
            height="300"
            src="https://www.melhoresdestinos.com.br/wp-content/uploads/2020/06/lugares-para-viajar-brasil-820x430.jpg"
          ></v-img>

          <v-card-text>
            <div>Excelente para quem busca contato com a natureza, Bonito é o lugar perfeito para quem quer contato com a natureza e uma boa dose aventura!</div>
          </v-card-text>

          <v-card-actions class="d-flex justify-space-evenly">
            <v-btn size="small" prepend-icon="mdi-share-all" variant="outlined" color="primary">enviar <br> para cliente</v-btn>
            <v-btn
              prepend-icon="mdi-calendar-month"
              variant="tonal"
              color="primary"
              >Agendar</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4" >
        <v-card height="530" class="mx-auto" border density="compact">
          <v-card-title>Chapada dos Veadeiros, Goiás</v-card-title>

          <v-img
            class="mx-auto align-center text-white"
            cover
            width="300"
            height="300"
            src="https://www.melhoresdestinos.com.br/wp-content/uploads/2020/06/lugares-viajar-brasil--820x547.jpeg"
          ></v-img>

          <v-card-text>
            <div>Uma das cidades para se ter como base para visitar a Chapada dos Veadeiros, em Goiás, é a pequena Alto Paraíso.</div>
          </v-card-text>

          <v-card-actions  class="d-flex justify-space-evenly">
            <v-btn size="small" prepend-icon="mdi-share-all" variant="outlined" color="primary">enviar <br> para cliente</v-btn>
            <v-btn
              prepend-icon="mdi-calendar-month"
              variant="tonal"
              color="primary"
              >Agendar</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4" >
        <v-card height="530" class="mx-auto" border density="compact">
          <v-card-title>Pantanal</v-card-title>

          <v-img
            class="mx-auto align-center text-white"
            cover
            width="300"
            height="300"
            src="https://www.melhoresdestinos.com.br/wp-content/uploads/2022/09/pantanal-gustavo-figueiroa3-820x430.jpg"
          ></v-img>

          <v-card-text>
            <div>São poucas as opções de hotéis e pousadas com serviço completo e boa avaliação dos hóspedes para reservar pelo Booking. </div>
          </v-card-text>

          <v-card-actions  class="d-flex justify-space-evenly">
            <v-btn size="small" prepend-icon="mdi-share-all" variant="outlined" color="primary">enviar <br> para cliente</v-btn>
            <v-btn
              prepend-icon="mdi-calendar-month"
              variant="tonal"
              color="primary"
              >Agendar</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4" >
        <v-card height="530" class="mx-auto" border density="compact">
          <v-card-title>Pirenópolis, Goiás</v-card-title>

          <v-img
            class="mx-auto align-center text-white"
            cover
            width="300"
            height="300"
            src="https://www.melhoresdestinos.com.br/wp-content/uploads/2020/05/viagem-pos-quarentena-pirenopolis-820x547.jpg"
          ></v-img>

          <v-card-text>
            <div>Apenas “Piri” para os mais íntimos, com ruas de pedra, muito frequentada nos fins de semana, e uma arquitetura charmosa com casarões coloniais em seu centro histórico.</div>
          </v-card-text>

          <v-card-actions  class="d-flex justify-space-evenly">
            <v-btn size="small" prepend-icon="mdi-share-all" variant="outlined" color="primary">enviar <br> para cliente</v-btn>
            <v-btn
              prepend-icon="mdi-calendar-month"
              variant="tonal"
              color="primary"
              >Agendar</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4" >
        <v-card height="530" class="mx-auto" border density="compact">
          <v-card-title>Chapada Diamantina, Bahia</v-card-title>

          <v-img
            class="mx-auto align-center text-white"
            cover
            width="300"
            height="300"
            src="https://www.melhoresdestinos.com.br/wp-content/uploads/2020/06/lugares-viajar-brasil-lencois-chapada-diamantina--820x547.jpeg"
          ></v-img>

          <v-card-text>
            <div>Chapada Diamantina, com ruas de pedra e enorme quantidade de atividades, é o destino ideal para quem procura contato com muita natureza.</div>
          </v-card-text>

          <v-card-actions  class="d-flex justify-space-evenly">
            <v-btn size="small" prepend-icon="mdi-share-all" variant="outlined" color="primary">enviar <br> para cliente</v-btn>
            <v-btn
              prepend-icon="mdi-calendar-month"
              variant="tonal"
              color="primary"
              >Agendar</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4" >
        <v-card height="530" class="mx-auto" border density="compact">
          <v-card-title>Fernando de Noronha,<br> Pernambuco</v-card-title>

          <v-img
            class="mx-auto align-center text-white"
            cover
            width="300"
            height="300"
            src="https://www.melhoresdestinos.com.br/wp-content/uploads/2020/06/lugares-conhecer-brasil-fernando-noronha-820x548.jpg"
          ></v-img>

          <v-card-text>
            <div>A ilha mais cobiçada do Brasil é, certamente, um dos destinos mais bonitos em nosso país.</div>
          </v-card-text>

          <v-card-actions  class="d-flex justify-space-evenly">
            <v-btn size="small" prepend-icon="mdi-share-all" variant="outlined" color="primary">enviar <br> para cliente</v-btn>
            <v-btn
              prepend-icon="mdi-calendar-month"
              variant="tonal"
              color="primary"
              >Agendar</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4" >
        <v-card height="530" class="mx-auto" border density="compact">
          <v-card-title>São Miguel do Gostoso, <br> Rio Grande do Norte</v-card-title>

          <v-img
            class="mx-auto align-center text-white"
            cover
            width="300"
            height="300"
            src="https://www.melhoresdestinos.com.br/wp-content/uploads/2018/11/natal-rio-grande-do-norte-routos-sao-miguel-do-gostoso7-820x615.jpg"
          ></v-img>

          <v-card-text>
            <div>Ainda desconhecida por muitas pessoas, São Miguel do Gostoso é uma cidade bem pequenininha do Rio Grande do Norte.</div>
          </v-card-text>

          <v-card-actions  class="d-flex justify-space-evenly">
            <v-btn size="small" prepend-icon="mdi-share-all" variant="outlined" color="primary">enviar <br> para cliente</v-btn>
            <v-btn
              prepend-icon="mdi-calendar-month"
              variant="tonal"
              color="primary"
              >Agendar</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

const dialogOpen = ref(false);
const formOpen = ref(false);
const emailRules = [
  value => {
    if(value) {
      return true
    }
    return 'O e-mail é obrigatório'
  },

  value => {
    if(value.includes('@')) {
      return true
    }
    return 'O e-mail é obrigatório'
  }
]
</script>
