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

var writefruit = function (fruit) {
    document.write('<h1>' + fruit.fullName + '</h1>');
    document.write('<dl>');
    document.write('<dt> Grows On Shrub </dt>');
    document.write('<dd>' + fruit.growsOnShrub + '<dd>');
    document.write('<dl>');
};