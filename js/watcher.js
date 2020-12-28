class Watcher {
  constructor (vm, key, cb) {
    this.vm = vm
    // data中的属性名称
    this.key = key
    // 回调函数负责更新视图
    this.cb = cb

    // 把 watcher对象记录到 Dep 类的静态属性 target
    Dep.target = this
    // 通过获取oldValue的时候，就可以把 watcher添加到Dep中
    this.oldValue = vm[key]
    console.log('get 结束')
    Dep.target = null

  }
  // 当数据发生变化的时候更新视图
  update () {
    let newValue = this.vm[this.key]
    if (this.oldValue === newValue) {
      return
    }
    this.cb(newValue)
  }
}