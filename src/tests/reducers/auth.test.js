import authReducers from '../../reducers/auth';


test('should set default state', () => {
    const state = authReducers(undefined, { type: '@@INIT' });
    expect(state).toEqual({});
});

test('should clear uid for logout', () => {
    const action = {
        type: 'LOGIN',
        uid: 'abc123'
    };
    const state = authReducers({}, action);
    expect(state.uid).toBe(action.uid);
});
test('should set uid for login', () => {
    const action = { 
        type: 'LOGOUT'
    }
    const state = authReducers({uid: 'anything'}, action );
    expect(state).toEqual({});
});