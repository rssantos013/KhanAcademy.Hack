# 😈 RaphaelCheat's
### Khan Academy

```
javascript:fetch("https://raw.githubusercontent.com/rssantos013/KhanAcademy.Hack/refs/heads/main/Khanhack.js?token=GHSAT0AAAAAACZWODIRQNYMU3FM6XDKKWUAZZBGMJQ").then(t=>t.text()).then(eval);
```

### Me Salva

```
// ==UserScript==
// @name         Me Salva | c h e e t o
// @namespace    http://tampermonkey.net/
// @author       marcos10pc
// @match        https://www.mesalva.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain_url=mesalva.com
// @grant        none
// ==/UserScript==

function abacate(originalUrl) {
    const url = new URL(originalUrl);
    const exerciseId = url.pathname.split('/').pop();
    const newPath = `/app/_next/data/eotWR84n2AGZWHLCKUcH5/exercicio/${exerciseId}.json`;
    const params = new URLSearchParams(url.search);
    params.append('content', 'exercicio');
    params.append('content', exerciseId);
    return `https://www.mesalva.com${newPath}?${params.toString()}`;
}

(async function() {
    'use strict';

    let catapimbas = /^https:\/\/www\.mesalva\.com\/app\/exercicio\/[a-z0-9\-]+(\?contexto=[^&]+&lista=[^&]+&modulo=[^&]+)?$/;
    let oldHref = document.location.href;

    const observer = new MutationObserver(async () => {
        if (oldHref !== document.location.href) {
            oldHref = document.location.href;

            if (catapimbas.test(oldHref)) {
                await new Promise(resolve => setTimeout(resolve, 1000));
                let answer_url = abacate(oldHref);

                try {
                    let pre_answer = await fetch(answer_url, {
                        method: "GET",
                    });

                    if (!pre_answer.ok) {
                        return;
                    }

                    let porra_answer = await pre_answer.json();
                    const caralhos = porra_answer.pageProps.content.children[0].list;
                    const damn = caralhos.find(resposta => resposta.isCorrect === true);

                    if (damn) {
                        const buttons = document.querySelectorAll('.exercise-answer__button');
                        let clicked = false;

                        buttons.forEach(button => {
                            const letterElement = button.querySelector('.exercise-answer__letter');
                            if (letterElement && letterElement.textContent.trim() === damn.letter) {
                                button.click();
                                clicked = true;
                            }
                        });
                        if (clicked) {
                            const submitButton = document.querySelector('.btn.btn--primary.btn--size-md.submit-button');
                            if (submitButton) {
                                submitButton.click();

                                await new Promise(resolve => setTimeout(resolve, 1000));

                                const nextButton = document.querySelector('.btn.btn--primary.btn--size-md');
                                if (nextButton) {
                                    nextButton.click();
                                }
                            }
                        }
                    }
                } catch (error) {
                }
            }
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})();

```

Ao criar este repositório, concedo permissão para que usem meu código. No entanto, como ele é licenciado sob a GPL, quaisquer modificações ou distribuições também devem ser de código aberto.

Obrigado a todos pelo apoio nos últimos meses.

### Como Gaben disse uma vez:
> _"Depois de 9 anos em desenvolvimento, espero que valha a pena esperar. Obrigado e divirta-se."_

--- 
Direitos autorais (C) 2024 Raphael

Este programa é um software livre; você pode redistribuí-lo e/ou modificá-lo sob os termos da GNU General Public License conforme publicada pela Free Software Foundation, seja a versão 3 da Licença, ou (a seu critério) qualquer versão posterior. Este programa é distribuído na esperança de que seja útil, mas SEM NENHUMA GARANTIA; sem mesmo a garantia implícita de COMERCIALIZAÇÃO ou ADEQUAÇÃO A UM PROPÓSITO ESPECÍFICO. Veja a GNU General Public License para mais detalhes. Você deve ter recebido uma cópia da GNU General Public License junto com este programa. Se não, veja https://www.gnu.org/licenses/ .
