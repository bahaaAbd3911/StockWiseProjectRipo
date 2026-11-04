// Import style
import { ClientProfilePageConatinerClass } from "./ClientProfilePage.module.css";

// Import Style
import UserSettings from "../../../Components/UserSettings/UserSettings";
import SearchBar from "../../../Components/SearchBar/SearchBar";

function ClientProfilePage() {
  return (
    <>
      <div className={ClientProfilePageConatinerClass}>
        <UserSettings />
        <SearchBar value={0} />
      </div>
    </>
  );
}

export default ClientProfilePage;
