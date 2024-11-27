export interface ProfileProps {
    user: {
      name: string;
      email: string;
      phone: string;
      profileImage: string;
    };
    posts: Array<{
      id: number;
      title: string;
      price: string;
      image: string;
    }>;
  }