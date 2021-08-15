export class HasuraClient {
  constructor(private readonly HASURA_API_ENDPOINT: string, private readonly HASURA_ADMIN_SECRET: string) {}

  getConfig() {
    return {
      apiEndpoint: this.HASURA_API_ENDPOINT,
      adminSecret: this.HASURA_ADMIN_SECRET,
    };
  }
}
