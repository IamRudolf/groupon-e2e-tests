class HomePage {
  constructor(page) {
    this.page = page;

    // Locators
    this.searchInput = page.locator('input[id="ls-search"]');
  }
}

module.exports = { HomePage };