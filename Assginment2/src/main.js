//App.svelte를 불러와서 끼워넣어줬다.
import App from "./App.svelte";
const app = new App({
  target: document.body,
  props: {
    name: "world",
  },
});

export default app;
