

// describe("Проверка функциональности корзины", async function () {
//     it("Проверка формы для заполения", async function ({browser}) {
//         await browser.setWindowSize(1366, 768);
    
//         await browser.url("http://localhost:3000/hw/store/cart");
    
//         const navBarActive = await browser.$(".navbar-nav > .nav-link.active");
//         await navBarActive.waitForExist()
        
//         const navBarActiveText = await navBarActive.getText();
//         if (navBarActiveText.includes("(")) {
//           const cartClearButton = await browser.$(".Cart-Clear");
//           await cartClearButton.waitForExist();
//           await cartClearButton.click();
//         }
    
//         const catalogItemsMock = await browser.mock("http://localhost:3000/hw/store/api/products");
//         await catalogItemsMock.respond('[{"id":0,"name":"kogt1","price":10}, {"id":1,"name":"kogt2","price":20}]');
    
//         const catalogItemMock = await browser.mock("http://localhost:3000/hw/store/api/products/0");
//         await catalogItemMock.respond('{"id":0,"name":"kogt1","description":"kogt1Desctiption","price":10,"color":"kogt1Color","material":"kogt1Material"}');
    
//         await browser.url("http://localhost:3000/hw/store/catalog/0");
//         const testItemAddCart = await browser.$(".ProductDetails-AddToCart");
//         await testItemAddCart.waitForExist();
//         await testItemAddCart.click();
    
//         await browser.url("http://localhost:3000/hw/store/cart");
    
//         const nameInput = await browser.$(".Form-Field_type_name");
//         await nameInput.waitForExist();
//         await nameInput.setValue("Test");
    
//         const phoneInput = await browser.$(".Form-Field_type_phone");
//         await phoneInput.waitForExist();
//         await phoneInput.setValue("+37529123456789");
    
//         const addressInput = await browser.$(".Form-Field_type_address");
//         await addressInput.waitForExist();
//         await addressInput.setValue("Test address");
    
//         const formButton = await browser.$(".Form-Submit");
//         await formButton.waitForExist();
//         await formButton.click();
    
//         const success = await browser.$(".alert-success");
//         expect(success).toBeDisabled();
    
//         const cartNumber = await browser.$(".Cart-Number");
//         await cartNumber.waitForExist();
//         expect(await cartNumber.getText()).toEqual("1");
//       });

//   it("Кнопка очистки корзины", async function ({ browser }) {
//     await browser.setWindowSize(1366, 768);

//     const catalogItemsMock = await browser.mock("http://localhost:3000/hw/store/api/products");
//     await catalogItemsMock.respond('[{"id":0,"name":"kogt1","price":10}, {"id":1,"name":"kogt2","price":20}]');

//     const catalogItemMock = await browser.mock("http://localhost:3000/hw/store/api/products/0");
//     await catalogItemMock.respond('{"id":0,"name":"kogt1","description":"kogt1Desctiption","price":10,"color":"kogt1Color","material":"kogt1Material"}');

//     await browser.url("http://localhost:3000/hw/store/catalog");
//     await browser.url("http://localhost:3000/hw/store/catalog/0");

//     const testItemAddCart = await browser.$(".ProductDetails-AddToCart");
//     await testItemAddCart.waitForExist();
//     await testItemAddCart.click();

//     await browser.url("http://localhost:3000/hw/store/cart");

//     const cartTable = await browser.$(".Cart-Table");
//     await cartTable.waitForExist();
//     const cartClearButton = await browser.$(".Cart-Clear");
//     await cartClearButton.waitForExist();
//     await cartClearButton.click();
//     expect(await cartTable.isExisting()).toBe(false);

//   });

//   it("Проверка количества товаров в шапке рядом с ссылкой на корзину", async function ({browser}) {
//     await browser.setWindowSize(1366, 768);
//     await browser.url("http://localhost:3000/hw/store/cart");

//     //получение ссылки навигационной панели (cart)
//     const navBarActive = await browser.$(".navbar-nav > .nav-link.active");
//     await navBarActive.waitForExist();

//     //проверка и очистка.? содержимого корзины
//     const navBarActiveText = await navBarActive.getText();
//     if (navBarActiveText.includes("(")) {
//       const cartClearButton = await browser.$(".Cart-Clear");
//       await cartClearButton.waitForExist();
//       await cartClearButton.click();
//     }

//     const catalogItemsMock = await browser.mock("http://localhost:3000/hw/store/api/products");
//     await catalogItemsMock.respond('[{"id":0,"name":"kogt1","price":10}, {"id":1,"name":"kogt2","price":20}]');

//     const catalogItemMock1 = await browser.mock("http://localhost:3000/hw/store/api/products/0");
//     await catalogItemMock1.respond('{"id":0,"name":"kogt1","description":"kogt1Desctiption","price":10,"color":"kogt1Color","material":"kogt1Material"}');

//     const catalogItemMock2 = await browser.mock("http://localhost:3000/hw/store/api/products/1");
//     await catalogItemMock2.respond('{"id":1,"name":"kogt2","description":"kogt2Desctiption","price":20,"color":"kogt2Color","material":"kogt2Material"}');

//     await browser.url("http://localhost:3000/hw/store/catalog/0");
//     const ItemAddCart = await browser.$(".ProductDetails-AddToCart");
//     await ItemAddCart.waitForExist();
//     await ItemAddCart.click();
//     await ItemAddCart.click();

//     await browser.url("http://localhost:3000/hw/store/cart");
//     const navActiveTab = await browser.$(".nav-link.active");
//     await navActiveTab.waitForExist();

//     let navActiveTabTextFirst = await navActiveTab.getText()
//     navActiveTabTextFirst = navActiveTabTextFirst.slice(-2, -1)

