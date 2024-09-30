import ProfilePage from "./UserPage"; // Assurez-vous que le chemin est correct

const UserProfile = () => {
  const user = {
    name: "Aristide Dongo",
    email: "aristide.dongo@example.com",
    phone: "+225 07 00 00 00",
    profileImage: "",
  };

  const posts = [
    {
      id: 1,
      title: "Appartement à louer",
      price: "200000",
      image: "",
    },
    {
      id: 2,
      title: "Voiture à vendre",
      price: "100000",
      image: "",
    },
  ];

  return <ProfilePage user={user} posts={posts} />;
};

export default UserProfile;
