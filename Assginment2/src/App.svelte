<script>
  $: time = 0; //time으로 시간의 변화를 받고
  $: degree = time * 6; //degree만큼 회전시키럭라서
  let hand = document.getElementById("min"); //분침을 찾고
  function rot() {
    //회전시키는 함수입니다.
    console.log("operated"); //디버깅용
    hand.style.Transform = "rotate(" + degree + "deg)"; //이렇게 하는거 아닌가요?
  }
</script>

<style>
  body {
    margin: 0;
    font-size: 2rem;
    display: flex;
    flex: 1;
    min-height: 100vh;
    align-items: center;
  }
  h1 {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
  }
  section {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
  }

  .clock {
    width: 400px;
    height: 400px;
    border: 5px solid black;
    border-radius: 50%;
    margin: 50px auto;
    position: relative;
  }
  .clock-face {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .hand {
    width: 2%;
    height: 200px;
    background: black;
    position: absolute;
    transform-origin: 100%;
    left: 195px;
  }
</style>

<!--왜 회전하지 않을까요.. -->
<!-- transform, rotate 써보기 -->

<body>
  <div class="clock">
    <div class="clock-face">
      <div class="hand" id="min" />
    </div>
  </div>
</body>

<h1>{time}</h1>

<section>
  <button
    on:click={() => {
      if (time > 0) time--;
      console.log('now operated');
      rot(); //회전함수 실행입니다.
    }}>-</button>
  <button
    on:click={() => {
      if (time < 59) time++;
      console.log('now operated');
      rot(); //회전함수 실행입니다.
    }}>+</button>
</section>
