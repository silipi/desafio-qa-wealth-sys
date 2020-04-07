// Selector usado para selecionar os elementos da página:
import { Selector } from "testcafe";
import { ClientFunction } from "testcafe";

// Declaração de variáveis:
const btn = Selector("#content > div > div > div > div.large-2.columns");

const editClick = ClientFunction(() => {
  const edtBtn = document.querySelectorAll("#content table a#edit");
  edtBtn.forEach((butao) => {
    butao.click();
  });
});

const delClick = ClientFunction(() => {
  const delBtn = document.querySelectorAll("#content table a#delete");
  delBtn.forEach((butao) => {
    butao.click();
  });
});

// Nome do agrupamento do teste e página que será testada:
fixture`Challenging DOM Test - javascript`
  .page`https://the-internet.herokuapp.com/challenging_dom`;

// Testes:
test("Clicar em todos botões visiveis em tela;", async (t) => {
  await t.click(btn.child(0));
  await t.click(btn.child(2));
  await t.click(btn.child(4));
});

test("Clicar em todos os #edit e #delete dentro da tabela visivel;", async () => {
  await editClick();
  await delClick();
});
