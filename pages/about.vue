<template>
  <main class="lg:fixed z-0 flex row items-center justify-around w-full h-full">
    <div class="max-md:pt-10 w-full max-w-md shadow-xl bg-fountain-50 border border-fountain-400 rounded-lg dark:bg-fountain-950 dark:border-fountain-600">
      <section class="flex flex-col justify-center items-center p-6">
        <UAvatar
          class="my-3"
          size="3xl"
          src="perfil.jpg"
          alt="Avatar"
          imgClass="grayscale"
        />
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">David Pérez</h5>
        <span class="text-sm text-gray-500 dark:text-slate-200">Desarrollador Web</span>
      </section>
      <section class="p-6">
        <p>
          Hola!, soy chileno, licenciado en Artes de la Universidad de Concepción, comencé el camino de la programación realizando 
          un bootcamp de desarrollo web front-end y luego seguí complementando mis conocimientos de manera autodidacta. 
        </p>
        <br>
        <p>
          Siempre estoy explorando y aprendiendo constantemente nuevas tecnologías tanto de front-end como de back-end y también de 
          computación en la nube como los servicios 
          de Amazon Web Services. 
        </p>
        <br>
        <p>
          Constantemente estoy en búsqueda de nuevos desafíos por lo cual espero seguir adquiriendo más conocimientos y 
          experiencia en este mundo tan entretenido que es la programación.
        </p>
      </section>
      <section class="p-6">
        <div class="flex mt-4 md:mt-6">
          <a class="cursor-pointer items-center px-4 py-2 text-sm font-medium text-center border border-fountain-700 text-fountain-700 bg-white rounded-lg hover:bg-fountain-50 dark:text-fountain-300 dark:bg-black  dark:border-fountain-300 dark:hover:bg-fountain-950"
            href="https://www.credly.com/users/david-perez.6a181c02"
            target="_blank"
          >
            Credly
          </a>
          <a class="cursor-pointer items-center px-4 py-2 mx-5 text-sm font-medium text-center border border-fountain-700 text-fountain-700 bg-white rounded-lg hover:bg-fountain-50 dark:text-fountain-300 dark:bg-black  dark:border-fountain-300 dark:hover:bg-fountain-950"
          href="David_CV_FullStack.pdf" 
          download
          >
            Mi CV
          </a>
        </div>
      </section>
    </div>
    
  </main>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
