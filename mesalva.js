// ==UserScript==
// @name         Me Salva
// @namespace    http://tampermonkey.net/
// @author       r.ssantos013
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
