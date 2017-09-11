// stores/hoge.js
import BaseStore from '../base/store'

class HogeStore extends BaseStore {

 getHoge() {
    if (!this.get('hogeJson')) this.setHoge([])
    return this.get('hogeJson')
  }

  setHoge(array) {
    this.set('hogeJson', array)
  }

}

const Hoge = new HogeStore()

Hoge.dispatchToken = Dispatcher.register(payload => {
  const action = payload.action

  switch (action.type) {
    case ActionTypes.GET_HOGE: // 上のapi通信で使用したgetHogeアクションを受け取っているとします。
      Hoge.setHoge(action.json) // getHogeで取得したjsonをセッターを利用して保存しています。
      Hoge.emitChange()
      break
  }

  return true
})