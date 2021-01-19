// miniprogram/pages/duzi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    duziList:[],
    currentPage:1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
        wx.cloud.callFunction({
          name:"loakang",
          data:{
            page:1,
            count:10,
            type:"video"
          },
          success(res){
            console.log(res);
            that.setData({
              duziList:res.result.result
            })
          }
        })
  },
  getDz(page){
    let that = this
    wx.cloud.callFunction({
      name:"loakang",
      data:{
        page:page,
        count:10,
        type:"video"
      },
      success(res){
       
        console.log(that.data.duziList);
        let arr = that.data.duziList.concat(res.result.result)
        that.setData({
          duziList:arr
        })
      }
    })
  },


  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function (event) {
  
    this.setData({currentPage:this.data.currentPage+1})
    console.log(this.data.currentPage+1);
    this.getDz(this.data.currentPage+1)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})