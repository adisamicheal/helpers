const smoothScroll = (
    target: HTMLElement | string,
    options?: object
  ): void => {
    if (typeof target === 'string') {
      target = document.querySelector(target) as HTMLElement
      target.scrollIntoView({
        behavior: 'smooth',
        ...options,
      })
    } 
    return
  }

export default smoothScroll;