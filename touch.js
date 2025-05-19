document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.neumorphic-button');
  
    buttons.forEach(button => {
      let startX = 0;
      let startY = 0;
  
      button.addEventListener('touchstart', (e) => {
        const touch = e.touches[0];
        startX = touch.clientX;
        startY = touch.clientY;
      });
  
      button.addEventListener('touchend', (e) => {
        const touch = e.changedTouches[0];
        const deltaX = touch.clientX - startX;
        const deltaY = touch.clientY - startY;
  
        const absX = Math.abs(deltaX);
        const absY = Math.abs(deltaY);
  
        let direction = '';
  
        if (Math.max(absX, absY) > 30) {
          if (absX > absY) {
            direction = deltaX > 0 ? 'swipe-right' : 'swipe-left';
          } else {
            direction = deltaY > 0 ? 'swipe-down' : 'swipe-up';
          }
  
          button.classList.add(direction);
          setTimeout(() => button.classList.remove(direction), 400);
        }
      });
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.neumorphic-button');
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        button.classList.add('glow');
        setTimeout(() => button.classList.remove('glow'), 600);
      });
    });
  });
  button.addEventListener('click', () => {
    button.classList.add('glow');
    setTimeout(() => button.classList.remove('glow'), 600);
  });
  document.querySelectorAll('.neumorphic-button').forEach(button => {
    button.addEventListener('click', () => {
      button.classList.add('glow');
      setTimeout(() => button.classList.remove('glow'), 600);
    });
  });
  