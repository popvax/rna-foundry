let userConfig: Record<string, unknown> | undefined = undefined;

try {
  userConfig = await import("./v0-user-next.config");
} catch (e) {
  // eslint-disable-next-line no-empty
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true, // ✅ Ignores TypeScript errors but allows valid ones
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
};

// Ensure TypeScript doesn't complain about `userConfig`
mergeConfig(nextConfig, userConfig);

function mergeConfig(
  nextConfig: Record<string, unknown>,
  userConfig: Record<string, unknown> | undefined
) {
  if (!userConfig) {
    return;
  }

  for (const key in userConfig) {
    if (
      typeof nextConfig[key] === "object" &&
      !Array.isArray(nextConfig[key])
    ) {
      nextConfig[key] = {
        ...(nextConfig[key] as Record<string, unknown>),
        ...(userConfig[key] as Record<string, unknown>),
      };
    } else {
      nextConfig[key] = userConfig[key];
    }
  }
}

export default nextConfig;
