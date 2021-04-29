const WX_JSSDK_URL = 'https://res.wx.qq.com/open/js/jweixin-1.6.0.js';

export default class {
  constructor() {
    this.isConfigReady = false;
    this.wx = null;
    this.wxConfig = {};
    this.readyCallBack = () => {};
    this.shareSuccessCallBack = () => {};

    this.defaultShare = {
      title: document.title,
      desc: '',
      link: window.location.href.replace(/(\?|#).*/g, ''),
      imgUrl: ''
    };
    this._isInitDefaultShare = false;
  }

  /**
   * config
   * @param debug
   * @param appId
   * @param timestamp
   * @param nonceStr
   * @param signature
   * @param jsApiList
   * @returns {{share(*=): Promise<commander.ParseOptionsResult.unknown>, setReadyCallBack(*=): NodeJS.Global.WxShare, _ready(): Promise<*>, setShareSuccessCallBack(*=): NodeJS.Global.WxShare, _initWxSDK(): Promise<*>, setDefaultShare(*=): NodeJS.Global.WxShare, backToDefault(): *, config({debug?: *, appId: *, timestamp: *, nonceStr: *, signature: *, jsApiList?: *}): this}}
   */
  config({
    debug = false,
    appId,
    timestamp,
    nonceStr,
    signature,
    jsApiList = ['onMenuShareWeibo', 'updateAppMessageShareData', 'updateTimelineShareData']
  }) {
    this.wxConfig = {
      debug,
      appId,
      timestamp,
      nonceStr,
      signature,
      jsApiList
    };
    return this;
  }

  /**
   * setReadyCallBack
   * @param readyCallBack
   * @returns {{share(*=): Promise<commander.ParseOptionsResult.unknown>, setReadyCallBack(*=): this, _ready(): Promise<*>, setShareSuccessCallBack(*=): WxShare, _initWxSDK(): Promise<*>, setDefaultShare(*=): WxShare, backToDefault(): *, config({debug?: *, appId: *, timestamp: *, nonceStr: *, signature: *, jsApiList?: *}): {share, (*=): Promise<commander.ParseOptionsResult.unknown>, setReadyCallBack, (*=): NodeJS.Global.WxShare, _ready, (): Promise<*>, setShareSuccessCallBack, (*=): NodeJS.Global.WxShare, _initWxSDK, (): Promise<*>, setDefaultShare, (*=): NodeJS.Global.WxShare, backToDefault, (): *, config, ({debug?: *, appId: *, timestamp: *, nonceStr: *, signature: *, jsApiList?: *}): this}}}
   */
  setReadyCallBack(readyCallBack = () => {}) {
    this.readyCallBack = readyCallBack;
    return this;
  }

  /**
   * setShareSuccessCallBack
   * @param shareSuccessCallBack
   * @returns {{share(*=): Promise<commander.ParseOptionsResult.unknown>, setReadyCallBack(*=): {share, (*=): Promise<commander.ParseOptionsResult.unknown>, setReadyCallBack, (*=): this, _ready, (): Promise<*>, setShareSuccessCallBack, (*=): WxShare, _initWxSDK, (): Promise<*>, setDefaultShare, (*=): WxShare, backToDefault, (): *, config, ({debug?: *, appId: *, timestamp: *, nonceStr: *, signature: *, jsApiList?: *}): {share, (*=): Promise<commander.ParseOptionsResult.unknown>, setReadyCallBack, (*=): NodeJS.Global.WxShare, _ready, (): Promise<*>, setShareSuccessCallBack, (*=): NodeJS.Global.WxShare, _initWxSDK, (): Promise<*>, setDefaultShare, (*=): NodeJS.Global.WxShare, backToDefault, (): *, config, ({debug?: *, appId: *, timestamp: *, nonceStr: *, signature: *, jsApiList?: *}): this}}, _ready(): Promise<*>, setShareSuccessCallBack(*=): this, _initWxSDK(): Promise<*>, setDefaultShare(*=): WxShare, backToDefault(): *, config({debug?: *, appId: *, timestamp: *, nonceStr: *, signature: *, jsApiList?: *}): {share, (*=): Promise<commander.ParseOptionsResult.unknown>, setReadyCallBack, (*=): NodeJS.Global.WxShare, _ready, (): Promise<*>, setShareSuccessCallBack, (*=): NodeJS.Global.WxShare, _initWxSDK, (): Promise<*>, setDefaultShare, (*=): NodeJS.Global.WxShare, backToDefault, (): *, config, ({debug?: *, appId: *, timestamp: *, nonceStr: *, signature: *, jsApiList?: *}): this}}}
   */
  setShareSuccessCallBack(shareSuccessCallBack = () => {}) {
    this.shareSuccessCallBack = shareSuccessCallBack;
    return this;
  }

  /**
   * setDefaultShare
   * @param defaultShare
   * @returns {{share(*=): Promise<commander.ParseOptionsResult.unknown>, setReadyCallBack(*=): {share, (*=): Promise<commander.ParseOptionsResult.unknown>, setReadyCallBack, (*=): this, _ready, (): Promise<*>, setShareSuccessCallBack, (*=): WxShare, _initWxSDK, (): Promise<*>, setDefaultShare, (*=): WxShare, backToDefault, (): *, config, ({debug?: *, appId: *, timestamp: *, nonceStr: *, signature: *, jsApiList?: *}): {share, (*=): Promise<commander.ParseOptionsResult.unknown>, setReadyCallBack, (*=): NodeJS.Global.WxShare, _ready, (): Promise<*>, setShareSuccessCallBack, (*=): NodeJS.Global.WxShare, _initWxSDK, (): Promise<*>, setDefaultShare, (*=): NodeJS.Global.WxShare, backToDefault, (): *, config, ({debug?: *, appId: *, timestamp: *, nonceStr: *, signature: *, jsApiList?: *}): this}}, _ready(): Promise<*>, setShareSuccessCallBack(*=): {share, (*=): Promise<commander.ParseOptionsResult.unknown>, setReadyCallBack, (*=): {share, (*=): Promise<commander.ParseOptionsResult.unknown>, setReadyCallBack, (*=): this, _ready, (): Promise<*>, setShareSuccessCallBack, (*=): WxShare, _initWxSDK, (): Promise<*>, setDefaultShare, (*=): WxShare, backToDefault, (): *, config, ({debug?: *, appId: *, timestamp: *, nonceStr: *, signature: *, jsApiList?: *}): {share, (*=): Promise<commander.ParseOptionsResult.unknown>, setReadyCallBack, (*=): NodeJS.Global.WxShare, _ready, (): Promise<*>, setShareSuccessCallBack, (*=): NodeJS.Global.WxShare, _initWxSDK, (): Promise<*>, setDefaultShare, (*=): NodeJS.Global.WxShare, backToDefault, (): *, config, ({debug?: *, appId: *, timestamp: *, nonceStr: *, signature: *, jsApiList?: *}): this}}, _ready, (): Promise<*>, setShareSuccessCallBack, (*=): this, _initWxSDK, (): Promise<*>, setDefaultShare, (*=): WxShare, backToDefault, (): *, config, ({debug?: *, appId: *, timestamp: *, nonceStr: *, signature: *, jsApiList?: *}): {share, (*=): Promise<commander.ParseOptionsResult.unknown>, setReadyCallBack, (*=): NodeJS.Global.WxShare, _ready, (): Promise<*>, setShareSuccessCallBack, (*=): NodeJS.Global.WxShare, _initWxSDK, (): Promise<*>, setDefaultShare, (*=): NodeJS.Global.WxShare, backToDefault, (): *, config, ({debug?: *, appId: *, timestamp: *, nonceStr: *, signature: *, jsApiList?: *}): this}}, _initWxSDK(): Promise<*>, setDefaultShare(*=): this, backToDefault(): *, config({debug?: *, appId: *, timestamp: *, nonceStr: *, signature: *, jsApiList?: *}): {share, (*=): Promise<commander.ParseOptionsResult.unknown>, setReadyCallBack, (*=): NodeJS.Global.WxShare, _ready, (): Promise<*>, setShareSuccessCallBack, (*=): NodeJS.Global.WxShare, _initWxSDK, (): Promise<*>, setDefaultShare, (*=): NodeJS.Global.WxShare, backToDefault, (): *, config, ({debug?: *, appId: *, timestamp: *, nonceStr: *, signature: *, jsApiList?: *}): this}}}
   */
  setDefaultShare(defaultShare = {}) {
    this.defaultShare = Object.assign({}, this.defaultShare, defaultShare);
    this._isInitDefaultShare = true;
    return this;
  }

  /**
   * share
   * @param shareData
   *  {
   *    title: '',
   *    link: '',
   *    desc: '',
   *    imgUrl: ''
   *  }
   * @returns {Promise<unknown>}
   */
  share(shareData = {}) {
    if (!this._isInitDefaultShare) {
      this.setDefaultShare(shareData);
    }

    const finalShareData = Object.assign({}, this.defaultShare, shareData);

    return Promise.resolve()
      .then(() => this._initWxSDK())
      .then(() => this._ready())
      .then(() => {
        const oldShareData = Object.assign({}, finalShareData, {
          success: (res) => this.shareSuccessCallBack(res)
        });

        this.wx.onMenuShareWeibo(oldShareData);

        // Above jssdk1.4
        this.wx.updateAppMessageShareData(finalShareData, (res) => this.shareSuccessCallBack(res));
        this.wx.updateTimelineShareData(finalShareData, (res) => this.shareSuccessCallBack(res));

        return Promise.resolve(finalShareData);
      });
  }

  /**
   * backToDefault
   * @returns {Promise<commander.ParseOptionsResult.unknown>}
   */
  backToDefault() {
    return this.share();
  }

  /**
   * init Wechat JSSDK
   * @returns {Promise<unknown>}
   * @private
   */
  _initWxSDK() {
    return new Promise((resolve) => {
      const setWX = () => {
        // set wx
        const oScript = document.createElement('script');
        oScript.type = 'text/javascript';
        oScript.onload = () => {
          this.wx = window.wx;
          resolve();
        };
        oScript.src = WX_JSSDK_URL;
        document.querySelector('head').appendChild(oScript);
      };

      if (this.wx) {
        resolve();
      } else if (window.wx) {
        // has wx
        this.wx = window.wx;
        resolve();
      } else {
        setWX();
      }
    });
  }

  /**
   * set wx.config
   * @return {Promise<any>}
   * @private
   */
  _ready() {
    return new Promise((resolve) => {
      if (this.isConfigReady) {
        resolve();
      } else {
        // set wx.config
        this.wx.config(this.wxConfig);

        this.wx.ready(() => {
          this.isConfigReady = true;

          if (this.readyCallBack) {
            this.readyCallBack();
          }

          resolve();
        });
      }
    });
  }
}