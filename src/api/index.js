import ajax from './ajax'
export const reqHeadCateList=()=>ajax('/headCateList');
export const reqFocusList=()=>ajax('/focusList');
export const reqTagList=()=>ajax('/tagList');
export const reqNewItemList=()=>ajax('/newItemList');
export const reqPopularItemList=()=>ajax('/popularItemList');
export const reqFlashSaleIndexVO=()=>ajax('/flashSaleIndexVO');
export const reqtTopicList=()=>ajax('/topicList');
export const reqTcateList=()=>ajax('/cateList');
//识物轮播
export const reqBanner=()=>ajax('/banner');
//严选推荐
export const reqColumn=()=>ajax('/column');
//为你推荐
export const reqRecommend=()=>ajax('/recommend');
//十点一刻
export const reqTenfifteen=()=>ajax('/tenfifteen');

//严选look
export const reqYxLook=()=>ajax('/yxLook');
//分类
export const reqCategoryData=()=>ajax('/categoryData');
//更多精彩
export const reqFindMore=()=>ajax('/findMore');
//验证码







