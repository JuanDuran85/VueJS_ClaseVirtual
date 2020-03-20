Vue.component('componente-dos', {
    template: `
        <div>
            <h1>Mensaje desde el componente2.js</h1>
            <p v-text="titulo"></p>
            <div v-show="validar">
                <p>La información enviada fue:</p>
                <ul>
                    <li v-for="(datos,index) in recibido">{{datos}}</li>
                </ul>
                <pre>{{asincrono}}</pre>
            </div>
            <button v-on:click="conexion" class="btn btn-success">Traer Datos</button>
            <button @click="postRecibido" class="btn btn-primary">POST</button>
            <section v-if="valorXYZ">
                <div class="row">
                    <div class="col-12 col-sm-6 col-md-4 col-lg-3 p-2" v-for="(xyz,index) in rickandmorty" :key="index">
                        <div class="card">
                            <img :src="xyz.image" class="card-img-top" :alt="index+1">
                            <div class="card-body">
                                <h5 class="card-title" v-text="xyz.name"></h5>
                                <p class="card-text">Especie: <span v-text="xyz.species"></span></p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div> 
                </div>
            </section>
            <section v-else>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Titulo</th>
                            <th>Mensaje</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(valores,index) in posts" :key="index">
                            <th v-text="valores.id"></th>
                            <td v-text="valores.title"></td>
                            <td v-text="valores.body"></td>
                        </tr>
                    </tbody>
            </table>
            </section>
        </div>
    `,
    data() {
        return {
            titulo: "Mensaje desde el componente con variable titulo",
            rickandmorty: [],
            valorXYZ: false,
            posts: [],
            recibido: {},
            validar: false,
            asincrono: []
        }
    },
    methods: {
        conexion(){
            console.log("entrando a conexion");
            axios.get("https://rickandmortyapi.com/api/character/")
            .then((resultado)=>{
                console.log(resultado);
                console.log(resultado.data.results);
                this.rickandmorty = resultado.data.results;
                this.valorXYZ = true;
            }).catch((error) => {
                console.error(error);
            })
        },
        enviando(){
            console.log("enviando");
            axios.post("https://jsonplaceholder.typicode.com/posts",{
                data: {
                    title: 'Enviando informacion con POST',
                    body: 'Utilizando Axios con metodo POST',
                    userId: 25
                }
            }).then(resultado => {
                console.log(resultado);
                this.recibido = resultado.data.data;
            }).catch(error => console.error(error))
        },
        postRecibido(){
            this.validar = !this.validar;
        },
        llamado(){
            const resultadoXYZ = async (url) => {
                try {
                    let respuestaXYZ = await axios(url);
                    console.log(respuestaXYZ);
                    this.asincrono = respuestaXYZ.data;
                } catch (error) {
                    console.log(error);
                }
                
            };
            let url = "https://jsonplaceholder.typicode.com/users";
            resultadoXYZ(url);
        }
    },
    created() {
        this.enviando();
    },
    beforeMount() {
        this.llamado();
    },
    mounted() {
        console.log("mounted");
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(respuesta => respuesta.json())
            .then(datos => {
                console.log(datos);
                this.posts = datos;
            })
            .catch(error => console.error(error))
    },
});