module.exports = function toReadable (number) {

    const arrayVoice = ['zero','one','two','three','four','five','six','seven','eight','nine',
        'ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen',
        'twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety',
        'hundred'];

    let arr = 0;
    let result_deco = 0;
    let deco_0 = +`${number}`.split('')[0];
    let deco_1 = +`${number}`.split('')[1];
    let deco_2 = +`${number}`.split('')[2];
    let ifzero = deco_1 === 0;
    let result = '';

    if (number < 10) {
        result = arrayVoice[number];
    }
    if (number >= 10 && number <20) {
        result = arrayVoice[number];
    }
    if (number >= 20 && number < 100) {
        result = `${arrayVoice[deco_0 + 18]}` + `${ifzero ? '' : ' ' + arrayVoice[deco_1]}`;
    }
    if (number >= 100 && number < 1000) {
        const arr = `${number}`.split('')
        number = arr.shift();
        result_deco = +arr.join('');
        result = `${arrayVoice[deco_0] + ' ' + arrayVoice[28] +
        (deco_1 === 0 && deco_2 === 0?  '' : ' ' + toReadable(result_deco))}`;
    }
    return result;
}