//     expect(navActiveTabTextFirst).toBe("1");

//     await browser.url("http://localhost:3000/hw/store/catalog/1");
//     await ItemAddCart.waitForExist();
//     await ItemAddCart.click();
//     await ItemAddCart.click();

//     await browser.url("http://localhost:3000/hw/store/cart");
//     await navActiveTab.waitForExist();

//     let navActiveTabTextSecond = await navActiveTab.getText();
//     navActiveTabTextSecond = navActiveTabTextSecond.slice(-2, -1)

//     expect(navActiveTabTextSecond).toBe("2");
   
//   });

//   it("Проверка таблицы в корзине", async function ({browser}) {
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

//     const catalogItemsMock = await browser.mock("http://localhost:3000/hw/store/api/products");
//     await catalogItemsMock.respond('[{"id":0,"name":"kogt1","price":10}, {"id":1,"name":"kogt2","price":20}]');

//     const catalogItemMock1 = await browser.mock("http://localhost:3000/hw/store/api/products/0");
//     await catalogItemMock1.respond('{"id":0,"name":"kogt1","description":"kogt1Desctiption","price":10,"color":"kogt1Color","material":"kogt1Material"}');

//     const catalogItemMock2 = await browser.mock("http://localhost:3000/hw/store/api/products/1");
//     await catalogItemMock2.respond('{"id":1,"name":"kogt2","description":"kogt2Desctiption","price":20,"color":"kogt2Color","material":"kogt2Material"}');
    


//     let cartElements = [];

//     await browser.url("http://localhost:3000/hw/store/catalog/0");
//     const testItemAddCart = await browser.$(".ProductDetails-AddToCart");
//     cartElements.push(await browser.$(".ProductDetails-Name").getText());
//     await testItemAddCart.waitForExist();
//     await testItemAddCart.click();

//     await browser.url("http://localhost:3000/hw/store/catalog/1");
//     cartElements.push(await browser.$(".ProductDetails-Name").getText());
//     await testItemAddCart.waitForExist();
//     await testItemAddCart.click();

//     await browser.url("http://localhost:3000/hw/store/cart");
//     const cartTable = await browser.$(".Cart-Table.table");
//     await cartTable.waitForExist();

//     const cartTableItems = await cartTable.$$(".Cart-Name");
//     for (let i = 0; i < cartTableItems.length; i++) {
//       const text = await cartTableItems[i].getText()
//       await expect(text).toBe(cartElements[i])
//     }
//   });

//   it("Проверка полей товаров в корзине", async function ({ browser }) {
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

//     const catalogItemsMock = await browser.mock("http://localhost:3000/hw/store/api/products");
//     await catalogItemsMock.respond('[{"id":0,"name":"kogt1","price":10}, {"id":1,"name":"kogt2","price":20}]');

//     const catalogItemMock = await browser.mock("http://localhost:3000/hw/store/api/products/0");
//     await catalogItemMock.respond('{"id":0,"name":"kogt1","description":"kogt1Desctiption","price":10,"color":"kogt1Color","material":"kogt1Material"}');

//     await browser.url("http://localhost:3000/hw/store/catalog/0");
//     const testItemAddCart = await browser.$(".ProductDetails-AddToCart");
//     await testItemAddCart.waitForExist();
//     await testItemAddCart.click();

//     await browser.url("http://localhost:3000/hw/store/cart");

//     const cartTable = await browser.$(".Cart-Table.table");
//     await cartTable.waitForExist({timeoutMsg: "Нет таблицы с товарами"});

//     const cartTableItem = await cartTable.$$("tbody > tr")[0];
//     const cartTableItemName = await cartTableItem.$(".Cart-Name");
//     await cartTableItemName.waitForExist({timeoutMsg: "Нет названия товара"});

//     const cartTableItemPrice = await cartTableItem.$(".Cart-Price");
//     await cartTableItemPrice.waitForExist({timeoutMsg: "Нет цены товара"});

//     const cartTableItemAmount = await cartTableItem.$(".Cart-Count");
//     await cartTableItemAmount.waitForExist({timeoutMsg: "Нет количества товара"});

//     const cartTableItemTotal = await cartTableItem.$(".Cart-Total");
//     await cartTableItemTotal.waitForExist({timeoutMsg: "Нет total стоимости товара"});

//     const cartTableOrderPrice = await cartTable.$(".Cart-OrderPrice");
//     await cartTableOrderPrice.waitForExist({timeoutMsg: "Нет total стоимости"});
//   });

//   it("Проверка ссылки на каталог если нет товаров в корзине", async function ({browser}) {
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

//     const colCatalogLink = await browser.$(".col > a");
//     await colCatalogLink.waitForExist({timeoutMsg: "Нет ссылки на каталог"});

//     const colCatalogLinkDisplayed = await colCatalogLink.isDisplayed();
//     expect(colCatalogLinkDisplayed).toBe(true);

//     const colCatalogLinkHref = await colCatalogLink.getAttribute("href");
//     expect(colCatalogLinkHref).toBe("/hw/store/catalog");

//   });


  


//   it("Размер кнопки на странице товара не изменился", async function ({browser}) {
//     await browser.setWindowSize(1366, 768);
//     await browser.url("http://localhost:3000/hw/store/catalog/0");
    
//         const addToCart = await browser.$(".ProductDetails-AddToCart");
//         const addToCartClasses = await addToCart.getAttribute("class");
//     const appMenuCollapse = addToCartClasses.split(" ").includes("btn-sm");
//     expect(appMenuCollapse).toBe(false);
    
//   });
  
// });
