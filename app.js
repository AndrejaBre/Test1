(function (){
    console.log('radi iife');
})();

var a = prompt('Koliko puta zelite da stampate?');
while (a > 50){
    alert('Molim unesite roj manji od 50');
    a = prompt('Unesite broj manji od 50');
}
 stampaj(a);



function stampaj(a){
    for (let i = 0; i < a; i++){
        console.log(`Ovo je ${i+1}. put`);
    }
}