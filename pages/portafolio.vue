<template>
  <main>
    <!-- class="max-md:fixed max-md:z-0 flex flex-wrap flex-col row items-center justify-around w-full h-full" -->

    <div class="flex lg:flex-row flex-col max-md:pt-11">
      <!-- PRIMERA COLUMNA -->
      <div class="lg:h-screen lg:w-1/4 flex justify-center items-center ">
        <div class="flex lg:flex-col">
          <button
            class="my-5 lg:text-xl font-semibold transition-all duration-200 ease-in-out text-left pr-5"
            :class="
              p1 === true ? 'lg:border-r-8  border-fountain-700' : 'text-slate-500'
            "
            @click="change('p1')"
          >
            Project 1
          </button>

          <button
            class="my-5 lg:text-xl font-semibold transition-all duration-200 ease-in-out text-left pr-5"
            :class="
              p2 === true ? 'lg:border-r-8  border-purple-700' : 'text-slate-500'
            "
            @click="change('p2')"
          >
            Project 2
          </button>

          <button
            class="my-5 lg:text-xl font-semibold transition-all duration-200 ease-in-out text-left pr-5"
            :class="
              p3 === true ? 'lg:border-r-8  border-amber-600' : 'text-slate-500'
            "
            @click="change('p3')"
          >
            Project 3
          </button>

          <button
            class="my-5 lg:text-xl font-semibold transition-all duration-200 ease-in-out text-left pr-5"
            :class="
              p4 === true ? 'lg:border-r-8  border-cyan-600' : 'text-slate-500'
            "
            @click="change('p4')"
          >
            Project 4
          </button>
        </div>
      </div>

      <!-- SEGUNDA COLUMNA -->

      <!-- PROJECT 1 -->
      <div v-show="p1" class="lg:h-screen lg:w-3/4 w-screen flex justify-center items-center flex-col">
        <div class="lg:w-[45%] w-[90%]">
          <fwb-carousel :pictures="pictures" slide />
        </div>
        <div
          class="m-4 lg:w-[45%] w-[90%] shadow-xl bg-fountain-50 border border-fountain-400 rounded-lg dark:bg-fountain-950 dark:border-fountain-600"
        >
          <section class="p-4 text-center">
            <h1 class="text-xl font-semibold">App Lista de compras</h1>
            <span class="text-sm text-gray-500 dark:text-slate-200"
              >Aplicación Híbrida</span
            >
          </section>

          <section class="pb-3 mx-4">
            <p>Tecnologías usadas:</p>
            <ul>
              <li>- QuasarJS (Framework de VueJS)</li>
              <li>- Android Studio</li>
            </ul>
          </section>

          <section class="mx-4 pb-4">
            <p>
              Aplicación CRUD para agregar productos en modalidad lista y en
              modalidad de lista con precios, con opciones de cantidad y precio
              del producto, sumando el total de la lista.
            </p>
          </section>

          <section class="mx-4 pb-4">
            <p>Aprendizajes:</p>
            <ul>
              <li>- Generar y compilar aplicaciones en archivos APK</li>
              <li>- Generar llaves para firmar archivos APK</li>
              <li>- Utilización de plataforma Google Play Console</li>
            </ul>
          </section>
        </div>
      </div>

      <!-- PROJECT 2 -->
      <div v-show="p2" class="lg:h-screen lg:w-3/4 w-screen flex justify-center items-center flex-col lg:pt-11">
        <div class="lg:w-[45%] w-[90%]">
          <fwb-carousel :pictures="pictures2" slide />
        </div>
        <div
          class="m-4 lg:w-[45%] w-[90%] shadow-xl bg-fountain-50 border border-fountain-400 rounded-lg dark:bg-fountain-950 dark:border-fountain-600"
        >
          <section class="p-4 text-center">
            <h1 class="text-xl font-semibold">Curso Autoinstruccional</h1>
            <span class="text-sm text-gray-500 dark:text-slate-200"
              >Aplicación Híbrida</span
            >
          </section>

          <section class="pb-3 mx-4">
            <p>Tecnologías usadas:</p>
            <ul>
              <li>- QuasarJS (Framework de VueJS)</li>
              <li>- Android Studio</li>
            </ul>
          </section>

          <section class="mx-4 pb-4">
            <p>
              Aplicación para alojar cursos autoinstruccionales para formato tablet.
            </p>
            <p>
              Funcionalidades de trabajo offline, registro de actividades, tiempo de conexión, calificaciones, fechas.
            </p>
            <p>
              Detección automática de conexión a internet al cerrar sesión y envío automático de registro de actividades del alumno a base datos noSQL alojada en la nube.
            </p>
          </section>

          <section class="mx-4 pb-4">
            <p>Aprendizajes durante el proyecto:</p>
            <ul>
              <li>- Mockups y prototipos en Figma.</li>
              <li>- Creación de API Rest con ExpressJS, alojamiento en la nube en Heroku.</li>
              <li>- Creación y alojamiento en la nube de base de datos NoSQL en MongoDB.</li>
            </ul>
          </section>
        </div>
      </div>

      <!-- PROJECT 3 -->
      <div v-show="p3" class="lg:h-screen lg:w-3/4 w-screen flex justify-center items-center flex-col">
        <div class="lg:w-[45%] w-[90%]">
          <fwb-carousel :pictures="pictures3" slide />
        </div>
        <div
          class="m-4 lg:w-[45%] w-[90%] shadow-xl bg-fountain-50 border border-fountain-400 rounded-lg dark:bg-fountain-950 dark:border-fountain-600"
        >
          <section class="p-4 text-center">
            <h1 class="text-xl font-semibold">Todo App, desafío Frontend Mentor</h1>
            <span class="text-sm text-gray-500 dark:text-slate-200"
              >Aplicación Web</span
            >
          </section>

          <section class="pb-3 mx-4">
            <p>Tecnologías usadas:</p>
            <ul>
              <li>- ReactJS con Vite</li>
              <li>- Tailwind CSS</li>
            </ul>
          </section>

          <section class="mx-4 pb-4">
            <p>
              Aplicación de tareas con marcador de activos y completados, incluye cambio de temas claro/oscuro y funcionalidad de 
              reordenamiento de la lista mediante arrastrar y soltar.
            </p>
            <br>
            <p>
              Sitio del ejercicio realizado: <a class="text-cyan-600" href="https://todo-react-1.netlify.app/" target="_blank">Enlace</a> 
            </p>
            <p>
              Enlace Frontend mentor: <a class="text-cyan-600" href="https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW" target="_blank">Enlace</a> 
            </p>
          </section>

          <section class="mx-4 pb-4">
            <p>Aprendizajes durante el proyecto:</p>
            <ul>
              <li>- Práctica de fundamentos de ReactJS</li>
            </ul>
          </section>
        </div>
      </div>

      <!-- PROJECT 4 -->
      <div v-show="p4" class="lg:h-screen lg:w-3/4 w-screen flex justify-center items-center flex-col lg:pt-11">
        <div class="lg:w-[45%] w-[90%]">
          <fwb-carousel :pictures="pictures4" slide />
        </div>
        <div
          class="m-4 lg:w-[45%] w-[90%] shadow-xl bg-fountain-50 border border-fountain-400 rounded-lg dark:bg-fountain-950 dark:border-fountain-600"
        >
          <section class="p-4 text-center">
            <h1 class="text-xl font-semibold">Aplicación de gestión de productos e inventario</h1>
            <span class="text-sm text-gray-500 dark:text-slate-200"
              >Aplicación Web</span
            >
          </section>

          <section class="pb-3 mx-4">
            <p>Tecnologías usadas:</p>
            <ul>
              <li>- Next13, hooks ReactJS, NextAuth, Tailwind.</li>
              <li>- NestJS, Class-Validator, TypeORM, JWT, AWS.</li>
            </ul>
          </section>

          <section class="mx-4 pb-4">
            <p>
              Aplicación para administrar productos de una tienda, el backend se hizo utilizando el framework NestJS con una base de datos SQL alojada en 
              la nube utilizando el servicio Amazon RDS para bases de datos relacionales, el frontend se está realizando con el framework NextJS en su versión 13,
              en proceso.
            </p>
          </section>

          <section class="mx-4 pb-4">
            <p>Aprendizajes:</p>
            <ul>
              <li>- Typescript.</li>
              <li>- API Rest con NestJS, estructura de módulo, controlador y servicio.</li>
              <li>- Autenticación y autorización utilizando JWT. </li>
              <li>- Creación de estructura de base de datos SQL utilizando TypeORM, entidades, DTO.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>

    
  </main>
