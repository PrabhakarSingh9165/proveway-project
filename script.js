const cards = document.querySelectorAll('.card');
const bodies = document.querySelectorAll('.card-body');
const popover = document.querySelector('#popover-tag');
const card2 = document.querySelector('#card-2');

cards.forEach((card, index) => {
    card.addEventListener('click', () => {
        // Reset all cards
        cards.forEach((c, i) => {
            c.classList.remove('active');
            bodies[i].style.display = 'none';

            // Uncheck all radios
            const radio = c.querySelector('.unit-radio');
            if (radio) {
                radio.checked = false;
            }
        });

        // Activate clicked card
        card.classList.add('active');
        bodies[index].style.display = 'block';

        // Check radio inside clicked card
        const radio = card.querySelector('.unit-radio');
        if (radio) {
            radio.checked = true;
        }

        // Popover logic
        if (index === 1) {
            popover.style.display = 'block';
            card2.style.marginTop = "4px";
        } else {
            popover.style.display = 'none';
            card2.style.marginTop = "25px";
        }
    });
});

