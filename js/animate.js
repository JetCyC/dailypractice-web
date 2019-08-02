/**
 * @Description: 动画封装
 * @Author: Andre
 * @Date: 2019-08-01 14:28
 *
 */
/**
 *
 * @param element
 * @param target
 */
function animate(element, target) {

  //确保页面上只有一个定时器在执行动画
  if (element.timerId) {
    clearInterval(element.timerId);
    element.timerId = null;
  }

  element.timerId = setInterval(() => {
    //step   distance everytime
    let step = 10;
    //now location of box
    let current = element.offsetLeft;
    // 当从400 到 800  执行动画
    // 当从800 到 400  不执行动画

    //   前位置 > 目标位置 此时的step  要小于0
    if (current > target) {
      step = -Math.abs(step);
    }


    if (Math.abs(current - target) <= Math.abs(step)) {
      //让定时器停止
      clearInterval(element.timerId);
      //让盒子到target的位置
      element.style.left = target + 'px';
      return;
    }
    //move box
    current += step;
    element.style.left = current + 'px';
  }, 5)

}