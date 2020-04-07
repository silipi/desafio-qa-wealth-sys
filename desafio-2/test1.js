// Selector usado para selecionar os elementos da página:
import { Selector } from "testcafe";

// Declaração de variáveis:
const btn = Selector("#start > button");
const loading = Selector("#loading");
const finish = Selector(
  "#finish > h4",
  { visibilityCheck: true },
  { timeout: 5000 }
);

// Nome do agrupamento do teste e página que será testada:
fixture`Dynamic Loading Test - javascript`
  .page`https://the-internet.herokuapp.com/dynamic_loading/1`;

// Teste:
test("Ao clicar no botão, aparece o elemento 'loading', e após 5 segundos, aparece um elemento 'finish' com o texto 'Hello World!' na tela;", async (t) => {
  await t.click(btn).expect(loading.innerText).eql("Loading... ");
  await t.expect(finish.innerText).eql("Hello World!");
});
