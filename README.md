# Ejercicios de Repaso con VueJS
 
## Iniciando VueJS con el CDN de desarrollo
 
1. Lo primero que debes hacer es buscar el CDN en la página oficial de [VueJS](https://vuejs.org/v2/guide/).
2. Posteriormente, instalar el complemento de desarrollo en nuestro navegador web, denominado: [Vue.js Devtools](https://github.com/vuejs/vue-devtools),el cual se encuentra disponible solamente para: [Chrome](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=es) y [Firefox](https://addons.mozilla.org/es/firefox/addon/vue-js-devtools/), esta extensión nos permitirá realizar *debugging* a aplicaciones construidas con VueJS.
3. Realizado los pasos anteriores, en nuestro editor de texto de preferencia, debemos instalar también algunas extensiones que nos permitan trabajar de manera optima y rápida. Por ejemplo, para Visual Studio Code, se pueden utilizar: [Vetur](https://vuejs.github.io/vetur), [Vue VSCode Snippets](https://marketplace.visualstudio.com/items?itemName=sdras.vue-vscode-snippets) y [Vue 2 Snippets](https://marketplace.visualstudio.com/items?itemName=sdras.vue-vscode-snippets).
4. Ahora que tenemos todas estas herramientas instaladas, podemos dar inicio a nuestro proyecto con VueJS desde el CDN de desarrollo. En el caso de usar Vue Cli, se modificará el primer paso por la instlacion de VueJS mediante el terminal con todas sus dependencias. Lo cual, realizaremos en posteriores sesiones de trabajo.
5. Crea una carpeta con el nombre del proyecto en tu lugar de trabajo, posteriormente, debes abrir la carpeta con tu editor de texto de preferencia, donde deberás crear otras carpetas, como js, css, img, o cualquier otra carpeta que tu proyecto crea conveniente. Ejemplo:
   ```
   |-/ Carpeta Princiap (nombre del proyecto)
        |--/ css
                >-- style.css
        |--/ img
                >-- imagen.png
        |--/ js
            |---/ components
                    >-- componente1.js
                    >-- componente2.js
                >-- index.js
        >-- index.html
    ```    
6. Después de crear las carpetas y archivos (los anteriores son un ejemplo general, estos pueden variar dependiendo de la estructura del proyecto y se utiliza Vue Cli). Debes inciar el documento HTML y agregar los enlaces para los ducumentos externos, como lo son: el css, el js y los CDN de VueJS y cualquier otro CDN que necesites agregar. Recuerda que el CDN de VueJS en modo desarrollo es:

```JS
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```

7. Al finalizar de configurar y preparar el documento HTML, debemos crear en el `<body>` una estructura con el id que será el elemento principal de VueJS. Ejemplo:

```HTML
<body>
    <div id="vm">{{nombre de variable}}</div>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script src="js/index.js"></script>
</body>
```

8. Ahora en el archivo externo o en el mismo documento de HTML dentro de una etiqueta `<script>`, debemos iniciar la instancia de Vue para poder trabajar con este framework. Ejemplo:

```JS
const vm = new Vue({
    el: '#vm',
    data: {
        nombre de variable : 'valor de la varibale'
    }
});
```

## Direcciones web de APIs
* [GitHub API](https://api.github.com/)
* [API Tester](https://apitester.com/)
* [JSONPlaceholder](http://jsonplaceholder.typicode.com/)
* [RandomAPI](https://randomuser.me/)
* [Lorem Picsum](https://picsum.photos/)
* [ipify API](https://www.ipify.org/)
* [CoinDesk API](https://www.coindesk.com/coindesk-api)
* [REST Countries](https://restcountries.eu/)
* [country IO](http://country.io/data/)
* [Req | Res](https://reqres.in/)
* [The Movie DB](https://www.themoviedb.org/)
* [The Rick and Morty API](https://rickandmortyapi.com/)
* [PokéAPI](https://pokeapi.co/)
* [Listado de API's Públicas en Chile](https://github.com/juanbrujo/listado-apis-publicas-en-chile)
* [OpenLibra ](https://openlibra.com/es/page/public-api)
* [Yahoo Weather API](https://developer.yahoo.com/weather/documentation.html)


