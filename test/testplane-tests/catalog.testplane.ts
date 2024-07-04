

// describe("Проверка каталога товаров", async function () {

//   it("Проверка имени товара в каталоге", async function ({ browser }) {
//     await browser.url("http://localhost:3000/hw/store/catalog");
//     const productName = await browser.$(".ProductItem-Name");
//     await productName.waitForExist();

//     expect(await productName.getText()).not.toBe("")
//   });

//   it("Проверка на отображение товара", async function ({ browser }) {
//     await browser.url("http://localhost:3000/hw/store/catalog/1");

//     const product = await browser.$(".Product");
//     await product.waitForExist();

//     expect(await product.getText()).not.toEqual("LOADING");
//   });

//   it("Проверка элементов карточки", async function ({ browser }) {
//     await browser.setWindowSize(1366, 768);
//     await browser.url("http://localhost:3000/hw/store/catalog");

//     const testItemCard = await browser.$$(".ProductItem.card.w-100.mb-4")[0];
//     await testItemCard.waitForExist({timeoutMsg: "Нет карточки"});

//     const testItemCardImage = await testItemCard.$(".Image.card-img-top");
//     await testItemCardImage.waitForExist({timeoutMsg: "Нет картинки"});

//     const testItemCardBody = await testItemCard.$(".card-body");
//     await testItemCardBody.waitForExist({timeoutMsg: "Нет body карточки"});

//     const testItemCardTitle = await testItemCardBody.$(".ProductItem-Name.card-title");
//     await testItemCardTitle.waitForExist({timeoutMsg: "Нет заголовка"});

//     const testItemCardPrice = await testItemCardBody.$(".ProductItem-Price.card-text");
//     await testItemCardPrice.waitForExist({timeoutMsg: "Нет цены"});

//     const testItemCardLink = await testItemCardBody.$(".ProductItem-DetailsLink.card-link");
//     await testItemCardLink.waitForExist({timeoutMsg: "Нет ссылки"});
//   });

//   it("Проверка элементов карточки на странице карточки", async function ({browser}) {
//     await browser.setWindowSize(1366, 768);
//     await browser.url("http://localhost:3000/hw/store/catalog/0");

//     const testItemCardBody = await browser.$(".ProductDetails.row");
//     await testItemCardBody.waitForExist({timeoutMsg: "Нет карточки"});

//     const testItemCardImage = await testItemCardBody.$(".Image");
//     await testItemCardImage.waitForExist({timeoutMsg: "Нет картинки"});

//     const testItemCardTitle = await testItemCardBody.$(".ProductDetails-Name");
//     await testItemCardTitle.waitForExist({timeoutMsg: "Нет заголовка"});

//     const testItemCardPrice = await testItemCardBody.$(".ProductDetails-Price");
//     await testItemCardPrice.waitForExist({timeoutMsg: "Нет цены"});

//     const testItemCardDesc = await testItemCardBody.$(".ProductDetails-Description");
//     await testItemCardDesc.waitForExist({timeoutMsg: "Нет описания"});

//     const testItemCardButton = await testItemCardBody.$(".ProductDetails-AddToCart");
//     await testItemCardButton.waitForExist({timeoutMsg: "Нет кнопки добавления"});

//     const testItemCardColor = await testItemCardBody.$(".ProductDetails-Color");
//     await testItemCardColor.waitForExist({timeoutMsg: "Нет цвета"});

//     const testItemCardMaterial = await testItemCardBody.$(".ProductDetails-Material");
//     await testItemCardMaterial.waitForExist({timeoutMsg: "Нет материала"});
//   });

//   it("Проверка сообщения о добавлении товара", async function ({browser}) {
//     await browser.setWindowSize(1366, 768);
//     await browser.url("http://localhost:3000/hw/store/cart");

//     const navBarActive = await browser.$(".navbar-nav > .nav-link.active");
//     const navBarActiveText = await navBarActive.getText();
//     if (navBarActiveText.includes("(")) {
//       const cartClearButton = await browser.$(".Cart-Clear");
//       await cartClearButton.waitForExist();
//       await cartClearButton.click();
//     }

//     await browser.url("http://localhost:3000/hw/store/catalog");

//     const testItemCard = await browser.$$(".ProductItem.card.w-100.mb-4")[0];
//     await testItemCard.waitForExist({timeoutMsg: "Нет карточки товара"});

//     const testItemCardLinkEl = await testItemCard.$(".ProductItem-DetailsLink.card-link");
//     await testItemCardLinkEl.waitForExist({timeoutMsg: "У карточки отсутствует ссылки"});

//     await browser.url("http://localhost:3000/hw/store/catalog/0");

//     const testItemCardButton = await browser.$(".ProductDetails-AddToCart");
//     await testItemCardButton.waitForExist({timeoutMsg: "У карточки отсутствует кнопка добавления в корзину"});
//     await testItemCardButton.click();

