// pages/index/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 用于保存导航列表数据
        navList: [],
        // 动态获取当前点击的nav
        currentIndexNav: 0,
        // 用于保存轮播图数据
        swiperList: [],
        // 用于获取视频数据
        videoList: []
    },

    // 选中行点击操作
    activeNav(e) {
        this.setData({
            currentIndexNav: e.target.dataset.index
        })
    },

    // 获取导航数据并保存到navList
    getNavList() {
        let self = this
            // 利用小程序内置发送请求的方法
        wx.request({
            url: 'http://mock-api.com/mnEe4VnJ.mock/navList',
            success(res) {
                if (res.data.code === 0) {
                    // 小程序跟vue不同的地方就是函数作用域不能直接设置data的属性值
                    self.setData({
                        navList: res.data.data.navList
                    })
                }
            }
        })
    },
    // 获取轮播图数据并保存到swiperList
    getSwiper() {
        let self = this
        wx.request({
            url: 'http://mock-api.com/mnEe4VnJ.mock/swiperList',
            success(res) {
                if (res.data.code === 0) {
                    self.setData({
                        swiperList: res.data.data.swiperList
                    })
                }
            }
        })
    },
    // 获取视频数据并保存到videoList
    getVideo() {
        let self = this
        wx.request({
            url: 'http://mock-api.com/mnEe4VnJ.mock/videoList',
            success(res) {
                if (res.data.code === 0) {
                    self.setData({
                        videoList: res.data.data.videoList
                    })
                }
            }
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        // 初始化时,需要直接获取某些数据
        this.getNavList(),
            this.getSwiper(),
            this.getVideo()
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})