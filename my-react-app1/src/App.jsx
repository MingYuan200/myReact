import $ from 'jquery'
import { useRef, useEffect } from 'react';


export default function App() {


  useEffect(() => {
    // 移入 => mouseover()
    // 移出 => mouseout()
    // 移動的時候 => mousemove()
    // 偵測滑鼠的xy座標 => pageX、pageY
    // 取得HTML內容 => html()
    // 淡入 => fadeIn()
    // 淡出 => fadeOut()
    // 速度 => 毫秒 => (slow,normal,fast)
    // 尋找指定的名稱 =>has()
    // 新增html元素 => append()
    // 取得子元素 => children()

    $('a:has(.ttpShow)').mouseover(function (e) {
      $('body').append('<div id="ttpPanel">' + $(this).children('.ttpShow').html() + '</div>');
      $('#ttpPanel').css({
        top: (e.pageY + 10) + 'px',
        left: (e.pageX + 10) + 'px'
      }).fadeIn('fast');
    }).mouseout(function (e) {
      $('#ttpPanel').remove();
    }).mousemove(function (e) {
      $('#ttpPanel').css({
        top: (e.pageY + 10) + 'px',
        left: (e.pageX + 10) + 'px'
      })
    })
  }, [])



  return (
    <>
      <h2>ToolTip顯示說明</h2>
      <p>
        Lorem ipsum dolor sit amet.
        <a href="#">
          consectetur
          <span className='ttpShow'> consectetur 內容說明...</span>
        </a>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat temporibus ex et perspiciatis unde hic provident sequi illo, eaque labore esse dolorem itaque ducimus reiciendis expedita facilis natus sed deleniti facere possimus. Quis exercitationem a illum animi nam ratione ea adipisci facilis neque, placeat soluta ducimus maxime omnis ad iusto laborum facere eligendi? Repellat ut eos accusantium omnis voluptas beatae quidem at necessitatibus, deserunt nesciunt veniam corporis tempore distinctio exercitationem excepturi temporibus voluptatem est hic? Odit laborum commodi tempore autem, et corporis recusandae delectus. Mollitia voluptatibus quo illum quod quis illo, aspernatur, amet minus adipisci voluptatem ratione, consequatur fugiat tenetur neque ab a quas perspiciatis recusandae eaque necessitatibus aperiam aliquam! Eveniet ab sapiente quaerat dolores eius dolore dolorum exercitationem architecto officia porro. Laudantium corporis officia a. Corrupti consequuntur perferendis eum tempore voluptas ullam. Aspernatur nobis obcaecati animi aliquam alias sit, vitae laboriosam ut dignissimos illum nemo repudiandae excepturi hic fugit blanditiis sapiente deserunt aliquid saepe? Harum asperiores illo expedita quidem fuga quam sed. Harum alias repellat quos sunt porro dignissimos iusto ducimus dolores animi tempore consequatur pariatur est ipsum quam, obcaecati impedit provident reiciendis velit explicabo aliquid nulla? Consequatur eaque quibusdam enim quis qui, ex eligendi quae nesciunt, assumenda ipsam beatae iure. Laborum autem incidunt atque exercitationem nisi officia quo debitis, nam suscipit est consequuntur blanditiis velit, animi asperiores deserunt accusantium ullam quis ratione? Ea odio optio eaque odit eligendi. Obcaecati fuga iusto ullam necessitatibus sapiente numquam est blanditiis optio velit ipsa maiores, vel dolorem sunt beatae id amet, voluptatem architecto eaque ut adipisci recusandae? Cumque, delectus et iusto quas fuga incidunt voluptate architecto. Voluptates est sint cupiditate non aliquid aperiam molestias quidem voluptate quia. Amet necessitatibus dolores quos distinctio debitis illo, laboriosam expedita. Dolore exercitationem expedita obcaecati alias quis ipsam laboriosam corporis illo officia laudantium neque, cumque repellat repudiandae earum. Unde vel sunt aspernatur dolores voluptas, eum aliquid necessitatibus eos quod et sint eius labore aperiam molestias, iste, voluptate dolorem excepturi tenetur! Dignissimos quis, soluta praesentium ex recusandae molestiae aut cum consectetur minima nobis commodi dolor excepturi sed, quos quasi adipisci animi inventore enim expedita nisi saepe. Natus dicta nisi quidem, quaerat aliquid dolorem, temporibus laboriosam cupiditate est suscipit voluptatum cum facilis totam a vitae sunt delectus inventore, deleniti aliquam sed reprehenderit? Obcaecati esse repellendus odio quaerat, sit placeat tempore nobis vel excepturi necessitatibus veniam aliquid corporis voluptates alias similique aperiam voluptatem cupiditate dolor! Porro modi amet laborum veniam nisi enim beatae corrupti tempore, quae omnis itaque, voluptatibus aliquid. Nisi dolores velit molestias natus voluptatibus minus temporibus reprehenderit. Eos illo dignissimos adipisci, est voluptates eius numquam!
        <a href="#"> Beatae
          <span className='ttpShow'>
            <img src="./images/03.jpg" alt="" style={{
              width:'100px'
            }} />
          </span>
        </a>
        fuga vero sapiente amet corrupti repudiandae nemo facere eum consequatur culpa voluptas molestiae rerum sint sunt corporis deserunt ut omnis aliquid, nihil nisi iusto quaerat at quam? Mollitia quam tempora eaque quae adipisci aut rem facilis, similique iste ipsum. Alias voluptas, commodi dolores cumque recusandae voluptate accusamus architecto ullam, magni dignissimos maiores ut nesciunt eveniet quisquam amet necessitatibus voluptatem natus. Eaque, tenetur? Veniam praesentium asperiores voluptates iusto exercitationem laboriosam. Ratione, dolorem ad.
      </p>
    </>
  )
}