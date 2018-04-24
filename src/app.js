import {person} from './module1';
let test = ()=>{console.log("Is it working?");}
test();
console.log(person.name);
///............Async Await
async function getPosts(){
const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
const data = await resp.json();
return data;
}

getPosts().then(posts =>console.log(posts))