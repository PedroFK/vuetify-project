<template>
  <v-app theme="light">
    <v-navigation-drawer v-model="isDrawerOpen">
      <v-list>
          <v-list-item title="Menu"></v-list-item>
        <v-list-item prepend-icon="mdi-account">Home</v-list-item>
        <v-list-item prepend-icon="mdi-account">Usuários</v-list-item>

        <v-list-group value="Locations">
          <template #activator="{ props }">
              <v-list-item
              v-bind="props"
              prepend-icon="mdi-web"
              title="Lugares"
              >
              </v-list-item>
          </template>
          <v-list-item>Nacional</v-list-item>
          <v-list-item>Exterior</v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <VAppBar flat color="blue-grey-lighten-2" class="border-b">
      <v-app-bar-nav-icon
        @click="isDrawerOpen = !isDrawerOpen"
      ></v-app-bar-nav-icon>
      <VAppBarTitle>Vuetify Project</VAppBarTitle>
      <template #append>
        <v-btn icon class="mr-2">
          <v-badge dot>
            <v-icon icon="mdi-bell"></v-icon>
          </v-badge>
        </v-btn>
        <v-avatar>
          <v-img
            src="https://portal6.com.br/wp-content/uploads/2021/04/IMG_1067.jpg"
            cover
          ></v-img>
        </v-avatar>
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
