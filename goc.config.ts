const config = {
  endpoint:
    process.env.HASURA_ENDPOINT ||
    "https://hasura-ai-girlfirend-1.weweknow.com/v1/graphql",
  headers: {
    "x-hasura-admin-secret": process.env.HASURA_ADMIN_SECRET || "admin_secret",
  },
};

export default config;
