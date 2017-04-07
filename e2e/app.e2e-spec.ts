import { FTrackerPage } from './app.po';

describe('ftracker App', () => {
  let page: FTrackerPage;

  beforeEach(() => {
    page = new FTrackerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
