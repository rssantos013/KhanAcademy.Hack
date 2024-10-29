(function() {
    'use strict';

    const actualUrl = window.location.href;
    const nextLessonButton = document.getElementsByClassName("bootcamp-next-button")[0];

    if (nextLessonButton) {
        const parts = actualUrl.split('/');
        const lessonName = parts[4];
        const lessonId = parts[6];

        fetch(`https://cursos.alura.com.br/course/${lessonName}/task/${lessonId}/mark-video`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'Cookie': document.cookie
            }
        });

        setTimeout(() => nextLessonButton.click(), 0);
    } else {
    }
})();
