//index.js

Page({
  data: {
    payment_mode: 1,//默认支付方式 微信支付
    isFocus: false,//控制input 聚焦
    balance:100,//余额
    actual_fee:20,//待支付
    wallets_password_flag:false//密码输入遮罩
  },
  //事件处理函数
 
  onLoad: function () {
    
  },
  wx_pay() {//转换为微信支付
    this.setData({
      payment_mode: 1
    })
  },
  offline_pay() {//转换为转账支付
    this.setData({
      payment_mode: 0
    })
  },
  wallet_pay() {
    this.setData({//转换为钱包支付
      payment_mode: 2
    })
  },
  set_wallets_password(e) {//获取钱包密码
    this.setData({
      wallets_password: e.detail.value
    });
    if (this.data.wallets_password.length == 6) {//密码长度6位时，自动验证钱包支付结果
      wallet_pay(this)
    }
  },
  set_Focus() {//聚焦input
    console.log('isFocus', this.data.isFocus)
    this.setData({
      isFocus: true
    })
  },
  set_notFocus() {//失去焦点
    this.setData({
      isFocus: false
    })
  },
  close_wallets_password () {//关闭钱包输入密码遮罩
    this.setData({
      isFocus: false,//失去焦点
      wallets_password_flag: false,
    })
  },
  pay() {//去支付
    pay(this)
  }
})
/*-----------------------------------------------*/
/*支付*/
function pay(_this) {
  let apikey = _this.data.apikey;
  let id = _this.data.id;
  let payment_mode = _this.data.payment_mode
  if (payment_mode == 1) {
  //  微信支付
  // 微信自带密码输入框
    console.log('微信支付')
  } else if (payment_mode == 0) {
  //  转账支付 后续跳转至传转账单照片
    console.log('转账支付')
  } else if (payment_mode == 2) {
    // 钱包支付 输入密码
    console.log('钱包支付')
    _this.setData({
      wallets_password_flag: true,
      isFocus: true
    })
  }

}
// 钱包支付
function wallet_pay(_this) {
  console.log('钱包支付请求函数')
  /*
  1.支付成功
  2.支付失败：提示；清空密码；自动聚焦isFocus:true，拉起键盘再次输入
  */
}
