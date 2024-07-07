describe("Тесты только багов", async function () {
    //bug_id = 1
    it("Проверка имени товара в каталоге", async function ({ browser }) {
        await browser.url("http://localhost:3000/hw/store/catalog");
        const productName = await browser.$(".ProductItem-Name");
        await productName.waitForExist();
    
        expect(await productName.getText()).not.toBe("")
    });

   

    //bug_id = 4
    it("Закрытие гамбургер-меню", async function ({browser}) {
      await browser.setWindowSize(500, 1080);
      await browser.url("http://localhost:3000/hw/store/");

      const appToggler = await browser.$(".Application-Toggler");
      await appToggler.waitForExist();
      await appToggler.click();

      const link = await browser.$$(".navbar-nav > .nav-link")[0];
      await link.waitForExist();
      await link.click();

      const appMenu3= await browser.$(".Application-Menu");
      await appMenu3.waitForExist();
      const appMenuClasses3 = await appMenu3.getAttribute("class");
      
      const appMenuCollapse = appMenuClasses3.split(" ").includes("collapse");
      expect(appMenuCollapse).toBe(true);
      
    })

    //bug_id = 9
    it("Размер кнопки на странице товара не изменился", async function ({ browser }) {
        const mockProduct ='{"id":0,"name":"kogt1","description":"kogt1Desctiption","price":10,"color":"kogt1Color","material":"kogt1Material"}'
        const productMock = await browser.mock("http://localhost:3000/hw/store/api/products/0");
        await productMock.respond(mockProduct);
    
        await browser.url("http://localhost:3000/hw/store/catalog/0");
        
        const applicationElement = await browser.$(".Application");
        
        await applicationElement.assertView("plain", {
            ignoreElements: [
                ".ProductDetails-Name",
                ".ProductDetails-Description",
                ".ProductDetails-Color",
                ".ProductDetails-Price",
                ".ProductDetails-Material",
                ".navbar",
                ".CartBadge",
            ],
            compositeImage: true,
        });
    });

     //bug_id = 3
     it("Проверка на отображение товара", async function ({ browser }) {
        await browser.url("http://localhost:3000/hw/store/catalog/1");
    
        const product = await browser.$(".Product");
        await product.waitForExist();
    
        expect(await product.getText()).not.toEqual("LOADING");
    });


     //bug_id = 2,5,6,7,8,10
     it("Проверка формы для заполения", async function ({browser}) {
        await browser.setWindowSize(1366, 768);
    
        await browser.url("http://localhost:3000/hw/store/cart");
    
        const navBarActive = await browser.$(".navbar-nav > .nav-link.active");
        await navBarActive.waitForExist()
        
        const navBarActiveText = await navBarActive.getText();
        if (navBarActiveText.includes("(")) {
          const cartClearButton = await browser.$(".Cart-Clear");
          await cartClearButton.waitForExist();
          await cartClearButton.click();
        }
    
        const catalogItemsMock = await browser.mock("http://localhost:3000/hw/store/api/products");
        await catalogItemsMock.respond('[{"id":0,"name":"kogt1","price":10}, {"id":1,"name":"kogt2","price":20}]');
    
        const catalogItemMock = await browser.mock("http://localhost:3000/hw/store/api/products/0");
        await catalogItemMock.respond('{"id":0,"name":"kogt1","description":"kogt1Desctiption","price":10,"color":"kogt1Color","material":"kogt1Material"}');
    
        await browser.url("http://localhost:3000/hw/store/catalog/0");
        const testItemAddCart = await browser.$(".ProductDetails-AddToCart");
        await testItemAddCart.waitForExist();
        await testItemAddCart.click();
    
        await browser.url("http://localhost:3000/hw/store/cart");
    
        const nameInput = await browser.$(".Form-Field_type_name");
        await nameInput.waitForExist();
        await nameInput.setValue("Test");
    
        const phoneInput = await browser.$(".Form-Field_type_phone");
        await phoneInput.waitForExist();
        await phoneInput.setValue("+37529123456789");
    
        const addressInput = await browser.$(".Form-Field_type_address");
        await addressInput.waitForExist();
        await addressInput.setValue("Test address");
    
        const formButton = await browser.$(".Form-Submit");
        await formButton.waitForExist();
        await formButton.click();
    
        const success = await browser.$(".alert-success");
        expect(success).toBeDisabled();

        const alert_danger = await browser.$(".Cart-SuccessMessage");
        const alert_dangerClasses = await alert_danger.getAttribute("class");
        const isAlert = alert_dangerClasses.split(" ").includes("alert-danger");
        expect(isAlert).toBe(false);
       
    
        const cartNumber = await browser.$(".Cart-Number");
        await cartNumber.waitForExist();
        expect(await cartNumber.getText()).toEqual("1");
    });

   
    
    
})