</template>

<script setup lang="ts">
import { FwbCarousel } from "flowbite-vue";

const pictures = [
  { src: "/app1_1.png", alt: "Image 1" },
  { src: "/app1_2.png", alt: "Image 2" },
  { src: "/app1_3.png", alt: "Image 3" },
  { src: "/app1_4.png", alt: "Image 4" },
];

const pictures2 = [
  { src: "/app2_0.png", alt: "Image 0" },
  { src: "/app2_1.png", alt: "Image 1" },
  { src: "/app2_2.png", alt: "Image 2" },
  { src: "/app2_3.png", alt: "Image 3" },
  { src: "/app2_4.png", alt: "Image 4" },
  { src: "/app2_5.png", alt: "Image 5" },
  { src: "/app2_6.png", alt: "Image 6" },
  { src: "/app2_7.png", alt: "Image 7" },
];

const pictures3 = [
  { src: "/app3_1.png", alt: "Image 1" },
  { src: "/app3_2.png", alt: "Image 2" },
  { src: "/app3_3.png", alt: "Image 3" },
];

const pictures4 = [
  { src: "/app4_1.png", alt: "Image 1" },
  { src: "/app4_2.png", alt: "Image 2" },
  { src: "/app4_3.png", alt: "Image 3" },
  { src: "/app4_4.png", alt: "Image 4" },
  { src: "/app4_5.png", alt: "Image 5" },
  { src: "/app4_6.png", alt: "Image 6" },
  { src: "/app4_7.png", alt: "Image 7" },
  { src: "/app4_8.png", alt: "Image 8" },
];

const p1 = ref(true);
const p2 = ref(false);
const p3 = ref(false);
const p4 = ref(false);

const change = (key: string) => {
  switch (key) {
    case "p1":
      p1.value = true;
      p2.value = false;
      p3.value = false;
      p4.value = false;
      break;
    case "p2":
      p2.value = true;
      p1.value = false;
      p3.value = false;
      p4.value = false;
      break;
    case "p3":
      p3.value = true;
      p1.value = false;
      p2.value = false;
      p4.value = false;
      break;
    case "p4":
      p4.value = true;
      p1.value = false;
      p2.value = false;
      p3.value = false;
      break;
    default:
      break;
  }
};
</script>

<style scoped></style>
