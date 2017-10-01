import { ActivityJournalPage } from './app.po';

describe('activity-journal App', () => {
  let page: ActivityJournalPage;

  beforeEach(() => {
    page = new ActivityJournalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
