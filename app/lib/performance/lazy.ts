export function observeElements(
  selector: string,
  callback: (element: Element) => void,
  options?: IntersectionObserverInit
) {
  if (typeof window === 'undefined') return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        callback(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: '50px',
    ...options,
  });

  document.querySelectorAll(selector).forEach((el) => {
    observer.observe(el);
  });

  return observer;
}