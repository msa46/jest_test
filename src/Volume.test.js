import {cube} from './Volume'

test('ECC', () =>{
    expect(cube(0, 0, 0)).toBe(0);
    expect(cube(-1, -1, -1)).toBe(-1);
    expect(cube(1, 1, 1)).toBe(1);
    expect(cube(2, 2, 2)).toBe(8);
} )
// base -> -1 1 1
test('BCC', () => {
    expect(cube(-1, 1, 1)).toBe(-1);
    expect(cube(0, 1, 1)).toBe(0);
    expect(cube(1, 1, 1)).toBe(1);
    expect(cube(2, 1, 1)).toBe(2);
    expect(cube(-1, -1, 1)).toBe(-1);
    expect(cube(-1, 0, 1)).toBe(-1);
    expect(cube(-1, 2, 1)).toBe(-1);
    expect(cube(-1, 1, -1)).toBe(-1);
    expect(cube(-1, 1, 0)).toBe(-1);
    expect(cube(-1, 1, 2)).toBe(-1);
})