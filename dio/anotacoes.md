<h1>
    <a href="https://www.dio.me/">
     <img align="center" width="40px" src="https://hermes.digitalinnovation.one/assets/diome/logo-minimized.png"></a>
    <span> Curso oeferecido pela DIO XP Inc. - Full Stack Developer</span>
</h1>

> ## 📕 O repositório tem como objetivo armazenar resumos e o conteúdo passado em aula sobre React.

# ⭐ Introdução a Frontend com React

## 🚀 `Configuração de Ambiente React`

### 1️⃣ Fundamentos do React:

#### Node e NPM📍

- **Node.js** é um runtime de JavaScript criado pelo desenolvedor Ryan Dahl em 2009. O Node.js, foi desenvolvido em cima do motor JavaScript V8 - engine criada pelo Google e utilizada nos navegadores Chrome

- **NPM** (Node Package Manager), é o gerenciador de pacote padrão do node. Ele é utilizado como gerenciamento de pacotes, fluco de trabalho em linguagens de programação e ferramenta para construção de front-ends em aplicativos e websites.

Conssultar pacotes do npm: [npmjs](https://www.npmjs.com/)

#### 📍Yarn

- Yarn é um gerenciador de pacotes para aplicar comandos prontos de uma aplicação (alternativa para npm)

- Instalação do Yarn: `npm install -g yarn`
  > `-g`: instala de forma global

#### 📍 React DevTools

- É uma extensão disponível para o Chrome, Firefox e também como um aplicativo independete que permite inspecionar a hierarquia de componentes do React nas Ferramentas do desenvolvedor do navegador.

## 🚀 `Páginas Web com HTML`

### 1️⃣ HTML:

#### Meta Tags📍

- **keywords:** para motores de busca entenderem o que o site quer passar

```html
<meta name="keywords" content="sites, web, desenvolvimento, html, design" />
```

- **description:** descrição do site após pesquisarmos no navegador

```html
<meta name="description" content="Meta Tags - O que são e como utilizá-las" />
```

- **author**: autor da página

```html
<meta name="author" content="Pablo Henrinque" />
```

- **refresh**: recarrega para outra página após um determinado tempo

```html
<!-- Recarrega para outra página após 5 segundos -->
<meta http-equiv="refresh" content="5;url=http://www.novosite.com/" />
```

#### 📍 Listas:

- Lista em formato de identação \<dl>\</dl>

```html
<dl>
  <dt>HTML</dt>
  <dd>Uma linguagem de marcação utilizada para criar páginas web.</dd>

  <dt>CSS</dt>
  <dd>
    Uma linguagem de estilo utilizada para descrever a apresentação de um
    documento escrito em HTML.
  </dd>

  <dt>JavaScript</dt>
  <dd>
    Uma linguagem de programação usada principalmente no desenvolvimento web
    para criar funcionalidades dinâmicas.
  </dd>
</dl>
```

#### 📍 Tabelas:

- Formato mais modernos de tabelas em HTML \<thead>, \<tbody>, \<tfoot>

```html
<table border="1">
  <thead>
    <tr>
      <th>ID</th>
      <th>Nome</th>
      <th>Email</th>
      <th>Inscrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Letícia</td>
      <td>leticia@example.com</td>
      <td>2024-09-01</td>
    </tr>
    <tr>
      <td>2</td>
      <td>João</td>
      <td>joao@example.com</td>
      <td>2024-09-05</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Maria</td>
      <td>maria@example.com</td>
      <td>2024-09-10</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="4">Total de Registros: 3</td>
    </tr>
  </tfoot>
</table>
```

| ID                    | Nome    | Email               | Inscrição  |
| --------------------- | ------- | ------------------- | ---------- |
| 1                     | Letícia | leticia@example.com | 2024-09-01 |
| 2                     | João    | joao@example.com    | 2024-09-05 |
| 3                     | Maria   | maria@example.com   | 2024-09-10 |
| Total de Registros: 3 |

## 🚀 `Estilizando páginas com CSS`

### 1️⃣ CSS:

#### 📍 Pseudo-Classes:

- Muda a cor do campo enquanto ele estiver focado

```css
input:focus {
  color: #ff0000;
  background: #cccccc;
}
```

- Muda a cor apenas do primeiro filho

```css
item:nth-child(1):hover {
  background-color: #00ee00;
}

/* ou */

item:first-child:hover {
  background-color: #00ee00;
}
```

```html
<div class="flex">
  <div class="item">a</div>
  <div class="item">b</div>
  <div class="item">c</div>
</div>
```

## 🚀 `Tornando Páginas Web Interativas com JavaScript`

### 1️⃣ Javascript:

#### 📍 Tipos de variáveiss:

**Null e undefined**

- null: Nula (a variável existe mas não um tem valor setado diretamente pra ela).

- undefined: não definido (a variável ainda não foi setada ou foi setada de forma errada e não está encontrando o seu valor).

**var e let**

> ⚠️ Não é recomendado usar **var**, exceto em casos específicos.

- Se usarmos uma variável **let** dentro de uma função, ela vai ser **undefined** ao tentarmos acessa-la fora dela. Do contrário se usarmos **var** essa variável se torna acessível fora da função, o que pode causar conflitos no código caso não seja usada de forma adequada.

#### 📍 Laços de Repetições:

**foreach**

```js
const valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
valores.forEach((value) => {
  console.log(`${value} x 5 = ${value * 5}`);
});
```

```node
1 x 5 = 5
2 x 5 = 10
3 x 5 = 15
4 x 5 = 20
5 x 5 = 25
6 x 5 = 30
7 x 5 = 35
8 x 5 = 40
9 x 5 = 45
10 x 5 = 50
```

**map**

- Diferente do **foreach** o **map** retorna algum dado
- Podemos coloca-lo dentro de uma variável

```js
const valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const resultado = valores.map((value) => {
  return value * 5;
});

console.log(resultado);
```

```node
[5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
```

#### 📍 Arrow Functions:

```js
function multiplicar(num1, num2) {
  return num1 * num2;
}

// ou

const subtrair = (num1, num2) => {
  return num1 - num2;
};

// ou

const somar = (num1, num2) => num1 - num2;

// Principal
const soma = subtrair(10, 5);
const subtracao = somar(10, 5);
const multiplicacao = multiplicar(10, 5);

// Exibir
console.log(soma);
console.log(subtracao);
console.log(multiplicacao);

// ou

// Exibir
console.log(subtrair(10, 5));
console.log(somar(10, 5));
console.log(multiplicar(10, 5));
```

```node
5;
5;
50;
```

#### 📍 Arrays:

```js
const alunos = [
  {
    nome: "Pablo",
    idade: 25,
  },
  {
    nome: "José",
    idade: 19,
  },
];

console.log(alunos[1].idade);
```

```node
19;
```

- Podemos adicionar novos ojetos dentro do array

```js
alunos.push({
  nome: "João",
  idade: 35,
});
```

```node
35;
```

#### 📍 Funcionalidades ES6:

- filter
- find
- findIndex
- reduce
- some
- every

**filter:**

- O método **filter()** retorna um array

```js
const alunos = [
  {
    nome: "Pablo",
    idade: 25,
  },
  {
    nome: "José",
    idade: 19,
  },
  {
    nome: "Roberto",
    idade: 16,
  },
];

const alunosFiltrados = alunos.filter((aluno) => aluno.idade >= 18);
console.log(alunosFiltrados);

// O método filter() percorre todos os elementos do array e cria um novo array contendo apenas os elementos que satisfazem a condição especificada na função fornecida.

// (aluno) => aluno.idade >= 18: Essa é a função de callback passada para o método filter(). Para cada item do array alunos, a função recebe o objeto aluno como parâmetro.

// A função verifica se a propriedade idade do aluno é maior ou igual a 18 (aluno.idade >= 18). Se for verdade, o aluno é incluído no novo array; caso contrário, não é.

// alunosFiltrados: É o novo array que contém apenas os alunos cuja idade é maior ou igual a 18.

//O filter varre o array que nem o map, então precisamos passar uma variável 'aluno' dentro dele para que ele possa jogar cada valor dentro dela.
```

```node
[
  { nome: "Pablo", idade: 25 },
  { nome: "José", idade: 19 },
];
```

**find**

- O método **find()** retorna um objeto
- O primeiro que ele encontrar, ele retorna e para de fazer as validações

```js
const alunoRoberto = alunos.find((aluno) => aluno.nome == "Roberto");
console.log(alunoRoberto);
```

```node
{ nome: 'Roberto', idade: 16 }
```

**findIndex**

- Retorna o index do objeto

```js
const alunoRobertoIndex = alunos.findIndex((aluno) => aluno.nome == "Roberto");
console.log(alunoRobertoIndex);
```

**reduce**

- Usado para quando precisarmos fazer cálculos dentro de um array

```js
const idades = alunos.reduce((acc, aluno) => {
  return acc + aluno.idade;
}, 0);

console.log(idades);

// primeiro tras um acumulator (acc) e  item atual do array alunos que está sendo processado na iteração (aluno)

// em seguida soma o acumulador com a idade de cada aluno que ele percorre no array

// iniciamos o valor do acumulador com 0

// no final teremos a somatória de idade dos alunos
```

```node
60;
```

**some**

- Retorna true ou false
- verifica se algum item no array corresponde a condição

```js
const alunos = [
  {
    nome: "Pablo",
    idade: 25,
  },
  {
    nome: "José",
    idade: 19,
  },
  {
    nome: "Roberto",
    idade: 20,
  },
];

// Verifica se algum aluno tem idade menor que 10
const acimaDeNove = alunos.some((alunos) => alunos.idade < 10);

console.log(acimaDeNove);
```

```node
false;
```

**every**

- Retorna true ou false
- verifica se algum item no array corresponde a condição

```js
const alunos = [
  {
    nome: "Pablo",
    idade: 25,
  },
  {
    nome: "José",
    idade: 19,
  },
  {
    nome: "Roberto",
    idade: 20,
  },
];

// Verifica se TODOS os alunos tem idade abaixo de 90
const menorQueNoventa = alunos.every((alunos) => alunos.idade < 90);

console.log(menorQueNoventa);
```

```node
false;
```

## 🚀 `Entendendo a DOM (Document Object Model)`

### 1️⃣ DOM:

#### 📍 Manipulando a DOM:

- **getElementsBytTagName:** retorna um array
- **getElementsBytClassName:** retorna um array
- **getElementsById**
- **querySelector**

```js
// Remove o elemento
window.document.getElementById("title").remove();
```

<hr>

```html
<!--  Ao clicar no botão, remove o elemento com id title diretamente pelo HTML-->
<button onClick="window.document.getElementById('title').remove()">
  Remover
</button>
```

<hr>

```js
// Remove a tag 'div' 0
document.getElementsByTagName("div")[0].remove();
```

```html
<!-- A div e seus elementos filhos serão removidos -->
<div class="flex" id="lista">
  <div class="item">a</div>
  <div class="item">b</div>
  <div class="item">b</div>
  <div class="item">b</div>
  <div class="item">c</div>
</div>
```

<hr>

```js
window.document.querySelectorAll('div')

// retorna um array
NodeList(7) [div#lista.flex, div.item, div.item, div.item, div.item, div.item, div]
```

<hr>

```js
window.document.querySelector('input[name="email"]')

// retorna o input específicado
<input name=​"email">
```

<hr>

```js
window.document.querySelectorAll('.item, .flex')

// seleciona e retorna mais de um elemento
NodeList(6) [div#lista.flex, div.item, div.item, div.item, div.item, div.item]0: div#lista.flex1: div.item2: div.item3: div.item4: div.item5: div.itemlength: 6[[Prototype]]: NodeList
```

## 🚀 `Primeiros passos com a biblioteca React`

### 1️⃣ O que é React:

#### 📍 Manipulando a DOM:

**Biblioteca**

- Esse é o recurso mais utilizado no mundo da programação e muitas pessoas nem se dão conta do quanto utilizam. A ideia da biblioteca é compartilhar soluções por meio de funções ou métodos. Por Exemplo: Se você tiver que fazer um trabalho de matemática, por exemplo, poderá ir até uma biblioteca física, pegar um livro e utilizar equações desenvolvidas no livro. Então, não será preciso desenvolver as equações desde o início

- Moment.js
- Chart.js
- Voca
- mo.js
- React

**Framework**

- O framework nada mais é do que uma ferramenta que vai te ajudar a ter como único objetivo focar em desenvolver o projeto, não em detalhes de configurações.

- Angular
- Vuex
- Ionic
- Next
- Express
- LoopBack

#### 📍 Criando projeto React:

`npx create-react-app dio`: cria um novo projeto react da versão mais recente
`cd dio`: entrar na pasta do projeto
`code .` entrar na raiz do projeto
`npm start`: rodar projeto no navegador


#### 📍 Conceitos de Componentes e props:

**Button/index.js:**
```js
export default function Button(props) {
    const {title} = props; // desestruturação
  return (
    <button>{title}</button>
  )
}
```
**App.js**
```js
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <h1>Olá React</h1>
      <Button title="Entrar"/>
      <Button title="Fechar"/>
      <Button title="Abrir"/>
      <Button title="Salvar"/>
    </div>
  );
}

export default App;
```

## 🚀 `Criando Projetos React`

### 1️⃣ Criando um projeto React do zero:


#### 📍 Babel:
* É um Transpilador JavaScript de código aberto e gratuito o Babel possui como uma das principais características converter código JavaScript atual em uma versão que o navegador posso executar.
