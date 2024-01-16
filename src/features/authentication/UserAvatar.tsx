import { useEffect, useState } from "react";
import { useUser } from "./useUser";

function UserAvatar() {
  const [userName, setUsername] = useState("Client");
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      const { firstname } = user.user_metadata;
      setUsername(firstname);
    }
  }, [user]);

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
      >
        <g clip-path="url(#clip0_675_423)">
          <path
            d="M28 55.5625C12.8012 55.5625 0.4375 43.1988 0.4375 28C0.4375 12.8012 12.8012 0.4375 28 0.4375C43.1988 0.4375 55.5625 12.8012 55.5625 28C55.5625 43.1988 43.1988 55.5625 28 55.5625Z"
            fill="#F2F1EE"
          />
          <path
            d="M28 0.875C42.9572 0.875 55.125 13.0428 55.125 28C55.125 42.9572 42.9572 55.125 28 55.125C13.0428 55.125 0.875 42.9572 0.875 28C0.875 13.0428 13.0428 0.875 28 0.875ZM28 0C12.5353 0 0 12.5353 0 28C0 43.4647 12.5353 56 28 56C43.4647 56 56 43.4647 56 28C56 12.5353 43.4647 0 28 0Z"
            fill="#28231C"
          />
          <path
            d="M28 25.8265C31.7278 25.8265 34.7497 22.8649 34.7497 19.2115C34.7497 15.5581 31.7278 12.5965 28 12.5965C24.2722 12.5965 21.2502 15.5581 21.2502 19.2115C21.2502 22.8649 24.2722 25.8265 28 25.8265Z"
            fill="#FDBD8E"
          />
          <path
            d="M39.6586 39.4432C39.6586 33.1327 34.4383 28.0175 28.0001 28.0175C21.5618 28.0175 16.3416 33.1327 16.3416 39.4432H39.6586Z"
            fill="#FDBD8E"
          />
        </g>
        <defs>
          <clipPath id="clip0_675_423">
            <rect width="56" height="56" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <span className="font-sans text-lg font-semibold text-txt-main">
        {userName}
      </span>
    </>
  );
}

export default UserAvatar;
