import React, { useState, useEffect } from "react";
import axios from "axios";
import ProfileViewerForm from "./ProfileViewerForm";

const ProfileViewer = ({ user }) => {
  const [profile, setProfile] = useState(null);
  const [url, setUrl] = useState();

  const search = (user) => {
    setUrl(`https://api.github.com/users/${user}`);
  };
console.log(user)
  useEffect(() => {
    async function loadProfile() {
      const res = await axios.get(url);
      setProfile(res.data);
    }
    loadProfile();
  }, [url]);



  return (
    <div>
      <h3>Profile Viewer</h3>

      {profile ? <h4> Hi {profile.name}</h4> : <h4> "loading.. "</h4>}
      <ProfileViewerForm search={search} />
    </div>
  );
};

export default ProfileViewer;