//     const testItemCardDetailsBadge = await browser.$(".CartBadge");
//     await testItemCardDetailsBadge.waitForExist({timeoutMsg: "Сообщение, после добавления товара в корзину, не отображается (Подробная карточка товара)"});

//     await browser.url("http://localhost:3000/hw/store/catalog");

//     const testItemCardBadge = await browser.$(".CartBadge");
//     await testItemCardBadge.waitForExist({timeoutMsg: "Сообщение, после добавления товара в корзину, не отображается (Мини-карточка товара)"});
//   });

//   it('Содержимое страницы должно сохраняться при перезагрузке', async function ({browser}) {
//     await browser.setWindowSize(1366, 768);

//     await browser.url("http://localhost:3000/hw/store/cart");

//     const navBarActive = await browser.$(".navbar-nav > .nav-link.active");
//     await navBarActive.waitForExist()
    
//     const navBarActiveText = await navBarActive.getText();
//     if (navBarActiveText.includes("(")) {
//       const cartClearButton = await browser.$(".Cart-Clear");
//       await cartClearButton.waitForExist();
//       await cartClearButton.click();
//     }

//     await browser.url('http://localhost:3000/hw/store/catalog');

//     const catalogItemsMock = await browser.mock("http://localhost:3000/hw/store/api/products");
//     await catalogItemsMock.respond('[{"id":0,"name":"kogt1","price":10}, {"id":1,"name":"kogt2","price":20}]');

//     const catalogItemMock = await browser.mock("http://localhost:3000/hw/store/api/products/0");
//     await catalogItemMock.respond('{"id":0,"name":"kogt1","description":"kogt1Desctiption","price":10,"color":"kogt1Color","material":"kogt1Material"}');

//     await browser.url("http://localhost:3000/hw/store/catalog/0");

//     const testItemCardBody = await browser.$(".ProductDetails.row");
//     await testItemCardBody.waitForExist({timeoutMsg: "Нет карточки"});

//     const testItemCardTitle = await testItemCardBody.$(".ProductDetails-Name");
//     await testItemCardTitle.waitForExist({timeoutMsg: "Нет заголовка"});

//     const testItemCardPrice = await testItemCardBody.$(".ProductDetails-Price");
//     await testItemCardPrice.waitForExist({timeoutMsg: "Нет цены"});

//     const ItemAddCart = await browser.$(".ProductDetails-AddToCart");
//     await ItemAddCart.waitForExist();
//     await ItemAddCart.click();

//     await browser.url("http://localhost:3000/hw/store/cart");

//     const cartTable = await browser.$(".Cart-Table.table");
//     await cartTable.waitForExist();

//     const cartTableItem = await cartTable.$$(".Cart-Name")[0]
//     const textBefore = await cartTableItem.getText()

//     await browser.refresh()

//     const cartTableAfter = await browser.$(".Cart-Table.table");
//     await cartTableAfter.waitForExist();

//     const cartTableItemAfter = await cartTableAfter.$$(".Cart-Name")[0]
//     const textAfter = await cartTableItemAfter.getText()

//     expect(textBefore).toEqual(textAfter)

//   })



//   it("При повторном добавлении товара в корзину, количество в корзине увеличивается", async function ({browser}) {
//     await browser.setWindowSize(1366, 768);
//     await browser.url("http://localhost:3000/hw/store/cart");

//     const navBarActive = await browser.$(".navbar-nav > .nav-link.active");
//     await navBarActive.waitForExist();
//     const navBarActiveText = await navBarActive.getText();
//     if (navBarActiveText.includes("(")) {
//       const cartClearButton = await browser.$(".Cart-Clear");
//       await cartClearButton.waitForExist();
//       await cartClearButton.click();
//     }

//     await browser.url("http://localhost:3000/hw/store/catalog/0");

//     const testItemAddCart = await browser.$(".ProductDetails-AddToCart");
//     await testItemAddCart.waitForExist();
//     await testItemAddCart.click();

//     await browser.url("http://localhost:3000/hw/store/cart");

//     const testCartCountPrevEl = await browser.$$(".Cart-Count")[0];
//     await testCartCountPrevEl.waitForExist();
//     const testCartCountPrev = Number(await testCartCountPrevEl.getText());

//     await browser.url("http://localhost:3000/hw/store/catalog/0");

//     await testItemAddCart.waitForExist();
//     await testItemAddCart.click();

//     await browser.url("http://localhost:3000/hw/store/cart");

//     const testCartCountCurrentEl = await browser.$$(".Cart-Count")[0];
//     await testCartCountCurrentEl.waitForExist();
//     const testCartCountCurrent = Number(await testCartCountCurrentEl.getText());

//     expect(testCartCountCurrent).toBeGreaterThan(testCartCountPrev)
//   });




// });