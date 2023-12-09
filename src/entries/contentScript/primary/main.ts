import renderContent from "../renderContent";
import App from "./App.svelte";
import setupAdWatcher from "./adWatcher";
import setupNetworkListener from "./networkListener";
import generateQuiz from "./quizGenerator";

setupAdWatcher();
setupNetworkListener(generateQuiz);

let app: App;

renderContent(import.meta.PLUGIN_WEB_EXT_CHUNK_CSS_PATHS, (appRoot) => {
  app = new App({
    target: appRoot,
  });
});
