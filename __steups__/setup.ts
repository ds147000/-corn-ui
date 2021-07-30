/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */
/*
 * @Description: 单元测试全局配置文件
 * @Author: zhoulong.yang
 * @Date: 2021-05-12 15:11:16
 * @LastEditors: zhoulong.yang
 * @LastEditTime: 2021-06-02 14:32:31
 */
import Taro, { RouterInfo } from '@tarojs/taro'


jest.mock('@tarojs/taro', () => {
  const login = jest.fn(async (): Promise<{ code: string; errMsg: string }> => {
    return Promise.resolve({ code: 'saasa', errMsg: 'is:ok' })
  })

  const getSystemInfo = jest.fn(async (): Promise<Taro.getSystemInfo.Result> => {
    return {
      SDKVersion: '2.1.16',
      albumAuthorized: true,
      benchmarkLevel: 0,
      bluetoothEnabled: false,
      brand: '',
      cameraAuthorized: true,
      fontSizeSetting: 12,
      language: 'zh',
      locationAuthorized: true,
      locationEnabled: true,
      microphoneAuthorized: true,
      model: '1',
      notificationAlertAuthorized: true,
      notificationAuthorized: true,
      notificationBadgeAuthorized: true,
      notificationSoundAuthorized: true,
      pixelRatio: 2,
      platform: 'ios',
      safeArea: { bottom: 20, height: 627, width: 375, top: 40, left: 0, right: 0 },
      screenHeight: 667,
      screenWidth: 375,
      statusBarHeight: 40,
      system: '11.0',
      version: '8.0.0',
      wifiEnabled: true,
      windowHeight: 667,
      windowWidth: 375,
      errMsg: 'is:ok'
    }
  })

  return {
    ...jest.requireActual('@tarojs/taro-h5') as any,
    redirectTo: jest.fn(),
    navigateTo: jest.fn(),
    reLaunch: jest.fn(),
    switchTab: jest.fn(),
    login,
    getSystemInfo,
    useDidShow: jest.requireActual('react').useLayoutEffect,
    useDidHide: jest.requireActual('react').useLayoutEffect,
    useReady: jest.requireActual('react').useLayoutEffect,
    useRouter: (): RouterInfo => {
      return {
        params: {},
        path: '/',
        onReady: '',
        onHide: '',
        onShow: '',
        scene: undefined,
        shareTicket: undefined
      }
    },
    usePullDownRefresh: jest.fn(),
    useResize: jest.fn(),
    useReachBottom: jest.fn(),
    usePageScroll: jest.fn()
  }
})
