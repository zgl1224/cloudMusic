import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutatios'
import actions from './actions'
import getters from './getters'

const state = {
    navCurrentIndex:0,
    isLoad: false, //加载组件
    currentPlay: {  // 当前播放歌曲
        'id': 0,
        'name': '歌曲名称',
        'singer': '演唱者',
        'albumPic': '',
        'location': '',
        'album': '',
    },
    playing: false,     // 播放状态
    songList:[],       //歌曲列表
    currentIndex:0,    //当前索引
    currentTime: 0,    //当前播放时长
}

Vue.use(Vuex)
const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
})

export default store