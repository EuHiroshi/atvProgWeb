import Matemagica  from "./matemagica";

function main() {        
    Matemagica.setX(10)
    Matemagica.setY(10)
    test('adds 10 + 10 to equal 20', () => {
        expect(Matemagica.getSum()).toBe(20);
    });
    
    test('subs 10 - 10 to equal 0', () => {
        expect(Matemagica.getSub()).toBe(0);
    });

    test('divs 10 / 10 to equal 1', () => {
        expect(Matemagica.getDiv()).toBe(1);
    });

    test('mult 10 * 10 to equal 100', () => {
        expect(Matemagica.getMult()).toBe(100);
    });
    //     ErrorMessage.INVALID_SUM // nao sei se funciona 
}

main()