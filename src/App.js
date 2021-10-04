import logo from "./logo.svg";
import "./App.css";
import Profile from "./profile/Profile";


function App() {
  return (
    <div>
      <Profile
        FullName="Anis Zariat"
        Bio="Trying to convert my professional career to a web developer"
      >
        {/* {"./profile/profile_photo.jpg"}     */}
        {
          "https://media-exp1.licdn.com/dms/image/C4E03AQEGn4aR9RPJ-Q/profile-displayphoto-shrink_800_800/0/1570271957012?e=1639008000&v=beta&t=gwV_V7DNg6LMiNnCNWhqTR7jGcobv_axCAhchwsSDmA"
        }
      </Profile>
    </div>
  );
}

export default App;
