import { ExampleAngularPage } from './app.po';

describe('example-angular App', () => {
  let page: ExampleAngularPage;

  beforeEach(() => {
    page = new ExampleAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
