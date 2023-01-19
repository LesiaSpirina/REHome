import { profileReducer } from "./reducer";
import { changeName } from "./actions";

describe('testing profile reducer', ()=> {
    it('new name should be change', () => {
        let action = changeName('name')
        const state = {
            name: 'GB',
            visible: true,
            isAuth: false
        }
        let newName = profileReducer( state, action)
        expect(newName)
    })
    it('the state has property',() => {
        
        const state = {
            name: 'GB',
            visible: true,
            isAuth: false
        }
        expect(state).toHaveProperty('name','GB')
    })

})

