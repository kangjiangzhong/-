// miniprogram/pages/upload/upload.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgsrc:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  uploadEvent(){
    //上传图片
    let that = this
    wx.chooseImage({
      success:function(res){
        console.log(res);
        //将选中的图片上传到云服务器
        wx.cloud.uploadFile({
          cloudPath:new Date().getTime+".png",//云文件存储路径,
          filePath:res.tempFilePaths[0],
          success(result){
            console.log(result);
            that.setData({
              imgsrc:result.fileID
            })
          }
        })
      },
      fail(err){
        console.log(err);
      }
    })
  }
})