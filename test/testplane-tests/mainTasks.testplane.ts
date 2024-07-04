

// describe("Тесты общих требований", async function () {
//  //при выборе элемента из меню "гамбургера", меню должно закрываться
//     it("Закрытие гамбургер-меню", async function ({browser}) {
//       await browser.setWindowSize(500, 1080);
//     await browser.url("http://localhost:3000/hw/store/");

//     const appMenu = await browser.$(".Application-Menu");
//     await appMenu.waitForExist();

//     const appToggler = await browser.$(".Application-Toggler");
//     await appToggler.waitForExist();

//     await appToggler.click();

//     const link = await appMenu.$$(".nav-link")[0];
//     await link.waitForExist();

//     await link.click();
//     const appMenuClasses = await appMenu.getAttribute("class");
//     const appMenuCollapse = appMenuClasses.split(" ").includes("collapse");
//     expect(appMenuCollapse).toBe(true);
    

//     })

//     //на ширине меньше 576px навигационное меню должно скрываться за "гамбургер"
//     it("Гамбургер-меню появляется при ширине меньше 576px", async function ({browser}) {
//       await browser.setWindowSize(500, 1000);
//       await browser.url("http://localhost:3000/hw/store/");

//       const appToggler = await browser.$(".Application-Toggler");
//       await appToggler.waitForExist();
//       const appTogglerDisplay = await appToggler.isDisplayed();

//       expect(appTogglerDisplay).toBe(true);
      
//     });

//     //вёрстка должна адаптироваться под ширину экрана
//     it("Ширина элементов меняется меньше 576px", async function ({ browser }) {
//       await browser.setWindowSize(1366, 768);
//       await browser.url("http://localhost:3000/hw/store/");

//       const appContent = await browser.$(".container.pt-4");
//       await appContent.waitForExist();
//       const prevWidth = await appContent.getSize("width");

//       await browser.setWindowSize(500, 1000);
//       const currentWidth = await appContent.getSize("width");
//       expect(currentWidth).toBeLessThan(prevWidth);
      
//     });


//     it("Нет ссылок при ширине меньше 576px", async function ({browser,}) {
//       await browser.setWindowSize(500, 1000);
//       await browser.url("http://localhost:3000/hw/store/");

//       const appMenu = await browser.$(".Application-Menu");
//       await appMenu.waitForExist();
//       const appMenuDisplay = await appMenu.isDisplayed();
//       expect(appMenuDisplay).toBe(false);
//     });

    


//     it("Ссылки в шапке отображаются", async function ({ browser }) {
//       await browser.setWindowSize(1980, 1080);
//       await browser.url("http://localhost:3000/hw/store/");

//       const linkBox = await browser.$(".navbar-nav");
//       await linkBox.waitForExist();

//       const links = await linkBox.$$(".nav-link");

//       expect(links.length).toBeGreaterThan(0)

//       const catalogLink = links[0]
//       const catalogLinkDisplay = await catalogLink.isDisplayed();
//       expect(catalogLinkDisplay).toBe(true);
//     });

//     it("Нажатие на ссылку в шапке направляет на главную страницу", async function ({ browser }) {
      
//         await browser.url("http://localhost:3000/hw/store/cart");
//         const brandTitle = await browser.$(".Application-Brand");
//         await brandTitle.waitForExist();

//         await brandTitle.click();

//       expect(await browser.getUrl()).toBe("http://localhost:3000/hw/store")
//     })
// });