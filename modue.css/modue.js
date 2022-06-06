// DAY 6
// IMPLEMENTING MODULE PATTERN IN JS
// MODULE; ENCAPSULATION AND SEPARATION OF CONCERNS BUT PRIVATE AND PUBLIC DATA
// PRACTICE TEST

let ProjectController = ( function (){

    let y = 45;
    
    let add = function(a) {
        return y+a;
    }
    
    return{
        publicTest: function(b) {
            console.log(add(b));
        }
    }
    
    
    
    })();