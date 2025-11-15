// src
// models
// Item.ts

/**
 * @class
 * 상품의 정보를 관리하는 클래스
 */

export class Item {
    // 속성은 프라이빗으로 외부의 접근 차단
    private _name: string;
    private _price: number;
    private _quantity: number;

    /**
     * @param name - 상품 이름
     * @param price - 상품 가격
     * @param quantity - 상품 수량
     */

    // constructor <= 객체 생성 시 초기화 작업 담당

    constructor(name: string, price: number, quantity: number) {
        this._name = name;
        this._price = price;
        this._quantity = quantity;
        console.log(
            `✅ 물품 [${this._name} (₩${this._price})]이(가) [${this._quantity}개] 추가되었습니다.`
        );
    }

    /**
     * 데이터 조회 메서드
     */

    // 외부에 노출할 필요가 있기 때문에 퍼블릭으로 선언

    public getName(): string {
        return this._name;
    }

    public getPrice(): number {
        return this._price;
    }

    public getQuantity(): number {
        return this._quantity;
    }

    /**
     * 기능 수행 메서드
     */

    /**
     * 물품 수량 변경 및 데이터 유효성 검사
     * @param newQuantity
     */

    public setQuantity(newQuantity: number): void {
        if (newQuantity <= 0) {
            console.log(`❌ 물품 수량은 1개보다 작을 수 없습니다.`);
            return;
        }
        this._quantity = newQuantity;
        console.log(
            `${this._name}수량이 ${this._quantity}개로 변경되었습니다.`
        );
    }

    public calculateTotal(): number {
        return this._price * this._quantity;
    }
}
