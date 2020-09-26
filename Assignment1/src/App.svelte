<script>
  let text = "";
  let number = 30;

  function change_font() {
    document.getElementById("num1").style.fontSize = number;
    document.getElementById("num2").style.fontSize = number;
    
    // 스타일을 지정해줄 땐 단위를 까먹기 쉬운데, 꼭 붙여줘야 합니다
    // document.getElementById("num1").style.fontSize = `${number}px`;
    // document.getElementById("num2").style.fontSize = `${number}px`;
  }
</script>

<style>
  h2 {
    position: relative;
    right: 5px;
  }
  input {
    left: 5px;
    position: relative;
    float: inline-end;
    margin-right: 30px;
  }
  section {
    display: inline-flex;
    position: relative;
  }
  div {
    width: 250px;
    height: 250px;
    border: 1px solid black;
    margin: 10px;
  }
  .par {
    position: relative;
    font-size: 30px;
    top: -30px;
    left: 10px;
  }
  .lato {
    font-family: "Lato", sans-serif;
  }
  .noto {
    font-family: "Noto Sans KR", sans-serif;
  }
</style>

<!-- 
  밑에 h2부분에서 왜 change_font가 실행이 안되는지 궁금합니다.
  그리고 왜 change_font()라고 ()를 붙이면 에러가 발생해서
  페이지가 뜨지 않는지 모르겠습니다..
-->


<!-- svelte는 html로 써진 코드를 public/index.html의 body에 렌더링을 해주기 때문에 여기서 html까지 써줄 필요는 없습니다. link는 그 index.html 에 붙여주면 됩니다. -->
<html lang="kr">
  <head>
    <link
      href="https://fonts.googleapis.com/css2?family=Lato&family=Noto+Sans+KR:wght@700&display=swap"
      rel="stylesheet" />
  </head>
  <h1>1주차 스터디 과제</h1>
  <h2>
    <!-- 이부분입니다. change_font()라고 ()를 붙이면 에러가 나고 안붙여도 실행은 안됩니다..-->
    Sentence <input type="text" bind:value={text} />Font-Size <input type="number" onchange={change_font} bind:value={number} />
    
    <!-- 스벨트에서 일반적인 자바스크립트 문법을 어느정도 쓸 수 있는 것은 맞지만, onchange 와 같은 방식은 svelte 에서 별도의 이벤트 핸들링을 제공하기 때문에 실행이 되지 않습니다. -->
    <!-- 이벤트 핸들링은 2주차에서 다룰 예정입니다. -->
    <!-- Sentence <input type="text" bind:value={text} />Font-Size <input type="number" on:input={change_font} bind:value={number} /> -->
  </h2>

  <section>
    <div>
      <p id="num1" class="lato par">Lato <br /> {text}</p>
    </div>
    <div>
      <p id="num2" class="noto par">noto <br />{text}</p>
    </div>
  </section>
</html>
