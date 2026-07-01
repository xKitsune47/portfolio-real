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
  const [albumImage, setAlbumImage] = useState<string>("");

  useEffect(() => {
    const get = async () => {
      const res = await fetch(
        "https://api.lanyard.rest/v1/users/363372616335097858",
      );
      const data = await res.json();

      if (data) {
        setActivities(
          data?.data?.activities?.filter((act: Activity) =>
            act.id.includes("spotify"),
          ),
        );
        setAlbumImage(data?.data?.spotify?.album_art_url);
      }
    };

    get();
  }, []);

  return activities.length > 0 ? (
    <p className="pt-2">
      {activities.map((act) => {
        return (
          act.id !== "custom" && (
            <div className="flex flex-row gap-8 max-md:justify-center">
              <img src={albumImage} className="h-24" />
              <p key={act.id} className="flex flex-col justify-center">
                <span className="text-sm">
                  {act.state.split(";").join(", ")}
                </span>
                <span className="font-semibold">"{act.details}"</span>
              </p>
            </div>
          )
        );
      })}
    </p>
  ) : (
    <p>Nothing ¯\_(ツ)_/¯</p>
  );
};

export default Activity;
