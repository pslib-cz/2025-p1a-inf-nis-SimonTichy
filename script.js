    // Mobile menu
    const menuBtn = document.getElementById('menuBtn');
    const nav = document.getElementById('nav');
    menuBtn.addEventListener('click', () => {
        const open = nav.classList.toggle('open');
        menuBtn.setAttribute('aria-expanded', open);
    });

    // Diagram modal
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modalImage');

    document.querySelectorAll('.diagram-card').forEach(card => {
        const open = () => {
            modalImg.src = card.querySelector('img').src;
            modal.classList.add('open');
            document.body.style.overflow = 'hidden';
        };
        card.addEventListener('click', open);
        card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
    });

    const closeModal = () => {
        modal.classList.remove('open');
        document.body.style.overflow = '';
    };
    modal.addEventListener('click', closeModal);
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });