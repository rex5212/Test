const media = require('../media')

describe('teste de media.js', () => {
    it('pontuacoes', () => {
        const mediaP = 8
        expect(media.pontuacao(8)).toBe(`Sua media final foi ${mediaP} com pontuação MS (Médio Superior)`)
    })
})