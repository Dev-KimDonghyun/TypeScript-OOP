// src
// runner.ts

import { Item } from "./models/Item";

export const runner = () => {
    console.log(`============== Item Management System RUN ==============`);

    // 물건 생성 - 객체 생성
    const item01: Item = new Item(`Apple MacBook Air`, 1590000, 1);
    const item02: Item = new Item(`BridgeStone All-Weather Tire`, 225000, 4);

    // 메서드 호출
    console.log(`현재 카트 물품: ${item01.getName()}, ${item02.getName()}`);

    const formattedNumber01: string = item01.getPrice().toLocaleString("ko-KR");
    const formattedNumber02: string = item02.getPrice().toLocaleString("ko-KR");

    console.log(`각각의 가격: ₩${formattedNumber01}, ₩${formattedNumber02}`);
    console.log(
        `각각의 수량: ${item01.getQuantity()}개, ${item02.getQuantity()}개`
    );

    // 메서드를 통한 수량 변경
    const item01Quantity = 4;
    const item02Quantity = 2;

    item01.setQuantity(item01Quantity);
    console.log(`Apple MacBook Air의 수량을 ${item01Quantity}개로 변경`);
    item02.setQuantity(item02Quantity);
    console.log(
        `BridgeStone All-Weather Tire의 수량을 ${item02Quantity}개로 변경`
    );

    // 수량 변경 후 합계 출력
    const item01Total: number = item01.calculateTotal();
    const item02Total: number = item02.calculateTotal();

    const total: string = (item01Total + item02Total).toLocaleString("ko-KR");

    console.log(
        `Apple MacBook Air의 총액: ${item01Total.toLocaleString("ko-KR")}`
    );
    console.log(
        `BridgeStone All-Weather Tire의 총액: ${item02Total.toLocaleString(
            "ko-KR"
        )}`
    );
    console.log(`모든 상품의 총액: ${total}`);

    console.log(`============== Item Management System END ==============`);
};
