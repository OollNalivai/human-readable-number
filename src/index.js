module.exports = function toReadable (number) {
    let result = '';
    const arrayVoice = ['zero','one','two','three','four','five','six','seven','eight','nine',
        'ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen',
        'twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety',
        'hundred'];
    let result_deco = 0;
    let deco_0 = +`${number}`.split('')[0];
    let deco_1 = +`${number}`.split('')[1];
    let deco_2 = +`${number}`.split('')[2];
    let arr = 0;
    let ifzero = deco_1 === 0;
    if (number < 10) {
        let nine = arrayVoice[number];
        result = nine;
    } else if (number >= 10 && number <20) {
        let twenty = arrayVoice[number];
        result = twenty;
    } else if (number >= 20 && number < 100) {
        let ninetynine = `${arrayVoice[deco_0 + 18]}` + `${ifzero ? '' : ' ' + arrayVoice[deco_1]}`;
        result = ninetynine;
    } else if (number >= 100 && number < 1000) {
        const arr = `${number}`.split('')
        number = arr.shift();
        result_deco = +arr.join('');
        let chunk = `${arrayVoice[deco_0] + ' ' + arrayVoice[28] +
        (deco_1 == 0 && deco_2 == 0?  '' : ' ' + toReadable(result_deco))}`;
        result = chunk;
    }
    return result;
}
