console.log('Hello');

function makePizza() {
    console.log('1. Preheat oven.');
    console.log('2. Make dough.');
    console.log('3. Roll out dough.');
    console.log('4. Add tomato sauce.');
    console.log('5. Add mozzarella, basil and olive oil.');
    console.log('6. Add whatever you like (but no pineapple!).');
    console.log('7. Put pizza in oven.');
    console.log('8. Buon appetito!');
}

function makeSushi() {
    console.log('1. Boil rice.');
    console.log('2. Cut fish.');
    console.log('3. Prepare nori.');
    console.log('4. Strain rice.');
    console.log('5. Roll fish in rice and nori.')
    console.log('6. Add wasabi and/or soy sauce.')
    console.log('7. いただきます！')
}

for (i = 1; i < 4; i++) {
    makeSushi();
    console.log('\n');
}

for (i = 1; i < 3; i++) {
    makePizza();
    console.log('\n');
}