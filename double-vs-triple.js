// == means simple cheak
// === means strickly cheak..or valo kore cheak

// == double equal only cheak value
// but === cheak value and also type
const first = 2;
const second = '2';
// when double equal ,it does't cheak type
if (first == second) {
    console.log('true')
} else {
    console.log('false');
}

//when triple equal ,it's cheakedvalue and type also
if (first === second) {
    console.log('true')
} else {
    console.log('false');
}