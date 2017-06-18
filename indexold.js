import a from './a'
class W {
  constructor(name) {
    this.name = name
  }
  
  // sayHello = () => {
  //   let c = '123'
  //   console.log('hello', this.name)
  // }

   sleep(ms = 0) {
    return new Promise((resolve, reject) => setTimeout(resolve, ms));
  }

  async test() {
    let arr = new Array(1,2,3)
    let drr = Array.from('huhaoran')
    drr.map((v, i) => {
      console.log('v', v)
    })
    for (let i = 0; i < 10; i++) {
      await this.sleep(500);
      console.log(`i=${i}`);
    }
  }
}
let w = new W()
w.test()
console.log('huhaoran', a)