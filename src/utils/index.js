/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-01 18:19:10
 * @LastEditTime: 2019-08-23 16:36:32
 * @LastEditors: Please set LastEditors
 */
export const debounce = (fn, ms) => {
  let timer
  return function () {
    const context = this
    const args = arguments
    clearTimeout(timer)
    timer = setTimeout(function () {
      fn.apply(context, args)
    }, ms)
  }
}

export const sleep = (ms) => new Promise((resolve, reject) => setTimeout(() => { resolve() }, ms))

// sleep(1000).then(() => {
//   console.log('1s')
// })
