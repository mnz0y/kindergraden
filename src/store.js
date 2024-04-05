import { configureStore, createSlice } from '@reduxjs/toolkit'
import newData from './newData';
import seoulData from './seoulData'

//문단1-new arrivals
const clothes = createSlice({
    name : 'clothes',
    initialState : newData,
    reducers : {
      jacketFilter(state){
        state.filter(()=>
           state.category === 'JACKET'
        )
      }
    }
})
export let { jacketFilter} = clothes.actions;
//문단5-seoul
const seoul = createSlice({
  name : 'seoul',
  initialState : seoulData
})
//문단6-store
const store = createSlice({
  name : 'store',
  initialState : [
    {imgUrl : '/img/store1.png', name : '서울 홍대 와우산', address : '서울특별시 마포구 와우산로17길 19-12', time:'월요일 - 일요일 / 오후 12시 - 오후 9시', lastOrder : '오후 8시 30분(카페)', tel : '02-337-9884'},
    {imgUrl : '/img/store2.png', name : '서울 종로 삼청', address : '서울 종로구 삼청로 134', time:'월요일 - 금요일 / 오전 11시 - 오후 9시', lastOrder : '오후 8시 30분(카페)', tel : '02-722-7767'},
    {imgUrl : '/img/store3.png', name : '서울 성동 성수', address : '서울 성동구 연무장3길 21 1층 102호', time:'월요일 - 일요일 / 오후 12시 - 오후 9시', lastOrder : '오후 8시(주방), 오후 8시 30분(카페)', tel : '02-468-0889'}
  ]
})
export default configureStore({
  reducer: {
    clothes : clothes.reducer,
    seoul : seoul.reducer,
    store : store.reducer,
  }
})