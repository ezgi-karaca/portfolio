import { useTranslation } from "../contexts/TranslateContext";

const Profile = () => {
  const { translate } = useTranslation();

  return (
    <div className="px-6 sm:px-10 lg:px-44 flex flex-col w-full p-10 mx-auto">
      <h2 className="px-6 text-3xl font-normal">{translate("profile")}</h2>
      <div className="flex flex-col sm:flex-row mt-6 gap-6 sm:gap-10">
        <div className="flex flex-col w-full sm:w-1/2 px-6 gap-6">
          <h3 className="text-2xl font-normal text-purple-500">{translate("profile")}</h3>
          <div className="flex text-sm gap-12">
            <div className="flex flex-col gap-3">
              <h4 className="font-light">{translate("birthday")}</h4>
              <h4 className="font-light">{translate("residenceCity")}</h4>
              <h4 className="font-light">{translate("education")}</h4>
              <h4 className="font-light">{translate("preferedRole")}</h4>
            </div>
            <div className="flex flex-col gap-3">
              <p>04.09.1996</p>
              <p>Ankara</p>
              <p>{translate("school")}</p>
              <p>Frontend, UI</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full sm:w-3/4 max-w-md md:w-1/2 lg:w-2/3 mx-auto gap-6">
          <h3 className="text-2xl font-normal text-purple-500">{translate("aboutMe")}</h3>
          <p className="text-sm leading-relaxed">{translate("aboutTxt")}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
