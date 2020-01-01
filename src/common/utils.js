/**
 * 工具函数封装
 */
//防抖节流函数
export function debounce(func, delay) {
  let timer = null
  return function (...args) { 
    if(timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}