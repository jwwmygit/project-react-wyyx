import {combineReducers} from 'redux'
import {
        RECEIVE_HEADCATES,
        RECEIVE_FOCUSLIST,
        RECEIVE_TAGLIST,
        RECEIVE_NEWITEMLIST,
        RECEIVE_POPULARITEMLIST,
        RECEIVE_TOPICLIST,
        RECEIVE_CATELIST,
        RECEIVE_COLUMN,
        RECEIVE_RECOMMEND,
        RECEIVE_TENFIFTEEN,
        RECEIVE_YXLOOK,
        RECEIVE_REQFINDMORE,
        RECEIVE_CATEGORYDATA

    }from './action-types'
    //home头部数据
    const initHeadcates=[];
    const initFocusList=[];
    const initTagList=[];
    const initnewItemList=[];
    const initpopularItemList=[];
    const initflashSaleIndexVO={};
    const inittopicList=[];
    const initcateList=[];
    const initColumn=[];
    const initRecommend={};
    const initTenfifteen=[];
    const initYxLook={};
    const initfindMore=[];
    const initCategoryData=[];
    function headcates(state=initHeadcates,action) {
        switch (action.type){
            case RECEIVE_HEADCATES:
                return action.data
            default:
                return state
        }
    }
    //home轮播图
    function focusList(state=initFocusList,action) {
        switch (action.type){
            case RECEIVE_FOCUSLIST:
                return action.data
            default:
                return state
        }
    }
   //home品牌制造商
  function tagList(state=initTagList,action) {
    switch (action.type){
        case RECEIVE_TAGLIST:
            return action.data
        default:
            return state
    }
  }
//新品首发
function newItemList(state=initnewItemList,action) {
    switch (action.type){
        case RECEIVE_NEWITEMLIST:
            return action.data
        default:
            return state
    }
}
//人气推荐
function popularItemList(state=initpopularItemList,action) {
    switch (action.type){
        case RECEIVE_POPULARITEMLIST:
            // console.log(action.data)
            return action.data
        default:
            return state
    }
}
//专题精选
function topicList(state=inittopicList,action) {
    switch (action.type){
        case RECEIVE_TOPICLIST:
            // console.log(action.data)
            return action.data
        default:
            return state
    }
}

//居家
function cateList(state=initcateList,action) {
    switch (action.type){
        case RECEIVE_CATELIST:
            // console.log(action.data)
            return action.data
        default:
            return state
    }
}

//识物
//滑动列表
function column(state=initColumn,action) {
    switch (action.type){
        case RECEIVE_COLUMN:
            // console.log(action.data)
            return action.data
        default:
            return state
    }
}
//为你推荐
function recommend(state=initRecommend,action) {
    switch (action.type){
        case RECEIVE_RECOMMEND:
            console.log(action.data)
            return action.data
        default:
            return state
    }
}
//十点一刻
function tenfifteen(state=initTenfifteen,action) {
    switch (action.type){
        case RECEIVE_TENFIFTEEN:
            // console.log(action.data)
            return action.data
        default:
            return state
    }
}

//严选look
function YxLook(state=initYxLook,action) {
    switch (action.type){
        case RECEIVE_YXLOOK:
            // console.log(action.data)
            return action.data
        default:
            return state
    }
}
//更多精彩
function findMore(state=initfindMore,action) {
    switch (action.type){
        case RECEIVE_REQFINDMORE:
            // console.log(action.data)
            return action.data
        default:
            return state
    }
}

//分类
function CategoryData(state=initCategoryData,action) {
    switch (action.type){
        case RECEIVE_CATEGORYDATA:
            // console.log(action.data)
            return action.data
        default:
            return state
    }
}
//向外暴露一个整合后产生的reducer
    export default combineReducers({
        headcates,
        focusList,
        tagList,
        newItemList,
        popularItemList,
        topicList,
        cateList,
        column,
        recommend,
        tenfifteen,
        YxLook,
        findMore,
        CategoryData


    })
    //整合管理后reducer管理的状态{user:{}}