
export type FormData = {
    title: string;
    description: string;
    photos: string[];
    category: string;
    price: string;
    phone: string;
    whatsapp: string;
    location: string;
  };
  
  export type Errors = {
    title?: string;
    description?: string;
    category?: string;
    price?: string;
    phone?: string;
    whatsapp?: string;
    location?: string;
    photos?: string; // Ajouté pour les erreurs de photos
  };
  