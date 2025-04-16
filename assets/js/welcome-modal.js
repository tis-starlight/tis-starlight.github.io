document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('welcomeModal');
  const closeBtn = modal.querySelector('.modal-close');
  let progressAnimation,
    isClosing = false;

  if (!sessionStorage.getItem('modalShown')) {
    showModal();
    sessionStorage.setItem('modalShown', 'true');
  }

  function showModal() {
    modal.style.display = 'flex';
    document.body.classList.add('modal-open');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
    startProgressBar();
  }

  function closeModal() {
    if (isClosing) return;
    isClosing = true;

    const modalContent = modal.querySelector('.modal-content');
    const progressBar = modal.querySelector('.progress-bar');

    // Cancel and preserve current state
    const animations = modalContent
      .getAnimations()
      .concat(progressBar.getAnimations());
    Promise.all(animations.map((a) => (a.finish ? a.finish() : a.finished)))
      .then(() => {
        // Get final computed state after animations
        const computedStyle = getComputedStyle(progressBar);
        const currentTransform = computedStyle.transform;
        const currentScale =
          currentTransform === 'none'
            ? 1
            : parseFloat(currentTransform.split(',')[0].replace('matrix(', ''));

        // Set explicit styles before exit animation
        progressBar.style.transform = `scaleX(${currentScale})`;
        modalContent.style.opacity = '1';
        modalContent.style.transform = 'translateY(0)';

        // Create exit animations
        const modalExitAnim = modalContent.animate(
          [
            { opacity: 1, transform: 'translateY(0)' },
            { opacity: 0, transform: 'translateY(20px)' },
          ],
          { duration: 200, easing: 'ease-in' }
        );

        const progressExitAnim = progressBar.animate(
          [
            { transform: `scaleX(${currentScale})` },
            { transform: 'scaleX(0)' },
          ],
          { duration: 200, easing: 'linear' }
        );

        return Promise.all([modalExitAnim.finished, progressExitAnim.finished]);
      })
      .then(() => {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
        document.body.style.overflow = '';
        isClosing = false;
      })
      .catch(() => {
        isClosing = false;
      });
  }

  function startProgressBar() {
    const duration =
      parseFloat(getComputedStyle(modal).getPropertyValue('--timer-duration')) *
      1000;
    const progressBar = modal.querySelector('.progress-bar');

    // Reset progress state
    progressBar.style.transform = 'scaleX(1)';

    progressAnimation = progressBar.animate(
      [{ transform: 'scaleX(1)' }, { transform: 'scaleX(0)' }],
      {
        duration,
        easing: 'linear',
        fill: 'both',
      }
    );

    progressAnimation.onfinish = () => !isClosing && closeModal();
    progressAnimation.oncancel = () => (isClosing = false);
  }

  function handleClickOutside(e) {
    if (e.target === modal) closeModal();
  }

  function handleEscape(e) {
    if (e.key === 'Escape') closeModal();
  }

  // Event listeners
  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', handleClickOutside);
  document.addEventListener('keydown', handleEscape);
});
