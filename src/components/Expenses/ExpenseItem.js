import React, { useState } from 'react';
// css 로딩
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = ({ title, price, date }) => {

  // useState는 배열을 리턴
  // 첫번째 요소는 관리할 상태값
  // 두번째 요소는 상태값을 변경하는 setter함수
  let [itemTitle, setItemTite] = useState(title);
  // console.log(stateItem);

  // 1자리 숫자를 2자리수로 변환하는 함수
  const make2digit = (text) => {
    return text.toString().padStart(2, '0');
  };


  // 날짜 포맷팅 변환 함수 정의
  const makeFormattedDate = () => {

    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    return `${year}년 ${make2digit(month)}월 ${make2digit(day)}일`;
  };

  // 숫자를 원화표기법으로 바꾸기
  const formattedPrice = new Intl.NumberFormat('ko-KR').format(price);

  // 버튼 이벤트
  const clickHandler = e => {
    setItemTite('메롱');
  };


  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{itemTitle}</h2>
        <div className="expense-item__price">{formattedPrice}원</div>
      </div>
      <button id='btn' onClick={clickHandler}>수정</button>
      <button id='btn' onClick={e => { console.log('삭제'); }}>삭제</button>
    </Card>
  );
};

export default ExpenseItem;
