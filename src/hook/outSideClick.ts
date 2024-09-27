import { useEffect } from 'react';

export default function useOutsideClick(
     ref: React.RefObject<HTMLElement>,
     callback: () => void
    ) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // Si le clic est à l'extérieur de l'élément référencé (ref)
      if (ref.current && !ref.current.contains(event.target as Node )) {
        callback();
      }
    }

    // Ajouter l'événement 'click' au document
    document.addEventListener('mousedown', handleClickOutside);
    
    // Nettoyer l'événement lorsque le composant est démonté
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback]);
}
