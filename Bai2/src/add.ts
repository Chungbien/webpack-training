export const add = (a = 1, b = 2) => a + b
export const treeShaking = () => {
  console.log('Dòng này sẽ không có trong file build')
}
