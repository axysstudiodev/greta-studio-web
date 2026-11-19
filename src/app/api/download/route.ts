import { NextRequest, NextResponse } from 'next/server';

const GITHUB_LATEST_RELEASE_API =
  'https://api.github.com/repos/axysstudiodev/greta-studio-releases/releases/latest';
const FALLBACK_RELEASES_URL =
  'https://github.com/axysstudiodev/greta-studio-releases/releases/latest';

interface GitHubAsset {
  name: string;
  browser_download_url: string;
}

interface GitHubReleaseResponse {
  assets?: GitHubAsset[];
}

export async function GET(request: NextRequest) {
  const platform = request.nextUrl.searchParams.get('platform')?.toLowerCase();

  try {
    const res = await fetch(GITHUB_LATEST_RELEASE_API, {
      headers: {
        Accept: 'application/vnd.github+json',
        'User-Agent': 'Greta-Studio-Web',
      },
      next: { revalidate: 300 },
    });

    if (!res.ok) {
      return NextResponse.redirect(FALLBACK_RELEASES_URL);
    }

    const data = (await res.json()) as GitHubReleaseResponse;
    const assets = data.assets ?? [];

    let targetAsset: GitHubAsset | undefined;

    if (platform === 'windows') {
      targetAsset =
        assets.find((a) => a.name.toLowerCase().endsWith('-setup.exe')) ??
        assets.find((a) => a.name.toLowerCase().endsWith('.exe')) ??
        assets.find((a) => a.name.toLowerCase().endsWith('.msi'));
    } else if (platform === 'mac' || platform === 'macos') {
      targetAsset =
        assets.find((a) => a.name.toLowerCase().endsWith('.dmg')) ??
        assets.find((a) => a.name.toLowerCase().endsWith('.app.tar.gz'));
    }

    if (targetAsset?.browser_download_url) {
      return NextResponse.redirect(targetAsset.browser_download_url);
    }
  } catch {
    // Fallback to latest release page if GitHub API is unreachable
  }

  return NextResponse.redirect(FALLBACK_RELEASES_URL);
}
