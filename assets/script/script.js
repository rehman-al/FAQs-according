document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll('.data .question');

    questions.forEach(question => {
        const plusIcon = question.querySelector('.plus');
        const minusIcon = question.querySelector('.minus');
        const answer = question.nextElementSibling;

        plusIcon.addEventListener('click', function() {
            questions.forEach(q => {
                const a = q.nextElementSibling;
                const p = q.querySelector('.plus');
                const m = q.querySelector('.minus');
                if (a !== answer) {
                    a.style.display = 'none';
                    p.style.display = 'block';
                    m.style.display = 'none';
                }
            });

            answer.style.display = 'block';
            plusIcon.style.display = 'none';
            minusIcon.style.display = 'block';
        });

        minusIcon.addEventListener('click', function() {
            answer.style.display = 'none';
            plusIcon.style.display = 'block';
            minusIcon.style.display = 'none';
        });
    });
});
