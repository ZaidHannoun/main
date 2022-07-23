import {  isMongoID} from "../service.js"

describe('resource tests', () => {
    

   

    it('IsMongoID', () => {
        // expect(sum(5, 7)).not.toBe(12)
        expect(isMongoID("dgdghrhrhrsdgdh")).toBe(false)
        expect(isMongoID("62d1f3a56deead351323541b")).toBe(true)
    })

    
})