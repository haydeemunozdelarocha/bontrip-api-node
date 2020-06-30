import { UserEntity } from './User';

describe('User', () => {
    it('should be defined', () => {
        expect(new UserEntity()).toBeDefined();
    });
});
