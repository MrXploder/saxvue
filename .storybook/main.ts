import type { StorybookConfig } from "@storybook/vue3-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx|mdx)"],
  addons: ["@storybook/addon-essentials", "@storybook/addon-interactions"],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  viteFinal: async (config) => {
    config.css = {
      ...config.css,
      preprocessorOptions: {
        sass: {
          api: "modern-compiler" as const,
        },
        scss: {
          api: "modern-compiler" as const,
        },
      },
    };
    return config;
  },
};

export default config;
