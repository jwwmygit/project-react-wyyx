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



  } from './action-types'
import {
    reqHeadCateList,
    reqFocusList,
    reqTagList,
    reqNewItemList,
    reqPopularItemList,
    reqtTopicList,
    reqTcateList,
    reqColumn,
    reqRecommend,
    reqTenfifteen,
    reqYxLook,
    reqFindMore,
    reqCategoryData

    } from '../api'

//主页
//同步接受都部标签列表
const receivehomeheader = (headcatelist)=>({type:RECEIVE_HEADCATES,data:headcatelist})
//异步获取头部标签列表
export const getHomeHeader = (type)=>{
    return async dispatch => {
        const response=await reqHeadCateList(type)
         // console.log(response)
        if(response.code===0){
            const headcatelist=response.data
            dispatch(receivehomeheader(headcatelist))
        }
    }
}
//同步home轮播图
const receiveFocusList = (focusList)=>({type:RECEIVE_FOCUSLIST,data:focusList})
//异步获取home轮播图
export const getFocusList = ()=>{
    return async dispatch => {
        const response=await reqFocusList()
        // console.log(response)
        if(response.code===0){
            const focusList=response.data
            dispatch(receiveFocusList(focusList))
        }
    }
};
//品牌制造商
//同步
const receiveTagList = (tagList)=>({type:RECEIVE_TAGLIST,data:tagList})
//异步
export const getTagList = ()=>{
    return async dispatch => {
        const response=await reqTagList()
        // console.log(response)
        if(response.code===0){
            const tagList=response.data
            dispatch(receiveTagList(tagList))
        }
    }
}
//新品首发
//同步
const receiveNewItemList = (newItemList)=>({type:RECEIVE_NEWITEMLIST,data:newItemList})
//异步
export const getNewItemList = ()=>{
    return async dispatch => {
        const response=await reqNewItemList()
        // console.log(response)
        if(response.code===0){
            const newItemList=response.data
            dispatch(receiveNewItemList(newItemList))
        }
    }
}
//人气推荐
//同步
const receivePopularItemList = (popularItemList)=>({type:RECEIVE_POPULARITEMLIST,data:popularItemList})
//异步
export const getPopularItemList = ()=>{
    return async dispatch => {
        const response=await reqPopularItemList()
        // console.log(response)
        if(response.code===0){
            const popularItemList=response.data
            dispatch(receivePopularItemList(popularItemList))
        }
    }
}

//专题精选
//同步
const receiveTopicList = (topicList)=>({type:RECEIVE_TOPICLIST,data:topicList})
//异步
export const getTopicList = ()=>{
    return async dispatch => {
        const response=await reqtTopicList()
        // console.log(response)
        if(response.code===0){
            const topicList=response.data
            dispatch(receiveTopicList(topicList))
        }
    }
}
//居家
//同步
const receiveTcateList = (cateList)=>({type:RECEIVE_CATELIST,data:cateList})
//异步
export const getCateList = ()=>{
    return async dispatch => {
        const response=await reqTcateList()
        // console.log(response)
        if(response.code===0){
            const cateList=response.data
            dispatch(receiveTcateList(cateList))
        }
    }
}

//识物
//识物 滑动列表
//同步
const receiveColumn = (column)=>({type:RECEIVE_COLUMN,data:column})
//异步
export const getColumn = ()=>{
    return async dispatch => {
        const response=await reqColumn()
        // console.log(response)
        if(response.code===0){
            const column=response.data
            dispatch(receiveColumn(column))
        }
    }
}
//为你推荐
//同步
const receiveRecommend = (recommend)=>({type:RECEIVE_RECOMMEND,data:recommend})
//异步
export const getRecommend = ()=>{
    return async dispatch => {
        const response=await reqRecommend()
        // console.log(response)
        if(response.code===0){
            const recommend=response.data
            dispatch(receiveRecommend(recommend))
        }
    }
};
//十点一刻
//同步
const receiveTenfifteen = (tenfifteen)=>({type:RECEIVE_TENFIFTEEN,data:tenfifteen})
//异步
export const getTenfifteen = ()=>{
    return async dispatch => {
        const response=await reqTenfifteen()
        // console.log(response)
        if(response.code===0){
            const tenfifteen=response.data
            dispatch(receiveTenfifteen(tenfifteen))
        }
    }
};
//严选look
//同步
const receiveYxLook = (YxLook)=>({type:RECEIVE_YXLOOK,data:YxLook})
//异步
export const getYxLook = ()=>{
    return async dispatch => {
        const response=await reqYxLook()
        // console.log(response)
        if(response.code===0){
            const YxLook=response.data
            dispatch(receiveYxLook(YxLook))
        }
    }
};
//更多精彩
//同步
const receiveFindMore = (findMore)=>({type:RECEIVE_REQFINDMORE,data:findMore})
//异步
export const getFindMore = ()=>{
    return async dispatch => {
        const response=await reqFindMore()
        // console.log(response)
        if(response.code===0){
            const findMore=response.data
            dispatch(receiveFindMore(findMore))
        }
    }
};


//分类第三页
//同步
const receiveCategoryData = (CategoryData)=>({type:RECEIVE_CATEGORYDATA,data:CategoryData})
//异步
export const getCategoryData = ()=>{
    return async dispatch => {
        const response=await reqCategoryData()
        // console.log(response)
        if(response.code===0){
            const CategoryData=response.data
            dispatch(receiveCategoryData(CategoryData))
        }
    }
};