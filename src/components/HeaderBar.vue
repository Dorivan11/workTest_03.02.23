<template>
    <v-container>
      <v-app-bar color="red">
        <v-btn> 
            <router-link to='/'> Main </router-link>
        </v-btn>
        <v-btn> 
            <router-link to='/basket'> Basket </router-link>    
        </v-btn>
        <v-btn> 
            <router-link to='/redactor'> Redactor </router-link>    
        </v-btn>
      </v-app-bar>
    </v-container>
</template>
  
<script>

export default {
    
};
</script>