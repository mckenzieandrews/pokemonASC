// Define Pokemon class here
var pokemons = [];

var Pokemon = class Pokemon {
 constructor(name, type, hp, def, atk, legend) {

   if (typeof name !== "string"){
     throw new UserException('Name should be a string.');
    }
   if (typeof type !== "string"){
     throw new UserException('Type should be a string.');
    }
   if (typeof hp !== "number"){
     throw new UserException('Hp should be a number.');
    }
   if (typeof def!== "number"){
     throw new UserException('Def should be a number.');
    }
   if (typeof atk!== "number"){
     throw new UserException('Atk should be a number.');
    }
   if (typeof legend!== "boolean"){
     throw new UserException('Legend should be a boolean.');
    }
             
    this.name = name;
    this.type= type;
    this.hp = hp;
    this.def= def;
    this.atk = atk;
    this.legend= legend;
   
    //how do you use an array to keep track of all the pokemons for all() method?
    //need to fix!
    var p = new Pokemon(name);
    pokemons.push(p);  
  }
  
  attack(Pokemon poke){
  if (typeof poke!== "Pokemon"){
     throw new UserException('Please enter a Pokemon.');
  }
   
  poke.sethp(poke.hp- (this.atk-poke.def);
  return poke.hp;    
  }
 
 aliveCheck(}{
    //if hp is greater than 0, return true
 if(this.hp> 0){
    return true; 
    }
 else{
 // else return false 
    return false; 
    }  
  }
  
  
 //return all the pokemons-- does this work? idk!?! 
 all(){
   var i;
   var allThePokes="";
   for (i=0; i<pokemons.length; i++){
    allThePokes + = pokemons[i] + " "; 
   }
   return allThePokes;
  }
  
  get name() {
  return this.name; 
  }
  
  set name(n){
   this.name = n; 
  }
   
  get type() {
  return this.type; 
  }
  
  set type(t){
   this.type = t; 
  }
   
  get hp() {
  return this.hp; 
  }
  
  set hp(p){
   this.hp = p; 
  }
  
  get def() {
  return this.def; 
  }
  
  get atk(){
  return this.atk; 
  }
  
  get legend(){
  return this.legend();
  }
  
};

// exporting
module.exports={
    pokemon:Pokemon
}
