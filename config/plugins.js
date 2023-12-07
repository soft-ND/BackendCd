module.exports = ({ env }) => ({
    "vercel-deploy": {
      enabled: true,
      config: {
        deployHook:
          "https://vercel.com/nilspinedas-projects/strapi-cd-2/9rMbLdfCFkQ7bfJpQEyZQTQeVmoT",
        apiToken: "8rKiPIolgJX9H0myR8Q9T0NF",
        appFilter: "strapi-cd-2",
        teamFilter: "nilspineda",
        roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
      },
    },
  });