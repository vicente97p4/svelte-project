<script>
  let text = "";
  let number = 30;

  function change_font() {
    document.getElementById("num1").style.fontSize = number;
    document.getElementById("num2").style.fontSize = number;
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
