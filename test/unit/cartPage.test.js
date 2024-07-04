import React from "react";

import { Application } from "../../src/client/Application";
import { ExampleApi, CartApi } from "../../src/client/api";
import { initStore } from "../../src/client/store";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Cart } from "../../src/client/pages/Cart";
import { createStore } from "redux";

const basename = "/";

//Выполнение ТЗ из раздела функциональных требований - Корзина

describe("Тестирование функциональности корзины", () => {
    //в шапке рядом со ссылкой на корзину должно отображаться количество не повторяющихся товаров в ней
  it("Проверка количества товаров", () => {
    const initState = {
      cart: [
        { id: 1, name: "kogt1", price: 10, count: 2 },
        { id: 2, name: "kogt2", price: 20, count: 4 },
      ],
      products: [
        { id: 1, name: "kogt1", price: 10 },
        { id: 2, name: "kogt2", price: 20 },
        { id: 3, name: "kogt3", price: 30 },
      ],
    };
    const store = createStore(() => initState);

    render(
      <MemoryRouter initialEntries={["/cart"]}>
        <Provider store={store}>
          <Application />
        </Provider>
      </MemoryRouter>
    );

    
    expect(screen.getByRole("link", { name: /Cart \(2\)/i })).toBeInTheDocument();
  })

  it("Проверка корзины если она пустая",() => {
    const initState = {
        cart: [],
        products: [
          { id: 1, name: "kogt1", price: 10 },
          { id: 2, name: "kogt2", price: 20 },
          { id: 3, name: "kogt3", price: 30 },
        ],
      };
      const store = createStore(() => initState);
  
      render(
        <MemoryRouter initialEntries={["/cart"]}>
          <Provider store={store}>
            <Application />
          </Provider>
        </MemoryRouter>
      );

      expect(screen.getByRole("link", {name: /Cart/i }).textContent).toBe("Cart")
  })

  //в корзине должна отображаться таблица с добавленными в нее товарами
  //для каждого товара должны отображаться название, цена, количество , стоимость, а также должна отображаться общая сумма заказа
  it("Проверка отображения товаров в корзине", () => {
    const initState = {
        cart: [
          { id: 1, name: "kogt1", price: 10, count: 2 },
          { id: 2, name: "kogt2", price: 20, count: 4 },
        ],
        products: [
          { id: 1, name: "kogt1", price: 10 },
          { id: 2, name: "kogt2", price: 20 },
          { id: 3, name: "kogt3", price: 30 },
        ],
      };
    const store = createStore(() => initState);

    const app = (
      <MemoryRouter initialEntries={["/cart"]}>
        <Provider store={store}>
          <Application />
        </Provider>
      </MemoryRouter>
    );

    const {container} = render(app);

    const table = container.getElementsByClassName("table")[0]
    expect(table).toBeInTheDocument();


    expect(screen.getByRole("cell", {name: /kogt1/i,})).toBeInTheDocument();
    expect(container.getElementsByClassName("Cart-Count")[0].textContent).toBe("2");
    expect(screen.queryByText("$10")).toBeInTheDocument();

    expect(screen.getByRole("cell", { name: /kogt2/i })).toBeInTheDocument();
    expect(container.getElementsByClassName("Cart-Count")[1].textContent).toBe("4");
    expect(screen.queryByText("$80")).toBeInTheDocument();

    expect(container.getElementsByClassName("Cart-OrderPrice")[0].textContent).toBe("$100");

    expect(screen.getByTestId("1")).toBeInTheDocument();

  });


  //в корзине должна быть кнопка "очистить корзину", по нажатию на которую все товары должны удаляться
  it(`Проверка кнопки"Clear shopping cart", по нажатию - все товары должны удаляться`, () => {
    const initState = {
      "0": { name: "kogt1", count: 2, price: 20 },
      "1": { name: "kogt2", count: 4, price: 30 },
      "2": { name: "kogt3", count: 6, price: 100 },
    };
    const basename = "/hw/store";

    const api = new ExampleApi(basename);
    const cart = new CartApi();
    cart.setState(initState);
    const store = initStore(api, cart);

    const { getByTestId, getAllByTestId } = render(
      <MemoryRouter initialEntries={["/cart"]}>
        <Provider store={store}>
          <Application />
        </Provider>
      </MemoryRouter>
    );

    const button = screen.getByRole("button", {name: /Clear shopping cart/i,});
    expect(button).toBeInTheDocument();

    expect(screen.queryByText("kogt1")).toBeInTheDocument();
    expect(screen.queryByText("kogt2")).toBeInTheDocument();
    expect(screen.queryByText("kogt3")).toBeInTheDocument();

    fireEvent.click(button);

    expect(screen.queryByText("kogt1")).not.toBeInTheDocument();
    expect(screen.queryByText("kogt2")).not.toBeInTheDocument();
    expect(screen.queryByText("kogt3")).not.toBeInTheDocument();
  });


  //если корзина пустая, должна отображаться ссылка на каталог товаров
  it("Проверка ссылки на каталог товаров если в корзине ничего нет", async () => {
    const initState = {
      cart: {},
    };
    const store = createStore(() => initState);

    render(
      <BrowserRouter basename={basename}>
        <Provider store={store}>
          <Cart />
        </Provider>
      </BrowserRouter>
    );

    expect(screen.queryByRole("link", { name: "catalog" })).toHaveAttribute("href","/catalog");
  });
})