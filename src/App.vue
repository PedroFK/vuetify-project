<template>
  <v-app theme="light">
    <v-navigation-drawer v-model="isDrawerOpen">
      <v-list density="compact">
        <v-list-item title="Menu"></v-list-item>
          
        <v-list-item  href="#" prepend-icon="mdi-home">Home</v-list-item>

        <v-list-item href="#" prepend-icon="mdi-account">Clientes</v-list-item>

        <v-list-group value="Locations">

          <template #activator="{ props }">
              <v-list-item
              v-bind="props"
              prepend-icon="mdi-web"
              title="Catálogo"
              subtitle="Destinos"
              >
              </v-list-item>
          </template>

          <v-list-item href="#">Nacional</v-list-item>

          <v-list-item href="#">Exterior</v-list-item>

        </v-list-group>

      </v-list>
    </v-navigation-drawer>

    <VAppBar flat color="blue-grey-lighten-2" class="border-b">

      <v-app-bar-nav-icon
        @click="isDrawerOpen = !isDrawerOpen"
      ></v-app-bar-nav-icon>

      <VAppBarTitle>Agente de Viagem</VAppBarTitle>

      <template #append>

        <v-btn icon class="mr-2">
          <v-badge dot>
            <v-icon icon="mdi-bell"></v-icon>
          </v-badge>
        </v-btn>

        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn icon v-bind="props">
              <v-avatar>
                <v-img
                  src="https://portal6.com.br/wp-content/uploads/2021/04/IMG_1067.jpg"
                  cover
                ></v-img>
              </v-avatar>
            </v-btn>
          </template>
          <v-list :lines="false" density="compact" nav min-width="150px">
            <v-list-item href="#" prepend-icon="mdi-account">
              <v-list-item-title>Perfil</v-list-item-title>
            </v-list-item>
            <v-list-item href="#" prepend-icon="mdi-cog">
              <v-list-item-title>Configuraões</v-list-item-title>
            </v-list-item>
            <v-list-item href="#" prepend-icon="mdi-exit-to-app">
              <v-list-item-title>Sair</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        
        

      </template>
    </VAppBar>

    <v-main>
      <Test />
    </v-main>

  </v-app>
</template>

<script setup>
import { ref } from "vue";

const isDrawerOpen = ref(false);
</script>
