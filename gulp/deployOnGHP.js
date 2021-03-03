import ghpages from "gh-pages";
import { Path } from "./_const.js";

export function deployOnGitHubPages(cb) {
    ghpages.publish(
        Path.PAGE.build,
        {
            branch: "master-update",
        },
        cb()
    );
}
