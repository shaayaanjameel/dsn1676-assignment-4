var blue = {
    fullName: 'Vaccinium corymbosum',
    growsOnShrub: true,
    energy: 240,
    carbohydrates: 14.49,
    protein: 0.74
};

var grapes = {
    fullName: 'Vitis vinifera',
    growsOnShrub: false,
    energy: 288,
    carbohydrates: 18.1,
    protein: 0.72
};

var currant = {
    fullName: 'Ribes rubrum',
    growsOnShrub: true,
    energy: 234,
    carbohydrates: 13.8,
    protein: 1.4
};

var writeFruit = function (fruit) {
    document.write('<h1>' + fruit.fullName + '</h1>');
    document.write('<dl>');
    
    document.write('<dt> Grows On Shrub </dt>');
    document.write('<dd>' + fruit.growsOnShrub + '</dd>');
    
    document.write('<dt> Energy </dt>');
    document.write('<dd>' + fruit.energy + '</dd>');
    
    document.write('<dt> Carbohydrates </dt>');
    document.write('<dd>' + fruit.carbohydrates + '</dd>');
    
    document.write('<dt> Protein </dt>');
    document.write('<dd>' + fruit.protein + '</dd>');
    
    document.write('</dl>');
};

var allFruit = [blue, grapes, currant]
allFruit.forEach(writeFruit);