# Jigsaw Puzzle Games support website

This repository is a dependency-free static site. GitHub Pages can publish it directly from the repository root.

## Required values before publishing

1. Confirm that `twoswaglol.law@gmail.com` is the monitored public support address used in `assets/site.js`.
2. Confirm that the publisher line in `app-ads.txt` still exactly matches **AdMob > Apps > View all apps > app-ads.txt > How to set up app-ads.txt**.
3. Review the privacy policy and terms for the developer's actual business identity, practices, jurisdiction, and legal requirements. The text reflects the current app implementation but is not legal advice.

Search for unresolved values before publishing:

```powershell
rg "REPLACE_WITH|must be configured" .
```

## Publish with GitHub Pages

1. Commit and push the website files to the repository's default branch.
2. On GitHub, open **Settings > Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Select the default branch and the `/(root)` folder, then select **Save**.
5. Wait for the Pages deployment to finish and open the URL shown by GitHub.

For the current repository, the standard project-site URLs will normally be:

- Support: `https://moa1er.github.io/jigsaw-puzzle-challenge-website/`
- Privacy: `https://moa1er.github.io/jigsaw-puzzle-challenge-website/privacy/`
- Terms: `https://moa1er.github.io/jigsaw-puzzle-challenge-website/terms/`
- Account deletion: `https://moa1er.github.io/jigsaw-puzzle-challenge-website/delete-account/`

Use the last three URLs as the matching EAS environment values and Play Console account-deletion URL.

## Important app-ads.txt hostname requirement

AdMob discovers `app-ads.txt` at the root of the hostname in the developer website URL. A GitHub project site publishes this repository's file at:

`https://moa1er.github.io/jigsaw-puzzle-challenge-website/app-ads.txt`

but AdMob may look for:

`https://moa1er.github.io/app-ads.txt`

Therefore, before enabling production ads, use one of these supported layouts:

- Assign a custom domain to this Pages site, so `https://your-domain.example/app-ads.txt` is at the hostname root; or
- Publish the site from a `Moa1er.github.io` user-site repository, where `app-ads.txt` is at `https://moa1er.github.io/app-ads.txt`.

Add the final root website URL to **Play Console > Store presence > Store settings > Store listing contact details > Developer website**, then ask AdMob to check the file.

## Local preview

From the repository root:

```powershell
npx serve .
```

The site has no cookies, analytics, build tools, package dependencies, or server-side data collection. The external deletion form creates a pre-filled `mailto:` request; it does not transmit form values by itself.
