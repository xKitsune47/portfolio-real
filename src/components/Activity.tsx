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
          ) ?? [],
        );
        setAlbumImage(data?.data?.spotify?.album_art_url ?? "");
      }
    };

    get().catch(() => setActivities([]));
  }, []);

  const isListening = activities.length > 0;

  return (
    <p className="flex min-h-10 flex-wrap items-center gap-x-3 gap-y-2 text-sm">
      <span
        aria-hidden="true"
        className={`h-2 w-2 rounded-xs ${
          isListening ? "bg-foxfire motion-safe:animate-pulse" : "bg-paper/30"
        }`}
      />
      <span className="text-paper/70">Listening now</span>
      {isListening ? (
        activities.map(
          (act) =>
            act.id !== "custom" && (
              <span key={act.id} className="flex items-center gap-3">
                {albumImage && (
                  <img src={albumImage} alt="" className="h-10 w-10" />
                )}
                <span>
                  {act.state.split(";").join(", ")}
                  {" — "}
                  <span className="font-semibold">"{act.details}"</span>
                </span>
              </span>
            ),
        )
      ) : (
        <span>Nothing ¯\_(ツ)_/¯</span>
      )}
    </p>
  );
};

export default Activity;
