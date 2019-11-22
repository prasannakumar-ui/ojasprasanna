import { SecPipe } from './sec.pipe';

describe('SecPipe', () => {
  it('create an instance', () => {
    const pipe = new SecPipe();
    expect(pipe).toBeTruthy();
  });
});
