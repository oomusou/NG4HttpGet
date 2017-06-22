import { NG4HttpPage } from './app.po';

describe('ng4-http App', () => {
  let page: NG4HttpPage;

  beforeEach(() => {
    page = new NG4HttpPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
