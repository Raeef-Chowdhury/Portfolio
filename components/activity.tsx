import Heading from "./heading";
import { GitHubCalendar } from "react-github-calendar";
interface GitHubEvent {
  id: string;
  type: string;
  actor: {
    id: number;
    login: string;
    display_login: string;
    gravatar_id: string;
    url: string;
    avatar_url: string;
  };
  repo: {
    id: number;
    name: string;
    url: string;
  };
  payload: {
    repository_id?: number;
    push_id?: number;
    ref?: string;
    head?: string;
    before?: string;
    action?: string;
  };
  public: boolean;
  created_at: string;
}
async function Activity() {
  const res = await fetch(
    "https://api.github.com/users/raeef-chowdhury/events/public"
  );
  const data = await res.json();
  console.log(data);
  const commitShas = data
    .filter((event: GitHubEvent) => event.type === "PushEvent")
    .slice(0, 3)
    .map((event: GitHubEvent) => event.payload.head);

  const commitRepos = data
    .filter((event: GitHubEvent) => event.type === "PushEvent")
    .slice(0, 3)
    .map((event: GitHubEvent) => event.repo.name.split("/")[1]);

  // Fetch details for all 3 commits
  const commitDetailsPromises = commitShas.map(
    (sha: string, index: string | number) =>
      fetch(
        `https://api.github.com/repos/raeef-chowdhury/${commitRepos[index]}/commits/${sha}`
      ).then((res) => res.json())
  );

  // Wait for all requests to complete
  const commitDetails = await Promise.all(commitDetailsPromises);

  console.log(commitDetails);
  // Now you have an array with details for all 3 commits
  // Each item contains: message, stats (additions/deletions), files, etc.
  return (
    <>
      <div
        id="activity"
        className="max-w-[1440px] text-center mx-auto mt-[18rem] flex flex-col items-center"
      >
        <Heading content="Activity" />

        <div className="mt-[6rem]">
          <GitHubCalendar
            username="raeef-chowdhury"
            blockSize={12}
            blockMargin={6}
            fontSize={18}
            showColorLegend={false}
            showTotalCount={true}
            colorScheme="dark"
            labels={{
              totalCount: "{{count}} contributions this year",
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Activity;
