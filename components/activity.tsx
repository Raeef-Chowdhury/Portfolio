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
interface Commit {
  sha: string;
  node_id: string;
  commit: {
    author: {
      name: string;
      email: string;
      date: string;
    };
    committer: {
      name: string;
      email: string;
      date: string;
    };
    message: string;
    tree: {
      sha: string;
      url: string;
    };
    url: string;
    comment_count: number;
    verification: {
      verified: boolean;
      reason: string;
      signature: string | null;
      payload: string | null;
      verified_at: string | null;
    };
  };
  url: string;
  html_url: string;
  comments_url: string;
  author: GitHubUser;
  committer: GitHubUser;
  parents: Array<{
    sha: string;
    url: string;
    html_url: string;
  }>;
  stats: {
    total: number;
    additions: number;
    deletions: number;
  };
  files: Array<{
    sha: string;
    filename: string;
    status: string;
    additions: number;
    deletions: number;
    changes: number;
    blob_url: string;
    raw_url: string;
    contents_url: string;
    patch?: string;
  }>;
}
interface GitHubUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  user_view_type: string;
  site_admin: boolean;
}
async function Activity() {
  const headers: HeadersInit = {};

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  try {
    const res = await fetch(
      "https://api.github.com/users/raeef-chowdhury/events",
      {
        headers,
        next: { revalidate: 0 },
      }
    );

    if (!res.ok) {
      throw new Error("GitHub API failed");
    }

    const data = await res.json();

    const commitShas = data
      .filter((event: GitHubEvent) => event.type === "PushEvent")
      .slice(0, 3)
      .map((event: GitHubEvent) => event.payload.head);

    const commitRepos = data
      .filter((event: GitHubEvent) => event.type === "PushEvent")
      .slice(0, 3)
      .map((event: GitHubEvent) => event.repo.name.split("/")[1]);

    const commitDetailsPromises = commitShas.map((sha: string, index: number) =>
      fetch(
        `https://api.github.com/repos/raeef-chowdhury/${commitRepos[index]}/commits/${sha}`,
        { headers }
      ).then((res) => res.json() as Promise<Commit>)
    );
    // Wait for all requests to complete
    const commitDetails = await Promise.all(commitDetailsPromises);

    return (
      <>
        <div
          id="activity"
          className="max-w-[1440px] text-center mx-auto mt-[18rem] flex flex-col items-center"
        >
          <Heading content="Activity" />
          <div className="mt-[6rem] max-[988px]:hidden">
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

          <div className="mt-[9rem] w-full max-w-[1920px]">
            <h3 className="text-[2.4rem] font-semibold text-text mb-[2.4rem]">
              Recent Work{" "}
            </h3>
            <div className="grid grid-cols-3 gap-[4.2rem] max-[844px]:grid-cols-1 max-[844px]:justify-items-center">
              {commitDetails.map((commit: Commit, index: number) => (
                <a
                  key={index}
                  href={commit.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group border max-w-[424px] max-[644px]:w-[244px] mx-[3rem] border-slate-700/70 border-2 hover:border-emerald-600 bg-slate-900/40 hover:bg-slate-900/60 rounded-xl p-[2.4rem] transition-all duration-200"
                >
                  <div className="flex flex-col gap-[2rem]">
                    <div className="flex flex-col items-center text-center gap-[1.2rem]">
                      <div className="flex items-center gap-[1rem]">
                        <span className="text-[1.8rem] text-emerald-500 font-medium">
                          {commitRepos[index]}
                        </span>
                      </div>
                      <p
                        className={`${
                          commit.commit.message.length > 55
                            ? ""
                            : "mt-[0.8rem] mb-[0.8rem]"
                        } max-w-[324px] text-[1.6rem] text-text leading-relaxed group-hover:text-white transition-colors`}
                      >
                        {commit.commit.message.length > 70
                          ? `${commit.commit.message.substring(0, 70)}...`
                          : commit.commit.message}
                      </p>
                    </div>

                    <div className=" flex items-center justify-center gap-[2.4rem] text-[1.4rem] pt-[1.6rem] border-t border-slate-700/50">
                      <div className="flex items-center gap-[0.8rem]">
                        <span className="text-green-400 font-medium">
                          +{commit.stats.additions}
                        </span>
                        <span className="text-slate-600">/</span>
                        <span className="text-red-400 font-medium">
                          -{commit.stats.deletions}
                        </span>
                      </div>

                      <span className="text-slate-400">
                        {commit.files.length}{" "}
                        {commit.files.length === 1 ? "file" : "files"} changed
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  } catch (error) {
    console.error("Failed to load GitHub activity:", error);
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
        <div className="max-w-[1440px] text-center mx-auto mt-[6rem]">
          <p className="text-red-400 text-[1.8rem]">
            Sorry! Could not load Recent Commits,
          </p>
        </div>
      </>
    );
  }
}

export default Activity;
