const app = Vue.createApp({
    data() {
      return {
        peliculas: [
          {
            id: 1,
            imagen: '/images/titanik.jpg',
            titulo: 'Titanic',
            duracion: '3h 14m',
            genero: 'Romance, Drama',
            director: 'James Cameron'
          },
          {
            id: 2,
            imagen: '/images/theshaws.jpg',
            titulo: 'The Shawshank Redemption',
            duracion: '2h 22m',
            genero: 'Drama, Crime',
            director: 'Frank Darabont'
          },
          {
            id: 3,
            imagen: '/images/godfather.jpg',
            titulo: 'The Godfather',
            duracion: '2h 55m',
            genero: 'Crime, Drama',
            director: 'Francis Ford Coppola'
          },
          {
            id: 4,
            imagen: '/images/pulfiction.jpg',
            titulo: 'Pulp Fiction',
            duracion: '2h 34m',
            genero: 'Crime, Drama',
            director: 'Quentin Tarantino'
          },
          // Resto de películas...
        ],
      };
    }
  });
  
  app.component('catalogo', {
    props: {
      peliculas: {
        type: Array,
        required: true
      },
      colorTexto: {
        type: String,
        default: '#ffff'
      },
      colorFondo: {
        type: String,
        default: '#000'
      }
    },
    template: `
      <table class="table" :style="{ color: colorTexto, backgroundColor: colorFondo }">
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Título</th>
            <th>Duración</th>
            <th>Género</th>
            <th>Director</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="pelicula in peliculas" :key="pelicula.id">
            <td><img :src="pelicula.imagen" :alt="pelicula.titulo" width="150"></td>
            <td>{{ pelicula.titulo }}</td>
            <td>{{ pelicula.duracion }}</td>
            <td>{{ pelicula.genero }}</td>
            <td>{{ pelicula.director }}</td>
          </tr>
        </tbody>
      </table>
    `
  });
  
  app.mount('#app');
  
  
  
  