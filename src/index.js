import * as core from '@actions/core';
import * as github from '@actions/github';

async function run() {
	try {
		const token = core.getInput('github-token', { required: true });
		const tag = core.getInput('tag', { required: true });
		const sha = github.context.sha;

		const client = new github.getOctokit(token);

		core.debug(`Tagging #${sha} with tag ${tag}`);
		await client.rest.git.createRef({
			owner: github.context.repo.owner,
			repo: github.context.repo.repo,
			ref: `refs/tags/${tag}`,
			sha: sha
		});
	} catch (error) {
		core.error(error);
		core.setFailed(error.message);
	}
}

run();
