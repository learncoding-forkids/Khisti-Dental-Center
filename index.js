document.addEventListener('DOMContentLoaded', () => {

    const siteHeader = document.querySelector('.site-header');

    if (siteHeader) {

        function updateHeaderState() {
            if (window.scrollY > 10) {
                siteHeader.classList.add('header-compact');
            } else {
                siteHeader.classList.remove('header-compact');
            }
        }

        window.addEventListener('scroll', updateHeaderState, { passive: true });
        updateHeaderState();
    }


    const showMoreBtn = document.getElementById('showMoreBtn');
    const moreInfo = document.getElementById('moreInfo');

    if (showMoreBtn && moreInfo) {

        showMoreBtn.addEventListener('click', () => {

            moreInfo.classList.toggle('show');

            if (moreInfo.classList.contains('show')) {
                showMoreBtn.textContent = 'SHOW LESS';
            } else {
                showMoreBtn.textContent = 'SHOW MORE';
            }

        });

    }

});
