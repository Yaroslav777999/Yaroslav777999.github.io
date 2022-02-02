window.addEventListener('DOMContentLoaded', function () {
  let changeTextBtn = document.querySelector('.btn-change');
  let createTextBtn = document.querySelector('.btn-create');
  let textEl = document.querySelector('.text');

  createTextBtn.addEventListener("click", function () {
    textEl.insertAdjacentHTML('afterbegin',
      `<div>
    Жили-были <span class="js-var-1">{var1}</span> да <span class="js-var-2">{var2}</span>,
    Была у них <span class="js-var-3">{var3}</span>,
    Снесла <span class="js-var-3">{var3}</span> <span class="js-var-4">{var4}</span>, не простое - золотое,
    - <span class="js-var-1">{var1}</span> бил, бил - не разбил,
    - <span class="js-var-2">{var2}</span> била, била - не разбила,
    <span class="js-var-5">{var5}</span> бежала, <span class="js-var-6">{var6}</span> задела, <span class="js-var-4">{var4}</span> упало и разбилось.,
    <span class="js-var-1">{var1}</span> плачет, <span class="js-var-2">{var2}</span> плачет, а  <span class="js-var-3">{var3}</span> кудахчет:, <span class="js-var-7">{speech}</span>
    </div>`);
    changeTextBtn.classList.remove('hidden');
    createTextBtn.classList.add('hidden');
  })

  changeTextBtn.addEventListener("click", function () {

    function check(param) {
      return param.value.length > 0
    }

    function checkBtnPush() {
      let createTextBtn = document.querySelector('.btn-create');
      return createTextBtn.classList.contains('hidden');
    }

    const arr_test = [1, 2, 3, 4, 5, 6, 7]

    arr_test.forEach((element) => {
      let varInput = document.querySelector(`.js-input-${element}`);
      if (checkBtnPush() && check(varInput)) {
        let varTest = document.querySelectorAll(`.js-var-${element}`);
        varTest.forEach((el) => {
          el.textContent = varInput.value
        })
      }
    });
  })
})