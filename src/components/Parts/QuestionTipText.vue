<template>
  <!--参考元 https://qiita.com/miyauchoi/items/3ef2507f9e2d860d4769 -->
  <div id="QuestionTipText">
    <span class='QtipText'>        
      <span class='text'>
        {{this.qtext}}
      </span>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    qtext: {String,default:"？"},
  },
}
</script>

<style lang="scss" scoped>
//$color-theme: #49beb7;
$color-theme: gray;

.QtipText {

  /* 位置の情報 */
  position: relative;
  display: inline-block;
  width: 1em;
  height: 1em;
  vertical-align: middle;

  /* 中身の情報 */
  background: $color-theme;
  border-radius: 100%;

  &::before {
      /* 位置の情報 */
      position: absolute;
      display: inline-block;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) scale(0.6);

      /* 中身の情報 */
      content: '?';
      color: white;
      font-size: 100%;
      font-weight: bold;
  }
  
  /* * * 説明文 * * */
  & .text {
    /* 位置の情報 */
    position: absolute;
    display: block;
    width: 14em;
    left: 50%;
    transform: translateX(-50%);
    bottom: 100%;

    /* 中身の情報 */
    background: $color-theme;
    color: white;
    font-size: 12px;
    padding: 10px;
    line-height: 1.4;
    border-radius: 6px;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    
    /* アニメーションの情報 */
    transition: all 0.4s ease;
    visibility: hidden;
    opacity: 0;
    bottom: 100%;

    /* 内部イベントを抑止 */
    pointer-events: none;

    &::after {
    /* 位置の情報 */
    position: absolute;
    display: block;
    width: 10px;
    height: 10px;
    left: 50%;
    bottom: -5px;
    transform: rotateZ(45deg) translateX(-50%);
    transform-origin: left;

    /* 中身の情報 */
    content: ' ';
    background: $color-theme;
    }
  }

  &:hover .text {
    /* アニメーションの情報 */
    visibility: visible;
    opacity: 1.0;
    bottom: calc(100% + 10px);
  }
}
</style>