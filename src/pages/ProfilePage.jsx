import { useParams } from "react-router-dom";

const ProfilePage = () => {
  const params = useParams();

  return (
    <>
      <div className="text-5xl h-screen flex items-center justify-center flex-col w-screen">
        <h1 className="tracking-wider font-serif">Profile Page</h1>
        <p className="text-xl font-bold mt-2 text-red-600">
          *{params.username}*
        </p>
      </div>
    </>
  );
};

export default ProfilePage;
