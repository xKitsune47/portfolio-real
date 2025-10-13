import { useEffect, useState } from "react";

interface Activity {
  id: string;
  name: string;
  type: number;
  state: string;
  session_id: string;
  created_at: number;
  details?: string;
}

const Activity = () => {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    const get = async () => {
      const res = await fetch(
        "https://api.lanyard.rest/v1/users/363372616335097858"
      );
      const data = await res.json();

      if (data) {
        setActivities(
          data?.data?.activities?.filter((act: Activity) => act.id !== "custom")
        );
        console.log(
          data?.data?.activities?.filter((act: Activity) => act.id !== "custom")
        );
      }
    };

    get();
  }, []);

  return activities.length > 0 ? (
    <ul className="list-disc px-6">
      {activities.map((act) => {
        return (
          act.id !== "custom" && (
            <li key={act.id}>
              <p className="font-semibold">{act.name}</p>
              <p>
                {act.name === "Spotify"
                  ? act.state.split(";").join(", ")
                  : act.state || "Secret stuff"}
              </p>
              {act.name === "Spotify" && <p>"{act.details}"</p>}
            </li>
          )
        );
      })}
    </ul>
  ) : (
    <p>Offline...</p>
  );
};

export default Activity;
