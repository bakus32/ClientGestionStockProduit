import { ClientGestionStockProduitPage } from './app.po';

describe('client-gestion-stock-produit App', function() {
  let page: ClientGestionStockProduitPage;

  beforeEach(() => {
    page = new ClientGestionStockProduitPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
