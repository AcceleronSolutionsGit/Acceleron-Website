module.exports = {
  apps: [
    {
      name: "acceleron-elevate",
      script: "./.output/server/index.mjs",
      instances: "max",
      exec_mode: "cluster",
      max_memory_restart: "500M",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
        HOST: "0.0.0.0",
        VITE_BASE_PATH: "/acceleron",
      },
    },
  ],
};
