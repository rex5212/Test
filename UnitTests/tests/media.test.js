const media = require('../media')

describe('teste de media.js', () => {
    it('medias', () => {
        const valores = [5,5,5,5]
        expect(media.mediaNota(valores)).toBe(5)
    })
})