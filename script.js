let grob_ishaka = document.querySelector(".ishak")
grob_ishaka.addEventListener("click",function(){
  anime({
      targets:grob_ishaka,
      keyframes : [{
          translateX : -450,rotate : "0.25turn"
      },{
          translateX : 950,rotate : "1.75turn"
      }],
      duration : 5000,
      loop : true,
      direction:"alternate"
  })  
})
let pepelnica_deda = document.querySelector(".vkys_deda")
pepelnica_deda.addEventListener("click",function(){
    anime({
        targets:pepelnica_deda,
        keyframes: [
            { translateX: 0, translateY: 0},
            { translateX: 450, translateY: 0},
            { translateX: 450, translateY: 200},
            { translateX: 0, translateY: 200},
            { translateX: 0, translateY: 0}
          ],
        // keyframes:[{
        //     scale : [0.5,1.5,0.5,1.5,0.5,1.5],
        //     translateX : -250,rotate:"0.25turn"
        // },{
        //     scale : [1.5,0.5,1.5,0.5,1.5,0.5],
        //     translateX : 250,rotate:"1.75turn"
        // }],
        duration : 600,
        loop : true,
    })
    anime({
        targets: pepelnica_deda,
        scale: [1, 1.2, 1],
        duration: 600,
        easing: 'easeInOutSine',
        loop: true
      });
})
let yuriy_loza = document.querySelector(".yura")
yuriy_loza.addEventListener("click",function(){
    anime({
        targets: yuriy_loza,
        scale: [1, 1.2, 1],
        duration: 600,
        easing: 'easeInOutSine',
        loop: true
      });
})
let pencil = document.querySelector(".pencil")
pencil.addEventListener("click",function(){
    anime({
        targets : pencil,
        keyframes : [{
            rotate : "1024turn"
        }],
        duration : 1000,
        loop : true
    })
})
