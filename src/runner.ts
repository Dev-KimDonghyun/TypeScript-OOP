// src
// runner.ts

import { Item } from "./models/Item";

export const runner = () => {
    console.log(`============== Item Management System RUN ==============`);

    // 물건 생성 - 객체 생성
    const item01 = new Item(`Apple MacBook Air`, 1590000, 1);
    const item02 = new Item(`BridgeStone All-Weather Tire`, 225000, 4);

    // 메서드 호출
    console.log(`현재 카트 물품: ${item01.getName()}, ${item02.getName()}`);
    console.log(`각각의 가격: ₩${item01.getPrice()}, ₩${item02.getPrice()}`);
    console.log(
        `각각의 수량: ${item01.getQuantity()}개, ${item02.getQuantity()}개`
    );

    // 메서드를 통한 수량 변경
    item01.setQuantity(4);
    console.log(`Apple MacBook Air의 수량을 4개로 변경`);
    item02.setQuantity(2);
    console.log(`BridgeStone All-Weather Tire의 수량을 2개로 변경`);

    // 수량 변경 후 합계 출력
    const item01Total = item01.calculateTotal();
    const item02Total = item02.calculateTotal();
    const total = item01Total + item02Total;

    console.log(`Apple MacBook Air의 총액: ${item01Total}`);
    console.log(`BridgeStone All-Weather Tire의 총액: ${item02Total}`);
    console.log(`모든 상품의 총액: ${total}`);

    console.log(`============== Item Management System END ==============`);
};
