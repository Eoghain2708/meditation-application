import { useAuth } from "../../contexts/authContext";
import "../styles/authPages.css";
import { useState, useEffect } from "react";
import updateUser from "../../api/users/updateUser";
import { useNavigate } from "react-router-dom";

export default function EditInformationPage() {
  const { currentUser, setCurrentUser } = useAuth();
  const [bio, setBio] = useState("");
  const [avatar, setAvatar] = useState<File | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function updateUser() {
      if (currentUser) {
        setBio(currentUser.bio || "");
      }
    }
    updateUser();
  }, [currentUser]);

  async function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault();

    try {
      const updatedUser = await updateUser(bio, avatar);
      setCurrentUser(updatedUser);
      navigate("/meditation-sessions");
    } catch {
      alert("Error updating profile");
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2 className="pb-3">Edit Profile</h2>

        <form className="auth-form" onSubmit={handleSubmit}>
          <input
            className="auth-input"
            type="file"
            accept="image/*"
            onChange={(e) => {
              if (e.target.files?.[0]) {
                setAvatar(e.target.files[0]);
              }
            }}
          />
          <p className="text-sm">Bio:</p>
          <textarea
            className="auth-input"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          >
            {bio}
          </textarea>

          <button className="auth-button">Update</button>
        </form>
      </div>
    </div>
  );
}
