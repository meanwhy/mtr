import { MtrPage } from './app.po';

describe('mtr App', function() {
  let page: MtrPage;

  beforeEach(() => {
    page = new MtrPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
