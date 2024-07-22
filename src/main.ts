// Non-null 단언 연산자 - !

// 1) const el = HTMLBodyElement | null
const el = document.querySelector('body');
el!.textContent = 'Hello world?!';

// 2) x: number | null | undefined
function getNumber(x: number | null | undefined) {
    return Number(x!.toFixed(2));
}
getNumber(3.1415926535);
getNumber(null);

// 3)
function getValue(x: string | number, isNumber: boolean) {
    if (isNumber) {
        return Number((x as number).toFixed(2));
    }
    return (x as string).toUpperCase();
}
getValue('hello world', false);
getValue(3.14159926535, true);
