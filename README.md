# action-github-tag

_action-github-tag_ is a workflow for [GitHub Actions] used by the [fundamend.dev] ecosystem.
It tags the head of the repository with the supplied tag.

## Usage

In your repository, create a workflow that uses _action-github-tag_, like so:

```yaml
name: Tag

on: [push]

jobs:
  release:
    runs-on: ubuntu-latest
    steps:
      - name: Tag
        uses: fundamend/action-github-tag@main
        with:
          tag: '0.0.1'
          github-token: ${{ secrets.GITHUB_TOKEN }}
```

The action takes the following inputs:

| Key              | Description                    |
| ---------------- | ------------------------------ |
| `tag`\*          | The tag that should be created |
| `github-token`\* | Your GitHub token              |

The \* indicates mandatory input.

## License

[MIT]

[fundamend.dev]: https://fundamend.dev
[github actions]: https://docs.github.com/en/actions
[github]: https://github.com/
[mit]: https://choosealicense.com/licenses/mit/
