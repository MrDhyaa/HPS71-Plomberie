import { useEffect, useRef } from 'react';

const ANIMATION_CLASSES = ['animate-on-scroll', 'slide-left', 'slide-right', 'scale-in'];

export function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref };
}

export function useScrollAnimationMultiple() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const selector = ANIMATION_CLASSES.map(c => `.${c}`).join(', ');
    const children = container.querySelectorAll(selector);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    children.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return { ref };
}
