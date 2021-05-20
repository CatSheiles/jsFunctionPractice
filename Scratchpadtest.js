// ctrl+shift+p to display editors command palette then quokka to see list + select newJSfile
// Quokka - see the output of console.log right next to your code
// Quokka - See the value of a variable simply by typing its name
// Quokka - Use sequence expression to compare objects
// Orange indicators means only part of the line was executed because JavaScript stops processing after first false value
// Green indicators means that Quokka executed all statements on a line of code
// White indicators means that a line of code was never executed by Quokka
// Red indicators show where an error occurred

const test = 123;
console.log(test);

const arr = [1,2,3];
console.log(arr.map(v => v + 1));

const func = (bool) => {
    if(bool){
        console.log('success');
    }else {
        console.log('failure');
    }
    };
func(true);